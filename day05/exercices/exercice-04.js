/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * VÉRIFICATION D'EMAIL
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un email et retourne true s'il contient le caractère "@".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day05/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function verifierEmail(email){
    return email.includes("@");
    }
   
   // console.log(verifierEmail("ismail@test.com")); true 
   // console.log(verifierEmail("ismailtest.com")); false  

