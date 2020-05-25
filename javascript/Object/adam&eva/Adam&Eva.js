class Apple {
    weight;
    constructor(){
        this.weight = 10;
    }
    decrease() {
         this.weight -=1;
    }
    isEmpty() {
      if (this.weight<=0){
          return 'Không còn quả táo nào.'
      }
    }
    getWeight() {
        return  this.weight;
    }
}
class Human {
    name;
    gender;
    weight;
    
     constructor(name,gender,weight) {
         this.name = name;
         this.gender = gender;
         this.weight = weight;
     }
     isMale() {
        return this.gender;
     }
     setGender(gender){
         this.gender = gender;
     }
     checkApple(apple){
         return apple.getWeight();
     }
     eat(apple){
        if (apple.weight>0){
            apple.decrease();
            this.weight +=1 ;
        }
         
     }
     say(string){
          console.log(this.name +string)
     }
     getName(){
         return this.name;
     }
     setName(name) {
         this.name = name;
     }
     getWeight(){
         return this.weight;
     }
     setWeight(weight){
         this.weight = weight;
     }
}
let apple = new Apple();
apple.getWeight();
let human1 = new Human('adam',true,50);
console.log(human1.isMale());
human1.eat(apple);
console.log(human1.checkApple(apple));
console.log(human1.getWeight());
let human2 = new Human('eva',false,45);
console.log(human2.isMale());
human2.eat(apple);
console.log(human2.checkApple(apple));
console.log(human2.getWeight());
console.log(human2.getName());