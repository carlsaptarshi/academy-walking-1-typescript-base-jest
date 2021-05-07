export class StringCalculator {
    add(inputString: string): number {
        const delimiter = this.getDelimiter(inputString);

        return inputString
            .replace(/\n/g, delimiter)
            .split(delimiter)
            .reduce((currentTotal: number, inputValue: string) => currentTotal + Number(inputValue), 0);
    }

    private getDelimiter(inputString: string) {
        return inputString.startsWith("//") ? inputString[2] : ",";
    }
}
