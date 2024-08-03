/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function findLCA(root, p, q) {
    if (root === null) return null;
    if (root === p || root === q) return root;
    
    let left = findLCA(root.left, p, q);
    let right = findLCA(root.right, p, q);
    
    if (left !== null && right !== null) return root;
    
    return left !== null ? left : right;
}

var lowestCommonAncestor = function(root, p, q) {
    return findLCA(root, p, q);
};
