var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "node_modules/react/cjs/react.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop() {
    }
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result, thenable = ctor();
        thenable.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject, void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error, void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = thenable);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    function startTransition(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      currentTransition.types = null !== prevTransition ? prevTransition.types : null;
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    }
    function addTransitionType(type) {
      var transition = ReactSharedInternals.T;
      if (null !== transition) {
        var transitionTypes = transition.types;
        null === transitionTypes ? transition.types = [type] : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
      } else startTransition(addTransitionType.bind(null, type));
    }
    var Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports2.Activity = REACT_ACTIVITY_TYPE;
    exports2.Children = Children;
    exports2.Component = Component;
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.Profiler = REACT_PROFILER_TYPE;
    exports2.PureComponent = PureComponent;
    exports2.StrictMode = REACT_STRICT_MODE_TYPE;
    exports2.Suspense = REACT_SUSPENSE_TYPE;
    exports2.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
    exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports2.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports2.addTransitionType = addTransitionType;
    exports2.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports2.cacheSignal = function() {
      return null;
    };
    exports2.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports2.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports2.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports2.isValidElement = isValidElement;
    exports2.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports2.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports2.startTransition = startTransition;
    exports2.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports2.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports2.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports2.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports2.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports2.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    exports2.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports2.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports2.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports2.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports2.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports2.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports2.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports2.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports2.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports2.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports2.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports2.version = "19.3.1";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
          case REACT_VIEW_TRANSITION_TYPE:
            return "ViewTransition";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var resolveDebugValue = null, rejectDebugValue = null, ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now(), ioInfo.value = new Promise(function(resolve, reject) {
            resolveDebugValue = resolve;
            rejectDebugValue = reject;
          }));
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                if (null != _ioInfo) {
                  _ioInfo.end = performance.now();
                  var debugValue = null == moduleObject ? void 0 : moduleObject.default;
                  resolveDebugValue(debugValue);
                  _ioInfo.value.status = "fulfilled";
                  _ioInfo.value.value = debugValue;
                }
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now(), _ioInfo2.value.then(noop, noop), rejectDebugValue(error), _ioInfo2.value.status = "rejected", _ioInfo2.value.reason = error);
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function startTransition(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition.types = null !== prevTransition ? prevTransition.types : null;
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      }
      function addTransitionType(type) {
        var transition = ReactSharedInternals.T;
        if (null !== transition) {
          var transitionTypes = transition.types;
          null === transitionTypes ? transition.types = [type] : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
        } else
          0 === ReactSharedInternals.asyncTransitions && console.error(
            "addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."
          ), startTransition(addTransitionType.bind(null, type));
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module2 && module2[requireString]).call(
              module2,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports2.Activity = REACT_ACTIVITY_TYPE;
      exports2.Children = fnName;
      exports2.Component = Component;
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.Profiler = REACT_PROFILER_TYPE;
      exports2.PureComponent = PureComponent;
      exports2.StrictMode = REACT_STRICT_MODE_TYPE;
      exports2.Suspense = REACT_SUSPENSE_TYPE;
      exports2.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
      exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports2.__COMPILER_RUNTIME = deprecatedAPIs;
      exports2.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports2.addTransitionType = addTransitionType;
      exports2.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports2.cacheSignal = function() {
        return null;
      };
      exports2.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports2.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports2.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports2.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        var propName;
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        (propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++) ? (childArray = Error.stackTraceLimit, Error.stackTraceLimit = 10, childrenLength = Error("react-stack-top-frame"), Error.stackTraceLimit = childArray) : childrenLength = unknownOwnerDebugStack;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          childrenLength,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports2.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports2.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports2.isValidElement = isValidElement;
      exports2.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports2.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports2.startTransition = startTransition;
      exports2.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports2.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports2.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports2.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports2.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports2.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports2.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports2.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports2.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports2.useId = function() {
        return resolveDispatcher().useId();
      };
      exports2.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports2.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports2.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports2.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports2.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports2.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports2.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports2.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports2.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports2.version = "19.3.1";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Errors.js
var require_Errors = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AggregateErrors = exports2.FailedToNegotiateWithServerError = exports2.FailedToStartTransportError = exports2.DisabledTransportError = exports2.UnsupportedTransportError = exports2.AbortError = exports2.TimeoutError = exports2.HttpError = void 0;
    var HttpError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
       *
       * @param {string} errorMessage A descriptive error message.
       * @param {number} statusCode The HTTP status code represented by this error.
       */
      constructor(errorMessage, statusCode) {
        const trueProto = new.target.prototype;
        super(`${errorMessage}: Status code '${statusCode}'`);
        this.statusCode = statusCode;
        this.__proto__ = trueProto;
      }
    };
    exports2.HttpError = HttpError;
    var TimeoutError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
       *
       * @param {string} errorMessage A descriptive error message.
       */
      constructor(errorMessage = "A timeout occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    exports2.TimeoutError = TimeoutError;
    var AbortError = class extends Error {
      /** Constructs a new instance of {@link AbortError}.
       *
       * @param {string} errorMessage A descriptive error message.
       */
      constructor(errorMessage = "An abort occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    exports2.AbortError = AbortError;
    var UnsupportedTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "UnsupportedTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports2.UnsupportedTransportError = UnsupportedTransportError;
    var DisabledTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "DisabledTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports2.DisabledTransportError = DisabledTransportError;
    var FailedToStartTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "FailedToStartTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports2.FailedToStartTransportError = FailedToStartTransportError;
    var FailedToNegotiateWithServerError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
       *
       * @param {string} message A descriptive error message.
       */
      constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.errorType = "FailedToNegotiateWithServerError";
        this.__proto__ = trueProto;
      }
    };
    exports2.FailedToNegotiateWithServerError = FailedToNegotiateWithServerError;
    var AggregateErrors = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
       *
       * @param {string} message A descriptive error message.
       * @param {Error[]} innerErrors The collection of errors this error is aggregating.
       */
      constructor(message, innerErrors) {
        const trueProto = new.target.prototype;
        super(message);
        this.innerErrors = innerErrors;
        this.__proto__ = trueProto;
      }
    };
    exports2.AggregateErrors = AggregateErrors;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HttpClient.js
var require_HttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HttpClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HttpClient = exports2.HttpResponse = void 0;
    var HttpResponse = class {
      constructor(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
      }
    };
    exports2.HttpResponse = HttpResponse;
    var HttpClient = class {
      get(url, options) {
        return this.send({
          ...options,
          method: "GET",
          url
        });
      }
      post(url, options) {
        return this.send({
          ...options,
          method: "POST",
          url
        });
      }
      delete(url, options) {
        return this.send({
          ...options,
          method: "DELETE",
          url
        });
      }
      /** Gets all cookies that apply to the specified URL.
       *
       * @param url The URL that the cookies are valid for.
       * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
       */
      // @ts-ignore
      getCookieString(url) {
        return "";
      }
    };
    exports2.HttpClient = HttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ILogger.js
var require_ILogger = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ILogger.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LogLevel = void 0;
    var LogLevel2;
    (function(LogLevel3) {
      LogLevel3[LogLevel3["Trace"] = 0] = "Trace";
      LogLevel3[LogLevel3["Debug"] = 1] = "Debug";
      LogLevel3[LogLevel3["Information"] = 2] = "Information";
      LogLevel3[LogLevel3["Warning"] = 3] = "Warning";
      LogLevel3[LogLevel3["Error"] = 4] = "Error";
      LogLevel3[LogLevel3["Critical"] = 5] = "Critical";
      LogLevel3[LogLevel3["None"] = 6] = "None";
    })(LogLevel2 = exports2.LogLevel || (exports2.LogLevel = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Loggers.js
var require_Loggers = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Loggers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NullLogger = void 0;
    var NullLogger = class {
      constructor() {
      }
      /** @inheritDoc */
      // eslint-disable-next-line
      log(_logLevel, _message) {
      }
    };
    exports2.NullLogger = NullLogger;
    NullLogger.instance = new NullLogger();
  }
});

