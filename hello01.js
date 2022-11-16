/*function hi() {
  console.log("hello wowwwwrld");
}

hi();

function factorial(n) {
  if (n > 0) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(4));

function fibo(n) {
  if (n >= 3) {
    return fibo(n - 1) + fibo(n - 2);
  } else if ((n = 2)) {
    return 1;
  } else if ((n = 1)) {
    return 1;
  }
}

console.log(fibo(6));

//f(n) = f(n-1) + f(n-2) (n>=3)

//f(1) = 1
//f(2) = 1

function can(n) {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1 + can(n - 1);
  } else if (n == 3) {
    return 1 + can(n - 1) + can(n - 2);
  } else if (n == 4) {
    return 1 + can(n - 1) + can(n - 2) + can(n - 3);
  } else if (n > 4) {
    return can(n - 4) + can(n - 3) + can(n - 2) + can(n - 1);
  }
}

n=1 > 1가지  (1)
n=2 > 2가지  (1+1)
n=3 > 4가지  (2+1+1)
n=4 > 8가지  (4+2+1+1)
n=5 > 15가지 (8+4+2+1)

console.log("can 값 : " + can(9));

function can2(n) {
  return Math.pow(2, n - 1);
}

console.log("n이 자유로울때 : " + can2(9));

function make1(n) {
  if (n / 3 != 0) {
    n = n / 3;
  }
}
*/

/*
console.log("hi");

class Animal {
  constructor() {
    this.satiety = 0;
    this.hp = 50;
  }

  feed(animal) {
    animal.satiety += 1;
  }

  attack(animal) {
    animal.hp -= 1;
  }
}

class Person extends Animal {
  feed(animal) {
    super.feed(animal);
    console.log("맛있게 먹거라");
  }
}
class Cat extends Animal {}

//let cat = new Cat();
//let person = new Person();

let cat = new Cat();
let person = new Person();

person.feed(cat);
console.log("고양이의 만족도 : " + cat.satiety);
cat.attack(person);
console.log("사람의 체력 : " + person.hp);
*/

/*
let num = Math.floor(Math.random() * 101);
let finish = 1;
let array = [10, 30, 40, 50, 60, 70, 90, 110, -1];

console.log("숫자를 입력하세요 (0~100)");
console.log(num);

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0 || array[i] > 100) {
    console.log("범위에 벗어난 숫자입니다 " + array[i]);
  } else if (num < array[i]) {
    console.log("Down " + array[i]);
  } else if (num > array[i]) {
    console.log("Up " + array[i]);
  } else if (num == array[i]) {
    console.log("정답입니다");
    finish = 2;
  }
}

if (finish != 2) {
  console.log("못맞추셨습니다");
}
*/

//구구단 문제
/*
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

/*
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let random1 = random(1, 9);
let random2 = random(1, 9);
let result = random1 * random2;

let answer = [];

random(1, 81);

console.log(`랜덤 구구단 게임 : ${random1} x ${random2}`);

for (let i = 0; i < 20; i++) {
  answer[i] = random(1, 81);
  console.log("answer : " + answer[i]);
  if (answer[i] == result) {
    console.log("정답입니다");
  } else {
    console.log("오답입니다");
  }
}
*/

/*
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let answer = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
  answer[i] = random(1, 10);
  sum += answer[i];
}
console.log(answer, "배열 평균 :", sum / 10);

*/

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let input_num = 30; //random(1,99);
let array = [];

for (let i = 0; i < 100; i++) {
  array[i] = i + 1;
}
console.log(array);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(array);
console.log(array);
