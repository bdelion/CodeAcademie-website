"use strict";

var filter = function() {
    var searchField = document.getElementById('search-field')
    var searchText = searchField.value === "" ? ".*" : searchField.value
    searchText = RegExp(searchText, 'gi')
    console.log(searchText)
    var fruitsAndVegetablesListItems = document
        .getElementById('fruits-vegetables-list')
        .getElementsByTagName('li')
    console.log(fruitsAndVegetablesListItems)
    for (let item of fruitsAndVegetablesListItems) {
        var itemText = item.innerText
            //console.log(itemText)
            //if (!itemText.toUpperCase().includes(searchText.toUpperCase())) {
        if (!itemText.match(searchText)) {
            item.hidden = true
        } else {
            item.hidden = false
        }
    }
}