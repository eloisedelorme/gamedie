// Tableau d'objet contenant les données de chaque joueur

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

// Tableau d'objet contenant le joueur actif
let whichPlayer = [
    {'playerActive' : 1 }
];


/* Fonction Démarrer une nouvelle partie 
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

// Fonction de mise à jour du currentScore 

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

// Fonction de mise à joueur du globalScore 

let holdButton = document.querySelector('.js-hold__button');
holdButton.addEventListener('click', () => {
    players[(whichPlayer[0].playerActive-1)].globalScore = players[(whichPlayer[0].playerActive-1)].globalScore + players[(whichPlayer[0].playerActive-1)].currentScore ;
    let newGlobalScore = document.querySelector(`.js-globalScore-${whichPlayer[0].playerActive}`);
    newGlobalScore.textContent = players[(whichPlayer[0].playerActive-1)].globalScore;
    
    updateCurrentScore(1);

    console.log(players);
    console.log(whichPlayer[0].playerActive);
    winner();
});

// Fonction gagner
let winner = () => {
    if(players[0].globalScore > 99 ) {
        alert(`Bravo ${players[0].name}, vous avez gagné !`);
    } else if(players[1].globalScore > 99 ) {
        alert(`Bravo ${players[1].name}, vous avez gagné !`);
    };
};

/* Lancement des fonctions */
start();

