
const dictionnaire = {
    "ordinateur": "Machine électronique capable de traiter des informations.",
    "internet": "Réseau mondial permettant d'échanger des données.",
    "html": "Langage de structuration des pages web.",
    "css": "Langage permettant de styliser les pages web.",
    "javascript": "Langage de programmation utilisé pour rendre les pages web interactives."
};


//  Sélection des éléments HTML
const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".result p");


//  Fonction de recherche
button.addEventListener("click", function () {

    const mot = input.value.toLowerCase().trim();

    if (mot === "") {
        result.textContent = "Veuillez entrer un mot.";
        return;
    }

    if (dictionnaire[mot]) {
        result.textContent = dictionnaire[mot];
    } else {
        result.textContent = "Mot non trouvé dans le dictionnaire. cherche les mots qui ont traits a la tech";
    }

});
