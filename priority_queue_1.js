function solution(jobs) {
    var answer = 0;
    let cur = 0, i = 0, len = jobs.length;
    const pq = [];
    jobs.sort((a, b) => a[0] - b[0]);
    while (i < len || pq.length) {
        if (i < len && cur >= jobs[i][0]) {
            pq.push(jobs[i++]);
            continue;
        }
        pq.sort((a, b) => a[1] - b[1]);
        if (!pq.length) cur = jobs[i][0];
        else {
            let [start, work] = pq.shift();
            answer += cur + work - start;
            cur += work;
        }
    }
    return Math.floor(answer / len);
}

const arr = [[0, 3], [1, 9], [2, 6]];
console.log(solution(arr));
