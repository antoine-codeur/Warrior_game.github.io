class WarriorSpear extends Warrior {
    attack(opponent) {
      let power = this.attackPower;
      if (opponent instanceof WarriorAxe) {
        power *= 2;
        console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}. Le coup est très efficace!`);
      } else {
        console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${this.attackPower}`);
      }
      opponent.takeDamage(power);
    }
  }