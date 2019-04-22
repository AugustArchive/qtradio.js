const wump = require('wumpfetch');

module.exports = class RadioClient
{
    /**
     * Gets the information
     * @returns {Promise<InfoData>}
     */
    async getInfo() 
    {
        const req = await wump
            .get('https://qtradio.moe/stats')
            .send();
        
        return req.json();
    }
    
    async getStreamByte()
    {
        throw new SyntaxError("Function RadioClient#getStreamByte is on the TODO list and will be implemented soon!");
    }
};

/**
 * @typedef {Object} InfoData
 * @prop {IceStats} icestats qtradio.moe's server info
 * 
 * @typedef {Object} IceStats
 * @prop {string} admin Admin name
 * @prop {string} host The host
 * @prop {string} location The location
 * @prop {string} server_id The server ID
 * @prop {string} server_start When the server started
 * @prop {string} server_start_iso8601 ISO-8601 code of the server start
 * @prop {Source[]} source An array of the song that qtradio is playing
 * 
 * @typedef {Object} Source
 * @prop {string} artist The artist
 * @prop {number} audio_bitrate The audio bitrate
 * @prop {number} audio_channels The number of audio channels are avaliable
 * @prop {string} audio_info Information about the audio?
 * @prop {number} audio_samplerate The audio samplerate
 * @prop {number} channels The number of channels
 * @prop {string} genre The genere that it's playing
 * @prop {number} listener_peak The listener peak number
 * @prop {number} listeners The number of listeners that is listening
 * @prop {string} listenurl The URL of the song, don't use this since it can break (it uses localhost:8080; which is from qtradio.moe's server)
 * @prop {number} samplerate The samplerate
 * @prop {string} server_description The server descripion
 * @prop {string} server_name The server name
 * @prop {string} server_type The server type
 * @prop {string} server_url The server url (it uses localhost:8080; don't use!)
 * @prop {string} stream_start When the song started playing
 * @prop {string} stream_start_iso8601 When the song started playing in ISO-8601 form
 * @prop {string} subtype The subtype, usally `Vorbis`
 * @prop {string} title The title
 * @prop {string} [dummy] The dummy string (don't use since it's null) 
 */
