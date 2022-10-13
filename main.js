const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
require("./data-base");

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    minWidth: 800,
    minHeight: 600,
    height: 600,

    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true, //relaciona LOS NODOS
      contextIsolation: false, //para que la barra personalizada funcione
      devTools: true,

      // preload: path.join(__dirname, 'preload.js')
    }
  })

  //mainWindow.loadFile('html/index.html')
  mainWindow.loadURL("http://localhost:3000")

  ipcMain.on("minimizeApp", () => {
    mainWindow.minimize()
  })

  ipcMain.on("maximizeRestoreApp", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  })

  ipcMain.on("closeApp", () => {
    mainWindow.close()
  })

  mainWindow.on("maximize", () => {
    mainWindow.webContents.send('isMaximized')
  })

  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send('isRestored')
  })

  mainWindow.on("focus", () => {
    mainWindow.webContents.send("isFocus")
  })

  mainWindow.on("blur", () => {
    mainWindow.webContents.send("isInactive")
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on("addScore", function () {
  const score1 = new score({
    rank: 2,
    name: "Dalton",
    score: 99999,
  })
  score1.save().then(result => {
    console.log("SAVE", result);
  }).catch(error => {
    console.log("ERROR", error);
  })
})

ipcMain.on("getScores", (e) => {
  ScoresFind().then(scoresQuery => {
    console.log(scoresQuery);
    let scores = scoresQuery.map(e => e._doc)
    e.reply("scores", scores)
  })
})