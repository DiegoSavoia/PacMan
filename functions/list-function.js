var scoreList = [2350, 215, 6273, 25];

const scoreRank = document.getElementById("score-rank")

function scoreToHTML(score, index){
    return `
        <li id="score${index}" class="scores">
            <p>${score}</p>
        </li>
    `
}

function renderRank() {
    scoreRank.innerHTML = scoreList.map((score, index) => {
      return scoreToHTML(score, index);
    })
}

renderRank()