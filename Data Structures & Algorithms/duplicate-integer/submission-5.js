class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set(nums);
        return nums.length !== s.size
    }
}
