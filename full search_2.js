function solution(numbers) {
    var answer = 0;
    let len = numbers.length;
    let arr = [];
    const ch = Array.from({ length: 1000001 }, () => 0);
    const visited = Array.from({ length: len }, () => 0);
    for (let i = 0; i < numbers.length; i++) arr.push(numbers[i]);
    function go(x, sum) {
        if (x > len) return;
        let tmp = parseInt(sum);
        if (!ch[tmp]) {
            ch[tmp] = 1;
            let flag = false;
            for (let i = 2; i < tmp; i++) {
                if (tmp % i === 0) {
                    flag = true;
                    break;
                }
            }
            if (tmp > 1 && !flag) answer++;
        }
        for (let i = 0; i < len; i++) {
            if (!visited[i]) {
                visited[i] = 1;
                go(x + 1, sum + arr[i]);
                visited[i] = 0;
            }

        }
    }
    go(0, "");
    return answer;
}
const n = "011";
console.log(solution(n));
