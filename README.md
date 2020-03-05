# Eronn Pass Mailer

### Installation

Pour l'installation du projet veuillez vous référer au instruction sur (eronn-pass-docker)[https://github.com/robinmoquet/eronn-pass-docker]


### Utiliser smtp4dev pour les mail en phase de dev

cf: [la doc de smtp4dev](https://github.com/rnwood/smtp4dev)

**Attention:** c'est une lib à installer sur votre ordi, **pas dans le projet !**

1- Télecharger le [projet](https://github.com/rnwood/smtp4dev/releases) et dézipper le.

2- Il est possible de modifié le port du server smtp dans appsettings.json (25 par default)

3- Pensez à modifié le port du server web, qui est 5000 par défault, il faut le faire passer à 5500 (sinon il rentre en conflit avec l'api)

4- Executer le fichier Rnwood.Smtp4dev.

Exemple (sous linux): 
```
$ sudo ./Rnwood.Smtp4dev --server.urls "http://localhost:5500/"
```

