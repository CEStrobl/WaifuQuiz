function toggleElement(x) {
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

let array = ["start", '0', 'op'];

function hideAll() {
  for (let i = 0; i < array.length; i++) {
    const x = document.getElementById(array[i]);
    x.style.opacity = 0;
    setTimeout(() => {
      x.style.display = "none";
    }, 600);
  }
}

function showElement(x) {
  y = document.getElementById(x);
  hideAll();
  setTimeout(() => {
    y.style.display = "flex";
  }, 600);
  setTimeout(() => {
    y.style.opacity = 1;
  }, 700);
}

function hideSpecific() {
  array.push("seek");
  array.push("op");
  //console.log(array)
  for (let i = 0; i < array.length; i++) {
    const x = document.getElementById(array[i]);
    x.style.opacity = 0;
    setTimeout(() => {
      x.style.display = "none";
    }, 600);
  }
  array.pop("seek");
  array.pop("op");
  //console.log(array)
}

function showTwoElement(a, b) {
  x = document.getElementById(a);
  y = document.getElementById(b);
  hideSpecific();
  setTimeout(() => {
    x.style.display = "flex";
    y.style.display = "flex";
  }, 600);
  setTimeout(() => {
    x.style.opacity = 1;
    y.style.opacity = 1;
  }, 700);
}

function showThreeElement(a, b, c) {
  x = document.getElementById(a);
  y = document.getElementById(b);
  z = document.getElementById(c);
  hideSpecific();
  setTimeout(() => {
    x.style.display = "flex";
    y.style.display = "flex";
    z.style.display = "flex";
  }, 600);
  setTimeout(() => {
    x.style.opacity = 1;
    y.style.opacity = 1;
    z.style.opacity = 1;
  }, 700);
}

let waifu = {
  img: "img/image.png",
  choice: "none",
  hColor: "none",
  hBangs: "none",
  hLength: "none",
  hTexture: "none",
  eColor: "none",
  sAge: "none",
  sPersona: "none",
};

let waifu1 = {
  img: "img/femaleBlackGreen1K.png",
  choice: "none",
  hColor: "black",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "green",
  sAge: "young",
  sPersona: "cute",
};

let waifu2 = {
  img: "img/femaleBlackRed1A.png",
  choice: "none",
  hColor: "black",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "hot",
};

let waifu3 = {
  img: "img/femaleBlondeBlue1B.png",
  choice: "none",
  hColor: "blonde",
  hBangs: "open",
  hLength: "medium",
  hTexture: "wavy",
  eColor: "blue",
  sAge: "mid",
  sPersona: "cute",
};

let waifu4 = {
  img: "img/femaleBlondePurple2B.png",
  choice: "none",
  hColor: "blonde",
  hBangs: "side",
  hLength: "short",
  hTexture: "straight",
  eColor: "purple",
  sAge: "young",
  sPersona: "cute",
};

let waifu5 = {
  img: "img/femaleBlondePurple3A.png",
  choice: "none",
  hColor: "white",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "purple",
  sAge: "mid",
  sPersona: "beautiful",
};

let waifu6 = {
  img: "img/femaleBlondeRed2A.png",
  choice: "none",
  hColor: "blonde",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "hot",
};

let waifu7 = {
  img: "img/femaleBlondeRed3G.png",
  choice: "none",
  hColor: "blonde",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "beautiful",
};

let waifu8 = {
  img: "img/femaleBlondeYellow1E.png",
  choice: "none",
  hColor: "blonde",
  hBangs: "point",
  hLength: "medium",
  hTexture: "wavy",
  eColor: "yellow",
  sAge: "mature",
  sPersona: "cute",
};

let waifu9 = {
  img: "img/femaleBlueBlue1C.png",
  choice: "none",
  hColor: "blue",
  hBangs: "point",
  hLength: "short",
  hTexture: "straight",
  eColor: "blue",
  sAge: "young",
  sPersona: "cute",
};

let waifu10 = {
  img: "img/femaleBlueBlue5C.png",
  choice: "none",
  hColor: "blue",
  hBangs: "side",
  hLength: "long",
  hTexture: "wavy",
  eColor: "blue",
  sAge: "mid",
  sPersona: "beautiful",
};

let waifu11 = {
  img: "img/femaleBlueBlue7E.png",
  choice: "none",
  hColor: "blue",
  hBangs: "point",
  hLength: "medium",
  hTexture: "wavy",
  eColor: "blue",
  sAge: "mature",
  sPersona: "beautiful",
};



let waifu12 = {
  img: "img/femaleBluePurple1A.png",
  choice: "none",
  hColor: "blue",
  hBangs: "point",
  hLength: "long",
  hTexture: "wavy",
  eColor: "purple",
  sAge: "mature",
  sPersona: "hot",
};

let waifu13 = {
  img: "img/femaleBrownBlue4A.png",
  choice: "none",
  hColor: "brown",
  hBangs: "point",
  hLength: "medium",
  hTexture: "wavy",
  eColor: "blue",
  sAge: "mature",
  sPersona: "beautiful",
};

let waifu14 = {
  img: "img/femaleBrownBrown0A.png",
  choice: "none",
  hColor: "brown",
  hBangs: "point",
  hLength: "long",
  hTexture: "wavy",
  eColor: "brown",
  sAge: "mature",
  sPersona: "hot",
};

let waifu15 = {
  img: "img/femaleBrownBrown7AH.png",
  choice: "none",
  hColor: "brown",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "brown",
  sAge: "mid",
  sPersona: "beautiful",
};

let waifu16 = {
  img: "img/femaleBrownPink1D.png",
  choice: "none",
  hColor: "brown",
  hBangs: "side",
  hLength: "medium",
  hTexture: "straight",
  eColor: "purple",
  sAge: "mid",
  sPersona: "cute",
};

let waifu17 = {
  img: "img/femaleBrownRed0A.png",
  choice: "none",
  hColor: "brown",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "hot",
};

let waifu18 = {
  img: "img/femaleBrownRed1C.png",
  choice: "none",
  hColor: "brown",
  hBangs: "side",
  hLength: "long",
  hTexture: "wavy",
  eColor: "red",
  sAge: "mature",
  sPersona: "hot",
};

let waifu19 = {
  img: "img/femaleBlueBlue8A.png",
  choice: "none",
  hColor: "blue",
  hBangs: "point",
  hLength: "medium",
  hTexture: "straight",
  eColor: "blue",
  sAge: "mature",
  sPersona: "beautiful",
};

let waifu20 = {
  img: "img/femaleBrownYellow0A.png",
  choice: "none",
  hColor: "brown",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "yellow",
  sAge: "mid",
  sPersona: "beautiful",
};

let waifu21 = {
  img: "img/femaleOrangeBlue1A.png",
  choice: "none",
  hColor: "orange",
  hBangs: "side",
  hLength: "short",
  hTexture: "straight",
  eColor: "blue",
  sAge: "mid",
  sPersona: "cute",
};

let waifu22 = {
  img: "img/femaleOrangeGreen1E.png",
  choice: "none",
  hColor: "orange",
  hBangs: "side",
  hLength: "long",
  hTexture: "wavy",
  eColor: "green",
  sAge: "mid",
  sPersona: "cute",
};

let waifu23 = {
  img: "img/femalePinkBlue1A.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "short",
  hTexture: "wavy",
  eColor: "blue",
  sAge: "mid",
  sPersona: "cute",
};

let waifu24 = {
  img: "img/femalePinkBlue3E.png",
  choice: "none",
  hColor: "pink",
  hBangs: "side",
  hLength: "short",
  hTexture: "straight",
  eColor: "blue",
  sAge: "mature",
  sPersona: "hot",
};

let waifu25 = {
  img: "img/femalePinkBlue4J.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "green",
  sAge: "mid",
  sPersona: "cute",
};

let waifu26 = {
  img: "img/femalePinkBrown1M.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "yellow",
  sAge: "mature",
  sPersona: "beautiful",
};

let waifu27 = {
  img: "img/femalePinkGreen1A.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "medium",
  hTexture: "straight",
  eColor: "green",
  sAge: "mid",
  sPersona: "cute",
};

let waifu28 = {
  img: "img/femalePinkPink1C.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "medium",
  hTexture: "wavy",
  eColor: "pink",
  sAge: "mature",
  sPersona: "hot",
};

let waifu29 = {
  img: "img/femalePinkPink2A.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "pink",
  sAge: "mid",
  sPersona: "beautiful",
};

let waifu30 = {
  img: "img/femalePinkRed0A.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "medium",
  hTexture: "wavy",
  eColor: "red",
  sAge: "young",
  sPersona: "hot",
};

let waifu31 = {
  img: "img/femalePinkRed4E.png",
  choice: "none",
  hColor: "pink",
  hBangs: "open",
  hLength: "short",
  hTexture: "wavy",
  eColor: "red",
  sAge: "mature",
  sPersona: "beautiful",
};

let waifu32 = {
  img: "img/femalePinkRed6H.png",
  choice: "none",
  hColor: "pink",
  hBangs: "side",
  hLength: "medium",
  hTexture: "wavy",
  eColor: "red",
  sAge: "mature",
  sPersona: "cute",
};

let waifu33 = {
  img: "img/femalePinkRed8A.png",
  choice: "none",
  hColor: "pink",
  hBangs: "side",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "young",
  sPersona: "hot",
};

let waifu34 = {
  img: "img/femalePinkRed9B.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "beautiful",
};

let waifu35 = {
  img: "img/femalePinkRed10C.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "hot",
};

let waifu36 = {
  img: "img/femalePinkYellow1A.png",
  choice: "none",
  hColor: "pink",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "yellow",
  sAge: "mid",
  sPersona: "cute",
};

let waifu37 = {
  img: "img/femalePurplePink2B.png",
  choice: "none",
  hColor: "purple",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "pink",
  sAge: "mature",
  sPersona: "hot",
};

let waifu38 = {
  img: "img/femalePurplePurple1B.png",
  choice: "none",
  hColor: "purple",
  hBangs: "side",
  hLength: "long",
  hTexture: "wavy",
  eColor: "purple",
  sAge: "mid",
  sPersona: "cute",
};

let waifu39 = {
  img: "img/femalePurplePurple4F.png",
  choice: "none",
  hColor: "purple",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "purple",
  sAge: "young",
  sPersona: "beautiful",
};

let waifu40 = {
  img: "img/femalePurpleRed1B.png",
  choice: "none",
  hColor: "purple",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "cute",
};

let waifu41 = {
  img: "img/femalePurpleRed3E.png",
  choice: "none",
  hColor: "purple",
  hBangs: "point",
  hLength: "long",
  hTexture: "straight",
  eColor: "pink",
  sAge: "mid",
  sPersona: "cute",
};

let waifu42 = {
  img: "img/femalePurpleRed5F.png",
  choice: "none",
  hColor: "purple",
  hBangs: "side",
  hLength: "long",
  hTexture: "straight",
  eColor: "pink",
  sAge: "mature",
  sPersona: "hot",
};

let waifu43 = {
  img: "img/femalePurpleYellow1F.png",
  choice: "none",
  hColor: "purple",
  hBangs: "open",
  hLength: "straight",
  hTexture: "straight",
  eColor: "yellow",
  sAge: "mature",
  sPersona: "hot",
};

let waifu44 = {
  img: "img/femaleRedRed0A.png",
  choice: "none",
  hColor: "red",
  hBangs: "open",
  hLength: "long",
  hTexture: "straight",
  eColor: "red",
  sAge: "mature",
  sPersona: "hot",
};


let waifus = [waifu1, waifu2, waifu3, waifu4, waifu5, waifu6, waifu7, waifu8, waifu9, waifu10, 
  waifu11, waifu12, waifu13, waifu14, waifu15, waifu16, waifu17, waifu18, waifu19, waifu20,
  waifu21, waifu22, waifu23, waifu24, waifu25, waifu26, waifu27, waifu28, waifu29, waifu30,
  waifu31, waifu32, waifu33, waifu34, waifu35, waifu36, waifu37, waifu38, waifu39, waifu40,
  waifu41, waifu42, waifu43, waifu44,
];


function checkDupes(){
  let myWaifus2 = [waifu1, waifu2, waifu3, waifu4, waifu5, waifu6, waifu7, waifu8, waifu9, waifu10, 
    waifu11, waifu12, waifu13, waifu14, waifu15, waifu16, waifu17, waifu18, waifu19, waifu20,
    waifu21, waifu22, waifu23, waifu24, waifu25, waifu26, waifu27, waifu28, waifu29, waifu30,
    waifu31, waifu32, waifu33, waifu34, waifu35, waifu36, waifu37, waifu38, waifu39, waifu40,
    waifu41, waifu42, waifu43, waifu44,
  ];
  
  for (let i = 0; i < waifus.length; i++) {
    const w1 = waifus[i];
    
    for (let o = 0; o < myWaifus2.length; o++) {
      const w2 = myWaifus2[o];
      
      if(w1 != w2) {
        let match = 0
        let commonalities = ""
        
        if(w1.eColor === w2.eColor){match+=4; commonalities+= "Eye Color, "}
        if(w1.hBangs === w2.hBangs) {match++; commonalities+= "Bang Style, "}
        if (w1.hColor === w2.hColor) {match+=4; commonalities+= "Hair Color, "}
        if (w1.hLength === w2.hLength) {match++; commonalities+= "Hair Length, "}
        if (w1.hTexture === w2.hTexture) {match++; commonalities+= "Hair Texture, "}
        if (w1.sAge === w2.sAge) {match++; commonalities+= "Age, "}
        // if (w1.sCat === w2.sCat) {match++; commonalities+= "Cat, "}
        if (w1.sPersona === w2.sPersona) {match++; commonalities+= "Persona, "}

        if(Math.floor((match/13)*100) > 75) {
          console.log("\n", w1.img, " is ", Math.floor((match/13)*100), "% similar to ", w2.img)
          console.log("Commonalities are ", commonalities)
        }
        
      }
    }
    myWaifus2.pop(w1)
  }
}

checkDupes()

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

shuffleArray(waifus)

let display = 0;
imgUpdate()

function seek(a) {
  if (a === "back") {
    if (display > 0) {
      display--;
      imgUpdate();
    }
  } else if (a === "next") {
    display++;
    imgUpdate();
  } else {
    console.log(a, " != back or next");
  }
}

let result = {
  // Hair Colors
  hBlack: 0,
  hBrown: 0,
  hBlonde: 0,
  hPink: 0,
  hBlue: 0,
  hOrange: 0,
  hPurple: 0,
  hRed: 0,

  // Hair Bangs
  hOpen: 0,
  hSide: 0,
  hPoint: 0,

  // Hair length
  hLong: 0,
  hMedium: 0,
  hShort: 0,

  // Hair texture
  hWavy: 0,
  hStraight: 0,

  // Eye Color
  eRed: 0,
  eYellow: 0,
  eGreen: 0,
  eBlue: 0,
  ePurple: 0,
  ePink: 0,
  eBrown: 0,

  // Style Age
  sMature: 0,
  sMid: 0,
  sYoung: 0,

  // Style Persona
  sCute: 0,
  sBeautiful: 0,
  sHot: 0,

  // Style Cat
  sCat: 0,
  sNonCat: 0,
};

let waifuAttributes = [
  "hColor",
  "hBangs",
  "hLength",
  "hTexture",
  "eColor",
  "sAge",
  "sPersona",
  "sCat",
];

let resultLetter = [
  "hBlack",
  "hBrown",
  "hBlonde",
  "hPink",
  "hBlue",
  "hGreen",
  "hOrange",
  "hPurple",
  "hWhite",
  "hOpen",
  "hSide",
  "hPoint",
  "hLong",
  "hMedium",
  "hShort",
  "hWavy",
  "hStraight",
  "eRed",
  "eYellow",
  "eGreen",
  "eBlue",
  "ePurple",
  "ePink",
  "eBrown",
  "sMature",
  "sMid",
  "sYoung",
  "sCute",
  "sBeautiful",
  "sHot",
  "sCat",
  "sNonCat",
];

let resultNoLetter = [
  "Black",
  "Brown",
  "Blonde",
  "Pink",
  "Blue",
  "Green",
  "Orange",
  "Purple",
  "White",
  "Open",
  "Side",
  "Point",
  "Long",
  "Medium",
  "Short",
  "Wavy",
  "Straight",
  "Red",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Pink",
  "Brown",
  "Mature",
  "Mid",
  "Young",
  "Cute",
  "Beautiful",
  "Hot",
  "Cat",
  "NonCat",
];

let emojis = ['hate', 'dislike', 'eh', 'like', 'love']

function select(a, b) {
  let x = waifus[a];
  theLongWay(x, b)
  

  // addLoop(x.sCat)
}

function imgUpdate() {
  x = document.getElementById("currentImg");
  if(display === waifus.length) {
    updateResults()
    showElement('results')
  }
  else {x.src = waifus[display].img;}
}


function theLongWay(x, b){
  let a = 0
  if(b === 'hate')    {a = -1;    x.choice = 'hate'}
  if(b === 'dislike') {a = -0.5;  x.choice = 'dislike'}
  if(b === 'eh')      {a = 0;     x.choice = 'eh'}
  if(b === 'like')    {a = 0.5;   x.choice = 'like'}
  if(b === 'love')    {a = 1;     x.choice = 'love'}

  // Hair
  if(x.hColor === "black") {result.hBlack += a}
  if(x.hColor === "blue") {result.hBlue += a}
  if(x.hColor === "blonde") {result.hBlonde += a}
  if(x.hColor === "brown") {result.hBrown += a}
  if(x.hColor === "red") {result.hRed += a}
  if(x.hColor === "pink") {result.hPink += a}
  if(x.hColor === "orange") {result.hOrange += a}
  if(x.hColor === "white") {result.hWhite += a}
  if(x.hColor === "purple") {result.hPurple += a}

  if(x.hLength === "long") {result.hLong += a}
  if(x.hLength === "medium") {result.hMedium += a}
  if(x.hLength === "short") {result.hShort += a}

  if(x.hTexture === "wavy") {result.hWavy += a}
  if(x.hTexture === "straight") {result.hStraight += a}

  if(x.hBangs === "side") {result.hSide += a}
  if(x.hBangs === "point") {result.hPoint += a}
  if(x.hBangs === "open") {result.hOpen += a}


  // eyes
  if(x.eColor === "red") {result.eRed += a}
  if(x.eColor === "yellow") {result.eYellow += a}
  if(x.eColor === "green") {result.eGreen += a}
  if(x.eColor === "blue") {result.eBlue += a}
  if(x.eColor === "purple") {result.ePurple += a}
  if(x.eColor === "pink") {result.ePink += a}
  if(x.eColor === "brown") {result.eBrown += a}

  // Style
  if(x.sAge === "mature") {result.sMature += a}
  if(x.sAge === "mid") {result.sMid += a}
  if(x.sAge === "young") {result.sYoung += a}

  if(x.sPersona === "cute") {result.sCute += a}
  if(x.sPersona === "beautiful") {result.sBeautiful += a}
  if(x.sPersona === "hot") {result.sHot += a}

  if(x.sCat === true) {result.sCat += a}
  if(x.sCat === false) {result.sNonCat += a}

}

function updateResults(){
  document.getElementById("reshblack").innerHTML = result.hBlack
  document.getElementById("reshbrown").innerHTML = result.hBrown
  document.getElementById("reshblonde").innerHTML = result.hBlonde
  document.getElementById("reshorange").innerHTML = result.hOrange
  document.getElementById("reshblue").innerHTML = result.hBlue
  document.getElementById("reshpurple").innerHTML = result.hPurple
  document.getElementById("reshpink").innerHTML = (result.hPink) + (result.hRed)

  document.getElementById("reshstraight").innerHTML = result.hStraight
  document.getElementById("reshwavy").innerHTML = result.hWavy

  document.getElementById("reshlong").innerHTML = result.hLong
  document.getElementById("reshmedium").innerHTML = result.hMedium
  document.getElementById("reshshort").innerHTML = result.hShort

  document.getElementById("reshopen").innerHTML = result.hOpen
  document.getElementById("reshpoint").innerHTML = result.hPoint
  document.getElementById("reshside").innerHTML = result.hSide

  document.getElementById("resred").innerHTML = result.eRed
  document.getElementById("resyellow").innerHTML = result.eYellow
  document.getElementById("resblue").innerHTML = result.eBlue
  document.getElementById("respurple").innerHTML = result.ePurple
  document.getElementById("respink").innerHTML = result.ePink
  document.getElementById("resbrown").innerHTML = result.eBrown
  document.getElementById("resgreen").innerHTML = result.eGreen

  document.getElementById("resmature").innerHTML = result.sMature
  document.getElementById("resmid").innerHTML = result.sMid
  document.getElementById("resyoung").innerHTML = result.sYoung
  document.getElementById("rescute").innerHTML = result.sCute
  document.getElementById("resbeautiful").innerHTML = result.sBeautiful
  document.getElementById("reshot").innerHTML = result.sHot
}



// y = document.getElementById(b);
  // for (let i = 0; i < emojis.length; i++) {
  //   document.getElementById(emojis[i]).classList.remove("select")
  // }
  // y.classList.add("select");
