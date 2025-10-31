
const {getFortune} = require('./fortune')
const c = require('ansi-colors')
;(async () => {
    
    try {
        const fortune = await getFortune()
        console.log(c.bgGreen.black('Your fortune is: ' + fortune))

    } catch (err) {
        console.error(c.red('Something went wrong:'), err)
    }
})()
// console.log(getFortune())