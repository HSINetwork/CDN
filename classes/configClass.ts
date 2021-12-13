class CDNConfig {
	public isRaw: boolean
	public filePath: string

    constructor(Raw: boolean, Path: string) {
        this.isRaw = Raw,
        this.filePath = Path
    }
}

module.exports = {
    "cdnConfigClass": CDNConfig
}