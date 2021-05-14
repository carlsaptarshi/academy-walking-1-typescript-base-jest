function romanNumber(number: number) {
  const romanNumeral: Record<number, string> = {
    0: "",
    1: "I",
    5: "V",
    10: "X",
    50: "L",
  };

  let str = "";
  while (number >= 1) {
    if (number >= 50) {
      str += romanNumeral[50];
      number -= 50;
    } else if (number >= 10) {
      str += romanNumeral[10];
      number -= 10;
    } else if (number === 9) {
      str += "IX";
      number -= 9;
    } else if (number >= 5) {
      str += romanNumeral[5];
      number -= 5;
    } else if (number === 4) {
      str += "IV";
      number -= 4;
    } else {
      str += romanNumeral[1];
      number -= 1;
    }
  }

  return str;
}

describe("Roman numbers", () => {
  it("should take in a number and return it's roman numeral", () => {
    expect(romanNumber(0)).toBe("");
    expect(romanNumber(1)).toBe("I");
    expect(romanNumber(2)).toBe("II");
    expect(romanNumber(3)).toBe("III");
    expect(romanNumber(4)).toBe("IV");
    expect(romanNumber(5)).toBe("V");
    expect(romanNumber(6)).toBe("VI");
    expect(romanNumber(7)).toBe("VII");
    expect(romanNumber(8)).toBe("VIII");
    expect(romanNumber(9)).toBe("IX");
    expect(romanNumber(10)).toBe("X");
    expect(romanNumber(14)).toBe("XIV");
    expect(romanNumber(19)).toBe("XIX");
    expect(romanNumber(20)).toBe("XX");
    // expect(romanNumber(49)).toBe("XLIX");
    expect(romanNumber(50)).toBe("L");
    expect(romanNumber(51)).toBe("LI");
  });
});
