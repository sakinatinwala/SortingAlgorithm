//integer :
const start = new Date().getTime();
const selectionSort = (inputArr) => {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
}
console.log(selectionSort([28, 11, 43, 77, 45, 55, 99]))
let end = new Date().getTime();
let time = end - start;
console.log('Selection Sort integer time: ' + time + 'Milliseconds');


// Dictionary:
const start1 = new Date().getTime();
const selectionSort1 = (inputArr) => {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j].key < inputArr[min].key) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i].key;
            inputArr[i].key = inputArr[min].key;
            inputArr[min].key = tmp;
        }
    }
    return inputArr;
}

let contain = []
const dictionary = (word, mean) => {
    let main = {
        key: word,
        value: mean
    };
    contain.push(main)
    console.log(selectionSort1(contain))

}

dictionary("cube", "square box")
dictionary("apple", "fruit")
dictionary("america", "state")
dictionary("ball", "ground")
let endtime = new Date().getTime();
let time1 = endtime - start1;
console.log('Selection Sort time: ' + time1 + 'Milliseconds');