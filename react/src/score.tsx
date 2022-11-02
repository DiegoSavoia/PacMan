import { title } from 'process';
import Back from './componentes/Back';
import ScoreDisplay from './componentes/ScoreDisplay';
import AddScore from './componentes/AddScore';
import './score.css';
import Refresh from './componentes/Refresh';
import { useEffect, useState } from 'react';
import ScoreModel from './models/ScoreModel';

const ipcRenderer = window.require("electron").ipcRenderer

function Score() {

    const [scorelist, setScoreList] = useState<ScoreModel[]>([])

    ipcRenderer.on("scores", (e: any, r: ScoreModel[]) => {
        setScoreList(r)
        
    })

    useEffect(()=>{
        ipcRenderer.send("getScores")
    },[])
    return (
        <div id="screen">
            <p id="title">The 10 Best Players</p>
            <div id="high-score">
                {scorelist.map(({ rank, name, score }) => <ScoreDisplay rank={rank} name={name} score={score} />)}
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

export default Score;