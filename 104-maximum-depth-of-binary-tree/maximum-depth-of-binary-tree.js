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

function solve(root){
    let ans = 0;
    let left =0;
    let right = 0;
    if(root===null) return 0;
    if(root.next!==null){
         left = 1+ solve(root.left);
         right =1+ solve(root.right);
         ans = Math.max(left,right);
    }
  return ans;
}

var maxDepth = function(root) {
    return solve(root);
};