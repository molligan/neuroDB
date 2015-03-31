import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', {path: '/'}, function() {
      this.route('newpatient');
      this.resource('patient', {path: '/patient/:patient_id'}, function () {
          this.route('clinicvisit');
          this.route('surgery');
          this.route('research');
          this.route('editPatient');
      });
	});
  
});

export default Router;