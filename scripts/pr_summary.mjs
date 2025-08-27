import { execSync } from "node:child_process";
import fs from "node:fs";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const files = (process.env.CHANGED_FILES || "")
  .split("\n")
  .map(s => s.trim())
  .filter(Boolean)
  .slice(0, 40); // cap to keep prompt small

// Get a tight unified diff for each file (first 200 lines/file)
function getDiff(f) {
  try {
    execSync("git fetch origin --quiet", { stdio: "ignore" });
    const base = process.env.BASE_REF || "main";
    const cmd = `git --no-pager diff -U0 origin/${base}...${process.env.HEAD_SHA} -- "${f}" | sed -n '1,200p'`;
    return execSync(cmd, { encoding: "utf8" });
  } catch {
    return `No diff available for ${f}`;
  }
}

const diffs = files.map(f => `--- ${f}\n${getDiff(f)}`).join("\n\n");

const prompt = `
You are a senior engineer. Summarize this pull request clearly for a busy reviewer.

Constraints:
- 6–10 bullet points max.
- Call out breaking changes, public API changes, security implications, migrations.
- Include a short test plan.
- Include "Risk" (Low/Med/High) and "Rollback" steps.
- If HTML/CSS/JS for a simple website, note any accessibility or performance concerns.

PR title: ${process.env.PR_TITLE || "(no title)"}
PR body: ${process.env.PR_BODY || "(no body)"}

Changed files (${files.length}):
${files.join("\n")}

Diffs (truncated for length):
${diffs}
`;

const model = process.env.OPENAI_MODEL || "gpt-5";

const resp = await openai.chat.completions.create({
  model,
  messages: [
    { role: "system", content: "Be concise, accurate, and practical." },
    { role: "user", content: prompt }
  ],
  temperature: 0.2,
});

const out = `### 🤖 AI PR Summary

${resp.choices[0].message.content}

---

_Model: ${model} · Files summarized: ${files.length}_`;

fs.writeFileSync("pr-summary.md", out);
console.log("Wrote pr-summary.md");