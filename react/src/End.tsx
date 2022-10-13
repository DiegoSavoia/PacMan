import { useNavigate } from "react-router-dom";
import "./end.css"
function HomePage() {
    const navigate = useNavigate()

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
        <div className="end">
            <div id="title">
            <h1 id="score">SCORE</h1>
            <h2>123456</h2>
        </div>
        
        <div id="buttons">
            <button className="zoom button" >Submit </button>
            <button className="zoom button">Cancel</button>
        </div>
        </div>
        
    )

}
export default HomePage