class CDNResponse {

	public statusCode: number
	public OH: Map<string, any>
	public CT: string
	public Body: string

    constructor(Body, Headers) {
        this.statusCode = Headers.statusCode,
        this.CT = Headers["Content-Type"]
        this.OH = Headers
		this.Body = Body
    }

    editCT(newCT) {
        this.CT = newCT
    }

    editSC(newSC) {
        this.statusCode = newSC
    }
    
    get concatCT() {
        const COH = this.OH["Content-Type"] = this.CT
        return COH
    }

    get concatAll() {
        const COH = this.concatCT["statusCode"] = this.statusCode
        return COH
    }

    get concatAllWithBody() {
        const COH = this.concatAll["body"] = this.Body
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