
let array =[];
function drawTable(){
    let str ='<table>';
    for(let i =0; i<array.length; i++){
        str+='<tr>'
        +'<td class="col1">'+array[i]+'</td>'
        +'<td class="col2">'+'<button class="button1" onclick="edit_product('+i+')">Edit</button>'+'</td>'
        +'<td class="col3">'+'<button class="button1" onclick="del_product('+i+')">Delete</button>'+'</td>'
        +'</tr>';
    }
    str+='</table>';
    document.getElementById('table').innerHTML =str;
}
drawTable();
function button_add(){
    let arr = document.getElementById('input1').value;
    array.push(arr);
    drawTable();
    document.getElementById('input1').value = '';
}
function edit_product(i) {
     let edit = prompt('sNhập:')    
     array[i] = edit ;
     drawTable();
    
}
function del_product(i) {
    array.splice(i,1)
    drawTable();
}