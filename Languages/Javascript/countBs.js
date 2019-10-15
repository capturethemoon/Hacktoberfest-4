/*
This is a project that I originally did for Eloquent JavaScript, a JavaScript textbook that you can find online
at: eloquentjavascript.net.

The project is:
Write a function countBs that takes a string as its only argument and returns a number that indicates how many 
uppercase “B” characters there are in the string. 

In order to work, the project needs to be linked to an index.html file containing a div called "content." You can also modify it to 
log directly to the console.
*/

let countBs = function(str) {
  let box = [];
  let count = 0;
  const splits = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (splits[i] == "B") {
      count++;
    }
    else if (splits[i] != "B"){
      box.push(splits[i]);
    }
    document.getElementById("content").innerHTML = "Result for the phrase <strong>" + str + "</strong>:<br /><br /> " + count;

}
};

countBs("Babs and Buster Bunny");
