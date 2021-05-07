export class StringCalculator {
    add(inputString: string): number {
        if(inputString === "") {
            return 0;
        }

        if(inputString.includes(",")) {
            const inputNumbers = inputString.split(",");
            return Number(inputNumbers[0]) + Number(inputNumbers[1]);
        }

        return Number(inputString);
    }
}
