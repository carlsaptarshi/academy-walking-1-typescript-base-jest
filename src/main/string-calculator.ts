export class StringCalculator {
    add(inputString: string): number {
        return inputString.replace(/\n/g, ",").split(",").reduce((a: number, b: string) => a + Number(b), 0);
    }
}
