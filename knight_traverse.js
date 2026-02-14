class Node {
    constructor(position, parent = null) {
        this.position = position;
        this.parent = parent;
    }
}

const moves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
];

function knightMoves(start,  end) {
    const node = new Node(start);
    console.log(node);
    const queue = [];
    queue.push(node);
    

    const endNode = traverse(queue, end);
    const traversal = [];
    path(endNode);
    function path (node) {
        if (node === null) {
            return;
        }
        traversal.push(node.position);
        path(node.parent);
    }

    console.log(`You made it in ${traversal.length} moves! Here's your path: `);

    for (let i = traversal.length - 1; i >= 0; i--) {
        console.log(traversal[i]);
    }

}

knightMoves([3, 3], [3, 4]);

function traverse (queue, end) {
    const node = queue.shift();

    const row = node.position[0];
    const column = node.position[1];

    if (row === end[0] && column === end[1]) {
        return node;
    }

    for (const move of moves) {
        const new_r = row + move[0];
        const new_c = column + move[1];

        if ((new_r >= 0 && new_r < 8) && (new_c >= 0 && new_c < 8)) {
            if (node.parent === null) {
                const childNode = new Node([new_r, new_c]);
                childNode.parent = node;
                queue.push(childNode);
            }
            else if (node.position[0] !== node.parent.position[0] && node.position[1] !== node.parent.position[1]) {
                const childNode = new Node([new_r, new_c]);;
                childNode.parent = node;
                queue.push(childNode);
            }
        }
    }

    return traverse(queue, end);

    
}