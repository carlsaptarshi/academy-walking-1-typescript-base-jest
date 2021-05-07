import {StringCalculator} from "../main/string-calculator";

describe('string calculator tests', () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    })

    it.each([["", 0], ["0", 0], ["1", 1], ["2", 2], ["-1", -1]])
    ("should take in a string of value '%s' and return %d", (input: string, expected: number) => {
        expect(stringCalculator.add(input)).toBe(expected);
    });

    it.each([["1,2", 3], ["2,3", 5], ["3,4", 7], ["10, 4", 14], ["-1,8", 7], ["-1,-1", -2]])
    ("should take in a comma separated string of value '%s' and return %d", (input: string, expected: number) => {
        expect(stringCalculator.add(input)).toBe(expected);
    });

    it("should take in '1,2,3' and return 6", () => {
        expect(stringCalculator.add("1,2,3")).toBe(6)
    })
});
