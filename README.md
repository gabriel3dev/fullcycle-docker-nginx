# Desafios

Esse desafio da Full Cycle consistem em criar um proxy reverso com nginx e NodeJS.
Quando o usuário acessa o nginx, ele redireciona a chamada para o server em node.js Onde esse app adiciona um nome aleatório na tabela people(DB em MySQL) e retorna a lista dos nomes já inseridos.

# Como executar?
Para executar as imagens (acesso pela porta 8080): docker-compose up -d
