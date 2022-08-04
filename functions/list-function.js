var scoreList = [2350, 215, 6273, 25, 1000, 234, 4];
var playerList = ["Carlos","Juli","Sose"]

const scoreRank = document.getElementById("score-rank")
const playerRank = document.getElementById("score-player")

function scoreToHTML(score, index){
    return `
        <li id="score${index}" class="scores">
            <p>${score}</p>
        </li>
    `
}


function playerToHTML(player, index){
    return `
        <li id="player${index}" class="scores">
            <p>${player}</p>
        </li>
    `
}

function renderRank() {
    scoreRank.innerHTML = "";

    scoreList.forEach((score, index) => {
    scoreRank.innerHTML += scoreToHTML(score, index);
  })
}


function renderPlayer() {
    playerRank.innerHTML = "";

    playerList.forEach((player, index) => {
    playerRank.innerHTML += playerToHTML(player, index);
  })
}

renderRank()
renderPlayer()