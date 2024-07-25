/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

function mergeSort(nums, left, right) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);

    merge(nums, left, mid, right);
}

function merge(nums, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const leftArray = new Array(n1);
    const rightArray = new Array(n2);

    for (let i = 0; i < n1; ++i)
        leftArray[i] = nums[left + i];
    for (let i = 0; i < n2; ++i)
        rightArray[i] = nums[mid + 1 + i];

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            nums[k++] = leftArray[i++];
        } else {
            nums[k++] = rightArray[j++];
        }
    }

    while (i < n1) {
        nums[k++] = leftArray[i++];
    }

    while (j < n2) {
        nums[k++] = rightArray[j++];
    }
}

