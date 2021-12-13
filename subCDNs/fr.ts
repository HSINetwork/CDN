var fs = require("fs")
var cdnResponse = require("./../classes/cdnResponse.js")
var configClass = require("./../classes/configClass.js")

function comparePaths(path: string, numbersArray: number[], pathsArray: string[]) {
	if (numbersArray.length != pathsArray.length) {
		return new SyntaxError(`Passed array ${numbersArray.toString()} does not have the same length as ${pathsArray.toString()}`)
	}
	for (let i = 0; i < pathsArray.length; i++) {
		if (path.substring(path.length - numbersArray[i], path.length) == pathsArray[i]) {
			return path.substring(path.length - numbersArray[i], path.length)
		} else {
			continue;
		}
	}
	return "plain"
}

function FR(configClass: configClass.CDNConfig) {

    var HeadersMap = new Map()

    if (configClass.isRaw == false) {

        try {
            fs.accessSync("." + configClass.filePath, fs.constants.R_OK)
            if (configClass.filePath.substring(configClass.filePath.length - 5, configClass.filePath.length) == ".html") {
                HeadersMap.set("statusCode", 200)
                HeadersMap.set("Content-Type", "text/html")
                var frCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync(configClass.filePath), HeadersMap)
            } else if (configClass.filePath.substring(configClass.filePath.length - 4, configClass.filePath.length) == ".css") {
                HeadersMap.set("statusCode", 200)
                HeadersMap.set("Content-Type", "text/css")
                var frCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync("." + configClass.filePath), HeadersMap)
            } else if (configClass.filePath.substring(configClass.filePath.length - 3, configClass.filePath.length) == ".js") {
                HeadersMap.set("statusCode", 200)
                HeadersMap.set("Content-Type", "text/js")
                var frCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync(configClass.filePath), HeadersMap)
            }
            return frCDNResponse
        } catch {
            HeadersMap.set("statusCode", 404)
            HeadersMap.set("Content-Type", "text/plain")
            var errCDNResponse = new cdnResponse.cdnResponseClass("The requested file does not exist on the server or access is locked.", HeadersMap)

            return errCDNResponse
        }

    }
}

module.exports = {
    'FR': FR
}