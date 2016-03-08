function checkIfNutsInPizza (products) {
  return products.filter(function(el) {
    return !el.containsNuts;
  })
}

function checkForSundrieds (products) {
  return products;
}
