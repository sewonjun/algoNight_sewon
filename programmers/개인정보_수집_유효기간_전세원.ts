//가장 먼저 약관 종류에 따라, 달을 더하고, 기존 달 + 유효 기간/12 로 년도를 바꿀지 판별한다.
//후에 기존 달 + 유효 기간%12로 달을 판별한다.
//달을 더 한후, -1일을 한다.

//엣지 케이스
//1일 수집일자이면, 28일까지만 수집이 가능하다. => 그러면서 달에서 -1 해야 한다.
//1월 1일인 경우 전년도 12월 28일까지 수집이 가능.

function isExpired(date, term) {
  let [year, month, day] = date.split(".").map((el) => parseInt(el, 10));
  const termSumedMonth = month + term;

  if (termSumedMonth / 12 > 1) {
    const yearUpdate = Math.floor(termSumedMonth / 12);

    year += yearUpdate;
  }
  //12 % 12 일 경우, 년도 업데이트 - 1
  const monthUpdate = termSumedMonth % 12;

  if (monthUpdate === 0) {
    year--;
    month += term % 12;
  } else {
    month = monthUpdate;
  }

  return [year, month, day];
}

function solution(today, terms, privacies) {
  const result = [];
  const termsObj = terms.reduce((acc, cur) => {
    const [key, value] = cur.split(" ");
    acc[key] = value;

    return acc;
  }, {});
  const [curYear, curMonth, curDay] = today
    .split(".")
    .map((el) => parseInt(el, 10));

  privacies.forEach((privacy, index) => {
    const [signupDate, term] = privacy.split(" ");
    const termMonth = termsObj[term];
    const [dueYear, dueMonth, dueDay] = isExpired(
      signupDate,
      Number(termMonth)
    );

    if (dueYear < curYear) {
      result.push(index + 1);
    } else if (dueYear === curYear && dueMonth < curMonth) {
      result.push(index + 1);
    } else if (
      dueYear === curYear &&
      dueMonth === curMonth &&
      dueDay <= curDay
    ) {
      result.push(index + 1);
    }
  });

  return result;
}
