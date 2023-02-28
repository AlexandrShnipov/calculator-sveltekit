import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
       repo: 'https://alexandrshnipov.github.io/calculator-sveltekit', // Update to point to your repository
        user: {
            name: 'Alexander', // update to use your name
            email: 'alexandershnipov@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);