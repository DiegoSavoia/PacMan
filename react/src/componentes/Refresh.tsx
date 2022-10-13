import "./addScore.css"
const ipcRenderer = window.require("electron").ipcRenderer

function Refresh() {
    return (
        <div id="add">
            <button id="add_btn" onClick={e => ipcRenderer.send("getScores")}>Refresh</button>
        </div>
    )
}

export default Refresh