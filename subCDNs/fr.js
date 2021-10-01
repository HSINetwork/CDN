var fs = require("fs")
var cdnResponse = require("./../classes/cdnResponse.js")
var configClass = require("./../classes/configClass.js")

function FR(configClass) {

    var HeadersMap = new Map()
    console.log(configClass.filePath.substring(configClass.filePath.length - 5, configClass.filePath.length))
    console.log(configClass.isRaw)
    console.log("." + configClass.filePath)
    console.log(fs.readFileSync("." + configClass.filePath))

    if (configClass.isRaw == false) {

        try {
            console.log(configClass.isRaw)
            fs.accessSync(configClass.filePath, fs.constants.R_OK)
            if (configClass.filePath.substring(configClass.filePath.length - 5, configClass.filePath.length) == ".html") {
                console.log(configClass.filePath.substring(configClass.filePath.length - 5, configClass.filePath.length))
                HeadersMap.set("statusCode", 200)
                HeadersMap.set("Content-Type", "text/html")
                var frCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync(configClass.filePath), HeadersMap)
            } else if (configClass.filePath.substring(configClass.filePath.length - 4, configClass.filePath.length) == ".css") {
                console.log(configClass.filePath.substring(configClass.filePath.length - 4, configClass.filePath.length))
                HeadersMap.set("statusCode", 200)
                HeadersMap.set("Content-Type", "text/css")
                var frCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync("." + configClass.filePath), HeadersMap)
            } else if (configClass.filePath.substring(configClass.filePath.length - 3, configClass.filePath.length) == ".js") {
                console.log(configClass.filePath.substring(configClass.filePath.length - 3, configClass.filePath.length))
                HeadersMap.set("statusCode", 200)
                HeadersMap.set("Content-Type", "text/css")
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

var thingy = new configClass.cdnConfigClass(false, "/../cdnContent/HTML/Chat.html")

FR(thingy)