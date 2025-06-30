//// function- add item

function addItem(itemname){
  var inventory = localStorage.getItem("inventory");
  if (inventory == null){
    localStorage.setItem("inventory", "");
    inventory = localStorage.getItem("inventory");
  }
  
  console.log(inventory);
  if (inventory.includes(itemname)){
    // do nothing
    console.log("item already in inventory");
  }else {
    if(inventory==""){
      inventory = itemname;
    }else {
      inventory = inventory+"|"+itemname;
    }
    
    localStorage.setItem("inventory", inventory);
  }
  console.log(inventory);
}


// get url parameters
const urlParams = new URLSearchParams(window.location.search);
let item = urlParams.get('item');
let referrer = urlParams.get('referrer');


// handle item stuff
let itemsection = document.getElementById('itemsection');

if (item !== null) {
  
  let itemnameelement = document.getElementById('itemnamehere');
  let itemimageelement = document.getElementById('itemimage');
  let itemdescelement = document.getElementById('itemdesc');
  // populate images into inventory with alt text 
  var dragonJson = 'images/dragongame/dragons.json';

  fetch(dragonJson)
    .then(response => {
      if (!response.ok) {
        throw new Error('error fetching json');
      }
      return response.json();
    })
    .then(dragonJson => {
        
        if (item.toString() in dragonJson){
          let itemurl = dragonJson[item.toString()]['item_url'];
          let itemalt = dragonJson[item.toString()]['alt'];
          let itemdesc = dragonJson[item.toString()]['item_desc'];
          itemnameelement.textContent=item;
          itemimageelement.src=itemurl;
          itemimageelement.alt=itemalt;
          itemdescelement.textContent=itemdesc;
          addItem(item.toString());

      } else {
        itemsection.innerHTML = "<p>There's nothing here...</p>";
      }
      
    })
    .catch(error => {
      itemsection.innerHTML = "<p>There's nothing here...</p>";
      console.error('Error fetching the JSON file:', error);
    });
  } else {
    itemsection.innerHTML = "<p>There's nothing here...</p>";
  }


//// check url
//thanks chatgpt
function isValidURL(str) {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}([\/\w-]*)*\/?$/;
    return urlPattern.test(str);
}


let goback = document.getElementById('goback');

try {
    const decodedString = decodeURIComponent(referrer);
    if (decodedString.includes('https://goblincat.neocities.org/') && (isValidURL(decodedString))) {
      goback.href=decodedString;
    } else {
        goback.href='https://goblincat.neocities.org/';
    }

} catch (error) {
  goback.href='https://goblincat.neocities.org/';
}


