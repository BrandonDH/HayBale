# HayBale
This project takes user input from a text field and processes it into a list of hashtags.

## JavaScript list processing logic graveyard
These are my first (failed) attempts to get the copy logic working using the clipboard API.

```javascript
// copyList.addEventListener('click', copyContent())
// function copyContent() {
// navigator.clipboard.writeText(text).then(() => {
//   console.log('Content copied to clipboard');
//   /* Resolved - text copied to clipboard successfully */
// },() => {
//   console.error('Failed to copy');
//   /* Rejected - text failed to copy to the clipboard */
// });

// async function copyContent() {
//   navigator.clipboard.writeText(text);
//   // try {
//   //   await navigator.clipboard.writeText(text);
//   //   console.log('Content copied to clipboard');
//   // } catch (err) {
//   //   console.error('Failed to copy: ', err);
//   // }
// }

// let text = document.getElementById('myText').innerHTML;
// const copyContent = async () => {
//   try {
//     await navigator.clipboard.writeText(text);
//     console.log('Content copied to clipboard');
//   } catch (err) {
//     console.error('Failed to copy: ', err);
//   }
// }

// This was my first try, and it didn't work. :(
// function copyHashTags() {
//   // Get the text field
//   var copyText = document.getElementById("makeList");
// console.log(copyText)
//   // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//    // Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);

//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }

// let makeList = document.getElementById('hashTagList').innerHTML;

// const copyHashTags = async () => {
//     try {
//       await navigator.clipboard.writeText(makeList);
//       console.log('Content copied to clipboard');
//     } catch (err) {
//       console.error('Failed to copy: ', err);
//     }
//   }

//   copyList.addEventListener('click', copyHashTags())

// add remove comma
```
