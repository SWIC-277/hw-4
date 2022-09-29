import { describe, expect, it } from "vitest";
import { calcAvg, calcCartTotal, tallyByCategory } from "./index.js";

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

describe("tallyByCategory", () => {
  it("tallies up the number of items in each category", () => {
    const input = [
      { category: "A", qty: 1 },
      { category: "B", qty: 2 },
      { category: "A", qty: 3 },
    ];

    const expected = {
      A: 4,
      B: 2,
    };

    expect(tallyByCategory(input)).toEqual(expected);
  });
});
