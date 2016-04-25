var Parent = require('./components/Parent.jsx');
var Parent = require('./components/Tabselector.jsx');
React.render(< Parent/>, document.getElementById('app'));

var data = [
{name: 'Red', value: 'red'},
{name: 'Blue', value: 'blue'},
{name: 'Yellow', value: 'yellow'},
{name: 'Green', value: 'green'},
{name: 'White', value: 'White'}
];

React.render(
TabSelector({label: 'Color', data: data, selected: null}),
document.getElementById('container')
);