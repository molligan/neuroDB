import DS from 'ember-data';
import Encounter from './encounter';

export default Encounter.extend({
	preoperativeDiagnosis: DS.attr('string'),
	encounter: DS.belongsTo('encounter', {async: true, polymorphic: true})
});
