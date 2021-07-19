function solution(citations) {
    let i = 0;
    citations.sort((a, b) => b - a);
    while (i + 1 <= citations[i]) i++;
    return i;
}

const arr = [3, 0, 6, 1, 5];
console.log(solution(arr));
