"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: r
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (t.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      t.d(r, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return r;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 0);
}([function (e, n, t) {
  e.exports = t(1);
}, function (e, n, t) {
  "use strict";

  function r(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function o(e, n) {
    for (var t = 0; t < n.length; t++) {
      var r = n[t];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  function u(e, n, t) {
    return n && o(e.prototype, n), t && o(e, t), e;
  }

  t.r(n);
  var i = new (function () {
    function e(n) {
      var t = n.model;
      r(this, e), this.className = "Apple", this.model = t;
    }

    return u(e, [{
      key: "getModel",
      value: function value() {
        return this.model;
      }
    }]), e;
  }())({
    model: "IphoneX"
  }).getModel();
  console.log(i);
}]);