const Client = require('./client');

module.exports = {
    /**
     * Create a new instance of the client
     * You can still use `new RadioClient` but this
     * is far easier for us lazy people
     * @returns {Client} The instance
     */
    createInstance: () => new Client(),
    RadioClient: Client,
    version: require('../package').version
};