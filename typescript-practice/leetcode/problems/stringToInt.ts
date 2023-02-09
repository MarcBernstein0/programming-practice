function myAtoi(s: string): number {
    let sign: number = 1;
    let res: number = 0;
    let index: number = 0;
    const MAX_SAFE_32_INT = Math.pow(2, 31) - 1;
    const MIN_SAFE_32_INT = -Math.pow(2, 31);

    if (s.length === 0) return 0;

    while(s[index] === ' ') {
        index++;
    }

    // s = s.replace(/\s/g, "");
    // console.log(s);

    if (s[index] === "+" || s[index] === "-") {
        sign = s[index] === "+" ? 1 : -1;
       index++;
    }
    // console.log(s, "sign:", sign);

    for (let i = index; i < s.length; i++) {
        // console.log(s[i]);
        if (s[i].match(/[0-9]/) !== null) {
            const num = s.charCodeAt(i) - 48;
            // console.log(num);
            if (res > Math.floor(MAX_SAFE_32_INT / 10) || (res === Math.floor(MAX_SAFE_32_INT / 10) && num > MAX_SAFE_32_INT % 10)) { 
                return (sign === 1) ? MAX_SAFE_32_INT : MIN_SAFE_32_INT;
            }

            res = res * 10 + num;
        } else {
            return res * sign;
        }

    }

    // console.log(res, sign, res * sign);

    return res * sign;
}

console.log(myAtoi("    -42"));