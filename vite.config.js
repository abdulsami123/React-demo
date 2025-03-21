import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Directly use Tailwind with Vite

export default defineConfig({
  plugins: [react(), tailwindcss()], // Add Tailwind and React plugins
});