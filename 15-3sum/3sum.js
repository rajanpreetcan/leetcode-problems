/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b); // Sort the array first
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Skip duplicates
            let left = i + 1;
            let right = nums.length - 1;
            const target = 0 - nums[i]; // Set the target sum
            
            while (left < right) {
                const sum = nums[left] + nums[right] + nums[i]; // Update sum with nums[i]
                
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
};