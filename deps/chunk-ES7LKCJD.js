import {
  CacheProvider,
  Global,
  ThemeContext,
  _extends,
  getRegisteredStyles,
  init_emotion_react_browser_esm,
  init_emotion_serialize_browser_esm,
  init_emotion_use_insertion_effect_with_fallbacks_browser_esm,
  init_emotion_utils_browser_esm,
  init_extends,
  insertStyles,
  registerStyles,
  serializeStyles,
  useInsertionEffectAlwaysWithSyncFallback,
  withEmotionCache
} from "./chunk-WPIFUIVQ.js";
import {
  createCache,
  init_emotion_cache_browser_esm,
  init_emotion_memoize_esm,
  memoize
} from "./chunk-NJZGMTI6.js";
import {
  require_jsx_runtime
} from "./chunk-ZYX7IIE4.js";
import {
  require_react
} from "./chunk-HS5T2ZWL.js";
import {
  __commonJS,
  __esm,
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}
var init_chainPropTypes = __esm({
  "node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js"() {
  }
});

// node_modules/@mui/utils/esm/chainPropTypes/index.js
var init_chainPropTypes2 = __esm({
  "node_modules/@mui/utils/esm/chainPropTypes/index.js"() {
    init_chainPropTypes();
  }
});

// node_modules/@mui/utils/esm/deepmerge.js
function isPlainObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
var init_deepmerge = __esm({
  "node_modules/@mui/utils/esm/deepmerge.js"() {
    init_extends();
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol2 = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement4, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement4(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement4(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@mui/utils/esm/elementAcceptingRef.js
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var import_prop_types, elementAcceptingRef, elementAcceptingRef_default;
var init_elementAcceptingRef = __esm({
  "node_modules/@mui/utils/esm/elementAcceptingRef.js"() {
    import_prop_types = __toESM(require_prop_types());
    init_chainPropTypes2();
    elementAcceptingRef = chainPropTypes(import_prop_types.default.element, acceptingRef);
    elementAcceptingRef.isRequired = chainPropTypes(import_prop_types.default.element.isRequired, acceptingRef);
    elementAcceptingRef_default = elementAcceptingRef;
  }
});

// node_modules/@mui/utils/esm/elementTypeAcceptingRef.js
function isClassComponent2(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent2(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var import_prop_types2, elementTypeAcceptingRef_default;
var init_elementTypeAcceptingRef = __esm({
  "node_modules/@mui/utils/esm/elementTypeAcceptingRef.js"() {
    import_prop_types2 = __toESM(require_prop_types());
    init_chainPropTypes2();
    elementTypeAcceptingRef_default = chainPropTypes(import_prop_types2.default.elementType, elementTypeAcceptingRef);
  }
});

// node_modules/@mui/utils/esm/exactProp/exactProp.js
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return _extends({}, propTypes, {
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  });
}
var specialProperty;
var init_exactProp = __esm({
  "node_modules/@mui/utils/esm/exactProp/exactProp.js"() {
    init_extends();
    specialProperty = "exact-prop: ​";
  }
});

// node_modules/@mui/utils/esm/exactProp/index.js
var init_exactProp2 = __esm({
  "node_modules/@mui/utils/esm/exactProp/index.js"() {
    init_exactProp();
  }
});

// node_modules/@mui/utils/esm/formatMuiErrorMessage.js
var init_formatMuiErrorMessage = __esm({
  "node_modules/@mui/utils/esm/formatMuiErrorMessage.js"() {
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/@mui/utils/esm/getDisplayName.js
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || "";
}
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}
var import_react_is, fnNameMatchRegex;
var init_getDisplayName = __esm({
  "node_modules/@mui/utils/esm/getDisplayName.js"() {
    import_react_is = __toESM(require_react_is2());
    fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
  }
});

// node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`);
  }
  return null;
}
var init_HTMLElementType = __esm({
  "node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js"() {
  }
});

// node_modules/@mui/utils/esm/HTMLElementType/index.js
var init_HTMLElementType2 = __esm({
  "node_modules/@mui/utils/esm/HTMLElementType/index.js"() {
    init_HTMLElementType();
  }
});

// node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js
var ponyfillGlobal_default;
var init_ponyfillGlobal = __esm({
  "node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js"() {
    ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
  }
});

// node_modules/@mui/utils/esm/ponyfillGlobal/index.js
var init_ponyfillGlobal2 = __esm({
  "node_modules/@mui/utils/esm/ponyfillGlobal/index.js"() {
    init_ponyfillGlobal();
  }
});

// node_modules/@mui/utils/esm/refType.js
var import_prop_types3, refType, refType_default;
var init_refType = __esm({
  "node_modules/@mui/utils/esm/refType.js"() {
    import_prop_types3 = __toESM(require_prop_types());
    refType = import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]);
    refType_default = refType;
  }
});

// node_modules/@mui/utils/esm/capitalize/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var init_capitalize = __esm({
  "node_modules/@mui/utils/esm/capitalize/capitalize.js"() {
    init_formatMuiErrorMessage();
  }
});

// node_modules/@mui/utils/esm/capitalize/index.js
var init_capitalize2 = __esm({
  "node_modules/@mui/utils/esm/capitalize/index.js"() {
    init_capitalize();
  }
});

// node_modules/@mui/utils/esm/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
var init_createChainedFunction = __esm({
  "node_modules/@mui/utils/esm/createChainedFunction.js"() {
  }
});

// node_modules/@mui/utils/esm/debounce/debounce.js
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
var init_debounce = __esm({
  "node_modules/@mui/utils/esm/debounce/debounce.js"() {
  }
});

// node_modules/@mui/utils/esm/debounce/index.js
var init_debounce2 = __esm({
  "node_modules/@mui/utils/esm/debounce/index.js"() {
    init_debounce();
    init_debounce();
  }
});

// node_modules/@mui/utils/esm/deprecatedPropType.js
function deprecatedPropType(validator2, reason) {
  if (false) {
    return () => null;
  }
  return (props, propName, componentName, location, propFullName) => {
    const componentNameSafe = componentName || "<<anonymous>>";
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== "undefined") {
      return new Error(`The ${location} \`${propFullNameSafe}\` of \`${componentNameSafe}\` is deprecated. ${reason}`);
    }
    return null;
  };
}
var init_deprecatedPropType = __esm({
  "node_modules/@mui/utils/esm/deprecatedPropType.js"() {
  }
});

// node_modules/@mui/utils/esm/isMuiElement.js
function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return React.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName
  ) !== -1;
}
var React;
var init_isMuiElement = __esm({
  "node_modules/@mui/utils/esm/isMuiElement.js"() {
    React = __toESM(require_react());
  }
});

// node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
var init_ownerDocument = __esm({
  "node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"() {
  }
});

// node_modules/@mui/utils/esm/ownerDocument/index.js
var init_ownerDocument2 = __esm({
  "node_modules/@mui/utils/esm/ownerDocument/index.js"() {
    init_ownerDocument();
  }
});

// node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}
var init_ownerWindow = __esm({
  "node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js"() {
    init_ownerDocument2();
  }
});

// node_modules/@mui/utils/esm/ownerWindow/index.js
var init_ownerWindow2 = __esm({
  "node_modules/@mui/utils/esm/ownerWindow/index.js"() {
    init_ownerWindow();
  }
});

