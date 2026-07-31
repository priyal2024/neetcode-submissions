class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj = new Map();
        let indegree = new Array(numCourses).fill(0);
        let q = [];
        let finish = 0;

        for(let i=0; i<numCourses; i++){
            adj.set(i, []);
        }

        for(const [crs, pre] of prerequisites){
            indegree[crs]++;
            adj.get(pre).push(crs);
        }

        for(let i=0; i<numCourses; i++){
            if(indegree[i] === 0){
                q.push(i);
            }
        }

        while(q.length){
            let node = q.shift();
            finish++;
            
            for(let nei of adj.get(node)){
                indegree[nei]--;
                if(indegree[nei] === 0){
                    q.push(nei);
                }
            }
        }
        return finish === numCourses;
    }
}
