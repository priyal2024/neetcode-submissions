class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length > n - 1){
            return false;
        }

        const adj = Array.from({length: n}, () => [])
        for(const [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        const visit = new Set()
        function dfs(node, prev){
            if(visit.has(node)) return false;

            visit.add(node);
            for(const nei of adj[node]){
                if(nei === prev) continue;
                if(!dfs(nei, node)){
                    return false;
                }
            }
            return true;
        }
        return dfs(0, -1) && visit.size == n;
    }
}
