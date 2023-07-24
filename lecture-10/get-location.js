/* navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
}, (err) => {
    console.log('error', err);
}); */

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    const video = document.getElementById('video');
    video.srcObject = stream;
    console.log(stream);
}).catch(err => {
    console.log(err);
});

/* navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: false
}).then(stream => {
    const video = document.getElementById('video');
    video.srcObject = stream;
    console.log(stream);
}).catch(err => {
    console.log(err);
}); */