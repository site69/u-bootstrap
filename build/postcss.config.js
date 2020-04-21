module.exports = {
    plugins: [
        require('postcss-prefixer')({
            prefix: 'u-',
            ignore: []
        })
    ]
}