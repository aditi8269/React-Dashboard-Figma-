import { twoSum } from "./twoSum";

describe("twoSum function", () => {
  test("finds correct indices for a simple case", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("works with negative numbers", () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test("returns empty array when no pair matches", () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });

  test("handles duplicate numbers correctly", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
