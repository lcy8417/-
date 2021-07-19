function solution(begin, target, words) {
    var answer = Number.MAX_SAFE_INTEGER;
    let len = words.length;
    let w_len = words[0].length;
    const ch = Array.from({ length: len }, () => 0);
    if (!words.find(w => w === target)) return 0;
    function go(x, cur) {
        if (cur === target) {
            answer = Math.min(answer, x);
            return;
        }
        for (let i = 0; i < len; i++) {
            let cnt = 0;
            for (let j = 0; j < w_len; j++)
                if (cur[j] === words[i][j]) cnt++;

            if (cnt === w_len - 1 && !ch[i]) {
                ch[i] = 1;
                go(x + 1, words[i]);
                ch[i] = 0;
            }
        }
    }
    go(0, begin);
    return answer;
}

const a = "hit";
const b = "cog";
const arr = ["hot", "dot", "dog", "lot", "log"];
console.log(solution(a, b, arr));
