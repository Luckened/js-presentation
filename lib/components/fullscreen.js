"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Fullscreen = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _fullscreenButton = _interopRequireDefault(require("./fullscreen-button"));

var _fullscreen = require("../utils/fullscreen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StyledFullscreen =
/*#__PURE__*/
(0, _reactEmotion["default"])(_fullscreenButton["default"], {
  target: "e4v3eea0"
})("position:absolute;bottom:10px;right:20px;width:45px;height:45px;font-size:30px;color:#fff;transition:300ms transform ease;transform:scale(1);&:hover,&:focus{transform:", function (props) {
  return props.isFullscreen ? 'scale(0.75)' : 'scale(1.25)';
}, ";}&:active{transform:", function (props) {
  return props.isFullscreen ? 'scale(0.90)' : 'scale(1.10)';
}, ";}");

var Fullscreen =
/*#__PURE__*/
function (_Component) {
  _inherits(Fullscreen, _Component);

  function Fullscreen() {
    _classCallCheck(this, Fullscreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fullscreen).apply(this, arguments));
  }

  _createClass(Fullscreen, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(StyledFullscreen, {
        isFullscreen: (0, _fullscreen.isFullscreen)(),
        onClick: this.props.onClick,
        styles: this.context.styles.fullscreen
      });
    }
  }]);

  return Fullscreen;
}(_react.Component);

exports.Fullscreen = Fullscreen;
Fullscreen.contextTypes = {
  styles: _propTypes["default"].object
};
Fullscreen.propTypes = {
  controlColor: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
Fullscreen.defaultProps = {
  onClick: _fullscreen.toggleFullscreen
};
var _default = Fullscreen;
exports["default"] = _default;