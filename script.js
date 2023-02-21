
function filterByCity(targetCity, listingCityArray) {
  // This code is here to show you what the UI 
  // looks like and will put every listing onto 
  // the page no matter what you search for. 
  // Remove/comment out this code and replace 
  // it with your filtering code.
  //
  if(targetCity === ""){
    return [...listingCityArray.keys()];
  }
  let indexArray = [];
  for( let i = 0; i < listingCityArray.length; i++){
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()){
      indexArray.push(i);
    }
  }
  return indexArray;
}


function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  
  let priceArray = [];
  
  for(let i = 0; i < listingPriceArray.length; i++){
    if(listingPriceArray[i]<= maxPrice && listingPriceArray[i] >= minPrice){
      priceArray.push(i)
    }
  }
  console.log(`Listings: ${listingPriceArray}
Price: ${priceArray}`);
  return priceArray;
}
  filterByPriceTest()


function filterByTypes(targetTypes, listingTypeArray) {
  
  return [...listingTypeArray.keys()];
}
