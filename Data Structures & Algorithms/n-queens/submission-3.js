class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let res = []
        let nQueens = Array.from({length: n}, () => Array(n).fill("."))

        let cols = new Set()
        let diag1 = new Set()
        let diag2 = new Set()

        function backtrack(row){
            if(row === n){
                res.push(nQueens.map((r) => r.join("")));
                return;
            }

            for(let col=0; col<n; col++){
                if(cols.has(col) || diag1.has(row - col) || diag2.has(row + col)){
                    continue;
                }
            

            // Place Queen
            nQueens[row][col] = "Q"
            cols.add(col)
            diag1.add(row - col)
            diag2.add(row + col)

            // Recurse to next row
            backtrack(row + 1)

            // Backtrack(Remove Queen)
            nQueens[row][col] = "."
            cols.delete(col)
            diag1.delete(row - col)
            diag2.delete(row + col)
        }
        }
        backtrack(0)
        return res;
    }
}
