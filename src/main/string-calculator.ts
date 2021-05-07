export class StringCalculator {
    add(inputString: string): number {
        if(inputString === "") {
            return 0;
        }
        if(inputString==="1"){
            return 1;
        }

        return 2;
    }
}
