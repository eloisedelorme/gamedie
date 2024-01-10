/* En front-desk (côté client) :
La possibilité de créer une nouvelle partie
La possibilité de retenir le score courant
La possibilité de lancer le dé
La possibilité d’avoir 2 joueurs

Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le 
résultat d’un lancer est ajouté au ROUND. 
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.

*/

const player1 = {
    name: "",
    currentScore : 0,
    globalScore : 0,
};

const player2 = {
    name: "",
    currentScore : 0,
    globalScore : 0,
};

/* Phase 1 : Créer une nouvelle partie 
1) Cliquer sur le bouton New game */

const start = () => {
    const buttonStart = document.querySelector(
        '.js-newgame__button'
        );
    buttonStart.addEventListener("click", () => {
        console.log("Démarré");

        /* 2) Demander le nom des joueurs */


        /* 3) Afficher le dé */
        const die = document.querySelector('.js-die');
        die.classList.remove("hidden");

        playerName(player1);
        playerName(player2);

    });
/* 3) Mettre les scores à 0 */
}

const playerName = (whichPlayer) => {
    const playerName = prompt('Qui est votre joueur ?');
    whichPlayer.name = playerName;
    console.log(whichPlayer);
}





    
/* Lancement des fonctions */
start();
