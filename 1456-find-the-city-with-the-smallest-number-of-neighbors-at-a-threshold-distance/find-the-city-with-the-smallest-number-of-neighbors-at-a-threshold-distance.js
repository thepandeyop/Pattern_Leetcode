/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
    let matrix = [];
    for (let i = 0; i < n; i++) matrix[i] = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matrix[i][j] = 0;
                continue;
            }
            matrix[i][j] = Infinity;
        }
    }

    for (let [a, b, w] of edges) {
        matrix[a][b] = w;
        matrix[b][a] = w;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][k] === Infinity || matrix[k][j] === Infinity) continue;
                let connectedDistance = matrix[i][k] + matrix[k][j];
                if (connectedDistance < matrix[i][j]) matrix[i][j] = connectedDistance;
            }
        }
    }

    let min = Infinity, index;
    for (let i = 0; i < matrix.length; i++) {
        let currCount = matrix[i].filter((e, j) => e <= distanceThreshold && i !== j).length;
        if (currCount <= min) {
            min = currCount;
            index = i;
        }
    }
    return index;
};