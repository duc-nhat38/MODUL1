
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let img = document.getElementById("myCar");
function Rectangle() {
    ctx.fillStyle = "yellow"
    ctx.fillRect(40, 40, 40, 40)
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
Rectangle();
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

function keyDown(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {

        case 39:
            
            moveRight();
            ctx.clearRect(0, 0, 600, 400);
            car.myCar();
            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
    }
}

document.addEventListener("keydown", keyDown);

