import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['patient', 'encounter'],
	cnI: function() {
		console.log(this.get('model.cnI'));
		return this.get('model.cnI');

		}.property('cnI')
});
