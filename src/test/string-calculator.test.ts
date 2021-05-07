import {StringCalculator} from "../main/string-calculator";

describe('string calculator tests', () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    })

    it.each([["", 0], ["0", 0], ["1", 1], ["2", 2]])
    ("should take in a string of value '%s' and return %d", (input, expected) => {
        expect(stringCalculator.add(input)).toBe(expected);
    });

    it("should take '1,2' and return 3", () => {
        expect(stringCalculator.add("1,2")).toBe(3);
    });

    it("should take '2,3' and return 5", () => {
        expect(stringCalculator.add("2,3")).toBe(5);
    });
});
