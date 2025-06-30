
function opencollapse(collapsible, button) {
  
  var content = document.getElementById(collapsible);
    if (content.style.display === "block") {
      content.style.display = "none";
      button.textContent =  button.textContent.replace("▼", "►");
    } else {
      content.style.display = "block";
      button.textContent =   button.textContent.replace("►", "▼");
    }
}


// debugging
function clearInventory(){
  localStorage.setItem("inventory", "");
}
function printInventory(){
  const inventory = localStorage.getItem("inventory");
  console.log(inventory);
}
function addItem(itemname){
  var inventory = localStorage.getItem("inventory");
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

////////////////////////
// on load 
////////////////////////

// Populate from localstorage
// get element
let inventoryelement = document.getElementById('inventoryitems');
// split inventory into list
let inventoryobj = localStorage.getItem("inventory");
if (inventoryobj == null){
    localStorage.setItem("inventory", "");
    inventoryobj = localStorage.getItem("inventory");
  }
    
let inventoryArray = inventoryobj.split('|');
// check if list is empty
if (inventoryArray[0] === "" || inventoryArray.length === 0) {
    inventoryelement.innerHTML = '<p id="blankinventorylabel">You have no items in your inventory</p>';
} else {

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
      for (let i = 0; i < inventoryArray.length; i++) {

          let itemurl = dragonJson[inventoryArray[i].toString()]['item_url'];
          let itemalt = dragonJson[inventoryArray[i].toString()]['alt'];
          let itemtitle = dragonJson[inventoryArray[i].toString()]['item_desc'];
          let itemstr = "<a href= " + "'https://goblincat.neocities.org/egghatch?item=" +inventoryArray[i].toString()+"'"+ ">"+"<img src=" + "'" + itemurl + "' class='inventoryelement' " + "title= '" + itemtitle + "' " + "alt=" + "'" + itemalt + "'></a>";
          inventoryelement.innerHTML += itemstr;

      }
      
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
      
    });
    
}


