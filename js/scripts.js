// Business Logic


var vowels = ["a","e","i","o","u","A","E","I","O","U"];

var output = function(words) {
  console.log('opened function')
  for(i=0; i < words.length; i++){
    console.log(words[i])
    for(j=0; j< words[i].length; j++) {
      console.log(words[i][j])
      if(words[i][j].includes(vowels)) {
        console.log(words[i][j]);
        return (words[i] + 'way')
      }
    }
  }
};






// User Logic
$(document).ready(function(){
  $("#pigform").submit(function(event){

    var input = $("#english-input").val();
    var inputSplit = input.split(" ");
    var result = output(inputSplit);
    console.log(result);
    event.preventDefault();
  });

});
