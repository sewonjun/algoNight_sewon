function permute(nums: number[]): number[][] {
  if (nums.length === 1) return [nums];

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const restArr = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const permutations = permute(restArr);

    permutations.forEach((el) => {
      result.push([nums[i], ...el]);
    });
  }

  return result;
}
