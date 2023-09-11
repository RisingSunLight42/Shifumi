const tableauCoups = ["Pierre", "Feuille", "Ciseaux"];
const boiteResultat = document.getElementById("resultat");
const boiteStats = document.getElementById("stats");
const correspondanceCoups = {
    Pierre: {
        Pierre: "Nul",
        Feuille: "Perdu",
        Ciseaux: "Victoire",
    },
    Feuille: {
        Pierre: "Victoire",
        Feuille: "Nul",
        Ciseaux: "Perdu",
    },
    Ciseaux: {
        Pierre: "Perdu",
        Feuille: "Victoire",
        Ciseaux: "Nul",
    },
};
const stats = {
    Victoire: 0,
    Perdu: 0,
    Nul: 0,
};

function gestionStats(resultatShifumi) {
    stats[resultatShifumi]++;
    while (boiteStats.firstChild) {
        boiteStats.removeChild(boiteStats.firstChild);
    }
    const noeudStatsVictoire = document.createElement("p");
    noeudStatsVictoire.appendChild(
        document.createTextNode(`Victoire : ${stats["Victoire"]}`)
    );
    const noeudStatsDefaite = document.createElement("p");
    noeudStatsDefaite.appendChild(
        document.createTextNode(`Défaite : ${stats["Perdu"]}`)
    );
    const noeudStatsNul = document.createElement("p");
    noeudStatsNul.appendChild(document.createTextNode(`Nul : ${stats["Nul"]}`));
    boiteStats.appendChild(noeudStatsVictoire);
    boiteStats.appendChild(noeudStatsDefaite);
    boiteStats.appendChild(noeudStatsNul);
}

function shifumi(coupJoueur) {
    while (boiteResultat.firstChild) {
        boiteResultat.removeChild(boiteResultat.firstChild);
    }
    const coupOrdinateur =
        tableauCoups[Math.floor(Math.random() * tableauCoups.length)];
    const noeudCoupJoueur = document.createElement("p");
    noeudCoupJoueur.appendChild(
        document.createTextNode(`Joueur : ${coupJoueur}`)
    );
    const noeudCoupOrdinateur = document.createElement("p");
    noeudCoupOrdinateur.appendChild(
        document.createTextNode(`Ordinateur : ${coupOrdinateur}`)
    );
    const resultatShifumi = correspondanceCoups[coupJoueur][coupOrdinateur];
    const noeudResultatShifumi = document.createElement("p");
    noeudResultatShifumi.appendChild(
        document.createTextNode(`Résultat : ${resultatShifumi}`)
    );
    boiteResultat.appendChild(noeudCoupJoueur);
    boiteResultat.appendChild(noeudCoupOrdinateur);
    boiteResultat.appendChild(noeudResultatShifumi);
    gestionStats(resultatShifumi);
}

const boiteChoixCoup = document.getElementById("choixCoup");
for (const coup of boiteChoixCoup.children) {
    coup.addEventListener("click", () => shifumi(coup.textContent));
}
