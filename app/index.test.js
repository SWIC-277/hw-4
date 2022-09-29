import { describe, expect, it } from "vitest";
import {
  calcAvg,
  calcCartTotal,
  calcRectArea,
  convertFtToIn,
} from "./index.js";

describe("calcAvg", () => {
  it("calculates the average from an array of numbers", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = 3;
    expect(calcAvg(input)).toBe(expected);
  });
});

describe("calcCartTotal", () => {
  it("calculates the total of a shopping cart", () => {
    const input = [
      { price: 10, qty: 1 },
      { price: 20, qty: 2 },
    ];
    const expected = 50;
    expect(calcCartTotal(input)).toBe(expected);
  });
});
