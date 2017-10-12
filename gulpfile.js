//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');

elixir(function (mix) {

    mix.sass('./assets/sass/app.scss', './dist/css/postcss/')
        .postcss('app.css', {
            plugins: [
                require('lost')
            ],
            output: './dist/css/',
            srcDir: './dist/css/postcss/'
        })
        .styles([
            './assets/sass/vendor/normalize.css'
        ], './dist/css/vendor.css');

    mix.scripts('./assets/js/script.js', './public/js/app.js')

    mix.scripts([
        './assets/js/vendor/jquery-3.2.1.min.js',
        './assets/js/vendor/modernizr-2.8.3.min.js'
    ], './dist/js/vendor.js')
});
