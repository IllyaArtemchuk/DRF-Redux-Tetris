// default tetris piece setup
// prettier-ignore
export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
               ],
               color: '38, 220, 240'
    },
    J: {
        shape: [
                [ 0 , 'J', 0],
                [ 0 , 'J', 0] ,
                ['J', 'J', 0] ,
               ],
               color: '63, 79, 181'
    },
    L: {
        shape: [
            [0, 'L',  0 ],
            [0, 'L',  0 ] ,
            [0, 'L', 'L'] ,
           ],
           color: '209, 117, 13'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'] ,
           ],
           color: '235, 219, 0'
    },
    S: {
        shape: [
            [ 0,  'S', 'S'],
            ['S', 'S',  0 ] ,
            [ 0 ,  0,   0 ] ,
           ],
           color: '92, 255, 100'
    },
    T: {
        shape: [           
            ['T', 'T','T'] ,
            [ 0 , 'T', 0 ] ,
            [ 0,   0,   0]
           ],
           color: '177, 9, 219'
    },
    Z: {
        shape: [
            ['Z','Z', 0 ],
            [ 0, 'Z','Z'] ,
            [ 0 , 0,  0 ] ,
           ],
           color: '224, 0, 15'
    },
    reference:"IJLOSTZ"
}

// Is Dynamic to the piece setup you have.
export const randomPiece = (pieces) => {
  const ref = pieces.reference;
  const randomTetromino = ref[Math.floor(Math.random() * ref.length)];
  return pieces[randomTetromino].shape;
};
