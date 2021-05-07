import {StringCalculator} from "../main/string-calculator";

describe('string calculator tests', () => {
    it("should take in an empty string and return 0", () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.add("")).toBe(0);
    });

    it("should take in '1' and return 1", () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.add("1")).toBe(1);
    });
})
