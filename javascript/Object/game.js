
function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = 50;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
  }
}

var hero = new Hero('tom.png', 20, 30, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size && hero.top <= 20) {
    hero.moveRight();

  }
  if (hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
    hero.top += hero.speed;
  }
  if (hero.left >= 30 && hero.top > window.innerHeight - hero.size) {
    hero.left -= hero.speed;
  }
  if (hero.left < 30) {
    hero.top -= hero.speed;
  }


  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();