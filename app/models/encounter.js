import DS from "ember-data";

var Encounter = DS.Model.extend({
	type: DS.attr('string'),
	dateOfEncounter: DS.attr('date'),
	presentingSymptoms: DS.attr('string'),
	preoperativeDiagnosis: DS.attr('string'),
	pastSurgicalHistory: DS.attr('string'),
	dateOfSurgery: DS.attr('date'),
	dateOfAdmission: DS.attr('date'),
	dateOfDischarge: DS.attr('date'),
	operatingSurgeon: DS.attr('string'),
	tumorLocation: DS.attr('string'),
	resection: DS.attr('string'),
	approach: DS.attr('string'),
	repairMaterial: DS.attr('string'),
	complications: DS.attr('string'),
	patient: DS.belongsTo('patient', {async: true}),
	pathologies: DS.hasMany('pathology', {async: true}),
	imagings: DS.hasMany('imaging', {async: true}),
	labs: DS.hasMany('lab', {async: true}),
	exams: DS.hasMany('exam', {async: true})
});

export default Encounter;
