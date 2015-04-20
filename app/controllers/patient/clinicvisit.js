import Ember from 'ember';


export default Ember.Controller.extend({
	needs:['patient'],
	type: 'Clinic Visit',
	dateOfEncounter: moment().format('MM-DD-YYYY'),
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
	selectedPresentingSymptoms: null,
	preoperativeDiagnosis: ['Pituitary Adenoma',
						    'Encephalocoele',
					        'Anterior Fossa Mass',
						    'Cavernous Sinus Mass',
						    'Clivus Mass',
						    'Ethmoid Mass',
						    'Middle Fossa Mass',
						    'Pituitary - Sellar Mass',
						    'Pituitary - Suprasellar Mass',
						    'Posterior Fossa Mass',
						    'Petrous Apex Mass',
						    'Orbit Mass',
						    'Sphenoid Sinus Mass',
						    'Cervical Spine Mass',
						    'Maxillary Sinus Mass',
						    'Nasal Cavity Mass',
						    'Pterygopalatine Fossa Mass',
						    'Infratemporal Fossa Mass',
						    'Frontal Sinus Mass',
						    'Rathke Cleft Cyst'],
	selectedPreoperativeDiagnosis: null,
	pastSurgicalHistory: ['Septoplasty',
						  'Endoscopic Sinus Surgery',
						  'TSH',
						  'Transcranial Surgery'],
	selectedPastSurgicalHistory: null,
	examType: 'Neuro',
	neuroExam: ['Normal', 'Abnormal', 'Abnormal - Improved', 'Abnormal - Worsened'],
	selectedcnI: 'Normal',
	selectedcnIILeft: 'Normal',
	selectedcnIIILeft: 'Normal',
	selectedcnIVLeft: 'Normal',
	selectedcnVLeft: 'Normal',
	selectedcnVILeft: 'Normal',
	selectedcnVIILeft: 'Normal',
	selectedcnVIIILeft: 'Normal',
	selectedcnIXLeft: 'Normal',
	selectedcnXLeft: 'Normal',
	selectedcnXILeft: 'Normal',
	selectedcnXIILeft: 'Normal',
	selectedcnIIRight: 'Normal',
	selectedcnIIIRight: 'Normal',
	selectedcnIVRight: 'Normal',
	selectedcnVRight: 'Normal',
	selectedcnVIRight: 'Normal',
	selectedcnVIIRight: 'Normal',
	selectedcnVIIIRight: 'Normal',
	selectedcnIXRight: 'Normal',
	selectedcnXRight: 'Normal',
	selectedcnXIRight: 'Normal',
	selectedcnXIIRight: 'Normal',
	cnII:['Normal', 'Abnormal', 'Abnormal - Improved', 'Abnormal - Worsened', 'APD', 'Temproal Hemianopsia', 'Quadrantanopsia'],
	scanType: ['MRI', 'CT Scan'],
	selectedScanType: null,
	labType: 'Endocrine',
	dateOfLab: null,
	T3: null,
	T4: null,
	TSH: null,
	T3uptake: null,
	AMcortisol: null,
	PMcortisol: null,
	prolactin: null,
	somatomedin: null,
	testosterone: null,
	growthHormone: null,
	freeTestEst: null,
	aldosterone: null,
	LS: null,
	FSH: null,
	ACTH: null,
	dateOfScan: null,
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
	selectedTumorSize: null,
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
					'Cervical Spine',
					'Maxillary Sinus',
					'Nasal Cavity',
					'Pterygopalatine Fossa',
					'Infratemporal Fossa',
					'Frontal Sinus'],
	selectedTumorLocation: null,
	metastasis: ['No', 'Locoregional', "Distant"],
	selectedMetastasis: null,
	lateralExpansion: ['Knosp Grade 0',
					   'Knosp Grade 1',
					   'Knosp Grade 2',
					   'Knosp Grade 3',
					   'Knosp Grade 4'],
	selectedLateralExpansion: null,
	histologicDiagnosis: ['Pituitary Adenoma - Null',
						  'Pituitary Adenoma - ACTH',
						  'Pituitary Adenoma - GH',
						  'Pituitary Adenoma - PRL',
						  'Meningioma',
						  'Schwannoma',
						  'Acoustic Neuroma',
						  'Chondrosarcoma',
						  'Cranial Base Fungus',
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
	selectedHistologicDiagnosis: null,
	tumorDescription: ['Cystic', 'Necrotic', 'Hemorrhagic'],
	selectedTumorDescription: null,
	neuroExamStatus: false,
	labStatus: true,
	imagingStatus: true,
	pathologyStatus: true,
	dateOfSurgPathReport: null,
	pathologyDisabled: true,
	imagingDisabled: true,
	labDisabled: true,
	examDisabled: true,

	actions: {
		registerEncounter: function() {
			var patient = this.store.find('patient', this.get('controllers.patient.id'));
			var self = this;
			var dateOfEncounter = new Date(self.get('dateOfEncounter'));
			var dateOfSurgPathReport = new Date(self.get('dateOfSurgPathReport'));
			var dateOfScan = new Date(self.get('dateOfScan'));
			var dateOfLab = new Date(self.get('dateOfLab'));
		    patient.then(function(pat) {
				var encounter = self.store.createRecord('encounter', {
					type: self.get('type'),
					dateOfEncounter: dateOfEncounter,
					preoperativeDiagnosis: self.get('selectedPreoperativeDiagnosis'),
					presentingSymptoms: self.get('selectedPresentingSymptoms'),
					pastSurgicalHistory: self.get('selectedPastSurgicalHistory'),
					patient: pat
				});

				if (self.get('imagingStatus') === true) {
					var imaging = self.store.createRecord('imaging', {
						dateOfScan: dateOfScan,
						scanType: self.get('selectedScanType'),
						tumorSize: self.get('selectedTumorSize'),
						tumorLocation: self.get('selectedTumorLocation'),
						metastasis: self.get('selectedMetastasis'),
						lateralExpansion: self.get('selectedLateralExpansion'),
						encounter: encounter
					});

					imaging.save(); 
				}

				if (self.get('labStatus') === true) {
					var lab = self.store.createRecord('lab', {
						labType: self.get('labType'),
						dateOfLab: dateOfLab,
						T3: self.get('T3'),
						T4: self.get('T4'),
						TSH: self.get('TSH'),
						T3uptake: self.get('T3uptake'),
						AMcortisol: self.get('AMcortisol'),
						PMcortisol: self.get('PMcortisol'),
						prolactin: self.get('prolactin'),
						somatomedin: self.get('somatomedin'),
						testosterone: self.get('testosterone'),
						growthHormone: self.get('growthHormone'),
						freeTestEst: self.get('freeTestEst'),
						aldosterone: self.get('aldosterone'),
						LS: self.get('LS'),
						FSH: self.get('FSH'),
						ACTH: self.get('ACTH'),
						encounter: encounter
					});

					lab.save();
				}

				if (self.get('neuroExamStatus') === true) {
					var exam = self.store.createRecord('exam', {
						examType: self.get('examType'),
						cnI: 'Normal',
						cnIILeft: 'Normal',
						cnIIRight: 'Normal',
						cnIIILeft: 'Normal',
						cnIIIRight: 'Normal',
						cnIVLeft: 'Normal',
						cnIVRight: 'Normal',
						cnVLeft: 'Normal',
						cnVRight: 'Normal',
						cnVILeft: 'Normal',
						cnVIRight: 'Normal',
						cnVIILeft: 'Normal',
						cnVIIRight: 'Normal',
						cnVIIILeft: 'Normal',
						cnVIIIRight: 'Normal',
						cnIXLeft: 'Normal',
						cnIXRight: 'Normal',
						cnXLeft: 'Normal',
						cnXRight: 'Normal',
						cnXILeft: 'Normal',
						cnXIRight: 'Normal',
						cnXIILeft: 'Normal',
						cnXIIRight: 'Normal',
						encounter: encounter
					});

					exam.save();

				} else {
					var exam = self.store.createRecord('exam', {
						examType: self.get('examType'),
						cnI: self.get('selectedcnI'),
						cnIILeft: self.get('selectedcnIILeft'),
						cnIIRight: self.get('selectedcnIIRight'),
						cnIIILeft: self.get('selectedcnIIILeft'),
						cnIIIRight: self.get('selectedcnIIIRight'),
						cnIVLeft: self.get('selectedcnIVLeft'),
						cnIVRight: self.get('selectedcnIVRight'),
						cnVLeft: self.get('selectedcnVLeft'),
						cnVRight: self.get('selectedcnVRight'),
						cnVILeft: self.get('selectedcnVILeft'),
						cnVIRight: self.get('selectedcnVIRight'),
						cnVIILeft: self.get('selectedcnVIILeft'),
						cnVIIRight: self.get('selectedcnVIIRight'),
						cnVIIILeft: self.get('selectedcnVIIILeft'),
						cnVIIIRight: self.get('selectedcnVIIIRight'),
						cnIXLeft: self.get('selectedcnIXLeft'),
						cnIXRight: self.get('selectedcnIXRight'),
						cnXLeft: self.get('selectedcnXLeft'),
						cnXRight: self.get('selectedcnXRight'),
						cnXILeft: self.get('selectedcnXILeft'),
						cnXIRight: self.get('selectedcnXIRight'),
						cnXIILeft: self.get('selectedcnXIILeft'),
						cnXIIRight: self.get('selectedcnXIIRight'),
						encounter: encounter
					});

					exam.save();
				}

				if (self.get('pathologyStatus') === true) {

					var pathology = self.store.createRecord('pathology', {
						dateOfSurgPathReport: dateOfSurgPathReport,
						histologicDiagnosis: self.get('selectedHistologicDiagnosis'),
						tumorDescription: self.get('selectedTumorDescription'),
						encounter: encounter
					});

					pathology.save();
				}
				
				encounter.save();


				self.get('controllers.patient.model').save();
				self.setProperties({
					dateOfEncounter: moment().format('MM-DD-YYYY'),
					selectedPresentingSymptoms: null,
					selectedPreoperativeDiagnosis: null,
					selectedPastSurgicalHistory: null,
					selectedScanType: null,
					dateOfLab: null,
					T3: null,
					T4: null,
					TSH: null,
					T3uptake: null,
					AMcortisol: null,
					PMcortisol: null,
					prolactin: null,
					somatomedin: null,
					testosterone: null,
					growthHormone: null,
					freeTestEst: null,
					aldosterone: null,
					LS: null,
					FSH: null,
					ACTH: null,
					dateOfScan: null,
					selectedTumorSize: null,
					selectedTumorLocation: null,
					selectedMetastasis: null,
					selectedLateralExpansion: null,
					selectedHistologicDiagnosis: null,
					selectedTumorDescription: null,
					neuroExamStatus: false,
					labStatus: true,
					imagingStatus: true,
					pathologyStatus: true,
					dateOfSurgPathReport: null,
					pathologyDisabled: true,
					imagingDisabled: true,
					labDisabled: true,
					examDisabled: true
				});

			});


				
			this.transitionToRoute('patient', this.get('controllers.patient.id'));
		},
		setNeuroExamStatus: function(arg) {
			if (arg === 'Normal') {
				this.set('neuroExamStatus', true);
			} else {
				this.set('neuroExamStatus', false);
				this.set('examDisabled', false);
			}
		},
		setLabStatus: function(arg) {
			if (arg === true) {
				console.log(this.get('labStatus'));
				this.set('labStatus', true);
				this.set('labDisabled', false);
				console.log(this.get('labStatus'));
			} else {
				this.set('labStatus', false);
			}
		},
		setImagingStatus: function(arg) {
			if (arg === 'Available') {
				this.set('imagingStatus', true);
				this.set('imagingDisabled', false);
			} else {
				this.set('imagingStatus', false);
			}
		},
		setPathologyStatus: function(arg) {
			if (arg === 'Available') {
				this.set('pathologyStatus', true);
				this.set('pathologyDisabled', false);
			} else {
				this.set('pathologyStatus', false);
			}
		}
	}

});
