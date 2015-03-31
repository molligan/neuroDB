import Ember from "ember";

export default Ember.ObjectController.extend({
	needs:['index','encounter'],
	name: function () {
		return this.get('lastName') + ', ' + this.get('firstName');
	}.property('firstName', 'lastName')
});