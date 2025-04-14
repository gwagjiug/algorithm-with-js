function solution(s) {
  const lastIndex = {}; // 문자의 마지막 위치 기록
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (lastIndex[char] === undefined) {
      result.push(-1); // 처음 나오는 글자
    } else {
      result.push(i - lastIndex[char]); // 이전 위치와의 거리
    }

    lastIndex[char] = i; // 위치 갱신
  }

  return result;
}
