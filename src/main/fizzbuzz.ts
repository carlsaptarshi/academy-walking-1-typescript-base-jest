export class Fizzbuzz {
    execute(number: number) {
        if(number % 3 === 0) {
            return "fizz";
        }
        return number.toString();
    }
}