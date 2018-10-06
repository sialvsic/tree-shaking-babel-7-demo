"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Apple = exports.Person = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(_ref) {
    var name = _ref.name,
        age = _ref.age,
        sex = _ref.sex;

    _classCallCheck(this, Person);

    this.className = 'Person';
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  _createClass(Person, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return Person;
}();

exports.Person = Person;

var Apple =
/*#__PURE__*/
function () {
  function Apple(_ref2) {
    var model = _ref2.model;

    _classCallCheck(this, Apple);

    this.className = 'Apple';
    this.model = model;
  }

  _createClass(Apple, [{
    key: "getModel",
    value: function getModel() {
      return this.model;
    }
  }]);

  return Apple;
}();

exports.Apple = Apple;