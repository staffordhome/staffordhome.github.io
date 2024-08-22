// Create a "remove" button and append it to each list item
var dinnerIdeas = document.getElementsByClassName("dinnerIdea");
for (var i = 0; i < dinnerIdeas.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  dinnerIdeas[i].appendChild(span);
}

// Click on a remove button to hide the current list item
// TODO: have this save an array somewhere, and load HTML list from array
    // that way this won't completely reset on any reload...
    // write to a JSON file in the project?? - update this file on timer? reload? unload? manual save?
var removes = document.getElementsByClassName("remove");
for (var i = 0; i < removes.length; i++) {
  removes[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul#dinnersList');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add Dinner" button
function newDinner() {
    var li = document.createElement("li");
    li.className = "dinnerIdea";
    var inputValue = document.getElementById("dinnerInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("dinnersList").appendChild(li);
    }
    document.getElementById("dinnerInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (var i = 0; i < removes.length; i++) {
        removes[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

// Reset all dinner ideas to "unchecked" when clicking on the "Reset All" button
function resetDinners() {
    var dinnerIdeas = document.getElementsByClassName("dinnerIdea");
    for (var i = 0; i < dinnerIdeas.length; i++) {
        if (dinnerIdeas[i].classList.contains('checked')) {
            dinnerIdeas[i].classList.toggle('checked');
        }
    }
}