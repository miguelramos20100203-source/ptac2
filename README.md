# Painel de Ideias

Este projeto foi feito em React com Vite e serve para adicionar ideias, marcar como concluídas e remover quando não forem mais necessárias.

Também possui validação para não adicionar ideias vazias e um contador que mostra quantas ideias existem e quantas já foram concluídas.

## Como rodar

Instale as dependências:

npm install

Depois rode:

npm run dev

## Decisões do projeto

Usei useState para guardar as ideias, o texto digitado e a mensagem de erro.

As ideias são mostradas usando map, removidas usando filter e o contador é calculado diretamente pela lista de ideias.

O projeto foi feito somente com React e CSS puro.