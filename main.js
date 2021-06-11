const {BrowserWindow, app, Tray, Menu} = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600, 
    transparent: true,
    frame:false,
	alwaysOnTop: true,
	nodeIntegration: false,
	skipTaskbar: true
  })
  win.setIgnoreMouseEvents(true),
  win.setPosition(-20, -230)
  win.loadURL(`OVERLAYURLHERE`)
}

app.whenReady().then(() => {
  createWindow()
  tray = new Tray('./icon.ico')
  tray.setToolTip('Lastfm Now Playing Overlay')
  const contextMenu = Menu.buildFromTemplate([
	{label: 'Quit', type: 'normal', click: () => app.quit()}
	])
  tray.setContextMenu(contextMenu)
})

 