// node_modules/@mui/utils/esm/requirePropFactory.js
function requirePropFactory(componentNameInError, Component) {
  if (false) {
    return () => null;
  }
  const prevPropTypes = Component ? _extends({}, Component.propTypes) : null;
  const requireProp = (requiredProp) => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes == null ? void 0 : prevPropTypes[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== "undefined" && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of \`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}
var init_requirePropFactory = __esm({
  "node_modules/@mui/utils/esm/requirePropFactory.js"() {
    init_extends();
  }
});

// node_modules/@mui/utils/esm/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
var init_setRef = __esm({
  "node_modules/@mui/utils/esm/setRef.js"() {
  }
});

// node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var React2, useEnhancedEffect, useEnhancedEffect_default;
var init_useEnhancedEffect = __esm({
  "node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"() {
    "use client";
    React2 = __toESM(require_react());
    useEnhancedEffect = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
    useEnhancedEffect_default = useEnhancedEffect;
  }
});

// node_modules/@mui/utils/esm/useEnhancedEffect/index.js
var init_useEnhancedEffect2 = __esm({
  "node_modules/@mui/utils/esm/useEnhancedEffect/index.js"() {
    "use client";
    init_useEnhancedEffect();
  }
});

// node_modules/@mui/utils/esm/useId/useId.js
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React3.useState(idOverride);
  const id = idOverride || defaultId;
  React3.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
var React3, globalId, maybeReactUseId;
var init_useId = __esm({
  "node_modules/@mui/utils/esm/useId/useId.js"() {
    "use client";
    React3 = __toESM(require_react());
    globalId = 0;
    maybeReactUseId = React3["useId".toString()];
  }
});

// node_modules/@mui/utils/esm/useId/index.js
var init_useId2 = __esm({
  "node_modules/@mui/utils/esm/useId/index.js"() {
    "use client";
    init_useId();
  }
});

// node_modules/@mui/utils/esm/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== "undefined") {
    return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
  }
  return null;
}
var init_unsupportedProp = __esm({
  "node_modules/@mui/utils/esm/unsupportedProp.js"() {
  }
});

// node_modules/@mui/utils/esm/useControlled/useControlled.js
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React4.useRef(controlled !== void 0);
  const [valueState, setValue] = React4.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React4.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React4.useRef(defaultProp);
    React4.useEffect(() => {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React4.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
var React4;
var init_useControlled = __esm({
  "node_modules/@mui/utils/esm/useControlled/useControlled.js"() {
    "use client";
    React4 = __toESM(require_react());
  }
});

// node_modules/@mui/utils/esm/useControlled/index.js
var init_useControlled2 = __esm({
  "node_modules/@mui/utils/esm/useControlled/index.js"() {
    "use client";
    init_useControlled();
  }
});

// node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
function useEventCallback(fn) {
  const ref = React5.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React5.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var React5, useEventCallback_default;
var init_useEventCallback = __esm({
  "node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"() {
    "use client";
    React5 = __toESM(require_react());
    init_useEnhancedEffect2();
    useEventCallback_default = useEventCallback;
  }
});

// node_modules/@mui/utils/esm/useEventCallback/index.js
var init_useEventCallback2 = __esm({
  "node_modules/@mui/utils/esm/useEventCallback/index.js"() {
    "use client";
    init_useEventCallback();
  }
});

// node_modules/@mui/utils/esm/useForkRef/useForkRef.js
function useForkRef(...refs) {
  return React6.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}
var React6;
var init_useForkRef = __esm({
  "node_modules/@mui/utils/esm/useForkRef/useForkRef.js"() {
    "use client";
    React6 = __toESM(require_react());
    init_setRef();
  }
});

// node_modules/@mui/utils/esm/useForkRef/index.js
var init_useForkRef2 = __esm({
  "node_modules/@mui/utils/esm/useForkRef/index.js"() {
    "use client";
    init_useForkRef();
  }
});

// node_modules/@mui/utils/esm/useIsFocusVisible.js
function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = React7.useCallback((node) => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = React7.useRef(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
var React7, hadKeyboardEvent, hadFocusVisibleRecently, hadFocusVisibleRecentlyTimeout, inputTypesWhitelist;
var init_useIsFocusVisible = __esm({
  "node_modules/@mui/utils/esm/useIsFocusVisible.js"() {
    "use client";
    React7 = __toESM(require_react());
    hadKeyboardEvent = true;
    hadFocusVisibleRecently = false;
    inputTypesWhitelist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      "datetime-local": true
    };
  }
});

// node_modules/@mui/utils/esm/getScrollbarSize.js
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
var init_getScrollbarSize = __esm({
  "node_modules/@mui/utils/esm/getScrollbarSize.js"() {
  }
});

// node_modules/@mui/utils/esm/scrollLeft.js
var init_scrollLeft = __esm({
  "node_modules/@mui/utils/esm/scrollLeft.js"() {
  }
});

// node_modules/@mui/utils/esm/usePreviousProps.js
var React8, usePreviousProps, usePreviousProps_default;
var init_usePreviousProps = __esm({
  "node_modules/@mui/utils/esm/usePreviousProps.js"() {
    "use client";
    React8 = __toESM(require_react());
    usePreviousProps = (value) => {
      const ref = React8.useRef({});
      React8.useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    };
    usePreviousProps_default = usePreviousProps;
  }
});

// node_modules/@mui/utils/esm/getValidReactChildren.js
var React9;
var init_getValidReactChildren = __esm({
  "node_modules/@mui/utils/esm/getValidReactChildren.js"() {
    React9 = __toESM(require_react());
  }
});

// node_modules/@mui/utils/esm/visuallyHidden.js
var visuallyHidden, visuallyHidden_default;
var init_visuallyHidden = __esm({
  "node_modules/@mui/utils/esm/visuallyHidden.js"() {
    visuallyHidden = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    };
    visuallyHidden_default = visuallyHidden;
  }
});

// node_modules/@mui/utils/esm/integerPropType.js
function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case "number":
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return "Infinity";
      }
      if (value !== Math.floor(value)) {
        return "float";
      }
      return "number";
    case "object":
      if (value === null) {
        return "null";
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function ponyfillIsInteger(x) {
  return typeof x === "number" && isFinite(x) && Math.floor(x) === x;
}
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  const propValue = props[propName];
  if (propValue === void 0) {
    return null;
  }
  return requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
var isInteger, integerPropType_default;
var init_integerPropType = __esm({
  "node_modules/@mui/utils/esm/integerPropType.js"() {
    isInteger = Number.isInteger || ponyfillIsInteger;
    validator.isRequired = requiredInteger;
    validatorNoop.isRequired = validatorNoop;
    integerPropType_default = false ? validatorNoop : validator;
  }
});

// node_modules/@mui/utils/esm/resolveProps.js
function resolveProps(defaultProps, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends({}, defaultProps[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        output[propName] = slotProps;
      } else {
        output[propName] = _extends({}, slotProps);
        Object.keys(defaultSlotProps).forEach((slotPropName) => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === void 0) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}
var init_resolveProps = __esm({
  "node_modules/@mui/utils/esm/resolveProps.js"() {
    init_extends();
  }
});

// node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== "") {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}
var init_composeClasses = __esm({
  "node_modules/@mui/utils/esm/composeClasses/composeClasses.js"() {
  }
});

// node_modules/@mui/utils/esm/composeClasses/index.js
var init_composeClasses2 = __esm({
  "node_modules/@mui/utils/esm/composeClasses/index.js"() {
    init_composeClasses();
  }
});

// node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator, createClassNameGenerator, ClassNameGenerator, ClassNameGenerator_default;
var init_ClassNameGenerator = __esm({
  "node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"() {
    defaultGenerator = (componentName) => componentName;
    createClassNameGenerator = () => {
      let generate = defaultGenerator;
      return {
        configure(generator) {
          generate = generator;
        },
        generate(componentName) {
          return generate(componentName);
        },
        reset() {
          generate = defaultGenerator;
        }
      };
    };
    ClassNameGenerator = createClassNameGenerator();
    ClassNameGenerator_default = ClassNameGenerator;
  }
});

// node_modules/@mui/utils/esm/ClassNameGenerator/index.js
var init_ClassNameGenerator2 = __esm({
  "node_modules/@mui/utils/esm/ClassNameGenerator/index.js"() {
    init_ClassNameGenerator();
  }
});

// node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}
var globalStateClassesMapping;
var init_generateUtilityClass = __esm({
  "node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"() {
    init_ClassNameGenerator2();
    globalStateClassesMapping = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      open: "open",
      readOnly: "readOnly",
      required: "required",
      selected: "selected"
    };
  }
});

// node_modules/@mui/utils/esm/generateUtilityClass/index.js
var init_generateUtilityClass2 = __esm({
  "node_modules/@mui/utils/esm/generateUtilityClass/index.js"() {
    init_generateUtilityClass();
    init_generateUtilityClass();
  }
});

// node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}
var init_generateUtilityClasses = __esm({
  "node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"() {
    init_generateUtilityClass2();
  }
});

// node_modules/@mui/utils/esm/generateUtilityClasses/index.js
var init_generateUtilityClasses2 = __esm({
  "node_modules/@mui/utils/esm/generateUtilityClasses/index.js"() {
    init_generateUtilityClasses();
  }
});

// node_modules/@mui/utils/esm/index.js
var init_esm = __esm({
  "node_modules/@mui/utils/esm/index.js"() {
    "use client";
    init_chainPropTypes2();
    init_deepmerge();
    init_deepmerge();
    init_elementAcceptingRef();
    init_elementTypeAcceptingRef();
    init_exactProp2();
    init_formatMuiErrorMessage();
    init_getDisplayName();
    init_HTMLElementType2();
    init_ponyfillGlobal2();
    init_refType();
    init_capitalize2();
    init_createChainedFunction();
    init_debounce2();
    init_deprecatedPropType();
    init_isMuiElement();
    init_ownerDocument2();
    init_ownerWindow2();
    init_requirePropFactory();
    init_setRef();
    init_useEnhancedEffect2();
    init_useId2();
    init_unsupportedProp();
    init_useControlled2();
    init_useEventCallback2();
    init_useForkRef2();
    init_useIsFocusVisible();
    init_getScrollbarSize();
    init_scrollLeft();
    init_usePreviousProps();
    init_getValidReactChildren();
    init_visuallyHidden();
    init_integerPropType();
    init_resolveProps();
    init_composeClasses2();
    init_generateUtilityClass2();
    init_generateUtilityClass2();
    init_generateUtilityClasses2();
    init_ClassNameGenerator2();
  }
});

// node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst && cache ? (0, import_jsx_runtime.jsx)(CacheProvider, {
    value: cache,
    children
  }) : children;
}
var React10, import_prop_types4, import_jsx_runtime, cache;
var init_StyledEngineProvider = __esm({
  "node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js"() {
    "use client";
    React10 = __toESM(require_react());
    import_prop_types4 = __toESM(require_prop_types());
    init_emotion_react_browser_esm();
    init_emotion_cache_browser_esm();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    if (typeof document === "object") {
      cache = createCache({
        key: "css",
        prepend: true
      });
    }
    true ? StyledEngineProvider.propTypes = {
      /**
       * Your component tree.
       */
      children: import_prop_types4.default.node,
      /**
       * By default, the styles are injected last in the <head> element of the page.
       * As a result, they gain more specificity than any other style sheet.
       * If you want to override MUI's styles, set this prop.
       */
      injectFirst: import_prop_types4.default.bool
    } : void 0;
  }
});

// node_modules/@mui/styled-engine/StyledEngineProvider/index.js
var init_StyledEngineProvider2 = __esm({
  "node_modules/@mui/styled-engine/StyledEngineProvider/index.js"() {
    "use client";
    init_StyledEngineProvider();
  }
});

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex, isPropValid;
var init_emotion_is_prop_valid_esm = __esm({
  "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"() {
    init_emotion_memoize_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    isPropValid = memoize(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
      /* Z+1 */
    );
  }
});

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var React11, testOmitPropsOnStringTag, testOmitPropsOnComponent, getDefaultShouldForwardProp, composeShouldForwardProps, ILLEGAL_ESCAPE_SEQUENCE_ERROR, Insertion, createStyled;
var init_emotion_styled_base_browser_esm = __esm({
  "node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"() {
    init_extends();
    React11 = __toESM(require_react());
    init_emotion_is_prop_valid_esm();
    init_emotion_react_browser_esm();
    init_emotion_utils_browser_esm();
    init_emotion_serialize_browser_esm();
    init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
    testOmitPropsOnStringTag = isPropValid;
    testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
      return key !== "theme";
    };
    getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
      return typeof tag === "string" && // 96 is one less than the char code
      // for "a" so this is checking that
      // it's a lowercase character
      tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
    };
    composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
      var shouldForwardProp2;
      if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
          return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
      }
      if (typeof shouldForwardProp2 !== "function" && isReal) {
        shouldForwardProp2 = tag.__emotion_forwardProp;
      }
      return shouldForwardProp2;
    };
    ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
    Insertion = function Insertion2(_ref) {
      var cache2 = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
      registerStyles(cache2, serialized, isStringTag2);
      useInsertionEffectAlwaysWithSyncFallback(function() {
        return insertStyles(cache2, serialized, isStringTag2);
      });
      return null;
    };
    createStyled = function createStyled2(tag, options) {
      if (true) {
        if (tag === void 0) {
          throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
        }
      }
      var isReal = tag.__emotion_real === tag;
      var baseTag = isReal && tag.__emotion_base || tag;
      var identifierName;
      var targetClassName;
      if (options !== void 0) {
        identifierName = options.label;
        targetClassName = options.target;
      }
      var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
      var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
      var shouldUseAs = !defaultShouldForwardProp("as");
      return function() {
        var args = arguments;
        var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== void 0) {
          styles.push("label:" + identifierName + ";");
        }
        if (args[0] == null || args[0].raw === void 0) {
          styles.push.apply(styles, args);
        } else {
          if (args[0][0] === void 0) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
          }
          styles.push(args[0][0]);
          var len = args.length;
          var i = 1;
          for (; i < len; i++) {
            if (args[0][i] === void 0) {
              console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles.push(args[i], args[0][i]);
          }
        }
        var Styled = withEmotionCache(function(props, cache2, ref) {
          var FinalTag = shouldUseAs && props.as || baseTag;
          var className = "";
          var classInterpolations = [];
          var mergedProps = props;
          if (props.theme == null) {
            mergedProps = {};
            for (var key in props) {
              mergedProps[key] = props[key];
            }
            mergedProps.theme = React11.useContext(ThemeContext);
          }
          if (typeof props.className === "string") {
            className = getRegisteredStyles(cache2.registered, classInterpolations, props.className);
          } else if (props.className != null) {
            className = props.className + " ";
          }
          var serialized = serializeStyles(styles.concat(classInterpolations), cache2.registered, mergedProps);
          className += cache2.key + "-" + serialized.name;
          if (targetClassName !== void 0) {
            className += " " + targetClassName;
          }
          var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
          var newProps = {};
          for (var _key in props) {
            if (shouldUseAs && _key === "as")
              continue;
            if (
              // $FlowFixMe
              finalShouldForwardProp(_key)
            ) {
              newProps[_key] = props[_key];
            }
          }
          newProps.className = className;
          newProps.ref = ref;
          return React11.createElement(React11.Fragment, null, React11.createElement(Insertion, {
            cache: cache2,
            serialized,
            isStringTag: typeof FinalTag === "string"
          }), React11.createElement(FinalTag, newProps));
        });
        Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles;
        Styled.__emotion_forwardProp = shouldForwardProp2;
        Object.defineProperty(Styled, "toString", {
          value: function value() {
            if (targetClassName === void 0 && true) {
              return "NO_COMPONENT_SELECTOR";
            }
            return "." + targetClassName;
          }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
          return createStyled2(nextTag, _extends({}, options, nextOptions, {
            shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
          })).apply(void 0, styles);
        };
        return Styled;
      };
    };
  }
});

// node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
var import_react3, tags, newStyled;
var init_emotion_styled_browser_esm = __esm({
  "node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"() {
    init_emotion_styled_base_browser_esm();
    init_extends();
    import_react3 = __toESM(require_react());
    init_emotion_is_prop_valid_esm();
    init_emotion_react_browser_esm();
    init_emotion_utils_browser_esm();
    init_emotion_serialize_browser_esm();
    init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
    tags = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      // SVG
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan"
    ];
    newStyled = createStyled.bind();
    tags.forEach(function(tagName) {
      newStyled[tagName] = newStyled(tagName);
    });
  }
});

// node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme: defaultTheme5 = {}
  } = props;
  const globalStyles = typeof styles === "function" ? (themeInput) => styles(isEmpty(themeInput) ? defaultTheme5 : themeInput) : styles;
  return (0, import_jsx_runtime2.jsx)(Global, {
    styles: globalStyles
  });
}
var React12, import_prop_types5, import_jsx_runtime2;
var init_GlobalStyles = __esm({
  "node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js"() {
    "use client";
    React12 = __toESM(require_react());
    import_prop_types5 = __toESM(require_prop_types());
    init_emotion_react_browser_esm();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    true ? GlobalStyles.propTypes = {
      defaultTheme: import_prop_types5.default.object,
      styles: import_prop_types5.default.oneOfType([import_prop_types5.default.array, import_prop_types5.default.string, import_prop_types5.default.object, import_prop_types5.default.func])
    } : void 0;
  }
});

// node_modules/@mui/styled-engine/GlobalStyles/index.js
var init_GlobalStyles2 = __esm({
  "node_modules/@mui/styled-engine/GlobalStyles/index.js"() {
    "use client";
    init_GlobalStyles();
  }
});

// node_modules/@mui/styled-engine/index.js
function styled(tag, options) {
  const stylesFactory = newStyled(tag, options);
  if (true) {
    return (...styles) => {
      const component = typeof tag === "string" ? `"${tag}"` : "component";
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
      } else if (styles.some((style4) => style4 === void 0)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}
var internal_processStyles;
var init_styled_engine = __esm({
  "node_modules/@mui/styled-engine/index.js"() {
    "use client";
    init_emotion_styled_browser_esm();
    init_emotion_react_browser_esm();
    init_StyledEngineProvider2();
    init_GlobalStyles2();
    internal_processStyles = (tag, processor) => {
      if (Array.isArray(tag.__emotion_styles)) {
        tag.__emotion_styles = processor(tag.__emotion_styles);
      }
    };
  }
});

// node_modules/@mui/system/esm/colorManipulator.js
function clamp(value, min = 0, max = 1) {
  if (true) {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors = color2.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(true ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, color2));
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color2) {
  const {
    type,
    colorSpace
  } = color2;
  let {
    values: values2
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = `${values2[1]}%`;
    values2[2] = `${values2[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values2 = `${colorSpace} ${values2.join(" ")}`;
  } else {
    values2 = `${values2.join(", ")}`;
  }
  return `${type}(${values2})`;
}
function rgbToHex(color2) {
  if (color2.indexOf("#") === 0) {
    return color2;
  }
  const {
    values: values2
  } = decomposeColor(color2);
  return `#${values2.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values2
  } = color2;
  const h = values2[0];
  const s = values2[1] / 100;
  const l = values2[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  if (color2.type === "color") {
    color2.values[3] = `/${value}`;
  } else {
    color2.values[3] = value;
  }
  return recomposeColor(color2);
}
function private_safeAlpha(color2, value, warning) {
  try {
    return alpha(color2, value);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color2;
  }
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function private_safeDarken(color2, coefficient, warning) {
  try {
    return darken(color2, coefficient);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color2;
  }
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (1 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}
function private_safeLighten(color2, coefficient, warning) {
  try {
    return lighten(color2, coefficient);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color2;
  }
}
function emphasize(color2, coefficient = 0.15) {
  return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
}
function private_safeEmphasize(color2, coefficient, warning) {
  try {
    return private_safeEmphasize(color2, coefficient);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color2;
  }
}
var colorChannel, private_safeColorChannel;
var init_colorManipulator = __esm({
  "node_modules/@mui/system/esm/colorManipulator.js"() {
    init_esm();
    colorChannel = (color2) => {
      const decomposedColor = decomposeColor(color2);
      return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val).join(" ");
    };
    private_safeColorChannel = (color2, warning) => {
      try {
        return colorChannel(color2);
      } catch (error) {
        if (warning && true) {
          console.warn(warning);
        }
        return color2;
      }
    };
  }
});

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var init_objectWithoutPropertiesLoose = __esm({
  "node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"() {
  }
});

// node_modules/@mui/system/esm/createTheme/createBreakpoints.js
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: values2 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded);
  const sortedValues = sortBreakpointsValues(values2);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}
var _excluded, sortBreakpointsValues;
var init_createBreakpoints = __esm({
  "node_modules/@mui/system/esm/createTheme/createBreakpoints.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    _excluded = ["values", "unit", "step"];
    sortBreakpointsValues = (values2) => {
      const breakpointsAsArray = Object.keys(values2).map((key) => ({
        key,
        val: values2[key]
      })) || [];
      breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
      return breakpointsAsArray.reduce((acc, obj) => {
        return _extends({}, acc, {
          [obj.key]: obj.val
        });
      }, {});
    };
  }
});

// node_modules/@mui/system/esm/createTheme/shape.js
var shape, shape_default;
var init_shape = __esm({
  "node_modules/@mui/system/esm/createTheme/shape.js"() {
    shape = {
      borderRadius: 4
    };
    shape_default = shape;
  }
});

// node_modules/@mui/system/esm/responsivePropType.js
var import_prop_types6, responsivePropType, responsivePropType_default;
var init_responsivePropType = __esm({
  "node_modules/@mui/system/esm/responsivePropType.js"() {
    import_prop_types6 = __toESM(require_prop_types());
    responsivePropType = true ? import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string, import_prop_types6.default.object, import_prop_types6.default.array]) : {};
    responsivePropType_default = responsivePropType;
  }
});

// node_modules/@mui/system/esm/merge.js
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
    // No need to clone deep, it's way faster.
  });
}
var merge_default;
var init_merge = __esm({
  "node_modules/@mui/system/esm/merge.js"() {
    init_esm();
    merge_default = merge;
  }
});

// node_modules/@mui/system/esm/breakpoints.js
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style4) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style4);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  if (typeof breakpointValues !== "object") {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === "object") {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}
var import_prop_types7, values, defaultBreakpoints;
var init_breakpoints = __esm({
  "node_modules/@mui/system/esm/breakpoints.js"() {
    init_extends();
    import_prop_types7 = __toESM(require_prop_types());
    init_esm();
    init_merge();
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    };
    defaultBreakpoints = {
      // Sorted ASC by size. That's important.
      // It can't be configured as it's used statically for propTypes.
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (key) => `@media (min-width:${values[key]}px)`
    };
  }
});

// node_modules/@mui/system/esm/style.js
function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== "string") {
    return null;
  }
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;
  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = true ? {
    [prop]: responsivePropType_default
  } : {};
  fn.filterProps = [prop];
  return fn;
}
var style_default;
var init_style = __esm({
  "node_modules/@mui/system/esm/style.js"() {
    init_esm();
    init_responsivePropType();
    init_breakpoints();
    style_default = style;
  }
});

// node_modules/@mui/system/esm/memoize.js
function memoize2(fn) {
  const cache2 = {};
  return (arg) => {
    if (cache2[arg] === void 0) {
      cache2[arg] = fn(arg);
    }
    return cache2[arg];
  };
}
var init_memoize = __esm({
  "node_modules/@mui/system/esm/memoize.js"() {
  }
});

// node_modules/@mui/system/esm/spacing.js
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (true) {
        if (typeof abs !== "number") {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (true) {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (true) {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
function padding(props) {
  return style2(props, paddingKeys);
}
function spacing(props) {
  return style2(props, spacingKeys);
}
var properties, directions, aliases, getCssProperties, marginKeys, paddingKeys, spacingKeys, spacing_default;
var init_spacing = __esm({
  "node_modules/@mui/system/esm/spacing.js"() {
    init_responsivePropType();
    init_breakpoints();
    init_style();
    init_merge();
    init_memoize();
    properties = {
      m: "margin",
      p: "padding"
    };
    directions = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"]
    };
    aliases = {
      marginX: "mx",
      marginY: "my",
      paddingX: "px",
      paddingY: "py"
    };
    getCssProperties = memoize2((prop) => {
      if (prop.length > 2) {
        if (aliases[prop]) {
          prop = aliases[prop];
        } else {
          return [prop];
        }
      }
      const [a, b] = prop.split("");
      const property = properties[a];
      const direction = directions[b] || "";
      return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
    });
    marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
    paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
    spacingKeys = [...marginKeys, ...paddingKeys];
    margin.propTypes = true ? marginKeys.reduce((obj, key) => {
      obj[key] = responsivePropType_default;
      return obj;
    }, {}) : {};
    margin.filterProps = marginKeys;
    padding.propTypes = true ? paddingKeys.reduce((obj, key) => {
      obj[key] = responsivePropType_default;
      return obj;
    }, {}) : {};
    padding.filterProps = paddingKeys;
    spacing.propTypes = true ? spacingKeys.reduce((obj, key) => {
      obj[key] = responsivePropType_default;
      return obj;
    }, {}) : {};
    spacing.filterProps = spacingKeys;
    spacing_default = spacing;
  }
});

// node_modules/@mui/system/esm/createTheme/createSpacing.js
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing2 = (...argsInput) => {
    if (true) {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing2.mui = true;
  return spacing2;
}
var init_createSpacing = __esm({
  "node_modules/@mui/system/esm/createTheme/createSpacing.js"() {
    init_spacing();
  }
});

// node_modules/@mui/system/esm/compose.js
function compose(...styles) {
  const handlers = styles.reduce((acc, style4) => {
    style4.filterProps.forEach((prop) => {
      acc[prop] = style4;
    });
    return acc;
  }, {});
  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge_default(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = true ? styles.reduce((acc, style4) => Object.assign(acc, style4.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style4) => acc.concat(style4.filterProps), []);
  return fn;
}
var compose_default;
var init_compose = __esm({
  "node_modules/@mui/system/esm/compose.js"() {
    init_merge();
    compose_default = compose;
  }
});

// node_modules/@mui/system/esm/borders.js
function borderTransform(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style_default({
    prop,
    themeKey: "borders",
    transform
  });
}
var border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, outline, outlineColor, borderRadius, borders, borders_default;
var init_borders = __esm({
  "node_modules/@mui/system/esm/borders.js"() {
    init_responsivePropType();
    init_style();
    init_compose();
    init_spacing();
    init_breakpoints();
    border = createBorderStyle("border", borderTransform);
    borderTop = createBorderStyle("borderTop", borderTransform);
    borderRight = createBorderStyle("borderRight", borderTransform);
    borderBottom = createBorderStyle("borderBottom", borderTransform);
    borderLeft = createBorderStyle("borderLeft", borderTransform);
    borderColor = createBorderStyle("borderColor");
    borderTopColor = createBorderStyle("borderTopColor");
    borderRightColor = createBorderStyle("borderRightColor");
    borderBottomColor = createBorderStyle("borderBottomColor");
    borderLeftColor = createBorderStyle("borderLeftColor");
    outline = createBorderStyle("outline", borderTransform);
    outlineColor = createBorderStyle("outlineColor");
    borderRadius = (props) => {
      if (props.borderRadius !== void 0 && props.borderRadius !== null) {
        const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
        const styleFromPropValue = (propValue) => ({
          borderRadius: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
      }
      return null;
    };
    borderRadius.propTypes = true ? {
      borderRadius: responsivePropType_default
    } : {};
    borderRadius.filterProps = ["borderRadius"];
    borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
    borders_default = borders;
  }
});

// node_modules/@mui/system/esm/cssGrid.js
var gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, grid, cssGrid_default;
var init_cssGrid = __esm({
  "node_modules/@mui/system/esm/cssGrid.js"() {
    init_style();
    init_compose();
    init_spacing();
    init_breakpoints();
    init_responsivePropType();
    gap = (props) => {
      if (props.gap !== void 0 && props.gap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
        const styleFromPropValue = (propValue) => ({
          gap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.gap, styleFromPropValue);
      }
      return null;
    };
    gap.propTypes = true ? {
      gap: responsivePropType_default
    } : {};
    gap.filterProps = ["gap"];
    columnGap = (props) => {
      if (props.columnGap !== void 0 && props.columnGap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
        const styleFromPropValue = (propValue) => ({
          columnGap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.columnGap, styleFromPropValue);
      }
      return null;
    };
    columnGap.propTypes = true ? {
      columnGap: responsivePropType_default
    } : {};
    columnGap.filterProps = ["columnGap"];
    rowGap = (props) => {
      if (props.rowGap !== void 0 && props.rowGap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
        const styleFromPropValue = (propValue) => ({
          rowGap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.rowGap, styleFromPropValue);
      }
      return null;
    };
    rowGap.propTypes = true ? {
      rowGap: responsivePropType_default
    } : {};
    rowGap.filterProps = ["rowGap"];
    gridColumn = style_default({
      prop: "gridColumn"
    });
    gridRow = style_default({
      prop: "gridRow"
    });
    gridAutoFlow = style_default({
      prop: "gridAutoFlow"
    });
    gridAutoColumns = style_default({
      prop: "gridAutoColumns"
    });
    gridAutoRows = style_default({
      prop: "gridAutoRows"
    });
    gridTemplateColumns = style_default({
      prop: "gridTemplateColumns"
    });
    gridTemplateRows = style_default({
      prop: "gridTemplateRows"
    });
    gridTemplateAreas = style_default({
      prop: "gridTemplateAreas"
    });
    gridArea = style_default({
      prop: "gridArea"
    });
    grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
    cssGrid_default = grid;
  }
});

// node_modules/@mui/system/esm/palette.js
function paletteTransform(value, userValue) {
  if (userValue === "grey") {
    return userValue;
  }
  return value;
}
var color, bgcolor, backgroundColor, palette, palette_default;
var init_palette = __esm({
  "node_modules/@mui/system/esm/palette.js"() {
    init_style();
    init_compose();
    color = style_default({
      prop: "color",
      themeKey: "palette",
      transform: paletteTransform
    });
    bgcolor = style_default({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: paletteTransform
    });
    backgroundColor = style_default({
      prop: "backgroundColor",
      themeKey: "palette",
      transform: paletteTransform
    });
    palette = compose_default(color, bgcolor, backgroundColor);
    palette_default = palette;
  }
});

// node_modules/@mui/system/esm/sizing.js
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width, maxWidth, minWidth, height, maxHeight, minHeight, sizeWidth, sizeHeight, boxSizing, sizing, sizing_default;
var init_sizing = __esm({
  "node_modules/@mui/system/esm/sizing.js"() {
    init_style();
    init_compose();
    init_breakpoints();
    width = style_default({
      prop: "width",
      transform: sizingTransform
    });
    maxWidth = (props) => {
      if (props.maxWidth !== void 0 && props.maxWidth !== null) {
        const styleFromPropValue = (propValue) => {
          var _props$theme, _props$theme2;
          const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
          if (!breakpoint) {
            return {
              maxWidth: sizingTransform(propValue)
            };
          }
          if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
            return {
              maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
            };
          }
          return {
            maxWidth: breakpoint
          };
        };
        return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
      }
      return null;
    };
    maxWidth.filterProps = ["maxWidth"];
    minWidth = style_default({
      prop: "minWidth",
      transform: sizingTransform
    });
    height = style_default({
      prop: "height",
      transform: sizingTransform
    });
    maxHeight = style_default({
      prop: "maxHeight",
      transform: sizingTransform
    });
    minHeight = style_default({
      prop: "minHeight",
      transform: sizingTransform
    });
    sizeWidth = style_default({
      prop: "size",
      cssProperty: "width",
      transform: sizingTransform
    });
    sizeHeight = style_default({
      prop: "size",
      cssProperty: "height",
      transform: sizingTransform
    });
    boxSizing = style_default({
      prop: "boxSizing"
    });
    sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
    sizing_default = sizing;
  }
});

// node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js
var defaultSxConfig, defaultSxConfig_default;
var init_defaultSxConfig = __esm({
  "node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js"() {
    init_spacing();
    init_borders();
    init_cssGrid();
    init_palette();
    init_sizing();
    defaultSxConfig = {
      // borders
      border: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderTop: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderRight: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderBottom: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderLeft: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderColor: {
        themeKey: "palette"
      },
      borderTopColor: {
        themeKey: "palette"
      },
      borderRightColor: {
        themeKey: "palette"
      },
      borderBottomColor: {
        themeKey: "palette"
      },
      borderLeftColor: {
        themeKey: "palette"
      },
      outline: {
        themeKey: "borders",
        transform: borderTransform
      },
      outlineColor: {
        themeKey: "palette"
      },
      borderRadius: {
        themeKey: "shape.borderRadius",
        style: borderRadius
      },
      // palette
      color: {
        themeKey: "palette",
        transform: paletteTransform
      },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: paletteTransform
      },
      backgroundColor: {
        themeKey: "palette",
        transform: paletteTransform
      },
      // spacing
      p: {
        style: padding
      },
      pt: {
        style: padding
      },
      pr: {
        style: padding
      },
      pb: {
        style: padding
      },
      pl: {
        style: padding
      },
      px: {
        style: padding
      },
      py: {
        style: padding
      },
      padding: {
        style: padding
      },
      paddingTop: {
        style: padding
      },
      paddingRight: {
        style: padding
      },
      paddingBottom: {
        style: padding
      },
      paddingLeft: {
        style: padding
      },
      paddingX: {
        style: padding
      },
      paddingY: {
        style: padding
      },
      paddingInline: {
        style: padding
      },
      paddingInlineStart: {
        style: padding
      },
      paddingInlineEnd: {
        style: padding
      },
      paddingBlock: {
        style: padding
      },
      paddingBlockStart: {
        style: padding
      },
      paddingBlockEnd: {
        style: padding
      },
      m: {
        style: margin
      },
      mt: {
        style: margin
      },
      mr: {
        style: margin
      },
      mb: {
        style: margin
      },
      ml: {
        style: margin
      },
      mx: {
        style: margin
      },
      my: {
        style: margin
      },
      margin: {
        style: margin
      },
      marginTop: {
        style: margin
      },
      marginRight: {
        style: margin
      },
      marginBottom: {
        style: margin
      },
      marginLeft: {
        style: margin
      },
      marginX: {
        style: margin
      },
      marginY: {
        style: margin
      },
      marginInline: {
        style: margin
      },
      marginInlineStart: {
        style: margin
      },
      marginInlineEnd: {
        style: margin
      },
      marginBlock: {
        style: margin
      },
      marginBlockStart: {
        style: margin
      },
      marginBlockEnd: {
        style: margin
      },
      // display
      displayPrint: {
        cssProperty: false,
        transform: (value) => ({
          "@media print": {
            display: value
          }
        })
      },
      display: {},
      overflow: {},
      textOverflow: {},
      visibility: {},
      whiteSpace: {},
      // flexbox
      flexBasis: {},
      flexDirection: {},
      flexWrap: {},
      justifyContent: {},
      alignItems: {},
      alignContent: {},
      order: {},
      flex: {},
      flexGrow: {},
      flexShrink: {},
      alignSelf: {},
      justifyItems: {},
      justifySelf: {},
      // grid
      gap: {
        style: gap
      },
      rowGap: {
        style: rowGap
      },
      columnGap: {
        style: columnGap
      },
      gridColumn: {},
      gridRow: {},
      gridAutoFlow: {},
      gridAutoColumns: {},
      gridAutoRows: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
      gridTemplateAreas: {},
      gridArea: {},
      // positions
      position: {},
      zIndex: {
        themeKey: "zIndex"
      },
      top: {},
      right: {},
      bottom: {},
      left: {},
      // shadows
      boxShadow: {
        themeKey: "shadows"
      },
      // sizing
      width: {
        transform: sizingTransform
      },
      maxWidth: {
        style: maxWidth
      },
      minWidth: {
        transform: sizingTransform
      },
      height: {
        transform: sizingTransform
      },
      maxHeight: {
        transform: sizingTransform
      },
      minHeight: {
        transform: sizingTransform
      },
      boxSizing: {},
      // typography
      fontFamily: {
        themeKey: "typography"
      },
      fontSize: {
        themeKey: "typography"
      },
      fontStyle: {
        themeKey: "typography"
      },
      fontWeight: {
        themeKey: "typography"
      },
      letterSpacing: {},
      textTransform: {},
      lineHeight: {},
      textAlign: {},
      typography: {
        cssProperty: false,
        themeKey: "typography"
      }
    };
    defaultSxConfig_default = defaultSxConfig;
  }
});

// node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style: style4
    } = options;
    if (val == null) {
      return null;
    }
    if (themeKey === "typography" && val === "inherit") {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style4) {
      return style4(props);
    }
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx2(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null;
    }
    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig_default;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (config[styleKey]) {
              css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, (x) => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme
                });
              } else {
                css2 = merge_default(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
var styleFunctionSx, styleFunctionSx_default;
var init_styleFunctionSx = __esm({
  "node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"() {
    init_esm();
    init_merge();
    init_style();
    init_breakpoints();
    init_defaultSxConfig();
    styleFunctionSx = unstable_createStyleFunctionSx();
    styleFunctionSx.filterProps = ["sx"];
    styleFunctionSx_default = styleFunctionSx;
  }
});

// node_modules/@mui/system/esm/createTheme/createTheme.js
function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded2);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing2 = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing2,
    shape: _extends({}, shape_default, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
var _excluded2, createTheme_default;
var init_createTheme = __esm({
  "node_modules/@mui/system/esm/createTheme/createTheme.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    init_createBreakpoints();
    init_shape();
    init_createSpacing();
    init_styleFunctionSx();
    init_defaultSxConfig();
    _excluded2 = ["breakpoints", "palette", "spacing", "shape"];
    createTheme_default = createTheme;
  }
});

// node_modules/@mui/system/esm/createTheme/index.js
var init_createTheme2 = __esm({
  "node_modules/@mui/system/esm/createTheme/index.js"() {
    init_createTheme();
  }
});

// node_modules/@mui/system/esm/useThemeWithoutDefault.js
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme5 = null) {
  const contextTheme = React13.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme5 : contextTheme;
}
var React13, useThemeWithoutDefault_default;
var init_useThemeWithoutDefault = __esm({
  "node_modules/@mui/system/esm/useThemeWithoutDefault.js"() {
    "use client";
    React13 = __toESM(require_react());
    init_styled_engine();
    useThemeWithoutDefault_default = useTheme;
  }
});

// node_modules/@mui/system/esm/useTheme.js
function useTheme2(defaultTheme5 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme5);
}
var systemDefaultTheme, useTheme_default;
var init_useTheme = __esm({
  "node_modules/@mui/system/esm/useTheme.js"() {
    "use client";
    init_createTheme2();
    init_useThemeWithoutDefault();
    systemDefaultTheme = createTheme_default();
    useTheme_default = useTheme2;
  }
});

// node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js
function GlobalStyles2({
  styles,
  themeId,
  defaultTheme: defaultTheme5 = {}
}) {
  const upperTheme = useTheme_default(defaultTheme5);
  const globalStyles = typeof styles === "function" ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return (0, import_jsx_runtime3.jsx)(GlobalStyles, {
    styles: globalStyles
  });
}
var React14, import_prop_types8, import_jsx_runtime3, GlobalStyles_default;
var init_GlobalStyles3 = __esm({
  "node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js"() {
    "use client";
    React14 = __toESM(require_react());
    import_prop_types8 = __toESM(require_prop_types());
    init_styled_engine();
    init_useTheme();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    true ? GlobalStyles2.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit TypeScript types and run "yarn proptypes"  |
      // ----------------------------------------------------------------------
      /**
       * @ignore
       */
      defaultTheme: import_prop_types8.default.object,
      /**
       * @ignore
       */
      styles: import_prop_types8.default.oneOfType([import_prop_types8.default.array, import_prop_types8.default.func, import_prop_types8.default.number, import_prop_types8.default.object, import_prop_types8.default.string, import_prop_types8.default.bool]),
      /**
       * @ignore
       */
      themeId: import_prop_types8.default.string
    } : void 0;
    GlobalStyles_default = GlobalStyles2;
  }
});

// node_modules/@mui/system/esm/GlobalStyles/index.js
var init_GlobalStyles4 = __esm({
  "node_modules/@mui/system/esm/GlobalStyles/index.js"() {
    "use client";
    init_GlobalStyles3();
    init_GlobalStyles3();
  }
});

// node_modules/@mui/system/esm/display.js
var displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace, display_default;
var init_display = __esm({
  "node_modules/@mui/system/esm/display.js"() {
    init_style();
    init_compose();
    displayPrint = style_default({
      prop: "displayPrint",
      cssProperty: false,
      transform: (value) => ({
        "@media print": {
          display: value
        }
      })
    });
    displayRaw = style_default({
      prop: "display"
    });
    overflow = style_default({
      prop: "overflow"
    });
    textOverflow = style_default({
      prop: "textOverflow"
    });
    visibility = style_default({
      prop: "visibility"
    });
    whiteSpace = style_default({
      prop: "whiteSpace"
    });
    display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);
  }
});

// node_modules/@mui/system/esm/flexbox.js
var flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, flexbox, flexbox_default;
var init_flexbox = __esm({
  "node_modules/@mui/system/esm/flexbox.js"() {
    init_style();
    init_compose();
    flexBasis = style_default({
      prop: "flexBasis"
    });
    flexDirection = style_default({
      prop: "flexDirection"
    });
    flexWrap = style_default({
      prop: "flexWrap"
    });
    justifyContent = style_default({
      prop: "justifyContent"
    });
    alignItems = style_default({
      prop: "alignItems"
    });
    alignContent = style_default({
      prop: "alignContent"
    });
    order = style_default({
      prop: "order"
    });
    flex = style_default({
      prop: "flex"
    });
    flexGrow = style_default({
      prop: "flexGrow"
    });
    flexShrink = style_default({
      prop: "flexShrink"
    });
    alignSelf = style_default({
      prop: "alignSelf"
    });
    justifyItems = style_default({
      prop: "justifyItems"
    });
    justifySelf = style_default({
      prop: "justifySelf"
    });
    flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
    flexbox_default = flexbox;
  }
});

// node_modules/@mui/system/esm/positions.js
var position, zIndex, top, right, bottom, left, positions_default;
var init_positions = __esm({
  "node_modules/@mui/system/esm/positions.js"() {
    init_style();
    init_compose();
    position = style_default({
      prop: "position"
    });
    zIndex = style_default({
      prop: "zIndex",
      themeKey: "zIndex"
    });
    top = style_default({
      prop: "top"
    });
    right = style_default({
      prop: "right"
    });
    bottom = style_default({
      prop: "bottom"
    });
    left = style_default({
      prop: "left"
    });
    positions_default = compose_default(position, zIndex, top, right, bottom, left);
  }
});

// node_modules/@mui/system/esm/shadows.js
var boxShadow, shadows_default;
var init_shadows = __esm({
  "node_modules/@mui/system/esm/shadows.js"() {
    init_style();
    boxShadow = style_default({
      prop: "boxShadow",
      themeKey: "shadows"
    });
    shadows_default = boxShadow;
  }
});

// node_modules/@mui/system/esm/typography.js
var fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, textTransform, lineHeight, textAlign, typographyVariant, typography, typography_default;
var init_typography = __esm({
  "node_modules/@mui/system/esm/typography.js"() {
    init_style();
    init_compose();
    fontFamily = style_default({
      prop: "fontFamily",
      themeKey: "typography"
    });
    fontSize = style_default({
      prop: "fontSize",
      themeKey: "typography"
    });
    fontStyle = style_default({
      prop: "fontStyle",
      themeKey: "typography"
    });
    fontWeight = style_default({
      prop: "fontWeight",
      themeKey: "typography"
    });
    letterSpacing = style_default({
      prop: "letterSpacing"
    });
    textTransform = style_default({
      prop: "textTransform"
    });
    lineHeight = style_default({
      prop: "lineHeight"
    });
    textAlign = style_default({
      prop: "textAlign"
    });
    typographyVariant = style_default({
      prop: "typography",
      cssProperty: false,
      themeKey: "typography"
    });
    typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
    typography_default = typography;
  }
});

// node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
function extendSxProp(props) {
  const {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx
  });
}
var _excluded3, splitProps;
var init_extendSxProp = __esm({
  "node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    init_defaultSxConfig();
    _excluded3 = ["sx"];
    splitProps = (props) => {
      var _props$theme$unstable, _props$theme;
      const result = {
        systemProps: {},
        otherProps: {}
      };
      const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig_default;
      Object.keys(props).forEach((prop) => {
        if (config[prop]) {
          result.systemProps[prop] = props[prop];
        } else {
          result.otherProps[prop] = props[prop];
        }
      });
      return result;
    };
  }
});

// node_modules/@mui/system/esm/styleFunctionSx/index.js
var init_styleFunctionSx2 = __esm({
  "node_modules/@mui/system/esm/styleFunctionSx/index.js"() {
    init_styleFunctionSx();
    init_styleFunctionSx();
    init_extendSxProp();
    init_defaultSxConfig();
  }
});

// node_modules/@mui/system/esm/getThemeValue.js
var filterPropsMapping, styleFunctionMapping, propToStyleFunction;
var init_getThemeValue = __esm({
  "node_modules/@mui/system/esm/getThemeValue.js"() {
    init_borders();
    init_display();
    init_flexbox();
    init_cssGrid();
    init_positions();
    init_palette();
    init_shadows();
    init_sizing();
    init_spacing();
    init_typography();
    filterPropsMapping = {
      borders: borders_default.filterProps,
      display: display_default.filterProps,
      flexbox: flexbox_default.filterProps,
      grid: cssGrid_default.filterProps,
      positions: positions_default.filterProps,
      palette: palette_default.filterProps,
      shadows: shadows_default.filterProps,
      sizing: sizing_default.filterProps,
      spacing: spacing_default.filterProps,
      typography: typography_default.filterProps
    };
    styleFunctionMapping = {
      borders: borders_default,
      display: display_default,
      flexbox: flexbox_default,
      grid: cssGrid_default,
      positions: positions_default,
      palette: palette_default,
      shadows: shadows_default,
      sizing: sizing_default,
      spacing: spacing_default,
      typography: typography_default
    };
    propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
      filterPropsMapping[styleFnName].forEach((propName) => {
        acc[propName] = styleFunctionMapping[styleFnName];
      });
      return acc;
    }, {});
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default;
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
    clsx_default = clsx;
  }
});

// node_modules/@mui/system/esm/createBox.js
function createBox(options = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme5,
    defaultClassName = "MuiBox-root",
    generateClassName
  } = options;
  const BoxRoot = styled("div", {
    shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
  })(styleFunctionSx_default);
  const Box2 = React15.forwardRef(function Box3(inProps, ref) {
    const theme = useTheme_default(defaultTheme5);
    const _extendSxProp = extendSxProp(inProps), {
      className,
      component = "div"
    } = _extendSxProp, other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded4);
    return (0, import_jsx_runtime4.jsx)(BoxRoot, _extends({
      as: component,
      ref,
      className: clsx_default(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme
    }, other));
  });
  return Box2;
}
var React15, import_jsx_runtime4, _excluded4;
var init_createBox = __esm({
  "node_modules/@mui/system/esm/createBox.js"() {
    "use client";
    init_extends();
    init_objectWithoutPropertiesLoose();
    React15 = __toESM(require_react());
    init_clsx();
    init_styled_engine();
    init_styleFunctionSx2();
    init_useTheme();
    import_jsx_runtime4 = __toESM(require_jsx_runtime());
    _excluded4 = ["className", "component"];
  }
});

// node_modules/@mui/system/esm/Box/boxClasses.js
var boxClasses, boxClasses_default;
var init_boxClasses = __esm({
  "node_modules/@mui/system/esm/Box/boxClasses.js"() {
    init_esm();
    boxClasses = generateUtilityClasses("MuiBox", ["root"]);
    boxClasses_default = boxClasses;
  }
});

// node_modules/@mui/system/esm/Box/Box.js
var import_prop_types9, Box;
var init_Box = __esm({
  "node_modules/@mui/system/esm/Box/Box.js"() {
    "use client";
    import_prop_types9 = __toESM(require_prop_types());
    init_esm();
    init_createBox();
    init_boxClasses();
    Box = createBox({
      defaultClassName: boxClasses_default.root,
      generateClassName: ClassNameGenerator_default.generate
    });
    true ? Box.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * @ignore
       */
      children: import_prop_types9.default.node,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types9.default.elementType,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object])
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Box/index.js
var init_Box2 = __esm({
  "node_modules/@mui/system/esm/Box/index.js"() {
    "use client";
    init_Box();
    init_boxClasses();
    init_boxClasses();
  }
});

// node_modules/@mui/system/esm/propsToClassKey.js
function isEmpty2(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty2(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty2(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}
var _excluded5;
var init_propsToClassKey = __esm({
  "node_modules/@mui/system/esm/propsToClassKey.js"() {
    init_objectWithoutPropertiesLoose();
    init_esm();
    _excluded5 = ["variant"];
  }
});

// node_modules/@mui/system/esm/createStyled.js
function isEmpty3(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
function resolveTheme({
  defaultTheme: defaultTheme5,
  theme,
  themeId
}) {
  return isEmpty3(theme) ? defaultTheme5 : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function createStyled3(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme5 = systemDefaultTheme2,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
  } = input;
  const systemSx = (props) => {
    return styleFunctionSx_default(_extends({}, props, {
      theme: resolveTheme(_extends({}, props, {
        defaultTheme: defaultTheme5,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles) => styles.filter((style4) => !(style4 != null && style4.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded6);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let label;
    if (true) {
      if (componentName) {
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
      }
    }
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
        if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg) {
          return (props) => muiStyledFunctionResolver({
            styledArg: stylesArg,
            props,
            defaultTheme: defaultTheme5,
            themeId
          });
        }
        if (isPlainObject(stylesArg)) {
          let transformedStylesArg = stylesArg;
          let styledArgVariants;
          if (stylesArg && stylesArg.variants) {
            styledArgVariants = stylesArg.variants;
            delete transformedStylesArg.variants;
            transformedStylesArg = (props) => {
              let result = stylesArg;
              const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
              variantStyles.forEach((variantStyle) => {
                result = deepmerge(result, variantStyle);
              });
              return result;
            };
          }
          return transformedStylesArg;
        }
        return stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (isPlainObject(styleArg)) {
        let styledArgVariants;
        if (styleArg && styleArg.variants) {
          styledArgVariants = styleArg.variants;
          delete transformedStyleArg.variants;
          transformedStyleArg = (props) => {
            let result = styleArg;
            const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
            variantStyles.forEach((variantStyle) => {
              result = deepmerge(result, variantStyle);
            });
            return result;
          };
        }
      } else if (typeof styleArg === "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      styleArg.__emotion_real !== styleArg) {
        transformedStyleArg = (props) => muiStyledFunctionResolver({
          styledArg: styleArg,
          props,
          defaultTheme: defaultTheme5,
          themeId
        });
      }
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme5,
            themeId
          }));
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(_extends({}, props, {
                theme
              })) : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme5,
            themeId
          }));
          return themeVariantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (true) {
        let displayName;
        if (componentName) {
          displayName = `${componentName}${capitalize(componentSlot || "")}`;
        }
        if (displayName === void 0) {
          displayName = `Styled(${getDisplayName(tag)})`;
        }
        Component.displayName = displayName;
      }
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
var _excluded6, getStyleOverrides, transformVariants, getVariantStyles, variantsResolver, themeVariantsResolver, systemDefaultTheme2, lowercaseFirstLetter, muiStyledFunctionResolver;
var init_createStyled = __esm({
  "node_modules/@mui/system/esm/createStyled.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    init_styled_engine();
    init_esm();
    init_createTheme2();
    init_propsToClassKey();
    init_styleFunctionSx2();
    _excluded6 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
    getStyleOverrides = (name, theme) => {
      if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
        return theme.components[name].styleOverrides;
      }
      return null;
    };
    transformVariants = (variants) => {
      const variantsStyles = {};
      if (variants) {
        variants.forEach((definition) => {
          const key = propsToClassKey(definition.props);
          variantsStyles[key] = definition.style;
        });
      }
      return variantsStyles;
    };
    getVariantStyles = (name, theme) => {
      let variants = [];
      if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
        variants = theme.components[name].variants;
      }
      return transformVariants(variants);
    };
    variantsResolver = (props, styles, variants) => {
      const {
        ownerState = {}
      } = props;
      const variantsStyles = [];
      if (variants) {
        variants.forEach((variant) => {
          let isMatch = true;
          Object.keys(variant.props).forEach((key) => {
            if (ownerState[key] !== variant.props[key] && props[key] !== variant.props[key]) {
              isMatch = false;
            }
          });
          if (isMatch) {
            variantsStyles.push(styles[propsToClassKey(variant.props)]);
          }
        });
      }
      return variantsStyles;
    };
    themeVariantsResolver = (props, styles, theme, name) => {
      var _theme$components;
      const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[name]) == null ? void 0 : _theme$components.variants;
      return variantsResolver(props, styles, themeVariants);
    };
    systemDefaultTheme2 = createTheme_default();
    lowercaseFirstLetter = (string) => {
      if (!string) {
        return string;
      }
      return string.charAt(0).toLowerCase() + string.slice(1);
    };
    muiStyledFunctionResolver = ({
      styledArg,
      props,
      defaultTheme: defaultTheme5,
      themeId
    }) => {
      const resolvedStyles = styledArg(_extends({}, props, {
        theme: resolveTheme(_extends({}, props, {
          defaultTheme: defaultTheme5,
          themeId
        }))
      }));
      let optionalVariants;
      if (resolvedStyles && resolvedStyles.variants) {
        optionalVariants = resolvedStyles.variants;
        delete resolvedStyles.variants;
      }
      if (optionalVariants) {
        const variantsStyles = variantsResolver(props, transformVariants(optionalVariants), optionalVariants);
        return [resolvedStyles, ...variantsStyles];
      }
      return resolvedStyles;
    };
  }
});

// node_modules/@mui/system/esm/styled.js
var styled2, styled_default;
var init_styled = __esm({
  "node_modules/@mui/system/esm/styled.js"() {
    init_createStyled();
    styled2 = createStyled3();
    styled_default = styled2;
  }
});

// node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}
var init_getThemeProps = __esm({
  "node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"() {
    init_esm();
  }
});

// node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme5,
  themeId
}) {
  let theme = useTheme_default(defaultTheme5);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}
var init_useThemeProps = __esm({
  "node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"() {
    "use client";
    init_getThemeProps();
    init_useTheme();
  }
});

// node_modules/@mui/system/esm/useThemeProps/index.js
var init_useThemeProps2 = __esm({
  "node_modules/@mui/system/esm/useThemeProps/index.js"() {
    "use client";
    init_useThemeProps();
    init_getThemeProps();
  }
});

// node_modules/@mui/private-theming/useTheme/ThemeContext.js
var React16, ThemeContext2, ThemeContext_default;
var init_ThemeContext = __esm({
  "node_modules/@mui/private-theming/useTheme/ThemeContext.js"() {
    React16 = __toESM(require_react());
    ThemeContext2 = React16.createContext(null);
    if (true) {
      ThemeContext2.displayName = "ThemeContext";
    }
    ThemeContext_default = ThemeContext2;
  }
});

// node_modules/@mui/private-theming/useTheme/useTheme.js
function useTheme3() {
  const theme = React17.useContext(ThemeContext_default);
  if (true) {
    React17.useDebugValue(theme);
  }
  return theme;
}
var React17;
var init_useTheme2 = __esm({
  "node_modules/@mui/private-theming/useTheme/useTheme.js"() {
    React17 = __toESM(require_react());
    init_ThemeContext();
  }
});

// node_modules/@mui/private-theming/useTheme/index.js
var init_useTheme3 = __esm({
  "node_modules/@mui/private-theming/useTheme/index.js"() {
    init_useTheme2();
  }
});

// node_modules/@mui/private-theming/ThemeProvider/nested.js
var hasSymbol, nested_default;
var init_nested = __esm({
  "node_modules/@mui/private-theming/ThemeProvider/nested.js"() {
    hasSymbol = typeof Symbol === "function" && Symbol.for;
    nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  }
});

// node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme3();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const theme = React18.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return (0, import_jsx_runtime5.jsx)(ThemeContext_default.Provider, {
    value: theme,
    children
  });
}
var React18, import_prop_types10, import_jsx_runtime5, ThemeProvider_default;
var init_ThemeProvider = __esm({
  "node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js"() {
    init_extends();
    React18 = __toESM(require_react());
    import_prop_types10 = __toESM(require_prop_types());
    init_esm();
    init_ThemeContext();
    init_useTheme3();
    init_nested();
    import_jsx_runtime5 = __toESM(require_jsx_runtime());
    true ? ThemeProvider.propTypes = {
      /**
       * Your component tree.
       */
      children: import_prop_types10.default.node,
      /**
       * A theme object. You can provide a function to extend the outer theme.
       */
      theme: import_prop_types10.default.oneOfType([import_prop_types10.default.object, import_prop_types10.default.func]).isRequired
    } : void 0;
    if (true) {
      true ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
    }
    ThemeProvider_default = ThemeProvider;
  }
});

// node_modules/@mui/private-theming/ThemeProvider/index.js
var init_ThemeProvider2 = __esm({
  "node_modules/@mui/private-theming/ThemeProvider/index.js"() {
    init_ThemeProvider();
    init_nested();
  }
});

// node_modules/@mui/private-theming/index.js
var init_private_theming = __esm({
  "node_modules/@mui/private-theming/index.js"() {
    init_ThemeProvider2();
    init_ThemeProvider2();
    init_useTheme3();
  }
});

// node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React19.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? _extends({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? _extends({}, upperTheme, {
      [themeId]: localTheme
    }) : _extends({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider2(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useThemeWithoutDefault_default(EMPTY_THEME);
  const upperPrivateTheme = useTheme3() || EMPTY_THEME;
  if (true) {
    if (upperTheme === null && typeof localTheme === "function" || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  return (0, import_jsx_runtime6.jsx)(ThemeProvider_default, {
    theme: privateTheme,
    children: (0, import_jsx_runtime6.jsx)(ThemeContext.Provider, {
      value: engineTheme,
      children
    })
  });
}
var React19, import_prop_types11, import_jsx_runtime6, EMPTY_THEME, ThemeProvider_default2;
var init_ThemeProvider3 = __esm({
  "node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"() {
    "use client";
    init_extends();
    React19 = __toESM(require_react());
    import_prop_types11 = __toESM(require_prop_types());
    init_private_theming();
    init_esm();
    init_styled_engine();
    init_useThemeWithoutDefault();
    import_jsx_runtime6 = __toESM(require_jsx_runtime());
    EMPTY_THEME = {};
    true ? ThemeProvider2.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * Your component tree.
       */
      children: import_prop_types11.default.node,
      /**
       * A theme object. You can provide a function to extend the outer theme.
       */
      theme: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]).isRequired,
      /**
       * The design system's unique id for getting the corresponded theme when there are multiple design systems.
       */
      themeId: import_prop_types11.default.string
    } : void 0;
    if (true) {
      true ? ThemeProvider2.propTypes = exactProp(ThemeProvider2.propTypes) : void 0;
    }
    ThemeProvider_default2 = ThemeProvider2;
  }
});

// node_modules/@mui/system/esm/ThemeProvider/index.js
var init_ThemeProvider4 = __esm({
  "node_modules/@mui/system/esm/ThemeProvider/index.js"() {
    "use client";
    init_ThemeProvider3();
  }
});

// node_modules/@mui/system/esm/cssVars/getInitColorSchemeScript.js
function getInitColorSchemeScript(options) {
  const {
    defaultMode = "light",
    defaultLightColorScheme = "light",
    defaultDarkColorScheme = "dark",
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = "document.documentElement"
  } = options || {};
  return (0, import_jsx_runtime7.jsx)("script", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  var mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
    } else {
      colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  }
  if (colorScheme) {
    ${colorSchemeNode}.setAttribute('${attribute}', colorScheme);
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
var React20, import_jsx_runtime7, DEFAULT_MODE_STORAGE_KEY, DEFAULT_COLOR_SCHEME_STORAGE_KEY, DEFAULT_ATTRIBUTE;
var init_getInitColorSchemeScript = __esm({
  "node_modules/@mui/system/esm/cssVars/getInitColorSchemeScript.js"() {
    React20 = __toESM(require_react());
    import_jsx_runtime7 = __toESM(require_jsx_runtime());
    DEFAULT_MODE_STORAGE_KEY = "mode";
    DEFAULT_COLOR_SCHEME_STORAGE_KEY = "color-scheme";
    DEFAULT_ATTRIBUTE = "data-color-scheme";
  }
});

// node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js
function getSystemMode(mode) {
  if (typeof window !== "undefined" && mode === "system") {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql.matches) {
      return "dark";
    }
    return "light";
  }
  return void 0;
}
function processState(state, callback) {
  if (state.mode === "light" || state.mode === "system" && state.systemMode === "light") {
    return callback("light");
  }
  if (state.mode === "dark" || state.mode === "system" && state.systemMode === "dark") {
    return callback("dark");
  }
  return void 0;
}
function getColorScheme(state) {
  return processState(state, (mode) => {
    if (mode === "light") {
      return state.lightColorScheme;
    }
    if (mode === "dark") {
      return state.darkColorScheme;
    }
    return void 0;
  });
}
function initializeValue(key, defaultValue) {
  if (typeof window === "undefined") {
    return void 0;
  }
  let value;
  try {
    value = localStorage.getItem(key) || void 0;
    if (!value) {
      localStorage.setItem(key, defaultValue);
    }
  } catch (e) {
  }
  return value || defaultValue;
}
function useCurrentColorScheme(options) {
  const {
    defaultMode = "light",
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === "undefined" ? void 0 : window
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(",");
  const [state, setState] = React21.useState(() => {
    const initialMode = initializeValue(modeStorageKey, defaultMode);
    const lightColorScheme = initializeValue(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
    const darkColorScheme = initializeValue(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme,
      darkColorScheme
    };
  });
  const colorScheme = getColorScheme(state);
  const setMode = React21.useCallback((mode) => {
    setState((currentState) => {
      if (mode === currentState.mode) {
        return currentState;
      }
      const newMode = !mode ? defaultMode : mode;
      try {
        localStorage.setItem(modeStorageKey, newMode);
      } catch (e) {
      }
      return _extends({}, currentState, {
        mode: newMode,
        systemMode: getSystemMode(newMode)
      });
    });
  }, [modeStorageKey, defaultMode]);
  const setColorScheme = React21.useCallback((value) => {
    if (!value) {
      setState((currentState) => {
        try {
          localStorage.setItem(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
          localStorage.setItem(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
        } catch (e) {
        }
        return _extends({}, currentState, {
          lightColorScheme: defaultLightColorScheme,
          darkColorScheme: defaultDarkColorScheme
        });
      });
    } else if (typeof value === "string") {
      if (value && !joinedColorSchemes.includes(value)) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState((currentState) => {
          const newState = _extends({}, currentState);
          processState(currentState, (mode) => {
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-${mode}`, value);
            } catch (e) {
            }
            if (mode === "light") {
              newState.lightColorScheme = value;
            }
            if (mode === "dark") {
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else {
      setState((currentState) => {
        const newState = _extends({}, currentState);
        const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        if (newLightColorScheme) {
          if (!joinedColorSchemes.includes(newLightColorScheme)) {
            console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.lightColorScheme = newLightColorScheme;
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-light`, newLightColorScheme);
            } catch (error) {
            }
          }
        }
        if (newDarkColorScheme) {
          if (!joinedColorSchemes.includes(newDarkColorScheme)) {
            console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.darkColorScheme = newDarkColorScheme;
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-dark`, newDarkColorScheme);
            } catch (error) {
            }
          }
        }
        return newState;
      });
    }
  }, [joinedColorSchemes, colorSchemeStorageKey, defaultLightColorScheme, defaultDarkColorScheme]);
  const handleMediaQuery = React21.useCallback((e) => {
    if (state.mode === "system") {
      setState((currentState) => _extends({}, currentState, {
        systemMode: e != null && e.matches ? "dark" : "light"
      }));
    }
  }, [state.mode]);
  const mediaListener = React21.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React21.useEffect(() => {
    const handler = (...args) => mediaListener.current(...args);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addListener(handler);
    handler(media);
    return () => media.removeListener(handler);
  }, []);
  React21.useEffect(() => {
    const handleStorage = (event) => {
      const value = event.newValue;
      if (typeof event.key === "string" && event.key.startsWith(colorSchemeStorageKey) && (!value || joinedColorSchemes.match(value))) {
        if (event.key.endsWith("light")) {
          setColorScheme({
            light: value
          });
        }
        if (event.key.endsWith("dark")) {
          setColorScheme({
            dark: value
          });
        }
      }
      if (event.key === modeStorageKey && (!value || ["light", "dark", "system"].includes(value))) {
        setMode(value || defaultMode);
      }
    };
    if (storageWindow) {
      storageWindow.addEventListener("storage", handleStorage);
      return () => storageWindow.removeEventListener("storage", handleStorage);
    }
    return void 0;
  }, [setColorScheme, setMode, modeStorageKey, colorSchemeStorageKey, joinedColorSchemes, defaultMode, storageWindow]);
  return _extends({}, state, {
    colorScheme,
    setMode,
    setColorScheme
  });
}
var React21;
var init_useCurrentColorScheme = __esm({
  "node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js"() {
    "use client";
    init_extends();
    React21 = __toESM(require_react());
    init_getInitColorSchemeScript();
  }
});

