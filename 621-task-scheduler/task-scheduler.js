/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const taskCounts = {};
    for (let task of tasks) {
        taskCounts[task] = (taskCounts[task] || 0) + 1;
    }

    // Step 2: Initialize max heap with task frequencies
    const maxHeap = new MaxPriorityQueue({ priority: task => task.count });
    for (let [task, count] of Object.entries(taskCounts)) {
        maxHeap.enqueue({ task, count });
    }

    let intervals = 0;

    // Step 3: Cycle through tasks and handle cooling intervals
    while (!maxHeap.isEmpty()) {
        const cycle = [];
        for (let i = 0; i <= n; i++) {
            if (!maxHeap.isEmpty()) {
                cycle.push(maxHeap.dequeue().element);
            }
        }

        for (let { task, count } of cycle) {
            if (count > 1) {
                maxHeap.enqueue({ task, count: count - 1 });
            }
        }

        intervals += maxHeap.isEmpty() ? cycle.length : n + 1;
    }

    return intervals;
};