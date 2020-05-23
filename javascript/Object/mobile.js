function Mobile1(){
    this.pin = function(){
        let pin = 100;          
    }
    this.mess = function(){
        
    }
}

function turnOn(){
    let ask1 = confirm('bạn muốn bật điện thoại không?');
    if (ask1){
        let ask2 = confirm('bạn muốn bật điện thoại nào?');
        if(ask2) {
            document.write(nokia)
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