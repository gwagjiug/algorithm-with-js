function solution(k, score) {
  const hall = [];
  const answer = [];

  for (const point of score) {
    // 오늘 점수 추가
    hall.push(point);

    // 높은 점수부터 정렬
    hall.sort((a, b) => b - a);

    // k개를 넘으면 가장 낮은 점수 제거
    if (hall.length > k) {
      hall.pop();
    }

    // 현재 명예의 전당에서 가장 낮은 점수 기록
    answer.push(hall[hall.length - 1]);
  }

  return answer;
}
