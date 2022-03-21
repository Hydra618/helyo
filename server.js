const express = require('express')
const path = require("path")
const app = express()
let inviteURL = "https://discord.com/oauth2/authorize?client_id=944605402748813352&permissions=8&scope=bot%20applications.commands"
let supportServer = "https://dsc.gg/helyo-support"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'index.html'))
})

app.get(`/invite`, async (req, res) => {
  res.status(200)
  res.redirect(inviteURL)
})

app.get(`/supportServer`, async (req, res) => {
  res.status(200)
  res.redirect(supportServer)
})

app.listen(3000)