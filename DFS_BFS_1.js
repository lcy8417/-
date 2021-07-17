function solution(numbers, target) {
    var answer = 0;
    const len = numbers.length;
    const total = numbers.reduce((a, b) => a + b, 0);
    function go(x, sum, etc) {
        if (x > len || sum + etc < target || sum - etc > target) return;
        if (x === len) {
            answer = sum === target ? answer += 1 : answer;
            return;
        }
        go(x + 1, sum + numbers[x], etc - numbers[x]);
        go(x + 1, sum - numbers[x], etc - numbers[x]);

    }
    go(0, 0, total);
    return answer;
}
const arr = [2, 3, 5, 7, 9];
console.log(solution(arr, 6));
