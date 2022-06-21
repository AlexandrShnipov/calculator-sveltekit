import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        //target: '#svelte',
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        prerender: {
            default: true,
        },
        paths: {
            base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
        },
    }
};

export default config;
