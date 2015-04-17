Template.fishItem.helpers({
});
		  

$(document).on('keyup', function (event) {
	if(event.keyCode == '37'){
		//fish = Fish.findOne({id: 'Hannah'});
  		Fish.update(Fish.findOne()._id, {$inc: {left: -10}});
  		// Fish.update(Fish.find({user: 'Hannah', _id: {aquariumId}}), {$inc: {left: -10}});
	}
	if(event.keyCode == '39') {
		Fish.update(Fish.findOne()._id, {$inc: {left: 10}}); 
	}
	if(event.keyCode == '38') {
		Fish.update(Fish.findOne()._id, {$inc: {top: -10}}); 
	}	
	if(event.keyCode == '40') {
		Fish.update(Fish.findOne()._id, {$inc: {top: 10}}); 
	}
})

//jquery

//can't use findOne anymore after...





