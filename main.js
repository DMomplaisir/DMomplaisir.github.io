var changingtext = document.getElementById("text_change");
var listofjobs = ["a programmer", "a graphic designer", "a future entreprenuer", "an eager learner", "a HoC fanatic"];

var counter = 0;
var i = setInterval(function(){
    changingtext.innerHTML = listofjobs[counter];
    console.log(listofjobs[counter]);
    counter++;
      if (counter > 4) {
        counter = 0;
      }
  }, 2000);
