const addSum = (nums, target) => {
  for (i = 0; i < nums.length; i++)
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  console.log("No solution found");
  return [];
};

const nums = [2, 7, 11, 15], target = 9;

console.log(addSum(nums, target));
