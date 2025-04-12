function solution(num_list) {
  var finalNum = num_list[num_list.length - 1];
  var finalNum2 = num_list[num_list.length - 2];

  if (finalNum > finalNum2) {
    num_list.push(finalNum - finalNum2);
  } else {
    num_list.push(finalNum * 2);
  }

  return num_list;
}
