//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var children = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < children.length; i++) {
  children.innerHTML = parseInt(children[i])+n
  }
}