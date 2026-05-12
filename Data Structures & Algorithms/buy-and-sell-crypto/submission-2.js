class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPurchasePrice = prices[0]
        let maxProfit = 0;
        for(let i=1; i<prices.length; i++){
            if(prices[i] < minPurchasePrice){
                minPurchasePrice = prices[i]
            }
            maxProfit = Math.max(maxProfit, prices[i] - minPurchasePrice)
        }
        return maxProfit;
    }
}
