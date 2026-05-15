class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let set = new Set()
        for(let i=0; i<nums.length; i++){
            set.add(nums[i])
        }
        for(let i=0; i<nums.length; i++){
            if(!set.has(nums[i] - 1)){
                let temp = nums[i];
                let count = 1;
                while(set.has(temp + 1)){
                    temp++;
                    count++;
                }
                longest = Math.max(longest, count)
            }
        }
    return longest;
    }
}