// node_modules/@microsoft/signalr/dist/cjs/pkg-version.js
var require_pkg_version = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/pkg-version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VERSION = void 0;
    exports2.VERSION = "10.0.11";
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Utils.js
var require_Utils = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getGlobalThis = exports2.getErrorString = exports2.constructUserAgent = exports2.getUserAgentHeader = exports2.ConsoleLogger = exports2.SubjectSubscription = exports2.createLogger = exports2.sendMessage = exports2.isArrayBuffer = exports2.formatArrayBuffer = exports2.getDataDetail = exports2.Platform = exports2.Arg = exports2.VERSION = void 0;
    var ILogger_1 = require_ILogger();
    var Loggers_1 = require_Loggers();
    var pkg_version_1 = require_pkg_version();
    Object.defineProperty(exports2, "VERSION", { enumerable: true, get: function() {
      return pkg_version_1.VERSION;
    } });
    var Arg = class {
      static isRequired(val, name) {
        if (val === null || val === void 0) {
          throw new Error(`The '${name}' argument is required.`);
        }
      }
      static isNotEmpty(val, name) {
        if (!val || val.match(/^\s*$/)) {
          throw new Error(`The '${name}' argument should not be empty.`);
        }
      }
      static isIn(val, values, name) {
        if (!(val in values)) {
          throw new Error(`Unknown ${name} value: ${val}.`);
        }
      }
    };
    exports2.Arg = Arg;
    var Platform = class _Platform {
      // react-native has a window but no document so we should check both
      static get isBrowser() {
        return !_Platform.isNode && typeof window === "object" && typeof window.document === "object";
      }
      // WebWorkers don't have a window object so the isBrowser check would fail
      static get isWebWorker() {
        return !_Platform.isNode && typeof self === "object" && "importScripts" in self;
      }
      // react-native has a window but no document
      static get isReactNative() {
        return !_Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
      }
      // Node apps shouldn't have a window object, but WebWorkers don't either
      // so we need to check for both WebWorker and window
      static get isNode() {
        return typeof process !== "undefined" && process.release && process.release.name === "node";
      }
    };
    exports2.Platform = Platform;
    function getDataDetail(data, includeContent) {
      let detail = "";
      if (isArrayBuffer(data)) {
        detail = `Binary data of length ${data.byteLength}`;
        if (includeContent) {
          detail += `. Content: '${formatArrayBuffer(data)}'`;
        }
      } else if (typeof data === "string") {
        detail = `String data of length ${data.length}`;
        if (includeContent) {
          detail += `. Content: '${data}'`;
        }
      }
      return detail;
    }
    exports2.getDataDetail = getDataDetail;
    function formatArrayBuffer(data) {
      const view = new Uint8Array(data);
      let str = "";
      view.forEach((num) => {
        const pad = num < 16 ? "0" : "";
        str += `0x${pad}${num.toString(16)} `;
      });
      return str.substring(0, str.length - 1);
    }
    exports2.formatArrayBuffer = formatArrayBuffer;
    function isArrayBuffer(val) {
      return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
      val.constructor && val.constructor.name === "ArrayBuffer");
    }
    exports2.isArrayBuffer = isArrayBuffer;
    async function sendMessage(logger, transportName, httpClient, url, content, options) {
      const headers = {};
      const [name, value] = getUserAgentHeader();
      headers[name] = value;
      logger.log(ILogger_1.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
      const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
      const response = await httpClient.post(url, {
        content,
        headers: { ...headers, ...options.headers },
        responseType,
        timeout: options.timeout,
        withCredentials: options.withCredentials
      });
      logger.log(ILogger_1.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
    }
    exports2.sendMessage = sendMessage;
    function createLogger(logger) {
      if (logger === void 0) {
        return new ConsoleLogger(ILogger_1.LogLevel.Information);
      }
      if (logger === null) {
        return Loggers_1.NullLogger.instance;
      }
      if (logger.log !== void 0) {
        return logger;
      }
      return new ConsoleLogger(logger);
    }
    exports2.createLogger = createLogger;
    var SubjectSubscription = class {
      constructor(subject, observer) {
        this._subject = subject;
        this._observer = observer;
      }
      dispose() {
        const index = this._subject.observers.indexOf(this._observer);
        if (index > -1) {
          this._subject.observers.splice(index, 1);
        }
        if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
          this._subject.cancelCallback().catch((_) => {
          });
        }
      }
    };
    exports2.SubjectSubscription = SubjectSubscription;
    var ConsoleLogger = class {
      constructor(minimumLogLevel) {
        this._minLevel = minimumLogLevel;
        this.out = console;
      }
      log(logLevel, message) {
        if (logLevel >= this._minLevel) {
          const msg = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${ILogger_1.LogLevel[logLevel]}: ${message}`;
          switch (logLevel) {
            case ILogger_1.LogLevel.Critical:
            case ILogger_1.LogLevel.Error:
              this.out.error(msg);
              break;
            case ILogger_1.LogLevel.Warning:
              this.out.warn(msg);
              break;
            case ILogger_1.LogLevel.Information:
              this.out.info(msg);
              break;
            default:
              this.out.log(msg);
              break;
          }
        }
      }
    };
    exports2.ConsoleLogger = ConsoleLogger;
    function getUserAgentHeader() {
      let userAgentHeaderName = "X-SignalR-User-Agent";
      if (Platform.isNode) {
        userAgentHeaderName = "User-Agent";
      }
      return [userAgentHeaderName, constructUserAgent(pkg_version_1.VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
    }
    exports2.getUserAgentHeader = getUserAgentHeader;
    function constructUserAgent(version, os, runtime, runtimeVersion) {
      let userAgent = "Microsoft SignalR/";
      const majorAndMinor = version.split(".");
      userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
      userAgent += ` (${version}; `;
      if (os && os !== "") {
        userAgent += `${os}; `;
      } else {
        userAgent += "Unknown OS; ";
      }
      userAgent += `${runtime}`;
      if (runtimeVersion) {
        userAgent += `; ${runtimeVersion}`;
      } else {
        userAgent += "; Unknown Runtime Version";
      }
      userAgent += ")";
      return userAgent;
    }
    exports2.constructUserAgent = constructUserAgent;
    function getOsName() {
      if (Platform.isNode) {
        switch (process.platform) {
          case "win32":
            return "Windows NT";
          case "darwin":
            return "macOS";
          case "linux":
            return "Linux";
          default:
            return process.platform;
        }
      } else {
        return "";
      }
    }
    function getRuntimeVersion() {
      if (Platform.isNode) {
        return process.versions.node;
      }
      return void 0;
    }
    function getRuntime() {
      if (Platform.isNode) {
        return "NodeJS";
      } else {
        return "Browser";
      }
    }
    function getErrorString(e) {
      if (e.stack) {
        return e.stack;
      } else if (e.message) {
        return e.message;
      }
      return `${e}`;
    }
    exports2.getErrorString = getErrorString;
    function getGlobalThis() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      throw new Error("could not find global");
    }
    exports2.getGlobalThis = getGlobalThis;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/FetchHttpClient.js
var require_FetchHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/FetchHttpClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FetchHttpClient = void 0;
    var Errors_1 = require_Errors();
    var HttpClient_1 = require_HttpClient();
    var ILogger_1 = require_ILogger();
    var Utils_1 = require_Utils();
    var FetchHttpClient = class extends HttpClient_1.HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
        if (typeof fetch === "undefined" || Utils_1.Platform.isNode) {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          this._jar = new (requireFunc("tough-cookie")).CookieJar();
          if (typeof fetch === "undefined") {
            this._fetchType = requireFunc("node-fetch");
          } else {
            this._fetchType = fetch;
          }
          this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
        } else {
          this._fetchType = fetch.bind((0, Utils_1.getGlobalThis)());
        }
        if (typeof AbortController === "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          this._abortControllerType = requireFunc("abort-controller");
        } else {
          this._abortControllerType = AbortController;
        }
      }
      /** @inheritDoc */
      async send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          throw new Errors_1.AbortError();
        }
        if (!request.method) {
          throw new Error("No method defined.");
        }
        if (!request.url) {
          throw new Error("No url defined.");
        }
        const abortController = new this._abortControllerType();
        let error;
        if (request.abortSignal) {
          request.abortSignal.onabort = () => {
            abortController.abort();
            error = new Errors_1.AbortError();
          };
        }
        let timeoutId = null;
        if (request.timeout) {
          const msTimeout = request.timeout;
          timeoutId = setTimeout(() => {
            abortController.abort();
            this._logger.log(ILogger_1.LogLevel.Warning, `Timeout from HTTP request.`);
            error = new Errors_1.TimeoutError();
          }, msTimeout);
        }
        if (request.content === "") {
          request.content = void 0;
        }
        if (request.content) {
          request.headers = request.headers || {};
          if ((0, Utils_1.isArrayBuffer)(request.content)) {
            request.headers["Content-Type"] = "application/octet-stream";
          } else {
            request.headers["Content-Type"] = "text/plain;charset=UTF-8";
          }
        }
        let response;
        try {
          response = await this._fetchType(request.url, {
            body: request.content,
            cache: "no-cache",
            credentials: request.withCredentials === true ? "include" : "same-origin",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              ...request.headers
            },
            method: request.method,
            mode: "cors",
            redirect: "follow",
            signal: abortController.signal
          });
        } catch (e) {
          if (error) {
            throw error;
          }
          this._logger.log(ILogger_1.LogLevel.Warning, `Error from HTTP request. ${e}.`);
          throw e;
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (request.abortSignal) {
            request.abortSignal.onabort = null;
          }
        }
        if (!response.ok) {
          const errorMessage = await deserializeContent(response, "text");
          throw new Errors_1.HttpError(errorMessage || response.statusText, response.status);
        }
        const content = deserializeContent(response, request.responseType);
        const payload = await content;
        return new HttpClient_1.HttpResponse(response.status, response.statusText, payload);
      }
      getCookieString(url) {
        let cookies = "";
        if (Utils_1.Platform.isNode && this._jar) {
          this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
        }
        return cookies;
      }
    };
    exports2.FetchHttpClient = FetchHttpClient;
    function deserializeContent(response, responseType) {
      let content;
      switch (responseType) {
        case "arraybuffer":
          content = response.arrayBuffer();
          break;
        case "text":
          content = response.text();
          break;
        case "blob":
        case "document":
        case "json":
          throw new Error(`${responseType} is not supported.`);
        default:
          content = response.text();
          break;
      }
      return content;
    }
  }
});

// node_modules/@microsoft/signalr/dist/cjs/XhrHttpClient.js
var require_XhrHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/XhrHttpClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.XhrHttpClient = void 0;
    var Errors_1 = require_Errors();
    var HttpClient_1 = require_HttpClient();
    var ILogger_1 = require_ILogger();
    var Utils_1 = require_Utils();
    var XhrHttpClient = class extends HttpClient_1.HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
      }
      /** @inheritDoc */
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new Errors_1.AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(request.method, request.url, true);
          xhr.withCredentials = request.withCredentials === void 0 ? true : request.withCredentials;
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          if (request.content === "") {
            request.content = void 0;
          }
          if (request.content) {
            if ((0, Utils_1.isArrayBuffer)(request.content)) {
              xhr.setRequestHeader("Content-Type", "application/octet-stream");
            } else {
              xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            }
          }
          const headers = request.headers;
          if (headers) {
            Object.keys(headers).forEach((header) => {
              xhr.setRequestHeader(header, headers[header]);
            });
          }
          if (request.responseType) {
            xhr.responseType = request.responseType;
          }
          if (request.abortSignal) {
            request.abortSignal.onabort = () => {
              xhr.abort();
              reject(new Errors_1.AbortError());
            };
          }
          if (request.timeout) {
            xhr.timeout = request.timeout;
          }
          xhr.onload = () => {
            if (request.abortSignal) {
              request.abortSignal.onabort = null;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(new HttpClient_1.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
            } else {
              reject(new Errors_1.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
            }
          };
          xhr.onerror = () => {
            this._logger.log(ILogger_1.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
            reject(new Errors_1.HttpError(xhr.statusText, xhr.status));
          };
          xhr.ontimeout = () => {
            this._logger.log(ILogger_1.LogLevel.Warning, `Timeout from HTTP request.`);
            reject(new Errors_1.TimeoutError());
          };
          xhr.send(request.content);
        });
      }
    };
    exports2.XhrHttpClient = XhrHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/DefaultHttpClient.js
var require_DefaultHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/DefaultHttpClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefaultHttpClient = void 0;
    var Errors_1 = require_Errors();
    var FetchHttpClient_1 = require_FetchHttpClient();
    var HttpClient_1 = require_HttpClient();
    var Utils_1 = require_Utils();
    var XhrHttpClient_1 = require_XhrHttpClient();
    var DefaultHttpClient = class extends HttpClient_1.HttpClient {
      /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
      constructor(logger) {
        super();
        if (typeof fetch !== "undefined" || Utils_1.Platform.isNode) {
          this._httpClient = new FetchHttpClient_1.FetchHttpClient(logger);
        } else if (typeof XMLHttpRequest !== "undefined") {
          this._httpClient = new XhrHttpClient_1.XhrHttpClient(logger);
        } else {
          throw new Error("No usable HttpClient found.");
        }
      }
      /** @inheritDoc */
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new Errors_1.AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return this._httpClient.send(request);
      }
      getCookieString(url) {
        return this._httpClient.getCookieString(url);
      }
    };
    exports2.DefaultHttpClient = DefaultHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/TextMessageFormat.js
var require_TextMessageFormat = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/TextMessageFormat.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextMessageFormat = void 0;
    var TextMessageFormat = class _TextMessageFormat {
      static write(output) {
        return `${output}${_TextMessageFormat.RecordSeparator}`;
      }
      static parse(input) {
        if (input[input.length - 1] !== _TextMessageFormat.RecordSeparator) {
          throw new Error("Message is incomplete.");
        }
        const messages = input.split(_TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
      }
    };
    exports2.TextMessageFormat = TextMessageFormat;
    TextMessageFormat.RecordSeparatorCode = 30;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HandshakeProtocol.js
var require_HandshakeProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HandshakeProtocol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HandshakeProtocol = void 0;
    var TextMessageFormat_1 = require_TextMessageFormat();
    var Utils_1 = require_Utils();
    var HandshakeProtocol = class {
      // Handshake request is always JSON
      writeHandshakeRequest(handshakeRequest) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(handshakeRequest));
      }
      parseHandshakeResponse(data) {
        let messageData;
        let remainingData;
        if ((0, Utils_1.isArrayBuffer)(data)) {
          const binaryData = new Uint8Array(data);
          const separatorIndex = binaryData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparatorCode);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
          remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
        } else {
          const textData = data;
          const separatorIndex = textData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparator);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = textData.substring(0, responseLength);
          remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
        }
        const messages = TextMessageFormat_1.TextMessageFormat.parse(messageData);
        const response = JSON.parse(messages[0]);
        if (response.type) {
          throw new Error("Expected a handshake response from the server.");
        }
        const responseMessage = response;
        return [remainingData, responseMessage];
      }
    };
    exports2.HandshakeProtocol = HandshakeProtocol;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/IHubProtocol.js
var require_IHubProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/IHubProtocol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageType = void 0;
    var MessageType;
    (function(MessageType2) {
      MessageType2[MessageType2["Invocation"] = 1] = "Invocation";
      MessageType2[MessageType2["StreamItem"] = 2] = "StreamItem";
      MessageType2[MessageType2["Completion"] = 3] = "Completion";
      MessageType2[MessageType2["StreamInvocation"] = 4] = "StreamInvocation";
      MessageType2[MessageType2["CancelInvocation"] = 5] = "CancelInvocation";
      MessageType2[MessageType2["Ping"] = 6] = "Ping";
      MessageType2[MessageType2["Close"] = 7] = "Close";
      MessageType2[MessageType2["Ack"] = 8] = "Ack";
      MessageType2[MessageType2["Sequence"] = 9] = "Sequence";
    })(MessageType = exports2.MessageType || (exports2.MessageType = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Subject.js
var require_Subject = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Subject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Subject = void 0;
    var Utils_1 = require_Utils();
    var Subject = class {
      constructor() {
        this.observers = [];
      }
      next(item) {
        for (const observer of this.observers) {
          observer.next(item);
        }
      }
      error(err) {
        for (const observer of this.observers) {
          if (observer.error) {
            observer.error(err);
          }
        }
      }
      complete() {
        for (const observer of this.observers) {
          if (observer.complete) {
            observer.complete();
          }
        }
      }
      subscribe(observer) {
        this.observers.push(observer);
        return new Utils_1.SubjectSubscription(this, observer);
      }
    };
    exports2.Subject = Subject;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/MessageBuffer.js
var require_MessageBuffer = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/MessageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MessageBuffer = void 0;
    var IHubProtocol_1 = require_IHubProtocol();
    var Utils_1 = require_Utils();
    var MessageBuffer = class {
      constructor(protocol, connection, bufferSize) {
        this._bufferSize = 1e5;
        this._messages = [];
        this._totalMessageCount = 0;
        this._waitForSequenceMessage = false;
        this._nextReceivingSequenceId = 1;
        this._latestReceivedSequenceId = 0;
        this._bufferedByteCount = 0;
        this._reconnectInProgress = false;
        this._protocol = protocol;
        this._connection = connection;
        this._bufferSize = bufferSize;
      }
      async _send(message) {
        const serializedMessage = this._protocol.writeMessage(message);
        let backpressurePromise = Promise.resolve();
        if (this._isInvocationMessage(message)) {
          this._totalMessageCount++;
          let backpressurePromiseResolver = () => {
          };
          let backpressurePromiseRejector = () => {
          };
          if ((0, Utils_1.isArrayBuffer)(serializedMessage)) {
            this._bufferedByteCount += serializedMessage.byteLength;
          } else {
            this._bufferedByteCount += serializedMessage.length;
          }
          if (this._bufferedByteCount >= this._bufferSize) {
            backpressurePromise = new Promise((resolve, reject) => {
              backpressurePromiseResolver = resolve;
              backpressurePromiseRejector = reject;
            });
          }
          this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
        }
        try {
          if (!this._reconnectInProgress) {
            await this._connection.send(serializedMessage);
          }
        } catch {
          this._disconnected();
        }
        await backpressurePromise;
      }
      _ack(ackMessage) {
        let newestAckedMessage = -1;
        for (let index = 0; index < this._messages.length; index++) {
          const element = this._messages[index];
          if (element._id <= ackMessage.sequenceId) {
            newestAckedMessage = index;
            if ((0, Utils_1.isArrayBuffer)(element._message)) {
              this._bufferedByteCount -= element._message.byteLength;
            } else {
              this._bufferedByteCount -= element._message.length;
            }
            element._resolver();
          } else if (this._bufferedByteCount < this._bufferSize) {
            element._resolver();
          } else {
            break;
          }
        }
        if (newestAckedMessage !== -1) {
          this._messages = this._messages.slice(newestAckedMessage + 1);
        }
      }
      _shouldProcessMessage(message) {
        if (this._waitForSequenceMessage) {
          if (message.type !== IHubProtocol_1.MessageType.Sequence) {
            return false;
          } else {
            this._waitForSequenceMessage = false;
            return true;
          }
        }
        if (!this._isInvocationMessage(message)) {
          return true;
        }
        const currentId = this._nextReceivingSequenceId;
        this._nextReceivingSequenceId++;
        if (currentId <= this._latestReceivedSequenceId) {
          if (currentId === this._latestReceivedSequenceId) {
            this._ackTimer();
          }
          return false;
        }
        this._latestReceivedSequenceId = currentId;
        this._ackTimer();
        return true;
      }
      _resetSequence(message) {
        if (message.sequenceId > this._nextReceivingSequenceId) {
          this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
          return;
        }
        this._nextReceivingSequenceId = message.sequenceId;
      }
      _disconnected() {
        this._reconnectInProgress = true;
        this._waitForSequenceMessage = true;
      }
      async _resend() {
        const sequenceId = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
        await this._connection.send(this._protocol.writeMessage({ type: IHubProtocol_1.MessageType.Sequence, sequenceId }));
        const messages = this._messages;
        for (const element of messages) {
          await this._connection.send(element._message);
        }
        this._reconnectInProgress = false;
      }
      _dispose(error) {
        error !== null && error !== void 0 ? error : error = new Error("Unable to reconnect to server.");
        for (const element of this._messages) {
          element._rejector(error);
        }
      }
      _isInvocationMessage(message) {
        switch (message.type) {
          case IHubProtocol_1.MessageType.Invocation:
          case IHubProtocol_1.MessageType.StreamItem:
          case IHubProtocol_1.MessageType.Completion:
          case IHubProtocol_1.MessageType.StreamInvocation:
          case IHubProtocol_1.MessageType.CancelInvocation:
            return true;
          case IHubProtocol_1.MessageType.Close:
          case IHubProtocol_1.MessageType.Sequence:
          case IHubProtocol_1.MessageType.Ping:
          case IHubProtocol_1.MessageType.Ack:
            return false;
        }
      }
      _ackTimer() {
        if (this._ackTimerHandle === void 0) {
          this._ackTimerHandle = setTimeout(async () => {
            try {
              if (!this._reconnectInProgress) {
                await this._connection.send(this._protocol.writeMessage({ type: IHubProtocol_1.MessageType.Ack, sequenceId: this._latestReceivedSequenceId }));
              }
            } catch {
            }
            clearTimeout(this._ackTimerHandle);
            this._ackTimerHandle = void 0;
          }, 1e3);
        }
      }
    };
    exports2.MessageBuffer = MessageBuffer;
    var BufferedItem = class {
      constructor(message, id, resolver, rejector) {
        this._message = message;
        this._id = id;
        this._resolver = resolver;
        this._rejector = rejector;
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HubConnection.js
var require_HubConnection = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HubConnection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HubConnection = exports2.HubConnectionState = void 0;
    var HandshakeProtocol_1 = require_HandshakeProtocol();
    var Errors_1 = require_Errors();
    var IHubProtocol_1 = require_IHubProtocol();
    var ILogger_1 = require_ILogger();
    var Subject_1 = require_Subject();
    var Utils_1 = require_Utils();
    var MessageBuffer_1 = require_MessageBuffer();
    var DEFAULT_TIMEOUT_IN_MS = 30 * 1e3;
    var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1e3;
    var DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 1e5;
    var HubConnectionState;
    (function(HubConnectionState2) {
      HubConnectionState2["Disconnected"] = "Disconnected";
      HubConnectionState2["Connecting"] = "Connecting";
      HubConnectionState2["Connected"] = "Connected";
      HubConnectionState2["Disconnecting"] = "Disconnecting";
      HubConnectionState2["Reconnecting"] = "Reconnecting";
    })(HubConnectionState = exports2.HubConnectionState || (exports2.HubConnectionState = {}));
    var HubConnection = class _HubConnection {
      /** @internal */
      // Using a public static factory method means we can have a private constructor and an _internal_
      // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
      // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
      // public parameter-less constructor.
      static create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
        return new _HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
      }
      constructor(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
        this._nextKeepAlive = 0;
        this._freezeEventListener = () => {
          this._logger.log(ILogger_1.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
        };
        Utils_1.Arg.isRequired(connection, "connection");
        Utils_1.Arg.isRequired(logger, "logger");
        Utils_1.Arg.isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
        this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
        this._logger = logger;
        this._protocol = protocol;
        this.connection = connection;
        this._reconnectPolicy = reconnectPolicy;
        this._handshakeProtocol = new HandshakeProtocol_1.HandshakeProtocol();
        this.connection.onreceive = (data) => this._processIncomingData(data);
        this.connection.onclose = (error) => this._connectionClosed(error);
        this._callbacks = {};
        this._methods = {};
        this._closedCallbacks = [];
        this._reconnectingCallbacks = [];
        this._reconnectedCallbacks = [];
        this._invocationId = 0;
        this._receivedHandshakeResponse = false;
        this._connectionState = HubConnectionState.Disconnected;
        this._connectionStarted = false;
        this._cachedPingMessage = this._protocol.writeMessage({ type: IHubProtocol_1.MessageType.Ping });
      }
      /** Indicates the state of the {@link HubConnection} to the server. */
      get state() {
        return this._connectionState;
      }
      /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
       *  in the disconnected state or if the negotiation step was skipped.
       */
      get connectionId() {
        return this.connection ? this.connection.connectionId || null : null;
      }
      /** Indicates the url of the {@link HubConnection} to the server. */
      get baseUrl() {
        return this.connection.baseUrl || "";
      }
      /**
       * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
       * Reconnecting states.
       * @param {string} url The url to connect to.
       */
      set baseUrl(url) {
        if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
          throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
        }
        if (!url) {
          throw new Error("The HubConnection url must be a valid url.");
        }
        this.connection.baseUrl = url;
      }
      /** Starts the connection.
       *
       * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
       */
      start() {
        this._startPromise = this._startWithStateTransitions();
        return this._startPromise;
      }
      async _startWithStateTransitions() {
        if (this._connectionState !== HubConnectionState.Disconnected) {
          return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = HubConnectionState.Connecting;
        this._logger.log(ILogger_1.LogLevel.Debug, "Starting HubConnection.");
        try {
          await this._startInternal();
          if (Utils_1.Platform.isBrowser) {
            window.document.addEventListener("freeze", this._freezeEventListener);
          }
          this._connectionState = HubConnectionState.Connected;
          this._connectionStarted = true;
          this._logger.log(ILogger_1.LogLevel.Debug, "HubConnection connected successfully.");
        } catch (e) {
          this._connectionState = HubConnectionState.Disconnected;
          this._logger.log(ILogger_1.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
          return Promise.reject(e);
        }
      }
      async _startInternal() {
        this._stopDuringStartError = void 0;
        this._receivedHandshakeResponse = false;
        const handshakePromise = new Promise((resolve, reject) => {
          this._handshakeResolver = resolve;
          this._handshakeRejecter = reject;
        });
        await this.connection.start(this._protocol.transferFormat);
        try {
          let version = this._protocol.version;
          if (!this.connection.features.reconnect) {
            version = 1;
          }
          const handshakeRequest = {
            protocol: this._protocol.name,
            version
          };
          this._logger.log(ILogger_1.LogLevel.Debug, "Sending handshake request.");
          await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
          this._logger.log(ILogger_1.LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
          this._cleanupTimeout();
          this._resetTimeoutPeriod();
          this._resetKeepAliveInterval();
          await handshakePromise;
          if (this._stopDuringStartError) {
            throw this._stopDuringStartError;
          }
          const useStatefulReconnect = this.connection.features.reconnect || false;
          if (useStatefulReconnect) {
            this._messageBuffer = new MessageBuffer_1.MessageBuffer(this._protocol, this.connection, this._statefulReconnectBufferSize);
            this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer);
            this.connection.features.resend = () => {
              if (this._messageBuffer) {
                return this._messageBuffer._resend();
              }
            };
          }
          if (!this.connection.features.inherentKeepAlive) {
            await this._sendMessage(this._cachedPingMessage);
          }
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
          this._cleanupTimeout();
          this._cleanupPingTimer();
          await this.connection.stop(e);
          throw e;
        }
      }
      /** Stops the connection.
       *
       * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
       */
      async stop() {
        const startPromise = this._startPromise;
        this.connection.features.reconnect = false;
        this._stopPromise = this._stopInternal();
        await this._stopPromise;
        try {
          await startPromise;
        } catch (e) {
        }
      }
      _stopInternal(error) {
        if (this._connectionState === HubConnectionState.Disconnected) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
          return Promise.resolve();
        }
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
          return this._stopPromise;
        }
        const state = this._connectionState;
        this._connectionState = HubConnectionState.Disconnecting;
        this._logger.log(ILogger_1.LogLevel.Debug, "Stopping HubConnection.");
        if (this._reconnectDelayHandle) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
          clearTimeout(this._reconnectDelayHandle);
          this._reconnectDelayHandle = void 0;
          this._completeClose();
          return Promise.resolve();
        }
        if (state === HubConnectionState.Connected) {
          this._sendCloseMessage();
        }
        this._cleanupTimeout();
        this._cleanupPingTimer();
        this._stopDuringStartError = error || new Errors_1.AbortError("The connection was stopped before the hub handshake could complete.");
        return this.connection.stop(error);
      }
      async _sendCloseMessage() {
        try {
          await this._sendWithProtocol(this._createCloseMessage());
        } catch {
        }
      }
      /** Invokes a streaming hub method on the server using the specified name and arguments.
       *
       * @typeparam T The type of the items returned by the server.
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
       */
      stream(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
        let promiseQueue;
        const subject = new Subject_1.Subject();
        subject.cancelCallback = () => {
          const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
          delete this._callbacks[invocationDescriptor.invocationId];
          return promiseQueue.then(() => {
            return this._sendWithProtocol(cancelInvocation);
          });
        };
        this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
          if (error) {
            subject.error(error);
            return;
          } else if (invocationEvent) {
            if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
              if (invocationEvent.error) {
                subject.error(new Error(invocationEvent.error));
              } else {
                subject.complete();
              }
            } else {
              subject.next(invocationEvent.item);
            }
          }
        };
        promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
          subject.error(e);
          delete this._callbacks[invocationDescriptor.invocationId];
        });
        this._launchStreams(streams, promiseQueue);
        return subject;
      }
      _sendMessage(message) {
        this._resetKeepAliveInterval();
        return this.connection.send(message);
      }
      /**
       * Sends a js object to the server.
       * @param message The js object to serialize and send.
       */
      _sendWithProtocol(message) {
        if (this._messageBuffer) {
          return this._messageBuffer._send(message);
        } else {
          return this._sendMessage(this._protocol.writeMessage(message));
        }
      }
      /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
       *
       * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
       * be processing the invocation.
       *
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
       */
      send(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
        this._launchStreams(streams, sendPromise);
        return sendPromise;
      }
      /** Invokes a hub method on the server using the specified name and arguments.
       *
       * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
       * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
       * resolving the Promise.
       *
       * @typeparam T The expected return type.
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
       */
      invoke(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
        const p = new Promise((resolve, reject) => {
          this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
            if (error) {
              reject(error);
              return;
            } else if (invocationEvent) {
              if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
                if (invocationEvent.error) {
                  reject(new Error(invocationEvent.error));
                } else {
                  resolve(invocationEvent.result);
                }
              } else {
                reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
              }
            }
          };
          const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
            reject(e);
            delete this._callbacks[invocationDescriptor.invocationId];
          });
          this._launchStreams(streams, promiseQueue);
        });
        return p;
      }
      on(methodName, newMethod) {
        if (!methodName || !newMethod) {
          return;
        }
        methodName = methodName.toLowerCase();
        if (!this._methods[methodName]) {
          this._methods[methodName] = [];
        }
        if (this._methods[methodName].indexOf(newMethod) !== -1) {
          return;
        }
        this._methods[methodName].push(newMethod);
      }
      off(methodName, method) {
        if (!methodName) {
          return;
        }
        methodName = methodName.toLowerCase();
        const handlers = this._methods[methodName];
        if (!handlers) {
          return;
        }
        if (method) {
          const removeIdx = handlers.indexOf(method);
          if (removeIdx !== -1) {
            handlers.splice(removeIdx, 1);
            if (handlers.length === 0) {
              delete this._methods[methodName];
            }
          }
        } else {
          delete this._methods[methodName];
        }
      }
      /** Registers a handler that will be invoked when the connection is closed.
       *
       * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
       */
      onclose(callback) {
        if (callback) {
          this._closedCallbacks.push(callback);
        }
      }
      /** Registers a handler that will be invoked when the connection starts reconnecting.
       *
       * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
       */
      onreconnecting(callback) {
        if (callback) {
          this._reconnectingCallbacks.push(callback);
        }
      }
      /** Registers a handler that will be invoked when the connection successfully reconnects.
       *
       * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
       */
      onreconnected(callback) {
        if (callback) {
          this._reconnectedCallbacks.push(callback);
        }
      }
      _processIncomingData(data) {
        this._cleanupTimeout();
        if (!this._receivedHandshakeResponse) {
          data = this._processHandshakeResponse(data);
          this._receivedHandshakeResponse = true;
        }
        if (data) {
          const messages = this._protocol.parseMessages(data, this._logger);
          for (const message of messages) {
            if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
              continue;
            }
            switch (message.type) {
              case IHubProtocol_1.MessageType.Invocation:
                this._invokeClientMethod(message).catch((e) => {
                  this._logger.log(ILogger_1.LogLevel.Error, `Invoke client method threw error: ${(0, Utils_1.getErrorString)(e)}`);
                });
                break;
              case IHubProtocol_1.MessageType.StreamItem:
              case IHubProtocol_1.MessageType.Completion: {
                const callback = this._callbacks[message.invocationId];
                if (callback) {
                  if (message.type === IHubProtocol_1.MessageType.Completion) {
                    delete this._callbacks[message.invocationId];
                  }
                  try {
                    callback(message);
                  } catch (e) {
                    this._logger.log(ILogger_1.LogLevel.Error, `Stream callback threw error: ${(0, Utils_1.getErrorString)(e)}`);
                  }
                }
                break;
              }
              case IHubProtocol_1.MessageType.Ping:
                break;
              case IHubProtocol_1.MessageType.Close: {
                this._logger.log(ILogger_1.LogLevel.Information, "Close message received from server.");
                const error = message.error ? new Error("Server returned an error on close: " + message.error) : void 0;
                if (message.allowReconnect === true) {
                  this.connection.stop(error);
                } else {
                  this._stopPromise = this._stopInternal(error);
                }
                break;
              }
              case IHubProtocol_1.MessageType.Ack:
                if (this._messageBuffer) {
                  this._messageBuffer._ack(message);
                }
                break;
              case IHubProtocol_1.MessageType.Sequence:
                if (this._messageBuffer) {
                  this._messageBuffer._resetSequence(message);
                }
                break;
              default:
                this._logger.log(ILogger_1.LogLevel.Warning, `Invalid message type: ${message.type}.`);
                break;
            }
          }
        }
        this._resetTimeoutPeriod();
      }
      _processHandshakeResponse(data) {
        let responseMessage;
        let remainingData;
        try {
          [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
        } catch (e) {
          const message = "Error parsing handshake response: " + e;
          this._logger.log(ILogger_1.LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        }
        if (responseMessage.error) {
          const message = "Server returned handshake error: " + responseMessage.error;
          this._logger.log(ILogger_1.LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        } else {
          this._logger.log(ILogger_1.LogLevel.Debug, "Server handshake complete.");
        }
        this._handshakeResolver();
        return remainingData;
      }
      _resetKeepAliveInterval() {
        if (this.connection.features.inherentKeepAlive) {
          return;
        }
        this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds;
        this._cleanupPingTimer();
      }
      _resetTimeoutPeriod() {
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
          this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
          let nextPing = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
          if (nextPing < 0) {
            if (this._connectionState === HubConnectionState.Connected) {
              this._trySendPingMessage();
            }
            return;
          }
          if (this._pingServerHandle === void 0) {
            if (nextPing < 0) {
              nextPing = 0;
            }
            this._pingServerHandle = setTimeout(async () => {
              if (this._connectionState === HubConnectionState.Connected) {
                await this._trySendPingMessage();
              }
            }, nextPing);
          }
        }
      }
      // eslint-disable-next-line @typescript-eslint/naming-convention
      serverTimeout() {
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
      }
      async _invokeClientMethod(invocationMessage) {
        const methodName = invocationMessage.target.toLowerCase();
        const methods = this._methods[methodName];
        if (!methods) {
          this._logger.log(ILogger_1.LogLevel.Warning, `No client method with the name '${methodName}' found.`);
          if (invocationMessage.invocationId) {
            this._logger.log(ILogger_1.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
            await this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
          }
          return;
        }
        const methodsCopy = methods.slice();
        const expectsResponse = invocationMessage.invocationId ? true : false;
        let res;
        let exception;
        let completionMessage;
        for (const m of methodsCopy) {
          try {
            const prevRes = res;
            res = await m.apply(this, invocationMessage.arguments);
            if (expectsResponse && res && prevRes) {
              this._logger.log(ILogger_1.LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
              completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
            }
            exception = void 0;
          } catch (e) {
            exception = e;
            this._logger.log(ILogger_1.LogLevel.Error, `A callback for the method '${methodName}' threw error '${e}'.`);
          }
        }
        if (completionMessage) {
          await this._sendWithProtocol(completionMessage);
        } else if (expectsResponse) {
          if (exception) {
            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
          } else if (res !== void 0) {
            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
          } else {
            this._logger.log(ILogger_1.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
          }
          await this._sendWithProtocol(completionMessage);
        } else {
          if (res) {
            this._logger.log(ILogger_1.LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
          }
        }
      }
      _connectionClosed(error) {
        this._logger.log(ILogger_1.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
        this._stopDuringStartError = this._stopDuringStartError || error || new Errors_1.AbortError("The underlying connection was closed before the hub handshake could complete.");
        if (this._handshakeResolver) {
          this._handshakeResolver();
        }
        this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this._cleanupTimeout();
        this._cleanupPingTimer();
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._completeClose(error);
        } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
          this._reconnect(error);
        } else if (this._connectionState === HubConnectionState.Connected) {
          this._completeClose(error);
        }
      }
      _completeClose(error) {
        if (this._connectionStarted) {
          this._connectionState = HubConnectionState.Disconnected;
          this._connectionStarted = false;
          if (this._messageBuffer) {
            this._messageBuffer._dispose(error !== null && error !== void 0 ? error : new Error("Connection closed."));
            this._messageBuffer = void 0;
          }
          if (Utils_1.Platform.isBrowser) {
            window.document.removeEventListener("freeze", this._freezeEventListener);
          }
          try {
            this._closedCallbacks.forEach((c) => c.apply(this, [error]));
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
          }
        }
      }
      async _reconnect(error) {
        const reconnectStartTime = Date.now();
        let previousReconnectAttempts = 0;
        let retryError = error !== void 0 ? error : new Error("Attempting to reconnect due to a unknown error.");
        let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts, 0, retryError);
        if (nextRetryDelay === null) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
          this._completeClose(error);
          return;
        }
        this._connectionState = HubConnectionState.Reconnecting;
        if (error) {
          this._logger.log(ILogger_1.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
        } else {
          this._logger.log(ILogger_1.LogLevel.Information, "Connection reconnecting.");
        }
        if (this._reconnectingCallbacks.length !== 0) {
          try {
            this._reconnectingCallbacks.forEach((c) => c.apply(this, [error]));
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
          }
          if (this._connectionState !== HubConnectionState.Reconnecting) {
            this._logger.log(ILogger_1.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
            return;
          }
        }
        while (nextRetryDelay !== null) {
          this._logger.log(ILogger_1.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts + 1} will start in ${nextRetryDelay} ms.`);
          await new Promise((resolve) => {
            this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
          });
          this._reconnectDelayHandle = void 0;
          if (this._connectionState !== HubConnectionState.Reconnecting) {
            this._logger.log(ILogger_1.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
            return;
          }
          try {
            await this._startInternal();
            this._connectionState = HubConnectionState.Connected;
            this._logger.log(ILogger_1.LogLevel.Information, "HubConnection reconnected successfully.");
            if (this._reconnectedCallbacks.length !== 0) {
              try {
                this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
              } catch (e) {
                this._logger.log(ILogger_1.LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
              }
            }
            return;
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
            if (this._connectionState !== HubConnectionState.Reconnecting) {
              this._logger.log(ILogger_1.LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
              if (this._connectionState === HubConnectionState.Disconnecting) {
                this._completeClose();
              }
              return;
            }
            previousReconnectAttempts++;
            retryError = e instanceof Error ? e : new Error(e.toString());
            nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts, Date.now() - reconnectStartTime, retryError);
          }
        }
        this._logger.log(ILogger_1.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
        this._completeClose();
      }
      _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
          return this._reconnectPolicy.nextRetryDelayInMilliseconds({
            elapsedMilliseconds,
            previousRetryCount,
            retryReason
          });
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
          return null;
        }
      }
      _cancelCallbacksWithError(error) {
        const callbacks = this._callbacks;
        this._callbacks = {};
        Object.keys(callbacks).forEach((key) => {
          const callback = callbacks[key];
          try {
            callback(null, error);
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${(0, Utils_1.getErrorString)(e)}`);
          }
        });
      }
      _cleanupPingTimer() {
        if (this._pingServerHandle) {
          clearTimeout(this._pingServerHandle);
          this._pingServerHandle = void 0;
        }
      }
      _cleanupTimeout() {
        if (this._timeoutHandle) {
          clearTimeout(this._timeoutHandle);
        }
      }
      _createInvocation(methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
          if (streamIds.length !== 0) {
            return {
              target: methodName,
              arguments: args,
              streamIds,
              type: IHubProtocol_1.MessageType.Invocation
            };
          } else {
            return {
              target: methodName,
              arguments: args,
              type: IHubProtocol_1.MessageType.Invocation
            };
          }
        } else {
          const invocationId = this._invocationId;
          this._invocationId++;
          if (streamIds.length !== 0) {
            return {
              target: methodName,
              arguments: args,
              invocationId: invocationId.toString(),
              streamIds,
              type: IHubProtocol_1.MessageType.Invocation
            };
          } else {
            return {
              target: methodName,
              arguments: args,
              invocationId: invocationId.toString(),
              type: IHubProtocol_1.MessageType.Invocation
            };
          }
        }
      }
      _launchStreams(streams, promiseQueue) {
        if (streams.length === 0) {
          return;
        }
        if (!promiseQueue) {
          promiseQueue = Promise.resolve();
        }
        for (const streamId in streams) {
          streams[streamId].subscribe({
            complete: () => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
            },
            error: (err) => {
              let message;
              if (err instanceof Error) {
                message = err.message;
              } else if (err && err.toString) {
                message = err.toString();
              } else {
                message = "Unknown error";
              }
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
            },
            next: (item) => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
            }
          });
        }
      }
      _replaceStreamingParams(args) {
        const streams = [];
        const streamIds = [];
        for (let i = 0; i < args.length; i++) {
          const argument = args[i];
          if (this._isObservable(argument)) {
            const streamId = this._invocationId;
            this._invocationId++;
            streams[streamId] = argument;
            streamIds.push(streamId.toString());
            args.splice(i, 1);
          }
        }
        return [streams, streamIds];
      }
      _isObservable(arg) {
        return arg && arg.subscribe && typeof arg.subscribe === "function";
      }
      _createStreamInvocation(methodName, args, streamIds) {
        const invocationId = this._invocationId;
        this._invocationId++;
        if (streamIds.length !== 0) {
          return {
            target: methodName,
            arguments: args,
            invocationId: invocationId.toString(),
            streamIds,
            type: IHubProtocol_1.MessageType.StreamInvocation
          };
        } else {
          return {
            target: methodName,
            arguments: args,
            invocationId: invocationId.toString(),
            type: IHubProtocol_1.MessageType.StreamInvocation
          };
        }
      }
      _createCancelInvocation(id) {
        return {
          invocationId: id,
          type: IHubProtocol_1.MessageType.CancelInvocation
        };
      }
      _createStreamItemMessage(id, item) {
        return {
          invocationId: id,
          item,
          type: IHubProtocol_1.MessageType.StreamItem
        };
      }
      _createCompletionMessage(id, error, result) {
        if (error) {
          return {
            error,
            invocationId: id,
            type: IHubProtocol_1.MessageType.Completion
          };
        }
        return {
          invocationId: id,
          result,
          type: IHubProtocol_1.MessageType.Completion
        };
      }
      _createCloseMessage() {
        return { type: IHubProtocol_1.MessageType.Close };
      }
      async _trySendPingMessage() {
        try {
          await this._sendMessage(this._cachedPingMessage);
        } catch {
          this._cleanupPingTimer();
        }
      }
    };
    exports2.HubConnection = HubConnection;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/DefaultReconnectPolicy.js
var require_DefaultReconnectPolicy = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/DefaultReconnectPolicy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefaultReconnectPolicy = void 0;
    var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2e3, 1e4, 3e4, null];
    var DefaultReconnectPolicy = class {
      constructor(retryDelays) {
        this._retryDelays = retryDelays !== void 0 ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
      }
      nextRetryDelayInMilliseconds(retryContext) {
        return this._retryDelays[retryContext.previousRetryCount];
      }
    };
    exports2.DefaultReconnectPolicy = DefaultReconnectPolicy;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HeaderNames.js
var require_HeaderNames = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HeaderNames.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HeaderNames = void 0;
    var HeaderNames = class {
    };
    exports2.HeaderNames = HeaderNames;
    HeaderNames.Authorization = "Authorization";
    HeaderNames.Cookie = "Cookie";
  }
});

// node_modules/@microsoft/signalr/dist/cjs/AccessTokenHttpClient.js
var require_AccessTokenHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/AccessTokenHttpClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AccessTokenHttpClient = void 0;
    var HeaderNames_1 = require_HeaderNames();
    var HttpClient_1 = require_HttpClient();
    var AccessTokenHttpClient = class extends HttpClient_1.HttpClient {
      constructor(innerClient, accessTokenFactory) {
        super();
        this._innerClient = innerClient;
        this._accessTokenFactory = accessTokenFactory;
      }
      async send(request) {
        let allowRetry = true;
        if (this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0)) {
          allowRetry = false;
          this._accessToken = await this._accessTokenFactory();
        }
        this._setAuthorizationHeader(request);
        const response = await this._innerClient.send(request);
        if (allowRetry && response.statusCode === 401 && this._accessTokenFactory) {
          this._accessToken = await this._accessTokenFactory();
          this._setAuthorizationHeader(request);
          return await this._innerClient.send(request);
        }
        return response;
      }
      _setAuthorizationHeader(request) {
        if (!request.headers) {
          request.headers = {};
        }
        if (this._accessToken) {
          request.headers[HeaderNames_1.HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
        } else if (this._accessTokenFactory) {
          if (request.headers[HeaderNames_1.HeaderNames.Authorization]) {
            delete request.headers[HeaderNames_1.HeaderNames.Authorization];
          }
        }
      }
      getCookieString(url) {
        return this._innerClient.getCookieString(url);
      }
    };
    exports2.AccessTokenHttpClient = AccessTokenHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ITransport.js
var require_ITransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ITransport.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransferFormat = exports2.HttpTransportType = void 0;
    var HttpTransportType;
    (function(HttpTransportType2) {
      HttpTransportType2[HttpTransportType2["None"] = 0] = "None";
      HttpTransportType2[HttpTransportType2["WebSockets"] = 1] = "WebSockets";
      HttpTransportType2[HttpTransportType2["ServerSentEvents"] = 2] = "ServerSentEvents";
      HttpTransportType2[HttpTransportType2["LongPolling"] = 4] = "LongPolling";
    })(HttpTransportType = exports2.HttpTransportType || (exports2.HttpTransportType = {}));
    var TransferFormat;
    (function(TransferFormat2) {
      TransferFormat2[TransferFormat2["Text"] = 1] = "Text";
      TransferFormat2[TransferFormat2["Binary"] = 2] = "Binary";
    })(TransferFormat = exports2.TransferFormat || (exports2.TransferFormat = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/AbortController.js
var require_AbortController = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/AbortController.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbortController = void 0;
    var AbortController2 = class {
      constructor() {
        this._isAborted = false;
        this.onabort = null;
      }
      abort() {
        if (!this._isAborted) {
          this._isAborted = true;
          if (this.onabort) {
            this.onabort();
          }
        }
      }
      get signal() {
        return this;
      }
      get aborted() {
        return this._isAborted;
      }
    };
    exports2.AbortController = AbortController2;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/LongPollingTransport.js
var require_LongPollingTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/LongPollingTransport.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LongPollingTransport = void 0;
    var AbortController_1 = require_AbortController();
    var Errors_1 = require_Errors();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var LongPollingTransport = class {
      // This is an internal type, not exported from 'index' so this is really just internal.
      get pollAborted() {
        return this._pollAbort.aborted;
      }
      constructor(httpClient, logger, options) {
        this._httpClient = httpClient;
        this._logger = logger;
        this._pollAbort = new AbortController_1.AbortController();
        this._options = options;
        this._running = false;
        this.onreceive = null;
        this.onclose = null;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._url = url;
        this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Connecting.");
        if (transferFormat === ITransport_1.TransferFormat.Binary && (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
          throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
        }
        const [name, value] = (0, Utils_1.getUserAgentHeader)();
        const headers = { [name]: value, ...this._options.headers };
        const pollOptions = {
          abortSignal: this._pollAbort.signal,
          headers,
          timeout: 1e5,
          withCredentials: this._options.withCredentials
        };
        if (transferFormat === ITransport_1.TransferFormat.Binary) {
          pollOptions.responseType = "arraybuffer";
        }
        const pollUrl = `${url}&_=${Date.now()}`;
        this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
        const response = await this._httpClient.get(pollUrl, pollOptions);
        if (response.statusCode !== 200) {
          this._logger.log(ILogger_1.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
          this._closeError = new Errors_1.HttpError(response.statusText || "", response.statusCode);
          this._running = false;
        } else {
          this._running = true;
        }
        this._receiving = this._poll(this._url, pollOptions);
      }
      async _poll(url, pollOptions) {
        try {
          while (this._running) {
            try {
              const pollUrl = `${url}&_=${Date.now()}`;
              this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
              const response = await this._httpClient.get(pollUrl, pollOptions);
              if (response.statusCode === 204) {
                this._logger.log(ILogger_1.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                this._running = false;
              } else if (response.statusCode !== 200) {
                this._logger.log(ILogger_1.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                this._closeError = new Errors_1.HttpError(response.statusText || "", response.statusCode);
                this._running = false;
              } else {
                if (response.content) {
                  this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) data received. ${(0, Utils_1.getDataDetail)(response.content, this._options.logMessageContent)}.`);
                  if (this.onreceive) {
                    this.onreceive(response.content);
                  }
                } else {
                  this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                }
              }
            } catch (e) {
              if (!this._running) {
                this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
              } else {
                if (e instanceof Errors_1.TimeoutError) {
                  this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                } else {
                  this._closeError = e;
                  this._running = false;
                }
              }
            }
          }
        } finally {
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Polling complete.");
          if (!this.pollAborted) {
            this._raiseOnClose();
          }
        }
      }
      async send(data) {
        if (!this._running) {
          return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return (0, Utils_1.sendMessage)(this._logger, "LongPolling", this._httpClient, this._url, data, this._options);
      }
      async stop() {
        this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
        this._running = false;
        this._pollAbort.abort();
        try {
          await this._receiving;
          this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
          const headers = {};
          const [name, value] = (0, Utils_1.getUserAgentHeader)();
          headers[name] = value;
          const deleteOptions = {
            headers: { ...headers, ...this._options.headers },
            timeout: this._options.timeout,
            withCredentials: this._options.withCredentials
          };
          let error;
          try {
            await this._httpClient.delete(this._url, deleteOptions);
          } catch (err) {
            error = err;
          }
          if (error) {
            if (error instanceof Errors_1.HttpError) {
              if (error.statusCode === 404) {
                this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
              } else {
                this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) Error sending a DELETE request: ${error}`);
              }
            }
          } else {
            this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
          }
        } finally {
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Stop finished.");
          this._raiseOnClose();
        }
      }
      _raiseOnClose() {
        if (this.onclose) {
          let logMessage = "(LongPolling transport) Firing onclose event.";
          if (this._closeError) {
            logMessage += " Error: " + this._closeError;
          }
          this._logger.log(ILogger_1.LogLevel.Trace, logMessage);
          this.onclose(this._closeError);
        }
      }
    };
    exports2.LongPollingTransport = LongPollingTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ServerSentEventsTransport.js
var require_ServerSentEventsTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ServerSentEventsTransport.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServerSentEventsTransport = void 0;
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var ServerSentEventsTransport = class {
      constructor(httpClient, accessToken, logger, options) {
        this._httpClient = httpClient;
        this._accessToken = accessToken;
        this._logger = logger;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Trace, "(SSE transport) Connecting.");
        this._url = url;
        if (this._accessToken) {
          url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`;
        }
        return new Promise((resolve, reject) => {
          let opened = false;
          if (transferFormat !== ITransport_1.TransferFormat.Text) {
            reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
            return;
          }
          let eventSource;
          if (Utils_1.Platform.isBrowser || Utils_1.Platform.isWebWorker) {
            eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
          } else {
            const cookies = this._httpClient.getCookieString(url);
            const headers = {};
            headers.Cookie = cookies;
            const [name, value] = (0, Utils_1.getUserAgentHeader)();
            headers[name] = value;
            eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: { ...headers, ...this._options.headers } });
          }
          try {
            eventSource.onmessage = (e) => {
              if (this.onreceive) {
                try {
                  this._logger.log(ILogger_1.LogLevel.Trace, `(SSE transport) data received. ${(0, Utils_1.getDataDetail)(e.data, this._options.logMessageContent)}.`);
                  this.onreceive(e.data);
                } catch (error) {
                  this._close(error);
                  return;
                }
              }
            };
            eventSource.onerror = (e) => {
              if (opened) {
                this._close();
              } else {
                reject(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
              }
            };
            eventSource.onopen = () => {
              this._logger.log(ILogger_1.LogLevel.Information, `SSE connected to ${this._url}`);
              this._eventSource = eventSource;
              opened = true;
              resolve();
            };
          } catch (e) {
            reject(e);
            return;
          }
        });
      }
      async send(data) {
        if (!this._eventSource) {
          return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return (0, Utils_1.sendMessage)(this._logger, "SSE", this._httpClient, this._url, data, this._options);
      }
      stop() {
        this._close();
        return Promise.resolve();
      }
      _close(e) {
        if (this._eventSource) {
          this._eventSource.close();
          this._eventSource = void 0;
          if (this.onclose) {
            this.onclose(e);
          }
        }
      }
    };
    exports2.ServerSentEventsTransport = ServerSentEventsTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/WebSocketTransport.js
var require_WebSocketTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/WebSocketTransport.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WebSocketTransport = void 0;
    var HeaderNames_1 = require_HeaderNames();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var WebSocketTransport = class {
      constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
        this._logger = logger;
        this._accessTokenFactory = accessTokenFactory;
        this._logMessageContent = logMessageContent;
        this._webSocketConstructor = webSocketConstructor;
        this._httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
        this._headers = headers;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Trace, "(WebSockets transport) Connecting.");
        let token;
        if (this._accessTokenFactory) {
          token = await this._accessTokenFactory();
        }
        return new Promise((resolve, reject) => {
          url = url.replace(/^http/, "ws");
          let webSocket;
          const cookies = this._httpClient.getCookieString(url);
          let opened = false;
          if (Utils_1.Platform.isNode || Utils_1.Platform.isReactNative) {
            const headers = {};
            const [name, value] = (0, Utils_1.getUserAgentHeader)();
            headers[name] = value;
            if (token) {
              headers[HeaderNames_1.HeaderNames.Authorization] = `Bearer ${token}`;
            }
            if (cookies) {
              headers[HeaderNames_1.HeaderNames.Cookie] = cookies;
            }
            webSocket = new this._webSocketConstructor(url, void 0, {
              headers: { ...headers, ...this._headers }
            });
          } else {
            if (token) {
              url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
            }
          }
          if (!webSocket) {
            webSocket = new this._webSocketConstructor(url);
          }
          if (transferFormat === ITransport_1.TransferFormat.Binary) {
            webSocket.binaryType = "arraybuffer";
          }
          webSocket.onopen = (_event) => {
            this._logger.log(ILogger_1.LogLevel.Information, `WebSocket connected to ${url}.`);
            this._webSocket = webSocket;
            opened = true;
            resolve();
          };
          webSocket.onerror = (event) => {
            let error = null;
            if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
              error = event.error;
            } else {
              error = "There was an error with the transport";
            }
            this._logger.log(ILogger_1.LogLevel.Information, `(WebSockets transport) ${error}.`);
          };
          webSocket.onmessage = (message) => {
            this._logger.log(ILogger_1.LogLevel.Trace, `(WebSockets transport) data received. ${(0, Utils_1.getDataDetail)(message.data, this._logMessageContent)}.`);
            if (this.onreceive) {
              try {
                this.onreceive(message.data);
              } catch (error) {
                this._close(error);
                return;
              }
            }
          };
          webSocket.onclose = (event) => {
            if (opened) {
              this._close(event);
            } else {
              let error = null;
              if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                error = event.error;
              } else {
                error = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.";
              }
              reject(new Error(error));
            }
          };
        });
      }
      send(data) {
        if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
          this._logger.log(ILogger_1.LogLevel.Trace, `(WebSockets transport) sending data. ${(0, Utils_1.getDataDetail)(data, this._logMessageContent)}.`);
          this._webSocket.send(data);
          return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
      }
      stop() {
        if (this._webSocket) {
          this._close(void 0);
        }
        return Promise.resolve();
      }
      _close(event) {
        if (this._webSocket) {
          this._webSocket.onclose = () => {
          };
          this._webSocket.onmessage = () => {
          };
          this._webSocket.onerror = () => {
          };
          this._webSocket.close();
          this._webSocket = void 0;
        }
        this._logger.log(ILogger_1.LogLevel.Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
          if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1e3)) {
            this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
          } else if (event instanceof Error) {
            this.onclose(event);
          } else {
            this.onclose();
          }
        }
      }
      _isCloseEvent(event) {
        return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
      }
    };
    exports2.WebSocketTransport = WebSocketTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HttpConnection.js
