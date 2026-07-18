class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length
        let n = grid[0].length
        let queue = []
        let INF = 2147483647;
        let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                if(grid[i][j] === 0){
                    queue.push([i, j])
                }
            }
        }

        let idx = 0;
        while(idx < queue.length){
            const [row, col] = queue[idx++];

            for(const [dr, dc] of dirs){
                const nr = row + dr, nc = col + dc

                if(nr >= 0 && nr < m && nc >=0 && nc < n && grid[nr][nc] === INF){
                    grid[nr][nc] = grid[row][col] + 1
                    queue.push([nr, nc]);
                }
            }
        }
    }
}
