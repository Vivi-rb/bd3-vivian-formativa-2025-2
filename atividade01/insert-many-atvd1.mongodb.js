const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db['bd3-nosql-atv1'].insertMany(
    [
        {
            "cod_aluno": 1,
            "cod_turma": 101,
            "nome": "Ana Souza",
            "cpf": "12345678901",
            "rg": "123456789",
            "telefone_aluno": "11987654321",
            "telefone_responsavel": "11912345678",
            "email": "ana.souza@email.com",
            "data_nascimento": "2005-03-15T00:00:00Z"
        },
        {
            "cod_aluno": 2,
            "cod_turma": 101,
            "nome": "Bruno Lima",
            "cpf": "23456789012",
            "rg": "987654321",
            "telefone_aluno": "11955554444",
            "telefone_responsavel": "11944445555",
            "email": "bruno.lima@email.com",
            "data_nascimento": "2004-07-22T00:00:00Z"
        },
        {
            "cod_aluno": 3,
            "cod_turma": 102,
            "nome": "Carla Mendes",
            "cpf": "34567890123",
            "rg": "456789123",
            "telefone_aluno": "21999998888",
            "telefone_responsavel": "21988889999",
            "email": "carla.mendes@email.com",
            "data_nascimento": "2006-01-10T00:00:00Z"
        },
        {
            "cod_aluno": 4,
            "cod_turma": 102,
            "nome": "Diego Ferreira",
            "cpf": "45678901234",
            "rg": "321654987",
            "telefone_aluno": "11977776666",
            "telefone_responsavel": "11966667777",
            "email": "diego.ferreira@email.com",
            "data_nascimento": "2003-12-01T00:00:00Z"
        },
        {
            "cod_aluno": 5,
            "cod_turma": 103,
            "nome": "Eduarda Costa",
            "cpf": "56789012345",
            "rg": "654987321",
            "telefone_aluno": "31955556666",
            "telefone_responsavel": "31944447777",
            "email": "eduarda.costa@email.com",
            "data_nascimento": "2005-08-30T00:00:00Z"
        },
        {
            "cod_aluno": 6,
            "cod_turma": 103,
            "nome": "Felipe Alves",
            "cpf": "67890123456",
            "rg": "741852963",
            "telefone_aluno": "31911112222",
            "telefone_responsavel": "31922221111",
            "email": "felipe.alves@email.com",
            "data_nascimento": "2004-11-05T00:00:00Z"
        },
        {
            "cod_aluno": 7,
            "cod_turma": 104,
            "nome": "Gabriela Rocha",
            "cpf": "78901234567",
            "rg": "852963741",
            "telefone_aluno": "21933334444",
            "telefone_responsavel": "21944443333",
            "email": "gabriela.rocha@email.com",
            "data_nascimento": "2006-06-18T00:00:00Z"
        },
        {
            "cod_aluno": 8,
            "cod_turma": 104,
            "nome": "Henrique Oliveira",
            "cpf": "89012345678",
            "rg": "963741852",
            "telefone_aluno": "11988887777",
            "telefone_responsavel": "11977778888",
            "email": "henrique.oliveira@email.com",
            "data_nascimento": "2003-09-25T00:00:00Z"
        },
        {
            "cod_aluno": 9,
            "cod_turma": 105,
            "nome": "Isabela Martins",
            "cpf": "90123456789",
            "rg": "159753486",
            "telefone_aluno": "21922223333",
            "telefone_responsavel": "21933332222",
            "email": "isabela.martins@email.com",
            "data_nascimento": "2005-02-14T00:00:00Z"
        },
        {
            "cod_aluno": 10,
            "cod_turma": 105,
            "nome": "João Pedro Silva",
            "cpf": "01234567890",
            "rg": "357951684",
            "telefone_aluno": "31944443333",
            "telefone_responsavel": "31933334444",
            "email": "joao.pedro@email.com",
            "data_nascimento": "2004-04-09T00:00:00Z"
        }
    ]
);