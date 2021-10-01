class CDNResponse {
    constructor(Body, Headers) {
        this.statusCode = Headers.statusCode,
        this.CT = Headers["Content-Type"]
        this.OH = Headers
    }

    editCT(newCT) {
        this.CT = newCT
    }

    editSC(newSC) {
        this.statusCode = newSC
    }
    
    get concatCT() {
        const COH = this.OH.add("Content-Type",this.CT)
        return COH
    }

    get concatAll() {
        const COH = this.concatCT().add("statusCode",this.statusCode)
        return COH
    }

    get concatAllWithBody() {
        const COH = this.concatAll().add("body",this.Body)
        return COH
    }

    get getHeaders() {
        return {
            "StatusCode": this.statusCode,
            "CT": this.CT,
            "OH": this.OH
        }
    }

    get getBody() {
        return this.Body
    }
}

module.exports = {
    "cdnResponseClass": CDNResponse
}