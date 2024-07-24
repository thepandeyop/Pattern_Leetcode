/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
 let minHeap = new MinPriorityQueue();
    
    for(let i of nums){
        minHeap.enqueue(i);  // elements are inserted in maxheap 
    if(minHeap.size()>k){
        minHeap.dequeue();
    }
    }
    return minHeap.front().element;
   
    
};