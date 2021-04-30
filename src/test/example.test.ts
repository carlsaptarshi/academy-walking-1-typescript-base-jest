import {Example} from "../main/example";

describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example: Example = new Example();
        expect(example.add(1, 2)).toBe(3);
    })
})

describe('[fizzbuzz]', () => {
    it('should 1 and return 1', () =>{
        const example: Example = new Example();
        const result = example.fizzbuzz(1);
        expect(result).toBe("1");
    })
})