// node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js
function createCssVarsProvider(options) {
  const {
    themeId,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: defaultTheme5 = {},
    attribute: defaultAttribute = DEFAULT_ATTRIBUTE,
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    defaultMode: designSystemMode = "light",
    defaultColorScheme: designSystemColorScheme,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    resolveTheme: resolveTheme2,
    excludeVariablesFromRoot
  } = options;
  if (!defaultTheme5.colorSchemes || typeof designSystemColorScheme === "string" && !defaultTheme5.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === "object" && !defaultTheme5.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === "object" && !defaultTheme5.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error(`MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
  }
  const ColorSchemeContext = React22.createContext(void 0);
  const useColorScheme = () => {
    const value = React22.useContext(ColorSchemeContext);
    if (!value) {
      throw new Error(true ? `MUI: \`useColorScheme\` must be called under <CssVarsProvider />` : formatMuiErrorMessage(19));
    }
    return value;
  };
  function CssVarsProvider({
    children,
    theme: themeProp = defaultTheme5,
    modeStorageKey = defaultModeStorageKey,
    colorSchemeStorageKey = defaultColorSchemeStorageKey,
    attribute = defaultAttribute,
    defaultMode = designSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    storageWindow = typeof window === "undefined" ? void 0 : window,
    documentNode = typeof document === "undefined" ? void 0 : document,
    colorSchemeNode = typeof document === "undefined" ? void 0 : document.documentElement,
    colorSchemeSelector = ":root",
    disableNestedContext = false,
    disableStyleSheetGeneration = false
  }) {
    const hasMounted = React22.useRef(false);
    const upperTheme = useTheme3();
    const ctx = React22.useContext(ColorSchemeContext);
    const nested = !!ctx && !disableNestedContext;
    const scopedTheme = themeProp[themeId];
    const _ref = scopedTheme || themeProp, {
      colorSchemes = {},
      components = {},
      generateCssVars = () => ({
        vars: {},
        css: {}
      }),
      cssVarPrefix
    } = _ref, restThemeProp = _objectWithoutPropertiesLoose(_ref, _excluded7);
    const allColorSchemes = Object.keys(colorSchemes);
    const defaultLightColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
    const {
      mode: stateMode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme: stateColorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme: defaultLightColorScheme2,
      defaultDarkColorScheme: defaultDarkColorScheme2,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageWindow
    });
    let mode = stateMode;
    let colorScheme = stateColorScheme;
    if (nested) {
      mode = ctx.mode;
      colorScheme = ctx.colorScheme;
    }
    const calculatedMode = (() => {
      if (mode) {
        return mode;
      }
      if (defaultMode === "system") {
        return designSystemMode;
      }
      return defaultMode;
    })();
    const calculatedColorScheme = (() => {
      if (!colorScheme) {
        if (calculatedMode === "dark") {
          return defaultDarkColorScheme2;
        }
        return defaultLightColorScheme2;
      }
      return colorScheme;
    })();
    const {
      css: rootCss,
      vars: rootVars
    } = generateCssVars();
    const theme = _extends({}, restThemeProp, {
      components,
      colorSchemes,
      cssVarPrefix,
      vars: rootVars,
      getColorSchemeSelector: (targetColorScheme) => `[${attribute}="${targetColorScheme}"] &`
    });
    const defaultColorSchemeStyleSheet = {};
    const otherColorSchemesStyleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css: css2,
        vars
      } = generateCssVars(key);
      theme.vars = deepmerge(theme.vars, vars);
      if (key === calculatedColorScheme) {
        Object.keys(scheme).forEach((schemeKey) => {
          if (scheme[schemeKey] && typeof scheme[schemeKey] === "object") {
            theme[schemeKey] = _extends({}, theme[schemeKey], scheme[schemeKey]);
          } else {
            theme[schemeKey] = scheme[schemeKey];
          }
        });
        if (theme.palette) {
          theme.palette.colorScheme = key;
        }
      }
      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === "string") {
          return defaultColorScheme;
        }
        if (defaultMode === "dark") {
          return defaultColorScheme.dark;
        }
        return defaultColorScheme.light;
      })();
      if (key === resolvedDefaultColorScheme) {
        if (excludeVariablesFromRoot) {
          const excludedVariables = {};
          excludeVariablesFromRoot(cssVarPrefix).forEach((cssVar) => {
            excludedVariables[cssVar] = css2[cssVar];
            delete css2[cssVar];
          });
          defaultColorSchemeStyleSheet[`[${attribute}="${key}"]`] = excludedVariables;
        }
        defaultColorSchemeStyleSheet[`${colorSchemeSelector}, [${attribute}="${key}"]`] = css2;
      } else {
        otherColorSchemesStyleSheet[`${colorSchemeSelector === ":root" ? "" : colorSchemeSelector}[${attribute}="${key}"]`] = css2;
      }
    });
    theme.vars = deepmerge(theme.vars, rootVars);
    React22.useEffect(() => {
      if (colorScheme && colorSchemeNode) {
        colorSchemeNode.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute, colorSchemeNode]);
    React22.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css2 = documentNode.createElement("style");
        css2.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css2);
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css2);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React22.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    const contextValue = React22.useMemo(() => ({
      mode,
      systemMode,
      setMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme,
      setColorScheme,
      allColorSchemes
    }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode]);
    let shouldGenerateStyleSheet = true;
    if (disableStyleSheetGeneration || nested && (upperTheme == null ? void 0 : upperTheme.cssVarPrefix) === cssVarPrefix) {
      shouldGenerateStyleSheet = false;
    }
    const element = (0, import_jsx_runtime9.jsxs)(React22.Fragment, {
      children: [shouldGenerateStyleSheet && (0, import_jsx_runtime9.jsxs)(React22.Fragment, {
        children: [(0, import_jsx_runtime8.jsx)(GlobalStyles, {
          styles: {
            [colorSchemeSelector]: rootCss
          }
        }), (0, import_jsx_runtime8.jsx)(GlobalStyles, {
          styles: defaultColorSchemeStyleSheet
        }), (0, import_jsx_runtime8.jsx)(GlobalStyles, {
          styles: otherColorSchemesStyleSheet
        })]
      }), (0, import_jsx_runtime8.jsx)(ThemeProvider_default2, {
        themeId: scopedTheme ? themeId : void 0,
        theme: resolveTheme2 ? resolveTheme2(theme) : theme,
        children
      })]
    });
    if (nested) {
      return element;
    }
    return (0, import_jsx_runtime8.jsx)(ColorSchemeContext.Provider, {
      value: contextValue,
      children: element
    });
  }
  true ? CssVarsProvider.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: import_prop_types12.default.string,
    /**
     * The component tree.
     */
    children: import_prop_types12.default.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: import_prop_types12.default.any,
    /**
     * The CSS selector for attaching the generated custom properties
     */
    colorSchemeSelector: import_prop_types12.default.string,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: import_prop_types12.default.string,
    /**
     * The initial color scheme used.
     */
    defaultColorScheme: import_prop_types12.default.oneOfType([import_prop_types12.default.string, import_prop_types12.default.object]),
    /**
     * The initial mode used.
     */
    defaultMode: import_prop_types12.default.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: import_prop_types12.default.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: import_prop_types12.default.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: import_prop_types12.default.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: import_prop_types12.default.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: import_prop_types12.default.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: import_prop_types12.default.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: import_prop_types12.default.object
  } : void 0;
  const defaultLightColorScheme = typeof designSystemColorScheme === "string" ? designSystemColorScheme : designSystemColorScheme.light;
  const defaultDarkColorScheme = typeof designSystemColorScheme === "string" ? designSystemColorScheme : designSystemColorScheme.dark;
  const getInitColorSchemeScript2 = (params) => getInitColorSchemeScript(_extends({
    attribute: defaultAttribute,
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    defaultMode: designSystemMode,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey: defaultModeStorageKey
  }, params));
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript: getInitColorSchemeScript2
  };
}
var React22, import_prop_types12, import_jsx_runtime8, import_jsx_runtime9, _excluded7, DISABLE_CSS_TRANSITION;
var init_createCssVarsProvider = __esm({
  "node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    React22 = __toESM(require_react());
    import_prop_types12 = __toESM(require_prop_types());
    init_esm();
    init_styled_engine();
    init_private_theming();
    init_ThemeProvider4();
    init_getInitColorSchemeScript();
    init_useCurrentColorScheme();
    import_jsx_runtime8 = __toESM(require_jsx_runtime());
    import_jsx_runtime9 = __toESM(require_jsx_runtime());
    _excluded7 = ["colorSchemes", "components", "generateCssVars", "cssVarPrefix"];
    DISABLE_CSS_TRANSITION = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  }
});

