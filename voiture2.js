const voiture = document.getElementById('voiture');

const canvas = [
    ["X","X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X","D", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " ", "X"],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " ", "X"],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " ", "X"],
    ["X"," ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " ", "X"],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " ", "X"],
    ["X", "", "p", "p", "p", " ", "p", "p", "p", " ", "X"],
    ["X"," ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
    ["X","X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

// x = line, y = column on the canvas
var position = {x: 1, y: 1};

// fonctions générales
function logPosition() {
    console.log(`la coordonnée X vaut ${position.x}`)
    console.log(`la coordonnée Y vaut ${position.y}`)
    console.log(`la voiture est sur ${canvas[position.x][position.y]}`)
}
function checkPosition() {
    if(canvas[position.x][position.y] === "X" || canvas[position.x][position.y] === "p") {
        return false
    } else {
        return true;
    }
}

logPosition();

// fonctions de mouvement
function moveRight() {
    position.y += 1;
    if(checkPosition()) {
        voiture.style.gridColumn = position.y;
        logPosition();
    } else {
        position.y -= 1;
        alert("ET BIM !!!");
    }
}
function moveLeft() {
    position.y -= 1;
    if(checkPosition()) {
        voiture.style.gridColumn = position.y;
        logPosition();
    } else {
        position.y += 1;
        alert("ET BIM !!!");
    }
}
function moveBottom() {
    position.x += 1;
    if(checkPosition()) {
        voiture.style.gridRow = position.x;
        logPosition();
    } else {
        position.x -= 1;
        alert("ET BIM !!!");
    }
}
function moveTop() {
    position.x -= 1;
    if(checkPosition()) {
        voiture.style.gridRow = position.x;
        logPosition();
    } else {
        position.x += 1;
        alert("ET BIM !!!");
    }
}
