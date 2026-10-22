function solution(nums) {
  const poket = new Set(nums);
  const limit = nums.length / 2;

  return Math.min(poket.size, limit);
}
