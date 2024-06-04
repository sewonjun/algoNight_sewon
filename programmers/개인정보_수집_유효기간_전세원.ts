function solution(today: string, terms: string[], privacies: string[]) {
  const answer: number[] = [];
  const splittedTerms = terms.reduce((acc: { [key: string]: number }, cur) => {
    const [key, value] = cur.split(" ");
    acc[key] = parseInt(value, 10);

    return acc;
  }, {});

  const privacyEndDate = privacies.map((privacy) => {
    const [date, term] = privacy.split(" ");
    const [year, month, day] = date.split(".").map((el) => parseInt(el, 10));
    let endYear, endMonth;
    const termMonth = splittedTerms[term];

    if (
      Math.floor((month + termMonth) / 12) > 0 &&
      (month + termMonth) % 12 === 0
    ) {
      endYear = year + Math.floor((month + termMonth) / 12) - 1;
    } else if (Math.floor(month + termMonth / 12) > 0) {
      endYear = year + Math.floor((month + termMonth) / 12);
    } else {
      endYear = year;
    }

    endMonth = (month + termMonth) % 12 !== 0 ? (month + termMonth) % 12 : 12;

    return [endYear, endMonth, day];
  });

  const lastPrivacyDates = privacyEndDate.map((privacy) => {
    const [year, month, day] = privacy;
    let lastPrivacyYear, lastPrivacyMonth, lastPrivacyDay;

    if (day === 1) {
      lastPrivacyDay = 28;
    } else {
      lastPrivacyDay = day - 1;

      return [year, month, lastPrivacyDay];
    }

    if (month === 1) {
      lastPrivacyMonth = 12;
      lastPrivacyYear = year - 1;

      return [lastPrivacyYear, lastPrivacyMonth, lastPrivacyDay];
    } else {
      lastPrivacyMonth = month - 1;

      return [year, lastPrivacyMonth, lastPrivacyDay];
    }
  });

  const [todayYear, todayMonth, todayDay] = today
    .split(".")
    .map((el) => parseInt(el, 10));

  lastPrivacyDates.forEach((el, index) => {
    const [year, month, day] = el;

    if (todayYear < year) return;

    if (todayYear > year) return answer.push(index + 1);

    if (todayMonth < month) return;

    if (todayMonth > month) return answer.push(index + 1);

    if (todayDay > day) answer.push(index + 1);
  });

  return answer;
}
