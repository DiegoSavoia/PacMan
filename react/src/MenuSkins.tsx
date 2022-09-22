import { useNavigate } from 'react-router-dom';
import Back from './componentes/Back';
import './menu-skins.css';

function MenuSkins() {
    const navigate = useNavigate();

    return (
        <div>
            <div id="general-title">
                <h1 id="title">Skins</h1>
                <p id="subtitle">Choose your skin</p>
            </div>
            <div id="skins">
                <div id="skins-pacman">
                    <img id="skins-pacman-img" src="../img/skin-pacman.png" width="50" height="50"></img>
                    <p id="skins-pacman-text">PacMan</p>
                </div>
                <div id="skins-mspacman">
                    <img id="skins-mspacman-img" src="../img/skin-ms-pacman.png" width="50" height="50"></img>
                    <p id="skins-mspacman-text">Ms PacMan</p>
                </div>
            </div>
            <div id="button-block">
                <button id="button" className="zoom button" type="button">Accept</button>
            </div>
            <Back></Back>
        </div>
    )
}

export default MenuSkins;
