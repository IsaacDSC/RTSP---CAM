const onvif = require('node-onvif');

async function discovery() {
    // Create an OnvifDevice object
    let device = new onvif.OnvifDevice({
        xaddr: 'http://10.0.0.183:8080/onvif/device_service',
        user: 'admin',
        pass: 'admin'
    });

    // Initialize the OnvifDevice object
    await device.init().then(() => {
        // Get the UDP stream URL

        let url = device.getUdpStreamUrl();
        console.log(url);

    }).catch((error) => {
        console.error(error);
    })



}

exports.discovery = discovery