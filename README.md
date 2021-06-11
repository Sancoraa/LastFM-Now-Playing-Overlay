# Lastfm-Now-Playing-Overlay

This project is an overlay mainly used to display your current [Last.fm](https://www.last.fm/) scrobble.

## Example

<img src=https://i.imgur.com/nilMjVk.gif>

## Requirements

[Node.js](https://nodejs.org/en/)
[Electron](https://www.electronjs.org/)

## Instructions

1. Clone the repository
2. Edit `main.js` to yoour likings
  2. `width : x` where x is the width of the window. **Default : 800**
  2. `height : x` where x is the height of the window. **Default : 600**
  2. `win.setPosition(x, y)` where x is the horizontal pos and y the vertical pos. **Defaut : -20, -230**
  2. `win.loadURL('x')` where x is your overlay URL. _I personnaly use [pixelchat.tv](https://pixelchat.tv/)_
3. Open a terminal and install Electron
    3. `$ npm install --save-dev electron`
4. Run the program 
    4. `$ npm start`
    
##### Optional

If you wish to build the app, use [Electron-builder](https://www.electron.build/)

## Credits

[Electron](https://www.electronjs.org/)
[pixelchat.tv](https://pixelchat.tv/)

*I am not affiliated with Electron or pixelchat.tv*
