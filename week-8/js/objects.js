// Objects
const person = {
    // properties (variables that belong to this object)
    name: "Peter Parker",
    hp: 8,
    def: 0,
    atk: 2,
    spd: 3,

    // Methods (functions that belong to this object)
attack () {
    return this.atk;
},
}

function showHP() {}

const enemy = {
    name:"Slime",
    hp: 4,
    def: 3,
    atk: 1,
    spd: 2,

    attack(enemyDef) {
        const dmg = this.atk - enemyDef;
        if (dmg <= 0) {
            return 0; 
        } else {
            return dmg;
        }
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
}

// Peter attacks Slime
const peteDmg = person.attack(enemy.def);
console.log(peteDmg)
console.log("Slime HP:", enemy.hp)

enemy.takeDamage(peteDmg);
console.log("Slime HP:", enemy.hp)
