const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

closeBtn.addEventListener('click', () => {
    ipc.send('closeApp');
})

maximiseBtn.addEventListener('click', () => {
    ipc.send('maximiseApp');
})

minimiseBtn.addEventListener('click', () => {
    ipc.send('minimiseApp');
})
