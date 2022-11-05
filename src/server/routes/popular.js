const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('home page for .../popular/....')
})

router.route('/:game')
.get((req, res) =>{
    res.send(`route page for ../poplar/${req.params.game}`)
})
.delete((req, res) => {
    res.send(`route page for ../popular/${req.params.game} using DELETE`)
})

router.param("game", (req, res, next, game) => {
    console.log(`routerParams console log before rendering ../popular/${req.params.game}`)
    next()
})

module.exports = router