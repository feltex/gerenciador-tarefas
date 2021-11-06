

## Instalar Express

    npm install express path --save

server.js

```
const express = require('express');
const path = require('path');
const app = express();
const appName = 'gerenciador-tarefas'

app.use(express.static(__dirname + `/dist/${appName}`));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`));
});

app.listen(process.env.PORT || 8080);

```

## Versão do NPM e do NODE

Comando:  ```npm -v``` saída algo como ```8.1.2```

Comando:  ```node -v``` saída: ```v14.18.1```


      “engines”: { “node”: “14.18.1”, “npm”: “8.1.2” }

