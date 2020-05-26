
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let img = document.getElementById("myCar");
function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.drawRect = function () {
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function Racing(x, y, width, height) {
    this.x = x,
        this.y = y,
        this.width = width,
        this.height = height

    this.myCar = function () {

        ctx.drawImage(img, car.x, car.y, car.width, car.height);
    }
}
let draw1 = new Rectangle(40, 40, 40, 80);
draw1.drawRect();
let draw2 = new Rectangle(0, 160, 120, 80);
draw2.drawRect();
let draw3 = new Rectangle(120, 0, 80, 120);
draw3.drawRect();
let draw4 = new Rectangle(40, 280, 160, 40);
draw4.drawRect();
let draw5 = new Rectangle(160, 120, 40, 160);
draw5.drawRect();
let draw6 = new Rectangle(0, 360, 360, 40);
draw6.drawRect();
let draw7 = new Rectangle(240, 0, 200, 80);
draw7.drawRect();
let draw8 = new Rectangle(240, 120, 80, 160);
draw8.drawRect();
let draw9 = new Rectangle(240, 320, 120, 40);
draw9.drawRect();
let draw10 = new Rectangle(320, 120, 240, 40);
draw10.drawRect();
let draw11 = new Rectangle(360, 200, 80, 200);
draw11.drawRect();
let draw12 = new Rectangle(480, 40, 80, 320);
draw12.drawRect();
let draw13 = new Rectangle(520, 360, 40, 40);
draw13.drawRect();
let car = new Racing(0, 0, 40, 40)
car.myCar();


function moveUp() {
    car.y -= 5;
}

function moveDown() {
    car.y += 5;
}

function moveRight() {
    car.x += 5;

}
function moveLeft() {
    car.x -= 5;
}
function update() {
    ctx.clearRect(0, 0, 600, 400);
    car.myCar();
    draw1.drawRect();
    draw2.drawRect();
    draw3.drawRect();
    draw4.drawRect();
    draw5.drawRect();
    draw6.drawRect();
    draw7.drawRect();
    draw8.drawRect();
    draw9.drawRect();
    draw10.drawRect();
    draw11.drawRect();
    draw12.drawRect();
    draw13.drawRect();
    requestAnimationFrame(update);
}

function keyDown(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {

        case 39:

            moveRight();

            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
        case 37:
            moveLeft();
            break;
    }
}

document.addEventListener("keydown", keyDown);
update();
