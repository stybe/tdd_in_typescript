import basicMath from '../src/basicMath';

describe("add", () => {
    it("does not return NaN", () => {
        const answer = basicMath.add(2, 3);
        expect(answer).not.toBeNaN();
    });
    it("adds two numbers", () => {
        const answer = basicMath.add(2, 3);
        expect(answer).toBe(5);
    });
});

describe("substract", () => {
    it("does not return NaN", () => {
        const answer = basicMath.subtract(5, 2);
        expect(answer).not.toBeNaN;
    });
    it("positive number if greater number is substracted from lesser number", () => {
        const answer = basicMath.subtract(5, 2);
        expect(answer).toBe(3);
    });
    it("returns negative number if first number is greater", () => {
        const answer = basicMath.subtract(1, 2);
        expect(answer).toBe(-1);
    })
});