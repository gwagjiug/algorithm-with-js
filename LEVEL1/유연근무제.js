function solution(schedules, timelogs, startday) {
  let answer = 0;
  const n = schedules.length;

  function addTenMinutes(time) {
    let hour = Math.floor(time / 100);
    let minute = time % 100;
    minute += 10;
    if (minute >= 60) {
      hour += 1;
      minute -= 60;
    }
    return hour * 100 + minute;
  }

  for (let i = 0; i < n; i++) {
    let isEligible = true;

    for (let j = 0; j < 7; j++) {
      const weekday = (startday + j) % 7;

      if (weekday >= 1 && weekday <= 5) {
        const targetTime = addTenMinutes(schedules[i]);
        if (timelogs[i][j] > targetTime) {
          isEligible = false;
          break;
        }
      }
    }

    const weekdayCount = Array.from(
      { length: 7 },
      (_, j) => (startday + j) % 7
    ).filter((d) => d >= 1 && d <= 5).length;

    if (isEligible && weekdayCount > 0) {
      answer++;
    }
  }

  return answer;
}
