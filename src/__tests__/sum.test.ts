import { sum } from "../utils/sum";

test("Sum function should be calculate the sum of two number", () => {
  const result = sum(4, 3);

  //Assertion
  expect(result).toBe(7);
});
