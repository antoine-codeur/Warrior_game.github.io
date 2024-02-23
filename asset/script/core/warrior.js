class Warrior {
  constructor(name, health, attackPower, criticalChance = 0.05, dodgeChance = 0.05) { // Ajout de dodgeChance avec une valeur par défaut
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.criticalChance = criticalChance;
    this.dodgeChance = dodgeChance; // Nouvelle propriété pour l'esquive
  }

  attack(opponent) {
    let power = this.attackPower;
    if (Math.random() < this.criticalChance) {
      power *= this.criticalMultiplier();
      console.log(`${this.name} réalise un coup critique sur ${opponent.name} avec une puissance de ${power}!`);
    } else {
      console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}`);
    }
    opponent.takeDamage(power, this);
  }

  takeDamage(damage, attacker) {
    // Vérification de l'esquive avant d'appliquer les dégâts
    if (Math.random() < this.dodgeChance) {
      console.log(`${this.name} esquive l'attaque de ${attacker.name}!`);
      return; // Ne pas appliquer de dégâts si l'attaque est esquivée
    }

    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
    console.log(`${this.name} a maintenant ${this.health} points de vie.`);
  }

  criticalMultiplier() {
    return 1.2; // Multiplicateur de coup critique par défaut
  }

  isAlive() {
    return this.health > 0;
  }
}

// PHASE DE TEST
// let warrior1 = new Warrior("Joan", 100, 10);
// let warrior2 = new Warrior("Leon", 90, 15);

// console.log(`${warrior1.name} a ${warrior1.health} points de vie.`);
// console.log(`${warrior2.name} a ${warrior2.health} points de vie.`);

// warrior1.attack(warrior2);
// warrior2.attack(warrior1);

// console.log(`${warrior1.name} est vivant ?`, warrior1.isAlive());
// console.log(`${warrior2.name} est vivant ?`, warrior2.isAlive());

