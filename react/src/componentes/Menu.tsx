import { useNavigate } from "react-router-dom"
import "./menu.css"
function Menu() {
    const navigate = useNavigate()
    return (

        <div id="back">
            <button id="back_btn" onClick={e=> navigate("/homepage")}>Back</button>
        </div>
    )

}
export default Menu 