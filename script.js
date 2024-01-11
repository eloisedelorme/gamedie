/* En front-desk (côté client) :
La possibilité de créer une nouvelle partie
La possibilité de retenir le score courant
La possibilité de lancer le dé
La possibilité d’avoir 2 joueurs

Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).

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

/* Phase 0 : Créer une nouvelle partie 
1) Cliquer sur le bouton New game */

const start = () => {
    const buttonStart = document.querySelector(
        ".js-newgame__button"
        );
    buttonStart.addEventListener("click", () => {
        // console.log("Démarré");


        /* 3) Définir les joueurs" */

        for(i=1;i<3;i++) {
            playerName(i);
        };

        /* 2) Mettre les scores à 0 */
        const scoresStart = document.querySelectorAll(".js-score");
        scoresStart.forEach((score) => {
        score.textContent = 0;
        });
        

        /* 3) Afficher le dé */
        const die = document.querySelector(".js-die__image");
        die.classList.remove("hidden");

        /* 4) Démarrer la partie */

        let playerGaming = player1;

        const gaming = (playerGaming) => {
            
        };

        // Lancement fonction lancé de dé
        dieLaunching();


    });
}

// Fonction permettant de changer le nom des joueurs

const playerName = (playerNumber) => {
    //Changer le nom du joueur
    const askedName = prompt(`Qui est votre joueur ${playerNumber}`);
    const newName = document.querySelector(`.js-player${playerNumber}`);
    newName.textContent = askedName;
    (`player${playerNumber}`).name = askedName;
};

// Fonction pour la partie
/*À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le 
résultat d’un lancer est ajouté au ROUND. 
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.
*/

/* le jeu continu tant qu'aucun des globalScore n'est à 100. Tester à 15.
/* Le joueur a un point qui s'affiche à côté de son nom (ajouter la classe redpoint).
il lance le dé. (bouton hold)
tirage aléatoire de 1 à 6 (entiers).
si le dé supérieur à 1 alors les points sont notés dans le current score.
s'il clique sur roll dice, il relance le dé.
s'il clique sur hold, les points s'ajoute au  globalScore et c'est à l'autre joueur.
*/

// Fonction de lancé de dé.

const dieLaunching = () => {
    const rolledDie = document.querySelector(
        ".js-roll"
        );
    rolledDie.addEventListener("click", () => {
        const dieValue = getRandomInt();
        console.log(dieValue);
        dieLook(dieValue);
    });
};



// Fonction nombre aléatoire entre 1 et 6
const getRandomInt = () => {
    const max = 7;
    const min = 1;
    return Math.floor(Math.random() * (max - min) + min);
};

// Fonction d'affichage du dé
const dieLook = (value) => {
    const newSource = `ressources/de${value}.png`;
    console.log(newSource);
    const oldSource = document.getElementsByClassName('js-die__image').item(0).src;
    console.log(oldSource);
    document.getElementsByClassName('js-die__image').item(0).src =`ressources/de${value}.png`
}

// Fonction changer de joueur


const playerChangement = () => {

}
/* Lancement des fonctions */
start();
