import DS from "ember-data";

var Encounter = DS.Model.extend({
	dateOfEncounter: DS.attr('string'),
	preoperativeDiagnosis: DS.attr('string'),
	patient: DS.belongsTo('patient', {async: true})
});

export default Encounter;
