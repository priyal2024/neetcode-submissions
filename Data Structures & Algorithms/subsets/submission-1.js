class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = []
        let sol = []
        function backtrack(i){
            if(i === nums.length){
                res.push(sol.slice())
                return;
            }

            // Don't pick nums[i]
            backtrack(i + 1)

            // pick nums[i]
            sol.push(nums[i])
            backtrack(i + 1)
            sol.pop()
        }
        backtrack(0)
        return res;
    }
}
