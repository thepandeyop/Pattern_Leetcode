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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
     if(!root) return [];
    
    to_delete = new Set(to_delete);
    // know how to delete
    // while deleting add new nodes to same algo
    const ans = [];
    const traverse = (r = root, p = null, d = 0) => {
        if(!r) return null;
        if(to_delete.has(r.val)) {
            if(p != null) {
                p[d == -1 ? 'left' : 'right'] = null; 
            }
            traverse(r.left, null, 0);
            traverse(r.right, null, 0);
        } else {
            if(p == null) ans.push(r);
            traverse(r.left, r, -1);
            traverse(r.right, r, 1);
        }
    }
    traverse();
    return ans;
};