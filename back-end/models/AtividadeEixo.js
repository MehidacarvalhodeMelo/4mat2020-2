const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    atividade: {type: mongoose.ObjectId, ref: 'Atividade', required: true},
    eixo: {type: mongoose.ObjectId, ref: 'Eixo', required: true}
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('AtividadeEixo', esquema, 'atividades_eixo')