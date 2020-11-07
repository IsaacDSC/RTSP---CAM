    Stream = require('node-rtsp-stream')

    function connectCam() {
        stream = new Stream({
            name: 'name',
            streamUrl: 'rtsp://10.0.0.183:554/11',
            wsPort: 9999,
            ffmpegOptions: { // options ffmpeg flags
                '-stats': '', // an option with no neccessary value uses a blank string
                '-r': 30 // options with required values specify the value after the key
            }
        })
    }

    exports.connectCam = connectCam