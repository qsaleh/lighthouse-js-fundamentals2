function howManyHundreds(num){
  let answer = 0;
  if ((num % 100) !== 0){
    num = num - (num % 100);
    answer = num / 100;
  }
  else {
    answer = num / 100;
  }
  return answer;
}
