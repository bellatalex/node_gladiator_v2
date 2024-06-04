const Gladiator = require('./Gladiator');

class Arena {
    constructor(gladiator1, gladiator2) {
        this.gladiator1 = gladiator1;
        this.gladiator2 = gladiator2;
    }

    fight() {
        while (this.gladiator1.isAlive() && this.gladiator2.isAlive()) {
            this.gladiator1.attack(this.gladiator2);
            if (this.gladiator2.isAlive()) {
                this.gladiator2.attack(this.gladiator1);
            }
        }
        if (this.gladiator1.isAlive()) {
            console.log(`${this.gladiator1.name} wins!`);
        } else {
            console.log(`${this.gladiator2.name} wins!`);
        }
    }
}

module.exports = Arena;