const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const path = require('path')

try{
  require("electron-reloader")(module)
} catch(_) {}

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame:false,
    transparent:true,
    webPreferences: {
      nodeIntegration:true, //relaciona LOS NODOS
      contextIsolation:false, //para que la barra personalizada funcione
      devTools:true,
      
      // preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')

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

ipcMain.on("minimize", () => {
  mainWindow.minimize()
})

ipcMain.on("maximizeRestoreApp", () => {
  if (mainWindow.isMaximized()){
    mainWindow.unmaximize()
  } else{
    mainWindow.maximize()
  }
})

mainWindow.on("maximize", () =>{
  ipcMain.webContents.send("isMaximised")
})

mainWindow.on("restore", () =>{
  ipcMain.webContents.send("isRestored")
})

ipcMain.on("close", () => {
  mainWindow.close()
})