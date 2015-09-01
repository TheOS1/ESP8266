	function init() {

	humGauge = new steelseries.Radial('gaugeCanvas1', {
	    gaugeType: steelseries.GaugeType.TYPE4,
	    minValue:0,
	    maxValue:100,
	    size: 250,
	    frameDesign: steelseries.FrameDesign.STEEL,
	    knobStyle: steelseries.KnobStyle.STEEL,
	    pointerType: steelseries.PointerType.TYPE5,
	    lcdDecimals: 0,
	    section: null,
	    area: null,
	    titleString: 'Humidity',
	    unitString: '%',
	    threshold: 50.00,
	    lcdVisible: true,
	    lcdDecimals: 2
	   });
	//humGauge.setValue(uptmp());


	tempGauge = new steelseries.Radial('gaugeCanvas', {
	    gaugeType: steelseries.GaugeType.TYPE4,
	    minValue:-20,
	    maxValue:50,
	    size: 250,
	    frameDesign: steelseries.FrameDesign.STEEL,
	    knobStyle: steelseries.KnobStyle.STEEL,
	    pointerType: steelseries.PointerType.TYPE5,
	    lcdDecimals: 0,
	    section: null,
	    area: null,
	    titleString: 'Temperature',
	    unitString: 'C',
	    threshold: 29.50,
	    lcdVisible: true,
	    lcdDecimals: 2
	   });
	//tempGauge.setValue(uptmp());


    }
    