// add whatever parameters you deem necessary
function countPairs(nums, sum) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] + nums[end] === sum) {
            count++;
            start++;
            end--;
        }
        if (nums[start] + nums[end] > sum) end--;
        if (nums[start] + nums[end] < sum) start++;

    }
    return count;
}

module.exports = {countPairs};