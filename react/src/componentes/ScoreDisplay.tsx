
interface ScoreParams{
    rank: number,
    name: string,
    score: number
}

function ScoreDisplay({rank, name, score}: ScoreParams) {

    return(
        <div className="Score-container">
            <div className="Score Rank">{rank}</div>
            <div className="Score Name">{name}</div>
            <div className="Score Score">{score}</div>
        </div>
    )
}

export default ScoreDisplay
