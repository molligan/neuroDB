import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
          encounters: this.store.find('encounter'),
          surgeries: this.store.find('surgery')
      })
	}

});