const { ipcRenderer } = require("electron")

var minimizeBtn = null;
var maxResBtn = null;
var closeBtn = null; 

fetch('components/nav.html')
    .then(res => res.text())
    .then(htmlNav => {
        let oldElement = document.querySelector("script#replace_with_navbar");
        let newElement = document.createElement("div");
        newElement.innerHTML = htmlNav
        oldElement.parentNode.replaceChild(newElement, oldElement);

        const minimizeBtn = document.getElementById("minimize");
        const maxResBtn = document.getElementById("maximize");
        const closeBtn = document.getElementById("close");
        const exitBtn = document.getElementById("exit")

        minimizeBtn.addEventListener("click", () => {
            ipcRenderer.send("minimize")
        })
        
        maxResBtn.addEventListener("click", () => {
            ipcRenderer.send("maximizeRestoreApp")
        })
            
        closeBtn.addEventListener("click", () => {
            ipcRenderer.send("close")
        })

        exitBtn.addEventListener("click", () => {
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
    })



function redirectSkins() {
    location.replace("menu-skins.html")
}

function redirectIndex() {
    location.replace("index.html")
}