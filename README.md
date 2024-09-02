# Projet TechnO'vice

Bienvenue sur notre projet !

## Présentation du projet

TechnO’vice, une plateforme éducative dédiée à l'apprentissage de l’informatique. Les contenus proposés sur la plateforme visent à développer des compétences de base sur les plus importants logiciels, OS, et sites web.
Elle permet aux formateurs de publier du contenu sur la plateforme afin qu’ils puissent partager leurs connaissances.
En quelques exemples : Les bases du logiciel Word, comment faire un achat sur Amazon, comment repérer un site malveillant.

## Dépendances du projet

### Front

-   [x] React
-   [x] React-dom
-   [x] Vite
-   [x] Vitest
-   [x] Typescript

### Back

-   [x] Nodejs
-   [ ] Prisma
-   [x] Express
-   [x] dotenv
-   [x] PG
-   [ ] cors
-   [ ] sanitize-html
-   [ ] joi

### Autres

-   [x] Prettier
-   [x] Eslint
-   [ ] Docker

## Github Branching

### Format des issues

L'ajout de features / étapes se fera sous la forme :

`release/numéro_de_version/nom_de_l_issue_numero`

Donc avec un exemple :

`release/0.1/prisma_installation_9`

### Branching

Lorsque vous travaillez sur une nouvelle feature, il faut partir de main/master, et créer votre nouvelle branch depuis là.
On vérifie d'abords qu'on est bien sur main/master avec la commande :

`git branch` pour voir où on est
`git checkout main` pour se placer sur la branche 'main'

Sur main/master, on crée ensuite notre nouvelle branche avec la commande suivante :

`git checkout -b nom_de_la_branche`
Avec notre exemple ci-desssus:
`git checkout -b release/0.1/prisma_installation_9`

> On peut aussi partir d'une branche pour en faire une autre, à partir du moment où l'arborescence est logique et où les branches concernent la même feature

Sur votre nouvelle branche, à chaque commit vous devrez respecter cette semantique : `git commit -m "release/0.1/prisma_installation_9 : prisma installed and working"`, Donc sous la forme : nom de l'issue, double point, commentaire du commit en anglais

Faites régulièrement des commits et des push, tant que vous êtes sur votre propre branche vous n'avez pas de risque de casser main/master

> On ne travaille jamais sur main/master, on ne s'en sert que comme point de départ pour une nouvelle branche, ou pour faire les merge

tip : On peut utiliser `git status` pour voir l'état de notre branche actuelle

### Pull Request

Je vous montre ça dans la demo directement

### Pull

Dans le cas où des features ont été validé par l'équipe, et donc mergé sur la branche main/master, vous pouvez les récupérer en faisant un `git checkout main` , suivi d'un `git pull`
