function solution(priorities, location) {
    var answer = 0;
    const queue = [];
    const tmp = priorities.slice();
    tmp.sort((a, b) => b - a);
    for (let i = 0; i < priorities.length; i++) queue.push([i, priorities[i]]);
    while (queue.length) {
        if (queue[0][1] === tmp[0]) {
            answer++;
            if (queue[0][0] === location) return answer;
            queue.shift();
            tmp.shift();
        } else queue.push(queue.shift());
    }
    return answer;
}

const arr = [1, 1, 9, 1, 1, 1];
const index = 0;

console.log(solution(arr, index));
