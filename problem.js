var checkSubarraySum = function (nums, k) {
  // your code goes here
  k = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// console.log(checkSubarraySum([1, 1, 2]));

var search = function (nums, target) {
  // your code goes here
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

// console.log(search([-1, 0, 3, 5, 9, 12], 10));

var searchInsert = function (nums, target) {
  // your code goes here
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 7));
