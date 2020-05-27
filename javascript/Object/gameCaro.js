function table() {
    let data = '';
    let array = [];
    for (let i = 0; i < 20; i++) {
        array[i] = [];
        data += '<br>'
        for (let j = 0; j < 20; j++) {
            array[i][j] = 0;
            data += array[i][j] + "&nbsp;&nbsp;"

        }


    }
    return data;
}
table();
document.getElementById('div1').innerHTML = table();