// node_modules/@mui/system/esm/cssVars/createGetCssVar.js
function createGetCssVar(prefix = "") {
  function appendVar(...vars) {
    if (!vars.length) {
      return "";
    }
    const value = vars[0];
    if (typeof value === "string" && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return `, var(--${prefix ? `${prefix}-` : ""}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ""}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}
var init_createGetCssVar = __esm({
  "node_modules/@mui/system/esm/cssVars/createGetCssVar.js"() {
  }
});

// node_modules/@mui/system/esm/cssVars/cssVarsParser.js
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar
  } = options || {};
  const css2 = {};
  const vars = {};
  const varsWithDefaults = {};
  walkObjectDeep(
    theme,
    (keys, value, arrayKeys) => {
      if (typeof value === "string" || typeof value === "number") {
        if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
          const cssVar = `--${prefix ? `${prefix}-` : ""}${keys.join("-")}`;
          Object.assign(css2, {
            [cssVar]: getCssValue(keys, value)
          });
          assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
          assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${value})`, arrayKeys);
        }
      }
    },
    (keys) => keys[0] === "vars"
    // skip 'vars/*' paths
  );
  return {
    css: css2,
    vars,
    varsWithDefaults
  };
}
var assignNestedKeys, walkObjectDeep, getCssValue;
var init_cssVarsParser = __esm({
  "node_modules/@mui/system/esm/cssVars/cssVarsParser.js"() {
    assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
      let temp = obj;
      keys.forEach((k, index) => {
        if (index === keys.length - 1) {
          if (Array.isArray(temp)) {
            temp[Number(k)] = value;
          } else if (temp && typeof temp === "object") {
            temp[k] = value;
          }
        } else if (temp && typeof temp === "object") {
          if (!temp[k]) {
            temp[k] = arrayKeys.includes(k) ? [] : {};
          }
          temp = temp[k];
        }
      });
    };
    walkObjectDeep = (obj, callback, shouldSkipPaths) => {
      function recurse(object, parentKeys = [], arrayKeys = []) {
        Object.entries(object).forEach(([key, value]) => {
          if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
            if (value !== void 0 && value !== null) {
              if (typeof value === "object" && Object.keys(value).length > 0) {
                recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
              } else {
                callback([...parentKeys, key], value, arrayKeys);
              }
            }
          }
        });
      }
      recurse(obj);
    };
    getCssValue = (keys, value) => {
      if (typeof value === "number") {
        if (["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) => keys.includes(prop))) {
          return value;
        }
        const lastKey = keys[keys.length - 1];
        if (lastKey.toLowerCase().indexOf("opacity") >= 0) {
          return value;
        }
        return `${value}px`;
      }
      return value;
    };
  }
});

