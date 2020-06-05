import express from 'express';

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  // JSON
  
  response.json([
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel',
    'Giovanni'
  ]);
});

app.listen(3333);
 