const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

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

  mainWindow.on("maximize", () =>{
    mainWindow.webContents.send("isMaximised")
  })
  
  mainWindow.on("restore", () =>{
    mainWindow.webContents.send("isRestored")
  })
  
  ipcMain.on("close", () => {
    mainWindow.close()
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