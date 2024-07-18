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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let res = 0;

    function travel(node){
        if(!node) {
            return []
        }

        if(!node.left && !node.right){
            return [1]
        }

        let left = travel(node.left);
        let right = travel(node.right);

        for(let l of left){
            for(let r of right){
                if(l+r <= distance){
                    res += 1;
                }
            }
        }
        const result = left.concat(right).map(i => i + 1).filter(i => i < distance);
        return result;

    }

    travel(root);
    return res;
    
};