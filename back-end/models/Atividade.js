const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nivel: {
        type: String,
        required: true,
        // Conjunto dos valores válidos
        enum: ['Fase I', 'Fase II']
    },
    carga_horaria: {
        type: String,
        required: true
    },
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Atividade', esquema, 'atividades')