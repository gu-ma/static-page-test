// import p5 from 'p5'
import p5 from 'p5/lib/p5.min'
// import "p5/lib/addons/p5.sound";
// import "p5/lib/addons/p5.dom";


// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video');
video.width = window.innerWidth;
video.height = window.innerHeight / 2;
const constraints = {
    audio: false,
    video: true
};

// P5 Sketch
const sketch = s => {
    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight/2);
    }
    s.draw = () => {
        s.background(255,0,0);
        s.fill(255);
        s.canvas.getContext('2d').drawImage(video, s.mouseX,s.mouseY, 300, 200)
        // s.image(video, s.mouseX,s.mouseY, 300, 200);
    }
}


async function main() {
    try {
        let stream = await navigator.mediaDevices.getUserMedia(constraints);
        // window.stream = stream; // make stream available to browser console
        video.srcObject = stream;
        const myp5 = new p5(sketch)
    } catch (err) {
        console.log(err);
    }
}

main();
