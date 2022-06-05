const fn = require("./fn");

test("1은 1이야", () => {
  expect(1).toBe(1);
});

test("2더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("3 더하기 3은 5가 아니야", () => {
  expect(fn.add(3, 3)).not.toBe(5);
  //Matcher
});

// -toStrictEqual: Equal보다 더 정확하게 검사함

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

test("이름과 나이를 전달받아서 객체를 반환해줘!", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

// -toBeNull: 값이 null일 때
// -toBeUndefined: 값이 undefined일 때
// -toBeDefined: 값이 defined일 때

test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// -toBeTruthy: 비어있지 않은 문자열일 때
// -toBeFalsy: 0일 때

test("비어있지 않은 문자열은 true입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// -toBeGreaterThan: 크다
// -toBeGreaterThanOrEqual: 크거나 같다
// -toBeLessThan: 작다
// -toBeLessThanOrEqual: 작거나 같다

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("비밀번호 4자리!", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

//숫자를 다룰 때 주의할 점
//js에선 소수점끼리 더할 때 정확하지 않다. why? 이진법때문
//=> test할때는 toBeCloseTo(근사치계산) 사용하자!

test("0.1더하기 0.2는 0.3이다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

//문자열 판단: 정규표현식 + ToMatch
///h/i: 대소문자 규칙 없애기

test("Hello World 에 a 라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/h/i);
});

//배열: ToContain

test("유저리스트에 Tom이 있나?", () => {
  const user = "Tom";
  const userList = ["Tom", "Jane", "Kai"];
  expect(userList).toContain(user);
});

//예외 발생
//정확한 에러 값 확인하려면 toThrow()안에 특정 값 넣기!

test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
