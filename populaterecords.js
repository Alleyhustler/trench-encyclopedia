document.addEventListener('DOMContentLoaded', function () {
  // Fetch the navbar content
  fetch('newslog.html')
    .then(response => response.text())
    .then(data => {
      // get a rid of "cut here"
      result = data.replace('cut here','');
      // Insert the data into the body
      document.getElementById('newslogcontainer').insertAdjacentHTML('afterbegin', result);
    })
    .catch(error => console.error('Error fetching news:', error));
});
