import {Fizzbuzz} from "../main/fizzbuzz";

describe('[fizzbuzz]', () => {
    it('should 1 and return 1', () =>{
        const example: Fizzbuzz = new Fizzbuzz();
        const result = example.execute(1);
        expect(result).toBe("1");
    });

    it("should 2 and return 2", () => {
        const example: Fizzbuzz = new Fizzbuzz();
        const result = example.execute(2);
        expect(result).toBe("2");
    });
})