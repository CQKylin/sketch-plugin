import sketch from 'sketch';
import BrowserWindow from 'sketch-module-web-view';
// documentation: https://developer.sketchapp.com/reference/api/

export default function(context) {
    let selectedLayers = context.selection;
    const selectedCount = selectedLayers.length;
    // selectedLayers[0].setStringValue("gaibian");
    // selectedLayers.remove();
    context.document.showMessage('No layers are selected.')
    
    if (selectedCount === 0) {
        context.document.showMessage('No layers are selected.')
    } else {
        context.document.showMessage(`${selectedCount} layers selected.`)
    }
/*
    var selection = context.document.selectedLayers;
    selection.forEach(layer => log(layer.id))

selection.map(layer => layer.id)

selection.reduce((initial, layer) => {
  initial += layer.name
  return initial
}, '')
selection.clear()

    */

    // const browserWindow = new BrowserWindow(options)
    let browserWindow = new BrowserWindow({ width: 800, height: 600 })
    browserWindow.on('closed', () => {
        browserWindow = null
    })

    //browserWindow.loadURL(require('./web/index.html'));
    browserWindow.loadURL('http://127.0.0.1:8090/index.html#/')
    /*
    browserWindow.webContents
    .executeJavaScript('someGlobalFunctionDefinedInTheWebview("hello 传值")')
    .then(res => {
        // do something with the result
        context.document.showMessage('is loading')
    })

    browserWindow.webContents.on('nativeLog', function(s) {
        sketch.UI.message(s+" loading in plugin")
    })
    
    let document = sketch.fromNative(context.document)
    let page = document.selectedPage

    let layer = new sketch.Text({
        parent: page,
        alignment: sketch.Text.Alignment.center,
        text: "Hello",
    })

    layer.adjustTofit()

    document.centerOnLayer(layer)
    */
}
