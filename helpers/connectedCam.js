const onvif = require('node-onvif');

function connecting() {
    // Create an OnvifDevice object
    let device = new onvif.OnvifDevice({
        xaddr: 'http://10.0.0.100:8080/onvif/devices',
        user: 'admin',
        pass: 'admin'
    });

    // Initialize the OnvifDevice object
    device.init().then(() => {
        // Get the UDP stream URL
        let url = device.getUdpStreamUrl();
        console.log(url);
        Stream = require('node-rtsp-stream')
        stream = new Stream({
            name: 'name',
            streamUrl: url,
            wsPort: 9999
        })
    }).catch((error) => {
        console.error(error);
    })



}

exports.connecting = connecting