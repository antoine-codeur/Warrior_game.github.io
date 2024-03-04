function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomHealth() {
    // Utilisez une approche qui génère plus fréquemment des valeurs autour de 100, mais permet des extrêmes
    const randomFactor = Math.random();
    if (randomFactor < 0.1) { // 10% de chance
      return getRandomInt(120, 200); // Rare, haute santé
    } else if (randomFactor > 0.9) { // 10% de chance
      return getRandomInt(50, 99); // Rare, basse santé
    } else {
      return getRandomInt(80, 120); // 80% de chance, santé moyenne
    }
  }
  
  class RandomWarrior extends Warrior {
    constructor(name) {
      let health = getRandomHealth();
      let attackPower = getRandomInt(4, 10);
      super(name, health, attackPower);
    }
  }