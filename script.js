class Node {
    constructor(value = null, left = null, right = null, up =null, down = null) {
        this.value = value,
        this.left = left,
        this.right = right,
        this.up = up,
        this.down = down
    }
}

const board = [];

for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
        board[i][j] = new Node;
        board[i][j].value = [i, j];
    }
}



for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
        if (j  - 1 < 0) {
            board[i][j].left === null
        }
        else {
            board[i][j].left = board[i][j-1];
        }

        if (j + 1 > 7) {
            board[i][j].right = null
        }
        else {
            board[i][j].right = board[i][j+1]
        }

        if (i + 1 > 7) {
            board[i][j].up = null;
        }
        else {
            board[i][j].up = board[i + 1][j];
        }

        if (i - 1 < 0) {
            board[i][j].down = null;
        }
        else {
            board[i][j].down = board[i-1][j];
        }
    }
}


function knightMoves(start, end, queue = [], visited = []) {
    const node = board[start[0]][start[1]];
    visited.push(node);

    const traverse = decison(node, end, queue, visited);
    
    traverse.forEach(node => {
        console.log(node.value);
    });  
}

knightMoves([3, 3], [4, 3]);

function decison(node, end, queue, visited) {
    // console.log(node);
    // if (node.value === end) {
    //     return visited;
    // }
    queue.push(node);
    let nextNode;
    const row = node.value[0] - end[0];
    console.log(row);
    const column = node.value[1] - end[1];
    console.log(column);

    if (row === 0 && column === 0) {
        return visited;
    }

    if (row === -1 && column >= 2) {
        nextNode = sideLeftUp(queue, visited);
    }
    else if (row === -1 && column <= -2) {
        nextNode = sideRightUp(queue, visited);
    }
    else if (row === 1 && column >= 2) {
        nextNode = sideLeftDown(queue, visited);
    } 
    else if (row === 1 && column <= -2) {
        nextNode = sideRightDown(queue, visited);
    }
    else if (row < -1 && column >= 1) {
        nextNode = upLeft(queue, visited);
    }
    else if (row < -1  && column <= 1) {
        nextNode = upRight(queue, visited);
    }
    else if (row  > 1 && column >= 1) {
        nextNode = downLeft(queue, visited);
    }
    else if (row > 1 && column <= 1) {
        nextNode = downRight(queue, visited);
    }
    else if (row === -1 && column === 0) {
        nextNode = sideRightUp(queue, visited);
    }
    else if (row === 0 && column > 1) {
        nextNode = downLeft(queue, visited);
    }

    return decison(nextNode, end, queue, visited);
}

function sideLeftUp(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.up);
        return node.up;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.left);
        count++;
        return sideLeftUp(queue, visited, count)        
    }

}

function sideRightUp(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.up);
        return node.up;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.right);
        count++;
        return sideRightUp(queue, visited, count);        
    }
}

function sideLeftDown(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.down);
        return node.down;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.left);
        count++;
        return sideLeftDown(queue, visited, count);        
    }
}


function sideRightDown(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.down);
        return node.down;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.right);
        count++;
        return sideRightDown(queue, visited, count);        
    }
}


function upLeft(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.left);
        return node.left;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.up);
        count++;
        return upLeft(queue, visited, count);        
    }
}

function upRight(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.right);
        return node.right;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.up);
        count++;
        return upRight(queue, visited, count);        
    }
}

function downLeft(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.left);
        return node.left;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.down);
        count++;
        return downLeft(queue, visited, count)       
    }
};


function downRight(queue, visited, count = 0) {
    if (count === 2) {
        const node = queue.shift();
        visited.push(node.right);
        return node.right;
    }
    const node = queue.shift();
    if (node === null) {
        return;
    }
    else {
        queue.push(node.down);
        count++;
        return downRight(queue, visited, count);     
    }
}