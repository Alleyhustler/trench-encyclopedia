document.addEventListener('DOMContentLoaded', function () {
  // Fetch the navbar content
  fetch('newslog.html')
    .then(response => response.text())
    .then(data => {
      // only get up to "cut here"
      const targetIndex = data.indexOf("cut here");
      var result = "";
      // If the target phrase is found, extract the substring starting from the beginning up to the phrase
      if (targetIndex !== -1) {
        result =  data.slice(0, targetIndex) ;
      }
      // Insert the data into the body
      document.getElementById('newstext').insertAdjacentHTML('afterbegin', result);
    })
    .catch(error => console.error('Error fetching news:', error));
});
