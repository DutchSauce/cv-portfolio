//Redesign af hjemmeside
// Get the modal for
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//Odense-Glæsværk
// Get the modal for
var modalO = document.getElementById("myModal2");

// Get the button that opens the modal
var btnO = document.getElementById("myBtnO");

// Get the <span> element that closes the modal
var spanO = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btnO.onclick = function() {
  modalO.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanO.onclick = function() {
  modalO.style.display = "none";
}

//Robot-Nordic
// Get the modal for
var modal1 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtnR");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

//Matas
// Get the modal for
var modal2 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtnM");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  };
  if (event.target == modalO) {
    modalO.style.display = "none";
  };
  if (event.target == modal1) {
    modal1.style.display = "none";
  };
  if (event.target == modal2) {
    modal2.style.display = "none";
  };
}
