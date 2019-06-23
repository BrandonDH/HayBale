let listProcess = document.getElementById('makeList');
let listClear = document.getElementById('clearList');
let listCopy = document.getElementById('copyList');

listProcess.addEventListener('keyup', function() {
  let commaList = this.value.split(" ").join(" #");
  let listItem = document.getElementById('alert');
  listItem.innerHTML = "#" + commaList;
})

listClear.addEventListener('click', function() {
  let board = document.getElementById('alert');
  board.innerHTML = null;
  listProcess.value = null;
})

listCopy.addEventListener('click', function() {
  /* Get the text field */
  var copyText = document.getElementById('alert').innerHTML;

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
})




// add remove comma
