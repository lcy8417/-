function solution(n, costs) {
    var answer = 0;
    let cnt = 0;
    const ch = Array.from({ length: n }, (v, i) => i);
    costs.sort((a, b) => {
        if (a[2] === b[2]) {
            return (a[0] + a[1]) - (b[0] + b[1])
        }
        return a[2] - b[2];
    });
    function getParent(node) {
        if (ch[node] === node) return node;
        return ch[node] = getParent(ch[node]);
    }
    function unionParent(n1, n2) {
        n1 = getParent(n1);
        n2 = getParent(n2);
        if (n1 < n2) ch[n2] = n1;
        else ch[n1] = n2;
    }
    function isCycle(n1, n2) {
        n1 = getParent(n1);
        n2 = getParent(n2);
        if (n1 === n2) return true;
        else return false;
    }
    for (let x of costs) {
        let [s, e, cost] = [x[0], x[1], x[2]];
        if (!isCycle(s, e)) { // 사이클이 발생하지 않은면
            answer += cost;
            unionParent(s, e);
            cnt++;
        }

        if (cnt >= n - 1) return answer;
    }
}