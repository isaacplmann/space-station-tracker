const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
    preset: [
        'default',
        {
            discardComments: {
                removeAll: true,
            },
        },
    ],
});
module.exports = {
    plugins: [
        require('tailwindcss')('web/tailwind.config.js'),
        ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
        ...(process.env.NODE_ENV === 'production' ? [autoprefixer] : []),
    ],
};
