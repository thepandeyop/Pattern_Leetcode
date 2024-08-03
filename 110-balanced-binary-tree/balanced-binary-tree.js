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
 * @return {boolean}
 */
function checkHeight(node) {
    if (node === null) return 0; // Base case: height of an empty tree is 0

    let leftHeight = checkHeight(node.left);
    let rightHeight = checkHeight(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1; // Return -1 if the subtree is not balanced
    }

    return 1 + Math.max(leftHeight, rightHeight); // Return the height of the current node
}

var isBalanced = function(root) {
    return checkHeight(root) !== -1;
};
