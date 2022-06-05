//테스트 전 후 처리
//를 하지 않으면 계속 num이 재선언됨 => 초기화 시켜줘야함 => beforeEach
//afterEach: 테스트 직 후 실행
//test.only: 여러 테스트 중 한 개만 실행
//test.skip: 건너뛰고 실행

const testbeaf = require("./testbeaf");

let num = 0;

beforeEach(() => {
  num = 0;
});

// afterEach(() => {
//   num = 0;
// });

test("0 더하기 1은 1이야", () => {
  num = testbeaf.add(num, 1);
  expect(num).toBe(1);
});

test.skip("0 더하기 2은 2이야", () => {
  num = testbeaf.add(num, 2);
  expect(num).toBe(2);
});

test.only("0 더하기 3은 3이야", () => {
  num = testbeaf.add(num, 3);
  expect(num).toBe(3);
});

//Db에서 데이터를 가져다 쓴 후 멈추기
//최초에 한번 최후에 한번으로! (User정보는 한번만 가져오고 다 테스트 후 끊기)
//beforeAll afterAll : 각 테스트 별로 실행되는 것이 아니라 테스트 전체를 한번에 다룸.

// let user;

// beforeAll(async () => {
//   user = await testbeaf.connectUserDb();
// });
// afterAll(async () => {
//   return testbeaf.disconnectUserDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });

// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });

// test("성별은 남성", () => {
//   expect(user.gender).toBe("male");
// });

// describe("Car 관련 작업", () => {
//   let car;

//   beforeAll(async () => {
//     car = await testbeaf.connectCarDb();
//   });
//   afterAll(async () => {
//     return testbeaf.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });

//   test("브랜드는 bmw", () => {
//     expect(car.brand).toBe("bmw");
//   });

//   test("색상은 red", () => {
//     expect(car.color).toBe("red");
//   });
// });

//순서

// beforeAll(() => console.log("밖 beforeAll")); //1
// beforeEach(() => console.log("밖 beforeEach")); //2, 6
// afterEach(() => console.log("밖 afterEach")); //4, 10
// afterAll(() => console.log("밖 afterAll")); //마지막

// test("0 + 1 = 1", () => {
//   expect(testbeaf.add(0, 1)).toBe(1); //3
// });

// describe("Car관련 작업", () => {
//   beforeAll(() => console.log("안 beforeAll")); //5
//   beforeEach(() => console.log("안 beforeEach")); //7
//   afterEach(() => console.log("안 afterEach")); //9
//   afterAll(() => console.log("안 afterAll")); //마지막 -1

//   test("0 + 1 = 1", () => {
//     expect(testbeaf.add(0, 1)).toBe(1); //8
//   });
// });
