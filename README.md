<p align="center">
  <img src="https://cdn.recast.ai/blog/sdk.png" />
</p>

| [Uso](#usage) | [Documentação](#documentation) | [Getting Started com Recast.AI]( #getting-started-with-recastai) | [License](#license) |
|---|---|---|---|

# Iniciando com Recast.AI & NodeJS

Um kit inicial para o desenvolvimento de bots usando a plataforma [Recast.AI](https://recast.ai).

> **Nota:** Projeto está atualmente em versão beta e pode ser modificado a qualquer momento..

## Requirements

#### Node version

Nós recomendamos a versão `node v6


#### Recast.AI conta

 Recast.AI e siga este rápido tutorial para criar seu primeiro bot na interface.

Crie uma conta na plataforma [Recast.AI](https://recast.ai) e siga o [tutorial](https://recast.ai/gettingstarted) para criar seu primeiro bot com interface.

## Uso


#### Instalação

`git clone https://github.com/ahsouza/bot-recastai.git ex-bot && cd ex-bot`

usando npm
`npm install`

ou yarn
`yarn`


#### Criando o arquivo de configuração

 Crie um arquivo com o nome de `config.js` e programe a seguinte estrutura básica de configuração:

```javascript
process.env.PORT = '5000'
process.env.REQUEST_TOKEN = ''
process.env.LANGUAGE = ''
// Write your own configuration here:
// ...
```
Complete o Recast.AI process.env.REQUEST_TOKEN e process.env.LANGUAGE. vá para a página do bot, clique no ícone de configurações (no lado direito da tela) e copie o arquivo request_token. Em seguida, defina o idioma padrão do seu bot: 'en', 'fr'... ou deixe este campo em vazio para a linguagem de detecção automática.

#### Executando localmente

usando npm `npm start`

usando yarn `yarn start`

- download [ngrok](https://ngrok.com/)
- launch it: `./ngrok http 5000`
- copy the url ngrok gave and paste it in the [Recast.AI](https://recast.ai) interface: Go to your bot page, click on the **RUN** tab and edit your `current bot webhook`
- Chat with your bot on the channels you've configured ;)

## Documentação

Code | Documentation
------------ | -------------
Receiving messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Sending messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Rich messaging | See the different [payload message](https://man.recast.ai)

#### Sobre o arquivo config

O arquivo `config.js` nunca será enviado ao seu repositório. Por motivos de segurança com intenção de manter sua configuração privada.

## More

You can view the whole API reference at [man.recast.ai](https://man.recast.ai).
You can follow us on Twitter at [@recastai](https://twitter.com/recastai) for updates and releases.

## Getting started with Recast.AI

Criamos produtos para ajudar empresas e desenvolvedores a entender melhor as entradas do usuário.

Learn more about:

| [API Documentation](https://recast.ai/docs/api-reference/) | [Discover the platform](https://recast.ai/docs/create-your-bot) | [First bot tutorial](https://recast.ai/blog/build-your-first-bot-with-recast-ai/) | [Advanced NodeJS tutorial](https://recast.ai/blog/nodejs-chatbot-movie-bot/) | [Advanced Python tutorial](https://recast.ai/blog/python-cryptobot/) |
|---|---|---|---|---|

## License

Copyright (c) [2017] [Recast.AI](https://recast.ai)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
