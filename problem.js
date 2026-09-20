// problem 1

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

// problem 2

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

// problem 3

var searchInsert = function (nums, target) {
  // your code goes here
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// console.log(searchInsert([1, 3, 5, 6], 7));

// problem 4

var maxDepth = function (root) {
  if (root.length === 0) {
    return 0;
  }

  function depth(index) {
    if (index >= root.length || root[index] === null) {
      return 0;
    }

    let leftDepth = depth(index * 2 + 1);
    let rightDepth = depth(index * 2 + 2);

    if (leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  }

  return depth(0);
};

// console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // 3

// problem 6

var productExceptSelf = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product = product * nums[j];
      }
    }

    result.push(product);
  }

  return result;
};

// console.log(productExceptSelf([1, 2, 3, 4]));

// problem 7

var rotate = function (nums, k) {
  // your code goes here
  k = k % nums.length;

  let rotated = nums.slice(-k).concat(nums.slice(0, -k));
  return rotated;
};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// Problem 9 :

var checkSubarraySum = function (nums, k) {
  // your code goes here

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum % k === 0 && j - i + 1 > 1) {
        return true;
      }
    }
  }
  return false;
};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 13));

var dailyTemperatures = function (temperatures) {
  let result = [];

  for (let i = 0; i < temperatures.length; i++) {
    let days = 0;

    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        days = j - i;
        break;
      }
    }

    result.push(days);
  }

  return result;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));
