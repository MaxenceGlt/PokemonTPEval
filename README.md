# Interrogation Angular

Une fois votre devoir terminer, envoyer le moi par mail à l'adresse : ange.picard@pm.me.

**PENSEZ BIEN A SUPRRIMER LE DOSSIER .git ET node_modules**

> Pas la peine de faire de CSS, uniquement l'aspect fonctionnel sera pris en compte.

## Informations

Nom:   
Prenom:  

## Question ouvertes

Merci de répondre avec vos mots, même s'ils sont inexactes, je veux voir que vous avez compris, pas que vous savez faire un copier-coller.

### Qu'est qu'Angular et quel est son intérêt ?

```
Angular est un framework javaScript qui est énormément utilisé pour toutes sortes de projet. Son principale interêt etant son systeme de routage dynamique.
Sans oublier la possibilité d'utiliser du typeScript pour créer de l'object / des services... 
```

### Qu'est-ce-qu'un composant

```
Un composant est un dossier comportant un fichier html/css/ts ainsi qu'une classe de test. ça permet de créer une organisation de fichier cohérente et simple
```

### Comment est découper un composant dans Angular ?

```
- Fichier html
-Fichier css
-Fichier Typescript
-Fichier Typescript de test
```

### Pourquoi vaut-il mieux faire de petit composant ?

```
Car c'est plus lisible est plus symple a implementer en angular```
```

### A quoi sert un service ?

```
Un service sert a créer nos méthodes qu'on utilisera ensuite dans nos bundle pour réaliser des actions
```

### Qu'est-ce-qu'un observable, et quel est son intérêt ?

```
Réagir a des donnés de manière asynchrone.
Emettre des informations (une donnée ou une erreur)

```

## Exercice 1

- Créer un nouveau projet Angular
- Dans le AppComponent
    - Ajouter un input
    - Ajouter un span
    - Faire en sorte que quand l'utilisateur entre du contenu dans l'input, il soit également écrit dans le span. On voit la même chose dans le span et dans l'input.
    - Ajouter un bouton permettant de vider le contenu de l'input et du span
- Créer un composant ListComponent
    - L'ajouter dans le template du AppComponent
    - Afficher la liste qui suit dans ListComponent
        - ['Jean', 'Jacques', 'Martin']
- Ajouter un bouton "CACHER" dans le AppComponent
    - A chaque click, cacher ou afficher ListComponent

## Exercice 2

Cette partie de l'interrogation porte sur le projet PokeAdopt.

Pour l'instant l'application n'affiche que la première page de la liste de pokemon l'API.

- Ajouter un bouton précédent et suivant en haut de la liste
- Quand on clique sur précédent ou suivant, afficher la page précédente ou suivante de l'API
- Bonus: Griser le bouton précédent s'il n'y a pas de page précédente
- Bonus: Afficher le numéro de page entre les deux boutons (Page 1 / XXX)