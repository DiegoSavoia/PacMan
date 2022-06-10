const { ipcRenderer } = require("electron")
    
const minimizeBtn = document.getElementById("minimize");
const maxResBtn = document.getElementById("maximize");
const closeBtn = document.getElementById("close");
const exitBtn = document.getElementById("exit")

minimizeBtn.addEventListener("click", () => {
    ipcRenderer.send("minimizeApp")
})
  
maxResBtn.addEventListener("click", () => {
    ipcRenderer.send("maximizeRestoreApp")
})
    
closeBtn.addEventListener("click", () => {
    ipcRenderer.send("closeApp")
})

exitBtn.addEventListener("click", () => {
    ipcRenderer.send("closeApp")
})

function changeMaxResBtn(isMaximizedApp){
    if(isMaximizedApp){
        maxResBtn.title = "Restore"
        maxResBtn.classList.remove("maximize")
        maxResBtn.classList.add("restore")
    } else {
        maxResBtn.title = "Maximize"
        maxResBtn.classList.remove("restore")
        maxResBtn.classList.add("maximize")
    }
}

ipcRenderer.on("isMaximized", () => {
    changeMaxResBtn(true)
})

ipcRenderer.on("isRestored", () => {
    changeMaxResBtn(false)
})

function redirectSkins() {
    location.replace("menu-skins.html")
}

function redirectIndex() {
    location.replace("index.html")
}