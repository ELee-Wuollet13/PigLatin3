// Business Logic


var vowels = ["a","e","i","o","u","A","E","I","O","U"];

var output = function(words) {
  console.log('opened function')
  for(i=0; i < words.length; i++){
    if(vowels.includes(words[i][0])) {
      return (words[i] + 'way');

    } else if  (vowels.includes(words[i].indexOf(vowels))) {
      return (words[i] + 'ay');

    } else {
      console.log('does not start with a vowel');

    };
  };
};
// for(i=0; i < words.length; i++){
  //   if(vowels.includes(words[i][0])) {
    // console.log(words[i])
    // for(j=0; j< words[i].length; j++) {
      //     console.log(words[i][j])
      //   if(vowels.includes(words[i][j])) {
        //       console.log(words[i][j]);
        //       return (words[i] + 'way')









  // User Logic
  $(document).ready(function(){
    $("#pigForm").submit(function(event){

      var input = $("#english-input").val();
      var inputSplit = input.split(" ");
      var result = output(inputSplit);
      console.log(result);
      event.preventDefault();
    });

  });
