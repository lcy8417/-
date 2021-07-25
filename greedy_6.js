function solution(routes) {
    var answer = 1;
    routes.sort((a, b) => a[0] - b[0]);
    let lt = routes[0][0], rt = routes[0][1];
    for (let i = 1; i < routes.length; i++) {
        let [s, e] = [routes[i][0], routes[i][1]];
        if (s >= lt && s <= rt) {
            lt = s;
            rt = e > rt ? rt : e;
        } else {
            lt = s;
            rt = e;
            answer++;
        }

    }
    return answer;
}