import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('string'),
	dateOfSurgery: DS.attr('date'),
	dateOfAdmission: DS.attr('date'),
	operatingSurgeon: DS.attr('string'),
	tumorLocation: DS.attr('string'),
	resection: DS.attr('string'),
	approach: DS.attr('string'),
	repairMaterial: DS.attr('string'),
	complications: DS.attr('string'),
	patient: DS.belongsTo('patient', {async: true})
});
