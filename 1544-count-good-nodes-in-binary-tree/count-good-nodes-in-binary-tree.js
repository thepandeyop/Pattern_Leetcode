var goodNodes = function(root) {
    if (root === null) return 0;

    const dfs = (node, maxSoFar) => {
        if (node === null) return 0;

        let count = 0;
        if (node.val >= maxSoFar) {
            count = 1;
        }

        maxSoFar = Math.max(maxSoFar, node.val);

        count += dfs(node.left, maxSoFar);
        count += dfs(node.right, maxSoFar);

        return count;
    };

    return dfs(root, root.val);
};
