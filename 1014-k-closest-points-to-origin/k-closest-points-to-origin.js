/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
    const maxHeap = new MaxPriorityQueue({priority: point => point.distance});
    
    for(let point of points){
        const distance = Math.sqrt(point[0]*point[0] +point[1]*point[1]);
        
        maxHeap.enqueue({point,distance});
        
        if(maxHeap.size()>k){
            maxHeap.dequeue();
        }
    }
    const res = [];
    while(maxHeap.size()>0){
        res.push(maxHeap.dequeue().element.point);
    }
    return res;
    };