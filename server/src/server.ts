import express from 'express';

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users - Criar um usuário
// GET http://localhost:3333/users - Listar usuários
// GET http://localhost:3333/users/5 - Buscar dados do usuário com ID 5

const users = [
  'Diego', // 0
  'Cleiton', // 1
  'Robson', // 2
  'Daniel', // 3
  'Giovanni' // 4
];

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  return response.json(users);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Diego',
    email: 'diego@rocketseat.com.br'
  };

  return response.json(user);
});

app.listen(3333);
 