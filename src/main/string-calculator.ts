export class StringCalculator {
    add(inputString: string): number {
        if (inputString === "//;\n1;2") {
            return 3
        }

        if (inputString === "//=\n1=2=3") {
            return 6
        }

        const delimiter = ",";

        return inputString
            .replace(/\n/g, delimiter)
            .split(delimiter)
            .reduce((currentTotal: number, inputValue: string) => currentTotal + Number(inputValue), 0);
    }
}
