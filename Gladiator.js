class Gladiator {
    constructor(name, health, strength, agility) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.agility = agility;
    }
    attack(oponent){
        const hit = Math.random() > this.agility * 0.05;
        if (hit) {
            const domage = Math.floor(Math.random() * this.strength);
            oponent.takeDamage(domage);
            console.log(`${this.name} hits ${oponent.name} with ${domage} damage. He has ${oponent.health} health left`);
        } else {
            console.log(`${this.name} misses the attack`);
        }
    }
    takeDamage(domage){
        this.health -= domage;
    }
    isAlive(){
        return this.health > 0;
    }
}

module.exports = Gladiator;