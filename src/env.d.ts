/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GHOST_URL: string;
  readonly PUBLIC_GHOST_CONTENT_API_KEY: string;
  readonly PUBLIC_GHOST_API_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 