import {Fizzbuzz} from "../main/fizzbuzz";

describe('[fizzbuzz]', () => {
    let example: Fizzbuzz;
    beforeEach(() => {
        example = new Fizzbuzz();
    })
    it.each([[1, "1"], [2, "2"], [4, "4"]])
    ('should return %d when input is %s', (input: number, expected: string) =>{
        const result = example.execute(input);
        expect(result).toBe(expected);
    });

    it.each([[3], [6], [9]])
    ('should return fizz when input is multiple of 3', (input: number) =>{
        const result = example.execute(input);
        expect(result).toBe("fizz");
    });

    it.each([[5], [10], [20]])
    ('should return buzz when input is multiple of 5', (input: number) =>{
        const result = example.execute(input);
        expect(result).toBe("buzz");
    });

    it.each([[15], [30], [45]])
    ('should return fizzbuzz when input is multiple of 3 and 5', (input: number) =>{
        const result = example.execute(input);
        expect(result).toBe("fizzbuzz");
    });
})