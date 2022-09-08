import "./homePage.css"
import logo from './public/img/logo.png';
function HomePage() {
    function redirectScore(): void {
        throw new Error("Function not implemented.")
    }
    function redirectSkins(): void {
        throw new Error("Function not implemented.")
    }

    function redirectLogin(): void {
        throw new Error("Function not implemented.")
    }
    return (
        <div className="Homepage">
            <div id="menu-inicio">
                <img id="logo" src="../img/logo.png" />
                <h3 id="menu">Menu</h3>
                <div id="options">
                    <h6 className="button zoom" id="play" onClick={e => redirectLogin()} >Play</h6>
                    <h6 className="button zoom" id="score" onClick={e => redirectScore()}>Score</h6>
                    <h6 className="button zoom" id="skin" onClick={e => redirectSkins()}>Skin</h6>
                    <h6 className="button zoom" id="exit">Exit</h6>
                </div>
            </div>
        </div>
    )

}
export default HomePage



