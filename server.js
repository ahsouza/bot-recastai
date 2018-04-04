/*
---  server.js ---
 Este arquivo é o núcleo do seu bot
  * Criação de um servidor usando express
  * Bot pode ser acionado através de rota "/"
  * Este arquivo foi feito para testar localmente seu bot
  * Você pode testá-lo executando este comando
  * curl -X "POST" "http://localhost:5000" -d '{"texto":"YOUR_TEXT"}' -H "Tipo de conteúdo:aplicativo / json; charset = utf-8"
  * Você pode modificar a porta do servidor, dependendo da sua configuração no arquivo config.js
 */
const express = require('express')
const bodyParser = require('body-parser')

// Carregando configurações
require('./config')
const bot = require('./bot')

// Executando servidor
const app = express()
app.set('port', process.env.PORT || 5000)
app.use(bodyParser.json())

// Executando '/'' route
app.use('/', (request, response) => {
  bot.reply(request, response)
    .then(success => {
      console.log(success, 'Bot carregado com sucesso! Estamos pronto ;)')
      if (!response.headersSent) { response.status(200) }
    }).catch(error => {
      console.log('Bot com erro!:', error)
      if (!response.headersSent) { response.sendStatus(400) }
    })
})

if (!process.env.REQUEST_TOKEN) {
  console.log('ERROR: process.env.REQUEST_TOKEN variable in src/config.js file is empty ! You must fill this field with the request_token of your bot before launching your bot locally')
  process.exit(0)
} else {
  // Executando Express server
  app.listen(app.get('port'), () => {
    console.log('Nosso Bot está sendo executado com servidor de porta:', app.get('port'))
  })
}