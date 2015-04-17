Template.aquariumPage.helpers({
 // print: function() {
 // 	console.log("this", this);
 // },
 
 fish: function () {
 	console.log("aquarium id", this._id);
 	console.log("aquarium fish",  Fish.find(this._id).fetch());
//need to get the aquarium _id from current data context
//return curson Fish in the current aquarium which is in the current data
//context
//need query that will return this
		return Fish.find( {aquariumId: this._id});
		//return Fish.find();

}});

//data context
