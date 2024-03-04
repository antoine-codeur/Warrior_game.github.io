class WarriorBow extends Warrior {
    constructor(name, health, attackPower) {
        super(name, health, attackPower, 0.25, 0.1);
    }
  
    criticalMultiplier() {
      return 1.5; // Augmentation à x1,5 pour WarriorBow
    }
  
    attack(opponent) {
        let power = this.attackPower;
        if (Math.random() < this.criticalChance) {
            power *= this.criticalMultiplier(); // Appliquer le multiplicateur de coup critique
            console.log(`${this.name} réalise un coup critique sur ${opponent.name}`);
        }
        if (opponent instanceof WarriorAxe || opponent instanceof WarriorBow) {
            power *= 2;
            console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}. Le coup est très efficace!`);
            } else if (opponent instanceof WarriorSword) {
            power -= 3;
            console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}. Le coup n'a pas toute son efficacité!`);
            } else {
            console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}`);
        }
        opponent.takeDamage(power, this);
    }
}
