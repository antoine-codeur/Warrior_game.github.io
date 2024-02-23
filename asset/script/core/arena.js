// // Création de deux guerriers
console.log("Début du combat !");
let warrior1 = new WarriorAxe("Joan", 100, 10); // Nom, Santé, Puissance d'attaque
let warrior2 = new WarriorSword("Leon", 100, 10);

// const axeWarrior = new WarriorAxe("Axel", 100, 10);
// const swordWarrior = new WarriorSword("Swordy", 100, 10);
// const spearWarrior = new WarriorSpear("Spearson", 100, 10);

// Boucle de combat
while (warrior1.isAlive() && warrior2.isAlive()) {
    warrior1.attack(warrior2);
    warrior2.attack(warrior1);
}

// Affichage du résultat
if (warrior1.isAlive()) {
    console.log(`${warrior1.name} gagne le combat !`);
} else if (warrior2.isAlive()) {
    console.log(`${warrior2.name} gagne le combat !`);
} else {
    console.log("Les deux guerriers sont tombés au combat !");
}
console.log("Fin du combat !");
