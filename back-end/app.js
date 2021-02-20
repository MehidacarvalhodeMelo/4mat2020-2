var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
// const dbUser = process.env.DB_USER
// const dbPass = process.env.DB_PASS
const dbName = 'planejamentoOnline'
// console.log(dbUser, dbPass, dbName)
//db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.3miu9.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)
db(`mongodb://localhost/${dbName}?retryWrites=true&w=majority`)

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Criação de uma nova rota
const teste = require('./routes/teste')
app.use('/teste', teste)


//Rota para curso1
const curso1 = require('./routes/curso1')
app.use('/curso1', curso1)

//Rota para mestre
const mestre = require('./routes/mestre')
app.use('/mestre', mestre)

//Rota para eixo
const eixo = require('./routes/eixo')
app.use('/eixo', eixo)

//Rota para atividade
const atividade = require('./routes/atividade')
app.use('/atividade', atividade)

//Rota para aluno
const aluno1 = require('./routes/aluno1')
app.use('/aluno1', aluno1)
//Rota para equipe

const equipe = require('./routes/equipe')
app.use('/equipe', equipe)

// Rota para sala-aula
const sala_aula1 = require('./routes/sala_aula1')
app.use('/sala-aula1', sala_aula1)



// Rota para atividade-eixo
const atividade_eixo = require('./routes/atividade_eixo')
app.use('/atividade-eixo', atividade_eixo)

// Rota para curso-eixo
const curso_eixo = require('./routes/curso_eixo')
app.use('/curso-eixo', curso_eixo)








// Rota para curso 
const curso = require('./routes/curso')
app.use('/curso', curso)

// Rota para professor
const professor = require('./routes/professor')
app.use('/professor', professor)

// Rota para sala-aula
const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula)
//Rota para turma
const turma = require('./routes/turma')
app.use('/turma', turma)


//Rota para aluno
const aluno = require('./routes/aluno')
app.use('/aluno', aluno)

module.exports = app;
