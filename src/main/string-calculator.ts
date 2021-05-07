export class StringCalculator {
    add(inputString: string): number {
        const delimiter = inputString.startsWith("//") ? inputString[2] : ",";

        return inputString
            .replace(/\n/g, delimiter)
            .split(delimiter)
            .reduce((currentTotal: number, inputValue: string) => currentTotal + Number(inputValue), 0);
    }
}
