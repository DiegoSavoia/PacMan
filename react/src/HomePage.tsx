import { useNavigate } from "react-router-dom";
import "./homePage.css"
import logo from './public/img/logo.png';

const ipcRenderer = window.require("electron").ipcRenderer

function HomePage() {
    const navigate = useNavigate()

    function redirectLogin(): void {
        throw new Error("Function not implemented.")
    }
    return (
        
        <div className="Homepage">
            <script src="directionalnavigation-1.0.0.0.js"></script>
            <div id="menu-inicio">
                <img id="logo" src="../img/logo.png" />
                <h3 id="menu">Menu</h3>
                <div id="options">
                    <h6 className="button zoom" id="play" onClick={e => navigate("/game")} >Play</h6>
                    <h6 className="button zoom" id="score" onClick={e => navigate("/score")}>Score</h6>
                    <h6 className="button zoom" id="skin" onClick={e => navigate("/menuskins")}>Skin</h6>
                    <h6 className="button zoom" id="exit" onClick={e => ipcRenderer.send('closeApp')}>Exit</h6>
                </div>
            </div>
        </div>
    )

}
export default HomePage



