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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    const dfs =(root,str)=>{
        if(!root)return;
        if(!root.left && !root.right) {
            res.push(`${str}${root.val}`);
                    return;
                    
        }
        dfs(root.left, `${str}${root.val}->`);
        dfs(root.right, `${str}${root.val}->`)
    }
    dfs(root,'');
    return res;
};