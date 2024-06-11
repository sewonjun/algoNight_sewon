function solution(friends, gifts) {
  const gaveLists = {};
  const gotLists = {};
  const giftRates = {};
  const wonGifts = {};

  gifts.forEach((gift) => {
    const [gave, got] = gift.split(" ");

    gaveLists[gave] ? gaveLists[gave].push(got) : (gaveLists[gave] = [got]);

    gotLists[got] ? gotLists[got].push(gave) : (gotLists[got] = [gave]);
  });

  for (let friend of friends) {
    const gaveCount = gaveLists[friend] ? gaveLists[friend].length : 0;
    const gotCount = gotLists[friend] ? gotLists[friend].length : 0;
    giftRates[friend] = gaveCount - gotCount;
  }

  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const a = friends[i];
      const b = friends[j];

      const aGaveB = gaveLists[a]
        ? gaveLists[a].filter((el) => el === b).length
        : 0;
      const bGaveA = gaveLists[b]
        ? gaveLists[b].filter((el) => el === a).length
        : 0;
      //선물 서로 준 갯수로 판별

      if (aGaveB > bGaveA) {
        wonGifts[a] ? (wonGifts[a] += 1) : (wonGifts[a] = 1);

        continue;
      }

      if (aGaveB < bGaveA) {
        wonGifts[b] ? (wonGifts[b] += 1) : (wonGifts[b] = 1);

        continue;
      }

      //선물 서로 준 갯수가 같거나, 없으면 선물지수로 판별
      if (giftRates[a] > giftRates[b])
        wonGifts[a] ? (wonGifts[a] += 1) : (wonGifts[a] = 1);

      if (giftRates[a] < giftRates[b])
        wonGifts[b] ? (wonGifts[b] += 1) : (wonGifts[b] = 1);

      //선물지수도 같으면 둘 다 선물 없음
    }
  }

  const maxGift = Math.max(...Object.values(wonGifts));

  return Object.values(wonGifts).length > 0
    ? Math.max(...Object.values(wonGifts))
    : 0;
}
