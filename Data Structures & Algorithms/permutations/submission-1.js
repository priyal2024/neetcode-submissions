class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let n = nums.length;
        let res = []
        let sol = []
        function backtrack(){
            if(sol.length === n){
                res.push([...sol])
                return;
            }

            for(let i=0; i<n; i++){
                if(!sol.includes(nums[i])){
                    sol.push(nums[i])
                    backtrack()
                    sol.pop()
                }
            }
        }
        backtrack();
        return res;
    }
}
