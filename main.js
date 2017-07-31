(function(){
  'use strict';

  var awesome; // = 'strict mode';

  // console.log(awesome);

  /*
   * Falsy Values
   */
  // false
  // 0
  // undefined
  // null
  // NaN
  // if(NaN){
  //   console.log('that was a true condition');
  // }

  var cars = ['Honda', 'Dodge', 'Ford', 'Tesla', 'BMW'];
  var emptyArray = [];

  cars[4] = 'Fiat';
  console.log(cars[4]);

  cars[5] = 'BWW';
  console.log(cars[5]);

  cars[cars.length] = 'Toyota';
  console.log(cars[6]);

  cars.push('Nissan');

  console.log(cars);

  var lastItem = cars.pop();

  console.log(cars);
  console.log(lastItem);

  // Access the length of an array
  console.log(cars.length);

  var newArray = cars.shift();

  console.log('cars', cars);

  // Access a specific item in an array
  console.log(cars[4]);

  // Iterate over an array and access each item
  for(var i = 0; i < cars.length; i++){
    var carMaker = cars[i];  // access each item using counter

    if(cars[i].length <= 4){
      console.log(i, carMaker);
    }
  }


  // var pickupTruck = [2, 1, 'white'];
  //
  // pickupTruck[0]  // doors
  // pickupTruck[1]  // steering wheels
  // pickupTruck[2]  // color

  var pickupTruck = {
    'doors': 2,
    'seats': 1,
    'color': 'white',
    rearBumper: false,
    hauling: ['lumber', 'mulch', 'sand'],
    honk: function(){
      console.log('beep beep');
    }
  };

  console.log('This truck has doors:', pickupTruck['doors']);

  console.log('Got a bumper?', pickupTruck.rearBumper);

  pickupTruck.honk();

  for(var i=0; i < pickupTruck.hauling.length; i++){
    console.log('Something I am hauling today:', pickupTruck.hauling[i]);
  }


  var ulElement = document.createElement('ul');

  for(var i=0; i < pickupTruck.hauling.length; i++){
    // get each item being hauled
    var itemBeingHauled = pickupTruck.hauling[i];

    // create an li element for each item being hauled
    var itemElement = document.createElement('li');

    // Set the item being hauled as the display text of the li
    itemElement.textContent = itemBeingHauled;

    // Put the li inside the ul
    ulElement.appendChild(itemElement);
  }

  // Get the div.app element from the DOM
  var appContainer = document.querySelector('.app');

  // Put the UL inside the div.app container
  console.log(appContainer);
  appContainer.appendChild(ulElement);

}());
