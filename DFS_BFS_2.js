function solution(n, computers) {
    var answer = 0;
    const ch = Array.from({ length: n }, () => 0);
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (!ch[i]) {
            ch[i] = 1;
            answer++;
            queue.push(i);
            while (queue.length) {
                let x = queue.shift();
                for (let j = 0; j < n; j++) {
                    if (computers[x][j]) {
                        if (!ch[j]) {
                            ch[j] = 1;
                            queue.push(j);
                        }
                    }
                }
            }
        }
    }

    return answer;
}
const arr = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];
console.log(solution(3, arr));
