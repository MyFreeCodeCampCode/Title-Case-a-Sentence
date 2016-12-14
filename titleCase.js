
function titleCase(str) {
  var myArray = str.toLowerCase().split(" "); 
  var newSentance = "";
  
  for (var i = 0; i < myArray.length; i++) {
    //Strings are immutable. This saves it to array.
    myArray[i] = myArray[i][0].toUpperCase() + myArray[i].substring(1,myArray[i].length); 
    newSentance = myArray.join(" "); //will put a space after last word
  }
  
  return newSentance;
}

//test case
//titleCase("I'm a little tea pot");
