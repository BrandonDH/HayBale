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
  var copyText = document.getElementById('alert');
  copyText.select();
  document.execCommand("copy");

  alert('<div class="alert alert-primary" role="alert">' + "Copied the text: " + copyText.value + '</div>');
})




// add remove comma
