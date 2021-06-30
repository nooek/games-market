// const listToSort = [5, 4, 3, 2, 1];
// const listMenor = [];
// let menor;
// let menorAtual;

// for (let i = 0; i < listToSort.length; i++) {
//   for (let i = 0; i < listToSort.length; i++) {
//     if ((listToSort[i] < menor && (listToSort[i] > menorAtual || !menorAtual)) || !menor) {
//       menor = listToSort[i];
//     }
//   }
//   menorAtual = menor;
//   listMenor.push(menor);
//   menor = 0;
//   console.log(menorAtual, menor);
// }

// // console.log(count)
// console.log(listMenor);

const selectionSort = (listToSort) => {
  const listMenor = [];
  let menor;
  let menorAtual;
  let counter = 0;

  for (let j = 0; j < listToSort.length; j++) {
    for (let i = 0; i < listToSort.length; i++) {
        // console.log(menor, menorAtual)
        // console.log(listToSort[i] > menorAtual, listToSort[i])
      if (counter === 0) {
        console.log("foo1")
        menor = listToSort[i];
      }
      if (listToSort[i] <= menor && listToSort[i] >= menorAtual) {
        console.log("foo2")
        menor = listToSort[i];
      }
      counter += 1
    }
    menorAtual = menor;
    console.log("dsa")
    listMenor.push(menor);
    menor = 0;
    counter = 0;
  }

  console.log(listMenor);
};

// selectionSort([5, 4, 3, 2, 1]) 
// selectionSort([1, 2, 3, 4, 5])
selectionSort([10, 43, 36, 202, 15])
