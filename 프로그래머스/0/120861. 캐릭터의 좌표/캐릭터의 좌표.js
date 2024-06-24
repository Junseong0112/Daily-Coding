function solution(keyinput, board) {
    const baseBoard = [0, 0];
    const maxCol = Math.floor(board[0] / 2)
    const maxRow = Math.floor(board[1] / 2)
    
    for(let i = 0; i < keyinput.length; i++){
        let [col, row] = baseBoard;
        
        switch(keyinput[i]){
            case 'left' :
                col--
                break;
            case 'right' :
                col++
                break;
            case 'up' :
                row++
                break;
            case 'down' :
                row--
                break;
        }
        
        if(col > maxCol) col = maxCol;
        if(col < -maxCol) col = -maxCol;
        if(row > maxRow) row = maxRow;
        if(row < -maxRow) row = -maxRow
        
        baseBoard[0] = col;
        baseBoard[1] = row;
    }
    
    return baseBoard
}
