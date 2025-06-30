
const accArray = ['images/foryou/acc-bugwing1.png', 'images/foryou/acc-bugwing2.png', 'images/foryou/acc-wing.png', 'images/foryou/acc-flower.png', 'images/foryou/acc-cat.png','images/foryou/acc-blank.png','images/foryou/acc-hair.png','images/foryou/acc-braids.png','images/foryou/acc-swirl.png','images/foryou/acc-stripes.png','images/foryou/acc-spot.png','images/foryou/acc-spotwing.png'];

const baseColorArrayPrimary=  [
  [203, 158, 88],
  [171, 105, 68],
  [135, 68, 48],
  [74, 45, 36]
];

const baseColorArraySecondary=  [
  [117, 145, 192],
  [68, 72, 183],
  [43, 45, 120],
  [27, 29, 84]
];

const allPrimaries =[
  [ //1
    [228,197,179],
    [216,148,142],
    [145,84,133],
    [59,59,80]
  ], 
  [ //2
    [239,231,205],
    [224,200,164],
    [178,147,120],
    [112,86,82]
  ],
  [ //3
    [67,67,67],
    [38,38,38],
    [22,22,22], 
    [5,5,5]
  ],
  [ //4
    [227,210,190],
    [159,192,186],
    [112,139,144],
    [79,89,101], 
  ],
  [ //5
    [182,198,202],
    [121,154,147],
    [97,107,85],
    [65,57,50]
  ],
  [ //6
    [227,210,190],
    [159,192,186],
    [112,139,144],
    [79,89,101], 
  ],
  [ //7
    [202,199,182],
    [154,135,121],
    [107,85,107],
    [51,50,65]
  ],
  [ //8
    [136,164,174],
    [97,119,136],
    [63,77,108],
    [56,49,75]
  ],
  [ //9
    [84,93,90],
    [57,75,71],
    [39,58,60],
    [23,31,38]
  ],
  [ //10
    [174,170,136],
    [132,136,97],
    [93,109,63],
    [51,75,49]
  ],
  [ //11
    [229,222,208],
    [207,184,171],
    [184,140,140],
    [111,88,93]
  ],
  [ //12
    [252,182,181],
    [237,134,146],
    [194,100,134],
    [127,76,122]
  ],
  [ //13
    [182,148,169],
    [123,99,122],
    [84,75,101],
    [48,49,65]
  ],
  [ //14
    [101,111,106],
    [80,89,87],
    [59,64,64],
    [39,42,43]
  ],
  [ //15
    [229,198,193],
    [214,151,157],
    [173,120,136],
    [116,94,112]
  ],
  [ //16
    [122,201,227],
    [98,159,192],
    [76,100,138],
    [63,65,104]
  ],
  [ //17
    [37,80,189],
    [30,58,129],
    [29,39,79],
    [24,29,46]
  ],
  [ //18
    [152,114,98],
    [126,89,86],
    [98,67,74],
    [64,46,50]
  ],
  [ //19
    [241,176,176],
    [235,141,141],
    [191,99,104],
    [109,72,96]
  ],
  [ //20
    [255,230,181],
    [242,179,131],
    [223,132,87],
    [141,79,74]
  ],
  [ //21
    [140,146,104],
    [90,107,79],
    [63,85,77],
    [37,45,48]
  ],
  [ //22
    [228,188,198],
    [204,159,176],
    [180,121,163],
    [144,106,145]
  ]
];
const allSecondaries=[
 [ //1
    [216,148,142],
    [159,75,157],
    [68,53,131],
    [41,47,70]
  ], 
  [ //2
    [179,182,143],
    [150,159,105],
    [106,124,85],
    [61,84,77]
  ],
  [ //3
    [235,269,94],
    [213,103,48],
    [166,59,54],
    [83,28,40]
  ],
  [ //4
    [239,231,205],
    [224,200,164],
    [178,147,120],
    [112,86,82]
  ],
  [ //5
    [186,159,100],
    [163,117,60],
    [128,70,45],
    [75,42,39]
  ],
  [ //6
    [245,206,198],
    [235,150,150],
    [188,106,117],
    [117,76,96]
  ],
  [ //7
    [128,100,186],
    [80,90,163],
    [45,49,128],
    [39,48,75]
  ],
  [ //8
    [221,181,188],
    [210,130,149],
    [176,92,122],
    [86,68,122]
  ],
  [ //9
    [242,114,68],
    [204,67,45],
    [138,51,58],
    [72,53,58]
  ],
  [ //10
    [181,202,221],
    [130,177,210],
    [92,151,176],
    [68,122,68]
  ],
  [ //11
    [191,211,198],
    [199,159,146],
    [98,115,126],
    [86,71,76]
  ],
  [ //12
    [255,230,181],
    [242,179,131],
    [220,108,82],
    [127,76,122]
  ],
  [ //13
    [180,167,174],
    [129,135,127],
    [82,99,95],
    [39,55,43]
  ],
  [ //14
    [179,189,194],
    [141,153,160],
    [130,112,115],
    [75,65,66]
  ],
  [ //15
    [229,198,193],
    [214,151,157],
    [173,120,136],
    [116,94,112]
  ],
  [ //16
    [234,228,200],
    [219,185,132],
    [228,151,127],
    [150,97,92]
  ],
  [ //17
    [37,80,189],
    [30,58,129],
    [29,39,79],
    [24,29,46]
  ],
  [ //18
    [126,136,94],
    [70,94,81],
    [49,67,62],
    [33,40,41 ]
  ],
  [ //19
    [94,181,147],
    [60,146,123],
    [44,101,94],
    [34,53,64 ]
  ] ,
  [ //20
    [200,217,133],
    [152,189,82],
    [61,128,65],
    [51,97,87 ]
  ],
  [ //21
    [233,197,179],
    [232,154,133],
    [201,133,115],
    [128,85,95]
  ]   ,
  [ //22
    [184,214,209],
    [140,189,187],
    [112,125,157],
    [75,69,104]
  ]   
     
  
  ];



