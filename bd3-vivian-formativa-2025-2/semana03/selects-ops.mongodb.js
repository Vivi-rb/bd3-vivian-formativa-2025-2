/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS */
const database = 'BD3-Projeto';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DA COLEÇÃO DE ARQUIVOS */
const collection = 'Livraria';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA, SERÁ CRIADO */
use(database);

/* SELECIONA DOCUMENTOS COM USO DE OPERADOR MAIOR $gt 
 db['Livraria'].find({
     valor:{$gt:100}
});*/

/* SELECIONA DOCUMENTOS COM USO DE OPERADOR MENOR $lt 
db['Livraria'].find({
    valor: { $lt: 110 }
});*/

/* DEFININDO UM INTERVALO ENTRE VALORES 
db['Livraria'].find({
    valor: {$gte:100, $lte:150}
});*/

/* DEFININDO UM INTERVALO ENTRE VALORES 
db['Livraria'].find({
    valor: {$gte:50, $lte:150}
}).sort({
    valor:-1
});*/

/* OPERADOR LÓGICO AND: 
db['Livraria'].find({
    $and:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ] //precisa ser um array
})*/

/* OPERADOR LÓGICO $or: 
db['Livraria'].find({
    $or:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ] //precisa ser um array
});*/

/* SELEÇÃO DE DOCUMENTOS COM O USO DO OPERADOR $in: 
db['Livraria'].find({
    autor: {
        $in: ['J.R.R Tolkien', 'Isaac Asimov']
    },
}, { _id: 0, codigo: 0, descricao: 0 }).sort({ valor: 1 });*/




