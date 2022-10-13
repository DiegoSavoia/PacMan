import "./addScore.css"
const ipcRenderer = window.require("electron").ipcRenderer

function AddScore() {
    return(
        <div id="add">
            <button id="add_btn" onClick={e => ipcRenderer.send("addScore")}>Add Score</button>
        </div>
    )
}

export default AddScore