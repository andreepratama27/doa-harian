import vercel from '@sveltejs/adapter-vercel';
import netlify from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
    adapter: netlify({
      edge: false,
      split: true,
    })
		// adapter: vercel({
		// 	edge: false,
		// 	external: [],
		// 	split: false,
		// })
	}
};

export default config;
