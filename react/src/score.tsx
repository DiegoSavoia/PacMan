import { title } from 'process';
import Back from './componentes/Back';
import ScoreDisplay from './componentes/ScoreDisplay';
import './score.css';

function Score() {

    const scorelist = [
        {listRank : 23, listName : "c4rL0s", listScore : 23521},
        {listRank : 12, listName : "Guidui", listScore : 86542}
    ];

    return (
        <div id="screen">
            <p id="title">The 10 Best Players</p>
            <div id="high-score">
               {scorelist.map(({listRank, listName, listScore}) => <ScoreDisplay rank={listRank} name = {listName} score = {listScore}/>)}
            </div>
            <p id="personal-title">This is your Personal Best</p>
            <div id="personal">
            </div>
            <Back></Back>
        </div>
    )
}

export default Score;