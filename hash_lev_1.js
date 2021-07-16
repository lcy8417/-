function solution(participant, completion) {
    let answer = '';
    let map = new Map();
    for (let x of participant) {
        if (!map.has(x)) map.set(x, 1);
        else map.set(x, map.get(x) + 1);
    }
    for (let x of completion) {
        if (map.has(x)) map.set(x, map.get(x) - 1);
    }
    for (let [x, y] of map) {
        if (y === 1) {
            answer = x;
            return answer;
        }
    }
}

let a = ["mislav", "stanko", "mislav", "ana"];
let b = ["stanko", "ana", "mislav"];

console.log(solution(a, b));
