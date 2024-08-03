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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function depth(node) {
        if (node === null) return 0;

        let leftDepth = depth(node.left);
        let rightDepth = depth(node.right);

        // Update the diameter if the path through the current node is larger
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the height of the current node
        return 1 + Math.max(leftDepth, rightDepth);
    }

    depth(root);
    return diameter;
};