import React from 'react';
import minimize from './public/img/minimize.png';
import close from './public/img/close.png';
import maximize from './public/img/maximize.png';
import restore from './public/img/restore.png';
import './topBar.css';

function TopBar() {
  return (
<div id="topbar">
    <p id="name">PacMan</p>
    <button className="topbar_buttons minimize" id="minimize" title="Minimize"></button>
    <button className="topbar_buttons maximize" id="maximize" title="Maximize"></button>
    <button className="topbar_buttons close" id="close" title="Close"></button>
</div>
  );
}

export default TopBar;