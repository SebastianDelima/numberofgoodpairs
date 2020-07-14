
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

var numIdenticalPairs = function(nums) {
    let i = 0;
    let result = 0;
    let number = nums[0];
    
    while(number != nums.length - 1){
        
        nums.forEach(num => {
        if(number == num[i + 1]){
            result ++
    }
      i++  
      
    })
        number++
          }

    
    return result
};