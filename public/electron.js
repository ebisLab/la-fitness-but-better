// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'icon.icns'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // mainWindow.loadURL('http://localhost:3000');
  mainWindow.loadFile(`${app.getAppPath()}\/build\/index.html`);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  // if (process.platform !== 'darwin')
  app.quit();
});

// const {app, BrowserWindow} = require('electron');
// const path = require('path');
// const url = require('url');
// function createWindow() {
//   const startUrl =
//     process.env.ELECTRON_START_URL ||
//     url.format({
//       pathname: path.join(__dirname, '../index.html'),
//       protocol: 'file:',
//       slashes: true,
//     });
//   const win = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });
//   win.loadURL(startUrl);
//   app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//       app.quit();
//     }
//   });
// }
// app.whenReady().then(createWindow);
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });
// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
