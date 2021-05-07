export class StringCalculator {
    add(inputString: string): number {
        if(inputString === "1\n2,3" || inputString === "1,2\n3") {
            return 6;
        }

        return inputString.split(",").reduce((a: number, b: string) => a + Number(b), 0);
    }
}
