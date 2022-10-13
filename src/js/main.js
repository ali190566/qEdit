const electron = require('electron');
const { app, BrowserWindow, ipcMain } = require('electron');
const ipc = ipcMain;

function createWindow () 
{
    const window = new BrowserWindow 
    ({
        width: 1280,
        height: 720,
        frame: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true
        }
    })
    window.loadFile('src/index.html')


    ipc.on('closeApp', () => {
        window.close();
    })

    ipc.on('maximiseApp', () => {
        window.maximize();
    })

    ipc.on('minimiseApp', () => {
        window.minimize();
    })

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => 
{
    if (process.platform !== 'darwin') 
    {
        app.quit();
    }
})

app.on('activate', () => 
{
    if (BroweserWindow.getAllWindows().length === 0) 
    {
        createWindow();
    }
})