// node_modules/@mui/system/esm/cssVars/prepareCssVars.js
function prepareCssVars(theme, parserConfig) {
  const {
    colorSchemes = {}
  } = theme, otherTheme = _objectWithoutPropertiesLoose(theme, _excluded8);
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
    light: light2
  } = colorSchemes, otherColorSchemes = _objectWithoutPropertiesLoose(colorSchemes, _excluded22);
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css: css2,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css: css2,
      vars
    };
  });
  if (light2) {
    const {
      css: css2,
      vars,
      varsWithDefaults
    } = cssVarsParser(light2, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap.light = {
      css: css2,
      vars
    };
  }
  const generateCssVars = (colorScheme) => {
    if (!colorScheme) {
      return {
        css: _extends({}, rootCss),
        vars: rootVars
      };
    }
    return {
      css: _extends({}, colorSchemesMap[colorScheme].css),
      vars: colorSchemesMap[colorScheme].vars
    };
  };
  return {
    vars: themeVars,
    generateCssVars
  };
}
var _excluded8, _excluded22, prepareCssVars_default;
var init_prepareCssVars = __esm({
  "node_modules/@mui/system/esm/cssVars/prepareCssVars.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    init_cssVarsParser();
    _excluded8 = ["colorSchemes", "components"];
    _excluded22 = ["light"];
    prepareCssVars_default = prepareCssVars;
  }
});

