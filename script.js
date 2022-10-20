function randInt(upper) {
    return Math.floor(Math.random() * upper)
}

function drawAttack() {
    players = document.querySelectorAll(".player:not(.libera)")

    let maxCount = 0
    do {
        choice = players[randInt(players.length)]
        ++maxCount
    } while(choice.classList.contains("setter") && maxCount < 2)

    const attackElem = document.querySelector("#attack")
    attackElem.setAttribute("x1", choice.getAttribute("x"))
    attackElem.setAttribute("y1", choice.getAttribute("y"))

    let x = randInt(80) + 10
    let y = randInt(40) + 5
    maxCount = 0
    do {
        y = randInt(40) + 5
        ++maxCount
    } while(y > 33 && maxCount < 2)
    attackElem.setAttribute("x2", `${x}%`)
    attackElem.setAttribute("y2", `${y}%`)

    const ballElem = document.querySelector("#ball")
    ballElem.setAttribute("cx", `${x}%`)
    ballElem.setAttribute("cy", `${y}%`)
}


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        drawAttack()
    }
});
