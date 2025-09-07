/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SMTP_HOST: string;
  readonly SMTP_PORT: string;
  readonly SMTP_USER: string;
  readonly SMTP_PASS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}