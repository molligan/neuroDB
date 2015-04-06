import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['index','patient'],
	type: 'Surgery',
	dateOfSurgery: null,
	operatingSurgeon: ['Evans',
					   'Farrell',
					   'Judy',
					   'Andrews',
					   'Rosen',
					   'Nyquist'],
	item: null,
	tumorLocation: ['Anterior Fossa',
					'Cavernous Sinus',
					'Clivus',
					'Ethmoid',
					'Middle Fossa',
					'Pituitary - Sellar',
					'Pituitary - Suprasellar',
					'Posterior Fossa',
					'Petrous Apex',
					'Orbit',
					'Sphenoid Sinus',
					'Cervical Spine'],
	resection: ['Total',
				'Subtotal',
				'Partial',
				'Biopsy',
				'None'],
	repairMaterial: ['Surgicel',
					 'Durepair',
					 'Duraseal Glue',
					 'Duragen',
					 'Gelfoam',
					 'Gelfilm',
					 'Floseal',
					 'Surgifoam',
					 'Tisseal',
					 'Button',
					 'Gasket',
					 'Medpore',
					 'Nasoseptal Flap',
					 'U Clip',
					 'Cartilage',
					 'Fascia Lata',
					 'Nasal Packing',
					 'Fat Graft'],
	approach: ['Transsphenoidal',
			   'Transorbital',
			   'Frontotemporal',
			   'Infratemporal',
			   'Transoral',
			   'Transmaxillary',
			   'Transplanum',
			   'Transtuberculum',
			   'Caldwell-Luc',
			   'Transethmoidal',
			   'Craniofacial',
			   'Retrosigmoid'],
	complications: ['Hematoma',
					'Diabetes Insipidus',
					'Myocardial Infarction',
					'Lumbar Drain',
					'Sinusitis',
					'SIADH',
					'CSF Leak',
					'DVT',
					'Stroke',
					'Carotid Artery Rupture',
					'Epistaxis',
					'Sphenoiditis'],
	actions: {
		registerSurgery: function() {
			var patient = this.store.find('patient', this.get('controllers.patient.id'));
			var self = this;
			var dateOfSurgery = self.get('dateOfSurgery');

		    patient.then(function(pat) {
				var surgery = self.store.createRecord('surgery', {
					type: self.get('type'),
					dateOfSurgery: dateOfSurgery,
					operatingSurgeon: self.get('item'),
					patient: pat
				});

				surgery.save();
				self.get('controllers.patient.model').save();
			});

			this.setProperties({
				dateOfSurgery: ''
			});
				
			this.transitionToRoute('patient', this.get('controllers.patient.id'));
		}
	}

});
