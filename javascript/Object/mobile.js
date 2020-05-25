function Mobile1(){
    
    document.addEventListener('click', message);
    document.addEventListener('click', betary);
    document.addEventListener('click', turnOn);
  
}

function turnOn(){
    let ask1 = confirm('bạn muốn bật điện thoại không?');
    if (ask1){
        let ask2 = confirm('bạn muốn bật điện thoại nào?');
        if(ask2) {
            Mobile1()
        }else {
            document.write(iphone)
        }
    }
}

function message() {
    let memory = [];
    let write = prompt('Soạn tin nhắn : ');
    let ask = confirm('Bạn muốn gửi tin nhắn');
    if(ask){
        confirm('tin nhắn :'+write);
    }else {
          memory.push(write);
    }
    
}
let pin = 100;
function betary() {
    
    if (turnOn()){
        pin-=100
    }
}
function change(){
    pin +=1;
    if(pin===100){
        break;
    }
}
turnOn()
Mobile1();