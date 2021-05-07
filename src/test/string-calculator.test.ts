class StringCalculator {
    add(s: string): number {
        return 0;
    }
}

describe('string calculator tests', () => {
    it("should take in an empty string and return 0", () => {
        let stringCalculator: StringCalculator  = new StringCalculator();
        expect(stringCalculator.add("")).toBe(0);
    })
})
