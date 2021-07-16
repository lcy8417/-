function solution(progresses, speeds) {
    var answer = [];
    let len = progresses.length;
    let cnt = 0;
    const stack = [];
    for (let i = 0; i < len; i++) {
        let days = Math.ceil((100 - progresses[i]) / speeds[i]);
        if (!stack.length) {
            stack.push(days);
            cnt++;
        } else {
            if (stack[0] < days) {
                answer.push(cnt);
                stack.pop();
                stack.push(days);
                cnt = 1;
            } else cnt++;
        }
    }
    if (cnt) answer.push(cnt);
    return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
