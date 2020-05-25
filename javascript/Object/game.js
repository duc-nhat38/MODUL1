function Hero(image, top, left, width, height,){
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.speed = 100
    
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.height + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
   /* this.moveRight = function(){
      this.left += hero.speed ;     
    }
    this.moveDown = function() {
        this.top += hero.speed
    }
    this.moveLeft = function() {
        hero.speed*=-1
        this.left += hero.speed;
    }
    this.moveTop = function() {       
        this.top += hero.speed;
    }*/
  }
  
  var hero = new Hero('tom.png', 0, 0, 200);
 
  function start(){
      
          hero.moveRight();
      
        
      /*if (hero.left > window.innerWidth-hero.size ) {
           hero.left = window.innerWidth-hero.size;
           hero.moveDown();   
      }
      if (hero.top >window.innerHeight-hero.size) {
        hero.top = window.innerHeight-hero.size;
        hero.moveLeft();
      }
      if (hero.left < 0){
           hero.left = 0;
           hero.moveTop();
      }
      if (hero.top < 0) {
          hero.top = 0;
          hero.moveRight();
      }*/
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}
  
  start();