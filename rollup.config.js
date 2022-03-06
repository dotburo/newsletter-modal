import pkg from './package.json';
import scss from 'rollup-plugin-scss';
import {terser} from 'rollup-plugin-terser';
import eslint from '@rollup/plugin-eslint';

export default [{
    input: 'src/js/NewsletterButton.js',
    output: [{
        file: 'dist/NewsletterModal.js',
        format: 'es',
        name: 'NewsletterModal',
        banner: `/*! ${pkg.name} ${pkg.version} | ${pkg.author} !*/`,
        sourcemap: true
    }],
    plugins: [
        scss({
            output: 'dist/bootstrapped.css',
            outputStyle: process.env.BUILD === 'production' ? 'compressed' : null,
        }),
        eslint(),
        process.env.BUILD === 'production' ? terser() : null
    ]
}];
