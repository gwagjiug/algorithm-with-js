function solution(participant, completion) {
  const counts = new Map();

  // 1. 이름별 참가자 수 세기
  for (const name of participant) {
    const count = counts.get(name) || 0;
    counts.set(name, count + 1);
  }

  // 2. 완주한 사람의 인원수를 1씩 빼기
  for (const name of completion) {
    counts.set(name, counts.get(name) - 1);
  }

  // 3. 인원수가 1로 남은 이름 반환
  for (const [name, count] of counts) {
    if (count === 1) {
      return name;
    }
  }
}
