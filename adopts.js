 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function getRandomElements(array, count) {
    if (count > array.length) {
      console.error('Count should not exceed the array length');
      return [];
    }

    const shuffledArray =shuffleArray(array);
    return shuffledArray.slice(0, count);
  }

// SKY
 var sky_adopts = 'images/adopts/adopts-sky.json';

  fetch(sky_adopts)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetching json');
      }
      return response.json();
    })
    .then(sky_adopts => {
      const skyelements = getRandomElements(Object.entries(sky_adopts), 2);
      
      document.getElementById('autumn1url').href=skyelements[0][1]["link_url"];
      document.getElementById('autumn1').src=skyelements[0][1]["image_url"];
      document.getElementById('autumn1').title=skyelements[0][1]["name"];
      document.getElementById('autumn1').alt=skyelements[0][1]["name"];
      
      document.getElementById('autumn2url').href=skyelements[1][1]["link_url"];
      document.getElementById('autumn2').src=skyelements[1][1]["image_url"];
      document.getElementById('autumn2').title=skyelements[1][1]["name"];
      document.getElementById('autumn2').alt=skyelements[1][1]["name"];
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    });
    
// jungle
 var jungle_adopts = 'images/adopts/adopts-jungle.json';

  fetch(jungle_adopts)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetching json');
      }
      return response.json();
    })
    .then(jungle_adopts => {
      const jungleelements = getRandomElements(Object.entries(jungle_adopts), 2);
      
      document.getElementById('rainforest1url').href=jungleelements[0][1]["link_url"];
      document.getElementById('rainforest1').src=jungleelements[0][1]["image_url"];
      document.getElementById('rainforest1').title=jungleelements[0][1]["name"];
      document.getElementById('rainforest1').alt=jungleelements[0][1]["name"];
      
      document.getElementById('rainforest2url').href=jungleelements[1][1]["link_url"];
      document.getElementById('rainforest2').src=jungleelements[1][1]["image_url"];
      document.getElementById('rainforest2').title=jungleelements[1][1]["name"];
      document.getElementById('rainforest2').alt=jungleelements[1][1]["name"];
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    }); 
    
    
  // garden
 var garden_adopts = 'images/adopts/adopts-garden.json';

  fetch(garden_adopts)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetching json');
      }
      return response.json();
    })
    .then(garden_adopts => {
      const gardenlements = getRandomElements(Object.entries(garden_adopts), 1);
      
      document.getElementById('garden1url').href=gardenlements[0][1]["link_url"];
      document.getElementById('garden1').src=gardenlements[0][1]["image_url"];
      document.getElementById('garden1').title=gardenlements[0][1]["name"];
      document.getElementById('garden1').alt=gardenlements[0][1]["name"];
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    }); 
    
      
  // sea
 var sea_adopts = 'images/adopts/adopts-sea.json';

  fetch(sea_adopts)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetching json');
      }
      return response.json();
    })
    .then(sea_adopts => {
      const seaelements = getRandomElements(Object.entries(sea_adopts), 1);
      
      document.getElementById('sea1url').href=seaelements[0][1]["link_url"];
      document.getElementById('sea1').src=seaelements[0][1]["image_url"];
      document.getElementById('sea1').title=seaelements[0][1]["name"];
      document.getElementById('sea1').alt=seaelements[0][1]["name"];
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    }); 
      
 // aurora
 var aurora_adopts = 'images/adopts/adopts-aurora.json';

  fetch(aurora_adopts)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetching json');
      }
      return response.json();
    })
    .then(aurora_adopts => {
      const auroraelements = getRandomElements(Object.entries(aurora_adopts), 1);
      
      document.getElementById('aurora1url').href=auroraelements[0][1]["link_url"];
      document.getElementById('aurora1').src=auroraelements[0][1]["image_url"];
      document.getElementById('aurora1').title=auroraelements[0][1]["name"];
      document.getElementById('aurora1').alt=auroraelements[0][1]["name"];
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    }); 
       
    
    
    
    
    