
var MedianFinder = function() {
  this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
     if (this.maxHeap.size() === 0 || num <= this.maxHeap.front().element) {
        this.maxHeap.enqueue(num);
    } else {
        this.minHeap.enqueue(num);
    }
    
    // Balance the heaps
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element);
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
      if (this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.front().element;
    } else {
        return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */