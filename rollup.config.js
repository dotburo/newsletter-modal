import pkg from './package.json';
import scss from 'rollup-plugin-scss';
import {terser} from 'rollup-plugin-terser';
import eslint from '@rollup/plugin-eslint';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const production = process.env.BUILD === 'production';

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
        nodeResolve(),
        scss({
            output: 'dist/bootstrapped.css',
        }),
        !production ? null : eslint(),
        !production ? null : terser()
    ].filter(p => p)
}];
