var fs = require("fs")
var cdnResponse = require("./../classes/cdnResponse.js")

function getFDJ(configClass) {
    try {
        var canAccess = fs.accessSync(configClass.filePath(), fs.constants.R_OK)
        var fdjCDNResponse = new cdnResponse.cdnResponseClass(fs.readdirSync(configClass.filePath()))
    } catch {
        var fdjCDNResponse = new cdnResponse.cdnResponseClass("The requested file does not exist on the server or access is locked.")
    }
}