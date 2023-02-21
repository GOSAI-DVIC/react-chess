import {
    display_hand
} from "./components/hand.js";

export const show_hands = new p5((sketch) => {
    sketch.name = "show_hands";
    sketch.z_index = 5;
    sketch.activated = false;

    let hands_position = [];
    let hands_handedness = [];
    // let hands_sign = [];

    sketch.set = (width, height, socket) => {
        sketch.selfCanvas = sketch
            .createCanvas(width, height, sketch.WEBGL)
            // .position(-width/2, 0)
            .position(0, 0)
            .style("z-index", sketch.z_index);

        socket.on(sketch.name, (data) => {
            // console.log(data);
            if (data == undefined || data.length == 0) return;
            hands_position = data["hands_landmarks"];
            // hands_handedness = data["hands_handedness"];
            // hands_sign = data["hands_sign"];
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
        for (let i = 0; i < hands_position.length; i++) {
            // console.log(hands_position[i]);
            display_hand(sketch, hands_position[i], hands_handedness[i], true, true);
        }
    };
});