function randomAcc (){
  const randomIndex = Math.floor(Math.random() * accArray.length);
  return accArray[randomIndex];
}

function randomPalette (){
  const randomIndex = Math.floor(Math.random() * allPrimaries.length);
  return randomIndex;
}

function colorsAreEqual(color1, color2) {
  return color1[0] === color2[0] && color1[1] === color2[1] &&  color1[2] === color2[2];
}

function replaceColor(ctx,x,y,width,height, paletteIndex) {
  // Get the image data of the canvas
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const primary = allPrimaries[paletteIndex];
  const secondary = allSecondaries[paletteIndex];
  // Iterate through each pixel
  for (let i = 0; i < data.length; i += 4) {
    const pixelColor = [ data[i],  data[i + 1], data[i + 2] ];
    
    // Check if the pixel color matches the target color
    if (colorsAreEqual(pixelColor,baseColorArrayPrimary[0])) {
      // Replace the color with the replacement color
      data[i] = primary[0][0];
      data[i + 1] = primary[0][1];
      data[i + 2] = primary[0][2];
    } else if (colorsAreEqual(pixelColor, baseColorArrayPrimary[1]) ) {
      data[i] = primary[1][0];
      data[i + 1] = primary[1][1];
      data[i + 2] = primary[1][2];
    }
    else if (colorsAreEqual(pixelColor, baseColorArrayPrimary[2]) ) {
      data[i] = primary[2][0];
      data[i + 1] = primary[2][1];
      data[i + 2] = primary[2][2];
    }
    else if (colorsAreEqual(pixelColor, baseColorArrayPrimary[3]) ) {
      data[i] = primary[3][0];
      data[i + 1] = primary[3][1];
      data[i + 2] = primary[3][2];
    }
    else if (colorsAreEqual(pixelColor, baseColorArraySecondary[0])) {
      // Replace the color with the replacement color
      data[i] = secondary[0][0];
      data[i + 1] = secondary[0][1];
      data[i + 2] = secondary[0][2];
    } else if (colorsAreEqual(pixelColor, baseColorArraySecondary[1])) {
      data[i] = secondary[1][0];
      data[i + 1] = secondary[1][1];
      data[i + 2] = secondary[1][2];
    }
    else if (colorsAreEqual(pixelColor, baseColorArraySecondary[2]) ) {
      data[i] = secondary[2][0];
      data[i + 1] = secondary[2][1];
      data[i + 2] = secondary[2][2];
    }
    else if (colorsAreEqual(pixelColor, baseColorArraySecondary[3]) ) {
      data[i] = secondary[3][0];
      data[i + 1] = secondary[3][1];
      data[i + 2] = secondary[3][2];
    }
  }
  

  // Put the modified image data back onto the canvas
  ctx.putImageData(imageData, 0, 0);
}

