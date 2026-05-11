class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1
        while(i < j){
            let total = numbers[i] + numbers[j]
            if(total === target){
                return [i + 1, j + 1]
            }
            else if(total < target){
                i++
            }
            else{
                j--;
            }
        }
        return [];
    }
}
