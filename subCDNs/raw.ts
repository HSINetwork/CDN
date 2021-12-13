var fs = require("fs")
var cdnResponse = require("./../classes/cdnResponse.js")

function getFDJ(configClass) {

	var HeadersMap = new Map()

	HeadersMap.set("statusCode", 404)
	HeadersMap.set("Content-Type", "text/plain")

    try {
        fs.accessSync(configClass.filePath(), fs.constants.R_OK)
        var fdjCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync(configClass.filePath()))
    } catch {
        var errCDNResponse = new cdnResponse.cdnResponseClass("The requested file does not exist on the server or access is locked.", HeadersMap)
		return errCDNResponse
    }
}