/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/


let allquotes = `I'm Shawn Spencer and this is my partner, Lavender Gooms. #1
@I'm Doctor Hans Jargensen and this is my very distinguished colleague, Doctor Mic [tongue clicking] Tuk. #1
@I'm Shawn Spen-star and this is my partner, Gus T.T. Showbiz. #2
@I'm Shawn Spencer and this is my friend Ovaltine Jenkins. #2
@This is Schmuel Cohen. #2
@I am a psychic detective and this is my partner, Galileo Pumpkins. #2
@My name's Shawn and this is my partner, Scoony 'U-Turn' Singleton. #2
@Hello, I am Dr. Houser, this is my personal candy striper, Nick-nack, he is from Guam. #2
@My name is Burton Guster, this is my associate, William Zane. #2 ~Gus Guster
@Black, and Tan.  No first names - one of us is Black and one of us is Tan. #2
@My name is Shawn Spencer, this is my partner Patty Sincox. #2
@Shawn Spencer, it's me... and my partner, Lemongrass Gogogo. #3
@ManiacManiac19, president Maniac Fan Club.  This is my vice-president, Longbranch Pennywhistle. #3
@I'm Shawn Spencer and this is my partner, Squirts Macintosh. #3
@This is Burton 'Oil Can' Guster. #3
@Yeah yeah, that's his partner, Methusala Honeysuckle.  Which makes me Old Scratch Johnson. #3 ~Henry Spencer
@I'm Shawn Spencer and this is my partner, Chesterfield McMillan... and wife. #3
@I'm Shawn Spencer and this is Scrooge Jones. #3
@I'm Shawn Spencer and this is my first mate, Hummingbird Saltalamachia. #3
@I'm Shawn Spencer and this is my partner, Dequan Smallpox Randolph... You can call him Gus. #3
@This is my underprivelidged mentee, Hollaback Atcha. #3
@My partner, Trapezius Milkington would like to see something in a Belgian Waffle. #3
@Actually, I'm Die Hard, this is Die Harder. #3
@Shawn Spencer and his partner... Ghee Buttersnaps. #3 ~Eliot O'Hara
@This is my partner Sterling Cooper. #3
@My name's Shawn Spencer and this is my associate, Jazz Hands. #4
@My name is Shawn and this is Shawn. No relation. #4
@My name is Shawn Spencer - My associate, Ron Davis a.k.a. Bob Adams, known to his Coven simply as Rich Fingerland. #4
@Hello there, Mertyl. My name is R.P. McMurphy.  This is my partner Cheswick. #4
@My name is Shawn Spencer and this is my associate, Doughnut Holestien #4
@I am a psychic detective with the police department.  This is my partner, Santonio Holmes. #4
@I've got bad news. These are cops, this is Dion Richmond, I am a psychic. #4
@I'm psychic detective Shawn Spencer, this is my partner, Chaz Bono. #4
@I'm Shawn Spencer, this is my partner Jonathan Jacob Jingly-smith. #5
@I'm Shawn, this is my associate MC Clap Yo Hands [Gus claps rhythmically] #5
@This is my partner Imhotep or He-cometh-in-peace. #5
@My name is Shawn Spencer, I'm a psychic detective.  This is my partner Control Alt Delete. #5
@My name is Shawn Spencer, psychic detective.  This is Bigapple Macintosh and my partner Yasmin Blee. #5
@I'm also a psychic detective and this is my partner, Lodge Blackman. #5
@I'm Officer Shawn Spencer, this is my partner, Mission Figs. #5`


let qs = allquotes.split("@"); //just seperating all the individual quotes from the big string 
var quotes = [] //setting up the actual array that will be used 

for(let i = 0; i < qs.length; i++){ //adding quoteItems to the array quotes
  let c = "~Shawn Spencer"; 
  if(qs[i].indexOf("~") > 0){ //if the character name is different than Shawn Spencer- it is changed here
    c = qs[i].substring(qs[i].indexOf("~"))
  }
    var quoteItem = { //giving the quoteItem its properties
    quote: qs[i].substring(0, qs[i].indexOf("#")),
    season: qs[i].substring( qs[i].indexOf("#")).substring(0,2),
    character: c,
  }
  quotes.push(quoteItem);
}
let gifs = [`<img src="http://giphygifs.s3.amazonaws.com/media/GE8JS3daqSYj6/giphy.gif"><img id="gif2" src="http://giphygifs.s3.amazonaws.com/media/GE8JS3daqSYj6/giphy.gif">`, `<img src= "https://media.giphy.com/media/vSH6WEQ9rIYk8/giphy.gif"><img id="gif2" src= "https://media.giphy.com/media/vSH6WEQ9rIYk8/giphy.gif">`, `<img src="https://media3.giphy.com/media/ePzNd3lvvLTEs/source.gif"><img id="gif2" src="https://media3.giphy.com/media/ePzNd3lvvLTEs/source.gif">`, `<img src="https://media.giphy.com/media/QunekOzJu6H28/giphy.gif"><img id="gif2" src="https://media.giphy.com/media/QunekOzJu6H28/giphy.gif">`,`<img src="https://media2.giphy.com/media/11rqyOPZansgzS/source.gif"><img id="gif2" src="https://media2.giphy.com/media/11rqyOPZansgzS/source.gif">`, `<img src="https://i.pinimg.com/originals/2b/57/4d/2b574d61ef707fee654a4aa8d4503767.gif"><img id="gif2" src="https://i.pinimg.com/originals/2b/57/4d/2b574d61ef707fee654a4aa8d4503767.gif">`, `<img src="http://giphygifs.s3.amazonaws.com/media/112qJKiCAxjoli/giphy.gif"><img id="gif2" src="http://giphygifs.s3.amazonaws.com/media/112qJKiCAxjoli/giphy.gif">`]



function getRandomQuote(){  //getting a random quote
  return quotes[Math.floor(Math.random() * quotes.length)];
}
function getRandomGif(){ //getting a random gif to put on the page
  return gifs[Math.floor(Math.random() * gifs.length)];
}

function printQuote(){ //putting the quote on the screen
  let qitem = getRandomQuote();
  var q = `<p class="quote">` + qitem.quote + `</p>` +
  `<p class="character">` + qitem.character +
  `<span class="season"> Season` + qitem.season + `</span> </p>`; 
  document.getElementById("quote-box").innerHTML = q;
  let gif = getRandomGif(); 
  document.getElementById("gifs").innerHTML = gif; //also putting random gifs on the screen
  changeColors();
}

function changeColors(){ //setting a random color for the background and button
  let r = Math.floor(Math.random() * 256); //getting random values for colors
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.background = 'rgb(' + r + ',' + g +',' + b +')';
  document.getElementById("loadQuote").style.backgroundColor = 'rgb(' + r + ',' + g +',' + b +')';
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(printQuote, 6000); //automatically switching quote after 6 seconds


