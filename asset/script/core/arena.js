// Création de deux guerriers
let warrior1 = new Warrior("Joan", 100, 10); // Nom, Santé, Puissance d'attaque
let warrior2 = new Warrior("Leon", 90, 15);

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
