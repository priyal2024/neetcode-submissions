class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
let longest = 0;
    let charSet = new Set();
    let l = 0;
    for(let r=0; r<s.length; r++){
        while(charSet.has(s[r])){
            charSet.delete(s[l])
            l++;
        }
        charSet.add(s[r]);
        longest = Math.max(longest, r - l + 1)
    }
    return longest
    }
}
