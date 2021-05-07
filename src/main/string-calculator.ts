export class StringCalculator {
    add(inputString: string): number {
        if(inputString === "") {
            return 0;
        }

        return Number(inputString);
    }
}
