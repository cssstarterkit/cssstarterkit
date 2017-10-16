//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');

elixir(function (mix) {

    mix.sass('./assets/sass/app.scss', './dist/css/postcss/app.min.css')
        .postcss('app.min.css', {
            plugins: [
                require('lost')
            ],
            output: './dist/css/',
            srcDir: './dist/css/postcss/'
        })
        .styles([
            './assets/sass/vendor/jam-icons-css/jam-icons.css',
            './assets/sass/vendor/normalize/normalize.css'
        ], './dist/css/vendor.min.css');

    mix.scripts('./assets/js/script.js', './dist/js/app.min.js')
    mix.scripts([
        './assets/js/vendor/jquery-3.2.1.min.js',
        './assets/js/vendor/modernizr-2.8.3.min.js',
        './assets/js/vendor/accordion-js/accordion.js',
        './assets/js/vendor/modaal-js/modaal.min.js'
    ], './dist/js/vendor.min.js')
});
