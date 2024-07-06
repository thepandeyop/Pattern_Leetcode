/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let i = 0;

  while (i < nums.length) {
    const j = nums[i];
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else if (nums[i] === nums[j]) {
      return nums[i];
    } else {
      i++;
    }
  }
  return null;
};