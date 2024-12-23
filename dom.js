// example 1
let hold = document
  .getElementById("changeParagraphText")
  .addEventListener("click", function () {
    // console.log(this)
    let paragraph = document.getElementById("myparagraph");
    // console.log(paragraph)
    paragraph.textContent = "paragraph got changes !!";
    // console.log(paragraph)
  });
// console.log(hold)

// example 2
let hold1 = document
  .getElementById("highlightfirstCity")
  .addEventListener("click", function () {
    let citilist = document.getElementById("citilist");
    citilist.firstElementChild.classList.add("highlight");
  });

// example 3
let coffee = document
  .getElementById("changeOrder")
  .addEventListener("click", function () {
    let name = document.getElementById("cofftype");
    name.textContent = "expresso";
    name.style.backgroundColor = "pink";
  });

// example 4
let button1 = document
  .getElementById("addNewItem")
  .addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "eggs";
    document.getElementById("shoppingList").appendChild(newItem);
  });

// example 5
let remove = document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasks = document.getElementById("tasklist");
    tasks.lastElementChild.remove();
  });

// example 6
clickbtn = document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert();
  });

// example 7
document.getElementById("tealist").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
      alert('you selected : '+ event.target.textContent)
  }
});

// example 8
document.getElementById('feedbackform').addEventListener('submit', function (event) {
    event.preventDefault();

    let feedback = document.getElementById('feedbackInput').value 
    // console.log(feedback)
    document.getElementById('feedbackDisplay').textContent = `Feedback is ${feedback}`
})

// example 9
document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('domstatus').textContent = "DOM FULLY  loaded ..."
})

// example 10
document.getElementById('toggleHighlight').addEventListener('click', function () {
    let description = document.getElementById('descriptionText')
    description.classList.toggle('highlight')
})
