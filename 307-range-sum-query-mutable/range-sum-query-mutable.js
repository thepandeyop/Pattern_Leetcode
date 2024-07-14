/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.tree = [];
    this.nums = nums;
    const tree = this.tree;
    
     function build(pos, l, r) {
        if (l === r) tree[pos] = nums[l];
        else {
            const mid = Math.floor((l + r) / 2);
            const [lChild, rChild] = [2 * pos + 1, 2 * pos + 2]
            build(lChild, l, mid);
            build(rChild, mid + 1, r);
            tree[pos] = tree[lChild] + tree[rChild];
        }
    }
    build(0, 0, nums.length - 1);
    
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
     const [tree, nums] = [this.tree, this.nums];
    const diff = val - nums[index];
    nums[index] = val;
    helper(0, 0, nums.length - 1);
    function helper(pos, l, r) {
        if (index >= l && index <= r) {
            tree[pos] += diff;
            if (l === r) return;
            const mid = Math.floor((l + r) / 2);
            helper(2 * pos + 1, l, mid);
            helper(2 * pos + 2, mid + 1, r);
        }
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const [tree, nums] = [this.tree, this.nums];
    return helper(0, 0, nums.length - 1);
    function helper(pos, l, r) {
        if (l >= left && r <= right) return tree[pos]; // total overlap
        if (l > right || r < left) return 0; // no overlap
        const mid = Math.floor((l + r) / 2);
        return helper(2 * pos + 1, l, mid) + helper(2 * pos + 2, mid + 1, r);
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */