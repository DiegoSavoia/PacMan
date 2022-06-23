const { ipcRenderer } = require("electron")

var minimizeBtn = null;
var maxResBtn = null;
var closeBtn = null; 

fetch('../components/nav.html')
    .then(res => res.text())
    .then(htmlNav => {
        let oldElement = document.querySelector("script#replace_with_navbar");
        let newElement = document.createElement("div");
        newElement.innerHTML = htmlNav
        oldElement.parentNode.replaceChild(newElement, oldElement);

        minimizeBtn = document.getElementById("minimize");
        maxResBtn = document.getElementById("maximize");
        closeBtn = document.getElementById("close");
        exitBtn = document.getElementById("exit");

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

    function redirectScore() {
        location.replace("menu-final.html")
    }
    
    function redirectGame() {
        location.replace("game.html")
    }