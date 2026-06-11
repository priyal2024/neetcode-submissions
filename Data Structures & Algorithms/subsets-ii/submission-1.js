class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = []
        nums.sort((a,b) => a - b)
        function backtrack(idx, sol){
            res.push([...sol])
            for(let i=idx; i<nums.length; i++){
                if(i > idx && nums[i] === nums[i - 1]) continue;

                sol.push(nums[i])
                backtrack(i+1, sol)
                sol.pop()
            }
        }
        backtrack(0, [])
        return res;
    }
}
