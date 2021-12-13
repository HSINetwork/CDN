var cdnResponse = require("./classes/cdnResponse.js")
var path = require('path');
var fdj = require("./subCDNs/fdj.js")
var raw = require("./subCDNs/raw.js")
var pathRegex = /(\.\.\/?)/

function fliterPath(path: string) {
	if (!pathRegex.test(path)) {
		return [true, path]
	} else {
		return [false, path.replace(pathRegex, "./")]
	}
}

function handlePath(url) {
    switch (url.substring(0, 4)) {
        case '/raw':
            url = url.substring(4)
            var filepath = fliterPath(url)
    }
}