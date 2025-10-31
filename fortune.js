

async function getFortune() {
    const c = require('ansi-colors')
    const fortunes = require('./fortunes.json')
    const rand = c.green(fortunes[Math.floor(Math.random() * fortunes.length)])
    return c.bgCyan.black(`Your fortune: ${rand}`)
}
module.exports = {getFortune}