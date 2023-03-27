export class VisionManager {



    constructor(){


    }
    
     preload(sketch){

        f = sketch.loadFont("core/server/assets/FallingSky-JKwK.otf");
    };
    

    update(sketch, data){

            let obj_size = 100;
    //for (var key of Object.keys(data)) {
            //console.log(key + " -> " + data[key])}
            
            sketch.stroke(64, 0, 0);
            sketch.fill(64, 0, 0);
            sketch.push();
            sketch.translate(data["x"], data["y"]);
            sketch.rotate(data["angle"]);
            sketch.rect(data["x"], data["y"], obj_size, obj_size);
            sketch.pop();
            sketch.fill(255);
            // sketch.fill('#ED225D');
            // sketch.textFont(f);
            // sketch.textSize(36);
            // sketch.text("" + data["id"], data["x"], data["y"]);
            //floor(tobj.getX()/0.125 normalizes each getX/getY value that are from 0 to 1, to 0 to 7 (for each square)
            //if marker inside board, put marker id (chessState) in square
          
            // if (floor(data["x"]/ 0.125) < 8 && floor(data["y"] / 0.125) < 8 && floor(data["x"] / 0.125) > -1 && floor(data["y"] / 0.125) > -1) {
            //   chessGridGameState[floor(data["y"] / 0.125)][floor(data["x"] / 0.125)] = data["id"];
            // }

         


            
    

    
}

 refreshDisplay() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        //assign markerID to image from idDictionary
        board[i][j] = idDictionary.get(chessGridGameState[i][j]);
        chessGridGameState[i][j] = 100;
      }
    }
  }
  
   showBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i+j)%2 == 0) {
          //color in squares
          sketch.fill(255, 206, 158);
        } else {
            sketch.fill(209, 139, 71);
        }
        
        sketch.rect(i*width/8, j*height/8, width/8, height/8); //chessboard
        
        //display image
        if (board[j][i] != null) {
            sketch.image(board[j][i], i*width/8, j*height/8); //piece
        }
      }
    }
  }
  
   ClearGameState() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        //100 = empty value of chessBoard -> no piece on square
        chessGridGameState[i][j] = 100;
      }
    }
  }


}
