/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function solve(root, subRoot) {
    if (root === null) return false;

    // Helper function to check if two trees are identical
    function areIdentical(tree1, tree2) {
        if (tree1 === null && tree2 === null) return true;
        if (tree1 === null || tree2 === null) return false;

        return (
            tree1.val === tree2.val &&
            areIdentical(tree1.left, tree2.left) &&
            areIdentical(tree1.right, tree2.right)
        );
    }

    if (areIdentical(root, subRoot)) return true;

    return solve(root.left, subRoot) || solve(root.right, subRoot);
}

var isSubtree = function(root, subRoot) {
    return solve(root, subRoot);
};
