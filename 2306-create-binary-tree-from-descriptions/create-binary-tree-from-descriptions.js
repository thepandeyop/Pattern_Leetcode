/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
     const map = {};
    const children = {};
    for (let [parent, child, isLeft] of descriptions) {
        children[child] = true;
        if (!map[child]) {
            map[child] = new TreeNode(child);
        }
        if (!map[parent]) {
            map[parent] = new TreeNode(parent);
        }
        if (isLeft) {
            map[parent].left = map[child];
        } else {
            map[parent].right = map[child];
        }
    }
    for (let [parent] of descriptions) {
        if (!children[parent]) {
            return map[parent];
        }
    }
};