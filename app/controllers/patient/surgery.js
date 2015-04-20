import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['index','patient'],
	type: 'Surgery',
	dateOfSurgery: moment().format('MM-DD-YYYY'),
	dateOfAdmission: null,
	dateOfDischarge: null,
	operatingSurgeon: ['Evans',
					   'Farrell',
					   'Judy',
					   'Andrews',
					   'Rosen',
					   'Nyquist'],
	selectedOperatingSurgeon: null,
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
	selectedTumorLocation: null,
	resection: ['Total',
				'Subtotal',
				'Partial',
				'Biopsy',
				'None'],
	selectedResection: null,
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
					 'Cartilage/Bone',
					 'Fascia Lata',
					 'Nasopore/Nasal Packing',
					 'Fat Graft',
					 'XeroGel'],
	selectedRepairMaterial: null,
	approach: ['Transsphenoidal',
			   'Transorbital',
			   'Frontotemporal - Transcranial',
			   'Infratemporal',
			   'Transoral',
			   'Transmaxillary',
			   'Transplanum',
			   'Transpharyngeal - Cervical Spine',
			   'Transoral - Cervical Spine',
			   'Transclival',
			   'Transtuberculum',
			   'Caldwell-Luc',
			   'Transethmoidal',
			   'Craniofacial',
			   'Retrosigmoid'],
	selectedApproach: null,
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
	selectedComplications: null,

	actions: {
		registerSurgery: function() {
			var patient = this.store.find('patient', this.get('controllers.patient.id'));
			var self = this;
			var dateOfSurgery = new Date(self.get('dateOfSurgery'));
			var dateOfAdmission = new Date(self.get('dateOfAdmission'));
			var dateOfDischarge = new Date(self.get('dateOfDischarge'));

		    patient.then(function(pat) {
				var surgery = self.store.createRecord('encounter', {
					type: self.get('type'),
					dateOfEncounter: dateOfSurgery,
					dateOfSurgery: dateOfSurgery,
					dateOfAdmission: dateOfAdmission,
					dateOfDischarge: dateOfDischarge,
					operatingSurgeon: self.get('selectedOperatingSurgeon'),
					tumorLocation: self.get('selectedTumorLocation'),
					resection: self.get('selectedResection'),
					repairMaterial: self.get('selectedRepairMaterial'),
					approach: self.get('selectedApproach'),
					complications: self.get('selectedComplications'),
					patient: pat
				});

				surgery.save();
				self.get('controllers.patient.model').save();

				self.setProperties({
				dateOfEncounter: moment().format('MM-DD-YYYY'),
				dateOfSurgery: '',
				dateOfAdmission: '',
				dateOfDischarge: '',
				selectedOperatingSurgeon: '',
				selectedTumorLocation: '',
				selectedResection: '',
				selectedRepairMaterial: '',
				selectedApproach: '',
				selectedComplications: null
			});
			});

			
				
			this.transitionToRoute('patient', this.get('controllers.patient.id'));
		}
	}

});
