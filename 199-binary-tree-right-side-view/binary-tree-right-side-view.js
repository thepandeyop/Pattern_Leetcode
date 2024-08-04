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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    
    if (root === null) return res;
    
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            
            // Capture the rightmost element at the current level
            if (i === levelSize - 1) {
                res.push(node.val);
            }
            
            // Add left and right children to the queue
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    
    return res;
};
