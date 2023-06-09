###  getBooks:

- Il suffit d'appeler la route "/" avec une intention GET et en query params il faut envoyer une nombre de page et une limite de livres voulu (ex : localhost:3000?page=1&limit=3) vous aurez tous les livres

example response:

[
    {
        "id": 1,
        "name": "Harry Potter and the Philosopher's Stone"
    },
    {
        "id": 2,
        "name": "To Kill a Mockingbird"
    },
    {
        "id": 3,
        "name": "1984"
    }
]

###  getOneBook:

- Il suffit d'appeler la route "/: id" avec une intention GET et de passer un id pour récupérer le livre correspondant

example response: 
{
    "id": 3,
    "name": "1984"
}

###  getSort:

- Il suffit d'appeler la route "/name" avec une intention GET pour avoir la liste des livres trié

###  getFiltre:

- Il suffit d'appeler la route "/filter" avec une intention GET avec le nom de l'auteur en query params avec comme nom author pour avoir la liste des livres filtré par le nom
example request : localhost:3000/filtre?author=Jane Austen
exampple response : 
[
    {
        "id": 4,
        "name": "Pride and Prejudice",
        "author": "Jane Austen"
    }
]

###  createOneBook:

- Il suffit d'appeler la route "/" avec une intention POST et de passer un objet dans le body avec un id et un nom et vous ajoutez un livre

example response: 
{
    "ok": true,
    "data": {
        "id": 14,
        "name": "Nouveaux Livre"
    }
}

###  deleteOneBook:

- Il suffit d'appeler la route "/: id" avec une intention DELETE et de passer un id et vous pouvez supprimer le livre correspondant .
- Il faut aussi ajouter un token d'authentification

example response: 
{
    "ok": true,
    "data": [
        {
            "id": 14,
            "name": "Nouveaux Livre"
        }
    ]
}

 ###  modifyOneBook:

- Il suffit d'appeler la route "/: id" avec une intention PUT et de passer dans le body un id et les paramètres que vous voulez changer

example response : 
{
    "ok": true,
    "data": {
        "id": 13,
        "name": "Livre modifié"
    }
}

