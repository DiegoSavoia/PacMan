var scoreList = [2350, 215, 6273, 25, 1000, 234, 4];

const scoreRank = document.getElementById("score-rank")

function scoreToHTML(score, index){
    return `
        <li id="score${index}" class="scores">
            <p>${score}</p>
        </li>
    `
}

function renderRank() {
    scoreRank.innerHTML = "";

    scoreList.forEach((score, index) => {
    scoreRank.innerHTML += scoreToHTML(score, index);
  })
}

renderRank()