const tableauCoups = ["Pierre", "Feuille", "Ciseaux"];
const boiteResultat = document.getElementById("resultat");
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

function shifumi(coupJoueur) {
    while (boiteResultat.firstChild) {
        boiteResultat.removeChild(boiteResultat.firstChild);
    }
    const coupOrdinateur =
        tableauCoups[Math.floor(Math.random() * tableauCoups.length)];
    const noeudCoupJoueur = document
        .createElement("p")
        .appendChild(document.createTextNode(`Joueur : ${coupJoueur}`));
    const noeudCoupOrdinateur = document
        .createElement("p")
        .appendChild(document.createTextNode(`Ordinateur : ${coupOrdinateur}`));
    const resultatShifumi = document
        .createElement("p")
        .appendChild(
            document.createTextNode(
                `Résultat : ${correspondanceCoups[coupJoueur][coupOrdinateur]}`
            )
        );
    boiteResultat.appendChild(noeudCoupJoueur);
    boiteResultat.appendChild(noeudCoupOrdinateur);
    boiteResultat.appendChild(resultatShifumi);
}

const boiteChoixCoup = document.getElementById("choixCoup");
for (const coup of boiteChoixCoup.children) {
    coup.addEventListener("click", () => shifumi(coup.textContent));
}
