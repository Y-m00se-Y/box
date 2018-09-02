var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

var conLog = function() {
	console.log('-----------------------------------------------------------------------')
	console.log('Div Id = ' + dataId);
	console.log('Header: ' + dataTitle);
	console.log('Content: ' + dataContent);
	console.log('Header Class = ' + dataHeader);
	console.log('Div Class = ' + dataDivHigh);
	console.log('Div Class = ' + dataDivImp);
	console.log('Output text: ' + dataText);
}
var output = document.getElementsByTagName('body');

for (let i = 0; i < data.length; i++) {
	var dataDivHigh = '';
	var dataDivImp = '';
	var dataHeader = '';
	
	var dataId = data[i].id;
	var dataTitle = data[i].title;
	var dataContent = data[i].content;
	
	for (let n = 0; n < data[i].categories.length; n++) {
		var dataClass = data[i].categories[n];
		if (dataClass == 'special-header') {
			var dataHeader = dataClass;
			
		}
		else if (dataClass == 'highlighted') {
			var dataDivHigh = dataClass;
			
		}
		else if (dataClass == 'important') {
			var dataDivImp = dataClass;
			
		}
	}
	var dataText = '<div id=\"' + dataId + '\" class=\"' + dataDivHigh + ' ' + dataDivImp + '\"><header class=\"' + dataHeader + '\">' + dataTitle + '</header>' + dataContent + '</div>';
	output[0].insertAdjacentHTML('beforeend', dataText);
	conLog();
}
