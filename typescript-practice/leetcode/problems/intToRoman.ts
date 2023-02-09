function intToRoman(num: number): string {
    const M: string[] = ["", "M", "MM", "MMM"];
    const C: string[] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X: string[] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I: string[] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[num % 10];
}

console.log(intToRoman(58));