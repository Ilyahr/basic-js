module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let tower = {};
    tower.turns = Math.pow(2, disksNumber) - 1;
    tower.seconds = tower.turns / (turnsSpeed / 3600);
    return tower;
};