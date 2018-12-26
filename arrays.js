var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic']
var tomatoSauceIngredients = ['tomato', 'garlic', 'olive oil', 'basil', 'oregano']
//to-do 1
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
//end of to-do
function addElementToBeginningOfArray(array, element) {
return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
//var array = array
return array.unshift('element')
}

function addElementToEndOfArray(array, element) {
  return [array... , element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push('element')
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift
}
