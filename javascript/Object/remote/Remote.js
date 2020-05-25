class Remote {
    constructor(code) {
        this.code = code ;

    }
    changeChanel(tivi){
        tivi.chanel = this.code;
    }
    volumeControl(num) {
        tivi.volume += num;
    }
    turnOnTv(tivi){
        tivi.status = true;
    }
    turnOffTv(tivi){
        tivi.status = false;
    }
}
class Tivi{
    constructor(){
        this.chanel;
        this.volume;
        this.status;
        
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
    setChanel(chanel){
        if (this.status){
            this.chanel = chanel;
        }
    }
    setVolume(volume){
        if (this.status){
            this.volume = volume ;
        }
        
    }
    getChanel(){
        return this.chanel;
    }
    getVolume(){
        return this.volume;
    }
}
let tivi = new Tivi();
tivi.turnOn();
console.log(tivi.status);
tivi.setChanel(7)
console.log(tivi.getChanel());
let remote = new Remote(3);
remote.changeChanel(tivi);
console.log(tivi.getChanel());
tivi.setVolume(2);
console.log(tivi.getVolume());
remote.turnOffTv(tivi);
console.log(tivi.status);