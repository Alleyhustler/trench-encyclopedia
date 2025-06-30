// navbar.js
document.addEventListener('DOMContentLoaded', function () {
  // Fetch the navbar content
  fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
      // Insert the navbar into the body
      document.getElementById('navbar').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error fetching navbar:', error));
});



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown(idToFind) {
  /* turn off other dropdowns*/
  var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    
  document.getElementById(idToFind).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}