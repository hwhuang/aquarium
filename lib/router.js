//Global Settings
Router.configure({
  layoutTemplate: 'layout'
});

//subscribing to aquariums at the home page
Router.route('/', {
  name: 'aquariumsList',
  waitOn: function() { 
    return Meteor.subscribe('aquariums'); 
  }
});

//subscribing to the aquarium matching the id. 
Router.route('/aquariums/:_id', {
  name: 'aquariumPage',
  waitOn: function() { 
  	//console.log("Here", this.params._id);
	return [Meteor.subscribe('aquarium', this.params._id), Meteor.subscribe('fish', this.params._id)]; 
  },
  data: function() { 
  	return Aquariums.findOne(this.params._id); 
  }
});