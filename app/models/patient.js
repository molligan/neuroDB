import DS from "ember-data";

var Patient = DS.Model.extend({
	lastName: DS.attr('string'),
	firstName: DS.attr('string'),
	mrn: DS.attr('string'),
	dateOfBirth: DS.attr('string'),
	gender: DS.attr('string'),
	encounters: DS.hasMany('encounter', {async: true})
});

export default Patient;
