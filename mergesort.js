//integer:
const start = new Date().getTime();
const array = [23, 4, 67, 32, 1, 7, 56, 5, 89];
const mergeSort = (array) => {
   if (array.length < 2){
      return array;
   }
   const middle = Math.floor(array.length / 2);
   const left = array.slice(0, middle), right = array.slice(middle, array.length);
   return merge(mergeSort(left), mergeSort(right));
}
const merge = (left, right) => {
   const sort = [];
   while (left.length && right.length) {
      if (left[0] <= right[0]){
        sort.push(left.shift());
      }
      else{
         sort.push(right.shift());
      }
   }
   while (left.length){
      sort.push(left.shift());
   }
   while (right.length){
      sort.push(right.shift());
   }
   return sort;
}
console.log(mergeSort(array));
let end = new Date().getTime();
  let time = end - start;
  console.log('Merge sort integer time: ' + time + 'Milliseconds');
  

//Dictionary :
const start1 = new Date().getTime();
const mergeSort1 = (array) => {
  if (array.length < 2){
     return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle), right = array.slice(middle, array.length);
  return merge(mergeSort1(left), mergeSort1(right));
}
const merge1 = (left, right) => {
  const sort = [];
  while (left.length && right.length) {
     if (left[0] <= right[0]){
       sort.push(left.shift());
     }
     else{
        sort.push(right.shift());
     }
  }
  while (left.length){
     sort.push(left.shift());
  }
  while (right.length){
     sort.push(right.shift());
  }
  return sort;
}
let endtm = new Date().getTime();
  let timetm = endtm - start1;
  console.log('Merge sort time: ' + timetm + 'Millisecond');

  let contain=[]
const dictionary =(word,mean)=>{
    let main= {
        key:word,
        value:mean
    };
    contain.push(main)
    console.log(mergeSort1(contain))
    
}

dictionary("cube","square box")
dictionary("apple","fruit")
dictionary("america","state") 
dictionary("ball","ground")