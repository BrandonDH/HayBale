let listToProcess = document.getElementById('emailList');

listToProcess.addEventListener('keyup',function() {
  let csl = "{" + this.value.split(" ").join(", ") + "}";
  let listItem = document.getElementById('alert');
  listItem.innerHTML = csl;
})