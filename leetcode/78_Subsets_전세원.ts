function subsets(nums: number[]): number[][] {
  //origin은 []으로 시작한다.
  //subset은 순서는 중요하지 않음으로
  //재귀를 돌때, 앞에서부터 해당 index뒤만 보내준다.
  const result = getSubsets([], nums);

  return [[], ...result];
}

function getSubsets(origin: [] | number[], subArray: number[]): number[][] {
  if (subArray.length === 1) return [[...origin, ...subArray]];

  const ableCombination = []; // [1, 2], [1, 2, 3], [1, 3]

  for (let i = 0; i < subArray.length; i++) {
    const restArray = subArray.slice(i + 1);
    ableCombination.push([...origin, subArray[i]]);

    if (restArray.length) {
      const nextCombination = getSubsets([...origin, subArray[i]], restArray);
      ableCombination.push(...nextCombination);
    }
  }

  return ableCombination;
}
