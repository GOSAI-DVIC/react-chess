export class Board {

    constructor(){

    }

    show(sketch){
        sketch.stroke(255);
        sketch.strokeWeight(5)

        for (let i = 0; i<8; i++){
            for (let j = 0; j<8; j++) {
              if ((i+j)%2 == 0) {
                //color in squares
                sketch.fill(255, 206, 158);
              } else {
                sketch.fill(209, 139, 71);
              }
        
              sketch.rect(i*width/8, j*height/8, width/8, height/8);//chessboard
            //   //display image
            //  if (board[j][i] != null &&  chessGridGameState[j][i] != 100) {
        
        
            //     image(board[j][i].display(), i*width/8, j*height/8);//piece
            //   }
            }
        }
    }
}