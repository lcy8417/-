function solution(number, k) {
    let temp = number.split('');
    for (let i = 1; i < number.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (temp[i] !== "" && temp[j] !== "" && temp[i] > temp[j]) {
                temp.splice(j, 1, '');
                k--;
            } else if (temp[i] <= temp[j]) break;
            if (k <= 0) return temp.join('');
        }
    }
    return temp.join('').split('').splice(0, temp.length - k).join('');
}