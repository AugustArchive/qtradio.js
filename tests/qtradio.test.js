const Qtradio = require('../lib');
const radio = Qtradio.createInstance();

async function run() {
    const info = await radio.getInfo();
    console.log(info);
}

run();