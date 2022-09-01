
import "./back.css"
function Back() {
    function redirectIndex(): void {
        throw new Error("Function not implemented.")
    }
    return (

        <div id="back">
            <button id="back_btn" onClick={e=> redirectIndex()}>Back</button>
        </div>
    )

}
export default Back

