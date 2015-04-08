import Ember from 'ember';

export default Ember.Controller.extend({
	needs:['index','patient', 'encounter'],
	type: 'Clinic Visit',
	dateOfEncounter: null,
	presentingSymptoms: ['Anosmia',
						 'Epistaxis',
						 'Visual Loss',
						 'Seizure',
						 'Headache',
						 'Nasal Obstruction',
						 'Diplopia',
						 'CSF Rhinorrhea',
						 'Hypopituitary',
						 'Sinusitis',
						 'Acromegaly',
						 'Incidental Discovery of Tumor',
						 'Amenorrhea/Dysmenorrhea'],
	preoperativeDiagnosis: ['To', 'Be', 'Determined'],
	selected: null,
	pastSurgicalHistory: ['Septoplasty',
						  'Endoscopic Sinus Surgery',
						  'TSH',
						  'Transcranial Surgery'],
	neuroExam: ['Normal', 'Abnormal', 'Abnormal - Improved', 'Abnormal - Worsened'],
	cnIILeft:['Normal', 'Abnormal', 'Abnormal - Improved', 'Abnormal - Worsened', 'APD', 'Temproal Hemianopsia', 'Quadrantanopsia'],
	cnIIRight:['Normal', 'Abnormal', 'Abnormal - Improved', 'Abnormal - Worsened', 'APD', 'Temproal Hemianopsia', 'Quadrantanopsia'],
	scanType: ['MRI', 'CT Scan'],
	tumorSize: ['0 - 0.99 cm', 
				'1.0 - 1.99 cm', 
				'2.0 - 2.99 cm', 
				'3.0 - 3.99 cm', 
				'4.0 - 4.99 cm', 
				'5.0 - 5.99 cm',
				'6.0 - 6.99 cm',
				'7.0 - 7.99 cm',
				'8.0 - 8.99 cm',
				'9.0 - 9.99 cm',
				'10+ cm'],
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
	metastasis: ['No', 'Locoregional', "Distant"],
	lateralExpansion: ['Knosp Grade 0 - Ask Evans for Description',
					   'Knosp Grade 1',
					   'Knosp Grade 2',
					   'Knosp Grade 3',
					   'Knosp Grade 4'],
	histologicDiagnosis: ['Pituitary Adenoma - Null',
						  'Pituitary Adenoma - ACTH',
						  'Pituitary Adenoma - GH',
						  'Pituitary Adenoma - PRL',
						  'Meningioma',
						  'Schwannoma',
						  'Acoustic Neuroma',
						  'Chondrosarcoma',
						  'Cranial Base Funal Tumor',
						  'Encephalocoele',
						  'Hemangiopericytoma',
						  'Metastasis',
						  'Juvenile Nasal Angiofibroma',
						  'Trigeminal Schwannoma',
						  'Sinonasal Malignancy - Melanoma',
						  'Sinonasal Malignancy - Adenocarcinoma',
						  'Sinonasal Malignancy - SNUC',
						  'Sinonasal Malignancy - SCCA',
						  'Adenoid Cystic Carcinoma',
						  'Esthesioneuroblastoma',
						  'Neuroendocrine Carcinoma',
						  'Craniopharyngioma',
						  'Rathke Cleft Cyst',
						  'Chordoma',
						  'Other Cranial Base Tumor',
						  'Other Intracranial Tumor'],
	tumorDescription: ['Cystic', 'Necrotic', 'Hemorrhagic'],
	neuroExamStatus: null,
	dateOfSurgPathReport: null,
	actions: {
		registerEncounter: function() {
			var patient = this.store.find('patient', this.get('controllers.patient.id'));
			var self = this;
			var dateOfEncounter = self.get('dateOfEncounter');

		    patient.then(function(pat) {
				var encounter = self.store.createRecord('encounter', {
					type: self.get('type'),
					dateOfEncounter: dateOfEncounter,
					preoperativeDiagnosis: self.get('selected'),
					patient: pat
				});

				//clinicvisit.save();

				var pathology = self.store.createRecord('pathology', {
					dateOfSurgPathReport: dateOfEncounter,
					encounter: encounter
				});

				pathology.save();
				encounter.save();

				self.get('controllers.patient.model').save();		
			});

			this.setProperties({
				dateOfEncounter: ''
			});
				
			this.transitionToRoute('patient', this.get('controllers.patient.id'));
		},
		setNeuroExamStatus: function(arg) {
			if (arg === 'Normal') {
				this.set('neuroExamStatusSelected', false);
				this.set('neuroExamStatus', true);
			} else {
				this.set('neuroExamStatusSelected', false);
				this.set('neuroExamStatus', false);
			}
			
			//$('#CNI').removeClass().addClass('ui fluid search selection dropdown');
		}
	}

});
