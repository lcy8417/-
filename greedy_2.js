function solution(name) {
    var change = 0;
    const len = name.length;
    let cnt = 0, move = Number.MAX_SAFE_INTEGER;
    const A_cnt = 'A'.charCodeAt(0);
    const Z_cnt = 'Z'.charCodeAt(0);
    for (let i = 0; i < len; i++) {
        if (name[i] === 'A') continue;
        const target = name[i].charCodeAt(0);
        change += target - A_cnt >= Z_cnt - target + 1 ? Z_cnt - target + 1 : target - A_cnt;
        if (i !== 0) cnt++;
    }
    const queue = [];

    queue.push([0, 0, [0]]);
    while (queue.length) {
        let tmp = queue.shift();
        let x = tmp[0];
        let sum = tmp[1];
        let arr = tmp[2].slice();
        let move_cnt = 0;
        let pos = x;
        if (arr.length === cnt + 1) {
            move = Math.min(move, sum);
            continue;
        }
        while (1) {// 왼쪽
            pos--;
            move_cnt++;
            if (pos < 0) pos = len - 1;
            if (name[pos] !== 'A' && !arr.includes(pos)) {
                arr.push(pos);
                queue.push([pos, sum + move_cnt, arr.slice()]);
                break;
            }
        }
        arr.pop();
        move_cnt = 0; pos = x;
        while (1) {// 오른쪽
            pos++;
            move_cnt++;
            if (pos >= len) pos = 0;
            if (name[pos] !== 'A' && !arr.includes(pos)) {
                arr.push(pos);
                queue.push([pos, sum + move_cnt, arr.slice()]);
                break;
            }
        }
    }
    return change + move;
}