const TypeWrite = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWrite.prototype.type = function() {
  // Array of Job positions
  const current = this.wordIndex % this.words.length;
  // Get whole word
  const fullTxt = this.words[current];

  // Check if deleting
  if(this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert a word
  this.txtElement.innerHTML =  `<span class="txt">${this.txt}</span`;

  // Type Speed
  let typeSpeed = 200;

  if(this.isDeleting) {
    typeSpeed /= 2;  
  }


  // Word Complete
  if(!this.isDeleting && this.txt == fullTxt) {
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    // Pause Mark
    typeSpeed = 300;
  }


  setTimeout(() => this.type(), typeSpeed)
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Init Typewriter
  new TypeWrite(txtElement, words, wait);
}