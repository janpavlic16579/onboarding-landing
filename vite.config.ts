import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // naloži env var-e (npr. GEMINI_API_KEY iz .env)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // IMPORTANT: GitHub Pages path (repo name)
    base: '/onboarding-landing/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    // Če tvoja koda bere process.env.*, to ohranimo
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
