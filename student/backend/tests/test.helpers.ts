import { expect } from "chai";
import "mocha";

// tslint:disable: no-unused-expression

export function checkNullReturns(func: (val: any) => any) {
  it("should return a null when given a null", function() {
    expect(func(null)).to.be.null;
  });

  it("should return a null when given an empty string", function() {
    expect(func("")).to.be.null;
  });

  it("should return a null when given undefined", function() {
    expect(func(undefined)).to.be.null;
  });
}

export function checkFalseReturns(func: (val: any) => boolean) {
  it("should return false when given a null", function() {
    expect(func(null)).to.be.false;
  });

  it("should return false when given an empty string", function() {
    expect(func("")).to.be.false;
  });

  it("should return false when given undefined", function() {
    expect(func(undefined)).to.be.false;
  });
}