// node_modules/@mui/system/esm/cssVars/createCssVarsTheme.js
var init_createCssVarsTheme = __esm({
  "node_modules/@mui/system/esm/cssVars/createCssVarsTheme.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_prepareCssVars();
  }
});

// node_modules/@mui/system/esm/Container/createContainer.js
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps3 = useThemePropsDefault,
    componentName = "MuiContainer"
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => _extends({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !ownerState.disableGutters && {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => _extends({}, ownerState.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }
  }, ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  ownerState.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up(ownerState.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
    }
  }));
  const Container2 = React23.forwardRef(function Container3(inProps, ref) {
    const props = useThemeProps3(inProps);
    const {
      className,
      component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth: maxWidth2 = "lg"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
    const ownerState = _extends({}, props, {
      component,
      disableGutters,
      fixed,
      maxWidth: maxWidth2
    });
    const classes = useUtilityClasses(ownerState, componentName);
    return (
      // @ts-ignore theme is injected by the styled util
      (0, import_jsx_runtime10.jsx)(ContainerRoot, _extends({
        as: component,
        ownerState,
        className: clsx_default(classes.root, className),
        ref
      }, other))
    );
  });
  true ? Container2.propTypes = {
    children: import_prop_types13.default.node,
    classes: import_prop_types13.default.object,
    className: import_prop_types13.default.string,
    component: import_prop_types13.default.elementType,
    disableGutters: import_prop_types13.default.bool,
    fixed: import_prop_types13.default.bool,
    maxWidth: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types13.default.string]),
    sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object])
  } : void 0;
  return Container2;
}
var React23, import_prop_types13, import_jsx_runtime10, _excluded9, defaultTheme, defaultCreateStyledComponent, useThemePropsDefault, useUtilityClasses;
var init_createContainer = __esm({
  "node_modules/@mui/system/esm/Container/createContainer.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React23 = __toESM(require_react());
    import_prop_types13 = __toESM(require_prop_types());
    init_clsx();
    init_esm();
    init_useThemeProps2();
    init_styled();
    init_createTheme2();
    import_jsx_runtime10 = __toESM(require_jsx_runtime());
    _excluded9 = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"];
    defaultTheme = createTheme_default();
    defaultCreateStyledComponent = styled_default("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
      }
    });
    useThemePropsDefault = (inProps) => useThemeProps({
      props: inProps,
      name: "MuiContainer",
      defaultTheme
    });
    useUtilityClasses = (ownerState, componentName) => {
      const getContainerUtilityClass = (slot) => {
        return generateUtilityClass(componentName, slot);
      };
      const {
        classes,
        fixed,
        disableGutters,
        maxWidth: maxWidth2
      } = ownerState;
      const slots = {
        root: ["root", maxWidth2 && `maxWidth${capitalize(String(maxWidth2))}`, fixed && "fixed", disableGutters && "disableGutters"]
      };
      return composeClasses(slots, getContainerUtilityClass, classes);
    };
  }
});

// node_modules/@mui/system/esm/Container/Container.js
var import_prop_types14, Container;
var init_Container = __esm({
  "node_modules/@mui/system/esm/Container/Container.js"() {
    "use client";
    import_prop_types14 = __toESM(require_prop_types());
    init_createContainer();
    Container = createContainer();
    true ? Container.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit TypeScript types and run "yarn proptypes"  |
      // ----------------------------------------------------------------------
      /**
       * @ignore
       */
      children: import_prop_types14.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types14.default.object,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types14.default.elementType,
      /**
       * If `true`, the left and right padding is removed.
       * @default false
       */
      disableGutters: import_prop_types14.default.bool,
      /**
       * Set the max-width to match the min-width of the current breakpoint.
       * This is useful if you'd prefer to design for a fixed set of sizes
       * instead of trying to accommodate a fully fluid viewport.
       * It's fluid by default.
       * @default false
       */
      fixed: import_prop_types14.default.bool,
      /**
       * Determine the max-width of the container.
       * The container width grows with the size of the screen.
       * Set to `false` to disable `maxWidth`.
       * @default 'lg'
       */
      maxWidth: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types14.default.string]),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object])
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Container/containerClasses.js
var containerClasses;
var init_containerClasses = __esm({
  "node_modules/@mui/system/esm/Container/containerClasses.js"() {
    init_esm();
    containerClasses = generateUtilityClasses("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);
  }
});

// node_modules/@mui/system/esm/Container/index.js
var init_Container2 = __esm({
  "node_modules/@mui/system/esm/Container/index.js"() {
    "use client";
    init_Container();
    init_containerClasses();
    init_containerClasses();
  }
});

// node_modules/@mui/system/esm/Unstable_Grid/traverseBreakpoints.js
var filterBreakpointKeys, traverseBreakpoints;
var init_traverseBreakpoints = __esm({
  "node_modules/@mui/system/esm/Unstable_Grid/traverseBreakpoints.js"() {
    filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter((key) => responsiveKeys.includes(key));
    traverseBreakpoints = (breakpoints, responsive, iterator) => {
      const smallestBreakpoint = breakpoints.keys[0];
      if (Array.isArray(responsive)) {
        responsive.forEach((breakpointValue, index) => {
          iterator((responsiveStyles, style4) => {
            if (index <= breakpoints.keys.length - 1) {
              if (index === 0) {
                Object.assign(responsiveStyles, style4);
              } else {
                responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style4;
              }
            }
          }, breakpointValue);
        });
      } else if (responsive && typeof responsive === "object") {
        const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
        keys.forEach((key) => {
          if (breakpoints.keys.indexOf(key) !== -1) {
            const breakpointValue = responsive[key];
            if (breakpointValue !== void 0) {
              iterator((responsiveStyles, style4) => {
                if (smallestBreakpoint === key) {
                  Object.assign(responsiveStyles, style4);
                } else {
                  responsiveStyles[breakpoints.up(key)] = style4;
                }
              }, breakpointValue);
            }
          }
        });
      } else if (typeof responsive === "number" || typeof responsive === "string") {
        iterator((responsiveStyles, style4) => {
          Object.assign(responsiveStyles, style4);
        }, responsive);
      }
    };
  }
});

// node_modules/@mui/system/esm/Unstable_Grid/gridGenerator.js
function appendLevel(level) {
  if (!level) {
    return "";
  }
  return `Level${level}`;
}
function isNestedContainer(ownerState) {
  return ownerState.unstable_level > 0 && ownerState.container;
}
function createGetSelfSpacing(ownerState) {
  return function getSelfSpacing(axis) {
    return `var(--Grid-${axis}Spacing${appendLevel(ownerState.unstable_level)})`;
  };
}
function createGetParentSpacing(ownerState) {
  return function getParentSpacing(axis) {
    if (ownerState.unstable_level === 0) {
      return `var(--Grid-${axis}Spacing)`;
    }
    return `var(--Grid-${axis}Spacing${appendLevel(ownerState.unstable_level - 1)})`;
  };
}
function getParentColumns(ownerState) {
  if (ownerState.unstable_level === 0) {
    return `var(--Grid-columns)`;
  }
  return `var(--Grid-columns${appendLevel(ownerState.unstable_level - 1)})`;
}
var generateGridSizeStyles, generateGridOffsetStyles, generateGridColumnsStyles, generateGridRowSpacingStyles, generateGridColumnSpacingStyles, generateGridDirectionStyles, generateGridStyles, generateSizeClassNames, generateSpacingClassNames, generateDirectionClasses;
var init_gridGenerator = __esm({
  "node_modules/@mui/system/esm/Unstable_Grid/gridGenerator.js"() {
    init_extends();
    init_traverseBreakpoints();
    generateGridSizeStyles = ({
      theme,
      ownerState
    }) => {
      const getSelfSpacing = createGetSelfSpacing(ownerState);
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.gridSize, (appendStyle, value) => {
        let style4 = {};
        if (value === true) {
          style4 = {
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: "100%"
          };
        }
        if (value === "auto") {
          style4 = {
            flexBasis: "auto",
            flexGrow: 0,
            flexShrink: 0,
            maxWidth: "none",
            width: "auto"
          };
        }
        if (typeof value === "number") {
          style4 = {
            flexGrow: 0,
            flexBasis: "auto",
            width: `calc(100% * ${value} / ${getParentColumns(ownerState)}${isNestedContainer(ownerState) ? ` + ${getSelfSpacing("column")}` : ""})`
          };
        }
        appendStyle(styles, style4);
      });
      return styles;
    };
    generateGridOffsetStyles = ({
      theme,
      ownerState
    }) => {
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.gridOffset, (appendStyle, value) => {
        let style4 = {};
        if (value === "auto") {
          style4 = {
            marginLeft: "auto"
          };
        }
        if (typeof value === "number") {
          style4 = {
            marginLeft: value === 0 ? "0px" : `calc(100% * ${value} / ${getParentColumns(ownerState)})`
          };
        }
        appendStyle(styles, style4);
      });
      return styles;
    };
    generateGridColumnsStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const styles = isNestedContainer(ownerState) ? {
        [`--Grid-columns${appendLevel(ownerState.unstable_level)}`]: getParentColumns(ownerState)
      } : {
        "--Grid-columns": 12
      };
      traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
        appendStyle(styles, {
          [`--Grid-columns${appendLevel(ownerState.unstable_level)}`]: value
        });
      });
      return styles;
    };
    generateGridRowSpacingStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const getParentSpacing = createGetParentSpacing(ownerState);
      const styles = isNestedContainer(ownerState) ? {
        // Set the default spacing as its parent spacing.
        // It will be overridden if spacing props are provided
        [`--Grid-rowSpacing${appendLevel(ownerState.unstable_level)}`]: getParentSpacing("row")
      } : {};
      traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
        var _theme$spacing;
        appendStyle(styles, {
          [`--Grid-rowSpacing${appendLevel(ownerState.unstable_level)}`]: typeof value === "string" ? value : (_theme$spacing = theme.spacing) == null ? void 0 : _theme$spacing.call(theme, value)
        });
      });
      return styles;
    };
    generateGridColumnSpacingStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const getParentSpacing = createGetParentSpacing(ownerState);
      const styles = isNestedContainer(ownerState) ? {
        // Set the default spacing as its parent spacing.
        // It will be overridden if spacing props are provided
        [`--Grid-columnSpacing${appendLevel(ownerState.unstable_level)}`]: getParentSpacing("column")
      } : {};
      traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
        var _theme$spacing2;
        appendStyle(styles, {
          [`--Grid-columnSpacing${appendLevel(ownerState.unstable_level)}`]: typeof value === "string" ? value : (_theme$spacing2 = theme.spacing) == null ? void 0 : _theme$spacing2.call(theme, value)
        });
      });
      return styles;
    };
    generateGridDirectionStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
        appendStyle(styles, {
          flexDirection: value
        });
      });
      return styles;
    };
    generateGridStyles = ({
      ownerState
    }) => {
      const getSelfSpacing = createGetSelfSpacing(ownerState);
      const getParentSpacing = createGetParentSpacing(ownerState);
      return _extends({
        minWidth: 0,
        boxSizing: "border-box"
      }, ownerState.container && _extends({
        display: "flex",
        flexWrap: "wrap"
      }, ownerState.wrap && ownerState.wrap !== "wrap" && {
        flexWrap: ownerState.wrap
      }, {
        margin: `calc(${getSelfSpacing("row")} / -2) calc(${getSelfSpacing("column")} / -2)`
      }, ownerState.disableEqualOverflow && {
        margin: `calc(${getSelfSpacing("row")} * -1) 0px 0px calc(${getSelfSpacing("column")} * -1)`
      }), (!ownerState.container || isNestedContainer(ownerState)) && _extends({
        padding: `calc(${getParentSpacing("row")} / 2) calc(${getParentSpacing("column")} / 2)`
      }, (ownerState.disableEqualOverflow || ownerState.parentDisableEqualOverflow) && {
        padding: `${getParentSpacing("row")} 0px 0px ${getParentSpacing("column")}`
      }));
    };
    generateSizeClassNames = (gridSize) => {
      const classNames = [];
      Object.entries(gridSize).forEach(([key, value]) => {
        if (value !== false && value !== void 0) {
          classNames.push(`grid-${key}-${String(value)}`);
        }
      });
      return classNames;
    };
    generateSpacingClassNames = (spacing2, smallestBreakpoint = "xs") => {
      function isValidSpacing(val) {
        if (val === void 0) {
          return false;
        }
        return typeof val === "string" && !Number.isNaN(Number(val)) || typeof val === "number" && val > 0;
      }
      if (isValidSpacing(spacing2)) {
        return [`spacing-${smallestBreakpoint}-${String(spacing2)}`];
      }
      if (typeof spacing2 === "object" && !Array.isArray(spacing2)) {
        const classNames = [];
        Object.entries(spacing2).forEach(([key, value]) => {
          if (isValidSpacing(value)) {
            classNames.push(`spacing-${key}-${String(value)}`);
          }
        });
        return classNames;
      }
      return [];
    };
    generateDirectionClasses = (direction) => {
      if (direction === void 0) {
        return [];
      }
      if (typeof direction === "object") {
        return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
      }
      return [`direction-xs-${String(direction)}`];
    };
  }
});

