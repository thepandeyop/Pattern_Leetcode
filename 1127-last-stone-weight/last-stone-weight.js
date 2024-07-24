/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue();
    
    for (let i of stones) {
        maxHeap.enqueue(i);
    }
    
    while (maxHeap.size() > 1) {
        let stone1 = maxHeap.dequeue().element;
        let stone2 = maxHeap.dequeue().element;
        
        if (stone1 !== stone2) {
            maxHeap.enqueue(stone1 - stone2);
        }
    }
    
    if (maxHeap.size() === 0) {
        return 0;
    }
    
    return maxHeap.front().element;
};
