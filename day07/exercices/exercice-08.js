/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const candidats = [
    { nom: "Yassine", score: 15 },
    { nom: "Sara", score: 19 },
    { nom: "Amine", score: 17 }
];

function meilleurCandidat(candidats) {
    let meilleur = candidats[0];

    for (let i = 1; i < candidats.length; i++) {
        if (candidats[i].score > meilleur.score) {
            meilleur = candidats[i];
        }
    }

    return meilleur.nom;
}

console.log(meilleurCandidat(candidats));