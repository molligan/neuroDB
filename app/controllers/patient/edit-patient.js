import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['patient'],
	firstName: function() {
		return this.get('model.firstName');
		}.property('firstName'),
	lastName: function() {
		return this.get('model.lastName');
		}.property('lastName'),
	gender: function() {
		return this.get('model.gender');
		}.property('gender'),
	dateOfBirth: function() {
		return this.get('model.dateOfBirth');
		}.property('dateOfBirth'),
	mrn: function() {
		return this.get('model.mrn');
		}.property('mrn'),
	actions: {
		updatePatient: function() {
			var patient = this.get('content');
			patient.setProperties({firstName: this.get('firstName'),
								   lastName: this.get('lastName'),
								   gender: this.get('gender'),
								   dateOfBirth: this.get('dateOfBirth'),
								   mrn: this.get('mrn')
								});
			patient.save();
			this.transitionToRoute('patient', this.get('model.id'));
		}
	}
});
