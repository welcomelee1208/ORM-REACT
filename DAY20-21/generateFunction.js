//제너레이터 함수 정의하기
//제너레이터 함수는 function*(){yield( 중단시키는 명령어),yield(2번쨰 중단)}
//함수의 목적은 함수내 로직을 순차적으로 진행시키고 진행되는 순서에따른 반환값을 다양하게 반환하고자 할때
const gen = function* () {
  console.log(1);
  yield;
  console.log(2);
  yield;
  console.log(3);
  yield;
};
//제너레이터 함수를 실행시킨다
const display = gen();
//제너레이터 함수에서 저공되는 next()함수는  yield를 기준으로 로직을 순차적으로 실행시킨다.
display.next(); //1번이 출력
display.next(); //2번이 출력
display.next(); //1번이 출력

//무한반복 제너레이터 함수
let i = 0;
const gen2 = function* () {
  while (true) {
    //yield전에 로직처리후 반환값은 yield에 표시함
    //yield 반환값 지정
    yield i++;
  }
};

const display2 = gen2();

display2.next();
console.log("전역변수값:", i);

display2.next();
console.log("전역변수값:", i);

display2.next();
console.log("전역변수값:", i);

display2.next();
console.log("전역변수값:", i);
