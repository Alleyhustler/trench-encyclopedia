function openSection(sectionName) {
  
  var content = document.getElementById(sectionName);
    if (content.style.display === "none") {
      content.style.display = "";
    }
}

const gymTrainerPokemon= ["Aegislash","Chandelure","Drifblim","Garbodor","Magneton","Porygon","Heat Rotom","Sinistea"]

function chooseGymPokemon(numberPokemon){
  // https://www.geeksforgeeks.org/how-to-create-an-array-containing-non-repeating-elements-in-javascript/
  const n = numberPokemon;
  var indexArray = [];
  const numChoices = gymTrainerPokemon.length;
  var pokemonArray=[]
  
  if (n == 0 || n>numChoices ) {
    console.log("n = 0")
  } else {
    while (indexArray.length<n){
      const randomNumber = Math.floor(Math.random() * numChoices);
      if (!indexArray.includes(randomNumber)){
        indexArray.push(randomNumber);
        pokemonArray.push(gymTrainerPokemon[randomNumber]);
      }
    }
  }
  
  return pokemonArray;  
}

function getGymPokemon(){
  var targetDiv = document.getElementById("gymTrainerPokemon");
  var pokemonArray = chooseGymPokemon(4)
  targetDiv.innerHTML = '';
  
  for (var i = 0; i < pokemonArray.length; i++) { 
    
    var newImg = document.createElement("img");
    newImg.setAttribute('src', 'https://goblincat.neocities.org/images/blog/pokemonsprites/'+pokemonArray[i]+'.png');
    newImg.setAttribute('alt', pokemonArray[i]);
    newImg.setAttribute('title', pokemonArray[i]);
    newImg.setAttribute('class', "trainerPokemonImage");
    targetDiv.appendChild(newImg)
    
  }
}

const gymLeaderSprites=["https://goblincat.neocities.org/images/blog/gymleader-toybox.png",
                        "https://goblincat.neocities.org/images/blog/gymleader-ruins.png",
                        "https://goblincat.neocities.org/images/blog/gymleader-beach.png",
                        "https://goblincat.neocities.org/images/blog/gymleader-automaton.png"]
const gymLeaderTeams=[["Klefki","Polteageist","Baltoy (Shiny)","Appletun"],
                      ["Claydol","Stonjourner","Bronzong","Spiritomb"],
                      ["Palossand","Vanilluxe","Sunny Castform","Dhelmise"],
                      ["Klinklang","Frost Rotom","Porygon-Z","Golurk"]                      
                     ]
const gymLeaderAlts=["Gym leader design in a lolita dress with Sinistea's colors",
                     "Gym leader design in an oversized hoodie with Spiritomb's colors",
                     "Gym leader design in a swim outfit and flippers in Dhelmise's colors",
                     "Gym leader design in a crop top and long skirt in Porygon-Z's colors"]
const gymLeaderNames=["Leader Variant: Toybox","Leader Variant: Ruins","Leader Variant: Beach","Leader Variant: Automaton"]

// fade in and out https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css


function fadeout(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    
    return new Promise(function(resolve) {
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        resolve();
    }, 10);
    })
}


function getLeaderPokemon(){
  var gymLeaderImage = document.getElementById("gymLeaderImage");
  var gymLeaderLabel = document.getElementById("gymLeaderLabel");
  var leaderPokemonContainer = document.getElementById("leaderPokemonContainer");
  const randomNumber = Math.floor(Math.random() * 4);
  
  fadeout(gymLeaderImage);
  fadeout(gymLeaderLabel);
  fadeout(leaderPokemonContainer);
  
  fadeout(gymLeaderImage)
    .then(function() {
        gymLeaderImage.setAttribute("src",gymLeaderSprites[randomNumber])
        gymLeaderImage.setAttribute("alt",gymLeaderAlts[randomNumber])
        
        console.log("debug");
    })
  
  fadeout(gymLeaderLabel)
    .then(function() {
        gymLeaderLabel.innerText = gymLeaderNames[randomNumber]
        
    })

  fadeout(leaderPokemonContainer)
    .then(function() {
        leaderPokemonContainer.innerHTML = '';
        var team = gymLeaderTeams[randomNumber]
        for (var i = 0; i < team.length; i++) { 
          
          var newImg = document.createElement("img");
          newImg.setAttribute('src', 'https://goblincat.neocities.org/images/blog/pokemonsprites/'+team[i]+'.png');
          newImg.setAttribute('alt', team[i]);
          newImg.setAttribute('title', team[i]);
          newImg.setAttribute('class', "trainerPokemonImage");
          leaderPokemonContainer.appendChild(newImg);
          
        }
    })
  
  
}
