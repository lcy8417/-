function solution(n, times) {
    var answer = Number.MAX_SAFE_INTEGER;
    let len = times.length;
    let lt = 1, rt = n * times[len - 1];
    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        let cnt = 0;
        times.forEach(v => {
            cnt += Math.floor(mid / v);
            if (cnt >= n) {
                answer = Math.min(answer, mid);
                return;
            }
        });
        if (cnt >= n) rt = mid - 1;
        else lt = mid + 1;
    }
    return answer;
}
const arr = [7, 10];
console.log(solution(6, arr));
