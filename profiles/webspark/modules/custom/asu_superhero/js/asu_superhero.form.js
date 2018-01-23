(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _superheroConfigs = require('./superheroConfigs.jsx');

var _superheroConfigs2 = _interopRequireDefault(_superheroConfigs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(superheroConfigs, 'THE SUPERHERO CONFIGS OUTSIDE OF WRAPPER');
(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.asu_superhero_form = {
        attach: function attach(context, settings) {

            var react_configs = drupalSettings.asu_superhero;

            for (var property in react_configs) {
                if (react_configs.hasOwnProperty(property)) {
                    // do stuff
                    var config = react_configs[property];

                    ReactDOM.render(React.createElement(_superheroConfigs2.default, config), document.getElementById(config.superhero_react_id));
                }
            }
        }
    };
})(jQuery, Drupal, drupalSettings); /**
                                     * Created by ctestama on 1/9/18.
                                     */

},{"./superheroConfigs.jsx":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by ctestama on 1/5/18.
 */
var superheroConfigs = function (_React$Component) {
    _inherits(superheroConfigs, _React$Component);

    function superheroConfigs(props) {
        _classCallCheck(this, superheroConfigs);

        // todo: pass configs from Drupal
        var _this = _possibleConstructorReturn(this, (superheroConfigs.__proto__ || Object.getPrototypeOf(superheroConfigs)).call(this, props));

        _this.state = props.configs;

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.setDrupalField();
        return _this;
    }

    _createClass(superheroConfigs, [{
        key: "handleInputChange",
        value: function handleInputChange(event) {
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value), this.setDrupalField);
        }
    }, {
        key: "setDrupalField",
        value: function setDrupalField() {
            var input = document.getElementById(this.props.superhero_input_id);
            input.value = JSON.stringify(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                null,
                React.createElement(
                    "label",
                    null,
                    "Button 1 Title:",
                    React.createElement("input", {
                        name: "buttonTitle1",
                        type: "textfield",
                        checked: this.state.buttonTitle1,
                        onChange: this.handleInputChange })
                ),
                React.createElement("br", null),
                React.createElement(
                    "label",
                    null,
                    "Button 1 Url:",
                    React.createElement("input", {
                        name: "buttonUrl1",
                        type: "textField",
                        value: this.state.buttonUrl1,
                        onChange: this.handleInputChange })
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "label",
                    null,
                    "Button 2 Title:",
                    React.createElement("input", {
                        name: "buttonTitle2",
                        type: "textfield",
                        checked: this.state.buttonTitle2,
                        onChange: this.handleInputChange })
                ),
                React.createElement("br", null),
                React.createElement(
                    "label",
                    null,
                    "Button 2 Url:",
                    React.createElement("input", {
                        name: "buttonUrl2",
                        type: "textField",
                        value: this.state.buttonUrl2,
                        onChange: this.handleInputChange })
                )
            );
        }
    }]);

    return superheroConfigs;
}(React.Component);

