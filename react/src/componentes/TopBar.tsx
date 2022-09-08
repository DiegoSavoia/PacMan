import React, { useState } from 'react';
// import minimize from '../public/img/minimize.png';
// import close from './public/img/close.png';
// import maximize from './public/img/maximize.png';
// import restore from './public/img/restore.png';
import './topBar.css';
const ipcRenderer = window.require("electron").ipcRenderer

function TopBar() {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isBlur, setIsBlur] = useState(false)

  ipcRenderer.on("isMaximized", () => {
    setIsMaximized(true)
  })

  ipcRenderer.on("isRestored", () => {
    setIsMaximized(false)
  })

  ipcRenderer.on("isFocus", () => {
    setIsBlur(false)
  })

  ipcRenderer.on("isInactive", () => {
    setIsBlur(true)
  })

  return (
    <div id="topbar">
      <p id="name">PacMan</p>
      <button className="topbar_buttons minimize" onClick={e => ipcRenderer.send('minimizeApp')} title="Minimize" ></button>
      <button className={"topbar_buttons " + (isMaximized ? "maximize" : "restore")} onClick={e => ipcRenderer.send('maximizeRestoreApp')} title="Maximize"></button>
      <button className="topbar_buttons close" id="close" title="Close"></button>
    </div>
  );
}

export default TopBar;