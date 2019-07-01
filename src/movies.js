/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// function turnHoursToMinutes (array) {
    array.forEach(function(element){
        if(array.element.includes({
            element.slice(0,1)
        }
        }
    }



// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    var total = array.reduce(function(acc,obj){
        return acc + obj.rate;
    }, 0);
    var averageRates =  total / array.length; 
    return averageRates; 
}
    


// Get the average of Drama Movies

function dramaMoviesRate(array) {
  counter = 0;
  var total = array.reduce(function(acc,obj){
      
      
      if(obj.genre.indexOf('Drama') !== -1){
          counter++;
          return acc + obj.rate;
      } else {
          return acc + 0;  
      };
  }, 0)
  
  var average = total / counter;
  var finalAverage = average.toFixed(2);
  return average;
}


    

// Order by time duration, in growing order



// How many movies did STEVEN SPIELBERG
function howManyMovies (array){
    counter = 0; 
    var newArray = array.map(function(object){
        debugger
        if(object.director.indexOf('Steven Spielberg') !== -1 && object.genre.indexOf('Drama') !== -1){
            counter++;
        }else {
            return undefined;
        }
    })
    if(counter){
        return `Steven Spielberg directed ${counter} drama movies!`;
    } else {
        return undefined; 
    }
     
    }





// Order by title and print the first 20 titles

function orderAlphabetically (array) {
   newArray = array.map(function(element){
   return element.title;
   }).sort();

   if(newArray.length < 20){
        return newArray;
   } else if(newArray.length > 20) {
       newArray = newArray.splice(0,20);
        
   }

   return newArray; 
    
}

// Best yearly rate average
