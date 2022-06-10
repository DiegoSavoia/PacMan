const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

function createWindow() {
  const mainWindow = new BrowserWindow({
<<<<<<< HEAD
    width: 800,
   minWidth:800,
   minHeight:600,
    height: 600,
    
=======
    width: 800,   
    height: 600,    
>>>>>>> 905a4a2033bf2c76c68ffa7faef24560e00f41b2
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true, //relaciona LOS NODOS
      contextIsolation: false, //para que la barra personalizada funcione
      devTools: true,

      // preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('menu-final.html')

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