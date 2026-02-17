# 📘 Mini Dictionnaire

## Description
Mini dictionnaire interactif en HTML, CSS et JavaScript.  
L'utilisateur peut saisir un mot et obtenir sa définition.  
Le projet est conçu pour apprendre **Git Flow** et les techniques de branchement.

---

## Fonctionnalités

- ✅ Recherche de mots en français
- ✅ Affichage de la définition correspondante
- ✅ Base de données locale (objet JavaScript)
- ✅ Design responsive et moderne
- ✅ Gestion des erreurs (mot vide ou non trouvé)
- ⚡ Possibilité d'évolution pour intégrer traduction via API

---

## Structure du projet

mini-dictionnaire/
│
├── index.html # Structure de la page
├── style.css # Styles CSS
├── script.js # Logique JavaScript et dictionnaire
└── README.md # Ce fichier

yaml
Copier le code

---

## Git Flow utilisé

Le projet suit la méthodologie **Git Flow** :

- **main** → Branche stable / production
- **develop** → Branche de développement principal
- **feature/...** → Branches pour chaque fonctionnalité :
  - `feature/interface` → structure HTML
  - `feature/style` → CSS et design
  - `feature/dictionnaire-local` → logique JavaScript et dictionnaire

### Bonnes pratiques :
- Chaque feature est développée sur sa propre branche
- Les merges se font via **Pull Request** sur GitHub
- Les branches feature sont supprimées après merge

---

## Comment utiliser le projet

1. Cloner le dépôt :

```bash
git clone <URL_DU_DEPOT>