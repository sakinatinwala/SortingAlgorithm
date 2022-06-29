export const dictionary = (word, mean, contain) => {
    let main = {
        key: word,
        value: mean
    }
    contain.push(main)
    return contain
}
