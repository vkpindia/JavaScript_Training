'use strict'

/* var fname = document.getElementById("fname");
var lname = document.getElementById("lname"); */

function getFullName() {
      var fname = document.getElementById("fname");
      var lname = document.getElementById("lname");
      var fullname = document.getElementById("fullname");

      fullname.innerHTML = "<strong>Full Name:</strong>"+ ' ' +fname.value+ ' ' +lname.value;

      fname.value = "";
      lname.value = "";
}