var require_HttpConnection = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HttpConnection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TransportSendQueue = exports2.HttpConnection = void 0;
    var AccessTokenHttpClient_1 = require_AccessTokenHttpClient();
    var DefaultHttpClient_1 = require_DefaultHttpClient();
    var Errors_1 = require_Errors();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var LongPollingTransport_1 = require_LongPollingTransport();
    var ServerSentEventsTransport_1 = require_ServerSentEventsTransport();
    var Utils_1 = require_Utils();
    var WebSocketTransport_1 = require_WebSocketTransport();
    var MAX_REDIRECTS = 100;
    var HttpConnection = class {
      constructor(url, options = {}) {
        this._stopPromiseResolver = () => {
        };
        this.features = {};
        this._negotiateVersion = 1;
        Utils_1.Arg.isRequired(url, "url");
        this._logger = (0, Utils_1.createLogger)(options.logger);
        this.baseUrl = this._resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent === void 0 ? false : options.logMessageContent;
        if (typeof options.withCredentials === "boolean" || options.withCredentials === void 0) {
          options.withCredentials = options.withCredentials === void 0 ? true : options.withCredentials;
        } else {
          throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
        }
        options.timeout = options.timeout === void 0 ? 100 * 1e3 : options.timeout;
        let webSocketModule = null;
        let eventSourceModule = null;
        if (Utils_1.Platform.isNode && typeof require !== "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          webSocketModule = requireFunc("ws");
          eventSourceModule = requireFunc("eventsource");
        }
        if (!Utils_1.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
          options.WebSocket = WebSocket;
        } else if (Utils_1.Platform.isNode && !options.WebSocket) {
          if (webSocketModule) {
            options.WebSocket = webSocketModule;
          }
        }
        if (!Utils_1.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
          options.EventSource = EventSource;
        } else if (Utils_1.Platform.isNode && !options.EventSource) {
          if (typeof eventSourceModule !== "undefined") {
            options.EventSource = eventSourceModule;
          }
        }
        this._httpClient = new AccessTokenHttpClient_1.AccessTokenHttpClient(options.httpClient || new DefaultHttpClient_1.DefaultHttpClient(this._logger), options.accessTokenFactory);
        this._connectionState = "Disconnected";
        this._connectionStarted = false;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      async start(transferFormat) {
        transferFormat = transferFormat || ITransport_1.TransferFormat.Binary;
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Debug, `Starting connection with transfer format '${ITransport_1.TransferFormat[transferFormat]}'.`);
        if (this._connectionState !== "Disconnected") {
          return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = "Connecting";
        this._startInternalPromise = this._startInternal(transferFormat);
        await this._startInternalPromise;
        if (this._connectionState === "Disconnecting") {
          const message = "Failed to start the HttpConnection before stop() was called.";
          this._logger.log(ILogger_1.LogLevel.Error, message);
          await this._stopPromise;
          return Promise.reject(new Errors_1.AbortError(message));
        } else if (this._connectionState !== "Connected") {
          const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
          this._logger.log(ILogger_1.LogLevel.Error, message);
          return Promise.reject(new Errors_1.AbortError(message));
        }
        this._connectionStarted = true;
      }
      send(data) {
        if (this._connectionState !== "Connected") {
          return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this._sendQueue) {
          this._sendQueue = new TransportSendQueue(this.transport);
        }
        return this._sendQueue.send(data);
      }
      async stop(error) {
        if (this._connectionState === "Disconnected") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
          return Promise.resolve();
        }
        if (this._connectionState === "Disconnecting") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
          return this._stopPromise;
        }
        this._connectionState = "Disconnecting";
        this._stopPromise = new Promise((resolve) => {
          this._stopPromiseResolver = resolve;
        });
        await this._stopInternal(error);
        await this._stopPromise;
      }
      async _stopInternal(error) {
        this._stopError = error;
        try {
          await this._startInternalPromise;
        } catch (e) {
        }
        if (this.transport) {
          try {
            await this.transport.stop();
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
            this._stopConnection();
          }
          this.transport = void 0;
        } else {
          this._logger.log(ILogger_1.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
        }
      }
      async _startInternal(transferFormat) {
        let url = this.baseUrl;
        this._accessTokenFactory = this._options.accessTokenFactory;
        this._httpClient._accessTokenFactory = this._accessTokenFactory;
        try {
          if (this._options.skipNegotiation) {
            if (this._options.transport === ITransport_1.HttpTransportType.WebSockets) {
              this.transport = this._constructTransport(ITransport_1.HttpTransportType.WebSockets);
              await this._startTransport(url, transferFormat);
            } else {
              throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
            }
          } else {
            let negotiateResponse = null;
            let redirects = 0;
            do {
              negotiateResponse = await this._getNegotiationResponse(url);
              if (this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") {
                throw new Errors_1.AbortError("The connection was stopped during negotiation.");
              }
              if (negotiateResponse.error) {
                throw new Error(negotiateResponse.error);
              }
              if (negotiateResponse.ProtocolVersion) {
                throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
              }
              if (negotiateResponse.url) {
                url = negotiateResponse.url;
              }
              if (negotiateResponse.accessToken) {
                const accessToken = negotiateResponse.accessToken;
                this._accessTokenFactory = () => accessToken;
                this._httpClient._accessToken = accessToken;
                this._httpClient._accessTokenFactory = void 0;
              }
              redirects++;
            } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
            if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
              throw new Error("Negotiate redirection limit exceeded.");
            }
            await this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
          }
          if (this.transport instanceof LongPollingTransport_1.LongPollingTransport) {
            this.features.inherentKeepAlive = true;
          }
          if (this._connectionState === "Connecting") {
            this._logger.log(ILogger_1.LogLevel.Debug, "The HttpConnection connected successfully.");
            this._connectionState = "Connected";
          }
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Error, "Failed to start the connection: " + e);
          this._connectionState = "Disconnected";
          this.transport = void 0;
          this._stopPromiseResolver();
          return Promise.reject(e);
        }
      }
      async _getNegotiationResponse(url) {
        const headers = {};
        const [name, value] = (0, Utils_1.getUserAgentHeader)();
        headers[name] = value;
        const negotiateUrl = this._resolveNegotiateUrl(url);
        this._logger.log(ILogger_1.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
        try {
          const response = await this._httpClient.post(negotiateUrl, {
            content: "",
            headers: { ...headers, ...this._options.headers },
            timeout: this._options.timeout,
            withCredentials: this._options.withCredentials
          });
          if (response.statusCode !== 200) {
            return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
          }
          const negotiateResponse = JSON.parse(response.content);
          if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
            negotiateResponse.connectionToken = negotiateResponse.connectionId;
          }
          if (negotiateResponse.useStatefulReconnect && this._options._useStatefulReconnect !== true) {
            return Promise.reject(new Errors_1.FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did."));
          }
          return negotiateResponse;
        } catch (e) {
          let errorMessage = "Failed to complete negotiation with the server: " + e;
          if (e instanceof Errors_1.HttpError) {
            if (e.statusCode === 404) {
              errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
            }
          }
          this._logger.log(ILogger_1.LogLevel.Error, errorMessage);
          return Promise.reject(new Errors_1.FailedToNegotiateWithServerError(errorMessage));
        }
      }
      _createConnectUrl(url, connectionToken) {
        if (!connectionToken) {
          return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
      }
      async _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
        if (this._isITransport(requestedTransport)) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
          this.transport = requestedTransport;
          await this._startTransport(connectUrl, requestedTransferFormat);
          this.connectionId = negotiateResponse.connectionId;
          return;
        }
        const transportExceptions = [];
        const transports = negotiateResponse.availableTransports || [];
        let negotiate = negotiateResponse;
        for (const endpoint of transports) {
          const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, (negotiate === null || negotiate === void 0 ? void 0 : negotiate.useStatefulReconnect) === true);
          if (transportOrError instanceof Error) {
            transportExceptions.push(`${endpoint.transport} failed:`);
            transportExceptions.push(transportOrError);
          } else if (this._isITransport(transportOrError)) {
            this.transport = transportOrError;
            if (!negotiate) {
              try {
                negotiate = await this._getNegotiationResponse(url);
              } catch (ex) {
                return Promise.reject(ex);
              }
              connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
            }
            try {
              await this._startTransport(connectUrl, requestedTransferFormat);
              this.connectionId = negotiate.connectionId;
              return;
            } catch (ex) {
              this._logger.log(ILogger_1.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
              negotiate = void 0;
              transportExceptions.push(new Errors_1.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, ITransport_1.HttpTransportType[endpoint.transport]));
              if (this._connectionState !== "Connecting") {
                const message = "Failed to select transport before stop() was called.";
                this._logger.log(ILogger_1.LogLevel.Debug, message);
                return Promise.reject(new Errors_1.AbortError(message));
              }
            }
          }
        }
        if (transportExceptions.length > 0) {
          return Promise.reject(new Errors_1.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
        }
        return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
      }
      _constructTransport(transport) {
        switch (transport) {
          case ITransport_1.HttpTransportType.WebSockets:
            if (!this._options.WebSocket) {
              throw new Error("'WebSocket' is not supported in your environment.");
            }
            return new WebSocketTransport_1.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
          case ITransport_1.HttpTransportType.ServerSentEvents:
            if (!this._options.EventSource) {
              throw new Error("'EventSource' is not supported in your environment.");
            }
            return new ServerSentEventsTransport_1.ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
          case ITransport_1.HttpTransportType.LongPolling:
            return new LongPollingTransport_1.LongPollingTransport(this._httpClient, this._logger, this._options);
          default:
            throw new Error(`Unknown transport: ${transport}.`);
        }
      }
      _startTransport(url, transferFormat) {
        this.transport.onreceive = this.onreceive;
        if (this.features.reconnect) {
          this.transport.onclose = async (e) => {
            let callStop = false;
            if (this.features.reconnect) {
              try {
                this.features.disconnected();
                await this.transport.connect(url, transferFormat);
                await this.features.resend();
              } catch {
                callStop = true;
              }
            } else {
              this._stopConnection(e);
              return;
            }
            if (callStop) {
              this._stopConnection(e);
            }
          };
        } else {
          this.transport.onclose = (e) => this._stopConnection(e);
        }
        return this.transport.connect(url, transferFormat);
      }
      _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
        const transport = ITransport_1.HttpTransportType[endpoint.transport];
        if (transport === null || transport === void 0) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
          return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
        } else {
          if (transportMatches(requestedTransport, transport)) {
            const transferFormats = endpoint.transferFormats.map((s) => ITransport_1.TransferFormat[s]);
            if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
              if (transport === ITransport_1.HttpTransportType.WebSockets && !this._options.WebSocket || transport === ITransport_1.HttpTransportType.ServerSentEvents && !this._options.EventSource) {
                this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it is not supported in your environment.'`);
                return new Errors_1.UnsupportedTransportError(`'${ITransport_1.HttpTransportType[transport]}' is not supported in your environment.`, transport);
              } else {
                this._logger.log(ILogger_1.LogLevel.Debug, `Selecting transport '${ITransport_1.HttpTransportType[transport]}'.`);
                try {
                  this.features.reconnect = transport === ITransport_1.HttpTransportType.WebSockets ? useStatefulReconnect : void 0;
                  return this._constructTransport(transport);
                } catch (ex) {
                  return ex;
                }
              }
            } else {
              this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it does not support the requested transfer format '${ITransport_1.TransferFormat[requestedTransferFormat]}'.`);
              return new Error(`'${ITransport_1.HttpTransportType[transport]}' does not support ${ITransport_1.TransferFormat[requestedTransferFormat]}.`);
            }
          } else {
            this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it was disabled by the client.`);
            return new Errors_1.DisabledTransportError(`'${ITransport_1.HttpTransportType[transport]}' is disabled by the client.`, transport);
          }
        }
      }
      _isITransport(transport) {
        return transport && typeof transport === "object" && "connect" in transport;
      }
      _stopConnection(error) {
        this._logger.log(ILogger_1.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
        this.transport = void 0;
        error = this._stopError || error;
        this._stopError = void 0;
        if (this._connectionState === "Disconnected") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
          return;
        }
        if (this._connectionState === "Connecting") {
          this._logger.log(ILogger_1.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
          throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
        }
        if (this._connectionState === "Disconnecting") {
          this._stopPromiseResolver();
        }
        if (error) {
          this._logger.log(ILogger_1.LogLevel.Error, `Connection disconnected with error '${error}'.`);
        } else {
          this._logger.log(ILogger_1.LogLevel.Information, "Connection disconnected.");
        }
        if (this._sendQueue) {
          this._sendQueue.stop().catch((e) => {
            this._logger.log(ILogger_1.LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
          });
          this._sendQueue = void 0;
        }
        this.connectionId = void 0;
        this._connectionState = "Disconnected";
        if (this._connectionStarted) {
          this._connectionStarted = false;
          try {
            if (this.onclose) {
              this.onclose(error);
            }
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
          }
        }
      }
      _resolveUrl(url) {
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
          return url;
        }
        if (!Utils_1.Platform.isBrowser) {
          throw new Error(`Cannot resolve '${url}'.`);
        }
        const aTag = window.document.createElement("a");
        aTag.href = url;
        this._logger.log(ILogger_1.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
        return aTag.href;
      }
      _resolveNegotiateUrl(url) {
        const negotiateUrl = new URL(url);
        if (negotiateUrl.pathname.endsWith("/")) {
          negotiateUrl.pathname += "negotiate";
        } else {
          negotiateUrl.pathname += "/negotiate";
        }
        const searchParams = new URLSearchParams(negotiateUrl.searchParams);
        if (!searchParams.has("negotiateVersion")) {
          searchParams.append("negotiateVersion", this._negotiateVersion.toString());
        }
        if (searchParams.has("useStatefulReconnect")) {
          if (searchParams.get("useStatefulReconnect") === "true") {
            this._options._useStatefulReconnect = true;
          }
        } else if (this._options._useStatefulReconnect === true) {
          searchParams.append("useStatefulReconnect", "true");
        }
        negotiateUrl.search = searchParams.toString();
        return negotiateUrl.toString();
      }
    };
    exports2.HttpConnection = HttpConnection;
    function transportMatches(requestedTransport, actualTransport) {
      return !requestedTransport || (actualTransport & requestedTransport) !== 0;
    }
    var TransportSendQueue = class _TransportSendQueue {
      constructor(_transport) {
        this._transport = _transport;
        this._buffer = [];
        this._executing = true;
        this._sendBufferedData = new PromiseSource();
        this._transportResult = new PromiseSource();
        this._sendLoopPromise = this._sendLoop();
      }
      send(data) {
        this._bufferData(data);
        if (!this._transportResult) {
          this._transportResult = new PromiseSource();
        }
        return this._transportResult.promise;
      }
      stop() {
        this._executing = false;
        this._sendBufferedData.resolve();
        return this._sendLoopPromise;
      }
      _bufferData(data) {
        if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
          throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
        }
        this._buffer.push(data);
        this._sendBufferedData.resolve();
      }
      async _sendLoop() {
        while (true) {
          await this._sendBufferedData.promise;
          if (!this._executing) {
            if (this._transportResult) {
              this._transportResult.reject("Connection stopped.");
            }
            break;
          }
          this._sendBufferedData = new PromiseSource();
          const transportResult = this._transportResult;
          this._transportResult = void 0;
          const data = typeof this._buffer[0] === "string" ? this._buffer.join("") : _TransportSendQueue._concatBuffers(this._buffer);
          this._buffer.length = 0;
          try {
            await this._transport.send(data);
            transportResult.resolve();
          } catch (error) {
            transportResult.reject(error);
          }
        }
      }
      static _concatBuffers(arrayBuffers) {
        const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const item of arrayBuffers) {
          result.set(new Uint8Array(item), offset);
          offset += item.byteLength;
        }
        return result.buffer;
      }
    };
    exports2.TransportSendQueue = TransportSendQueue;
    var PromiseSource = class {
      constructor() {
        this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
      }
      resolve() {
        this._resolver();
      }
      reject(reason) {
        this._rejecter(reason);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/cjs/JsonHubProtocol.js
var require_JsonHubProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/JsonHubProtocol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.JsonHubProtocol = void 0;
    var IHubProtocol_1 = require_IHubProtocol();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Loggers_1 = require_Loggers();
    var TextMessageFormat_1 = require_TextMessageFormat();
    var JSON_HUB_PROTOCOL_NAME = "json";
    var JsonHubProtocol = class {
      constructor() {
        this.name = JSON_HUB_PROTOCOL_NAME;
        this.version = 2;
        this.transferFormat = ITransport_1.TransferFormat.Text;
      }
      /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
       *
       * @param {string} input A string containing the serialized representation.
       * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
       */
      parseMessages(input, logger) {
        if (typeof input !== "string") {
          throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
          return [];
        }
        if (logger === null) {
          logger = Loggers_1.NullLogger.instance;
        }
        const messages = TextMessageFormat_1.TextMessageFormat.parse(input);
        const hubMessages = [];
        for (const message of messages) {
          const parsedMessage = JSON.parse(message);
          if (typeof parsedMessage.type !== "number") {
            throw new Error("Invalid payload.");
          }
          switch (parsedMessage.type) {
            case IHubProtocol_1.MessageType.Invocation:
              this._isInvocationMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.StreamItem:
              this._isStreamItemMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.Completion:
              this._isCompletionMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.Ping:
              break;
            case IHubProtocol_1.MessageType.Close:
              break;
            case IHubProtocol_1.MessageType.Ack:
              this._isAckMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.Sequence:
              this._isSequenceMessage(parsedMessage);
              break;
            default:
              logger.log(ILogger_1.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
              continue;
          }
          hubMessages.push(parsedMessage);
        }
        return hubMessages;
      }
      /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
       *
       * @param {HubMessage} message The message to write.
       * @returns {string} A string containing the serialized representation of the message.
       */
      writeMessage(message) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(message));
      }
      _isInvocationMessage(message) {
        this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== void 0) {
          this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
      }
      _isStreamItemMessage(message) {
        this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === void 0) {
          throw new Error("Invalid payload for StreamItem message.");
        }
      }
      _isCompletionMessage(message) {
        if (message.result && message.error) {
          throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
          this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
      }
      _isAckMessage(message) {
        if (typeof message.sequenceId !== "number") {
          throw new Error("Invalid SequenceId for Ack message.");
        }
      }
      _isSequenceMessage(message) {
        if (typeof message.sequenceId !== "number") {
          throw new Error("Invalid SequenceId for Sequence message.");
        }
      }
      _assertNotEmptyString(value, errorMessage) {
        if (typeof value !== "string" || value === "") {
          throw new Error(errorMessage);
        }
      }
    };
    exports2.JsonHubProtocol = JsonHubProtocol;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HubConnectionBuilder.js
var require_HubConnectionBuilder = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HubConnectionBuilder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HubConnectionBuilder = void 0;
    var DefaultReconnectPolicy_1 = require_DefaultReconnectPolicy();
    var HttpConnection_1 = require_HttpConnection();
    var HubConnection_1 = require_HubConnection();
    var ILogger_1 = require_ILogger();
    var JsonHubProtocol_1 = require_JsonHubProtocol();
    var Loggers_1 = require_Loggers();
    var Utils_1 = require_Utils();
    var LogLevelNameMapping = {
      trace: ILogger_1.LogLevel.Trace,
      debug: ILogger_1.LogLevel.Debug,
      info: ILogger_1.LogLevel.Information,
      information: ILogger_1.LogLevel.Information,
      warn: ILogger_1.LogLevel.Warning,
      warning: ILogger_1.LogLevel.Warning,
      error: ILogger_1.LogLevel.Error,
      critical: ILogger_1.LogLevel.Critical,
      none: ILogger_1.LogLevel.None
    };
    function parseLogLevel(name) {
      const mapping = LogLevelNameMapping[name.toLowerCase()];
      if (typeof mapping !== "undefined") {
        return mapping;
      } else {
        throw new Error(`Unknown log level: ${name}`);
      }
    }
    var HubConnectionBuilder2 = class {
      configureLogging(logging) {
        Utils_1.Arg.isRequired(logging, "logging");
        if (isLogger(logging)) {
          this.logger = logging;
        } else if (typeof logging === "string") {
          const logLevel = parseLogLevel(logging);
          this.logger = new Utils_1.ConsoleLogger(logLevel);
        } else {
          this.logger = new Utils_1.ConsoleLogger(logging);
        }
        return this;
      }
      withUrl(url, transportTypeOrOptions) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isNotEmpty(url, "url");
        this.url = url;
        if (typeof transportTypeOrOptions === "object") {
          this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
        } else {
          this.httpConnectionOptions = {
            ...this.httpConnectionOptions,
            transport: transportTypeOrOptions
          };
        }
        return this;
      }
      /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
       *
       * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
       */
      withHubProtocol(protocol) {
        Utils_1.Arg.isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
      }
      withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
          throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
          this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy();
        } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
          this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
        } else {
          this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
      }
      /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
       *
       * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
       */
      withServerTimeout(milliseconds) {
        Utils_1.Arg.isRequired(milliseconds, "milliseconds");
        this._serverTimeoutInMilliseconds = milliseconds;
        return this;
      }
      /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
       *
       * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
       */
      withKeepAliveInterval(milliseconds) {
        Utils_1.Arg.isRequired(milliseconds, "milliseconds");
        this._keepAliveIntervalInMilliseconds = milliseconds;
        return this;
      }
      /** Enables and configures options for the Stateful Reconnect feature.
       *
       * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
       */
      withStatefulReconnect(options) {
        if (this.httpConnectionOptions === void 0) {
          this.httpConnectionOptions = {};
        }
        this.httpConnectionOptions._useStatefulReconnect = true;
        this._statefulReconnectBufferSize = options === null || options === void 0 ? void 0 : options.bufferSize;
        return this;
      }
      /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
       *
       * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
       */
      build() {
        const httpConnectionOptions = this.httpConnectionOptions || {};
        if (httpConnectionOptions.logger === void 0) {
          httpConnectionOptions.logger = this.logger;
        }
        if (!this.url) {
          throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        const connection = new HttpConnection_1.HttpConnection(this.url, httpConnectionOptions);
        return HubConnection_1.HubConnection.create(connection, this.logger || Loggers_1.NullLogger.instance, this.protocol || new JsonHubProtocol_1.JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
      }
    };
    exports2.HubConnectionBuilder = HubConnectionBuilder2;
    function isLogger(logger) {
      return logger.log !== void 0;
    }
  }
});

