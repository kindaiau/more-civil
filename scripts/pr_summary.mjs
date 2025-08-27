#!/usr/bin/env node

import { OpenAI } from 'openai';
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

// Check if required environment variables are present
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY is required');
  process.exit(1);
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Get environment variables
const changedFiles = process.env.CHANGED_FILES || '';
const prTitle = process.env.PR_TITLE || '';
const prBody = process.env.PR_BODY || '';
const baseRef = process.env.BASE_REF || 'main';
const headSha = process.env.HEAD_SHA || '';

async function getFileDiffs() {
  try {
    // Get the diff for each changed file
    const files = changedFiles.split(' ').filter(f => f.trim());
    const diffs = [];
    
    for (const file of files) {
      try {
        const diff = execSync(`git diff ${baseRef}...${headSha} -- "${file}"`, { 
          encoding: 'utf8',
          maxBuffer: 1024 * 1024 // 1MB buffer
        });
        if (diff.trim()) {
          diffs.push(`### ${file}\n\`\`\`diff\n${diff}\n\`\`\``);
        }
      } catch (error) {
        console.warn(`Could not get diff for ${file}:`, error.message);
      }
    }
    
    return diffs.join('\n\n');
  } catch (error) {
    console.warn('Could not get file diffs:', error.message);
    return `Changed files: ${changedFiles}`;
  }
}

async function generateSummary() {
  try {
    const fileDiffs = await getFileDiffs();
    
    const prompt = `Please analyze this pull request and provide a concise summary:

**PR Title:** ${prTitle}

**PR Description:** ${prBody}

**Changed Files:** ${changedFiles}

**File Changes:**
${fileDiffs}

Please provide:
1. A brief summary of what this PR does
2. Key changes made
3. Potential impact or benefits
4. Any notable technical details

Keep the summary clear, concise, and professional. Use markdown formatting.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that analyzes code changes and provides clear, concise summaries of pull requests. Focus on the technical aspects and business impact.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.3,
    });

    const summary = response.choices[0]?.message?.content || 'Could not generate summary.';
    
    // Add a header and footer to the summary
    const finalSummary = `## 🤖 AI-Generated PR Summary

${summary}

---
*This summary was automatically generated using AI. Please review the actual changes for accuracy.*`;

    // Write summary to file
    writeFileSync('pr-summary.md', finalSummary);
    console.log('✅ AI summary generated successfully');
    
  } catch (error) {
    console.error('Error generating summary:', error.message);
    
    // Fallback summary
    const fallbackSummary = `## 🤖 AI-Generated PR Summary

**PR Title:** ${prTitle}

**Changed Files:** ${changedFiles}

**Description:** ${prBody || 'No description provided.'}

---
*AI summary generation failed. This is a basic fallback summary.*`;
    
    writeFileSync('pr-summary.md', fallbackSummary);
    console.log('⚠️ Used fallback summary due to error');
  }
}

// Generate the summary
generateSummary().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});