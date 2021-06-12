# Lastfm-Now-Playing-Overlay

This project is an overlay mainly used to display your current [Last.fm](https://www.last.fm/) scrobble.

## Example

<img src=https://i.imgur.com/nilMjVk.gif>

## Requirements

[Node.js](https://nodejs.org/en/)</br>
[Electron](https://www.electronjs.org/)

## Instructions

1. Clone the repository
2. Edit `main.js` to your likings.
   - `win.loadURL('x')` where x is your overlay URL. _I personnaly use [pixelchat.tv](https://pixelchat.tv/)
   - `width : x` where x is the width of the window. **Default : 100**
   - `height : x` where x is the height of the window. **Default : 600**
4. Open a terminal and install Electron
   - `$ npm install --save-dev electron`
5. Run the program 
   - `$ npm start`
    
##### Optional

If you wish to build the app, use [Electron-packager](https://github.com/electron/electron-packager)</br>
Don't forget to copy `icon.ico` and `posData.json` to ".\lastfmnowplayingoverlay-win32-x64\"

## Usage

Right click on the tray icon, click on toggle drag and move your overlay where you want, then toggle it back off.

## Credits

* [Electron](https://www.electronjs.org/)
* [pixelchat.tv](https://pixelchat.tv/)
* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

*I am not affiliated with Electron or pixelchat.tv*
