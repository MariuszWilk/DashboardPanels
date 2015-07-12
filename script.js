

// retireve data //

var xlabels = [];

var lineData01 = [];
var lineData02 = [];
var lineData03 = [];

var barData01 = [];
var barData02 = [];
var barData03 = [];

var len = data.labels.length

for(i=5; i>0; i--){
    var fromBack = len - i;
    xlabels.push(data.labels[fromBack]);
    lineData01.push(data.numbers[0].lineData01[fromBack]);
    lineData02.push(data.numbers[1].lineData02[fromBack]);
    lineData03.push(data.numbers[2].lineData03[fromBack]);
    barData01.push(data.numbers[0].barData01[fromBack]);
    barData02.push(data.numbers[1].barData02[fromBack]);
    barData03.push(data.numbers[2].barData03[fromBack]);
}


// define graphs //

xlabels[xlabels.length - 1] = xlabels[xlabels.length - 1].replace(' ','&nbsp');


var lineChart = new Chartist.Line(
	'#lineChart',        
	{
		labels: xlabels,  
		series: [
			{name: 'one', data: lineData01},
			{name: 'two', data: lineData02},
			{name: 'three', data: lineData03}
		]
	}, 
	{
		axisY: {
            type: Chartist.FixedScaleAxis,                       
            ticks: ["$", 500, 1000],
            low: 0,
            high: 1000,
            labelOffset: {
		      x: 0,
		      y: 5
		    }
        },
        axisX: {
	        labelOffset: {
		      x: -20,
		      y: 0
		    },
		    showGrid: false,
		}, 
		series: {'one': {showArea: true}},
		lineSmooth: false,
		fullWidth: true,
		chartPadding: {
			right: 50
		}
	}
);

var barChart = new Chartist.Bar(
	'#barChart', 
	{
	    labels: xlabels,
	    series: [
			{name: 'one', data: barData01},
			{name: 'two', data: barData02},
			{name: 'three', data: barData03}
		]
	},
	{
		axisY: { 
			type: Chartist.FixedScaleAxis, 
            low: 0,
            high: 10,                     
            ticks: [0, 5, 10]
        }, 
        axisX: {
		    showGrid: false
		},
	}
);


lineChart.on('draw', function(data) {
  if(data.type === 'point') {
    var circle = new Chartist.Svg('circle', {
      cx: [data.x], cy:[data.y], r:[6],
    }, 'ct-circle');
    data.element.replace(circle);
  }
});
