(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Parent = require('./components/Parent.jsx');
React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./components/Parent.jsx":3}],2:[function(require,module,exports){
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
        ' Hello World!!!'
      ),
      React.createElement(Child, null)
    );
  }
});

module.exports = Parent;

},{"./Child.jsx":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanN4IiwianMvY29tcG9uZW50cy9DaGlsZC5qc3giLCJqcy9jb21wb25lbnRzL1BhcmVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksU0FBUyxRQUFRLHlCQUFSLENBQVQ7QUFDSixNQUFNLE1BQU4sQ0FBYSxvQkFBRSxNQUFGLE9BQWIsRUFBeUIsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXpCOzs7OztBQ0RBLElBQUksUUFBUSxNQUFNLFdBQU4sQ0FBa0I7OztBQUM1QixVQUFRLGtCQUFVO0FBQ2hCLFdBQ0U7Ozs7S0FERixDQURnQjtHQUFWO0NBREUsQ0FBUjs7QUFRSixPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDUkEsSUFBSSxRQUFRLFFBQVEsYUFBUixDQUFSOztBQUVKLElBQUksU0FBUyxNQUFNLFdBQU4sQ0FBa0I7OztBQUM3QixVQUFRLGtCQUFVO0FBQ2hCLFdBQ0U7OztNQUNFOzs7O09BREY7TUFFRSxvQkFBQyxLQUFELE9BRkY7S0FERixDQURnQjtHQUFWO0NBREcsQ0FBVDs7QUFXSixPQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhcmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9QYXJlbnQuanN4Jyk7XG5SZWFjdC5yZW5kZXIoPCBQYXJlbnQvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJ2YXIgQ2hpbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5DaGlsZDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGQ7IiwidmFyIENoaWxkID0gcmVxdWlyZSgnLi9DaGlsZC5qc3gnKTtcblxudmFyIFBhcmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PiBIZWxsbyBXb3JsZCEhITwvZGl2PlxuICAgICAgICA8Q2hpbGQvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJlbnQ7Il19
