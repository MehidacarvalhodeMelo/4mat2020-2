const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true  // Atributo obrigatório
    },
    carga_horaria: {
        type: Number,
        required: true,
        min: 3,
        max: 8
    },
    nivel: {
        type: String,
        required: true,
        // Conjunto dos valores válidos
        enum: ['Fase I', 'Fase II']
    },
    cor: {
        type: String,
        required: true  // Atributo obrigatório
    }

})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Eixo', esquema, 'eixos')