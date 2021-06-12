const {BrowserWindow, app, Tray, Menu, loader} = require('electron');
const fs = require('fs');

let rawData = fs.readFileSync('posData.json');
let readData = JSON.parse(rawData);

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 100, 
    transparent: true,
    frame:false,
	alwaysOnTop: true,
	nodeIntegration: false,
	skipTaskbar: true
  })
  
  win.setPosition(readData.bounds.x, readData.bounds.y)
  win.loadURL(`OVERLAYURLHERE`)
  tray = new Tray('./icon.ico')
  tray.setToolTip('Lastfm Now Playing Overlay')
  const contextMenu = Menu.buildFromTemplate([
  {label: 'Reload', type: 'normal', click: () => win.reload()},
  {label: 'Toggle Drag', type: 'checkbox', checked: false, click: isChecked => {
    if (isChecked.checked) {
      win.setIgnoreMouseEvents(false)
      win.webContents.insertCSS('body {-webkit-app-region: drag;}')
    }
    else {
      win.setIgnoreMouseEvents(true)
      win.webContents.insertCSS('body {-webkit-app-region: no-drag;}')
    }
  }},
  {type: 'separator'},
	{label: 'Quit', type: 'normal', click: () => app.quit()}
	])
  tray.setContextMenu(contextMenu)
  
  win.on('close', function (){
    var data = {
      bounds: win.getBounds()
    };
    fs.writeFileSync('posData.json', JSON.stringify(data));
  })
}

app.whenReady().then(() => {
  const mainWindow = createWindow()
})

 