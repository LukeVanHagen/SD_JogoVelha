const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configuração para servir arquivos estáticos
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));



// Configuração de rota para página inicial (opcional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Envie o arquivo HTML inicial
});


io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  // Lógica do jogo e interações via Socket.IO

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log('Usuário conectado');
});

