/* En front-desk (côté client) :
La possibilité de créer une nouvelle partie
La possibilité de retenir le score courant
La possibilité de lancer le dé
La possibilité d’avoir 2 joueurs

Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).

*/
let players = [
    {'id':1, 
    'name':'' ,
    'currentScore' : 0,
    'globalScore' : 0}
    , 
    {'id':2,
    'name':'' ,
    'currentScore' : 0,
    'globalScore' : 0
    }
];

let whichPlayer = [
    {'playerActive' : 1 }
];
console.log(whichPlayer[0].playerActive)
/* Phase 0 : Créer une nouvelle partie 
1) Cliquer sur le bouton New game */

function start() {
    let buttonStart = document.querySelector(
        ".js-newgame__button"
    );
    buttonStart.addEventListener("click", () => {
        // console.log("Démarré");
        /* 3) Définir les joueurs" */
        for (i = 1; i < 3; i++) {
            playerName(i);
            
        };



        /* 2) Mettre les scores à 0 */
        let scoresStart = document.querySelectorAll(".js-score");
        scoresStart.forEach((score) => {
            score.textContent = 0;
            for (i = 0; i < 2; i++) {
                players[i].globalScore = 0;
                players[i].currentScore = 0;        
            };
        });
        


        /* 3) Afficher le dé */
        let die = document.querySelector(".js-die__image");
        die.classList.remove("hidden");

        /* 4) Démarrer la partie */
        

        dieLaunching();
    });
}

// Fonction permettant de changer le nom des joueurs

const playerName = (playerNumber) => {
    //Changer le nom du joueur
    const askedName = prompt(`Qui est votre joueur n°${playerNumber}`);
    const newName = document.querySelector(`.js-player${playerNumber}`);
    newName.textContent = askedName;
    const playerId = playerNumber - 1 ;
    players[playerId].name = askedName;
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

let dieLaunching = () => {
    let rolledDie = document.querySelector(
        ".js-roll"
        );
    rolledDie.addEventListener("click", () => {
        let dieValue = getRandomInt();
        dieLook(dieValue);

    updateCurrentScore(dieValue);
        
    
}); 
    
};


// Fonction nombre aléatoire entre 1 et 6
let getRandomInt = () => {
    const max = 7;
    const min = 1;
    return Math.floor(Math.random() * (max - min) + min);
};

// Fonction d'affichage du dé
let dieLook = (value) => {
    let newSource = `ressources/de${value}.png`;
    let oldSource = document.getElementsByClassName('js-die__image').item(0).src;
    document.getElementsByClassName('js-die__image').item(0).src =`ressources/de${value}.png`
};

// fonction de mise à jour du currentScore 

let updateCurrentScore = (dieValue) => {
    let newCurrentScore = document.querySelector(`.js-currentScore-${whichPlayer[0].playerActive}`);

    if (dieValue == 1) {
        players[(whichPlayer[0].playerActive-1)].currentScore = 0;
        newCurrentScore.textContent = players[(whichPlayer[0].playerActive)-1].currentScore;
        playerChangement()
    } else {
        players[(whichPlayer[0].playerActive-1)].currentScore = players[whichPlayer[0].playerActive-1].currentScore + dieValue ;
        newCurrentScore.textContent = players[(whichPlayer[0].playerActive)-1].currentScore;
    };
        
};

// Fonction changer de joueur
let playerChangement = () => {

    let nonVisualPlayer = document.querySelector(`.js-player${whichPlayer[0].playerActive}__point`);
    nonVisualPlayer.classList.remove("redpoint");

    let newPlayerGaming = whichPlayer[0].playerActive == 1 ? 2 : 1;
    whichPlayer[0].playerActive = newPlayerGaming;
    console.log(`player actif dans player changement ${whichPlayer[0].playerActive}`)
    
    let visualPlayer = document.querySelector(`.js-player${whichPlayer[0].playerActive}__point`);
    visualPlayer.classList.add("redpoint");
    
};

// Fonction garder les points 
/* à chaque clic sur le bouton hold le currentScore s'ajoute au globalSCore.
le global score se met à jour dans l'affichage. 
Si le global score > 100 alors le joueur gagne et fin de la partie. 
Une alerte s'affiche avec le nom du joueur et son Global score.
Si le score global < 100 le current score tombe à 0 et on change de joueur */


let holdButton = document.querySelector('.js-hold__button');
holdButton.addEventListener('click', () => {
    players[(whichPlayer[0].playerActive-1)].globalScore = players[(whichPlayer[0].playerActive-1)].globalScore + players[(whichPlayer[0].playerActive-1)].currentScore ;
    let newGlobalScore = document.querySelector(`.js-globalScore-${whichPlayer[0].playerActive}`);
    newGlobalScore.textContent = players[(whichPlayer[0].playerActive-1)].globalScore;
    
    updateCurrentScore(1);

    console.log(players);
    console.log(whichPlayer[0].playerActive);
});

if(players[(0)].globalScore > 99 || players[(1)].globalScore > 99 ) {
    alert(`Bravo ${players[(whichPlayer[0].playerActive-1)].name}, vous avez gagné !`);
    for (i = 0; i < 2; i++) {
        players[i].globalScore = 0;
        players[i].currentScore = 0;        
    };
};

/* Lancement des fonctions */
start();

console.log(players);