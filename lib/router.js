//Global Settings
Router.configure({
  layoutTemplate: 'layout'
});

//Subscribing to aquariums at the home page
Router.route('/', {
  name: 'aquariumsList',
  waitOn: function() { 
    return Meteor.subscribe('aquariums'); 
  }
});

//Subscribing to the aquarium with matching id. 
Router.route('/aquariums/:_id', {
  name: 'aquariumPage',
  waitOn: function() { 
	 return [Meteor.subscribe('aquarium', this.params._id), Meteor.subscribe('fish', this.params._id)]; 
  },
  data: function() { 
    return Aquariums.findOne(this.params._id); 
  }
});