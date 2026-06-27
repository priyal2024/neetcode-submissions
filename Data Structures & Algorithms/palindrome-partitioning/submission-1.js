class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        let sol = [];
        function isPalindrome(s){
            let reverseStr = s.split("").reverse().join("");
            return s === reverseStr
        }

        function backtrack(s, sol){
            if(s.length === 0){
                res.push([...sol])
                return;
            }
            for(let i=0; i<s.length; i++){
                let part = s.substring(0, i+1)
                
                if(isPalindrome(part)){
                    sol.push(part)
                    backtrack(s.substring(i+1), sol, res)
                    sol.pop();
                }
            }
        }

        backtrack(s, sol, res)
        return res;
    }
}
