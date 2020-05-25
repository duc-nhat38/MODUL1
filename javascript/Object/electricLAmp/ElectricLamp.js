class ElectricLamp {
     
    constructor(){
        this.status = false;
    }
    turnOn() {
      this.status = true;

    }
    turnOff() {
      this.status = false;
      }
}
class SwitchButton {
    lamp;
    status;
    constructor() {
        this.status = false ;
        this.lamp;
    }
    connectToLamp(electricLamp){

        this.lamp = electricLamp;
    }
    
    switchOn() {
       this.status = true ;
       this.lamp.status = true;
    }
    switchOff(){
        this.status = false;
        this.lamp.status= false;
    }
}
let electricLamp = new ElectricLamp();
let switch1 = new SwitchButton();
switch1.connectToLamp(electricLamp);
switch1.switchOn();
console.log(electricLamp)