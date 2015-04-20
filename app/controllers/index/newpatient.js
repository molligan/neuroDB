import Ember from 'ember';
import { moment, ago } from 'ember-moment/computed';

export default Ember.Controller.extend({
	itemActions: ['Male','Female'],
	selectedAction: null,
	actions: {
		registerPatient: function() {
			var dateOfBirth = new Date(this.get('dateOfBirth'));
			var newPatient = this.store.createRecord('patient', {
							
				lastName: this.get('lastName'),
				firstName: this.get('firstName'),
				mrn: this.get('mrn'),
				dateOfBirth: dateOfBirth,
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
