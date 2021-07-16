const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/students', (req, res) => {
  fs.readFile('./data/index.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Server Err')
    } else {
      res.render('index.html', {
        students: JSON.parse(data).students
      })
    }
  })
})

router.get('/students/news', (req, res) => {

})
router.post('/students/news', (req, res) => {

})
router.get('/students/edit', (req, res) => {

})
router.post('/students/edit', (req, res) => {

})
router.get('/students/delete', (req, res) => {

})

module.exports = router