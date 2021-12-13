var fs = require("fs")
var cdnResponse = require("./../classes/cdnResponse.js")
var configClass = require("./../classes/configClass.js")

function getFDJ(configClass: configClass.CDNConfig) {
    if (configClass.isRaw() == false) {
        try {
            fs.accessSync(configClass.filePath(), fs.constants.R_OK)
            var fdjCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync(configClass.filePath()))
			return fdjCDNResponse
        } catch {
            var errCDNResponse = new cdnResponse.cdnResponseClass("The requested file does not exist on the server or access is locked.", {
                'statusCode': 404,
                'content-type': "text/plain"
            })

            return errCDNResponse
        }
    } else if (configClass.isRaw() == true) {

	}
}

module.exports = {
    'getFDJ': getFDJ
}