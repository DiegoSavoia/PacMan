
import { useNavigate } from "react-router-dom"
import "./back.css"
function Back() {
    const navigate = useNavigate()
    return (

        <div id="back">
            <button id="back_btn" onClick={e=> navigate("/homepage")}>Back</button>
        </div>
    )

}
export default Back