exports.default = superheroConfigs;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2N1c3RvbS9hc3Vfc3VwZXJoZXJvL2pzL3JlYWN0X2Zvcm0vYXN1U3VwZXJoZXJvRm9ybUluaXQuanN4IiwibW9kdWxlcy9jdXN0b20vYXN1X3N1cGVyaGVyby9qcy9yZWFjdF9mb3JtL3N1cGVyaGVyb0NvbmZpZ3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQTs7Ozs7O0FBRUE7QUFDQSxDQUFDLFVBQVUsQ0FBVixFQUFhLE1BQWIsRUFBcUIsY0FBckIsRUFBcUM7QUFDbEMsV0FBTyxTQUFQLENBQWlCLGtCQUFqQixHQUFzQztBQUNsQyxnQkFBUSxnQkFBVSxPQUFWLEVBQW1CLFFBQW5CLEVBQTZCOztBQUU3QixnQkFBSSxnQkFBZ0IsZUFBZSxhQUFuQzs7QUFFQSxpQkFBSyxJQUFJLFFBQVQsSUFBcUIsYUFBckIsRUFBb0M7QUFDaEMsb0JBQUksY0FBYyxjQUFkLENBQTZCLFFBQTdCLENBQUosRUFBNEM7QUFDeEM7QUFDQSx3QkFBSSxTQUFTLGNBQWMsUUFBZCxDQUFiOztBQUVBLDZCQUFTLE1BQVQsQ0FBZ0IsTUFBTSxhQUFOLDZCQUFzQyxNQUF0QyxDQUFoQixFQUFnRSxTQUFTLGNBQVQsQ0FBd0IsT0FBTyxrQkFBL0IsQ0FBaEU7QUFDSDtBQUNKO0FBQ1I7QUFiaUMsS0FBdEM7QUFlSCxDQWhCRCxFQWdCRyxNQWhCSCxFQWdCVyxNQWhCWCxFQWdCbUIsY0FoQm5CLEUsQ0FOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7OztJQUdNLGdCOzs7QUFFRiw4QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBR2Y7QUFIZSx3SUFDVCxLQURTOztBQUlmLGNBQUssS0FBTCxHQUFhLE1BQU0sT0FBbkI7O0FBRUEsY0FBSyxpQkFBTCxHQUF5QixNQUFLLGlCQUFMLENBQXVCLElBQXZCLE9BQXpCO0FBQ0EsY0FBSyxjQUFMO0FBUGU7QUFRbEI7Ozs7MENBRWlCLEssRUFBTztBQUNyQixnQkFBTSxTQUFTLE1BQU0sTUFBckI7QUFDQSxnQkFBTSxRQUFRLE9BQU8sSUFBUCxLQUFnQixVQUFoQixHQUE2QixPQUFPLE9BQXBDLEdBQThDLE9BQU8sS0FBbkU7QUFDQSxnQkFBTSxPQUFPLE9BQU8sSUFBcEI7O0FBRUEsaUJBQUssUUFBTCxxQkFFUyxJQUZULEVBRWdCLEtBRmhCLEdBSUksS0FBSyxjQUpUO0FBTUg7Ozt5Q0FFZ0I7QUFDYixnQkFBTSxRQUFRLFNBQVMsY0FBVCxDQUF3QixLQUFLLEtBQUwsQ0FBVyxrQkFBbkMsQ0FBZDtBQUNBLGtCQUFNLEtBQU4sR0FBYyxLQUFLLFNBQUwsQ0FBZSxLQUFLLEtBQXBCLENBQWQ7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFFSTtBQUNJLDhCQUFLLGNBRFQ7QUFFSSw4QkFBSyxXQUZUO0FBR0ksaUNBQVMsS0FBSyxLQUFMLENBQVcsWUFIeEI7QUFJSSxrQ0FBVSxLQUFLLGlCQUpuQjtBQUZKLGlCQURKO0FBVVEsK0NBVlI7QUFXSTtBQUFBO0FBQUE7QUFBQTtBQUVJO0FBQ0ksOEJBQUssWUFEVDtBQUVJLDhCQUFLLFdBRlQ7QUFHSSwrQkFBTyxLQUFLLEtBQUwsQ0FBVyxVQUh0QjtBQUlJLGtDQUFVLEtBQUssaUJBSm5CO0FBRkosaUJBWEo7QUFtQlEsK0NBbkJSO0FBbUJhLCtDQW5CYjtBQW9CSTtBQUFBO0FBQUE7QUFBQTtBQUVJO0FBQ0ksOEJBQUssY0FEVDtBQUVJLDhCQUFLLFdBRlQ7QUFHSSxpQ0FBUyxLQUFLLEtBQUwsQ0FBVyxZQUh4QjtBQUlJLGtDQUFVLEtBQUssaUJBSm5CO0FBRkosaUJBcEJKO0FBNkJRLCtDQTdCUjtBQThCSTtBQUFBO0FBQUE7QUFBQTtBQUVJO0FBQ0ksOEJBQUssWUFEVDtBQUVJLDhCQUFLLFdBRlQ7QUFHSSwrQkFBTyxLQUFLLEtBQUwsQ0FBVyxVQUh0QjtBQUlJLGtDQUFVLEtBQUssaUJBSm5CO0FBRko7QUE5QkosYUFESjtBQXlDSDs7OztFQXhFMEIsTUFBTSxTOztrQkEyRXRCLGdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBjdGVzdGFtYSBvbiAxLzkvMTguXG4gKi9cbmltcG9ydCBzdXBlcmhlcm9Db25maWdzIGZyb20gJy4vc3VwZXJoZXJvQ29uZmlncy5qc3gnXG5cbi8vY29uc29sZS5sb2coc3VwZXJoZXJvQ29uZmlncywgJ1RIRSBTVVBFUkhFUk8gQ09ORklHUyBPVVRTSURFIE9GIFdSQVBQRVInKTtcbihmdW5jdGlvbiAoJCwgRHJ1cGFsLCBkcnVwYWxTZXR0aW5ncykge1xuICAgIERydXBhbC5iZWhhdmlvcnMuYXN1X3N1cGVyaGVyb19mb3JtID0ge1xuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlYWN0X2NvbmZpZ3MgPSBkcnVwYWxTZXR0aW5ncy5hc3Vfc3VwZXJoZXJvO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcmVhY3RfY29uZmlncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhY3RfY29uZmlncy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIHN0dWZmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RfY29uZmlnc1twcm9wZXJ0eV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KHN1cGVyaGVyb0NvbmZpZ3MsIGNvbmZpZyksICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuc3VwZXJoZXJvX3JlYWN0X2lkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSkoalF1ZXJ5LCBEcnVwYWwsIGRydXBhbFNldHRpbmdzKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3Rlc3RhbWEgb24gMS81LzE4LlxuICovXG5jbGFzcyBzdXBlcmhlcm9Db25maWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyB0b2RvOiBwYXNzIGNvbmZpZ3MgZnJvbSBEcnVwYWxcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzLmNvbmZpZ3M7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXREcnVwYWxGaWVsZCgpO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5zZXREcnVwYWxGaWVsZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNldERydXBhbEZpZWxkKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuc3VwZXJoZXJvX2lucHV0X2lkKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvbiAxIFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJidXR0b25UaXRsZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmJ1dHRvblRpdGxlMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvbiAxIFVybDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9uVXJsMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dEZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJ1dHRvblVybDF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBCdXR0b24gMiBUaXRsZTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9uVGl0bGUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0ZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5idXR0b25UaXRsZTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cblxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBCdXR0b24gMiBVcmw6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJ1dHRvblVybDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRGaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5idXR0b25VcmwyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGVyaGVyb0NvbmZpZ3M7Il19
