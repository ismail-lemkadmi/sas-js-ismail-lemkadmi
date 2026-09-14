/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function trouverMinMax(tableau){
  let plusGrand = tableau[0];
let plusPetit = tableau[0];
  for (let i= 0 ; i < tableau.length ; i++){
    if (tableau[i] > plusGrand ){
        plusGrand = tableau[i];
    }
    if (tableau[i] < plusPetit) {
       plusPetit = tableau[i]
    }
    }
return[plusGrand, plusPetit]
}




// console.log(trouverMinMax([50,20,1,32,11,9,87,7,4]));
//[87, 1] 
