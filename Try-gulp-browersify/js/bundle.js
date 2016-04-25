(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Parent = require('./components/Parent.jsx');
var Parent = require('./components/Tabselector.jsx');
React.render(React.createElement(Parent, null), document.getElementById('app'));

var data = [{ name: 'Red', value: 'red' }, { name: 'Blue', value: 'blue' }, { name: 'Yellow', value: 'yellow' }, { name: 'Green', value: 'green' }, { name: 'White', value: 'White' }];

React.render(TabSelector({ label: 'Color', data: data, selected: null }), document.getElementById('container'));

},{"./components/Parent.jsx":3,"./components/Tabselector.jsx":4}],2:[function(require,module,exports){
"use strict";

var Child = React.createClass({
  displayName: "Child",
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Child"
    );
  }
});

module.exports = Child;

},{}],3:[function(require,module,exports){
'use strict';

var Child = require('./Child.jsx');

var Parent = React.createClass({
  displayName: 'Parent',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        ' Hello react World !!!!'
      ),
      React.createElement(Child, null)
    );
  }
});

module.exports = Parent;

},{"./Child.jsx":2}],4:[function(require,module,exports){
'use strict';

var TabSelector = React.createClass({
  displayName: 'TabSelector',

  getInitialState: function getInitialState() {
    return { selected: this.props.selected };
  },

  handleOnClick: function handleOnClick(evt) {
    this.setState({ 'selected': evt.target.getAttribute('data-value') });
  },

  render: function render() {
    var tabs = this.props.data.map(function (item) {
      var selected = item.value == this.state.selected ? 'selected' : '';
      return React.createElement(
        'li',
        { 'data-value': item.value,
          className: selected,
          onClick: this.handleOnClick
        },
        item.name
      );
    }, this);

    return React.createElement(
      'div',
      { className: 'tab-selector' },
      React.createElement(
        'label',
        null,
        this.props.label
      ),
      React.createElement(
        'ul',
        null,
        tabs
      )
    );
  }
});

module.exports = TabSelector;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanN4IiwianMvY29tcG9uZW50cy9DaGlsZC5qc3giLCJqcy9jb21wb25lbnRzL1BhcmVudC5qc3giLCJqcy9jb21wb25lbnRzL1RhYnNlbGVjdG9yLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxTQUFTLFFBQVEseUJBQVIsQ0FBVDtBQUNKLElBQUksU0FBUyxRQUFRLDhCQUFSLENBQVQ7QUFDSixNQUFNLE1BQU4sQ0FBYSxvQkFBRSxNQUFGLE9BQWIsRUFBeUIsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXpCOztBQUVBLElBQUksT0FBTyxDQUNYLEVBQUMsTUFBTSxLQUFOLEVBQWEsT0FBTyxLQUFQLEVBREgsRUFFWCxFQUFDLE1BQU0sTUFBTixFQUFjLE9BQU8sTUFBUCxFQUZKLEVBR1gsRUFBQyxNQUFNLFFBQU4sRUFBZ0IsT0FBTyxRQUFQLEVBSE4sRUFJWCxFQUFDLE1BQU0sT0FBTixFQUFlLE9BQU8sT0FBUCxFQUpMLEVBS1gsRUFBQyxNQUFNLE9BQU4sRUFBZSxPQUFPLE9BQVAsRUFMTCxDQUFQOztBQVFKLE1BQU0sTUFBTixDQUNBLFlBQVksRUFBQyxPQUFPLE9BQVAsRUFBZ0IsTUFBTSxJQUFOLEVBQVksVUFBVSxJQUFWLEVBQXpDLENBREEsRUFFQSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FGQTs7Ozs7QUNaQSxJQUFJLFFBQVEsTUFBTSxXQUFOLENBQWtCOztBQUM1Qiw0QkFBUTtBQUNOLFdBQ0U7Ozs7S0FERixDQURNO0dBRG9CO0NBQWxCLENBQVI7O0FBUUosT0FBTyxPQUFQLEdBQWlCLEtBQWpCOzs7OztBQ1JBLElBQUksUUFBUSxRQUFRLGFBQVIsQ0FBUjs7QUFFSixJQUFJLFNBQVMsTUFBTSxXQUFOLENBQWtCOzs7QUFDN0IsVUFBUTtXQUNKOzs7TUFDRTs7OztPQURGO01BRUUsb0JBQUMsS0FBRCxPQUZGOztHQURJO0NBREcsQ0FBVDs7QUFTSixPQUFPLE9BQVAsR0FBaUIsTUFBakI7Ozs7O0FDWEEsSUFBSSxjQUFjLE1BQU0sV0FBTixDQUFrQjs7O0FBQ2xDLG1CQUFpQiwyQkFBVztBQUMxQixXQUFPLEVBQUMsVUFBVSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQWxCLENBRDBCO0dBQVg7O0FBSWpCLGlCQUFlLHVCQUFVLEdBQVYsRUFBZTtBQUM1QixTQUFLLFFBQUwsQ0FBYyxFQUFDLFlBQVksSUFBSSxNQUFKLENBQVcsWUFBWCxDQUF3QixZQUF4QixDQUFaLEVBQWYsRUFENEI7R0FBZjs7QUFJZixVQUFRLGtCQUFXO0FBQ2pCLFFBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQW9CLFVBQVUsSUFBVixFQUFnQjtBQUM3QyxVQUFJLFdBQVcsS0FBSyxLQUFMLElBQWMsS0FBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixVQUFwQyxHQUFpRCxFQUFqRCxDQUQ4QjtBQUU3QyxhQUNFOztVQUFJLGNBQVksS0FBSyxLQUFMO0FBQ2QscUJBQVcsUUFBWDtBQUNBLG1CQUFTLEtBQUssYUFBTDtTQUZYO1FBR0UsS0FBSyxJQUFMO09BSkosQ0FGNkM7S0FBaEIsRUFRNUIsSUFSUSxDQUFQLENBRGE7O0FBV2pCLFdBQ0U7O1FBQUssV0FBVSxjQUFWLEVBQUw7TUFDRTs7O1FBQVEsS0FBSyxLQUFMLENBQVcsS0FBWDtPQURWO01BRUU7OztRQUNHLElBREg7T0FGRjtLQURGLENBWGlCO0dBQVg7Q0FUUSxDQUFkOztBQStCSixPQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhcmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9QYXJlbnQuanN4Jyk7XG52YXIgUGFyZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1RhYnNlbGVjdG9yLmpzeCcpO1xuUmVhY3QucmVuZGVyKDwgUGFyZW50Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbnZhciBkYXRhID0gW1xue25hbWU6ICdSZWQnLCB2YWx1ZTogJ3JlZCd9LFxue25hbWU6ICdCbHVlJywgdmFsdWU6ICdibHVlJ30sXG57bmFtZTogJ1llbGxvdycsIHZhbHVlOiAneWVsbG93J30sXG57bmFtZTogJ0dyZWVuJywgdmFsdWU6ICdncmVlbid9LFxue25hbWU6ICdXaGl0ZScsIHZhbHVlOiAnV2hpdGUnfVxuXTtcblxuUmVhY3QucmVuZGVyKFxuVGFiU2VsZWN0b3Ioe2xhYmVsOiAnQ29sb3InLCBkYXRhOiBkYXRhLCBzZWxlY3RlZDogbnVsbH0pLFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4pOyIsInZhciBDaGlsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+Q2hpbGQ8L2Rpdj5cbiAgICApXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkOyIsInZhciBDaGlsZCA9IHJlcXVpcmUoJy4vQ2hpbGQuanN4Jyk7XG5cbnZhciBQYXJlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogKCk9PiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PiBIZWxsbyByZWFjdCBXb3JsZCAhISEhPC9kaXY+XG4gICAgICAgIDxDaGlsZC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJlbnQ7IiwidmFyIFRhYlNlbGVjdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7c2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWR9O1xuICB9LFxuXG4gIGhhbmRsZU9uQ2xpY2s6IGZ1bmN0aW9uIChldnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsnc2VsZWN0ZWQnOiBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpfSlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0YWJzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIHNlbGVjdGVkID0gaXRlbS52YWx1ZSA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGRhdGEtdmFsdWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uQ2xpY2t9XG4gICAgICAgID57aXRlbS5uYW1lfTwvbGk+XG4gICAgICApO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXNlbGVjdG9yXCI+XG4gICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUYWJTZWxlY3RvciJdfQ==
