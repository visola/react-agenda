# react-agenda

Uma agenda de contatos criada como exemplo utilizando React no frontend e Express.js no backend.

## Arquitetura

O frontend é um SPA (single page application) que carrega os dados do backend através de chamadas Ajax usando o [axios](https://github.com/axios/axios).
O backend possui uma API REST que pode ser usada para listar, criar e editar contatos.
Os contatos são salvos num arquivo no formato `.json`, carregado quando o backend começa.
Toda vez que um contato é salvo (novo ou editado), o array de contatos é atualizado na memória e persistido no arquivo.

## Rodando a aplicação localmente

Para rodar localmente rodamos dois servidores: o frontend com o hotreload do React e o backend com o express.js.
O frontend serve o backend através de um proxy configurado no [package.json](./package.json).

Primeiro precisamos inicializar o backend. Em um console digite os seguinte comandos:

```
cd server
npm i
node .
```

O primeiro vai instalar as dependências e o segundo irá inicializar o servidor.
Você deverá ver uma mensagem dizendo que o servidor está rodando na porta 4000.

Para inicializar o frontend, num console separado, na raíz do projeto digite os seguintes comandos:

```
npm i
npm start
```

Após o segundo comando, o seu navegador vai abrir apontando para http://localhost:3000.
E pronto! Pode começar a brincar no código.
