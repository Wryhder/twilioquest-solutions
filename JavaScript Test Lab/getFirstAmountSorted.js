function getFirstAmountSorted(arr, num) {
    return arr.sort((a,b) => a.localeCompare(b))
}

// console.log(['third', 'second', 'first'], 2) // ['first', 'second' ]
// console.log(['golden', 'terrier'], 1) // ['golden']
// console.log(['cheerios', 'apple jacks', 'lucky charms'], 3) // ['apple jacks', 'cheerios', 'lucky charms']
// console.log(['golden', 'terrier', 'boxer'], 0) // nada