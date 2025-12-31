import { Config } from '@remotion/cli/config';
// CDN injection used instead of build-time tailwind
// Actually for Vite + Tailwind v4 we just need to set the bundler.

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setConcurrency(2);
Config.setCodec('h264');

// NOTE: We need to register the bundler in the render command or via config if possible.
// In recent Remotion, it detects vite.config.ts?
// Actually simpler: we can't easily swap bundler in config.ts, we usually do it in the render command?
// Wait, Remotion docs say "If you have a vite.config.ts, Remotion will automatically use Vite."
// I have a vite.config.ts in the root? Let me check.
