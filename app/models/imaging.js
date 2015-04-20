import DS from 'ember-data';

export default DS.Model.extend({
  dateOfScan: DS.attr('date'),
  scanType: DS.attr('string'),
  tumorSize: DS.attr('string'),
  tumorLocation: DS.attr('string'),
  metastasis: DS.attr('string'),
  lateralExpansion: DS.attr('string'),
  encounter: DS.belongsTo('encounter', {async: true})
});
