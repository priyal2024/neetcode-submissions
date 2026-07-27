class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = 0;
        let adj = Array.from({length: n}, () => [])
        for(const [u, v] of edges){
            adj[u].push(v)
            adj[v].push(u)
        }

        let visited = new Set();

        function dfs(node){
            if(visited.has(node)) return;

            visited.add(node);
            for(const nei of adj[node]){
                dfs(nei);
            }
        }

        for(let i=0; i<n; i++){
            if(!visited.has(i)){
                count++;
                dfs(i)
            }
        }

        return count;
    }
}
