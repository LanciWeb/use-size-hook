'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

const useSize = () => {
  const nullSize = {
    width: null,
    height: null,
  };
  const [currentSize, setCurrentSize] = (0, _react.useState)(nullSize);

  const getSize = (elements) => {
    var _el$offsetWidth, _el$offsetHeight;

    const el = elements[0].target;
    if (!el) return;
    let width =
      (_el$offsetWidth = el.offsetWidth) !== null && _el$offsetWidth !== void 0
        ? _el$offsetWidth
        : 0;
    let height =
      (_el$offsetHeight = el.offsetHeight) !== null &&
      _el$offsetHeight !== void 0
        ? _el$offsetHeight
        : 0;
    setCurrentSize({
      width,
      height,
    });
  };

  const target = (0, _react.useCallback)((element) => {
    if (element) {
      new ResizeObserver(getSize).observe(element);
    }
  }, []);
  return [target, currentSize];
};

var _default = useSize;
exports.default = _default;
