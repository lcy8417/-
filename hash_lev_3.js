function solution(genres, plays) {
    var answer = [];
    const len = genres.length;
    const obj = {};
    const sorted_arr = [];
    const arr = [];
    const ch = Array.from({ length: len }, () => 0);
    for (let i = 0; i < len; i++) {
        let k = genres[i];
        let v = plays[i];
        if (obj[k]) obj[k] += v;
        else obj[k] = v;
        arr.push([k, v]);
    }
    for (let x in obj) sorted_arr.push([x, obj[x]]);
    sorted_arr.sort((a, b) => b[1] - a[1]); // 재생량 높은순으로 정렬
    arr.sort((a, b) => b[1] - a[1]);

    for (let [genre, play] of sorted_arr) {
        let cnt = 0;
        let i = 0;
        for (let [k, v] of arr) {
            if (cnt >= 2) break;
            if (genre === k) { // 내림차순 배열의 key 값과 일치할 때
                for (i = 0; i < len; i++) if (plays[i] === v && !ch[i]) {// 인덱스 찾아감
                    ch[i] = 1;
                    break;
                }
                answer.push(i);
                cnt++;
            }
        }
    }
    return answer;
}

const genres = ['A', 'B', 'A'];
const plays = [600, 500, 600];

console.log(solution(genres, plays));
