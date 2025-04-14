function solution(num_list) {
  let gop = 1;
  let hop = 0;

  for (let i = 0; i < num_list.length; i++) {
    gop *= num_list[i];
    hop += num_list[i];
  }

  return gop < hop * hop ? 1 : 0;
}
