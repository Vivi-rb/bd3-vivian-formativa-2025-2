const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

/*db['bd3-nosql-atv1'].updateOne(
    {cod_aluno: 4},
    {$set:{nome:'Diego da Silva Peixoto', cpf:'45678904569', rg:'879564876'}}
);*/

db['bd3-nosql-atv1'].deleteOne({cod_aluno: 7});
