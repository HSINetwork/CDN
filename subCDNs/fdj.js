var fs = require("fs")
var cdnResponse = require("./../classes/cdnResponse.js")

function getFDJ(configClass) {
    if (configClass.isRaw() == false) {
        try {
            var canAccess = fs.accessSync(configClass.filePath(), fs.constants.R_OK)
            var fdjCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync(configClass.filePath()))
        } catch {
            var errCDNResponse = new cdnResponse.cdnResponseClass("The requested file does not exist on the server or access is locked.", {
                'statusCode': 404,
                'content-type': "text/plain"
            })

            return errCDNResponse
        }
    }
}

module.exports = {
    'getFDJ': getFDJ
}