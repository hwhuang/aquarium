Template.aquariumPage.helpers({
	// Finds all fish in a specific aquarium. 
 fish: function () {
	return Fish.find({aquariumId: this._id});
	}
});
