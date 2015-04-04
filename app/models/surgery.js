import DS from 'ember-data';
import Encounter from './encounter';

export default Encounter.extend({
	dateOfSurgery: DS.attr('string'),
	dateOfAdmission: DS.attr('string'),
	dateOfDischarge: DS.attr('string')
});
