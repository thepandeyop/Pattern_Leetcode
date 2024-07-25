//const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var Twitter = function() {
    this.time = 0;
    this.tweet = new Map();
    this.followers = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.tweet.has(userId)) {
        this.tweet.set(userId, []);
    }
    this.tweet.get(userId).push([this.time++, tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let minHeap = new MinPriorityQueue({ priority: (tweet) => tweet[0] });

    if (this.tweet.has(userId)) {
        for (let tweet of this.tweet.get(userId)) {
            minHeap.enqueue(tweet);

            if (minHeap.size() > 10) minHeap.dequeue();
        }
    }

    if (this.followers.has(userId)) {
        for (let followeeId of this.followers.get(userId)) {
            if (this.tweet.has(followeeId)) {
                for (let tweet of this.tweet.get(followeeId)) {
                    minHeap.enqueue(tweet);
                    if (minHeap.size() > 10) minHeap.dequeue();
                }
            }
        }
    }

    let result = [];
    while (minHeap.size()) {
        result.push(minHeap.dequeue().element[1]);
    }

    return result.reverse();
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.followers.has(followerId)) {
        this.followers.set(followerId, new Set());
    }
    this.followers.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followers.has(followerId)) {
        this.followers.get(followerId).delete(followeeId);
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
