class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid || grid.length === 0) return 0;
        // m = row and n = column
        let m = grid.length
        let n = grid[0].length
        let count = 0;
        function dfs(r, c){
            if(r < 0 || c >= n || r >= m || c < 0 || grid[r][c] === "0") return;

            grid[r][c] = "0";
            dfs(r - 1, c)
            dfs(r + 1, c)
            dfs(r, c - 1)
            dfs(r, c + 1)
        }

        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                if(grid[i][j] === "1"){
                    count++;
                    dfs(i, j)
                }
            }
        }
        return count;
    }
}
