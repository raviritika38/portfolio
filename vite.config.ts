import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function servePublicStaticPlugin(): Plugin {
  return {
    name: 'serve-public-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const cleanUrl = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
        if (cleanUrl !== '/' && cleanUrl !== '/index.html') {
          const publicFilePath = path.join(__dirname, 'public', cleanUrl);
          if (fs.existsSync(publicFilePath) && fs.statSync(publicFilePath).isFile()) {
            const ext = path.extname(publicFilePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.pdf': 'application/pdf',
              '.html': 'text/html; charset=utf-8',
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.svg': 'image/svg+xml',
            };
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            res.writeHead(200, {
              'Content-Type': contentType,
              'Content-Length': fs.statSync(publicFilePath).size,
            });
            fs.createReadStream(publicFilePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), servePublicStaticPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
