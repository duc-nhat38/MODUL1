class Mobile {
    constructor() {
        this.bettary = 100;
        this.memory1 = new Array();
        this.memory2 = new Array();
        this.memory3 = new Array();
        this.status;
        this.str;
        this.ask;
    }
    turnOn() {
        this.bettary -= 1;
        this.status = true;
    }
    turnOff() {
        this.bettary -= 1;
        this.status = false;
    }
    checkStatus() {
        if (this.status) {
            this.bettary -= 1;
            return this.status;
        }
    }
    charge() {
        if (this.status) {
            if (this.bettary < 100) {
                this.bettary += 1
            }
        }
    }
    texting() {
        if (this.status) {
            this.bettary -= 1;
            this.str = prompt('Soạn tin nhắn :');
            this.ask = confirm('Bạn có muốn gửi không');

        }
    }


    receive() {
        if (this.status) {
            this.bettary -= 1;
            return this.memory3[this.memory3.length-1];


        }
    }

    getSend() {
        if (this.status) {
        
            this.bettary -= 1;
            return this.memory2;
        }
    }
    getReceive() {
        if (this.status) {
            this.bettary -= 1;

            return this.memory3;
        }
    }
}

class Mobile1 extends Mobile {
    constructor() {
        super();
    }
    send(iphone) {
        if (this.status) {
            this.bettary -= 1;

            if (this.ask) {
       
                this.memory2.push(this.str);
                iphone.memory3.push(this.str);

            } else {
                this.memory1.push(this.str);
            }
        }
    }
}
class Mobile2 extends Mobile {
    constructor() {
        super();
    }
    send(nokia) {
        if (this.status) {
            this.bettary -= 1;

            if (this.ask) {
                this.memory2.push(this.str);
                nokia.memory3.push(this.str);
            } else {
                this.memory1.push(this.str);
            }
        }
    }
}
let nokia = new Mobile1();
nokia.turnOn();
console.log(nokia.checkStatus());
nokia.texting();
let iphone = new Mobile2();
iphone.turnOn();
nokia.send(iphone);
console.log(iphone.receive());
console.log(iphone.getReceive());
console.log(nokia.getSend());