// node_modules/@microsoft/signalr/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VERSION = exports2.Subject = exports2.JsonHubProtocol = exports2.NullLogger = exports2.TransferFormat = exports2.HttpTransportType = exports2.LogLevel = exports2.MessageType = exports2.HubConnectionBuilder = exports2.HubConnectionState = exports2.HubConnection = exports2.DefaultHttpClient = exports2.HttpResponse = exports2.HttpClient = exports2.TimeoutError = exports2.HttpError = exports2.AbortError = void 0;
    var Errors_1 = require_Errors();
    Object.defineProperty(exports2, "AbortError", { enumerable: true, get: function() {
      return Errors_1.AbortError;
    } });
    Object.defineProperty(exports2, "HttpError", { enumerable: true, get: function() {
      return Errors_1.HttpError;
    } });
    Object.defineProperty(exports2, "TimeoutError", { enumerable: true, get: function() {
      return Errors_1.TimeoutError;
    } });
    var HttpClient_1 = require_HttpClient();
    Object.defineProperty(exports2, "HttpClient", { enumerable: true, get: function() {
      return HttpClient_1.HttpClient;
    } });
    Object.defineProperty(exports2, "HttpResponse", { enumerable: true, get: function() {
      return HttpClient_1.HttpResponse;
    } });
    var DefaultHttpClient_1 = require_DefaultHttpClient();
    Object.defineProperty(exports2, "DefaultHttpClient", { enumerable: true, get: function() {
      return DefaultHttpClient_1.DefaultHttpClient;
    } });
    var HubConnection_1 = require_HubConnection();
    Object.defineProperty(exports2, "HubConnection", { enumerable: true, get: function() {
      return HubConnection_1.HubConnection;
    } });
    Object.defineProperty(exports2, "HubConnectionState", { enumerable: true, get: function() {
      return HubConnection_1.HubConnectionState;
    } });
    var HubConnectionBuilder_1 = require_HubConnectionBuilder();
    Object.defineProperty(exports2, "HubConnectionBuilder", { enumerable: true, get: function() {
      return HubConnectionBuilder_1.HubConnectionBuilder;
    } });
    var IHubProtocol_1 = require_IHubProtocol();
    Object.defineProperty(exports2, "MessageType", { enumerable: true, get: function() {
      return IHubProtocol_1.MessageType;
    } });
    var ILogger_1 = require_ILogger();
    Object.defineProperty(exports2, "LogLevel", { enumerable: true, get: function() {
      return ILogger_1.LogLevel;
    } });
    var ITransport_1 = require_ITransport();
    Object.defineProperty(exports2, "HttpTransportType", { enumerable: true, get: function() {
      return ITransport_1.HttpTransportType;
    } });
    Object.defineProperty(exports2, "TransferFormat", { enumerable: true, get: function() {
      return ITransport_1.TransferFormat;
    } });
    var Loggers_1 = require_Loggers();
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return Loggers_1.NullLogger;
    } });
    var JsonHubProtocol_1 = require_JsonHubProtocol();
    Object.defineProperty(exports2, "JsonHubProtocol", { enumerable: true, get: function() {
      return JsonHubProtocol_1.JsonHubProtocol;
    } });
    var Subject_1 = require_Subject();
    Object.defineProperty(exports2, "Subject", { enumerable: true, get: function() {
      return Subject_1.Subject;
    } });
    var Utils_1 = require_Utils();
    Object.defineProperty(exports2, "VERSION", { enumerable: true, get: function() {
      return Utils_1.VERSION;
    } });
  }
});

