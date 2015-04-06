import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('string'),
	dateOfSurgery: DS.attr('string'),
	operatingSurgeon: DS.attr('string'),
	patient: DS.belongsTo('patient', {async: true})
});
