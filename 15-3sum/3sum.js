/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  
    let sortedArr = nums.sort((a, b) => a - b)
    let finalArr = []
    for (let i = 0; i < sortedArr.length-2; i++) {
        let left = i+1;
        let right = sortedArr.length - 1
        let x = sortedArr[i]
        if(i > 0 && sortedArr[i] == sortedArr[i-1]){
            continue;
        }
        while (left < right) {
        let sum = x + sortedArr[left] + sortedArr[right]

            if (sum == 0) {
                finalArr.push([x, sortedArr[left], sortedArr[right]])
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--; 
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return finalArr
};