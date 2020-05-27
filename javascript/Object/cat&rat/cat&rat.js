class Rat {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.speed = Math.floor(Math.random() * 100);
    }
    chirp() {
        return 'chít chít';
    }
    getName() {
        return this.name;
    }
}
class Cat {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = Math.floor(Math.random() * 100);

    }
    getWeight() {
        return this.weight;
    }
    chirp() {
        return 'meo meo';
    }
    catchMouse(rat) {
        return cat.maxSpeed > rat.speed ? 'Mèo đã bắt được chuột.' : 'Chuột đã chạy thoát.'
    }
    eat(rat) {
        rat.name = 'Chuột đã bị ăn thịt.';
        rat.weight = 0;
        rat.speed = 0;
        this.weight += 1;
    }
}
let rat = new Rat('Jerry', 2);
console.log(rat.getName());
console.log(rat.chirp());
let cat = new Cat('Tom', 5);
console.log(cat.getWeight());
console.log(cat.chirp());
console.log(cat.catchMouse(rat));
cat.eat(rat);
console.log(rat.getName());
console.log(cat.getWeight());
