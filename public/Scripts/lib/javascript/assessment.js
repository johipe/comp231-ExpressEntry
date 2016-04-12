function calculateResults(assessment){

  //Get selected data  
  var elt = document.getElementById("age");
  var Age = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("education");
  var Education = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("experience");
  var Experience = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("speaking");
  var Speaking = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("listening");
  var Listening = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("reading");
  var Reading = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("writing");
  var Writing = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("secondL");
  var SecondL = elt.options[elt.selectedIndex].value;
  
  
  //convert data to integers
  Age = parseInt(Age);
  Education = parseInt(Education);
  Experience = parseInt(Experience);
  Speaking = parseInt(Speaking);
  Listening = parseInt(Listening);
  Reading = parseInt(Reading);
  Writing = parseInt(Writing);
  SecondL = parseInt(SecondL);

  //calculate total value  
  var result = Age + Education + Experience + Speaking + Listening + Reading + Writing + SecondL;

    
  //print value to  results
  document.getElementById("results").value=result;
}