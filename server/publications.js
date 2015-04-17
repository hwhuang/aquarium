Meteor.publish('aquariums', function() {
  return Aquariums.find();
});

Meteor.publish('aquarium', function(aquariumId) {
  check(aquariumId, String);
  return Aquariums.find({_id: aquariumId});
});

Meteor.publish('fish', function(aquariumId) {
	check(aquariumId, String);
	//verifies if there is a fish, otherwise returns one
  // console.log("This", this);
 //  if(this.userId && this.has_fish) {
 //  	  // return Fish.find({aquariumId: aquariumId});
	// }	
	
	// Fish.insert({
	// 	userName: 'Bob',
	// 	imageUrl: 'http://pngimg.com/upload/fish_PNG1156.png',
	// 	top: 50,
	// 	left: 100,
	// 	aquariumId: aquariumId2
	// 	})
	// this.has_fish = true;
  	return Fish.find({aquariumId: aquariumId});

});