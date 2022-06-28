//integer :
const start = new Date().getTime();
const array = [5,3,7,6,2,9,13,1,27,25];
const swap = (array, left, right) => {
   let temp = array[left];
   array[left] = array[right];
   array[right] = temp;
}
const partition = (array, left, right) => {
   let pivot = array[Math.floor((right + left) / 2)];
   let i = left;
   let j = right;
   while (i <= j) {
      while (array[i] < pivot) {
         i++;
      }
      while (array[j] > pivot) {
         j--;
      }
      if (i <= j) {
         swap(array, i, j);
         i++;
         j--;
      }
   }
   return i;
}
const quickSort = (array, left = 0, right = array.length - 1) => {
   let index;
   if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
         quickSort(array, left, index - 1);
      }
      if (index < right) {
         quickSort(array, index, right);
      }
   }
   return array;
}
let sortedArray = quickSort(array);
console.log(sortedArray);
let end = new Date().getTime();
  let time = end - start;
  console.log('Quick sort integer time: ' + time + 'Milliseconds');

//Dictionary:
const start1 = new Date().getTime();
const quickSort1 =(array)=> {
            let arr1=[]
            let arr2=[]
            let median = Math.floor(array.length/2)
            let pivot = array[median]
           
            const quick = (val,i) => {
                let value=val.key
                let piv=pivot.key
                if(value>pivot || (value === piv && i!== median)){
                        arr1.push(val)
                }else {
                    arr2.push(val)
                }
               return arr1,arr2
            }
            for(let i =0;i<array.length;i++){
                val = array[i]
                quick(val,i)
            }
           
            return [arr1,pivot,arr2]
}
let endt = new Date().getTime();
  let timet = endt - start1;
  console.log('Quick sort time: ' + timet + 'Milliseconds');

  let contain=[]
const dictionary =(word,mean)=>{
    let main= {
        key:word,
        value:mean
    };
    contain.push(main)
    console.log(quickSort1(contain))
    
}

dictionary("cube","square box")
dictionary("apple","fruit")
dictionary("america","state") 
dictionary("ball","ground")