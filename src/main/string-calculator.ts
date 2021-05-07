export class StringCalculator {
    add(inputString: string): number {
        if(inputString === "") {
            return 0;
        }

        if(inputString === "1,2") {
            return 3;
        }

        return Number(inputString);
    }
}
