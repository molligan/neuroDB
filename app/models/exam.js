import DS from 'ember-data';

export default DS.Model.extend({
  examType: DS.attr('string'),
  cnI: DS.attr('string'),
  cnIILeft: DS.attr('string'),
  cnIIRight: DS.attr('string'),
  cnIIILeft: DS.attr('string'),
  cnIIIRight: DS.attr('string'),
  cnIVLeft: DS.attr('string'),
  cnIVRight: DS.attr('string'),
  cnVLeft: DS.attr('string'),
  cnVRight: DS.attr('string'),
  cnVILeft: DS.attr('string'),
  cnVIRight: DS.attr('string'),
  cnVIILeft: DS.attr('string'),
  cnVIIRight: DS.attr('string'),
  cnVIIILeft: DS.attr('string'),
  cnVIIIRight: DS.attr('string'),
  cnIXLeft: DS.attr('string'),
  cnIXRight: DS.attr('string'),
  cnXLeft: DS.attr('string'),
  cnXRight: DS.attr('string'),
  cnXILeft: DS.attr('string'),
  cnXIRight: DS.attr('string'),
  cnXIILeft: DS.attr('string'),
  cnXIIRight: DS.attr('string'),
  encounter: DS.belongsTo('encounter', {async: true})
});
