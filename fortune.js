

async function getFortune() {
    const c = require('ansi-colors')
    const fortunes = require('./fortunes.json')
    const rand = fortunes[Math.floor(Math.random() * fortunes.length)]
    return c.bgCyan.black(rand)
}
module.exports = {getFortune}