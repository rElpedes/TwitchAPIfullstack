const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('home page for .../top/....')
})

router.get('/subscribers', (req, res) =>{
    res.send('route page for ../top/subscribers')
})

router.get('/viewers', (req, res) =>{
    res.send('route page for ../top/viewers')
})

module.exports = router