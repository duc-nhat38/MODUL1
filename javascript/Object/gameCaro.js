let table = '<table>'
for (let i = 0;i<20;i++){
    table += '<tr>';
    for (let j = 0;j<20;j++){
        table += '<td>'+'</td>';
    }
    table += '</tr>'
}table+= '</table>';
document.write (table)

function Player1(){
    confirm('lượt player1');
    document.write('O');
}
function Player2() {
    confirm('lượt player2');
   document.write('X');
}
document.addEventListener('click', Player1);
document.addEventListener('click', Player2);