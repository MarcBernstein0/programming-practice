function reverse(x: number): number {
    const isNegative: boolean = x < 0;
    x = Math.abs(x);
    let ret = 0;

    while (x > 0) {
        // pop the ones digit
        const poppedNum = x % 10;
        x = Math.floor(x/10);

        // check if it has reached max int
        ret *= 10;
        ret += poppedNum;
    }


    if (ret >= 2**31){
        return 0;
    }

    return isNegative ? ret * -1 : ret;
}


console.log(reverse(123));