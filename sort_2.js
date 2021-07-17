function solution(numbers) {
    let answer = '';
    numbers = numbers.map((v) => v + "").sort((a, b) => (b + a) - (a + b));
    answer = numbers[0] === '0' ? answer += 0 : numbers.join("");
}

const arr = [0, 0, 0, 0];
console.log(solution(arr));
