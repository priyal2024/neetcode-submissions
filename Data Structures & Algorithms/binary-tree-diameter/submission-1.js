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
        this.maxDiameter = 0;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.dfs(root)
        return this.maxDiameter
    }
    dfs(node){
        if(node === null) return 0;
        let leftDepth = this.dfs(node.left)
        let rightDepth = this.dfs(node.right)

        this.maxDiameter = Math.max(this.maxDiameter, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1
    }
}
