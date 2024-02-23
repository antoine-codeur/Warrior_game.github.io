class Warrior {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(opponent) {
    console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${this.attackPower}`);
    opponent.takeDamage(this.attackPower);
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
    console.log(`${this.name} a maintenant ${this.health} points de vie.`);
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

