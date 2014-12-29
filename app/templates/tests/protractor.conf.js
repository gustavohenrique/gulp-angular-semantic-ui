exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'firefox'
    },
    /*
    chromeOnly: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--allow-file-access-from-files',
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0',
                '--v8-cache-options=off'
            ]
        }
    },
    */

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },

    onPrepare: function() {
        global.nav = browser.driver;
        global.URL = 'http://localhost:9000/' // lembrar de levantar o servidor antes com o http-server
        //global.URL = 'file:///C:/Users/gustavo.WDEV/Documents/design/camposAnexos.html'
    }

}