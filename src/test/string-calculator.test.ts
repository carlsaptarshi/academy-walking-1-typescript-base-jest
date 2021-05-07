import {StringCalculator} from "../main/string-calculator";

describe('string calculator tests', () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    })

    it.each([["", 0], ["0", 0], ["1", 1], ["2", 2]])
    ("should take in a string of value '%s' and return %d", (input: string, expected: number) => {
        expect(stringCalculator.add(input)).toBe(expected);
    });

    it.each([["1,2", 3], ["2,3", 5], ["3,4", 7], ["10, 4", 14]])
    ("should take in a comma separated string of value '%s' and return %d", (input: string, expected: number) => {
        expect(stringCalculator.add(input)).toBe(expected);
    });
});
