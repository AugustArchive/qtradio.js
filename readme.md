# qtradio.moe API

> :tulip: **API wrapper for qtradio.moe made in JavaScript**

## Usage

```js
const qtradio = require('qtradio.js');
const radio   = qtradio.createInstance();

radio.getInfo();
```

## FFmpeg Stream

### Example 1: Discord Bots (discord.js)

```js
const { Client } = require('discord.js');
const qtradio = require('qtradio.js');

const api = qtradio.createInstance();
const bot = new Client();

bot.on('ready', () => console.log("READY"));
bot.on('message', async(m) => {
    if (m.author.bot) return;
    let connection;
    
    if (m.content === 'e;join')
    {
        if (m.member.voiceChannel)
        {
            connection = await m.guild.me.voiceChannel.join();
            return m.channel.send(":white_check_mark: Joined the voice channel!");
        } else return m.channel.send(":x: Unable to join the voice channel... Do I have permissions to join?");
    }
    
    if (m.content === 'e;play')
    {
        if (!m.guild.me.voiceChannel || !connection || connection === null) return m.channel.send(":x: Unable to play a stream without executing the `join` command!");
        const dispatcher = await connection.playStream(api.getStreamUri());
        m.channel.send(":pencil: Now playing `qtradio.moe`!");
    }
});

bot.login("belongs to area 52");
```

### Example 2: Discord Bots (Eris)

soon:tm:

## License

> [qtradio.js](https://github.com/auguwu/qtradio.js) is made by auguwu & is released under the MIT license
>
> [qtradio.moe](https://qtradio.moe) is owned by [LiquidBlast](https://github.com/LiquidBlast); this isn't an official wrapper for qtradio.moe

```
Copyright (c) 2019-present auguwu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
