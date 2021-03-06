import Ember from 'ember';
import config from './config/environment';
import SemanticRouteMixin from 'semantic-ui-ember/mixins/application-route';

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
          this.resource('encounter', {path: '/encounter/:encounter_id'}, function() {
          }); 
      });
    });
});

export default Router;