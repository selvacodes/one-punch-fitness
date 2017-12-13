// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Colors = require("colors");
var Moment = require("moment");
var NPMBindings = require("../../config/NPMBindings.bs.js");
var ReasonReact = require("reason-react/src/reasonReact.js");
var Container = require("./styled/Container");
var TouchableOpacityRe = require("bs-react-native/src/components/touchableOpacityRe.js");
var Text = require("./styled/Option/Text");
var Knob = require("./styled/Switch/Knob");
var Label = require("./styled/Option/Label");
var Container$1 = require("./styled/Option/Container");
var Container$2 = require("./styled/Switch/Container");

function make(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$3 = /* module */ [/* make */ make];

var Styled = /* module */ [/* Container */ Container$3];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Container$2.default, {}, children);
}

var Container$4 = /* module */ [/* make */ make$1];

function make$2($staropt$star, children) {
  var on = $staropt$star ? $staropt$star[0] : /* false */ 0;
  return ReasonReact.wrapJsForReason(
    Knob.default,
    {
      on: on,
    },
    children
  );
}

var Knob$1 = /* module */ [/* make */ make$2];

var Styled$1 = /* module */ [/* Container */ Container$4, /* Knob */ Knob$1];

var component = ReasonReact.statelessComponent("Switch");

function make$3(value, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make$1(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$2(/* Some */ [value], /* array */ [])
          ),
        ]
      )
    );
  };
  return newrecord;
}

var Switch = /* module */ [
  /* Styled */ Styled$1,
  /* component */ component,
  /* make */ make$3,
];

function make$4(tint, children) {
  return ReasonReact.wrapJsForReason(
    Container$1.default,
    {
      tint: tint,
    },
    children
  );
}

var Container$5 = /* module */ [/* make */ make$4];

function make$5(children) {
  return ReasonReact.wrapJsForReason(Label.default, {}, children);
}

var Label$1 = /* module */ [/* make */ make$5];

function make$6(children) {
  return ReasonReact.wrapJsForReason(Text.default, {}, children);
}

var Text$1 = /* module */ [/* make */ make$6];

var Styled$2 = /* module */ [
  /* Container */ Container$5,
  /* Label */ Label$1,
  /* Text */ Text$1,
];

var component$1 = ReasonReact.statelessComponent("Option");

function make$7(tint, label, onPress, render, _) {
  var newrecord = component$1.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      TouchableOpacityRe.make(
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
        /* Some */ [onPress],
        /* None */ 0,
        /* None */ 0,
        /* None */ 0,
        /* Some */ [0.95],
        /* None */ 0,
        /* None */ 0
      )(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$4(
              tint,
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$5(/* array */ [label])
                ),
                Curry._1(render, /* () */ 0),
              ]
            )
          ),
        ]
      )
    );
  };
  return newrecord;
}

var Option = /* module */ [
  /* Styled */ Styled$2,
  /* component */ component$1,
  /* make */ make$7,
];

var component$2 = ReasonReact.reducerComponent("SettingsScreen");

function make$8() {
  var newrecord = component$2.slice();
  newrecord[/* render */ 9] = function(self) {
    var match = self[/* state */ 4][/* remindersActive */ 0];
    var match$1 = self[/* state */ 4][/* remindersActive */ 0];
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$7(
              match !== 0 ? Colors.default.start : Colors.default.disabled,
              "reminders",
              Curry._1(self[/* reduce */ 3], function() {
                return /* ToggleReminders */ 0;
              }),
              function() {
                return ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$3(
                    self[/* state */ 4][/* remindersActive */ 0],
                    /* array */ []
                  )
                );
              },
              /* array */ []
            )
          ),
          match$1 !== 0
            ? ReasonReact.element(
                /* None */ 0,
                /* None */ 0,
                make$7(
                  Colors.default.status,
                  "reminder time",
                  Curry._1(self[/* reduce */ 3], function() {
                    return /* ToggleDatePicker */ 1;
                  }),
                  function() {
                    return ReasonReact.element(
                      /* None */ 0,
                      /* None */ 0,
                      make$6(
                        /* array */ [
                          Moment(
                            self[/* state */ 4][/* reminderTime */ 1]
                          ).format("h:mmA"),
                        ]
                      )
                    );
                  },
                  /* array */ []
                )
              )
            : null,
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            NPMBindings.DateTimePicker[/* make */ 0](
              /* Some */ [self[/* state */ 4][/* datePickerVisible */ 2]],
              /* Some */ [
                function(d) {
                  return Curry._2(
                    self[/* reduce */ 3],
                    function() {
                      console.log(d);
                      return /* SetTime */ [d.toUTCString()];
                    },
                    /* () */ 0
                  );
                },
              ],
              /* Some */ [
                Curry._1(self[/* reduce */ 3], function() {
                  return /* ToggleDatePicker */ 1;
                }),
              ],
              /* Some */ ["time"],
              /* Some */ ["Pick a time for your workout reminder"],
              /* array */ []
            )
          ),
        ]
      )
    );
  };
  newrecord[/* initialState */ 10] = function() {
    return /* record */ [
      /* remindersActive : false */ 0,
      /* reminderTime */ new Date().toUTCString(),
      /* datePickerVisible : false */ 0,
    ];
  };
  newrecord[/* reducer */ 12] = function(action, state) {
    if (typeof action === "number") {
      if (action !== 0) {
        return /* Update */ Block.__(0, [
          /* record */ [
            /* remindersActive */ state[/* remindersActive */ 0],
            /* reminderTime */ state[/* reminderTime */ 1],
            /* datePickerVisible */ 1 - state[/* datePickerVisible */ 2],
          ],
        ]);
      } else {
        return /* Update */ Block.__(0, [
          /* record */ [
            /* remindersActive */ 1 - state[/* remindersActive */ 0],
            /* reminderTime */ state[/* reminderTime */ 1],
            /* datePickerVisible */ state[/* datePickerVisible */ 2],
          ],
        ]);
      }
    } else {
      return /* Update */ Block.__(0, [
        /* record */ [
          /* remindersActive */ state[/* remindersActive */ 0],
          /* reminderTime */ action[0],
          /* datePickerVisible */ 1 - state[/* datePickerVisible */ 2],
        ],
      ]);
    }
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component$2, function() {
  return make$8(/* array */ []);
});

exports.Styled = Styled;
exports.Switch = Switch;
exports.Option = Option;
exports.component = component$2;
exports.make = make$8;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
