

const isPalindrome = (input) => {

    const halfOfLength = Math.floor(input.length / 2);

    for (let i = 0; i < halfOfLength; i++) {
        if (input[i] != input[input.length - i - 1]) {
            return false
        }
    }

    return true;
}



let result = isPalindrome('racecar')
console.log(result)
