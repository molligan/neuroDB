import Ember from "ember";


export default Ember.Controller.extend({
	needs: ['index','patient'],
	encounterType: function() {
		var encounterType = this.get('model.type');
		if (encounterType === 'Clinic Visit') {
			return true;
		} else {
			return false;
		}
	}.property('model.type'),
  	preoperativeDiagnosis: function () {
		var diagnosis = this.get('model.preoperativeDiagnosis');
		return diagnosis;
	}.property('model.preoperativeDiagnosis'),

	presentingSymptoms: function () {
		var symptoms = this.get('model.presentingSymptoms');
		if (symptoms.search(',') === -1) {
			if(symptoms === '') {
				return 'No Symptoms';
			} else {
				return symptoms.split();
			}
		} else {
			return symptoms.split(',');
		}
	}.property('model.presentingSymptoms'),

	pastSurgicalHistory: function () {
		var psh = this.get('model.pastSurgicalHistory');
		if (psh.search(',') === -1) {
			if(psh === '') {
				return new Array('No PSH');
			} else {
				return psh.split();
			}
		} else {
			return psh.split(',');
		}
	}.property('model.pastSurgicalHistory'),
	cnI: function () {
		$('#cnIlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnI') !== 'Normal') {
					$('#cnIlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnI'),
	cnIILeft: function () {
		$('#cnIILeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIILeft') !== 'Normal') {
					$('#cnIILeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIILeft'),
	cnIIRight: function () {
		$('#cnIIRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIIRight') !== 'Normal') {
					$('#cnIIRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIIRight'),
	cnIIILeft: function () {
		$('#cnIIILeftlabel').removeClass().addClass('tiny fluid ui button');
		$('#cnIIILeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIIILeft') !== 'Normal') {
					$('#cnIIILeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIIILeft'),
	cnIIIRight: function () {
		$('#cnIIIRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIIIRight') !== 'Normal') {
					$('#cnIIIRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIIIRight'),
	cnIVLeft: function () {
		$('#cnIVLeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIVLeft') !== 'Normal') {
					$('#cnIVLeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIVLeft'),
	cnIVRight: function () {
		$('#cnIVRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIVRight') !== 'Normal') {
					$('#cnIVRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIVRight'),
	cnVLeft: function () {
		$('#cnVLeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVLeft') !== 'Normal') {
					$('#cnVLeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVLeft'),
	cnVRight: function () {
		$('#cnVRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVRight') !== 'Normal') {
					$('#cnVRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVRight'),
	cnVILeft: function () {
		$('#cnVILeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVILeft') !== 'Normal') {
					$('#cnVILeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVILeft'),
	cnVIRight: function () {
		$('#cnVIRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVIRight') !== 'Normal') {
					$('#cnVIRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVIRight'),
	cnVIILeft: function () {
		$('#cnVIILeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVIILeft') !== 'Normal') {
					$('#cnVIILeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVIILeft'),
	cnVIIRight: function () {
		$('#cnVIIRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVIIRight') !== 'Normal') {
					$('#cnVIIRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVIIRight'),
	cnVIIILeft: function () {
		$('#cnVIIILeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVIIILeft') !== 'Normal') {
					$('#cnVIIILeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVIIILeft'),
	cnVIIIRight: function () {
		$('#cnVIIIRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnVIIIRight') !== 'Normal') {
					$('#cnVIIIRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnVIIIRight'),
	cnIXLeft: function () {
		$('#cnIXLeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIXLeft') !== 'Normal') {
					$('#cnIXLeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIXLeft'),
	cnIXRight: function () {
		$('#cnIXRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnIXRight') !== 'Normal') {
					$('#cnIXRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnIXRight'),
	cnXLeft: function () {
		$('#cnXLeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnXLeft') !== 'Normal') {
					$('#cnXLeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnXLeft'),
	cnXRight: function () {
		$('#cnXRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnXRight') !== 'Normal') {
					$('#cnXRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnXRight'),
	cnXILeft: function () {
		$('#cnXILeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnXILeft') !== 'Normal') {
					$('#cnXILeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnXILeft'),
	cnXIRight: function () {
		$('#cnXIRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnXIRight') !== 'Normal') {
					$('#cnXIRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnXIRight'),
	cnXIILeft: function () {
		$('#cnXIILeftlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnXIILeft') !== 'Normal') {
					$('#cnXIILeftlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnXIILeft'),
	cnXIIRight: function () {
		$('#cnXIIRightlabel').removeClass().addClass('tiny fluid ui button');
		this.get('model.exams').then(function(exam) {
			exam.forEach(function(foo) {
				if (foo.get('cnXIIRight') !== 'Normal') {
					$('#cnXIIRightlabel').addClass('red');
				}
			});
		});
	}.property('model.exams.@each.exam.cnXIIRight'),
	operatingSurgeon: function () {
		var surgeon = this.get('model.operatingSurgeon');
		if (surgeon.search(',') === -1) {
			return surgeon.split();
		} else {
			return surgeon.split(',');
		}
	}.property('model.operatingSurgeon'),
	tumorLocation: function () {
		var tumor = this.get('model.tumorLocation');
		if (tumor.search(',') === -1) {
			return tumor.split();
		} else {
			return tumor.split(',');
		}
	}.property('model.tumorLocation'),
	approach: function () {
		var approach = this.get('model.approach');
		if (approach.search(',') === -1) {
			return approach.split();
		} else {
			return approach.split(',');
		}
	}.property('model.approach')
	


});