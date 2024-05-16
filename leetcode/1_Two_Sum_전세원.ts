//풀이법 3
const twoSum = function (
  nums: number[],
  target: number
): [number, number] | undefined {
  const pastNums: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (pastNums.hasOwnProperty(target - nums[i])) {
      return [i, pastNums[String(target - nums[i])]];
    }

    pastNums[nums[i]] = i;
  }
};

//풀이법 1
// const twoSum = function(nums, target) {
//     let returnVal = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         const firstTarget = nums[i];

//         for (let j = i + 1; j < nums.length; j++) {
//             const secondTarget = nums[j];

//             if ( Number(firstTarget) + Number(secondTarget) === target) {
//                 returnVal = [i ,j];

//                 break;
//             }
//         }
//     }

//     return returnVal;
// };

// 풀이법 2
// const twoSum = function(nums, target) {
//   let firstIndex = 0;
//   let lastIndex = nums.length - 1;

//   while (firstIndex < lastIndex) {
//     if (nums[firstIndex] + nums[lastIndex] === target) break;

//     if (lastIndex - 1 === firstIndex) {
//       firstIndex++;
//       lastIndex = nums.length - 1;

//       continue;
//     }

//     lastIndex--;
//   }

//   return [firstIndex, lastIndex];
// }
