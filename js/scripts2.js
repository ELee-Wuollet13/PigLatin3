// Business Logic


var vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];

var pigSentence = function(input){
  var sentence = input.split(' ');
  newSentence = sentence.map(function(word){
      console.log(pigWord(word));

      return pigWord(word);
  });
  console.log(newSentence);
  return newSentence.join(' ');
};

var pigWord = function(word) {
  if (word[0] ==='y' || word[0] === 'Y') {
    return word.slice(1) + 'yay';
  } else if (vowels.includes(word[0])) {
    return word + 'way';
  } else {
    for (i=0; i < word.length; i++){
      if (word[i] === 'u' || word[i] === 'U' && word[i-1] === 'q' || word[i-1] === 'Q') {
        return word.slice(i+1) + word.slice(0,i+1) + 'ay';
      } else if(vowels.includes(word[i])) {
        return(word.slice(i) + word.slice(0,i) + 'ay');
      }
    }
  }
}






  // User Logic
  $(document).ready(function(){
    $("#pigForm").submit(function(event){
      var englishInput = $("#english-input").val();

      var result = pigSentence(englishInput);
      console.log(result);
      event.preventDefault();
    });

  });
