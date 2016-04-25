var Child = require('./Child.jsx');

var Parent = React.createClass({
  render: ()=> (
      <div>
        <div> Hello react World !!!!</div>
        <Child/>
      </div>
    )
});

module.exports = Parent;