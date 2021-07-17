function solution(array, commands) {
    var answer = [];
    for (let x of commands) answer.push((array.slice(x[0] - 1, x[1]).sort((a, b) => a - b))[x[2] - 1]);
    return answer;
}
const arr = [1, 5, 2, 6, 3, 7, 4];
const com = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(arr, com));
