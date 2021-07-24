function solution(people, limit) {
    var answer = 0;
    let lt = 0, rt = people.length - 1;
    people.sort((a, b) => b - a);
    while (lt <= rt) {
        if (people[lt] + people[rt] <= limit) {
            lt++;
            rt--;
        } else lt++;
        answer++;
    }
    return answer;
}