// node_modules/@mui/system/esm/Unstable_Grid/createGrid.js
function useThemePropsDefault2(props) {
  return useThemeProps({
    props,
    name: "MuiGrid",
    defaultTheme: defaultTheme2
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent2,
    useThemeProps: useThemeProps3 = useThemePropsDefault2,
    componentName = "MuiGrid"
  } = options;
  const OverflowContext = React24.createContext(void 0);
  const useUtilityClasses2 = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing: spacing2,
      wrap,
      gridSize
    } = ownerState;
    const slots = {
      root: ["root", container && "container", wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(gridSize), ...container ? generateSpacingClassNames(spacing2, theme.breakpoints.keys[0]) : []]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid2 = React24.forwardRef(function Grid3(inProps, ref) {
    var _inProps$columns, _inProps$spacing, _ref, _inProps$rowSpacing, _ref2, _inProps$columnSpacin, _ref3, _disableEqualOverflow;
    const theme = useTheme_default();
    const themeProps = useThemeProps3(inProps);
    const props = extendSxProp(themeProps);
    const overflow2 = React24.useContext(OverflowContext);
    const {
      className,
      children,
      columns: columnsProp = 12,
      container = false,
      component = "div",
      direction = "row",
      wrap = "wrap",
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      disableEqualOverflow: themeDisableEqualOverflow,
      unstable_level: level = 0
    } = props, rest = _objectWithoutPropertiesLoose(props, _excluded10);
    let disableEqualOverflow = themeDisableEqualOverflow;
    if (level && themeDisableEqualOverflow !== void 0) {
      disableEqualOverflow = inProps.disableEqualOverflow;
    }
    const gridSize = {};
    const gridOffset = {};
    const other = {};
    Object.entries(rest).forEach(([key, val]) => {
      if (theme.breakpoints.values[key] !== void 0) {
        gridSize[key] = val;
      } else if (theme.breakpoints.values[key.replace("Offset", "")] !== void 0) {
        gridOffset[key.replace("Offset", "")] = val;
      } else {
        other[key] = val;
      }
    });
    const columns = (_inProps$columns = inProps.columns) != null ? _inProps$columns : level ? void 0 : columnsProp;
    const spacing2 = (_inProps$spacing = inProps.spacing) != null ? _inProps$spacing : level ? void 0 : spacingProp;
    const rowSpacing = (_ref = (_inProps$rowSpacing = inProps.rowSpacing) != null ? _inProps$rowSpacing : inProps.spacing) != null ? _ref : level ? void 0 : rowSpacingProp;
    const columnSpacing = (_ref2 = (_inProps$columnSpacin = inProps.columnSpacing) != null ? _inProps$columnSpacin : inProps.spacing) != null ? _ref2 : level ? void 0 : columnSpacingProp;
    const ownerState = _extends({}, props, {
      level,
      columns,
      container,
      direction,
      wrap,
      spacing: spacing2,
      rowSpacing,
      columnSpacing,
      gridSize,
      gridOffset,
      disableEqualOverflow: (_ref3 = (_disableEqualOverflow = disableEqualOverflow) != null ? _disableEqualOverflow : overflow2) != null ? _ref3 : false,
      // use context value if exists.
      parentDisableEqualOverflow: overflow2
      // for nested grid
    });
    const classes = useUtilityClasses2(ownerState, theme);
    let result = (0, import_jsx_runtime11.jsx)(GridRoot, _extends({
      ref,
      as: component,
      ownerState,
      className: clsx_default(classes.root, className)
    }, other, {
      children: React24.Children.map(children, (child) => {
        if (React24.isValidElement(child) && isMuiElement(child, ["Grid"])) {
          var _child$props$unstable;
          return React24.cloneElement(child, {
            unstable_level: (_child$props$unstable = child.props.unstable_level) != null ? _child$props$unstable : level + 1
          });
        }
        return child;
      })
    }));
    if (disableEqualOverflow !== void 0 && disableEqualOverflow !== (overflow2 != null ? overflow2 : false)) {
      result = (0, import_jsx_runtime11.jsx)(OverflowContext.Provider, {
        value: disableEqualOverflow,
        children: result
      });
    }
    return result;
  });
  true ? Grid2.propTypes = {
    children: import_prop_types15.default.node,
    className: import_prop_types15.default.string,
    columns: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.number), import_prop_types15.default.number, import_prop_types15.default.object]),
    columnSpacing: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])), import_prop_types15.default.number, import_prop_types15.default.object, import_prop_types15.default.string]),
    component: import_prop_types15.default.elementType,
    container: import_prop_types15.default.bool,
    direction: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types15.default.arrayOf(import_prop_types15.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types15.default.object]),
    disableEqualOverflow: import_prop_types15.default.bool,
    lg: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number, import_prop_types15.default.bool]),
    lgOffset: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number]),
    md: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number, import_prop_types15.default.bool]),
    mdOffset: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number]),
    rowSpacing: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])), import_prop_types15.default.number, import_prop_types15.default.object, import_prop_types15.default.string]),
    sm: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number, import_prop_types15.default.bool]),
    smOffset: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number]),
    spacing: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])), import_prop_types15.default.number, import_prop_types15.default.object, import_prop_types15.default.string]),
    sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
    wrap: import_prop_types15.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
    xl: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number, import_prop_types15.default.bool]),
    xlOffset: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number]),
    xs: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number, import_prop_types15.default.bool]),
    xsOffset: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number])
  } : void 0;
  Grid2.muiName = "Grid";
  return Grid2;
}
var React24, import_prop_types15, import_jsx_runtime11, _excluded10, defaultTheme2, defaultCreateStyledComponent2;
var init_createGrid = __esm({
  "node_modules/@mui/system/esm/Unstable_Grid/createGrid.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    React24 = __toESM(require_react());
    import_prop_types15 = __toESM(require_prop_types());
    init_clsx();
    init_esm();
    init_styled();
    init_useThemeProps2();
    init_useTheme();
    init_styleFunctionSx2();
    init_createTheme2();
    init_gridGenerator();
    import_jsx_runtime11 = __toESM(require_jsx_runtime());
    _excluded10 = ["className", "children", "columns", "container", "component", "direction", "wrap", "spacing", "rowSpacing", "columnSpacing", "disableEqualOverflow", "unstable_level"];
    defaultTheme2 = createTheme_default();
    defaultCreateStyledComponent2 = styled_default("div", {
      name: "MuiGrid",
      slot: "Root",
      overridesResolver: (props, styles) => styles.root
    });
  }
});

// node_modules/@mui/system/esm/Unstable_Grid/Grid.js
var import_prop_types16, Grid;
var init_Grid = __esm({
  "node_modules/@mui/system/esm/Unstable_Grid/Grid.js"() {
    "use client";
    import_prop_types16 = __toESM(require_prop_types());
    init_createGrid();
    Grid = createGrid();
    true ? Grid.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit TypeScript types and run "yarn proptypes"  |
      // ----------------------------------------------------------------------
      /**
       * The content of the component.
       */
      children: import_prop_types16.default.node,
      /**
       * The number of columns.
       * @default 12
       */
      columns: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.number), import_prop_types16.default.number, import_prop_types16.default.object]),
      /**
       * Defines the horizontal space between the type `item` components.
       * It overrides the value of the `spacing` prop.
       */
      columnSpacing: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])), import_prop_types16.default.number, import_prop_types16.default.object, import_prop_types16.default.string]),
      /**
       * If `true`, the component will have the flex *container* behavior.
       * You should be wrapping *items* with a *container*.
       * @default false
       */
      container: import_prop_types16.default.bool,
      /**
       * Defines the `flex-direction` style property.
       * It is applied for all screen sizes.
       * @default 'row'
       */
      direction: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types16.default.arrayOf(import_prop_types16.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types16.default.object]),
      /**
       * If `true`, the negative margin and padding are apply only to the top and left sides of the grid.
       */
      disableEqualOverflow: import_prop_types16.default.bool,
      /**
       * If a number, it sets the number of columns the grid item uses.
       * It can't be greater than the total number of columns of the container (12 by default).
       * If 'auto', the grid item's width matches its content.
       * If false, the prop is ignored.
       * If true, the grid item's width grows to use the space available in the grid container.
       * The value is applied for the `lg` breakpoint and wider screens if not overridden.
       * @default false
       */
      lg: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number, import_prop_types16.default.bool]),
      /**
       * If a number, it sets the margin-left equals to the number of columns the grid item uses.
       * If 'auto', the grid item push itself to the right-end of the container.
       * The value is applied for the `lg` breakpoint and wider screens if not overridden.
       */
      lgOffset: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number]),
      /**
       * If a number, it sets the number of columns the grid item uses.
       * It can't be greater than the total number of columns of the container (12 by default).
       * If 'auto', the grid item's width matches its content.
       * If false, the prop is ignored.
       * If true, the grid item's width grows to use the space available in the grid container.
       * The value is applied for the `md` breakpoint and wider screens if not overridden.
       * @default false
       */
      md: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number, import_prop_types16.default.bool]),
      /**
       * If a number, it sets the margin-left equals to the number of columns the grid item uses.
       * If 'auto', the grid item push itself to the right-end of the container.
       * The value is applied for the `md` breakpoint and wider screens if not overridden.
       */
      mdOffset: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number]),
      /**
       * Defines the vertical space between the type `item` components.
       * It overrides the value of the `spacing` prop.
       */
      rowSpacing: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])), import_prop_types16.default.number, import_prop_types16.default.object, import_prop_types16.default.string]),
      /**
       * If a number, it sets the number of columns the grid item uses.
       * It can't be greater than the total number of columns of the container (12 by default).
       * If 'auto', the grid item's width matches its content.
       * If false, the prop is ignored.
       * If true, the grid item's width grows to use the space available in the grid container.
       * The value is applied for the `sm` breakpoint and wider screens if not overridden.
       * @default false
       */
      sm: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number, import_prop_types16.default.bool]),
      /**
       * If a number, it sets the margin-left equals to the number of columns the grid item uses.
       * If 'auto', the grid item push itself to the right-end of the container.
       * The value is applied for the `sm` breakpoint and wider screens if not overridden.
       */
      smOffset: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number]),
      /**
       * Defines the space between the type `item` components.
       * It can only be used on a type `container` component.
       * @default 0
       */
      spacing: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])), import_prop_types16.default.number, import_prop_types16.default.object, import_prop_types16.default.string]),
      /**
       * @ignore
       */
      sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
      /**
       * @internal
       * The level of the grid starts from `0`
       * and increases when the grid nests inside another grid regardless of container or item.
       *
       * ```js
       * <Grid> // level 0
       *   <Grid> // level 1
       *     <Grid> // level 2
       *   <Grid> // level 1
       * ```
       *
       * Only consecutive grid is considered nesting.
       * A grid container will start at `0` if there are non-Grid element above it.
       *
       * ```js
       * <Grid> // level 0
       *   <div>
       *     <Grid> // level 0
       *       <Grid> // level 1
       * ```
       */
      unstable_level: import_prop_types16.default.number,
      /**
       * Defines the `flex-wrap` style property.
       * It's applied for all screen sizes.
       * @default 'wrap'
       */
      wrap: import_prop_types16.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
      /**
       * If a number, it sets the number of columns the grid item uses.
       * It can't be greater than the total number of columns of the container (12 by default).
       * If 'auto', the grid item's width matches its content.
       * If false, the prop is ignored.
       * If true, the grid item's width grows to use the space available in the grid container.
       * The value is applied for the `xl` breakpoint and wider screens if not overridden.
       * @default false
       */
      xl: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number, import_prop_types16.default.bool]),
      /**
       * If a number, it sets the margin-left equals to the number of columns the grid item uses.
       * If 'auto', the grid item push itself to the right-end of the container.
       * The value is applied for the `xl` breakpoint and wider screens if not overridden.
       */
      xlOffset: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number]),
      /**
       * If a number, it sets the number of columns the grid item uses.
       * It can't be greater than the total number of columns of the container (12 by default).
       * If 'auto', the grid item's width matches its content.
       * If false, the prop is ignored.
       * If true, the grid item's width grows to use the space available in the grid container.
       * The value is applied for all the screen sizes with the lowest priority.
       * @default false
       */
      xs: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number, import_prop_types16.default.bool]),
      /**
       * If a number, it sets the margin-left equals to the number of columns the grid item uses.
       * If 'auto', the grid item push itself to the right-end of the container.
       * The value is applied for the `xs` breakpoint and wider screens if not overridden.
       */
      xsOffset: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number])
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Unstable_Grid/GridProps.js
var init_GridProps = __esm({
  "node_modules/@mui/system/esm/Unstable_Grid/GridProps.js"() {
  }
});

// node_modules/@mui/system/esm/Unstable_Grid/gridClasses.js
var SPACINGS, DIRECTIONS, WRAPS, GRID_SIZES, gridClasses;
var init_gridClasses = __esm({
  "node_modules/@mui/system/esm/Unstable_Grid/gridClasses.js"() {
    init_esm();
    SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
    WRAPS = ["nowrap", "wrap-reverse", "wrap"];
    GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    gridClasses = generateUtilityClasses("MuiGrid", [
      "root",
      "container",
      "item",
      // spacings
      ...SPACINGS.map((spacing2) => `spacing-xs-${spacing2}`),
      // direction values
      ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
      // wrap values
      ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
      // grid sizes for all breakpoints
      ...GRID_SIZES.map((size) => `grid-xs-${size}`),
      ...GRID_SIZES.map((size) => `grid-sm-${size}`),
      ...GRID_SIZES.map((size) => `grid-md-${size}`),
      ...GRID_SIZES.map((size) => `grid-lg-${size}`),
      ...GRID_SIZES.map((size) => `grid-xl-${size}`)
    ]);
  }
});

// node_modules/@mui/system/esm/Unstable_Grid/index.js
var init_Unstable_Grid = __esm({
  "node_modules/@mui/system/esm/Unstable_Grid/index.js"() {
    "use client";
    init_Grid();
    init_createGrid();
    init_GridProps();
    init_gridClasses();
    init_gridClasses();
    init_traverseBreakpoints();
  }
});

// node_modules/@mui/system/esm/Stack/createStack.js
function useThemePropsDefault3(props) {
  return useThemeProps({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme3
  });
}
function joinChildren(children, separator) {
  const childrenArray = React25.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(React25.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent3,
    useThemeProps: useThemeProps3 = useThemePropsDefault3,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses2 = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style3);
  const Stack2 = React25.forwardRef(function Grid2(inProps, ref) {
    const themeProps = useThemeProps3(inProps);
    const props = extendSxProp(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing: spacing2 = 0,
      divider,
      children,
      className,
      useFlexGap = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
    const ownerState = {
      direction,
      spacing: spacing2,
      useFlexGap
    };
    const classes = useUtilityClasses2();
    return (0, import_jsx_runtime12.jsx)(StackRoot, _extends({
      as: component,
      ownerState,
      ref,
      className: clsx_default(classes.root, className)
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });
  true ? Stack2.propTypes = {
    children: import_prop_types17.default.node,
    direction: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types17.default.arrayOf(import_prop_types17.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types17.default.object]),
    divider: import_prop_types17.default.node,
    spacing: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string])), import_prop_types17.default.number, import_prop_types17.default.object, import_prop_types17.default.string]),
    sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object])
  } : void 0;
  return Stack2;
}
var React25, import_prop_types17, import_jsx_runtime12, _excluded11, defaultTheme3, defaultCreateStyledComponent3, getSideFromDirection, style3;
var init_createStack = __esm({
  "node_modules/@mui/system/esm/Stack/createStack.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React25 = __toESM(require_react());
    import_prop_types17 = __toESM(require_prop_types());
    init_clsx();
    init_esm();
    init_styled();
    init_useThemeProps2();
    init_styleFunctionSx2();
    init_createTheme2();
    init_breakpoints();
    init_spacing();
    import_jsx_runtime12 = __toESM(require_jsx_runtime());
    _excluded11 = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
    defaultTheme3 = createTheme_default();
    defaultCreateStyledComponent3 = styled_default("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (props, styles) => styles.root
    });
    getSideFromDirection = (direction) => {
      return {
        row: "Left",
        "row-reverse": "Right",
        column: "Top",
        "column-reverse": "Bottom"
      }[direction];
    };
    style3 = ({
      ownerState,
      theme
    }) => {
      let styles = _extends({
        display: "flex",
        flexDirection: "column"
      }, handleBreakpoints({
        theme
      }, resolveBreakpointValues({
        values: ownerState.direction,
        breakpoints: theme.breakpoints.values
      }), (propValue) => ({
        flexDirection: propValue
      })));
      if (ownerState.spacing) {
        const transformer = createUnarySpacing(theme);
        const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
          if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
            acc[breakpoint] = true;
          }
          return acc;
        }, {});
        const directionValues = resolveBreakpointValues({
          values: ownerState.direction,
          base
        });
        const spacingValues = resolveBreakpointValues({
          values: ownerState.spacing,
          base
        });
        if (typeof directionValues === "object") {
          Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
            const directionValue = directionValues[breakpoint];
            if (!directionValue) {
              const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
              directionValues[breakpoint] = previousDirectionValue;
            }
          });
        }
        const styleFromPropValue = (propValue, breakpoint) => {
          if (ownerState.useFlexGap) {
            return {
              gap: getValue(transformer, propValue)
            };
          }
          return {
            // The useFlexGap={false} implement relies on each child to give up control of the margin.
            // We need to reset the margin to avoid double spacing.
            "& > :not(style):not(style)": {
              margin: 0
            },
            "& > :not(style) ~ :not(style)": {
              [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
            }
          };
        };
        styles = deepmerge(styles, handleBreakpoints({
          theme
        }, spacingValues, styleFromPropValue));
      }
      styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
      return styles;
    };
  }
});

