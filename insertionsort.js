const start = new Date().getTime();
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }
    return arr
}
console.log(insertionSort([2, 1, 3, 7, 5]))
let end = new Date().getTime();
let time = end - start;
console.log('Insertion sort integer time: ' + time + 'Milliseconds');


// Dictionary :
const start1 = new Date().getTime();
const insertionSort1 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i].key
        let j
        for (j = i - 1; j >= 0 && arr[j].key > currentValue; j--) {
            arr[j + 1].key = arr[j].key
        }
        arr[j + 1].key = currentValue
    }
    return arr
}

let contain = []
const dictionary = (word, mean) => {
    let main = {
        key: word,
        value: mean
    };
    contain.push(main)
    console.log(insertionSort1(contain))

}

dictionary("cube", "square box")
dictionary("apple", "fruit")
dictionary("america", "state")
dictionary("ball", "ground")
let end1 = new Date().getTime();
let time1 = end1 - start1;
console.log('Insertion sort time: ' + time1 + 'Milliseconds');
