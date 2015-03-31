import Ember from 'ember';

export default Ember.Controller.extend({
	itemActions: ['Male','Female'],
	selectedAction: null,
	actions: {
		registerPatient: function() {
			var newPatient = this.store.createRecord('patient', {
				
				lastName: this.get('lastName'),
				firstName: this.get('firstName'),
				mrn: this.get('mrn'),
				dateOfBirth: this.get('dateOfBirth'),
				gender: this.get('gender')
				
			});

			newPatient.save();

			this.setProperties({
				firstName: '',
				lastName: '',
				mrn: '',
				gender: '',
				dateOfBirth: ''
			});

			this.transitionToRoute('patient', newPatient.get('id'));
		}
	}
});
