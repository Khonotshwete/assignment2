const express = require('express')
const app = express()
const port = 3000

app.get('/basketball', (req, res) => {
  res.send('Basketball is cool')
})

app.get('/soccer', (req, res) => {
  res.send('Soccer is cool')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

