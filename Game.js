const Gladiator = require('./Gladiator');
const Arena = require('./Arena');

class Game {
    start() {
        const Alexus = new Gladiator('Alexus', 100, 20, 5);
        const commodus = new Gladiator('Guillaumus', 100, 15, 10);
        const arena = new Arena(Alexus, commodus);
        arena.fight();
    }
}

module.exports = Game;