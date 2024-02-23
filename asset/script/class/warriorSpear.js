class WarriorSpear extends Warrior {
    constructor(name, health, attackPower) {
        super(name, health, attackPower)
    }
    attack(opponent) {
    let power = this.attackPower;
    if (opponent instanceof WarriorAxe) {
    power *= 2;
    console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}. Le coup est très efficace!`);
    } else if (opponent instanceof WarriorSword) {
    power /= 2;
    console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}. Le coup n'est pas très efficace!`);
    } else {
    console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}`);
    }
    opponent.takeDamage(power);
}
}