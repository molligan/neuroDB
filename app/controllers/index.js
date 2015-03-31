import Ember from "ember";

export default Ember.ObjectController.extend({
	needs: 'index',
	searchText: null,

	totalPatientCount: Ember.computed.alias('controllers.index.length'),

	searchResults: function() {
		var searchText = this.get('searchText');
		var regex = new RegExp(searchText, 'i');
		var patients = this.store.all('patient');

		if (!searchText) { return; }
		return patients.filter(function(patient) {
				return patient.get('firstName').match(regex) || 
					   patient.get('lastName').match(regex) ||
					   patient.get('mrn').match(regex);
				});

	}.property('searchText'),

	actions: {
		clearSearch: function() {
			this.set('searchText', null);
			return;
		}
	}
});