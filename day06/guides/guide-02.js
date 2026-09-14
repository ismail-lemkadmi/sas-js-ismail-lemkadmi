/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

const notes = [12, 15, 8, 19];
let somme = 0;
for (let i = 0; i < notes.length; i++) {

    somme = somme + notes[i]

}
let moyenne = somme /notes.length  

console.log(moyenne);

// 13.4
