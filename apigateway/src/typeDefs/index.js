//Se llama al typedef (esquema) de cada submodulo
const historyTypeDefs = require('./history_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, historyTypeDefs];

//Se exportan
module.exports = schemasArrays;