function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    let bridge_weight = 0;
    const bridge_arr = [];
    while (true) {
        let w = truck_weights[0];
        if (truck_weights.length && bridge_weight + w <= weight) { // 다리가 무게를 견딜수 있으면 올라감
            bridge_weight += w;
            bridge_arr.push([w, 1]);
            truck_weights.shift();
        }
        answer++;
        for (let x of bridge_arr) x[1]++; // 다리 위에 있는 트럭 시간올려줌
        if (bridge_arr[0][1] > bridge_length) {
            bridge_weight -= bridge_arr[0][0];
            bridge_arr.shift();
        }
        if (!bridge_arr.length && !truck_weights.length) return answer;
    }
}
const b = 100;
const w = 100;
const arr = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(b, w, arr));
