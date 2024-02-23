class WarriorSword extends Warrior {
    constructor(name, health, attackPower, criticalChance, dodgeChance) {
        super(name, health, attackPower, criticalChance, dodgeChance);
    }
    attack(opponent) {
        let power = this.attackPower;
        if (Math.random() < this.criticalChance) {
            power *= this.criticalMultiplier(); // Appliquer le multiplicateur de coup critique
            console.log(`${this.name} réalise un coup critique sur ${opponent.name}`);
        } 
        if (opponent instanceof WarriorSpear) {
            power *= 2;
            console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}. Le coup est très efficace!`);
            } else if (opponent instanceof WarriorAxe) {
            power /= 2;
            console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}. Le coup n'est pas très efficace!`);
            } else {
            console.log(`${this.name} attaque ${opponent.name} avec une puissance de ${power}`);
        }
        opponent.takeDamage(power, this);
    }
}