const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

class VuetifyRules {
    webpackRules() {
        return {
            test: /\.s(c|a)ss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'),
                        sassOptions: {
                            fiber: require('fibers'),
                            indentedSyntax: true, // optional
                        },
                    },
                },
            ],
        };
    }
}

mix.extend('vuetify-rules', new VuetifyRules());

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.js')],
    })
    .extract()
    ;
