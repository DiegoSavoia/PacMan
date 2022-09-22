import { useNavigate } from "react-router-dom";
import "./homePage.css"
import logo from './public/img/logo.png';
<<<<<<< HEAD
function HomePage(){
=======
function HomePage() {
    const navigate = useNavigate()

>>>>>>> 22233625595ad6a6a57033fd9c9746848b46cb49
    function redirectScore(): void {
        throw new Error("Function not implemented.")
    }
    function redirectSkins(): void {
        throw new Error("Function not implemented.")
    }
    
    function redirectLogin(): void {
        throw new Error("Function not implemented.")
    }
<<<<<<< HEAD
    return(
        
        <div id="menu-inicio">
        <img id="logo" src="../img/logo.png"/>

        <h3 id="menu">Menu</h3>

        <div id="options">
            <h6 className="button zoom" id="play" onClick= {e=> redirectLogin()} >Play</h6>
            <h6 className="button zoom" id="score" onClick={e=> redirectScore()}>Score</h6>
            <h6 className="button zoom" id="skin" onClick={e=> redirectSkins()}>Skin</h6>
            <h6 className="button zoom" id="exit">Exit</h6>
        </div>           

    </div>
=======
    return (
        <div className="Homepage">
            <div id="menu-inicio">
                <img id="logo" src="../img/logo.png" />
                <h3 id="menu">Menu</h3>
                <div id="options">
                    <h6 className="button zoom" id="play" onClick={e => redirectLogin()} >Play</h6>
                    <h6 className="button zoom" id="score" onClick={e => navigate("/score")}>Score</h6>
                    <h6 className="button zoom" id="skin" onClick={e => navigate("/menuskins")}>Skin</h6>
                    <h6 className="button zoom" id="exit">Exit</h6>
                </div>
            </div>
        </div>
>>>>>>> 22233625595ad6a6a57033fd9c9746848b46cb49
    )

}
export default HomePage



