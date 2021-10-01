class CDNConfig {
    constructor(Raw, Path) {
        this.isRaw = Raw,
        this.filePath = Path
    }
}

module.exports = {
    "cdnConfigClass": CDNConfig
}