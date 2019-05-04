let raw_email_data = 'raw_email_data.txt';
let processed = 'processed_emails.txt';
let listToProcess = document.getElementById('emailList');

listToProcess.addEventListener('keyup',function() {
document.getElementById('alert').innerHTML = "{" + this.value.split(" ").join(", ") + "}";
})