import DS from 'ember-data';

export default DS.Model.extend({
	labType: DS.attr('string'),
	dateOfLab: DS.attr('date'),
	T3: DS.attr('number'),
	T4: DS.attr('number'),
	TSH: DS.attr('number'),
	T3uptake: DS.attr('number'),
	AMcortisol: DS.attr('number'),
	PMcortisol: DS.attr('number'),
	prolactin: DS.attr('number'),
	somatomedin: DS.attr('number'),
	testosterone: DS.attr('number'),
	growthHormone: DS.attr('number'),
	freeTestEst: DS.attr('number'),
	aldosterone: DS.attr('number'),
	LS: DS.attr('number'),
	FSH: DS.attr('number'),
	ACTH: DS.attr('number'),
	encounter: DS.belongsTo('encounter', {async: true})
});