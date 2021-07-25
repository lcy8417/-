function solution(N, number) {
    const dy = new Array(9).fill(0).map(el => new Set());
    let shift = N;
    for (let i = 1; i <= 8; i++) {
        dy[i].add(shift);
        shift = shift * 10 + N;
        for (let t = 1; t <= Math.floor(i / 2); t++) {
            for (const j of dy[i - t]) {
                for (const k of dy[t]) {
                    dy[i].add(j + k);
                    dy[i].add(Math.abs(j - k),);
                    dy[i].add(j * k);
                    dy[i].add(Math.floor(j / k) ? Math.floor(j / k) : Math.floor(k / j));
                }
            }
        }
        if (dy[i].has(number)) return i;
    }
    return -1;
}