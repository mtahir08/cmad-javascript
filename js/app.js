


var whishListItems = localStorage.getItem("whishlist") || [];
whishListItems.length > 0 ? whishListItems = JSON.parse(whishListItems) : false;
console.log(whishListItems);
var totalItems = 0;
// showData();
// countTotalItems();