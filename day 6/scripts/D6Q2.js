// console.log('assignment');

// function tabel() {
//     let num = parseInt(prompt('enter a number'));
// document.write(`Your number is :${num}`);
//     for (let i = 1; i <= 10; i++) {
//         let sum = num * i;
         

//         document.write(`${num} x ${i} = ${sum}`);

//     }

// }
// tabel();

function tables() {
    let show = document.querySelector('#tables');
        var i = 0;
        var n = prompt("enter a number:")

        for (i = 1; i <= 10; i++) {
            document.write('<table border="1" cellspacing="0">');
            for (i = 1; i <= 10; i++) {
                document.write("<tr><td>" + n + " x " + i + " = " + n * i + "</td></tr>");
            }
            document.write("</table> <br> <h2>Press F5 to go back</h2>");
        }    
}
document.querySelector('.two').addEventListener("click", tables);