// node_modules/@mui/system/esm/Stack/Stack.js
var import_prop_types18, Stack;
var init_Stack = __esm({
  "node_modules/@mui/system/esm/Stack/Stack.js"() {
    "use client";
    import_prop_types18 = __toESM(require_prop_types());
    init_createStack();
    Stack = createStack();
    true ? Stack.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit TypeScript types and run "yarn proptypes"  |
      // ----------------------------------------------------------------------
      /**
       * The content of the component.
       */
      children: import_prop_types18.default.node,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types18.default.elementType,
      /**
       * Defines the `flex-direction` style property.
       * It is applied for all screen sizes.
       * @default 'column'
       */
      direction: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types18.default.arrayOf(import_prop_types18.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types18.default.object]),
      /**
       * Add an element between each child.
       */
      divider: import_prop_types18.default.node,
      /**
       * Defines the space between immediate children.
       * @default 0
       */
      spacing: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string])), import_prop_types18.default.number, import_prop_types18.default.object, import_prop_types18.default.string]),
      /**
       * The system prop, which allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object]),
      /**
       * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
       *
       * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
       * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
       *
       * To enable this flag globally, follow the theme's default props configuration.
       * @default false
       */
      useFlexGap: import_prop_types18.default.bool
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Stack/StackProps.js
var init_StackProps = __esm({
  "node_modules/@mui/system/esm/Stack/StackProps.js"() {
  }
});

// node_modules/@mui/system/esm/Stack/stackClasses.js
var stackClasses;
var init_stackClasses = __esm({
  "node_modules/@mui/system/esm/Stack/stackClasses.js"() {
    init_esm();
    stackClasses = generateUtilityClasses("MuiStack", ["root"]);
  }
});

// node_modules/@mui/system/esm/Stack/index.js
var init_Stack2 = __esm({
  "node_modules/@mui/system/esm/Stack/index.js"() {
    "use client";
    init_Stack();
    init_createStack();
    init_StackProps();
    init_stackClasses();
    init_stackClasses();
  }
});

// node_modules/@mui/system/esm/index.js
var init_esm2 = __esm({
  "node_modules/@mui/system/esm/index.js"() {
    "use client";
    init_esm();
    init_styled_engine();
    init_GlobalStyles4();
    init_borders();
    init_borders();
    init_breakpoints();
    init_breakpoints();
    init_compose();
    init_display();
    init_flexbox();
    init_flexbox();
    init_cssGrid();
    init_cssGrid();
    init_palette();
    init_palette();
    init_positions();
    init_positions();
    init_shadows();
    init_sizing();
    init_sizing();
    init_spacing();
    init_spacing();
    init_style();
    init_typography();
    init_typography();
    init_styleFunctionSx2();
    init_getThemeValue();
    init_Box2();
    init_createBox();
    init_createStyled();
    init_createStyled();
    init_styled();
    init_createTheme2();
    init_createBreakpoints();
    init_createSpacing();
    init_shape();
    init_useThemeProps2();
    init_useTheme();
    init_useThemeWithoutDefault();
    init_colorManipulator();
    init_ThemeProvider4();
    init_createCssVarsProvider();
    init_createGetCssVar();
    init_cssVarsParser();
    init_prepareCssVars();
    init_createCssVarsTheme();
    init_responsivePropType();
    init_createContainer();
    init_Container2();
    init_Container2();
    init_Grid();
    init_Unstable_Grid();
    init_Stack();
    init_Stack2();
  }
});

// node_modules/@mui/material/styles/createTypography.js
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
function createTypography(palette2, typography2) {
  const _ref = typeof typography2 === "function" ? typography2(palette2) : typography2, {
    fontFamily: fontFamily2 = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize: fontSize2 = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded12);
  if (true) {
    if (typeof fontSize2 !== "number") {
      console.error("MUI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize !== "number") {
      console.error("MUI: `htmlFontSize` is required to be a number.");
    }
  }
  const coef = fontSize2 / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => _extends({
    fontFamily: fontFamily2,
    fontWeight: fontWeight2,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: lineHeight2
  }, fontFamily2 === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing2 / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
    // No need to clone deep
  });
}
var _excluded12, caseAllCaps, defaultFontFamily;
var init_createTypography = __esm({
  "node_modules/@mui/material/styles/createTypography.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    _excluded12 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
    caseAllCaps = {
      textTransform: "uppercase"
    };
    defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  }
});

// node_modules/@mui/material/styles/createTransitions.js
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded13);
    if (true) {
      const isString = (value) => typeof value === "string";
      const isNumber = (value) => !isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (typeof options !== "object") {
        console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n"));
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}
var _excluded13, easing, duration;
var init_createTransitions = __esm({
  "node_modules/@mui/material/styles/createTransitions.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    _excluded13 = ["duration", "easing", "delay"];
    easing = {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    };
    duration = {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    };
  }
});

// node_modules/@mui/material/generateUtilityClass/index.js
var init_generateUtilityClass3 = __esm({
  "node_modules/@mui/material/generateUtilityClass/index.js"() {
    init_esm();
  }
});

// node_modules/@mui/material/styles/createMixins.js
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}
var init_createMixins = __esm({
  "node_modules/@mui/material/styles/createMixins.js"() {
    init_extends();
  }
});

// node_modules/@mui/material/colors/common.js
var common, common_default;
var init_common = __esm({
  "node_modules/@mui/material/colors/common.js"() {
    common = {
      black: "#000",
      white: "#fff"
    };
    common_default = common;
  }
});

// node_modules/@mui/material/colors/grey.js
var grey, grey_default;
var init_grey = __esm({
  "node_modules/@mui/material/colors/grey.js"() {
    grey = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161"
    };
    grey_default = grey;
  }
});

// node_modules/@mui/material/colors/purple.js
var purple, purple_default;
var init_purple = __esm({
  "node_modules/@mui/material/colors/purple.js"() {
    purple = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff"
    };
    purple_default = purple;
  }
});

// node_modules/@mui/material/colors/red.js
var red, red_default;
var init_red = __esm({
  "node_modules/@mui/material/colors/red.js"() {
    red = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000"
    };
    red_default = red;
  }
});

// node_modules/@mui/material/colors/orange.js
var orange, orange_default;
var init_orange = __esm({
  "node_modules/@mui/material/colors/orange.js"() {
    orange = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00"
    };
    orange_default = orange;
  }
});

// node_modules/@mui/material/colors/blue.js
var blue, blue_default;
var init_blue = __esm({
  "node_modules/@mui/material/colors/blue.js"() {
    blue = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff"
    };
    blue_default = blue;
  }
});

// node_modules/@mui/material/colors/lightBlue.js
var lightBlue, lightBlue_default;
var init_lightBlue = __esm({
  "node_modules/@mui/material/colors/lightBlue.js"() {
    lightBlue = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea"
    };
    lightBlue_default = lightBlue;
  }
});

// node_modules/@mui/material/colors/green.js
var green, green_default;
var init_green = __esm({
  "node_modules/@mui/material/colors/green.js"() {
    green = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853"
    };
    green_default = green;
  }
});

// node_modules/@mui/material/styles/createPalette.js
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue_default[200],
      light: blue_default[50],
      dark: blue_default[400]
    };
  }
  return {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple_default[200],
      light: purple_default[50],
      dark: purple_default[400]
    };
  }
  return {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red_default[500],
      light: red_default[300],
      dark: red_default[700]
    };
  }
  return {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue_default[400],
      light: lightBlue_default[300],
      dark: lightBlue_default[700]
    };
  }
  return {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green_default[400],
      light: green_default[300],
      dark: green_default[700]
    };
  }
  return {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange_default[400],
      light: orange_default[300],
      dark: orange_default[700]
    };
  }
  return {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette2) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded14);
  const primary = palette2.primary || getDefaultPrimary(mode);
  const secondary = palette2.secondary || getDefaultSecondary(mode);
  const error = palette2.error || getDefaultError(mode);
  const info = palette2.info || getDefaultInfo(mode);
  const success = palette2.success || getDefaultSuccess(mode);
  const warning = palette2.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (true) {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light
  };
  if (true) {
    if (!modes[mode]) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: _extends({}, common_default),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey: grey_default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}
var _excluded14, light, dark;
var init_createPalette = __esm({
  "node_modules/@mui/material/styles/createPalette.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    init_esm();
    init_esm2();
    init_common();
    init_grey();
    init_purple();
    init_red();
    init_orange();
    init_blue();
    init_lightBlue();
    init_green();
    _excluded14 = ["mode", "contrastThreshold", "tonalOffset"];
    light = {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: "rgba(0, 0, 0, 0.87)",
        // Secondary text.
        secondary: "rgba(0, 0, 0, 0.6)",
        // Disabled text have even lower visual prominence.
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      // The color used to divide different elements.
      divider: "rgba(0, 0, 0, 0.12)",
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common_default.white,
        default: common_default.white
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: "rgba(0, 0, 0, 0.54)",
        // The color of an hovered action.
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: "rgba(0, 0, 0, 0.26)",
        // The background color of a disabled action.
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
    dark = {
      text: {
        primary: common_default.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: common_default.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
});

// node_modules/@mui/material/styles/shadows.js
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
var shadowKeyUmbraOpacity, shadowKeyPenumbraOpacity, shadowAmbientShadowOpacity, shadows, shadows_default2;
var init_shadows2 = __esm({
  "node_modules/@mui/material/styles/shadows.js"() {
    shadowKeyUmbraOpacity = 0.2;
    shadowKeyPenumbraOpacity = 0.14;
    shadowAmbientShadowOpacity = 0.12;
    shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
    shadows_default2 = shadows;
  }
});

// node_modules/@mui/material/styles/zIndex.js
var zIndex2, zIndex_default;
var init_zIndex = __esm({
  "node_modules/@mui/material/styles/zIndex.js"() {
    zIndex2 = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    };
    zIndex_default = zIndex2;
  }
});

// node_modules/@mui/material/styles/createTheme.js
function createTheme2(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded15);
  if (options.vars) {
    throw new Error(true ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : formatMuiErrorMessage(18));
  }
  const palette2 = createPalette(paletteInput);
  const systemTheme = createTheme_default(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette: palette2,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows_default2.slice(),
    typography: createTypography(palette2, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex_default)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (true) {
    const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
    const traverse = (node, component) => {
      let key;
      for (key in node) {
        const child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            const stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.indexOf("Mui") === 0) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
function createMuiTheme(...args) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(["MUI: the createMuiTheme function was renamed to createTheme.", "", "You should use `import { createTheme } from '@mui/material/styles'`"].join("\n"));
    }
  }
  return createTheme2(...args);
}
var _excluded15, warnedOnce, createTheme_default2;
var init_createTheme3 = __esm({
  "node_modules/@mui/material/styles/createTheme.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_esm();
    init_esm();
    init_esm2();
    init_generateUtilityClass3();
    init_createMixins();
    init_createPalette();
    init_createTypography();
    init_shadows2();
    init_createTransitions();
    init_zIndex();
    _excluded15 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
    warnedOnce = false;
    createTheme_default2 = createTheme2;
  }
});

// node_modules/@mui/material/styles/identifier.js
var identifier_default;
var init_identifier = __esm({
  "node_modules/@mui/material/styles/identifier.js"() {
    identifier_default = "$$material";
  }
});

// node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme4, defaultTheme_default;
var init_defaultTheme = __esm({
  "node_modules/@mui/material/styles/defaultTheme.js"() {
    "use client";
    init_createTheme3();
    defaultTheme4 = createTheme_default2();
    defaultTheme_default = defaultTheme4;
  }
});

// node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp, slotShouldForwardProp, styled3, styled_default2;
var init_styled2 = __esm({
  "node_modules/@mui/material/styles/styled.js"() {
    "use client";
    init_esm2();
    init_defaultTheme();
    init_identifier();
    rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
    slotShouldForwardProp = shouldForwardProp;
    styled3 = createStyled3({
      themeId: identifier_default,
      defaultTheme: defaultTheme_default,
      rootShouldForwardProp
    });
    styled_default2 = styled3;
  }
});

// node_modules/@mui/material/styles/useThemeProps.js
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
var init_useThemeProps3 = __esm({
  "node_modules/@mui/material/styles/useThemeProps.js"() {
    "use client";
    init_esm2();
    init_defaultTheme();
    init_identifier();
  }
});

export {
  require_prop_types,
  chainPropTypes,
  deepmerge,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  exactProp,
  require_react_is2 as require_react_is,
  HTMLElementType,
  ponyfillGlobal_default,
  refType_default,
  capitalize,
  createChainedFunction,
  debounce,
  deprecatedPropType,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  requirePropFactory,
  setRef,
  useEnhancedEffect_default,
  useId,
  unsupportedProp,
  useControlled,
  init_useControlled2 as init_useControlled,
  useEventCallback_default,
  useForkRef,
  useIsFocusVisible,
  getScrollbarSize,
  usePreviousProps_default,
  visuallyHidden_default,
  integerPropType_default,
  resolveProps,
  composeClasses,
  ClassNameGenerator_default,
  generateUtilityClass,
  generateUtilityClasses,
  init_generateUtilityClasses2 as init_generateUtilityClasses,
  init_esm,
  StyledEngineProvider,
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose,
  createBreakpoints,
  createSpacing,
  defaultSxConfig_default,
  styleFunctionSx_default,
  useThemeWithoutDefault_default,
  useTheme_default,
  GlobalStyles_default,
  extendSxProp,
  clsx_default,
  init_clsx,
  createBox,
  styled_default,
  hexToRgb,
  decomposeColor,
  private_safeColorChannel,
  recomposeColor,
  rgbToHex,
  hslToRgb,
  getLuminance,
  getContrastRatio,
  alpha,
  private_safeAlpha,
  darken,
  private_safeDarken,
  lighten,
  private_safeLighten,
  emphasize,
  private_safeEmphasize,
  ThemeProvider_default2 as ThemeProvider_default,
  createCssVarsProvider,
  createGetCssVar,
  prepareCssVars_default,
  createStack,
  init_esm2,
  init_generateUtilityClass3 as init_generateUtilityClass,
  init_common,
  init_grey,
  purple_default,
  init_purple,
  red_default,
  init_red,
  orange_default,
  init_orange,
  blue_default,
  init_blue,
  lightBlue_default,
  init_lightBlue,
  green_default,
  init_green,
  createTypography,
  init_createTypography,
  easing,
  duration,
  init_createTransitions,
  createMuiTheme,
  createTheme_default2 as createTheme_default,
  init_createTheme3 as init_createTheme,
  defaultTheme_default,
  init_defaultTheme,
  identifier_default,
  init_identifier,
  rootShouldForwardProp,
  slotShouldForwardProp,
  styled_default2,
  init_styled2 as init_styled,
  useThemeProps2 as useThemeProps,
  init_useThemeProps3 as init_useThemeProps
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/styled-engine/index.js:
  (**
   * @mui/styled-engine v5.15.1
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/private-theming/index.js:
  (**
   * @mui/private-theming v5.15.1
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-ES7LKCJD.js.map