// src/market.js
var market_exports = {};
__export(market_exports, {
  ASSETS: () => ASSETS,
  intervalMs: () => intervalMs,
  useMarket: () => useMarket
});
module.exports = __toCommonJS(market_exports);
var import_react = __toESM(require_react());
var import_signalr = __toESM(require_cjs());
var ASSETS = [
  { symbol: "USDJPY", label: "USD / JPY", flag: "\u{1F1FA}\u{1F1F8}\u{1F1EF}\u{1F1F5}", digits: 3, payout: 80 },
  { symbol: "EURUSD", label: "EUR / USD", flag: "\u{1F1EA}\u{1F1FA}\u{1F1FA}\u{1F1F8}", digits: 5, payout: 84 },
  { symbol: "GBPUSD", label: "GBP / USD", flag: "\u{1F1EC}\u{1F1E7}\u{1F1FA}\u{1F1F8}", digits: 5, payout: 85 },
  { symbol: "AUDUSD", label: "AUD / USD", flag: "\u{1F1E6}\u{1F1FA}\u{1F1FA}\u{1F1F8}", digits: 5, payout: 77 },
  { symbol: "USDCAD", label: "USD / CAD", flag: "\u{1F1FA}\u{1F1F8}\u{1F1E8}\u{1F1E6}", digits: 5, payout: 80 },
  { symbol: "USDCNY", label: "USD / CNY", flag: "\u{1F1FA}\u{1F1F8}\u{1F1E8}\u{1F1F3}", digits: 5, payout: 80 },
  { symbol: "USDCHF", label: "USD / CHF", flag: "\u{1F1FA}\u{1F1F8}\u{1F1E8}\u{1F1ED}", digits: 5, payout: 81 },
  { symbol: "USDHKD", label: "USD / HKD", flag: "\u{1F1FA}\u{1F1F8}\u{1F1ED}\u{1F1F0}", digits: 5, payout: 80 },
  { symbol: "EURGBP", label: "EUR / GBP", flag: "\u{1F1EA}\u{1F1FA}\u{1F1EC}\u{1F1E7}", digits: 5, payout: 80 },
  { symbol: "USDKRW", label: "USD / KRW", flag: "\u{1F1FA}\u{1F1F8}\u{1F1F0}\u{1F1F7}", digits: 2, payout: 80 },
  { symbol: "USTEC", label: "USTEC", flag: "N", digits: 2, payout: 80 },
  { symbol: "AAPL", label: "Apple", flag: "A", digits: 2, payout: 80 },
  { symbol: "BTCUSD", label: "BTC / USD", flag: "\u20BF", digits: 2, payout: 80 },
  { symbol: "XAUUSD", label: "Gold", flag: "Au", digits: 3, payout: 82 },
  { symbol: "USDBRL", label: "USD / BRL", flag: "\u{1F1FA}\u{1F1F8}\u{1F1E7}\u{1F1F7}", digits: 4, payout: 82 },
  { symbol: "NVDA", label: "Nvidia", flag: "N", digits: 2, payout: 81 },
  { symbol: "GOOGL", label: "Google (Alphabet)", flag: "G", digits: 2, payout: 84 },
  { symbol: "BRENT", quoteSymbol: "UKOIL", label: "Brent Oil", flag: "Oil", digits: 2, payout: 83 },
  { "symbol": "AUDCAD", "label": "AUD / CAD", "flag": "\u{1F1E6}\u{1F1FA}\u{1F1E8}\u{1F1E6}", "digits": 5, "payout": 80 },
  { "symbol": "NZDUSD", "label": "NZD / USD", "flag": "\u{1F1F3}\u{1F1FF}\u{1F1FA}\u{1F1F8}", "digits": 5, "payout": 80 },
  { "symbol": "AUDJPY", "label": "AUD / JPY", "flag": "\u{1F1E6}\u{1F1FA}\u{1F1EF}\u{1F1F5}", "digits": 3, "payout": 80 },
  { "symbol": "GBPCAD", "label": "GBP / CAD", "flag": "\u{1F1EC}\u{1F1E7}\u{1F1E8}\u{1F1E6}", "digits": 5, "payout": 80 },
  { "symbol": "EURJPY", "label": "EUR / JPY", "flag": "\u{1F1EA}\u{1F1FA}\u{1F1EF}\u{1F1F5}", "digits": 3, "payout": 80 },
  { "symbol": "GBPCHF", "label": "GBP / CHF", "flag": "\u{1F1EC}\u{1F1E7}\u{1F1E8}\u{1F1ED}", "digits": 5, "payout": 80 },
  { "symbol": "EURCHF", "label": "EUR / CHF", "flag": "\u{1F1EA}\u{1F1FA}\u{1F1E8}\u{1F1ED}", "digits": 5, "payout": 80 },
  { "symbol": "AUDCHF", "label": "AUD / CHF", "flag": "\u{1F1E6}\u{1F1FA}\u{1F1E8}\u{1F1ED}", "digits": 5, "payout": 80 },
  { "symbol": "MSFT", "label": "Microsoft", "flag": "M", "digits": 2, "payout": 80 },
  { "symbol": "TSLA", "label": "Tesla", "flag": "T", "digits": 2, "payout": 80 },
  { "symbol": "XAGUSD", "label": "Silver", "flag": "Ag", "digits": 3, "payout": 80 }
].map((a) => ({ ...a, icon: ["USDJPY", "GBPUSD", "EURUSD", "GOOGL", "BRENT", "XAUUSD", "USDBRL", "USDCHF", "NVDA", "AUDUSD"].includes(a.symbol) ? "/assets/asset-" + a.symbol.toLowerCase() + ".png" : null }));
var SUPPLIED_LOGOS = { "GBPUSD": "/assets/logos/gbpusd.png", "EURGBP": "/assets/logos/eurgbp.png", "USDBRL": "/assets/logos/usdbrl.png", "USDCAD": "/assets/logos/usdcad.png", "AUDUSD": "/assets/logos/audusd.png", "USDCHF": "/assets/logos/usdchf.png", "AUDCAD": "/assets/logos/audcad.png", "NZDUSD": "/assets/logos/nzdusd.png", "AUDJPY": "/assets/logos/audjpy.png", "GBPCAD": "/assets/logos/gbpcad.png", "EURJPY": "/assets/logos/eurjpy.png", "GBPCHF": "/assets/logos/gbpchf.png", "EURCHF": "/assets/logos/eurchf.png", "AUDCHF": "/assets/logos/audchf.png", "BTCUSD": "/assets/logos/btcusd.png", "XAUUSD": "/assets/logos/xauusd.webp", "AAPL": "/assets/logos/aapl.webp", "NVDA": "/assets/logos/nvda.webp", "GOOGL": "/assets/logos/googl.webp", "MSFT": "/assets/logos/msft.webp", "TSLA": "/assets/logos/tsla.webp", "XAGUSD": "/assets/logos/xagusd.webp" };
ASSETS.forEach((a) => {
  if (SUPPLIED_LOGOS[a.symbol]) a.icon = SUPPLIED_LOGOS[a.symbol];
});
var API = "https://biquote.io/api";
var intervalMs = (i) => ({ "5s": 5e3, "10s": 1e4, "15s": 15e3, "30s": 3e4, "1m": 6e4, "5m": 3e5, "15m": 9e5, "30m": 18e5, "1h": 36e5, "4h": 144e5, "1d": 864e5, "7d": 6048e5, "1mo": 2592e6 })[i] || 6e4;
var valid = (b) => ["open", "high", "low", "close"].every((k) => Number.isFinite(+b[k]) && +b[k] > 0);
function synthetic(seed, step) {
  let value = seed || 1;
  return Array.from({ length: 70 }, (_, i) => {
    const open = value;
    value = open * (1 + (Math.random() - 0.48) * 25e-5);
    return { open, close: value, high: Math.max(open, value) * (1 + Math.random() * 1e-4), low: Math.min(open, value) * (1 - Math.random() * 1e-4), openTime: new Date(Date.now() - (69 - i) * step).toISOString() };
  });
}
var tickValue = (t) => {
  const bid = Number(t.bid), ask = Number(t.ask);
  if (Number.isFinite(bid) && bid > 0 && Number.isFinite(ask) && ask > 0) return (bid + ask) / 2;
  const mid = Number(t.mid);
  return Number.isFinite(mid) && mid > 0 ? mid : null;
};
function bucketTime(timestamp, interval) {
  const d = new Date(timestamp);
  if (interval === "1mo") return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)).getTime();
  if (interval === "7d") {
    const day = d.getUTCDay() || 7;
    const monday = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - day + 1);
    return monday;
  }
  return Math.floor(d.getTime() / intervalMs(interval)) * intervalMs(interval);
}
function aggregateTicks(ticks, interval) {
  const out = /* @__PURE__ */ new Map();
  ticks.map((t) => ({ ...t, value: tickValue(t) })).filter((t) => t.value !== null && Number.isFinite(Date.parse(t.timestamp))).sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp)).forEach((t) => {
    const bt = bucketTime(t.timestamp, interval), old = out.get(bt);
    if (!old) out.set(bt, { open: t.value, high: t.value, low: t.value, close: t.value, openTime: new Date(bt).toISOString() });
    else {
      old.high = Math.max(old.high, t.value);
      old.low = Math.min(old.low, t.value);
      old.close = t.value;
    }
  });
  return [...out.values()];
}
function useMarket(symbol, interval) {
  const [state, setState] = (0, import_react.useState)({ bars: [], tick: null, status: "loading", stream: false, error: null });
  const [revision, reload] = (0, import_react.useState)(0);
  const current = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    let alive = true, connection, otcTimer, poll, watch;
    const controller = new AbortController();
    if (ASSETS.find((a) => a.symbol === symbol)?.unavailable) {
      setState({ bars: [], tick: null, status: "error", stream: false, error: "\u0647\u0630\u0627 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u0638\u0627\u0647\u0631 \u0641\u064A \u0627\u0644\u0645\u0631\u062C\u0639 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0645\u0646 BiQuote" });
      return () => {
        alive = false;
        controller.abort();
      };
    }
    const sourceSymbol = ASSETS.find((a) => a.symbol === symbol)?.quoteSymbol || symbol;
    const step = intervalMs(interval);
    current.current = null;
    setState({ bars: [], tick: null, status: "loading", stream: false, error: null });
    const update = (t) => {
      if (!alive || !t || t.symbol !== sourceSymbol) return;
      const price = tickValue(t);
      if (price === null) return;
      const stamp = t.timestamp || (/* @__PURE__ */ new Date()).toISOString();
      const age = Date.now() - Date.parse(stamp);
      const closed = t.marketState === "closed";
      const stale = !closed && (t.stale === true || age > 3e5);
      const status = closed ? "otc" : stale ? "stale" : "live";
      current.current = { ...t, mid: price, timestamp: stamp };
      setState((s) => {
        let bars = s.bars;
        if (status === "live" && bars.length) {
          bars = [...bars];
          let last = { ...bars[bars.length - 1] };
          const nowTime = bucketTime(stamp, interval);
          if (nowTime > Date.parse(last.openTime)) {
            last = { openTime: new Date(nowTime).toISOString(), open: last.close, close: price, high: price, low: price };
            bars.push(last);
            bars = bars.slice(-120);
          } else {
            last.close = price;
            last.high = Math.max(last.high, price);
            last.low = Math.min(last.low, price);
            bars[bars.length - 1] = last;
          }
        }
        return { ...s, bars, tick: current.current, status, error: null };
      });
      if (closed && !otcTimer) {
        setState((s) => ({ ...s, status: "otc", bars: synthetic(price, step), otcPrice: price }));
        otcTimer = setInterval(() => {
          if (!alive) return;
          setState((s) => {
            let bars = [...s.bars], last = bars.at(-1);
            if (!last) return s;
            let next = last.close * (1 + (Math.random() - 0.5) * 4e-5);
            if (Date.now() - Date.parse(last.openTime) > step) {
              last = { openTime: (/* @__PURE__ */ new Date()).toISOString(), open: last.close, close: next, high: next, low: next };
              bars.push(last);
              bars = bars.slice(-120);
            } else {
              last.close = next;
              last.high = Math.max(last.high, next);
              last.low = Math.min(last.low, next);
              bars[bars.length - 1] = last;
            }
            return { ...s, bars, otcPrice: next, status: "otc" };
          });
        }, 900);
      } else if (!closed && otcTimer) {
        clearInterval(otcTimer);
        otcTimer = null;
      }
    };
    async function getTick() {
      try {
        const r = await fetch(`${API}/${sourceSymbol}`, { signal: controller.signal });
        if (!r.ok) throw new Error(r.status === 404 ? "\u0644\u0627 \u062A\u062A\u0648\u0641\u0631 \u0623\u0633\u0639\u0627\u0631 \u0644\u0647\u0630\u0627 \u0627\u0644\u0623\u0635\u0644" : "\u0645\u0635\u062F\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D");
        update(await r.json());
      } catch (e) {
        if (alive && e.name !== "AbortError") setState((s) => ({ ...s, status: s.tick ? "stale" : "error", error: e.message }));
      }
    }
    async function getBars() {
      try {
        let bars;
        if (["5s", "10s", "15s", "30s"].includes(interval)) {
          const r = await fetch(`${API}/${sourceSymbol}/history?count=1000`, { signal: controller.signal });
          if (!r.ok) throw new Error("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u0633\u0639\u0631\u064A");
          const payload = await r.json();
          bars = aggregateTicks(Array.isArray(payload) ? payload : payload.ticks || [], interval);
        } else {
          const frame = ["7d", "1mo"].includes(interval) ? "1d" : interval;
          const r = await fetch(`${API}/${sourceSymbol}/ohlc?interval=${frame}&limit=1000`, { signal: controller.signal });
          if (!r.ok) throw new Error("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0634\u0645\u0648\u0639");
          const d = await r.json();
          bars = (d.bars || []).filter(valid).map((b) => ({ ...b, open: +b.open, close: +b.close, high: +b.high, low: +b.low })).sort((a, b) => Date.parse(a.openTime) - Date.parse(b.openTime));
          if (frame !== interval) {
            const grouped = /* @__PURE__ */ new Map();
            bars.forEach((b) => {
              const time = bucketTime(b.openTime, interval), old = grouped.get(time);
              if (!old) grouped.set(time, { ...b, openTime: new Date(time).toISOString() });
              else {
                old.high = Math.max(old.high, b.high);
                old.low = Math.min(old.low, b.low);
                old.close = b.close;
              }
            });
            bars = [...grouped.values()];
          }
        }
        if (alive) setState((s) => ({ ...s, bars: s.status === "otc" ? s.bars : bars, error: bars.length ? null : "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644 \u0633\u0639\u0631\u064A \u0645\u062A\u0627\u062D" }));
      } catch (e) {
        if (alive && e.name !== "AbortError") setState((s) => ({ ...s, error: e.message }));
      }
    }
    getTick();
    getBars();
    connection = new import_signalr.HubConnectionBuilder().withUrl("https://biquote.io/hubs/tick", { withCredentials: false }).withAutomaticReconnect([0, 2e3, 1e4, 3e4]).configureLogging(import_signalr.LogLevel.None).build();
    connection.on("ReceiveTick", update);
    connection.onreconnected(async () => {
      if (alive) {
        try {
          await connection.invoke("Subscribe", [sourceSymbol]);
          setState((s) => ({ ...s, stream: true }));
        } catch {
        }
      }
    });
    connection.onreconnecting(() => alive && setState((s) => ({ ...s, stream: false })));
    connection.onclose(() => alive && setState((s) => ({ ...s, stream: false })));
    connection.start().then(async () => {
      if (!alive) {
        await connection.stop();
        return;
      }
      await connection.invoke("Subscribe", [sourceSymbol]);
      if (alive) setState((s) => ({ ...s, stream: true }));
    }).catch(() => {
    });
    poll = setInterval(() => {
      if (connection.state !== "Connected" || !current.current || Date.now() - Date.parse(current.current.timestamp) > 6e4) getTick();
    }, 15e3);
    watch = setInterval(() => {
      if (!alive || !current.current) return;
      const age = Date.now() - Date.parse(current.current.timestamp);
      if (age > 3e5) setState((s) => s.status === "live" ? { ...s, status: "stale" } : s);
    }, 1e4);
    return () => {
      alive = false;
      controller.abort();
      clearInterval(poll);
      clearInterval(watch);
      clearInterval(otcTimer);
      connection?.stop().catch(() => {
      });
    };
  }, [symbol, interval, revision]);
  return { ...state, price: state.status === "otc" ? state.otcPrice || state.tick?.mid : state.tick?.mid, refresh: () => reload((x) => x + 1) };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ASSETS,
  intervalMs,
  useMarket
});
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
