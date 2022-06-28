const start = new Date().getTime();
let a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

const bubbleSort = (a) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a);
let time = new Date().getTime();
let End = time - start;
console.log('Bubble sort time: ' + End + 'Milliseconds');


// Dictionary:
const start1 = new Date().getTime();
const bubbleSort1 = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (inputArr[j].key > inputArr[j + 1].key) {
                let tmp = inputArr[j].key;
                inputArr[j].key = inputArr[j + 1].key;
                inputArr[j + 1].key = tmp;
            }
        }
    }
    return inputArr;
}



let contain = []
const dictionary = (word, mean) => {
    let main = {
        key: word,
        value: mean
    }
    contain.push(main)
    console.log(bubbleSort1(contain))

}

dictionary("cube", "square box")
dictionary("apple", "fruit")
dictionary("america", "state")
dictionary("ball", "ground")
let timeend = new Date().getTime();
let Endtime = timeend - start1;
console.log('Bubble sort time: ' + Endtime + 'Milliseconds');