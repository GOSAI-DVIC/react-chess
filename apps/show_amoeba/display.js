import {Board } from "./components/board.js"

export const show_amoeba = new p5((sketch) => {
    let board = new Board();
    sketch.name = "show_amoeba";
    sketch.z_index = 3;
    sketch.activated = false;

    let amoeba_data = {}
    sketch.set = (width, height, socket) => {
        sketch.selfCanvas = sketch
            .createCanvas(width, height, sketch.WEBGL) //With calibrate = true
        // .createCanvas(width, height) // With calibrate = false
            .position(0, 0);
        sketch.activated = true;


        socket.on("amoeba_markers", (data) => {
            console.log(data);
            if (data == undefined || data.length == 0) return;
            amoeba_data = data;
        });

        sketch.activated = true;
    };

    sketch.resume = () => {};
    sketch.pause = () => {};

    sketch.windowResized = () => {
        sketch.resizeCanvas(windowWidth, windowHeight);
    };

    sketch.update = () => {};

    sketch.show = () => {
        sketch.clear();
        board.show(sketch);
    };
});
