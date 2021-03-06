// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Js_boolean = require("bs-platform/lib/js/js_boolean.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Container = require("./styled/Container");
var Base = require("./styled/Option/Base");
var Label = require("./styled/Option/Label");
var TouchableOpacity$BsReactNative = require("bs-react-native/src/components/touchableOpacity.js");

function make(children) {
  return ReasonReact.wrapJsForReason(Label.default, {}, children);
}

var Label$1 = /* module */ [/* make */ make];

function make$1(last, children) {
  return ReasonReact.wrapJsForReason(
    Base.default,
    {
      last: Js_boolean.to_js_boolean(last),
    },
    children
  );
}

var Base$1 = /* module */ [/* make */ make$1];

var Styled = /* module */ [/* Label */ Label$1, /* Base */ Base$1];

var component = ReasonReact.statelessComponent("PopupMenuOption");

function make$2(last, action, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      TouchableOpacity$BsReactNative.make(
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* Some */ [action.onPress],
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* Some */ [0.8],
        /* None */ 0,
        /* None */ 0
      )(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$1(
              last,
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make(/* array */ [action.title])
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function(jsProps) {
  return make$2(jsProps.last, jsProps.action, /* array */ []);
});

var Option = /* module */ [
  /* Styled */ Styled,
  /* component */ component,
  /* make */ make$2,
  /* default */ $$default,
];

function make$3(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$1 = /* module */ [/* make */ make$3];

var Styled$1 = /* module */ [/* Container */ Container$1];

var component$1 = ReasonReact.statelessComponent("PopupMenu");

function make$4(actions, _) {
  var newrecord = component$1.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make$3(
        /* array */ [
          actions.map(function(action, i) {
            return ReasonReact.element(
              /* Some */ [Pervasives.string_of_int(i)],
              /* None */ 0,
              make$2(
                +(i === ((actions.length - 1) | 0)),
                action,
                /* array */ []
              )
            );
          }),
        ]
      )
    );
  };
  return newrecord;
}

var $$default$1 = ReasonReact.wrapReasonForJs(component$1, function(jsProps) {
  return make$4(jsProps.actions, /* array */ []);
});

exports.Option = Option;
exports.Styled = Styled$1;
exports.component = component$1;
exports.make = make$4;
exports.$$default = $$default$1;
exports.default = $$default$1;
exports.__esModule = true;
/* component Not a pure module */
