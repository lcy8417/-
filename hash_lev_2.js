

function solution(clothes) {
    var answer = 1;
    const map = new Map();
    for (let x of clothes) {
        if (map.has(x[1])) map.set(x[1], map.get(x[1]) + 1);
        else map.set(x[1], 1);
    }
    for (let [x, y] of map) {
        answer *= y + 1;
    }
    return answer - 1;
}

const arr = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(arr));
