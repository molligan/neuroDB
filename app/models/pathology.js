import DS from 'ember-data';

export default DS.Model.extend({
  dateOfSurgPathReport: DS.attr('string'),
  histologicDiagnosis: DS.attr('string'),
  encounter: DS.belongsTo('encounter', {async: true})
});
