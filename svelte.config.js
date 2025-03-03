// svelte.config.js
import { sveltePreprocess } from 'svelte-preprocess';

/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: sveltePreprocess({
		pug: true,
    // ...svelte-preprocess options
  }),
  // ...other svelte options
};

export default config;

// import adapter from '@sveltejs/adapter-auto';
// import { sveltePreprocess } from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter(),
//   },
//   preprocess: sveltePreprocess({
//     pug: true, // Включаем поддержку Pug
//   }),
// };

// export default config;
