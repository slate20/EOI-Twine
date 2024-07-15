const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
  });

  mainWindow.loadFile('EOI-Test.html'); // Replace with the actual filename.
});
