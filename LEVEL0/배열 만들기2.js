function solution(l, r) {
  let arr = [];

  for (let i = l; i <= r; i++) {
    // i를 문자열로 바꿔서, 모든 글자가 '0' 또는 '5'인지 확인
    if ([...String(i)].every((ch) => ch === "0" || ch === "5")) {
      arr.push(i);
    }
  }

  return arr.length === 0 ? [-1] : arr;
}
