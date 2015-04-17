//Moves the fish on arrow keys
$(document).on('keyup', function(event) {
  if (event.keyCode == '37') {
    Fish.update(Fish.findOne()._id, {$inc: {left: -10}});
  }
  if (event.keyCode == '39') {
    Fish.update(Fish.findOne()._id, {$inc: {left: 10}}); 
  }
  if (event.keyCode == '38') {
    Fish.update(Fish.findOne()._id, {$inc: {top: -10}}); 
  } 
  if (event.keyCode == '40') {
    Fish.update(Fish.findOne()._id, {$inc: {top: 10}}); 
  }
});