function addFirstToLast(arr) {
    const lengthOfArray = arr.length;
    let concatenated = "";

    if (lengthOfArray === 1) {
        concatenated = arr[0].repeat(2);
    } else if (lengthOfArray > 1) {
        concatenated = arr[0] + arr[lengthOfArray - 1];
    }

    return concatenated;
}

// console.log(addFirstToLast(['first', 'second', 'third']));
// console.log(addFirstToLast(['golden', 'terrier']));
// console.log(addFirstToLast(['cheerio']));
// console.log(addFirstToLast([]));