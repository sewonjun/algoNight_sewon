function solution(people, limit) {
  //한번에 최대 2명씩밖에 못 탄다.
  //two pointer ..?

  const sortedPeople = people.sort((a, b) => b - a);

  let answer = 0;
  let idx1 = 0;
  let idx2 = people.length - 1;

  while (idx1 <= idx2) {
    if (sortedPeople[idx2] <= limit - sortedPeople[idx1]) {
      idx2--;
    }

    idx1++;
    answer++;
  }

  return answer;
}
