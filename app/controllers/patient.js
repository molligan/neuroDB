import Ember from "ember";

export default Ember.ObjectController.extend({
	needs:['index'],
	name: function () {
		return this.get('lastName') + ', ' + this.get('firstName');
	}.property('firstName', 'lastName'),
	actions: {
		destroy: function() {
			return console.log('hello');
		}
	}
});