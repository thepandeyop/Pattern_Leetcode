var levelOrder = function(root) {
    if (root === null) return [];

    let queue = [];
    let result = [];
    queue.push(root);

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;
};
