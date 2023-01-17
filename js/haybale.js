const processList = document.getElementById('makeList');
const clearList = document.getElementById('clearBtn');
const copyList = document.getElementById('copyBtn');

processList.addEventListener('keyup', function() {
  let commaList = this.innerHTML.split(" ").join(" #");
  let listItem = document.getElementById('hashTagList');
  listItem.innerHTML = "#" + commaList;
})

clearList.addEventListener('click', function() {
  document.getElementById('hashTagList').innerHTML = null;
  processList.value = null;
})

copyBtn.addEventListener('click', () => {
  let text = document.getElementById('hashTagList').innerHTML;
	navigator.clipboard.writeText(text);
});
