function solution(brown, yellow) {
    var answer = [];
    let w = 0;
    let h = 0;
    for (let i = 0; i <= yellow; i++) {
        if (yellow % i === 0) {
            w = i;
            h = yellow / i;
            if (w >= h && (w + 2) * (h + 2) === brown + yellow) return [w + 2, h + 2];
        }
    }
}
const b = 10;
const y = 2;
console.log(solution(24, 24));
