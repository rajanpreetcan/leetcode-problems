/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     if(nums.length === 1){
        if(nums[0]==0) return 1
       else return 0
   }
    if(!nums.includes(0)){
    return 0
   }
   nums.sort((a,b) => a-b)
   for(let i = 0; i<=nums.length; i++){
       if(nums[i+1]-nums[i] != 1){
        return nums[i]+1
       }
   }
};