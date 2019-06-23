let listToProcess = document.getElementById('emailList');

listToProcess.addEventListener('keyup', function() {
  // let commaList = this.value.split(" ").join("#");
console.log(commaList)
  let listItem = document.getElementById('alert');
console.log(listItem)
  listItem.innerHTML = "#" + commaList;
})

// add remove comma
