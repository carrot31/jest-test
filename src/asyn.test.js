const asyn = require("./asyn");

//비동기 함수 test code
//jest의 경우에 callback에 도달하면 그대로 끝나버려서 done을 붙여줘야함
//api test는 try catch문 사용

// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   asyn.getName(callback);
// });

//동기함수 사용 시엔 return을 붙여주자!

test("3초 후에 받아온 나이는 30", () => {
  return asyn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

//resolve, rejects

test("3초 후에 받아온 나이는 30!", () => {
  return expect(asyn.getAge()).resolves.toBe(30);
});

// test("3초 후에 에러가 납니다.", () => {
//   return expect(asyn.getAge()).rejects.toMatch("error");
// });

//asyn await
//마찬가지로 resolve, reject 사용 가능

test("3초 후 나이 30", async () => {
  //   const age = await asyn.getAge();
  //   expect(age).toBe(30);
  await expect(asyn.getAge()).resolves.toBe(30);
});

test("1은 1이야", () => {
  expect(1).toBe(1);
});
