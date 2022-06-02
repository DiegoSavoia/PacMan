const { ipcRenderer } = require("electron")
    
const minimizeBtn = document.getElementById("minimizeBtn");
const maxResBtn = document.getElementById("maxResBtn");
var isMaximized = false;
const closeBtn = document.getElementById("closeBtn");

minimizeBtn.addEventListener("click", () => {
    ipcRenderer.send("minimize")
})
  
maxResBtn.addEventListener("click", () => {
    changeMaxResBtn(isMaximized)
})
    
closeBtn.addEventListener("click", () => {
    ipcRenderer.send("close")
})

function changeMaxResBtn(isMaximizedApp){
    if(isMaximizedApp){
        isMaximized = true;
        maxResBtn.title = "Restore"
        maxResBtn.classList.remove("maximizeBtn")
        maxResBtn.classList.add("restoreBtn")
    } else {
        isMaximized = false;
        maxResBtn.title = "Maximize"
        maxResBtn.classList.remove("restoreBtn")
        maxResBtn.classList.add("maximizeBtn")
    }
}