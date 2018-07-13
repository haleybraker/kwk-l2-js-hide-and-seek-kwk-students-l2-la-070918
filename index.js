//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  return parseInt(document.querySelectorAll('ul.ranked-list'))
}