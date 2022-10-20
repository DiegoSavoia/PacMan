import { title } from 'process';
import Back from './componentes/Back';
import ScoreDisplay from './componentes/ScoreDisplay';
import AddScore from './componentes/AddScore';
import './score.css';
import Refresh from './componentes/Refresh';
import { useState } from 'react';

const ipcRenderer = window.require("electron").ipcRenderer

function Score() {

    const [scorelist, setScoreList] = useState([])

    ipcRenderer.on("scores", (e: any, r: { rank: any; name: any; score: any; }[]) => {
        
    })

    return (
        <div id="screen">
            <p id="title">The 10 Best Players</p>
            <div id="high-score">
                {scorelist.map(({ listRank, listName, listScore }) => <ScoreDisplay rank={listRank} name={listName} score={listScore} />)}
            </div>
            <p id="personal-title">This is your Personal Best</p>
            <div id="personal">
            </div>
            <Back></Back>
            <AddScore></AddScore>
            <Refresh></Refresh>
        </div>
    )
}
// 
export default Score;