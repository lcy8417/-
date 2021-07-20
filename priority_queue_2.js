function solution(operations) {
    var answer = [];
    const pq = [];
    for (let i = 0; i < operations.length; i++) {
        pq.sort((a, b) => a - b);
        if (operations[i][0] === 'I') pq.push(Number(operations[i].slice(2)));
        else {
            if (operations[i][2] === '-') {
                if (pq.length) pq.shift(); //최소값삭제
            }
            else pq.pop(); //최댓값삭제
        }
    }
    pq.sort((a, b) => a - b);
    if (pq.length) answer.push(pq.pop());
    else answer.push(0);
    if (pq.length) answer.push(pq.shift());
    else answer.push(0);
    return answer;
}
const arr = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];
console.log(solution(arr));
