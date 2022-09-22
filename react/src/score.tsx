import Back from './componentes/Back';
import './score.css';

function Score() {

    return (
        <div id="screen">
            <p id="title">The 10 Best Players</p>
            <div id="high-score">
                <div id="rank">
                    <h1 className="category-title">Rank</h1>
                    <p>1st</p>
                    <p>2nd</p>
                    <p>3rd</p>
                    <p>4th</p>
                    <p>5th</p>
                    <p>6th</p>
                    <p>7th</p>
                    <p>8th</p>
                    <p>9th</p>
                    <p>10th</p>
                </div>
                <div id="score">
                    <h1 className="category-title">Score</h1>
                    <ul id="score-rank">
                    </ul>
                </div>
                <div id="player">
                    <h1 className="category-title">Player</h1>
                    <ul id="score-player"></ul>
                </div>
            </div>
            <p id="personal-title">This is your Personal Best</p>
            <div id="personal">
                <div id="personal-rank">
                    <p>global position</p>
                </div>
                <div id="personal-score">
                    <p>best score</p>
                </div>
                <div id="personal-user">
                    <p>username</p>
                </div>
            </div>
            <Back></Back>
        </div>
    )
}

export default Score;