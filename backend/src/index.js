const express = require('express');
require('dotenv/config');

const app = express();
app.use(express.json());

// rotas
const TaskRouter = require('./routes/TaskRoutes');
app.use('/task', TaskRouter);

app.listen(process.env.PORT, () => 
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
);
