import DS from 'ember-data';

export default DS.Model.extend({
  dateOfSurgPathReport: DS.attr('date'),
  histologicDiagnosis: DS.attr('string'),
  tumorDescription: DS.attr('string'),
  encounter: DS.belongsTo('encounter', {async: true})
});
