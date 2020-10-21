
//have function to render map
    //read in 2D array
    //render <p> with text based on  array value
function renderer(inp){
    let k = 1;
    for(let i = 0; i<5;i++){
        for(let j = 0; j<5; j++){
            if(k!=0 && k%5 === 0){
                renderPiece(inp, i, j);
                const b = document.createElement('br');
                document.getElementById('gameBoard').append(b);
            }else{
                renderPiece(inp, i, j);
               
                //render a br
            }
            k++;
           
            
        }
    }
}

function renderPiece(input,i,j){
    const b = document.createElement('b');
    console.log('this is i:'+ i);
    console.log('this is j:'+ j);
    switch(input[i][j]){
        case 'R':
            b.innerText = 'R '
            break;
        case 'X':
            b.innerText = 'X '
            break;
       case 'P':
            b.innerText = 'P '
            break;
        default:
            b.innerText = 'O '

    }   
    document.getElementById('gameBoard').append(b);
}

const input = new Array(5);
for(var i = 0; i<input.length; i++){
    input[i] = [];
}
input[0][0] = 'X';
input[0][1] = 'X';
input[0][2] = 'R';
input[0][3] = 'X';
input[0][4] = 'X';
input[1][0] = 'X';
input[1][1] = 'X';
input[1][2] = 'X';
input[1][3] = 'X';
input[1][4] = 'P';


renderer(input);