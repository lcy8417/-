function solution(tickets) {
    var answer = [];
    let tmp = [];
    let len = tickets.length;
    const ch = Array.from({ length: len }, () => 0);
    tickets.sort((a, b) => {
        if (a[0] === b[0]) {
            for (let i = 0; i < a[1].length; i++) {
                if (a[1][i] !== b[1][i]) return a[1][i].charCodeAt(0) - b[1][i].charCodeAt(0);
            }
        } else {
            for (let i = 0; i < a[1].length; i++) {
                if (a[0][i] !== b[0][i]) return a[0][i].charCodeAt(0) - b[0][i].charCodeAt(0);
            }
        }
    });

    function go(x, cur) {
        if (x > len || answer.length) return;
        if (tmp.length === len + 1) {
            answer = tmp.slice();
            return;
        } else {
            for (let i = 0; i < len; i++) {
                if (!ch[i] && tickets[i][0] === cur) {
                    ch[i] = 1;
                    tmp.push(tickets[i][1]);
                    go(x + 1, tickets[i][1]);
                    ch[i] = 0;
                    tmp.pop();
                }
            }
        }
    }
    tmp.push("ICN");
    go(0, "ICN");
    return answer;
}

const arr = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]];
console.log(solution(arr));