//figure this out later, thanks chatgpt
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function makeUnicorn (x,y, canvas, ctx, canvasWidth, canvasHeight){
  // get palette
  const pindex = randomPalette();
  
  
  // Paths to your image files
  const unicornpath =  '/images/foryou/unicornbase.png';
  const accpath = randomAcc();
  
  // Create promises for image loading
  const unicornPromise = loadImage(unicornpath);
  const accPromise = loadImage(accpath);
  
  // Wait for both promises to resolve using Promise.all
  Promise.all([unicornPromise, accPromise])
  .then(([unicornpath, accpath]) => {
    // Both images are loaded, you can perform your action here
    ctx.imageSmoothingEnabled = false;
    ctx.translate(x, y);
    //ctx.drawImage(unicornpath, -unicornpath.width / 2, -unicornpath.height / 2, unicornpath.width, unicornpath.height);
    //ctx.drawImage(accpath, -accpath.width / 2, -accpath.height / 2, accpath.width, accpath.height);
    //replaceColor(ctx,-unicornpath.width / 2, -unicornpath.height / 2, unicornpath.width, unicornpath.height,pindex);
    ctx.drawImage(unicornpath, -unicornpath.width*1.5 , -unicornpath.height*1.5 , unicornpath.width*3, unicornpath.height*3);
    ctx.drawImage(accpath, -accpath.width*1.5 , -accpath.height*1.5, accpath.width*3, accpath.height*3);
    replaceColor(ctx,-unicornpath.width*1.5 , -unicornpath.height*1.5 , unicornpath.width*3, unicornpath.height*3,pindex);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  })
  .catch(error => {
    console.error('Error loading images:', error);
  });
  
    
    
  
}

function makeAllUnicorns(canvas, ctx,canvasWidth, canvasHeight) {
    
  /*const u1x = canvasWidth * 0.2; // Example: 20% of canvas width
  const u1y = canvasHeight * 0.5; // Example: 20% of canvas height
  makeUnicorn (u1x, u1y,canvas, ctx, canvasWidth, canvasHeight);*/
   
  const u2x = canvasWidth * 0.5; // Example: 20% of canvas width
  const u2y = canvasHeight * 0.5; // Example: 20% of canvas height
  makeUnicorn (u2x, u2y,canvas, ctx, canvasWidth, canvasHeight);
  
  /*const u3x = canvasWidth * 0.8; // Example: 20% of canvas width
  const u3y = canvasHeight * 0.5; // Example: 20% of canvas height
  makeUnicorn (u3x, u3y,canvas, ctx, canvasWidth, canvasHeight);*/
}



function refreshUnicorns() {
  const clearcanvases = document.getElementsByClassName('fieldcanvas'); // HARDCODE TIME there's 3 of em
  
  for (let i = 0; i < clearcanvases.length; i++) {
    const clearctx = clearcanvases[i].getContext('2d');
    clearctx.clearRect(0, 0, clearctx.canvas.width, clearctx.canvas.height); 
    makeAllUnicorns(clearcanvases[i],clearctx,  clearctx.canvas.width, clearctx.canvas.height);
  }
 
}


document.addEventListener('DOMContentLoaded', function() {
  const canvases = document.getElementsByClassName('fieldcanvas'); // HARDCODE TIME there's 3 of em
  //const sprite_width =61;
  //const sprite_height =83; //hardcode that baby!
  
  for (let i = 0; i < canvases.length; i++) {
    const ctx = canvases[i].getContext('2d');
    ctx.canvas.height = ctx.canvas.width*1.5;

    const canvasWidth = canvases[i].width;
    const canvasHeight = canvases[i].height;
    makeAllUnicorns(canvases[i], ctx,canvasWidth, canvasHeight);
  }
  

});



