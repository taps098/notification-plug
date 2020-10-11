const findById = (array, id) => {
  let item;
  for(let i = 0; i < array.length; i++){
    if(array[i].id === id){
      item = array[i];
      break;
    }
  }
  return item;
}

const findIndex = (array, id) => {
  for(let i = 0; i < array.length; i++){
    if(array[i].id === id){
      return i;
    }
  }
}

export {findById, findIndex};