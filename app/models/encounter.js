import DS from "ember-data";

var Encounter = DS.Model.extend({
	type: DS.attr('String'),
	dateOfEncounter: DS.attr('string'),
	patient: DS.belongsTo('patient', {async: true}),
	pathologies: DS.hasMany('pathology', {async: true}),
	clinicvisits: DS.hasMany('clinic-visit', {async: true, polymorphic: true, inverse: 'encounter'})
});

export default Encounter;
