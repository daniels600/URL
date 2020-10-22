let link = document.getElementById("url");
let shorten_link = document.getElementById('shorten_link');
let error = document.getElementById('error-output');
let form = document.getElementById("form");

function checkEmpty(input) {
  if (input.value == "") {
    return true;
  } else {
    console.log(input.value);
    return false;
  }
}


$(document).ready(function() {
  $( "#shorten" ).click(function(event) {
    event.preventDefault(); // prevents form from submitting
      
      let url = link.value;

      if(checkEmpty(url)) {
        error.innerText = "Please enter a URL";

      } else {
        url = url.replace(/^https?:\/\//,''); // replace all https with empty
        console.log(url);
        const data = null;
  
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
  
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === this.DONE) {
            console.log(this.responseText);
  
            shorten_link.innerHTML = this.responseText;
          }
        });
  
        xhr.open("GET", `https://rapidapi.p.rapidapi.com/?url=https%3A%2F%2F${url}`);
        xhr.setRequestHeader("x-rapidapi-host", "shorturl-sfy-cx.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "398957e290mshafa499cc39955bep1ff516jsn7dbf61007e4d");
  
        xhr.send(data);

      }
     
  });
});



function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}