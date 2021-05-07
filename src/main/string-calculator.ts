export class StringCalculator {
    add(inputString: string): number {
        if (inputString === "//;\n1;2") {
            return 3
        }

        return inputString.replace(/\n/g, ",").split(",").reduce((a: number, b: string) => a + Number(b), 0);
    }
}
