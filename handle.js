var cdnResponse = require("./classes/cdnResponse.js")
var path = require('path');
var fdj = require("./subCDNs/fdj.js")
var raw = require("./subCDNs/raw.js")

function fliterPath(path) {
    var cdnContent = "/Github/HSINet/HSICDN/cdncontent"

    if (path.indexOf('\0') !== -1) {
        var nocCDNResponse = new cdnResponse.cdnResponseClass("String contains a null byte, this can be used as a poison bytes and thus is not allowed.\n\nIf you want the source to HSINetwork. Please go to 'github.com/HSINetwork'.", {
            'statusCode': 403,
            'Content-Type': 'text/plain'
        })
        return nocCDNResponse
    }

    var AbPath = path.join(cdnContent, path)

    if (AbPath.indexOf(rootDirectory) !== 0) {
        var nocCDNResponse = new cdnResponse.cdnResponseClass("Path does not include the root directory.\n\nIf you want the source to HSINetwork. Please go to 'github.com/HSINetwork'.", {
            'statusCode': 403,
            'Content-Type': 'text/plain'
        })
        return nocCDNResponse
    }
    
    return AbPath
}

function handlePath(url) {
    switch (url.substring(0, 4)) {
        case '/raw':
            url = url.substring(4)
            var filepath = fliterPath(url)


    }
}