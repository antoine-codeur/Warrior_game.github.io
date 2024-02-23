class Warrior {
    constructor(name, power, life) {
      this.name = name;
      this.power = power;
      this.life = life;
    }
  
    attack(opponent) {
      if (!(opponent instanceof Warrior)) {
        console.error("L'opposant doit être une instance de Warrior");
        return;
      }
      console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${this.power}`);
      opponent.life -= this.power;
    }
  
    isAlive() {
      return this.life > 0;
    }
  }

let warrior1 = new Warrior("Joan", 10, 100);
let warrior2 = new Warrior("Leon", 15, 90);

console.log(`${warrior1.name} a ${warrior1.life} points de vie.`);
console.log(`${warrior2.name} a ${warrior2.life} points de vie.`);

warrior1.attack(warrior2);
warrior2.attack(warrior1);

console.log(`${warrior1.name} a maintenant ${warrior1.life} points de vie.`);
console.log(`${warrior2.name} a maintenant ${warrior2.life} points de vie.`);

console.log(`${warrior1.name} est vivant ?`, warrior1.isAlive());
console.log(`${warrior2.name} est vivant ?`, warrior2.isAlive());
