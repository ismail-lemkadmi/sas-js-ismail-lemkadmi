/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const candidats = [
    { nom: "Yassine", score: 15 },
    { nom: "Sara", score: 8 },
    { nom: "Amine", score: 17 }
];

function candidatsAdmis(candidats) {
    let resultat = [];

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].score >= 10) {
            resultat.push(candidats[i]);
        }
    }

    return resultat;
}

console.log(candidatsAdmis(candidats)); 