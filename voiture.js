const voiture = document.getElementById('voiture');
// console.log(voiture.style)
var x = 1
var y = 1

function moveLeft() {
    if (x > 1) {
        x -= 1;
        voiture.style.gridColumn = x;
        check = checkPark()   
        if(check) {
            alert("Oh fada, c'est pas Marseille ici !");
            x += 1;
            voiture.style.gridColumn = x;
        }
    }
}
function moveTop() {
    if (y > 1) {
        checkPark()
        y -= 1
        voiture.style.gridRow = y;
        check = checkPark();
        if(check) {
            alert("Oh fada, c'est pas Marseille ici !");
            y += 1
            voiture.style.gridRow = y;
        }
    }
}
function moveBottom() {
    if (y < 9) {
        checkPark()
        y += 1
        voiture.style.gridRow = y;
        check = checkPark();
        if (check) {
            alert("Oh fada, c'est pas Marseille ici !");
            y -= 1;
            voiture.style.gridRow = y;
        }
    }
}
function moveRight() {
    if (x < 9) {
        checkPark()
        x += 1
        voiture.style.gridColumn = x;
        check = checkPark()
        if (check) {
            alert("Oh fada, c'est pas Marseille ici !"); 
            x -= 1;
            voiture.style.gridColumn = x;
        }
    }
}

function checkPark() {
    if(y >= 2 && y <= 4 && x >= 2 && x <= 4) {
        return true
    } else if (y >= 6 && y <= 8 && x >= 2 && x <= 4) {
        return true
    } else if (y >= 2 && y <= 4 && x >= 6 && x <= 8) {
        return true
    } else if (y >= 6 && y <= 8 && x >= 6 && x <= 8) {
        return true
    } else {
        return false
    }
}
