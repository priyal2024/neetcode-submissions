/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    constructor(){
        this.balanced = true;
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        this.dfs(root)
        return this.balanced;
    }
    dfs(node){
        if(node === null) return 0;
        const lh = this.dfs(node.left)
        const rh = this.dfs(node.right)

        if(Math.max(lh, rh) - Math.min(lh, rh) > 1){
            this.balanced = false;
        }
        return 1 + Math.max(lh, rh)
    }
}
