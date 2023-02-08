function lengthOfLongestSubstringFirstTry(s: string): number {
    let res = "";

    for (let i = 0; i < s.length; i++) {
        const dictSeen = new Set<string>();
        let subString = s[i];
        dictSeen.add(s[i]);
        let foundDouble = false;

        for (let j = i + 1; j < s.length && !foundDouble; j++) {
            if (dictSeen.has(s[j])) {
                foundDouble = true;
            } else {
                subString += s[j];
                dictSeen.add(s[j]);
            }
        }
        if (subString.length > res.length) {
            res = subString;
        }
    }

    return res.length;
}

console.log(lengthOfLongestSubstringFirstTry("au"));

function lengthOfLongestSubstringSlidingWidnow(s: string): number {
    let len = 0;
    let charMap = new Map();
    let leftIndex = 0;

    for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
        const currChar = s[rightIndex];
        console.log(charMap);
        if (charMap.has(currChar) && charMap.get(currChar) >= leftIndex) {
            leftIndex = charMap.get(currChar) + 1;
        }

        len = Math.max(len, rightIndex - leftIndex + 1);
    
        charMap.set(currChar, rightIndex);
    }

    // if 
    return len;
}

console.log(lengthOfLongestSubstringSlidingWidnow("abcabcbb"));
