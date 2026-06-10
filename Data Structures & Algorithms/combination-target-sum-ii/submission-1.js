class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a - b)
    let res = []
    function backtrack(idx, sol, remaining){
        if(remaining === 0){
            res.push([...sol])
            return;
        }

        if(remaining < 0) return;

        for(let i=idx; i<candidates.length; i++){
            if(i > idx && candidates[i] === candidates[i - 1]) continue;
            sol.push(candidates[i]);
            backtrack(i + 1, sol, remaining - candidates[i]);
            sol.pop();
        }
    }
    backtrack(0, [], target)
    return res;
    }
}
