function solution(answers) {
    let answer = [];
    let max = 0;
    let cnt = Array.from({ length: 3 }, () => 0);
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    cnt[0] = answers.filter((a, i) => a === first[i % first.length]).length;
    cnt[1] = answers.filter((a, i) => a === second[i % second.length]).length;
    cnt[2] = answers.filter((a, i) => a === third[i % third.length]).length;
    max = Math.max(...cnt);
    for (let i = 0; i < 3; i++) if (cnt[i] === max) answer.push(i + 1);
    return answer;
}

const arr = [1, 2, 3, 4, 5];
console.log(solution(arr));
