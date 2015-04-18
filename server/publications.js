Meteor.publish('aquariums', function() {
  return Aquariums.find();
});

Meteor.publish('aquarium', function(aquariumId) {
  check(aquariumId, String);
  return Aquariums.find({_id: aquariumId});
});

Meteor.publish('fish', function(aquariumId) {
  check(aquariumId, String);
  if (this.userId) {
    if (!Fish.findOne({aquariumId: aquariumId, userId: this.userId})) {
      Fish.insert({
        userId: this.userId,
        imageUrl: 'http://pngimg.com/upload/fish_PNG1156.png',
        top: 50,
        left: 100,
        aquariumId: aquariumId
      });
    }
  }
  return Fish.find({aquariumId: aquariumId});
});