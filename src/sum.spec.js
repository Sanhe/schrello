import { describe, it } from "mocha";
import { expect } from "chai";
import sum from "./sum.js";

describe("sum function", () => {
    it("sums up two integers", () => {
        expect(sum(1, 2)).to.eql(3);
        expect(sum(4, 3)).to.eql(7);
    });
});
