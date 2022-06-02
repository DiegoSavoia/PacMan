const { ipcRenderer } = require("electron")
    
const minimizeBtn = document.getElementById("minimize");
const maxResBtn = document.getElementById("maximize");
const closeBtn = document.getElementById("close");

minimizeBtn.addEventListener("click", () => {
    ipcRenderer.send("minimize")
})
  
maxResBtn.addEventListener("click", () => {
    ipcRenderer.send("maximizeRestoreApp")
})
    
closeBtn.addEventListener("click", () => {
    ipcRenderer.send("close")
})

function changeMaxResBtn(isMaximizedApp){
    if(isMaximizedApp){
        maxResBtn.title = "Restore"
        maxResBtn.classList.remove("maximizeBtn")
        maxResBtn.classList.add("restoreBtn")
    } else {
        maxResBtn.title = "Maximize"
        maxResBtn.classList.remove("restoreBtn")
        maxResBtn.classList.add("maximizeBtn")
    }
}

ipcRenderer.on("isMaximized", () => {
    changeMaxResBtn(true)
})

ipcRenderer.on("isRestored", () => {
    changeMaxResBtn(false)
})