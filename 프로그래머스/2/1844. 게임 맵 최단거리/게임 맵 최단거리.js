function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]] // 상, 하, 좌, 우
    
    const queue = [[0, 0, 1]]; // 행, 열, 이동 횟수
    maps[0][0] = 0; 
    
    while(queue.length > 0){
        const [x, y, dist] = queue.shift()
        
        if (x === n - 1 && y === m - 1){
            return dist
        }
        
        for(const [dx, dy] of directions){
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1
}

// 의사코드
// (1, 1) 시작 (n , m) 끝 그 사이의 거리를 숫자로 표현
// 처음 아래 혹은 옆이 1이라면 아래 혹은 옆으로 이동
// 계속해서 숫자 1이 있으면 그쪽으로 한칸 이동
// 마지막으로 옮겨진 곳 그전 위치가 왼쪽이며 위, 아래, 오른쪽이 0이라면 뒤로 돌아가기
// 아무곳도 갈수 없다면 -1을 리턴