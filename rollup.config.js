import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';
import {eslint} from 'rollup-plugin-eslint';

export default [{
    input: 'resources/js/NewsletterButton.js',
    output: [{
        file: 'dist/NewsletterModal.js',
        format: 'es',
        name: 'NewsletterModal',
        banner: `/*! ${pkg.name} ${pkg.version} | ${pkg.author} !*/`,
        sourcemap: true
    }],
    plugins: [
        eslint(),
        //terser()
    ]
}];
