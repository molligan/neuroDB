import DS from "ember-data";

var Encounter = DS.Model.extend({
	type: DS.attr('String'),
	dateOfEncounter: DS.attr('string'),
	preoperativeDiagnosis: DS.attr('string'),
	patient: DS.belongsTo('patient', {async: true}),
	pathology: DS.hasMany('pathology', {async: true})
});

export default Encounter;