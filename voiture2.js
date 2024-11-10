const voiture = document.getElementById('voiture');

const canvas = [
    ["X","D", " ", " ", " ", " ", " ", " ", " ", " "],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " "],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " "],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " "],
    ["X"," ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " "],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " "],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " "],
    ["X"," ", " ", " ", " ", " ", " ", " ", " ", " "],
];

var position = {x: 1, y: 0};

console.log(position.x)
console.log(canvas.length)
console.log(canvas[0].length)

// function moveRight() {
//     if(x+1 > 9) {
//         alert('BAM !');
//     } else if (canvas[x][y-1] === "p") {
//         alert("C'est un parc, oh !");
//     } else {
//         x += 1;
//         voiture.style.gridColumn = x;
//     }
//     console.log(x);
// }

function moveRight() {
    if(position.x+1 >= canvas[position.y].length) {
        alert("BAM !")
    } else if (canvas[position.x][position.y] == "p") {
        alert("PARC !!!")
    } else {
        position.x = position.x +1;
        voiture.style.gridColumn = position.x;
    }
    console.log(position.x)
}
function moveLeft() {
    if(position.x-1 <= 0) {
        alert("BAM !")
    } else if (canvas[position.x-1][position.y] == "p") {
        alert("PARC !!!")
    } else {
        position.x = position.x -1;
        voiture.style.gridColumn = position.x;
    }
    console.log(position.x)
}