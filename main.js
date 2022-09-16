"use strict";
(self["webpackChunkdebriefer"] = self["webpackChunkdebriefer"] || []).push([["main"],{

/***/ 7295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6011);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_cond1_debriefing_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8912);
/* harmony import */ var _meddbriefer_log_chooser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9834);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/debriefer/src/App.js";








const App = props => {
  const {
    auth,
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebaseProject)(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseProject);
  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  window.db = db;

  function redirectToCond1Debriefing(debriefID) {
    const newURL = `/debriefing/${debriefID}`;
    history.push(newURL);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.FirebaseContext.Provider, {
    value: {
      auth,
      db
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_0__.AuthProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_0__.PrivateRoute, {
          exact: true,
          path: "/debriefing/:logID",
          authFlowLayout: _meddbriefer_cond1_debriefing_ui__WEBPACK_IMPORTED_MODULE_2__.UnauthedLayout,
          component: _meddbriefer_cond1_debriefing_ui__WEBPACK_IMPORTED_MODULE_2__.GetReview
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_0__.PrivateRoute, {
          authFlowLayout: _meddbriefer_cond1_debriefing_ui__WEBPACK_IMPORTED_MODULE_2__.UnauthedLayout,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_meddbriefer_log_chooser__WEBPACK_IMPORTED_MODULE_3__.LogChooser, {
            redirectToCond1Debriefing: redirectToCond1Debriefing
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 3015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.
const environment = {
  production: false,
  firebaseProject: "PamDev" || 0
};

/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7029);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6643);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7295);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/debriefer/src/main.js";





const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 5
}, undefined));

/***/ }),

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findHeaderFor": () => (/* binding */ findHeaderFor),
/* harmony export */   "getEndSubPhase": () => (/* binding */ getEndSubPhase),
/* harmony export */   "getEndSubPhaseIndex": () => (/* binding */ getEndSubPhaseIndex),
/* harmony export */   "getSubPhases": () => (/* binding */ getSubPhases),
/* harmony export */   "hasSubPhases": () => (/* binding */ hasSubPhases),
/* harmony export */   "insertInPhaseInOrder": () => (/* binding */ insertInPhaseInOrder),
/* harmony export */   "insertInPhaseRelativeToSuggestedOrder": () => (/* binding */ insertInPhaseRelativeToSuggestedOrder)
/* harmony export */ });
// this approximates the placement for a missing intervention based on ordering of interventions
// in the problems definitions, what appears in the log that is just before and just after
// the item to be inserted, and what is marked as required that is in the log just before and after.  An approach that
// utilizes partial ordering constraints would be better.  Also it is not clear what to do for really badly ordered
// actions on the part of the student.  Note that it only looks for two anchor points before and two anchor points after
// rather than all potential anchor points.  Also it does not deal with a phase that is split into multiple time periods
// within a log. It looks for the best placement in the last phase found.
//input orderedArrayObjects is the interventions for a problem as ordered in the problem def
// objIndex is the index in orderedArrayObjects for the intervention object that needs to be inserted in phases
const insertInPhaseRelativeToSuggestedOrder = (phaseNames, phases, object, orderedArrayObjects, objIndex, confirmedEvents, checklistHierarchy, requiredPhaseNames, requiredSubphases, phaseRequiredAtEnd) => {
  // if expertPhase in object is a phase then find the last subphase and insert there instead of at the beginning
  let phaseIndex = -1; // if it is a subphase or a phase with no subphases then get the last entry for a proposed initial insertion point
  // object.expertPhase is the phase recommended for this action to appear

  if (object.expertPhase === "") {
    /* let errorMsg = 'No phase specified in the problem defs for object: ' + object.actionDescription;
    throw new Error(errorMsg) */
    //just use the next to last phase if none is specified
    object.expertPhase = requiredPhaseNames[requiredPhaseNames.length - 2];
  }

  if (requiredSubphases.includes(object.expertPhase) || !getSubPhases(object.expertPhase, checklistHierarchy)) {
    phaseIndex = phaseNames.lastIndexOf(object.expertPhase);
  } // if it is a phase then get the last entry of the last suphase within it for a proposed intial insertion point
  // for an intervention but if it is an assessment suggest goes in the first instance of the phase at the end of 
  // that phase
  else {
    phaseIndex = getEndSubPhaseIndex(object.expertPhase, phaseNames);
  }
  /* if(["assessment", "required-action", "assessment-option"].includes(object.type)){
      phaseIndex = getFirstSubPhaseIndex(object.expertPhase, phaseNames)}
  else {phaseIndex = getEndSubPhaseIndex(object.expertPhase, phaseNames);}} */


  if (object.expertPhase === phaseRequiredAtEnd && phaseNames.length - 1 !== phaseIndex) {
    //add a phase ongoing management at the end
    phaseIndex = phaseNames.length;
    phaseNames[phaseIndex] = phaseRequiredAtEnd;
    phases[phaseIndex] = [];
  } //update object when field which is mostly to see what gets computed for the insertion point


  object.when = phaseNames[phaseIndex];
  let objectsBefore;
  let objectBefore;
  let requiredObjectBefore;

  if (objIndex !== 0) {
    objectsBefore = orderedArrayObjects.slice(0, objIndex);
    objectBefore = [...objectsBefore].reverse().find(entry => confirmedEvents.includes(entry.id) || confirmedEvents.includes(entry.interventionID));
    requiredObjectBefore = objectsBefore.find(entry => ["required", "alternative"].includes(entry.protocolRelationship) && confirmedEvents.includes(entry.interventionID));
  }

  let objectAfter;
  let objectsAfter;
  let requiredObjectAfter;

  if (objIndex !== orderedArrayObjects.length - 1) {
    objectsAfter = orderedArrayObjects.slice(objIndex + 1);
    objectAfter = [...objectsAfter].find(entry => confirmedEvents.includes(entry.id) || confirmedEvents.includes(entry.interventionID));
    requiredObjectAfter = objectsAfter.find(entry => ["required", "alternative"].includes(entry.protocolRelationship) && confirmedEvents.includes(entry.interventionID));
  }

  let phaseObjects = [...phases[phaseIndex]]; //trying for a deep copy of the array mainly for debug via console.log

  let indexBefore = -1;
  let indexAfter = -1;
  let indexRequiredBefore = -1;
  let indexRequiredAfter = -1;
  let insertionIndex = false;

  if (objectBefore) {
    indexBefore = phaseObjects.findIndex(entry => entry.id === objectBefore.id || entry.id === objectBefore.interventionID);
  }

  if (objectAfter) {
    indexAfter = phaseObjects.findIndex(entry => entry.id === objectAfter.id || entry.id === objectAfter.interventionID);
  }

  if (requiredObjectBefore) {
    indexRequiredBefore = phaseObjects.findIndex(entry => entry.id === requiredObjectBefore.id || entry.id === requiredObjectBefore.interventionID);
  }

  if (requiredObjectAfter) {
    indexRequiredAfter = phaseObjects.findIndex(entry => entry.id === requiredObjectAfter.id || entry.id === requiredObjectAfter.interventionID);
  } // There is a more compact way to do the below but this made
  // it easier for me to get the logic right
  // insert according to required before first as we want to follow something that was required


  if (indexRequiredBefore !== -1) {
    insertionIndex = indexRequiredBefore + 1; // but if the just before object is greater then insert relative to it

    if (!!indexBefore && indexBefore > indexRequiredBefore) {
      insertionIndex = indexBefore + 1;
    }
  } //if no required before and not required after then insert relative to
  //required item after in actions definition


  if (!insertionIndex && indexRequiredAfter !== -1) {
    insertionIndex = indexRequiredAfter - 1;
  }

  ; // unless the just after is smaller then override and insert relative to it

  if (indexAfter < indexRequiredAfter) {
    insertionIndex = indexAfter - 1;
  } //otherwide if have a just before insert relative to it


  if (!insertionIndex && indexBefore !== -1) {
    insertionIndex = indexBefore + 1;
  } //otherwise if have a just after insert relative to it


  if (!insertionIndex && indexAfter !== -1) {
    insertionIndex = indexAfter - 1;
  } //otherwise put at end of phase


  if (!insertionIndex) {
    insertionIndex = phaseObjects.length + 1;
  }

  insertInPhaseInOrder(phaseNames, phases, object, insertionIndex);
}; //support functions for updating and searching the phaseNames and phases data structures

const insertInPhaseInOrder = (phaseNames, phases, object, objIndex) => {
  let phase;
  phase = object.when; //what phase should it be added to

  let phaseIndex = phaseNames.lastIndexOf(phase); //get the index for the last instance of the phase

  let phaseObjects = phases[phaseIndex]; //get the objects associated with that phase

  if (!phaseObjects) {
    phaseObjects = [];
  }

  phaseObjects.splice(objIndex, 0, object); //insert it at the place indicated by input objIndex

  phases[phaseIndex] = phaseObjects;
};
const getEndSubPhase = (inPhaseId, phaseNames) => {
  let subPhases = getSubPhases(inPhaseId);
  let subPhaseName;
  let reversedSubPhases = [...subPhases].reverse();

  for (let subPhase of reversedSubPhases) {
    subPhaseName = phaseNames.find(id => id === subPhase.id);

    if (!!subPhaseName) {
      break;
    }
  }

  return subPhaseName;
};
const getEndSubPhaseIndex = (inPhaseId, phaseNames) => {
  let subPhaseName = getEndSubPhase(inPhaseId, phaseNames);
  let index = phaseNames.lastIndexOf(subPhaseName);
  return index;
}; // sts 01/23/22

const getSubPhases = (phaseId, checklistHierarchy) => {
  return checklistHierarchy.find(phase => phase.id === phaseId).subPhases; // let mainPhases = findPhases();
  // let phaseEntry = mainPhases.find(phase => phase.id === phaseId);
  // return (phaseEntry.subPhases);
};
const hasSubPhases = (phaseId, checklistHierarchy) => {
  let phase = checklistHierarchy.find(phase => phase.id === phaseId);

  if (!!phase && !!phase.subPhases) {
    return true;
  } else {
    return false;
  }
}; //given a numerical id, what is its parent phase or subphase
//find the header under which the input numericalID appears

const findHeaderFor = (numericalID, log) => {
  let candidateHeader = {};
  let foundHeader = {};

  for (let entry of log) {
    if (entry.id === "problemHeader") {
      candidateHeader = entry;
    } else {
      if (entry.numericalID === numericalID) {
        foundHeader = candidateHeader;
        break;
      }
    }
  }

  return foundHeader;
};

/***/ }),

/***/ 4654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "analyzeEvents": () => (/* binding */ analyzeEvents)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8913);
/* harmony import */ var _debriefingUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5064);
/* harmony import */ var _constraintHandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var _actionInsertion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6006);
/* harmony import */ var _handleMinimal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2283);
/* harmony import */ var _organizeCond1Display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3769);
/* harmony import */ var _vitalsChecking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5700);
/* harmony import */ var _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9205);
/* harmony import */ var _meddebriefer_prompt_answer_grading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(580);
/* harmony import */ var _scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4548);









 //import {  summarizeAnalysis} from './summarizeAnalysis';
// initializeC2FB,

let problemStates;
let cautionStates;
let constraintsViolated = [];
let insertInterventionHeader = false; //setting to true helps during debugging analysis, shows headers for problems
//index of subphase names and value is phase id to which belongs

let subPhases = {}; // list of all subphase IDs

let requiredSubphases;
let requiredPhaseNames = [];
let requiredPhaseAndSubPhases;
let phaseRequiredAtEnd;
let scenario; //let version

let phaseFB;
var promptIDs = {};
var itemByID;
var itemByLabel; // sts 1/23/22 - added as global

let checklistHierarchy; // analysisFields to include in output

let analysisFields = ["numericalID", "actionDescription", "id", "type", "label", "labelID", "answerDetails", "vital", "vitalType", "value", "subPhase", "finding", "intvStatus", "vitalsNotDoneTwice", "vitalsDoneTwice", "probLabel", "feedback", "phFeedback", "why", "orderingFB", "vitalsFB", "incorrectAnswersFB", "intvStatusFB", "redundantToFB", "minimalWhy", "timestamp", "status", "displayColor", "comment"];

function initGlobals(scen) {
  problemStates = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getStatesForStatus)("Problem", _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_7__.fbTemplatesDef);
  cautionStates = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getStatesForStatus)("Caution", _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_7__.fbTemplatesDef);
  phaseRequiredAtEnd = "ongoing-mgmt-plan";
  scenario = scen;
  (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.initializeConstraints)(scen.name);
  getPromptIDs(scenario);
  (0,_meddebriefer_prompt_answer_grading__WEBPACK_IMPORTED_MODULE_8__.initializePromptAnswerGrading)(scenario);
  itemByID = initializeItemLookupByID(scen);
  itemByLabel = initializeItemLookupByLabel(scen);
  requiredPhaseNames = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.getChecklistItemsByType)(scen, _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE).map(e => e.id).concat(["Unknown"]);
  requiredSubphases = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.getChecklistItemsByType)(scen, _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE).map(e => e.id);
  checklistHierarchy = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.getChecklistHierarchy)(scen);
  requiredPhaseAndSubPhases = findPhaseSubphasesOrdered(checklistHierarchy);
  checklistHierarchy.forEach(ph => {
    if (undefined === ph.subPhases) {
      subPhases[ph.id] = ph.label;
    } else {
      ph.subPhases.forEach(sp => {
        subPhases[sp.id] = ph.label;
      });
    }
  });
  subPhases["Unknown"] = "Unknown"; // initializeC2FB(scen)

  constraintsViolated = [];
  phaseFB = [];
}

function getPromptIDs(scen) {
  if (scen._interventionPrompts) {
    let prompts = scen._interventionPrompts;
    prompts.forEach(prompt => {
      promptIDs[prompt.id] = prompt.label;
    });
  }
} //This starts section for accessing checklist and intervention components by id or label


const initializeItemLookupByID = scenario => {
  let checklistLookupByID = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.groupByKey)(scenario._checkListMetaData.filter(e => _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.ANALYSIS_TYPES.includes(e.type)), "id");
  let intvLookupByID;

  if (!!scenario._interventions) {
    intvLookupByID = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.groupByKey)(scenario._interventions, "id");
  } else {
    intvLookupByID = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.groupByKey)(scenario.intvMetaData.filter(e => _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.ANALYSIS_TYPES.includes(e.type)), "id");
  }

  let result = Object.assign(checklistLookupByID, intvLookupByID);
  return result;
};

const initializeItemLookupByLabel = scenario => {
  let checklistLookupByLabel = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.groupByKey)(scenario._checkListMetaData.filter(e => _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.ANALYSIS_TYPES.includes(e.type)), "label");
  let intvLookupByLabel;

  if (!!scenario._interventions) {
    intvLookupByLabel = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.groupByKey)(scenario._interventions, "label");
  } else {
    intvLookupByLabel = (0,_scenarioDataAccesors__WEBPACK_IMPORTED_MODULE_9__.groupByKey)(scenario.intvMetaData.filter(e => _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.ANALYSIS_TYPES.includes(e.type)), "label");
  }

  let result = Object.assign(checklistLookupByLabel, intvLookupByLabel);
  return result;
};

const findPhaseSubphasesOrdered = phases => {
  let result = [];
  phases.forEach(ph => {
    if (!!ph.subPhases) {
      let subPhIds = ph.subPhases.map(e => e.id); //not currently useful to collect parent phases unless there were no subphases
      //if parent phase included subphases and steps then it should be in this result
      //result = result.concat(ph.id)

      result = result.concat(subPhIds);
    } else {
      result = result.concat(ph.id);
    }
  });
  return result;
};

const collectScenAssessments = problems => {
  let assessments = [];
  problems.forEach(prob => {
    if (prob.assessments !== "") {
      assessments = assessments.concat(prob.assessments);
    }
  });
  return assessments;
};

const collectScenInterventions = problems => {
  let interventions = [];
  problems.forEach(prob => {
    if (prob.allActions !== "") {
      let ids = prob.allActions.map(a => a.id);
      interventions = interventions.concat(ids);
      ids = prob.allAlts.map(a => a.id);
      interventions = interventions.concat(ids);
    }
  });
  return interventions;
}; //will need to update to comply with any relevant constraints on phases and subphases
//currently looks for missing phases/subphases and inserts them into the analysis list
//based on where last preceding phase appeared


const insertMissingSubphases = (phases, phaseNames) => {
  let priorPh;
  requiredPhaseAndSubPhases.forEach((phase, i) => {
    if (!phaseNames.includes(phase)) {
      if (phase === phaseRequiredAtEnd) {
        //needs special handling to be placed last 
        priorPh = requiredPhaseAndSubPhases[requiredPhaseAndSubPhases.length - 2];
      } else {
        //find last index for phase before and splice that
        if (i === 0) {
          priorPh = requiredPhaseAndSubPhases[0];
        } else {
          priorPh = requiredPhaseAndSubPhases[i - 1];
        }
      }

      let insertionIndex = 0;

      if (priorPh !== phase) {
        insertionIndex = phaseNames.lastIndexOf(priorPh); //if prior phase was missing it will have been inserted earlier

        insertionIndex = insertionIndex + 1;
      }

      phaseNames.splice(insertionIndex, 0, phase); //insert it where it should have appeared

      phases.splice(insertionIndex, 0, []); //add the empty array for phase objects
    }
  });
  return [phases, phaseNames];
}; //as vital requests and intervention requests are made, update that it was requested
//if it is one that we are tracking for post intervention success.


const updateVital = (vitalEntries, timestamp) => {
  let updatedEntries = [];
  vitalEntries.forEach(vitalEntry => {
    if (vitalEntry.timestamp < timestamp) {
      vitalEntry["foundCk"] = true;
    }

    updatedEntries.push(vitalEntry);
  });
  return updatedEntries;
};
/* function isEmpty(obj) {
        return Object.keys(obj).length === 0;
} */


const annotateInputEvents = (events, problems) => {
  let confirmedEvents = [];
  let interventionsConfirmed = []; //needed for vital checking
  //instead of a multi-dimensional array, am using an array of phase and subphase names e.g. "BSI", "prinary" ...

  let phaseNames = [];
  let phases = []; //and another array with the actual content for each phase.  I can search phaseNames for the index into phases

  let phaseObjects = [];
  let trackForStatus = {}; //save correct interventions that were done that require status checks later
  //let altFound = undefined   //can have only one set of alternative interventions per problem
  // phases entry of that name and then use that index to retrieve the appropriate phase entried to
  //add on the missing items (assessment or intervention) for that phase

  let priorPhase = "";
  let parentPhase = "";
  let parentIndex = 0;
  let phaseIndex = 0;
  let newPhaseStart = true;
  let assessmentTypes = ["assessment", "required-action", "decision-option", "assessment-option"]; // created annotated object for each event

  events.forEach((event, i) => {
    // Each eventObj is one of the lines in the displayed base log
    // Set up fields for extra annotations for this event after analyzing each event
    let eventObj = {
      "comment": "",
      "numericalID": i,
      "status": "",
      "intvStatus": [],
      //will be an array what patient status checks were and weren't done
      "contraindicatedWhy": "",
      "minimalWhy": "",
      "why": "",
      "answerCorrect": "false",
      "answerDetails": {},
      "expertPhase": "",
      //filled in only for interventions
      "workingPhase": "",
      //is subphase or if no suphase then the phase
      "suggestedPhase": "",
      //mostly for interventions so don't override info on when was originally done
      "phaseLabel": "",
      //label to display for the phase or subphase
      "protocol": "",
      "protocolRelationship": "",
      "probLabel": "",
      "solutionIds": [],
      "assessments": "",
      "required": false,
      "actionDescription": "",
      "assessmentFB": "",
      "incorrectAnswersFB": "",
      "orderingFB": "",
      "processingState": "good" // values of good/bad used to filter out events not needed for analysis or displaying

    };

    if (!event.answers) {
      eventObj.answerCorrect = true;
    } // copy over the event fields that exist in the input log from observer UI (which is type dependent)


    const EVENT_FIELDS = ["id", "interventionID", //"intvVariant",  //ignoring intvVariant for now until questions resolved 8/10/22
    "label", "finding", "phase", "subPhase", "vitalType", "vital", "value", "type", "prompt", "promptID", "intervention", "timestamp", "probLabel"];
    EVENT_FIELDS.forEach(fldName => {
      if (!!event[fldName]) {
        eventObj[fldName] = event[fldName];
      }
    });

    if (event.type === "intervention") {
      if (!!event.interventionID) {
        eventObj.id = event.interventionID;
      }
    }

    let item = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(eventObj.id, itemByID, itemByLabel);

    if (!!item) {
      eventObj.label = item.label;
      eventObj.abbrLabel = item.abbrLabel;
    } //copy event fields if defined to initialize some of the above annotation fields

    /* if (!!eventObj.abbrLabel){eventObj.actionDescription = eventObj.abbrLabel;}
    else {eventObj.actionDescription = eventObj.label;} */


    eventObj.actionDescription = eventObj.label;

    if (!!event.type) {
      eventObj.status = event.type;
    } // prefer subPhase if available


    if (!!event.subPhase) {
      eventObj.workingPhase = event.subPhase;
      eventObj.phaseLabel = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(event.subPhase, itemByID, itemByLabel).label;
    } else {
      if (!!event.phase) {
        eventObj.workingPhase = event.phase;
        eventObj.phaseLabel = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(event.phase, itemByID, itemByLabel).label;
      }
    }

    eventObj.expertPhase = eventObj.workingPhase; //if current phase same as prior then keep on with the current phase
    // otherwise initialize for a new phase but don' let an intervention
    // or intervention answer set a new phase since this info in event is
    // not reliable

    if (priorPhase !== eventObj.workingPhase || parentPhase !== eventObj.phase) {
      if (priorPhase !== "" && assessmentTypes.includes(eventObj.type)) {
        //have a non initial phase change and we have an assessment type (i.e. we can't base phase changes on interventions)
        newPhaseStart = true;
        phases[phaseIndex] = phaseObjects;

        if (phaseIndex !== parentIndex) {
          phases[parentIndex] = phases[parentIndex].concat(phaseObjects);
        }

        phaseIndex++; //if upcoming parent phase is different than current parent phase then set up
        //for a new parent phase

        if (eventObj.phase !== parentPhase) {
          parentPhase = eventObj.phase;
          parentIndex = phaseIndex; // if the upcoming is truly a parent with subphases
          // then add an extra entry for the new parent phase

          if (eventObj.phase !== eventObj.workingPhase) {
            //create the new parent phase
            phases[parentIndex] = [];
            phaseNames[parentIndex] = parentPhase;
            phaseIndex++;
          }
        }
      } else {
        if (priorPhase === "" && assessmentTypes.includes(eventObj.type)) {
          // first item in events so initialize
          parentPhase = eventObj.phase; // if the event parent phase is not the same as the subPhase
          // then we need to save that parent phase in phases and phaseNames

          if (parentPhase !== eventObj.workingPhase) {
            parentPhase = eventObj.phase;
            phaseNames[parentIndex] = parentPhase;
            phases[parentIndex] = [];
            phaseIndex++;
          }
        } else {
          if (priorPhase === "") {
            //did an intervention before doing any assessments
            //so make up an initial phase of unknown
            parentPhase = "Unknown";
            eventObj.workingPhase = parentPhase;
            eventObj.phase = parentPhase;
            eventObj.subPhase = "";
          } else {
            newPhaseStart = false;
          }
        }
      } //now setup for collecting for the current phase if not skipping new phase start


      if (newPhaseStart) {
        priorPhase = eventObj.workingPhase;
        phaseObjects = [];
        phaseNames[phaseIndex] = priorPhase;
        phases[phaseIndex] = [];
      } else {
        newPhaseStart = true;
      }
    }

    let eventType = eventObj.type; // List of types in log that are currently processed.  Rest are filtered out.

    let processedTypes = ["assessment", "required-action", "intervention", "obtain-vital-sign", "decision-option", "assessment-option"]; //skip over adding anything not of these types to the debriefing display for now

    if (!processedTypes.includes(eventType)) {
      eventObj.processingState = "bad";
    }

    if (eventObj.processingState === "good") {
      if (eventObj.type === "obtain-vital-sign") {
        //if it is an intervention status check then the vital field contains
        //the intervention id and otherwise the vital label
        let vital = eventObj.vital;
        let type = "";

        if (eventObj.vitalType === "intervention-status") {
          if (interventionsConfirmed.includes(vital)) {
            type = "intv";
          } else {
            type = "noIntv";
          }
        } else {
          type = "vital";
        } //update trackForStatus relative to this "vital"


        let vitalEntry = trackForStatus[vital]; //set the status for this particular vital (i.e. makes sense to ask for it or not)

        switch (type) {
          case "intv":
            eventObj.status = "patientIntvCheck";

            if (vitalEntry && vitalEntry.timestamp < eventObj.timestamp) {
              vitalEntry["foundCk"] = true;
              trackForStatus[vital] = vitalEntry;
            }

            break;

          case "noIntv":
            eventObj.status = "intvCheckWNoIntvFound";
            break;

          case "vital":
            eventObj.status = "patientVitalCheck";

            if (vitalEntry) {
              vitalEntry = updateVital(vitalEntry, eventObj.timestamp);
              trackForStatus[vital] = vitalEntry;
            }

            break;

          default:
            eventObj.status = "unexpectedPatientIntvCheck";
        }
      }

      if (eventObj.type === "intervention") {
        let item = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(eventObj.id, itemByID, itemByLabel); //sometimes item ids get edited during development

        if (!!item) {
          eventObj.label = item.label;
          eventObj.actionDescription = eventObj.label;
          confirmedEvents.push(eventObj.id);
          interventionsConfirmed.push(eventObj.id);
        } else {
          eventObj.label = eventObj.id;
          eventObj.actionDescription = "No longer defined " + eventObj.label;
          confirmedEvents.push(eventObj.id);
          interventionsConfirmed.push(eventObj.id);
        } // iterate through all problem actions looking how to format the
        // data structue for the current "event"


        problems.forEach((prob, j) => {
          // We're going through intervention actions in the order required/needed and then other since
          // it is possible but unlikely to have multiples and we want the last one to win.
          // Also, we are assuming minimal is always a subset of goodIntv
          const PROBLEM_ACTION_FIELDS = ["why", "probLabel", "protocolRelationship", "probLabel"]; // check for this action to be an intervention for a problem

          prob.allActions?.forEach((action, k) => {
            if (action.id === eventObj.id) {
              //set up status tracking for the eventObj
              trackForStatus = setupStatusChecking(eventObj, trackForStatus); // fill out problem related fields in the action event

              fillOutProblemFields(prob, PROBLEM_ACTION_FIELDS, eventObj, action);
            }
          });
          prob.allAlts?.forEach((alt, j) => {
            if (alt.id === eventObj.id) {
              if (!prob.altFound) {
                //set up status tracking for the eventObj
                trackForStatus = setupStatusChecking(eventObj, trackForStatus);
                fillOutProblemFields(prob, PROBLEM_ACTION_FIELDS, eventObj, alt);
                prob.altFound = eventObj.label;
              } else {
                eventObj.status = "redundant";
                eventObj.redundantToFB = prob.altFound;
              }
            }
          }); // check for this action to be a contraindication for a problem solution

          prob.allContras?.forEach((contra, j) => {
            if (contra.id === eventObj.id) {
              eventObj.status = contra.protocolRelationship;
              PROBLEM_ACTION_FIELDS.forEach(fldName => {
                if (!!contra[fldName]) {
                  eventObj[fldName] = contra[fldName];
                }
              });

              if (!!prob.probLabel) {
                eventObj.probLabel = prob.probLabel;
              }
            }
          });
        }); //Do the grading of the event and return an event with
        //added fields with results

        let variant;

        if (!!event.intvVariant && typeof event.intvVariant === 'string' && event.intvVariant !== "{}") {
          let origVariant = JSON.parse(event.intvVariant); //intvVariant2JSON(event.intvVariant)}

          let key = Object.keys(origVariant)[0];
          let val = origVariant[key][0];
          variant = "{\"" + key + "\":\"" + val + "\"}";
        } else {
          variant = "{}";
        } //intvVariant2JSON({})} 


        let prescribedAnswers = (0,_meddebriefer_prompt_answer_grading__WEBPACK_IMPORTED_MODULE_8__.getPrescribedInvAnswers)(event.interventionID, variant);
        eventObj = (0,_meddebriefer_prompt_answer_grading__WEBPACK_IMPORTED_MODULE_8__.processInterventionAnswers)(event, eventObj, prescribedAnswers, "incorrect-answers"); //anything with leftover status of intervention means it wasn't part of the solution

        if (eventObj.status === "intervention") {
          eventObj.status = "irrelevant";
        }
      }

      if (eventObj.type === "decision-option") {
        let prescribedAnswers = scenario.checkListCorrectness;
        let parentItem = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(event.parentID, itemByID, itemByLabel);

        if (parentItem) {
          event.parentLabel = parentItem.label;
        }

        eventObj = (0,_meddebriefer_prompt_answer_grading__WEBPACK_IMPORTED_MODULE_8__.processAssessmentAnswers)(event, eventObj, prescribedAnswers, "decision-option-incorrect");

        if (!eventObj.answerCorrect) {
          eventObj.incorrectAnswersFB = "You should have responded " + eventObj.incorrectAnswersFB;
        }
      }

      if (eventObj.type === "assessment-option") {
        let prescribedAnswers = scenario.checkListCorrectness;
        let parentItem = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(event.parentID, itemByID, itemByLabel);

        if (parentItem) {
          event.parentLabel = parentItem.label;
        }

        eventObj = (0,_meddebriefer_prompt_answer_grading__WEBPACK_IMPORTED_MODULE_8__.processAssessmentAnswers)(event, eventObj, prescribedAnswers, "assessment-option-incorrect");

        if (!eventObj.answerCorrect) {
          eventObj.incorrectAnswersFB = "You should have responded " + eventObj.incorrectAnswersFB;
        }
      } // add the formatted object to our list of formatted objects for the current phase and the id to our set of confirmed ids


      if (eventObj.type === "intervention") {
        let variant;

        if (!!eventObj.intvVariant) {
          variant = eventObj.intvVariant;
        } else {
          variant = "{}";
        }

        confirmedEvents.push(eventObj.id + "+" + variant);
        interventionsConfirmed.push(eventObj.id);
      } else {
        confirmedEvents.push(eventObj.id);
      }

      phaseObjects.push(eventObj);
    }
  }); // store the last phase processed

  phases[phaseIndex] = phaseObjects;

  if (phaseIndex !== parentIndex) {
    phases[parentIndex] = phases[parentIndex].concat(phaseObjects);
  }

  ;
  return [phases, phaseNames, confirmedEvents, trackForStatus];
}; //start support functions for intervention handling


const setupStatusChecking = (eventObj, trackForStatus) => {
  //see if this is an event whose status should be checked by the student
  //and initialize its tracking.  Not yet limiting to event id when
  //defining what needs to be tracked in the structure intvChecks
  //so also checking event label
  let statusChecking; //the entry retrieve from intvChecks

  let intv = eventObj.id;
  statusChecking = _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_7__.intvChecks[eventObj.label];

  if (!statusChecking) {
    statusChecking = _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_7__.intvChecks[eventObj.id];
  }

  if (!!statusChecking) {
    let initialEntry = {
      "intervention": intv,
      "timestamp": eventObj.timestamp,
      "foundCk": false
    }; //put the intervention on the list if there is a direct status check possible for it

    if (statusChecking.intvStatusNeeded) {
      trackForStatus[intv] = Object.assign({}, initialEntry);
    } //if any vitals are listed for this intervention as a way of checking its status then
    //put those on the statusChecking list.  Anytime a vital is checked after the timestamp
    //it will count towards checking the status of the intervention


    statusChecking.vitalsNeeded.forEach(vital => {
      if (!trackForStatus[vital]) {
        trackForStatus[vital] = [Object.assign({}, initialEntry)];
      } else {
        trackForStatus[vital].push(Object.assign({}, initialEntry));
      }
    });
  }

  return trackForStatus;
};

const fillOutProblemFields = (prob, PROBLEM_ACTION_FIELDS, eventObj, action) => {
  if (!!action.assessments) {
    eventObj.assessmentsNeeded = action.assessments;
  }

  if (!!action.phase) {
    eventObj.when = action.phase;
    eventObj.suggestedPhase = action.phase;
  }

  ;

  if (!!prob.protocols) {
    eventObj.protocol = prob.protocols;
  }

  if (eventObj.answerCorrect) {
    eventObj.status = "goodIntv";
  } else {
    eventObj.status = "incorrect-answers";
  } //eventObj.probLabel = prob.probLabel;


  PROBLEM_ACTION_FIELDS.forEach(fldName => {
    if (!!action[fldName]) {
      eventObj[fldName] = action[fldName];
    }
  });

  if (!!action["id-label"]) {
    eventObj["label"] = action["id-label"];
  } //dealing with name changes in incoming data so software stays the same

}; //end supoort functions for intervention handling
//main function for dealing with missing assessment steps


const checkForMissingAssessments = (problems, events, confirmedEvents, phaseNames, phases) => {
  let neededScenAssessments = collectScenAssessments(problems);
  let indexCounter = events.length;

  var checklistSteps = scenario._checkListMetaData.filter(md => [_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.ASSESS, _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.REQUIRED].includes(md.type)); // before evaluating assessment steps, deal with exceptional cases where one or more steps is not
  // necessary for a given scenario.  Because GCS value is a string and not a formatted object
  // we can't reliably parse out values and units to do more general checks so can only set what
  // steps should not be assessed for a particular scenario.  Requires info on feedback to give as
  // well.
  // Get any exceptional steps associated with the current scenario


  var exceptions = [];

  for (let exceptionDef of _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_7__.exceptionDefs) {
    if (exceptionDef.scenarioName === scenario.name) {
      exceptions = exceptionDef.exceptions;
      break;
    }
  }

  exceptions.forEach((exception, j) => {
    // remove the step from the checklist as it is not required
    checklistSteps = checklistSteps.filter(entry => entry.id !== exception[0]); // if the step was done during the observation then mark it as an issue

    if (confirmedEvents.includes(exception[0])) {
      // it could appear in any phase so check all phases and mark
      // each instancs as unnecessary
      phases.forEach((phaseObjects, j) => {
        phaseObjects.forEach((action, i) => {
          if (action.id === exception[0]) {
            action.why = exception[1];
            action.status = "notNecessary";
          }
        });
      });
    }
  }); // iterate through all checklist steps for ones for which we don't have formated objects

  checklistSteps.forEach((cls, i) => {
    if (!confirmedEvents.includes(cls.id)) {
      // add so we don't check for the missing checklist item again
      confirmedEvents.push(cls.id);
      let phaseObject = {
        "comment": "",
        "numericalID": indexCounter,
        "status": "missingRequiredAssessment",
        "intvStatus": [],
        //will be an array what patient status checks were and weren't done
        "expertPhase": "",
        "workingPhase": "",
        "contraindicatedWhy": "",
        "minimalWhy": "",
        "why": "",
        "probLabel": "",
        "protocol": "",
        "actionDescription": "",
        "assessmentFB": "",
        "timestamp": -1
      }; //copy over the step fields that exist (type dependent)

      const STEP_FIELDS = ["id", "label", "finding", "phase", "subPhase", "type", "prompt"];
      STEP_FIELDS.forEach(fldName => {
        if (!!cls[fldName]) {
          phaseObject[fldName] = cls[fldName];
        }
      });
      let item;

      if (!!cls.subPhase) {
        phaseObject.workingPhase = cls.subPhase;
        item = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(cls.subPhase, itemByID, itemByLabel);

        if (!!item) {
          phaseObject.phaseLabel = item.label;
        }
      } else {
        if (!!cls.phase) {
          phaseObject.workingPhase = cls.phase;
          item = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getItem)(cls.phase, itemByID, itemByLabel);

          if (!!item) {
            phaseObject.phaseLabel = item.label;
          }
        }
      }

      phaseObject.when = phaseObject.workingPhase;
      phaseObject.expertPhase = phaseObject.workingPhase;

      if (!!phaseObject.label) {
        phaseObject.actionDescription = phaseObject.label;
      } //let findings = scenario.assessmentFindings[cls['id']]
      //if (!!findings & findings !== "Unremarkable" & findings !== "Stable"){


      if (neededScenAssessments.includes(cls['id'])) {
        phaseObject.assessmentFB = "Thus you missed finding: " + scenario.assessmentFindings[cls['id']];
      }

      if (phaseObject.type === "required-action") {
        phaseObject.status = "missingRequiredAssessment";
      }

      (0,_actionInsertion__WEBPACK_IMPORTED_MODULE_3__.insertInPhaseRelativeToSuggestedOrder)(phaseNames, phases, phaseObject, checklistSteps, i, confirmedEvents, checklistHierarchy, requiredPhaseNames, requiredSubphases, phaseRequiredAtEnd); //insertInPhaseInOrder(phaseNames, phases, phaseObject, i);

      indexCounter++;
    }
  });
  return [confirmedEvents, phaseNames, phases, indexCounter];
}; //rearrange the problem data structure for use during analysis


const setupProblems = (defs, sols, actions) => {
  let problems = [];

  for (let problemDef of defs) {
    let problem = {};
    let solutionIDs = problemDef.solutions;
    let probSols = sols.filter(sol => sol.problemID === problemDef.id);
    problem.probLabel = problemDef.label;
    problem.id = problemDef.id;
    problem.lifeThreat = problemDef.lifeThreat;
    problem.vitals = problemDef.vitals;
    problem.allActions = [];
    problem.allContras = [];
    problem.allAlts = [];
    let assessments = problemDef.assessments;
    problem.assessments = assessments.map(obj => obj.assessmentID);
    problem.solutions = [];

    for (let solID of solutionIDs) {
      let sol = probSols.filter(sol => sol.id === solID)[0];
      let solution = Object.assign({}, sol);
      solution.actions = [];
      solution.otherActions = [];
      solution.altActions = [];
      let actEntries;
      let actIDs = sol.actions;
      actEntries = actions.filter(act => actIDs.includes(act.id));
      solution.actionsInSuggestedOrder = actEntries.filter(act => ["alternative", "required", "minimal", "optional"].includes(act.protocolRelationship));

      for (let entry of actEntries) {
        let act = Object.assign({}, entry);
        act.id = act.interventionID;
        let item = itemByID[act.id];
        act.probLabel = problem.probLabel;
        act.altFound = undefined;

        if (!!item) {
          act["id-label"] = item[0].label;
        } else {
          act["id-label"] = act.id;
        }

        switch (act.protocolRelationship) {
          case "contraindicated":
          case "irrelevant":
          case "unnecessary":
            solution.otherActions.push(act);
            (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.pushNew)(act, problem.allContras); //need to be able to annotate an action without deciding yet on which solution under

            break;

          case "alternative":
            solution.altActions.push(act);
            (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.pushNew)(act, problem.allAlts);
            break;

          case "required":
          case "minimal":
          case "optional":
            solution.actions.push(act);
            (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.pushNew)(act, problem.allActions); //need to be able to annotate an action without deciding yet on which solution under

            break;

          default:
            break;
        }
      }

      problem.solutions.push(solution);
    }

    problems.push(problem);
  }

  return problems;
}; // create structure for tracking whether interventions are checked


const insertMissingIntvChecks = (events, statusTracking) => {
  let toUpdate;

  for (const [key, entry] of Object.entries(statusTracking)) {
    if (Array.isArray(entry)) {
      for (let obj of entry) {
        let newObj = {
          "label": key,
          "foundCk": obj["foundCk"]
        };
        toUpdate = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getEventsByIdTime)(events, obj["intervention"], obj["timestamp"]);

        for (let intv of toUpdate) {
          if (!intv["intvStatus"].includes(newObj)) {
            intv["intvStatus"].push(newObj);
          }
        }
      }
    } else {
      let newObj = {
        "label": "intervention status",
        "foundCk": entry["foundCk"]
      };
      toUpdate = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getEventsByIdTime)(events, key, entry["timestamp"]);
      toUpdate.forEach(intv => {
        if (!intv["intvStatus"].includes(newObj)) {
          intv["intvStatus"].push(newObj);
        }
      });
    }
  }

  return events;
};

function findBestSolMatch(prob, confirmedEvents) {
  prob.bestFittingSol = [];
  let bestIndex = -1;
  let finalIndex = -1;
  let bestVal = -1;
  let bestLen = -1;
  let foundOneAltAction = false;
  const solutions = prob.solutions;
  solutions.forEach((sol, j) => {
    let solVal;
    sol.found = [];
    sol.notFound = []; //let variant   //commenting out until variant questions resolved 8/10/22

    let variant = "{}";
    sol.actions.forEach((action, f) => {
      //commenting out until variant questions resolved 8/10/22

      /* if (!!action.interventionVariant){  
          variant = intvVariant2JSON(action.interventionVariant)}
      else {variant = "{}"} */
      if (confirmedEvents.includes(action.id + "+" + variant)) {
        sol.found.push(action.id);
      } else {
        if (!action.protocolRelationship.includes("optional")) {
          sol.notFound.push(action);
        }
      }
    });
    let solLen = sol.actions.length;
    let solLenFound = sol.found.length;

    if (solLenFound === 0) {
      solVal = 0;
    } else {
      solVal = solLenFound / solLen;
    }

    if (solVal === 1 && solLenFound > bestLen) {
      //prefer the longest solution match
      bestLen = solLenFound;
      bestIndex = j;
      finalIndex = j;
    } //finalIndex represents a perfect match
    else {
      if (solVal >= bestVal && solLenFound > bestLen) {
        bestLen = solLenFound;
        bestIndex = j;
        bestVal = solVal;
      }
    }
  }); //address alternative actions.  First see if found one of the
  //alternative actions.  If not then push the first of the alternative
  //set onto the actions not found.

  if (finalIndex === -1) {
    finalIndex = bestIndex;
  }

  let fSol = solutions[finalIndex];
  let altActsToRemove; //need to adjust actions in suggested order to eliminate alts not being used

  fSol.ordering = [...fSol.actionsInSuggestedOrder];

  if (fSol.altActions.length !== 0) {
    //let variant  //commenting out until variant questions resolved 8/10/22
    let variant = "{}";

    for (let action of fSol.altActions) {
      //commenting out until variant questions resolved 8/10/22

      /* if (!!action.interventionVariant){
          variant = intvVariant2JSON(action.interventionVariant)}
      else {variant = "{}"} */
      if (confirmedEvents.includes(action.id + "+" + variant)) {
        foundOneAltAction = true;
        break;
      }
    }

    if (!foundOneAltAction) {
      let action = fSol.altActions[0];
      altActsToRemove = fSol.altActions.filter(function (e) {
        return e.id != action.id;
      }).map(e => e.id);
      fSol.notFound.push(action);
    }

    if (!!altActsToRemove) {
      fSol.ordering = fSol.actionsInSuggestedOrder.filter(function (e) {
        return !altActsToRemove.includes(e.interventionID);
      });
      console.log("ordering", fSol.ordering);
    }
  }

  return fSol;
}

const insertMissingInterventions = (problems, confirmedEvents, indexCounter, phaseNames, phases) => {
  problems.forEach(prob => {
    //find the best fitting solution based on one with the max number of actions found
    let sol = findBestSolMatch(prob, confirmedEvents);
    prob.bestFittingSol = sol; // now we just have to insert actions not found

    let actions = sol.notFound;
    let variant;
    actions.forEach((action, k) => {
      //commenting out until variant questions resolved 8/10/22
      variant = "{}";
      /* if (!!action.interventionVariant){
          variant = intvVariant2JSON(action.interventionVariant)}
      else {variant = "{}"} */

      confirmedEvents.push(action.id);
      confirmedEvents.push(action.id + "+" + variant);
      let phaseObject = {
        "comment": "",
        "numericalID": indexCounter,
        "status": "",
        "intvStatus": [],
        //will be an array what patient status checks were and weren't done
        "required": true,
        "when": "",
        "suggestedPhase": "",
        "expertPhase": "",
        "probLabel": "",
        "minimalWhy": "",
        "assessmentsNeeded": "",
        "protocol": "",
        "protocolRelationship": "",
        "actionDescription": "",
        "type": "intervention",
        "timestamp": -1
      }; //copy over the step fields that exist (type dependent)

      const ACTION_FIELDS = ["id", "phase", "why", "protocolRelationship"];
      ACTION_FIELDS.forEach(fldName => {
        if (!!action[fldName]) {
          phaseObject[fldName] = action[fldName];
        }
      });

      if (phaseObject["protocolRelationship"] === "alternative") {
        phaseObject["protocolRelationship"] = "required";
      }

      const SOLUTION_FIELDS = ["minimalWhy", "protocols", "strictActionOrdering"];
      SOLUTION_FIELDS.forEach(fldName => {
        if (!!sol[fldName]) {
          phaseObject[fldName] = sol[fldName];
        }
      }); //copy over the step fields that exist (type dependent)

      const PROBLEM_FIELDS = ["probLabel"];
      PROBLEM_FIELDS.forEach(fldName => {
        if (!!prob[fldName]) {
          phaseObject[fldName] = prob[fldName];
        }
      }); //initialize some fields above that come from problem and action if they are defined

      if (!!prob.assessments) {
        phaseObject.assessmentsNeeded = prob.assessments;
      }

      if (!!prob.protocols) {
        phaseObject.protocol = prob.protocols;
      }

      if (!!action["id-label"]) {
        phaseObject.label = action["id-label"];
      }

      if (!!action["id-label"]) {
        phaseObject.actionDescription = action["id-label"];
      }

      let phaseVal;

      if (!!action.subPhase) {
        phaseVal = action.subPhase;
      }

      if (!!action.phase && !phaseVal) {
        phaseVal = action.phase;
      }

      if (phaseVal) {
        phaseObject.when = phaseVal;
        phaseObject.expertPhase = phaseVal;
        phaseObject.suggestedPhase = phaseVal;
      }

      phaseObject.status = "missing" + capitalizeFirstLetter(phaseObject.protocolRelationship); //assume actions are in the suggested order to solve a problem

      if (!["optional", "unnecessary", "irrelevant", "redundant"].includes(phaseObject.protocolRelationship)) {
        let orderingIndex = sol.ordering.findIndex(x => x.interventionID === phaseObject.id);
        (0,_actionInsertion__WEBPACK_IMPORTED_MODULE_3__.insertInPhaseRelativeToSuggestedOrder)(phaseNames, phases, phaseObject, sol.ordering, orderingIndex, confirmedEvents, checklistHierarchy, requiredPhaseNames, requiredSubphases, phaseRequiredAtEnd);
        indexCounter++;
      }
    });
  });
  return [indexCounter, phaseNames, phases];
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
} //the main function for analyzing the observation log


function analyzeEvents(scen, log) {
  let events = log.events; // sts 1/23/22 moved the setting of the following into initGlobals()
  // setScenario(scenario)
  // setupSubphasePhaseLookup()
  // findSubphases();

  initGlobals(scen); //preprocess some of data from problems/solutions
  //and for now just flatten it some to set it up to
  //look more like the original problem actions in scenario
  // assumes there is just one solution per problem for now.

  let problemDefs = scenario.problems;
  let problemActions = scenario.actions;
  let problemSolutions = scenario.solutions;
  let problems = setupProblems(problemDefs, problemSolutions, problemActions);
  let expectedScenInterventions = collectScenInterventions(problems); //In the remainder, just dealing with the first solution for each problem
  //so if we ever have more than one solution for a problem this code needs to
  //be updated.  Would need to consider the additional solutions to decide which
  //solution is the best fit for the observer student

  let formattedActions = [];
  let annotatedResults = annotateInputEvents(events, problems); //phaseNames and phases are two arrays synchronized be array indices
  //phases contains just the steps under the phase (thus could be a phase or subphase in observer interface)
  //phaseNames contains the label for each phase in phases.  Makes it a bit easier to search phaseNames to get the
  //indice for last instance of a phase label and access its objects

  let phases = annotatedResults[0];
  let phaseNames = annotatedResults[1];
  let confirmedEvents = annotatedResults[2];
  let intvsTracking = annotatedResults[3];
  /* //now create some similar structures for the parents of the above phases
  //so have all the associated event objects in parents and parentNames
  //for easy lookup
  let parentResults = collectParentPh(phaseNames)
  let parents = parentResults[0]  //events under this parent
  let parentNames = parentResults[1] */
  //update relative to constraints and comprises definitions
  //for now it just compares two constraint args of the same type
  //for what currently exists

  (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.filterConstraintsBySolutions)(expectedScenInterventions);
  let kbUpdates = (0,_constraintHandling__WEBPACK_IMPORTED_MODULE_2__.checkAgainstKB)(phases, phaseNames, requiredPhaseNames, requiredSubphases, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB);
  phases = kbUpdates[0];
  phaseNames = kbUpdates[1]; //add missing phase names to phaseNames
  //as do insertions should consider the temporal ordering constraints

  let updatedPhases = insertMissingSubphases(phases, phaseNames);
  phases = updatedPhases[0];
  phaseNames = updatedPhases[1]; // check for missing checklist steps
  //as do insertions should consider the temporal ordering constraints

  let postAssessmentReview = checkForMissingAssessments(problems, events, confirmedEvents, phaseNames, phases);
  confirmedEvents = postAssessmentReview[0];
  phaseNames = postAssessmentReview[1];
  phases = postAssessmentReview[2];
  let indexCounter = postAssessmentReview[3]; // this section could be moved into a separate function so that
  // the parts of the main analysis are clearer
  // start insert missing interventions

  let postInterventionReview = insertMissingInterventions(problems, confirmedEvents, indexCounter, phaseNames, phases);
  indexCounter = postInterventionReview[0];
  phaseNames = postInterventionReview[1];
  phases = postInterventionReview[2]; // search for missing interventions for each action
  // Doing this separately from the earlier actions loop because
  // we wanted to add in missing assessment steps first
  // since interventions depend on appropriate assessments having
  // been done
  // end insert missing interventions
  // put together the phases into a single array ordered as directed by phases

  formattedActions = (0,_organizeCond1Display__WEBPACK_IMPORTED_MODULE_5__.organizeLogDisplay)(phaseNames, phases, requiredPhaseNames, problemStates, cautionStates, checklistHierarchy, subPhases, phaseFB, itemByID, itemByLabel); // Now that it is all rejoined into a single list, do some updating with additional
  // analysis results

  formattedActions = insertMissingIntvChecks(formattedActions, intvsTracking);
  let priorProb = "N/A";
  let finalActions = []; //insert intervention headers in condition 1 log if the switch is set to do so

  formattedActions.forEach((eventObj, j) => {
    let intvHeaderIndex = 1;

    if (insertInterventionHeader && eventObj.type === "intervention" && eventObj.probLabel && !(priorProb === eventObj.probLabel)) {
      priorProb = eventObj.probLabel;
      let headerObject = {
        "id": "interventionHeader",
        "status": "good",
        "phaseOrderStatus": "good",
        "labelID": eventObj.probLabel,
        "type": "header",
        "numericalID": intvHeaderIndex++ / 3000,
        "displayColor": "green",
        //    "why": "",
        "probLabel": eventObj.probLabel,
        "protocol": ""
      };
      finalActions.push(headerObject);
    }

    finalActions.push(eventObj);
  }); // start overall analysis to determine if all actions to solve a problem are present

  (0,_handleMinimal__WEBPACK_IMPORTED_MODULE_4__.checkForMinimalCases)(finalActions, formattedActions, problems); // end of overall analysis
  // Here only for development purposes

  console.log("Constraint Violation Results", constraintsViolated); // verify that scenario specified vitals have been checked twice

  let vitalsCounts = (0,_vitalsChecking__WEBPACK_IMPORTED_MODULE_6__.doVitalsCounts)(finalActions, scen.name);
  (0,_vitalsChecking__WEBPACK_IMPORTED_MODULE_6__.doVitalsFeedback)(finalActions, vitalsCounts, scen.name);
  console.log("vitalsCounts: ", vitalsCounts); //remove analysis fields not needed by others before returning them

  let trimmedActions = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.trimActions)(finalActions, analysisFields);
  const retVal = {
    "events": trimmedActions,
    // "FBfields": c2FB,
    "constraintsViolated": constraintsViolated,
    "requiredPhaseNames": requiredPhaseNames,
    "promptIDs": promptIDs // "feedbackTemplates": assessmentEntries,

  }; //Here for development purposes only since this call is made inside of condition 2
  // console.log("Condition2 input produced by analysis", summarizeAnalysis (retVal, constraintsViolated))

  return retVal;
}

 //, requiredPhaseNames}

/***/ }),

/***/ 2296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAgainstKB": () => (/* binding */ checkAgainstKB)
/* harmony export */ });
/* harmony import */ var _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5064);
/* harmony import */ var _actionInsertion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6006);

 //start support functions for constraint checking

const findNameNumID = (names, entries, item, occurrence) => {
  let result = undefined;
  let index = undefined;

  for (let i = 0; i < names.length; i++) {
    if (item.id === names[i]) {
      result = entries[i];

      if (occurrence === "start") {
        break;
      }
    }
  }

  if (!!result) {
    if (result.numericalID === -1) {
      if (occurrence === "start") {
        index = result.numericalIDStart;
      } else {
        index = result.numericalIDEnd;
      }
    } else {
      index = result.numericalID;
    }
  }

  return index;
};

const findObjByNumerialID = (numericalID, phases, phaseNames, checklistHierarchy) => {
  for (let phaseIndex = 0; phaseIndex < phaseNames.length; phaseIndex++) {
    let phaseObjects = phases[phaseIndex];
    let phaseName = phaseNames[phaseIndex];

    if (phaseObjects.length > 0 && !(0,_actionInsertion__WEBPACK_IMPORTED_MODULE_1__.hasSubPhases)(phaseName, checklistHierarchy)) {
      for (let entry of phaseObjects) {
        if (entry.numericalID === numericalID) {
          return [entry, phaseName];
        }
      }
    }
  }
};

const storeMisOrderedArgs = (numericalID, arg2, phases, phaseNames, checklistHierarchy) => {
  let result = findObjByNumerialID(numericalID, phases, phaseNames, checklistHierarchy);
  let objToModify = result[0];

  if (!objToModify) {
    console.log("no object found for numericalID = ", numericalID);
  } //just for debugging
  else {
    if (!objToModify.arg2) {
      objToModify.arg2 = [arg2.id];
    } else {
      objToModify.arg2 = objToModify.arg2.concat([arg2.id]);
    }
  }
};

const storeMisOrderedFB = (numericalID, lateArg, FB, constraintType, phases, phaseNames, checklistHierarchy, phaseFB) => {
  let result = findObjByNumerialID(numericalID, phases, phaseNames, checklistHierarchy);
  let objToModify = result[0];

  if (constraintType === "item") {
    if (!objToModify) {
      console.log("no object found for numericalID = ", numericalID);
    } //just for debugging
    else {
      if (objToModify.orderingFB !== "") {
        objToModify.orderingFB = objToModify.orderingFB + ".\xa0\xa0" + FB;
      } else {
        objToModify.orderingFB = FB;
      }

      let status;
      let appendString = "misOrdered-";

      if (!objToModify.status.includes(appendString)) {
        status = appendString + objToModify.status;
        objToModify.status = status;
      }
    }
  } else {
    if (!!phaseFB[lateArg]) {
      phaseFB[lateArg] = phaseFB[lateArg] + ".  " + FB;
    } else {
      phaseFB[lateArg] = FB;
    }
  }
}; //flattens out the phases and phaseNames data structures so that all phase and subphase
//names have their own entry and each item under a phase or subphase has its own entry.
//Collect and return unique names because phase and subphase names can appear multiple times in the
//phases and phaseNames ds.  Having a unique list of names means that a constraint will only be checked once.


const collectEntriesToCheckConstraints = (phases, phaseNames, requiredPhaseNames, requiredSubphases, checklistHierarchy) => {
  let listOfNames = [];
  let listOfEntries = [];
  let uniqueListOfNames = [];
  let counter = -1;

  for (let phaseIndex = 0; phaseIndex < phaseNames.length; phaseIndex++) {
    let phaseObjects = phases[phaseIndex];
    let phaseName = phaseNames[phaseIndex];
    let startIndex = phaseObjects[0].numericalID;
    let endIndex = phaseObjects[phaseObjects.length - 1].numericalID; //handle phases and subphases first

    if (requiredPhaseNames.includes(phaseName) || requiredSubphases.includes(phaseName)) {
      listOfEntries.push({
        id: phaseName,
        numericalID: counter,
        numericalIDStart: startIndex,
        numericalIDEnd: endIndex
      });
      listOfNames.push(phaseName);

      if (!uniqueListOfNames.includes(phaseName)) {
        uniqueListOfNames.push(phaseName);
      }
    } //can't be an else to above because a phase can have entries but a subphase cannot


    if (phaseObjects.length > 0 && !(0,_actionInsertion__WEBPACK_IMPORTED_MODULE_1__.hasSubPhases)(phaseName, checklistHierarchy)) {
      let phaseObjectNames = phaseObjects.map(obj => obj.id);
      phaseObjectNames.forEach(entry => {
        (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.pushNew)(entry, uniqueListOfNames);
      });
      listOfEntries = listOfEntries.concat(phaseObjects); //uniqueListOfNames = uniqueListOfNames.concat(phaseObjectNames)

      listOfNames = listOfNames.concat(phaseObjectNames);
    }
  }

  return [listOfNames, uniqueListOfNames, listOfEntries];
};

const saveFailedConstraint = (lateArg, otherArg, constraintID, constraintsViolated) => {
  let type;

  if (["phase", "sub-phase"].includes(lateArg.type)) {
    type = "phase";
  } else {
    type = "item";
  }

  constraintsViolated.push({
    constraintID: constraintID,
    arg1: lateArg,
    op: "before",
    arg2: otherArg,
    type: type
  });
  return type;
};

const addToListOfFeedback = (parPhFB, last, label, repeating) => {
  //feedback for nonphase
  if (repeating) {
    if (last) {
      parPhFB = parPhFB + " and ";
    } else {
      parPhFB = parPhFB + ", ";
    }
  }

  parPhFB = parPhFB + label.toLowerCase();
  return parPhFB;
};

const checkAgainst2ndArgs = (arg1st, args2nd, op, direction, constraintID, entryNames, entries, phases, phaseNames, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB) => {
  let endNum1st = findNameNumID(entryNames, entries, arg1st, "end");
  let startNum1st = findNameNumID(entryNames, entries, arg1st, "start");
  let label1st = arg1st.label;
  let phFB = "";
  let par1PhFB = "";
  let par2PhFB = "";
  let repeating;
  let constraintType;

  if (args2nd.length > 0) {
    let counter = 0;
    let violations = 0;

    for (let arg of args2nd) {
      let last = false;
      let arg2nd = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getItem)(arg, itemByID, itemByLabel);

      if (!!arg2nd) {
        counter++;

        if (counter === args2nd.length) {
          last = true;
        }

        let label2nd = arg2nd["label"];
        let startNum2nd = findNameNumID(entryNames, entries, arg2nd, "start");
        let endNum2nd = findNameNumID(entryNames, entries, arg2nd, "end");

        switch (direction) {
          case "before":
            if (!!endNum1st && !!startNum2nd) {
              if (!(endNum1st < startNum2nd)) {
                //if failed constraint i.e. arg1 is late
                //result = collectFB (constraintID, counter, arg1st, arg2nd, startNum1st, startNum2nd, endNum1st, endNum2nd, label1st, label2nd, last, constraintType, phases, phaseNames)
                //feedback for item
                violations++;

                if (par1PhFB === "") {
                  if (startNum1st === endNum1st) {
                    par1PhFB = "You should have ";
                    par1PhFB = addToListOfFeedback(par1PhFB, last, label1st, false);
                  } //feedback for phase
                  else {
                    par1PhFB = "You should have completed the ";
                    par1PhFB = addToListOfFeedback(par1PhFB, last, label1st, false);
                  }
                }

                if (startNum2nd === endNum2nd) {
                  if (par2PhFB === "") {
                    par2PhFB = par2PhFB + " before you did ";
                  } //feedback for item


                  if (violations > 1) {
                    repeating = true;
                  } else {
                    repeating = false;
                  }

                  par2PhFB = addToListOfFeedback(par2PhFB, last, label2nd, repeating);
                } else {
                  if (par2PhFB === "") {
                    par2PhFB = par2PhFB + " before starting the ";
                  } //feedback for phase


                  if (violations > 1) {
                    repeating = true;
                  } else {
                    repeating = false;
                  }

                  par2PhFB = addToListOfFeedback(par2PhFB, last, label2nd, repeating);
                }

                storeMisOrderedArgs(startNum1st, arg2nd, phases, phaseNames, checklistHierarchy);
                constraintType = saveFailedConstraint(arg1st, arg2nd, constraintID, constraintsViolated);
              } else {
                if (op === "or") {
                  return;
                }
              }
            }

            break;

          case "after":
            //for after just reverse 1st and 2nd args
            if (!!startNum1st && !!endNum2nd) {
              if (!(startNum1st > endNum2nd)) {
                //if failed constraint  i.e. arg2 is late
                violations++;

                if (startNum1st === endNum1st) {
                  //feedback for item
                  if (par1PhFB === "") {
                    par1PhFB = "You should have ";
                  }

                  if (violations > 1) {
                    repeating = true;
                  } else {
                    repeating = false;
                  }

                  par1PhFB = addToListOfFeedback(par1PhFB, last, label2nd, repeating);
                } //feedback for phase
                else {
                  if (par1PhFB === "") {
                    par1PhFB = "You should have completed ";
                  }

                  if (violations > 1) {
                    repeating = true;
                  } else {
                    repeating = false;
                  }

                  par1PhFB = addToListOfFeedback(par1PhFB, last, label2nd, repeating);
                }

                if (par2PhFB === "") {
                  if (startNum2nd === endNum2nd) {
                    par2PhFB = par2PhFB + " before you did ";
                    par2PhFB = addToListOfFeedback(par2PhFB, last, label1st, false);
                  } else {
                    par2PhFB = par2PhFB + " before starting "; //feedback for nonphase

                    par2PhFB = addToListOfFeedback(par2PhFB, last, label1st, false);
                  }
                }

                storeMisOrderedArgs(startNum2nd, arg1st, phases, phaseNames, checklistHierarchy); //feedback for phase

                constraintType = saveFailedConstraint(arg2nd, arg1st, constraintID);
              } else {
                if (op === "or") {
                  return;
                }
              }
            }

            break;

          default:
            break;
        }
      }
    }

    phFB = par1PhFB + par2PhFB;

    if (phFB !== "") {
      phFB = phFB + ".";
      storeMisOrderedFB(startNum1st, label1st, phFB, constraintType, phases, phaseNames, checklistHierarchy, phaseFB);
    }
  }
};

const checkConstraintsForArg = (arg1st, constraint, phases, phaseNames, entryNames, entries, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB) => {
  let args2nd = constraint.before;
  let op = constraint.beforeOp;
  checkAgainst2ndArgs(arg1st, args2nd, op, "before", constraint.id, entryNames, entries, phases, phaseNames, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB);
  args2nd = constraint.after;
  op = constraint.afterOp;
  checkAgainst2ndArgs(arg1st, args2nd, op, "after", constraint.id, entryNames, entries, phases, phaseNames, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB);
}; //end support functions for constraint checking
//To DO: filter constraints in/out based on findings available for this scenario
//main function for constraint checking


const checkAgainstKB = (phases, phaseNames, requiredPhaseNames, requiredSubphases, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB) => {
  let result = collectEntriesToCheckConstraints(phases, phaseNames, requiredPhaseNames, requiredSubphases, checklistHierarchy);
  let entryNames = result[0];
  let uniqueEntryNames = result[1];
  let entries = result[2];
  uniqueEntryNames.forEach(firstArg => {
    let firstArgItem = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getItem)(firstArg, itemByID, itemByLabel);

    if (!!firstArgItem) {
      processFirstArg(firstArgItem, phases, phaseNames, entryNames, entries, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB);
    }
  }); //only expect to change objects in phases

  return [phases, phaseNames];
};

const processFirstArg = (firstArgItem, phases, phaseNames, entryNames, entries, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB) => {
  let constraint = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getConstraint)(firstArgItem); //will find only one constraint per 1st arg

  if (!!constraint) {
    checkConstraintsForArg(firstArgItem, constraint, phases, phaseNames, entryNames, entries, checklistHierarchy, itemByID, itemByLabel, constraintsViolated, phaseFB);
  }
};

/***/ }),

/***/ 5064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyFBTemplate": () => (/* binding */ applyFBTemplate),
/* harmony export */   "filterConstraintsBySolutions": () => (/* binding */ filterConstraintsBySolutions),
/* harmony export */   "getAssessmentIcon": () => (/* binding */ getAssessmentIcon),
/* harmony export */   "getColor": () => (/* binding */ getColor),
/* harmony export */   "getConstraint": () => (/* binding */ getConstraint),
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "getEventsByIdTime": () => (/* binding */ getEventsByIdTime),
/* harmony export */   "getFeedback": () => (/* binding */ getFeedback),
/* harmony export */   "getItem": () => (/* binding */ getItem),
/* harmony export */   "getPhaseFeedback": () => (/* binding */ getPhaseFeedback),
/* harmony export */   "getPhaseStatus": () => (/* binding */ getPhaseStatus),
/* harmony export */   "getStatesForStatus": () => (/* binding */ getStatesForStatus),
/* harmony export */   "getTimestamp": () => (/* binding */ getTimestamp),
/* harmony export */   "initializeConstraints": () => (/* binding */ initializeConstraints),
/* harmony export */   "pushNew": () => (/* binding */ pushNew),
/* harmony export */   "saveAnalysisLog": () => (/* binding */ saveAnalysisLog),
/* harmony export */   "saveCommentLog": () => (/* binding */ saveCommentLog),
/* harmony export */   "saveLog": () => (/* binding */ saveLog),
/* harmony export */   "trimAction": () => (/* binding */ trimAction),
/* harmony export */   "trimActions": () => (/* binding */ trimActions)
/* harmony export */ });
/* harmony import */ var _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9205);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6957);
 //import {  requiredPhaseNames } from "./analyzeEvents";
// constraintsViolated,
// import { c2FB } from "./summarizeAnalysis";



const _ = __webpack_require__(6635);

const C2_FIELDS = ["feedbackAbsent", "feedbackOutOfOrder", "feedbackErrors"];
const scenarios = {
  M2CA: _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.M2CA_PhaseIE,
  SC8CP: _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.SC8CP_PhaseIE,
  B5CA: _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.B5CA_PhaseIE,
  B4CA: _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.B4CA_PhaseIE,
  C5CA: _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.C5CA_PhaseIE
};
const pushNew = (elt, array) => {
  if (!array.includes(elt)) {
    array.push(elt);
  }
}; // Not yet tested.  May not need these two

/* export const intersection = (array1, array2) => {
    return array1.filter(value => array2.includes(value))
}

export const difference = (array1, array2) => {
    return array1.filter(value => !array2.includes(value))
}
 */

function trimActions(actions, fields) {
  let newActions = [];
  actions.forEach(act => {
    newActions.push(trimAction(act, fields));
  });
  return newActions;
}
function trimAction(event, fields) {
  let newEvent = {}; //regularize some field names across headers and checklist events

  if (!!event.labelID) {
    newEvent.id = event.labelID;
  } else {
    newEvent.id = event.id;
  } //now copy over these fields


  fields.forEach(fld => {
    if (!!event[fld]) {
      newEvent[fld] = event[fld];
    }
  });
  return newEvent;
}
const getPhaseStatus = statuses => {
  //for collecting first unique item statuses and then
  //unique phase statuses
  let itemStatuses = [];
  let phaseStatuses = [];

  if (statuses.length === 0) {
    return "absent";
  } //get a unique list of item status values


  statuses.forEach(status => {
    pushNew(status, itemStatuses);
    /* if (!itemStatuses.includes(status)){
            itemStatuses.push(status)
        } */
  }); //turn the item status values into phase level status values

  let res;

  for (const [key, val] of Object.entries(_meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.phaseStatusList)) {
    res = val.filter(value => itemStatuses.includes(value)); //if there is an intersection, save the key (i.e. is unique)

    if (res.length !== 0) pushNew(key, phaseStatuses);
    /* if (!phaseStatuses.includes(key)){
                phaseStatuses.push(key)} */
  }

  if (phaseStatuses.length === 1) {
    return phaseStatuses[0];
  } // to be absent or good, all entries must be good or absent
  else {
    return "errors";
  } //otherwise they are not all good to that translates to errors

}; // functions that extract info from above or create the feedback from the above
//returns a list of all the state values associated with the input status (e.g. status is one of "Problem", "Good", "Caution")

const getStatesForStatus = (status, fbTemplates) => {
  let stateList = [];

  for (const [state, entry] of Object.entries(fbTemplates)) {
    let stateStatus = entry[0];

    if (stateStatus === status) {
      stateList.push(state);
    }
  }

  return stateList;
}; //returns the entry under that state

const getAssessmentEntry = (currentEntry, aIndex, fbTemplates) => {
  let assessmentEntry = "";

  if (currentEntry.type === "header") {
    assessmentEntry = fbTemplates[currentEntry.displayColor];

    if (!assessmentEntry) {
      assessmentEntry = fbTemplates[currentEntry.status];
    }
  } else {
    if (!fbTemplates[currentEntry.status]) {
      assessmentEntry = fbTemplates["default"];
    } else {
      assessmentEntry = fbTemplates[currentEntry.status];
    }
  }

  if (assessmentEntry) {
    return assessmentEntry[aIndex];
  }
}; //returns the html icon to use in condition 1 for the state


const getAssessmentIcon = (currentEntry, fbTemplates) => {
  let val = _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.iconTypes[getAssessmentEntry(currentEntry, 0, fbTemplates)];
  return val;
}; //returns the html color to use in condition 1 for the state

const getColor = (currentEntry, fbTemplates) => {
  let color = _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.colorTypes[getAssessmentEntry(currentEntry, 0, fbTemplates)];
  return color;
}; //add protected spaces after a . except for the very last .
//Otherwise html reduces continguous regular spaces to a single space.
//Need this for text strings that will appear in one array entry because
//of substitution

const fixStrSp = textString => {
  if (!!textString) {
    let textArray = textString.split(" ");
    let lenTextArray = textArray.length;
    textArray.forEach((item, i) => {
      let newItem = item.trim();

      if (newItem[item.length - 1] === "." && i < lenTextArray - 1) {
        //add protected space to the string
        newItem = newItem + "\xa0\xa0";
      }

      textArray[i] = newItem;
    });
    let newString;

    for (let item of textArray) {
      if (!!newString) {
        newString = newString + " " + item;
      } else {
        newString = item;
      }
    }

    return newString;
  } else {
    return "";
  }
};

const generateIntvStatusFB = currentEntry => {
  let checked = [];
  let notChecked = [];
  let fb;

  for (let entry of currentEntry.intvStatus) {
    if (entry.foundCk) {
      checked.push(entry.label);
    } else {
      notChecked.push(entry.label);
    }
  }

  if (notChecked.length > 0) {
    fb = "Remember to check the effect of this action by asking for: " + notChecked + ".";

    if (checked.length > 0) {
      fb = fb + " That is in addition to what you did ask for: " + checked + ".";
    }
  }

  return fb;
};

let fbSource = "json"; //values are "db" or "json"

function getFBField(currentEntry, field, c2FB) {
  let result;
  let fb = c2FB[currentEntry.id];
  let status = currentEntry.status;

  switch (fbSource) {
    case "json":
      //removed case value "db" in code below
      switch (field) {
        case "assessmentFB":
          //get from c2 ds field feedbackAbsent
          if (fb && fb.feedbackAbsent && fb.feedbackAbsent[0] !== "") {
            result = fb.feedbackAbsent;
          }

          break;

        case "why":
          if (fb && status.includes("contraindicated", "unnecessary", "irrelevant") && fb.feedbackErrors && fb.feedbackErrors[0] !== "") {
            result = fb.feedbackErrors;
          }

          if (fb && !status.includes("contraindicated", "unnecessary", "irrelevant") && fb.feedbackAbsent && fb.feedbackAbsent[0] !== "") {
            result = fb.feedbackAbsent;
          }

          break;

        case "incorrectAnswersFB":
          //get from c2 ds field feedbackErrors
          if (fb && fb.feedbackErrors && fb.feedbackErrors[0] !== "") {
            result = fb.feedbackErrors;
          }

          break;

        case "orderingFB":
          if (fb && fb.feedbackOutOfOrder && fb.feedbackOutOfOrder[0] !== "") {
            result = fb.feedbackOutOfOrder;
          }

          break;

        default:
      }

      break;

    default:
  }

  let combinedResult = "";

  if (!!result && Array.isArray(result)) {
    result.forEach(para => {
      combinedResult = combinedResult + "\xa0\xa0" + para;
    });
  } //to deal with old analysis/feedback file from before c2FB feedback fields became an array of strings instead of a string
  else {
    if (!!result) {
      combinedResult = result;
    }
  }

  if (!combinedResult && !!currentEntry[field]) {
    combinedResult = fixStrSp(currentEntry[field]);
  }

  return combinedResult;
}

const getPhaseFeedback = (entry, phaseFBGiven, c2FB) => {
  let result = "";
  let fb;

  if (!!entry.phFeedback) {
    if (!phaseFBGiven[entry.labelID]) {
      phaseFBGiven[entry.labelID] = true;
      fb = c2FB[entry.labelID];

      if (fb && fb.feedbackOutOfOrder) {
        result = fb.feedbackOutOfOrder;
      }
    } else {
      result = entry.phFeedback;
    }
  }

  if (entry.label === _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.vitalsCheckFeedbackLabel) {
    result = result + entry.vitalsFB;
  }

  entry.phFeedback = result;
  return [result, phaseFBGiven];
};
const applyFBTemplate = (rep, c2FB, template) => {
  let fb; //Find any @ actions in the template and substitute with the indicated entry field

  let feedbackArray = template.split(" "); //Process all @ substitutions first since +eos does one forward action

  feedbackArray.forEach((item, i) => {
    let firstChar = item.charAt(0);
    let newString = item.substring(1); //trim off excess blanks before and after each word

    feedbackArray[i] = feedbackArray[i].trim();

    switch (firstChar) {
      case "@":
        fb = getFBField(rep, newString, c2FB);

        if (!!fb) {
          feedbackArray[i] = fb;
        } else {
          feedbackArray[i] = "[missing: " + newString + "]";
        }

        break;

      case "?":
        fb = getFBField(rep, newString, c2FB);

        if (!!fb) {
          //replace eos spacing with protected spaces in the substitution string
          feedbackArray[i] = fb;
        } else {
          feedbackArray[i] = "";

          if (feedbackArray[i - 1] === "+bos") {
            feedbackArray[i - 1] = "";

            if (feedbackArray[i - 2][feedbackArray[i - 2].length - 1] !== ".") {
              feedbackArray[i - 2] = feedbackArray[i - 2] + ".\xa0";
            }
          }

          if (feedbackArray[i + 1] === "+eos") {
            feedbackArray[i + 1] = "";
          }
        }

        break;

      default:
    }
  }); //Now address the + actions in the template

  feedbackArray.forEach((item, i) => {
    let firstChar = item.charAt(0);
    let previousString = "";

    switch (firstChar) {
      case "+":
        let afterPlusChar = item.substring(1);

        switch (afterPlusChar) {
          case "eos":
            //removes existing/redundant "." if present so can be certain putting in single "."
            previousString = feedbackArray[i - 1].trim();

            if (previousString[previousString.length - 1] === ".") {
              previousString = previousString.slice(0, -1);
            } //now add end of sentence and a protected space.  When stiched back into
            //a single string a protected space will be added between each substring


            feedbackArray[i - 1] = previousString + ".\xa0";
            feedbackArray[i] = ""; //get rid of the command since was applied

            break;

          case "bos":
            //removes existing/redundant "." if present so can put in single "."
            previousString = feedbackArray[i - 1].trim();

            if (previousString[previousString.length - 1] === ".") {
              previousString = previousString.slice(0, -1);
            } //now add end of sentence .


            feedbackArray[i - 1] = previousString + ".\xa0";
            feedbackArray[i] = ""; //get rid of the command since was applied
            //Captitalize the beginning of the sentence

            let nextString = feedbackArray[i + 1].trim();
            feedbackArray[i + 1] = nextString.charAt(0).toUpperCase() + nextString.slice(1);
            break;

          default:
        }

        break;

      default:
    }
  }); //stitch back into a single string

  let feedbackString = "";

  for (let item of feedbackArray) {
    if (!!feedbackString) {
      if (item !== "") {
        feedbackString = feedbackString + "\xa0" + item;
      }
    } else {
      if (item !== "") {
        feedbackString = item;
      }
    }
  }

  return feedbackString;
};
const getFeedback = (currentEntry, c2FB, fbTemplates) => {
  let vitalsCheckFB = "";

  if (currentEntry.id === _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.vitalsCheckFeedbackID) {
    vitalsCheckFB = currentEntry.vitalsFB;
  }

  if (currentEntry.type !== "header") {
    if (!!currentEntry.intvStatus && currentEntry.intvStatus.length > 0) {
      //add our generated feedback string to the currentEntry
      currentEntry.intvStatusFB = generateIntvStatusFB(currentEntry);
    }

    let feedbackTemplate = fixStrSp(getAssessmentEntry(currentEntry, 1, fbTemplates)).trim();
    let feedbackString = applyFBTemplate(currentEntry, c2FB, feedbackTemplate); //console.log(feedbackString)

    if (vitalsCheckFB !== "") {
      feedbackString = vitalsCheckFB + feedbackString;
    }

    return feedbackString;
  } else {
    return vitalsCheckFB;
  }
};
const filterConstraintsBySolutions = expectedScenInterventions => {
  scenarioConstraints = Object.assign(initialConstraints);

  for (const [key, val] of Object.entries(scenarioConstraints)) {
    if (val.type === "leafI" && !expectedScenInterventions.includes(key)) {
      delete scenarioConstraints[key];
    }
  }
}; //built by the function initializeConstraints

var initialConstraints = {};
var scenarioConstraints = {}; // adds on scenario specific constraints where the constraint is only applicable if certain patient
// conditions hold.  Since assessment callouts are text and have no associated representation, we
// can yet implement true conditional constraints.

const initializeConstraints = scenarioName => {
  // look up applicable conditional constraints from const structure scenarioConstraintIDs
  let constraintIDs = _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.scenarioConstraintIDs[scenarioName];
  initialConstraints = _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.globalConstraints;

  if (!!constraintIDs && constraintIDs.length !== 0) {
    for (const [key, val] of Object.entries(_meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.conditionalConstraints)) {
      if (constraintIDs.includes(val.id)) {
        initialConstraints[key] = val;
      }
    }
  }
}; //gets one constraint since each id/label would be a key
//in the constraints definitions

const getConstraint = item => {
  let id = item.id;
  let label = item.label;
  let constraints = scenarioConstraints[id];

  if (!constraints) {
    constraints = scenarioConstraints[label];
  }

  return constraints;
}; // This section is for looking up items in the analysis log

const getEvents = (events, field, val) => {
  return events.filter(entry => entry[field] === val);
};
const getEventsByIdTime = (events, id, timestamp) => {
  return getEvents(getEvents(events, "timestamp", timestamp), "id", id);
}; // This ends the section for looking up items in the analysis log

function storeLeafActions(actions, c2FB, requiredPhaseNames) {
  let result;
  actions.forEach(action => {
    result = requiredPhaseNames.includes(action.id);

    if (action.subActions.length === 0 || result) {
      let newAction = {};
      C2_FIELDS.forEach(fldName => {
        if (!!action[fldName]) {
          newAction[fldName] = action[fldName];
        }
      });
      c2FB[action.id] = newAction;

      if (result) {
        storeLeafActions(action.subActions, c2FB, requiredPhaseNames);
      }
    } else {
      storeLeafActions(action.subActions, c2FB, requiredPhaseNames);
    }
  });
} //changes with each scenario what data structure should be parsed


function buildC2FB(scenName, requiredPhaseNames) {
  let c2FB = {}; // FIX ME: possible fix to call getScenarioFeedback(scenName) in feedback-data/mergeDataFiles.js
  // but wait until Scott has finished first implementation of condition 2

  let phaseIE = scenarios[scenName];

  if (!!phaseIE) {
    let top = phaseIE.Action;
    storeLeafActions(top.subActions, c2FB, requiredPhaseNames);
  }

  return c2FB;
} //This starts section for saving/loading the debriefing log

/* export const saveAnalysisLog = (db, log, actions, constraintsViolated) => {
  saveLog(db, "debriefing-feedback-logs", log, actions, constraintsViolated, label, "");
}; */


const saveAnalysisLog = async (db, obsLog, analysisData, userName) => {
  const {
    events: actions,
    constraintsViolated,
    requiredPhaseNames,
    promptIDs
  } = analysisData;
  let metaData = {
    "label": obsLog.label,
    "analyzer": userName,
    "observerLogID": obsLog.id,
    "FBfields": buildC2FB(obsLog.scenarioName, requiredPhaseNames),
    "constraintsViolated": constraintsViolated,
    "requiredPhaseNames": requiredPhaseNames,
    "feedbackTemplates": _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_0__.fbTemplatesDef,
    "promptIDs": promptIDs,
    "timestamp": Date()
  };
  let data = metaData; //data["comments"] = Array(actions.length).fill("")  

  if (!!actions) {
    let newActionsList = [];
    let newObj = {};
    let filterUnknown = false; //reporting included for debugging puposes only

    actions.forEach(function (logObj, index) {
      for (let [key, val] of Object.entries(logObj)) {
        if (undefined === val) {
          console.log("filtered out from events; index: ", index, " key: ", key, " value: ", val);
          filterUnknown = true;
        }
      }
    }); //do the filtering of unknowns

    if (filterUnknown) {
      actions.forEach(function (logObj, index) {
        newObj = _.pickBy(logObj, function (value, key) {
          return !(value === undefined);
        });
        newActionsList.push(newObj);
      });
      data["events"] = newActionsList;
    } else {
      data["events"] = actions;
    }
  } //console.log("about to save data", data)


  await saveLog(db, "analyzed-logs", undefined, data);
  window.alert(`analyzed-log/${data.label} created`); //return savedData
};
const saveCommentLog = async (db, priorLog, id, comments, userName) => {
  let data = {
    label: priorLog.label || null,
    reviewer: userName,
    analysisLogID: priorLog.id,
    comments: comments,
    timestamp: Date()
  };
  await saveLog(db, "cond1-comments", id, data);
  window.alert(`cond1-comments/${priorLog.label} saved`); // return savedData
}; // export const saveAsCommentLog = (db, priorLog, comments, userName) => {
//   let filename = window.prompt("Enter new filename", priorLog.label);
//   let data =
//       {
//         label: filename || null,
//         commenter: userName,
//         analysisLogID: analysisLogID || null,
//         comments: comments || null,
//         timestamp: Date(),
//       };
//     let savedData = saveLog(db, "cond1-comments", data);
//     window.alert(`cond1-comments/${filename} saved`); 
//     return savedData;  
// };

async function saveLog(db, collection, id, data) {
  //console.log("In saveLog")
  var docRef;

  if (!!id) {
    docRef = db.collection(collection).doc(id);
  } else {
    docRef = db.collection(collection).doc();
    data.id = docRef.id;
  }

  await docRef.set(data);
  return data;
}
; //not in use

/* export const retrieveDebriefing = (log) => {
  //console.log(log.events)
  return log.events;
} */
//This ends section for saving/loading the debriefing log

const getTimestamp = currentEntry => {
  if (!currentEntry.timestamp || currentEntry.type === "header") {
    return "";
  }

  if (currentEntry.timestamp === -1) {
    return "\xa0\xa0"; // formatAsMinSecs would convert this to 59:59
  }

  return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatAsMinSecs)(currentEntry.timestamp);
};
let unknownItem = {
  id: "Unknown",
  label: "Unknown"
};

const getItems = (val, itemByID, itemByLabel) => {
  if (val === "Unknown") {
    return unknownItem;
  }

  let items = [];
  items = itemByID[val];

  if (!items) {
    items = itemByLabel[val];
  }

  return items;
};

const getItem = (val, itemByID, itemByLabel) => {
  let items = getItems(val, itemByID, itemByLabel);

  if (items) {
    return items[0];
  }
};

/***/ }),

/***/ 2283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForMinimalCases": () => (/* binding */ checkForMinimalCases)
/* harmony export */ });
function checkForMinimalCases(actions, formattedActions, problems) {
  // now we analyze all that we've found in the log to see whether
  // all the actions were done for each problem and reset
  // the status if not all are there but should be counted
  // as minimal for the feedback.
  let pActions = []; //here we will store the actual problem actions that student did

  let pNames = []; //here we will store the problem names for the above with same order

  let pIndex = 0;
  let pActIndex = -1;
  actions.forEach((action, j) => {
    if (action.type === "intervention") {
      //good interventions can have these status values
      if (!!action.status && action.status.includes("goodIntv", "incorrect-answers", "minimal", "misOrdered-goodIntv", "misOrdered-incorrect-answers", "minimal", "misOrdered-minimal", "misOrdered-minimal-incorrect-answers", "misOrdered-phase-incorrect-answers", "misOrdered-phase-minimal-incorrect-answers", "misOrdered-phase-minimal")) {
        if (!pNames.includes(action.probLabel)) {
          pActIndex = pIndex;
          pNames[pActIndex] = action.probLabel;
          pIndex++;
        } else {
          pActIndex = pNames.indexOf(action.probLabel);
        }

        let actions = pActions[pActIndex];

        if (!actions) {
          actions = [];
        }

        actions.push(action);
        pActions[pActIndex] = actions;
      }
    }
  }); // If all the minimal were found but not all the action were, then we
  // need to re-mark the action objects created for the minimal events
  // to be minimal instead of goodIntv.  It isn't
  // appropriate to give this feedback if all actions are present.
  // Waited until now so that all the events are in one list instead of
  // a list per phase,

  let processedIds = formattedActions.map(event => event.id);
  let pIds = problems.map(a => a.probLabel);
  pNames.forEach((pEntry, j) => {
    //get the action definition for this problem
    let pIndex = pIds.indexOf(pEntry);
    let prob = problems[pIndex];
    let actionNeeded = prob.allActions.filter(obj => obj.protocolRelationship === "required").map(obj => obj.id); //collect statuses for these actions

    let minimalNeeded = prob.allActions.filter(obj => obj.protocolRelationship === "minimal").map(obj => obj.id);

    if (minimalNeeded) {
      //no point in doing anything else if no minimals were defined
      let foundActions = pActions[j];
      let found = foundActions.map(a => a.id);
      let allActionFound = true;
      let allMinimalFound = true;

      for (let item of actionNeeded) {
        if (!found.includes(item)) {
          allActionFound = false;
          break;
        }
      }

      for (let item of minimalNeeded) {
        if (!found.includes(item)) {
          allMinimalFound = false;
          break;
        }
      }

      let numericalIDsChanged = [];

      if (!allActionFound && allMinimalFound) {
        minimalNeeded.forEach((foundId, j) => {
          let pIndex = processedIds.indexOf(foundId);
          let object = formattedActions[pIndex]; //find object to modify

          object.minimalWhy = prob.minimalWhy;

          switch (object.status) {
            case "incorrect-answers":
              object.status = "minimal-incorrect-answers";
              break;

            case "goodIntv":
              object.status = "minimal";
              break;

            case "misOrdered-goodIntv":
              object.status = "misOrdered-minimal";
              break;

            case "misOrdered-incorrect-answers":
              object.status = "misOrdered-minimal-incorrect-answers";
              break;

            case "misOrdered-phase-goodIntv":
              object.status = "misOrdered-phase-minimal";
              break;

            case "misOrdered-phase-incorrect-answers":
              object.status = "misOrdered-phase-minimal-incorrect-answers";
              break;

            default:
              break;
          }

          numericalIDsChanged.push(object.numericalID);
          formattedActions[pIndex] = object;
        }); //redo color for header if needed

        let header = {};
        numericalIDsChanged.forEach((numericalID, z) => {
          header = findHeaderFor(numericalID, formattedActions);

          if (header && header.displayColor === "green") {
            header.displayColor = "yellow";
          }
        });
      }
    }

    prob.actions = []; //clear out this working field from problems definitions
  });
}

/***/ }),

/***/ 4303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "analyzeEvents": () => (/* reexport safe */ _analyzeEvents__WEBPACK_IMPORTED_MODULE_1__.analyzeEvents),
/* harmony export */   "applyFBTemplate": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.applyFBTemplate),
/* harmony export */   "doVitalsCounts": () => (/* reexport safe */ _vitalsChecking__WEBPACK_IMPORTED_MODULE_2__.doVitalsCounts),
/* harmony export */   "getAssessmentIcon": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getAssessmentIcon),
/* harmony export */   "getColor": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getColor),
/* harmony export */   "getFeedback": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getFeedback),
/* harmony export */   "getPhaseFeedback": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getPhaseFeedback),
/* harmony export */   "getTimestamp": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getTimestamp),
/* harmony export */   "saveAnalysisLog": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.saveAnalysisLog),
/* harmony export */   "saveCommentLog": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.saveCommentLog),
/* harmony export */   "saveLog": () => (/* reexport safe */ _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.saveLog),
/* harmony export */   "summarizeAnalysis": () => (/* reexport safe */ _summarizeAnalysis__WEBPACK_IMPORTED_MODULE_3__.summarizeAnalysis)
/* harmony export */ });
/* harmony import */ var _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5064);
/* harmony import */ var _analyzeEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4654);
/* harmony import */ var _vitalsChecking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5700);
/* harmony import */ var _summarizeAnalysis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5937);



 // setC2FB, ,  c2FB , setRequiredPhaseNames

/***/ }),

/***/ 3769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "organizeLogDisplay": () => (/* binding */ organizeLogDisplay)
/* harmony export */ });
/* harmony import */ var _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5064);
/* harmony import */ var _actionInsertion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6006);

 //to display the log using the phase structures accumulated
// i.e. puts the phases data together in the order in which
// should be displayed in debriefing log

const organizeLogDisplay = (phaseNames, phases, requiredPhaseNames, problemStates, cautionStates, checklistHierarchy, subPhases, phaseFB, itemByID, itemByLabel) => {
  let displayObjects = [];
  let entryIndex = 1;
  let headerIndex = 1;
  let problemHeaderColor = "green";
  let subPhaseColor = "green";
  let subPhaseStatuses = [];
  let phaseStatuses = [];
  let newPhaseObjects = [];
  let headerObj = {
    "id": "assessmentHeader",
    "status": "",
    "phaseOrderStatus": "good",
    "feedback": "",
    "type": "header",
    "numericalID": 1,
    "displayColor": "",
    "why": "",
    "label": "",
    "labelID": "",
    "protocol": ""
  };
  let subHeaderObj = {
    "id": "assessmentSubHeader",
    "status": "",
    "phaseOrderStatus": "good",
    "feedback": "",
    "type": "header",
    "numericalID": 1,
    "displayColor": "",
    "why": "",
    "label": "",
    "labelID": "",
    "phaseID": "",
    "protocol": ""
  };
  let priorHLPhaseItem = "";
  let endEntry = false;

  for (let phaseIndex = 0; phaseIndex < phaseNames.length; phaseIndex++) {
    let iPhaseObjects = phases[phaseIndex];
    let phaseName = phaseNames[phaseIndex];
    let process = true;

    if (requiredPhaseNames.includes(phaseName) && (0,_actionInsertion__WEBPACK_IMPORTED_MODULE_1__.hasSubPhases)(phaseName, checklistHierarchy)) {
      process = false;
    }

    if (iPhaseObjects.length > 0 && process) {
      //for this set of objects, find the worst scoring item
      let phaseObjects = phases[phaseIndex];
      subPhaseColor = "green";

      for (let phaseObject of phaseObjects) {
        if (phaseObject.type !== "intervention") {
          subPhaseStatuses.push(phaseObject.status);
        } //else {hierProblemResults.push(phaseObject)}


        if (problemStates.includes(phaseObject.status)) {
          subPhaseColor = "red";
        } // Red has a higher priority than yellow so will allow to override it


        if (cautionStates.includes(phaseObject.status) && subPhaseColor !== "red") {
          subPhaseColor = "yellow";
        }

        phaseObject.numericalID = entryIndex++; //entryIndex++;
      }

      ;
      let subheader = Object.assign({}, subHeaderObj);
      let localPhaseName = phaseNames[phaseIndex];
      let localPhaseItem = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getItem)(localPhaseName, itemByID, itemByLabel);
      subheader.label = localPhaseItem.label;
      subheader.labelID = localPhaseItem.id;
      subheader.status = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getPhaseStatus)(subPhaseStatuses);
      subheader.displayColor = subPhaseColor;
      let highLevelPhase = subPhases[localPhaseName];
      let highLevelPhaseItem = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getItem)(highLevelPhase, itemByID, itemByLabel);
      subheader.phaseID = highLevelPhaseItem.id; //Note that the inserted headers will have their own numerical id and
      //am dividing by 1000 for headers so their numerical id will be unique
      //to headers.  Am assuming we would never have more than 1000 events
      //observed.  Will use the numerical ids for testing before and after
      //constraints.

      if (priorHLPhaseItem === "") {
        priorHLPhaseItem = highLevelPhaseItem;
        problemHeaderColor = determineHLcolor(subPhaseColor, problemHeaderColor);
      }

      if (phaseIndex === phaseNames.length - 1) {
        //this closes out the prior phase and the new subphase
        let header = Object.assign({}, headerObj);

        if (highLevelPhase !== priorHLPhaseItem.label) {
          //ending with start of a new phase
          header.label = priorHLPhaseItem.label;
          header.labelID = priorHLPhaseItem.id;
          header.status = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getPhaseStatus)(phaseStatuses);
          header.displayColor = problemHeaderColor;
          header.numericalID = headerIndex++ / 1000;

          if (!!phaseFB[header.label]) {
            header.phaseOrderStatus = "misOrdered";
            header.phFeedback = phaseFB[header.label];
          }

          displayObjects.push(header);
          displayObjects.push(...newPhaseObjects);
          newPhaseObjects = [];
        }

        header = Object.assign({}, subheader);
        header.label = highLevelPhaseItem.label;
        header.labelID = highLevelPhaseItem.id;
        header.id = "assessmentHeader";
        header.numericalID = headerIndex++ / 1000;
        displayObjects.push(header);

        if (highLevelPhase === subheader.label) {
          displayObjects.push(...newPhaseObjects);
          displayObjects.push(...phaseObjects);
        } else {
          subheader.numericalID = headerIndex++ / 1000;
          displayObjects.push(...newPhaseObjects);
          displayObjects.push(subheader);
          displayObjects.push(...phaseObjects);
        }

        endEntry = true;
      } //save the accumulated high-level phase if the phase changes


      if (!endEntry) {
        if (highLevelPhase !== priorHLPhaseItem.label) {
          let header = Object.assign({}, headerObj);
          header.label = priorHLPhaseItem.label;
          header.labelID = priorHLPhaseItem.id;
          header.status = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getPhaseStatus)(phaseStatuses);

          if (!!phaseFB[header.label]) {
            header.phaseOrderStatus = "misOrdered";
            header.phFeedback = phaseFB[header.label];
          }

          phaseStatuses = [];
          header.displayColor = problemHeaderColor;
          header.numericalID = headerIndex++ / 1000;
          displayObjects.push(header);
          displayObjects.push(...newPhaseObjects); //reinitialize for the new phase

          phaseStatuses.push(...subPhaseStatuses);
          subPhaseStatuses = [];

          if (highLevelPhase === subheader.label) {
            newPhaseObjects = [...phaseObjects];
          } else {
            subheader.numericalID = headerIndex++ / 1000;
            newPhaseObjects = [subheader];
            newPhaseObjects.push(...phaseObjects);
          }

          priorHLPhaseItem = highLevelPhaseItem;
          problemHeaderColor = determineHLcolor(subPhaseColor, "green");
        } else {
          problemHeaderColor = determineHLcolor(subPhaseColor, problemHeaderColor);
          phaseStatuses.push(...subPhaseStatuses);
          subPhaseStatuses = [];

          if (highLevelPhase === subheader.label) {
            newPhaseObjects.push(...phaseObjects);
          } else {
            subheader.numericalID = headerIndex++ / 1000;
            newPhaseObjects.push(subheader);
            newPhaseObjects.push(...phaseObjects);
          }
        }
      }
    }
  }

  return displayObjects;
};

const determineHLcolor = (lowerColor, higherColor) => {
  let newColor = higherColor;

  if (lowerColor === "red") {
    newColor = "red";
  }

  if (lowerColor === "yellow" && newColor !== "red") {
    newColor = "yellow";
  }

  return newColor;
};

/***/ }),

/***/ 4548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChecklistHierarchy": () => (/* binding */ getChecklistHierarchy),
/* harmony export */   "getChecklistItems": () => (/* binding */ getChecklistItems),
/* harmony export */   "getChecklistItemsByType": () => (/* binding */ getChecklistItemsByType),
/* harmony export */   "groupByKey": () => (/* binding */ groupByKey)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8913);
 // input: list of objects and a fieldName
// returns: an object who's attributes are the distinct values for that fieldName mapped to the subset
// of list items which share that field value

const groupByKey = (listOfObjs, fldName) => listOfObjs.reduce((hash, obj) => ({ ...hash,
  [obj[fldName]]: (hash[obj[fldName]] || []).concat(obj)
}), {});
const getChecklistItemsByType = (scenario, itemType) => {
  return scenario._checkListMetaData.filter(e => e.type === itemType);
};
const getChecklistItems = scenario => {
  return scenario._checkListMetaData.filter(e => _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.CHECKLIST_STEP_TYPES.includes(_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE, _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE));
};
const getChecklistHierarchy = scenario => {
  const phases = getChecklistItemsByType(scenario, _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
  const subPhases = getChecklistItemsByType(scenario, _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE); // filters out items which are display only

  const clSteps = scenario._checkListMetaData.filter(e => _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.CHECKLIST_STEP_TYPES.includes(e.type)); // get the options which are associated with some certain types of steps (decisions, assess w/options)


  const options = scenario._checkListMetaData.filter(e => _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.OPTION_TYPES.includes(e.type)); // map the options to their stepId


  const stepOptions = groupByKey(options, "parentID"); // if a step has options, add them to that step

  clSteps.forEach(step => {
    if (step.id in stepOptions) {
      step.options = stepOptions[step.id];
    }
  }); // figure out which checklist items belong to phases or subphases and group them by
  // the their corresponding phase/subphase ids

  const phChecklistSteps = groupByKey(clSteps.filter(e => undefined === e.subPhase), "phase");
  const spChecklistSteps = groupByKey(clSteps.filter(e => !!e.subPhase), "subPhase"); // assign subphase steps to the appropriate subphase

  subPhases.forEach(sp => {
    sp.items = spChecklistSteps[sp.id];
  }); // map subphases to their phase

  const phSubphases = groupByKey(subPhases, "phase"); // phases have either items or subphases -not both. assign the appropriate stuff
  // to each phase

  phases.forEach(ph => {
    if (ph.id in phChecklistSteps) {
      ph.items = phChecklistSteps[ph.id];
    } else {
      ph.subPhases = phSubphases[ph.id];
    }
  });
  return phases;
};

/***/ }),

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "summarizeAnalysis": () => (/* binding */ summarizeAnalysis)
/* harmony export */ });
/* harmony import */ var _debriefingUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5064);
/* harmony import */ var _meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9205);
 // import { requiredPhaseNames } from "./analyzeEvents";

 // constants

const summaryFields = ["label", "status", "phaseOrderStatus", "phase", "subPhase", "labelID", "phaseID", "probLabel", "answerCorrect", "answerDetails", "timestamp", "type"]; // globals

let analysis; // helper functions
//regularize status values in the case of good and absent
//did not regularize status values for errors yet, not sure if
//the details matter to condition 2

function regularizeStatus(event) {
  if (_meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_1__.leafStatusList.good.includes(event.status)) {
    event.status = "good";
  }

  if (_meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_1__.leafStatusList.error.includes(event.status)) {
    event.status = "error";
  }

  if (_meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_1__.leafStatusList.misorderedError.includes(event.status)) {
    event.status = "misorderedError";
  }

  if (_meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_1__.leafStatusList.misordered.includes(event.status)) {
    event.status = "misordered";
  }

  if (_meddbriefer_feedback_data__WEBPACK_IMPORTED_MODULE_1__.leafStatusList.absent.includes(event.status)) {
    event.status = "absent";
  }

  return event;
}

function processNextLevel(summary, top) {
  let results;
  let children = [];
  let childIDs = [];
  let statuses = [];
  let events;
  let newEvent;
  let dummyEvent = {
    id: top.id,
    status: ""
  };

  if (top.subActions.length === 0) {
    events = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getEvents)(analysis, "id", top.id);

    if (events.length !== 0) {
      newEvent = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.trimAction)(events[events.length - 1], summaryFields);
      newEvent = regularizeStatus(newEvent);
      statuses = [newEvent.status];
      childIDs.push(newEvent.id);
      children.push(newEvent);
    } else {
      statuses = ["notFound"];
      dummyEvent.status = "notFound";
      childIDs.push(top.id);
      children.push(dummyEvent);
    }

    return [children, childIDs, statuses];
  } else {
    let header = {
      id: top.id,
      childIDs: [],
      children: [],
      status: "",
      phaseOrderStatus: "good",
      type: "header"
    };
    top.subActions.forEach(action => {
      results = processNextLevel(summary, action);
      header.children = header.children.concat(results[0]);
      header.childIDs = header.childIDs.concat(results[1]);
      statuses = statuses.concat(results[2]);
    });
    header.status = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_0__.getPhaseStatus)(statuses);
    summary[top.id] = [header].concat(header.children);
    delete header.children;
    return [[header], [header.id], [header.status]];
  }
} // main entry point (should be the only thing which needs to be exported)


function summarizeAnalysis(analysisData, scenIEFeedback) {
  const {
    events: finalActions,
    constraintsViolated
  } = analysisData;
  let summary = {}; //holds results for condition 2

  let childLookup = {}; //holds parent info for each leaf node

  analysis = finalActions; //work through the condition 2 DS and create entries for it and summarize status of children for the current level
  // if (scenarios[scen.name]) {

  let ds = scenIEFeedback.Action; //scenarios[scen.name].Action;

  processNextLevel(summary, ds); //create a child lookup for summary in order to modify the summary in the
  //appropriate place in next section of code

  for (const [parentKey, entry] of Object.entries(summary)) {
    let children = entry[0].childIDs;
    children.forEach(child => {
      if (!summary[child]) {
        childLookup[child] = parentKey;
      }
    });
  } // store phase level contraint feedback at the header level for condition 2
  // (Note that for condition 1 it was stored during the analysis at the phase
  // header 


  let entryToModify;
  let firstAction;
  let origAction;
  let section;
  constraintsViolated.forEach(constraint => {
    firstAction = finalActions.filter(e => !!e.labelID && e.labelID === constraint.arg1.id || e.id === constraint.arg1.id);

    if (firstAction.length !== 0) {
      origAction = firstAction[0];
      let secLabel = origAction.labelID;
      section = summary[secLabel];
    }

    if (!!section) {
      if (constraint.type === "phase") {
        entryToModify = section[0];
        entryToModify.phaseOrderStatus = "misOrdered";

        if (!entryToModify.arg2) {
          entryToModify.arg2 = [constraint.arg2.id];
        } else {
          entryToModify.arg2 = entryToModify.arg2.concat([constraint.arg2.id]);
        }
      } else {
        //store the arg2 info for non phase arguments in case needed for condition 2
        entryToModify = section.filter(e => e.id === origAction.id)[0];

        if (!entryToModify.arg2) {
          entryToModify.arg2 = [constraint.arg2.id];
        } else {
          entryToModify.arg2 = entryToModify.arg2.concat([constraint.arg2.id]);
        }
      }
    }
  }); // }

  return summary;
}

/***/ }),

/***/ 6957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatAsMinSecs": () => (/* binding */ formatAsMinSecs)
/* harmony export */ });
const formatAsMinSecs = seconds => {
  return new Date(seconds * 1000).toISOString().substr(14, 5);
};

/***/ }),

/***/ 5700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doVitalsCounts": () => (/* binding */ doVitalsCounts),
/* harmony export */   "doVitalsFeedback": () => (/* binding */ doVitalsFeedback)
/* harmony export */ });
/* harmony import */ var _meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7686);
/* harmony import */ var _debriefingUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5064);


function doVitalsFeedback(actions, vitalsCount, scen) {
  let FBitems;
  let entry = { ..._meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.globalReassessmentKn[scen]
  };
  let fbTemplates = _meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.globalReassessmentFeedback; // only one of vitalsCheckFeedbackID and vitalsCheckFeedbackLabel
  // should be defined.  But will default to using label if both are.
  // Need to use label to find where to insert for phase level FB and
  // id for inserting FB at leaf level

  if (!!_meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.vitalsCheckFeedbackID) {
    FBitems = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getEvents)(actions, "id", _meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.vitalsCheckFeedbackID);
  }

  if (!!_meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.vitalsCheckFeedbackLabel) {
    FBitems = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.getEvents)(actions, "label", _meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.vitalsCheckFeedbackLabel);
  } //multiple entries for the above label or id may be found but just need one.  
  //Assuming the first found is fine for inserting the fb for condition 1


  let FBitem = FBitems[0];
  let finalFB;
  let done;
  let notDone;
  let template; //collect which required vitals were checked twice and which
  //were not according to the vitalsCount

  for (const [vital, count] of Object.entries(vitalsCount)) {
    if (count < 2) {
      if (!!notDone) {
        notDone = notDone + ", " + vital;
      } else {
        notDone = vital;
      }
    } else {
      if (!!done) {
        done = done + ", " + vital;
      } else {
        done = vital;
      }
    }
  } //save the list of what was and wasn't done two or more times


  entry.notDone = notDone;
  entry.done = done; //select the apppropriate feedback template

  if (!done && !!notDone) {
    template = fbTemplates["absent"];
  }

  if (!!done && !notDone) {
    template = fbTemplates["good"];
  }

  if (!!done && !!notDone) {
    template = fbTemplates["errors"];
  } //Fill in the template using the field values in object entry.
  //For now am not passing in c2FB because we haven't defined
  //where the global vitals check feedback should be located (i.e.
  //a separate id or the id where appears in condition 1 but with
  //a different field specified?  I would think the former but
  //need to confirm with Patty/Scott)


  finalFB = (0,_debriefingUtils__WEBPACK_IMPORTED_MODULE_1__.applyFBTemplate)(entry, {}, template); //save the vitals found/not found in the action/event object where
  //the fb string is stored.  Probably don't need it saved since the
  //fb string has already been generated

  if (!!done) {
    FBitem.vitalsDoneTwice = done;
  }

  if (!!notDone) {
    FBitem.vitalsNotDoneTwice = notDone;
  } //save the feedback string in the action/event object if one was 
  //generated


  if (!!finalFB) {
    FBitem.vitalsFB = finalFB;
  }
}
function doVitalsCounts(actions, scen) {
  let vitalsCount = [];
  let numVitalFound;
  let vitalsToCheck = _meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.globalReassessmentKn[scen]["vitalLabels"];
  let actionIDs = actions.map(e => e.id);
  let numFound;
  let minFound;

  for (const [vital, idEntries] of Object.entries(_meddbriefer_feedback_data_analysisData__WEBPACK_IMPORTED_MODULE_0__.vitalsTakenDueToAssessmentSteps)) {
    if (vitalsToCheck.includes(vital)) {
      numVitalFound = 0;
      vitalsCount[vital] = 0;

      for (let entry of idEntries) {
        minFound = 999; //going through the "and" entries or assessment ids and assuming all must be present in 
        //same numbers to count as a complete request for the vital (e.g. asks for each "sub"
        //measure separately for some assessments)

        for (let id of entry) {
          if (actionIDs.includes(id)) {
            numFound = actions.filter(action => action.id === id && action.timestamp !== -1).length;

            if (numFound < minFound) {
              minFound = numFound;
            }

            if (minFound === 0) {
              break;
            }
          } else {
            minFound = 0;
            break;
          }
        }

        numVitalFound = numVitalFound + minFound;
      }

      vitalsCount[vital] = vitalsCount[vital] + numVitalFound;
    }
  }

  return vitalsCount;
}

/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayContent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7950);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8319);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8959);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8428);
/* harmony import */ var _meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4303);
/* harmony import */ var _MDBNavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1757);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/cond1-debriefing-ui/src/components/DisplayContent.js";





 //import { promptIDs } from "@meddbriefer/analysis";
//import { setC2FB, setRequiredPhaseNames, setFeedbackTemplates } from "@meddbriefer/analysis";





let c2FB;
let fbTemplates;
let promptIDs;
function DisplayContent({
  analysisLog,
  actions,
  scenario,
  getComment,
  updateComment,
  saveComments
}) {
  const [showCommentColumn, setShowCommentColumn] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [showToggleButton, setShowToggleButton] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); //const [events, setEvents] = useState(analysislog.events);

  const [formattedActions, setFormattedActions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);

  const toggleComments = () => {
    setShowCommentColumn(!showCommentColumn);
  };

  const formatAnswerGiven = entry => {
    let answers = [];
    let answer = [];

    for (const [prompt, value] of Object.entries(entry.answerDetails)) {
      let answerString = String(value.givenAnswer);
      answer = answerString.split(":");

      if (answer.length === 2) {
        answers.push({
          ID: answer[0],
          answer: answer[1]
        });
      } else {
        answers.push({
          ID: promptIDs[prompt],
          answer: value.givenAnswer
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
      children: answers.map((entry, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
          children: [entry.ID, ":"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), " ", entry.answer, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this);
  };

  let phaseFBGiven = [];

  const dispHeaderRow = (entry, index) => {
    let phaseFB = "";
    let result;

    if (entry.id === "assessmentHeader") {
      result = (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_5__.getPhaseFeedback)(entry, phaseFBGiven, c2FB);
      phaseFB = result[0];
      phaseFBGiven = result[1];
    }

    if (entry.id === "assessmentHeader") {
      //|| entry.id === "assessmentSubHeader") 
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
          colSpan: "3",
          className: (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_5__.getColor)(entry, fbTemplates),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
            children: entry.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
          children: phaseFB
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this), showCommentColumn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("textarea", {
            rows: "2",
            cols: "50",
            defaultValue: getComment(index),
            onBlur: event => saveComment(event, index),
            id: `${entry.id}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        colSpan: "10",
        className: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this);
    }
  };

  function getLabel(entry) {
    return entry.type === "obtain-vital-sign" ? vitalLabel(entry) : regularLabel(entry);
  }

  function getStatusLabel(entry) {
    let metaData = scenario.intvMetaData;
    let metaEntry = metaData.find(me => entry.vital === me.id);
    return metaEntry.label;
  }

  function vitalLabel(entry) {
    if (entry.vitalType === "vitals") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
          children: "Requested vital:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this), " ", entry.vital, ",", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: "text-muted",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
              children: "Found:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 53
            }, this), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
              children: entry.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 72
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)]
      }, void 0, true);
    }

    if (entry.vitalType === "intervention-status") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
          children: "Requested intervention status for:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, this), " ", getStatusLabel(entry), ",", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: "text-muted",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
              children: "Found:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 53
            }, this), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
              children: entry.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 72
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this)]
      }, void 0, true);
    }

    if (entry.vitalType === "sample") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
          children: "Requested SAMPLE:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, this), " ", entry.vital, ",", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: "text-muted",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
              children: "Found:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 53
            }, this), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
              children: entry.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 72
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this)]
      }, void 0, true);
    }

    if (entry.vitalType === "opqrst") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
          children: "Requested OPQRST:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this), " ", entry.vital, ",", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: "text-muted",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
              children: "Found:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 53
            }, this), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
              children: entry.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 72
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, this)]
      }, void 0, true);
    }
  }

  function regularLabel(entry) {
    return entry.subPhase && entry.type !== "intervention" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [entry.actionDescription, ".  ", answerData(entry), findingsData(entry)]
    }, void 0, true) : phaseLabel(entry);
  }

  function phaseLabel(entry) {
    return entry.type === "intervention" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [entry.actionDescription, ". ", answerData(entry), " "]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [entry.actionDescription, ".  ", findingsData(entry)]
    }, void 0, true);
  }

  function findingsData(entry) {
    return entry.finding ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
      className: "text-muted",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
          children: "Findings:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 47
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
          children: entry.finding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 64
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 44
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }, this);
  }

  function answerData(entry) {
    return entry.answerDetails ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
      className: "text-muted",
      children: formatAnswerGiven(entry)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 14
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 14
    }, this);
  }
  /*  function saveComment(val) {
      let orig = val.target.defaultValue;
      let comment = val.target.value;
      let entryID = val.target.id;
      if (orig !== comment){
          let entry = formattedActions.find(entry => (entry.id === entryID))
          // if (entry) { entry.comment = comment }}
          const newEntry = Object.assign({}, entry, {comment: comment})
          updateFormattedAction(newEntry)
      }
  }
  */


  function saveComment(event, index) {
    const newValue = event.target.value;
    console.log(newValue, index);
    updateComment(index, newValue);
  }

  const dispDataRow = (entry, index) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: entry.numericalID
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_5__.getTimestamp)(entry)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        className: (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_5__.getColor)(entry, fbTemplates),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: "material-icons-outlined",
          children: (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_5__.getAssessmentIcon)(entry, fbTemplates)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, this), getLabel(entry)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_5__.getFeedback)(entry, c2FB, fbTemplates)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, this), showCommentColumn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("textarea", {
          rows: "2",
          cols: "50",
          defaultValue: getComment(index),
          onBlur: event => saveComment(event, index),
          id: `${entry.id}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 21
      }, this)]
    }, void 0, true);
  };
  /* const updateFormattedAction = (record) => {
      const index = formattedActions.findIndex(rec => rec.id === record.id)
      setFormattedActions([
          ...formattedActions.slice(0, index),
          record,
          ...formattedActions.slice(index+1)
      ])
  } */


  function displayIt() {
    c2FB = analysisLog.FBfields;
    fbTemplates = analysisLog.feedbackTemplates;
    promptIDs = analysisLog.promptIDs; // if (comments){

    setShowCommentColumn(true);
    setShowToggleButton(true); // }
    // else {
    //     setShowCommentColumn(false)
    // }

    setFormattedActions(actions);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    displayIt(); // eslint-disable-next-line
  }, [] // empty list means this code will only be run on initial render
  );

  if (undefined === formattedActions) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      children: "processing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [showToggleButton ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MDBNavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: `Review of: ${analysisLog.label}`,
      leftNav1: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "primary",
        onClick: () => saveComments(),
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 29
      }, this) // leftNav2={
      //     <Button
      //         color="primary"
      //         onClick={saveAsCommentLogLocally}
      //     >
      //         Save As
      //     </Button>
      // }
      ,
      rightNav: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "primary",
        onClick: toggleComments,
        children: "Toggle Comments"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 19
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MDBNavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: `Analysis for: ${analysisLog.label}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        style: {
          overflowY: "auto",
          maxHeight: "700px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          borderless: true,
          size: "sm",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "table-header",
                children: " ID "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "table-header",
                children: " Timestamp "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "table-header",
                children: " Action Description "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "table-header",
                children: " Feedback "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 29
              }, this), showCommentColumn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "table-header",
                children: " Comments "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
            className: "scroll",
            children: formattedActions.map((currentEntry, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: currentEntry.type === "header" ? dispHeaderRow(currentEntry, index) : dispDataRow(currentEntry, index)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 29
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 4002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetReview)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6011);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8913);
/* harmony import */ var _meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4303);
/* harmony import */ var _DisplayContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8351);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/cond1-debriefing-ui/src/components/GetReview.js";










function GetReview() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    userName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext);
  const {
    logID
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [actions, setActions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [scenario, setScenario] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [analysisLog, setAnalysisLog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); //if there is a comment log for the input id then use that to get the
  //analysis log, otherwise the input logID is an analysis log

  const getComment = index => comments[index];

  const updateComment = (index, value) => {
    const copy = [...comments];
    copy[index] = value;
    setComments(copy);
  };

  const storeComments = () => {
    // analysisLog.id = undefined
    (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_6__.saveCommentLog)(db, analysisLog, logID, comments, userName);
  }; // const saveAsCommentLogLocally = () => {
  //     analysisLog = saveAsCommentLog(db, analysisLog, comments , userName)
  // }


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_5__.getCond1CommentLog)(db, logID).then(debriefLogData => {
      (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_5__.getAnalysisLog)(db, debriefLogData.analysisLogID).then(analysisLogData => {
        setAnalysisLog(analysisLogData);
        setActions(analysisLogData.events);
        setComments(debriefLogData.comments);
        (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_5__.getObserverLog)(db, analysisLogData.observerLogID).then(observerLogData => {
          (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_5__.getPublishedScenarioObjectByID)(db, observerLogData.scenarioID).then(scenData => {
            setScenario(scenData);
            setLoaded(true);
          });
        });
      });
    });
  }, [db, logID]);

  if (!loaded) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
      children: "Loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_DisplayContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    analysisLog: analysisLog,
    actions: actions,
    scenario: scenario,
    getComment: getComment,
    updateComment: updateComment,
    saveComments: storeComments
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7267);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6011);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/cond1-debriefing-ui/src/components/Header.js";





const Header = () => {
  const {
    currentUser,
    signOutUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.AuthContext);
  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  let location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "title-bar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "MedDBriefer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), location.pathname !== '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      type: "button",
      className: "back-bttn",
      onClick: () => history.goBack(),
      children: "Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), currentUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      type: "button",
      className: "sign-out-bttn",
      onClick: () => signOutUser(),
      children: "Sign out"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentUserName": () => (/* binding */ currentUserName),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8259);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8398);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2441);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9876);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8959);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6011);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/cond1-debriefing-ui/src/components/MDBNavBar.js";





let currentUserName; // {/* <Button color="primary" onClick={prefsToggler}>
//     Preferences
// </Button> */}

const MDBNavBar = ({
  title,
  leftNav1: _leftNav = null,
  leftNav2: _leftNav2 = null,
  rightNav: _rightNav = null
}) => {
  const {
    isAuthenticated,
    userName,
    signOutUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.AuthContext);
  currentUserName = userName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "dark",
    dark: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "#",
      children: "MedDBriefer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), !!_leftNav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: _leftNav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, undefined), !!_leftNav2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: _leftNav2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }, undefined), !!title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tag: "h3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [isAuthenticated && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: ["Welcome, ", userName, " \xA0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "danger",
          onClick: signOutUser,
          children: "Sign Out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true), !!_rightNav && _rightNav]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDBNavBar);

/***/ }),

/***/ 1620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MDBNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1757);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/cond1-debriefing-ui/src/components/UnauthedLayout.js";





const UnauthedLayout = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MDBNavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "MedDBriefer Authentication"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), props.children]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnauthedLayout);

/***/ }),

/***/ 7428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayContent": () => (/* reexport safe */ _DisplayContent__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "GetReview": () => (/* reexport safe */ _GetReview__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "MDBNavBar": () => (/* reexport safe */ _MDBNavBar__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "UnauthedLayout": () => (/* reexport safe */ _UnauthedLayout__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _GetReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4002);
/* harmony import */ var _DisplayContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8351);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(442);
/* harmony import */ var _MDBNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1757);
/* harmony import */ var _UnauthedLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1620);
//export {default as Analyze} from "./Analyze"
//export {default as AnalyzeDebriefing} from "./AnalyzeDebriefing"




 //export {default as InitializeForReview} from "./InitializeForReview"

/***/ }),

/***/ 8912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayContent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.DisplayContent),
/* harmony export */   "GetReview": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.GetReview),
/* harmony export */   "Header": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Header),
/* harmony export */   "MDBNavBar": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.MDBNavBar),
/* harmony export */   "UnauthedLayout": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.UnauthedLayout)
/* harmony export */ });
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8080);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7428);

 //export * from "./routes"

/***/ }),

/***/ 1604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnalysesTable)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8428);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8959);
/* harmony import */ var _AnalysisTableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5678);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/components/AnalysesTable.jsx";




function AnalysesTable({
  analyses,
  onViewAnalysis,
  onAnalyze
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AnalysisTableHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tbody", {
        children: analyses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            colSpan: 5,
            children: "There aren't any existing analyses"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this) : analyses.map(analysis => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            children: analysis.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            children: analysis.analyzer
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            children: analysis.timestamp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
              size: "sm",
              color: "primary",
              onClick: () => onViewAnalysis(analysis.id),
              children: "View"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, this)]
        }, analysis.id, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "sm",
      color: "primary",
      onClick: () => onAnalyze(),
      children: "Create New Analysis"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 2940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnalysisDetails)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8428);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8959);
/* harmony import */ var _AnalysisTableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5678);
/* harmony import */ var _DebriefingsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3450);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/components/AnalysisDetails.jsx";





function AnalysisDetails({
  analysis,
  cond1Comments,
  cond2Debriefings,
  onCond1StartReview,
  onCond1ContinueReview,
  onCond2StartReview,
  onCond2ContinueReview
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: "Analysis"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      striped: true,
      borderless: true,
      size: "sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AnalysisTableHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: analysis.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: analysis.analyzer
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: analysis.timestamp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
              size: "sm",
              color: "danger",
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_DebriefingsTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
      analysis: analysis,
      heading: "Condition 1 Debriefings/Comments",
      debriefings: cond1Comments,
      onStartReview: onCond1StartReview,
      onContinueReview: onCond1ContinueReview
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_DebriefingsTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
      analysis: analysis,
      heading: "Condition 2 Debriefings/Comments",
      debriefings: cond2Debriefings,
      onStartReview: onCond2StartReview,
      onContinueReview: onCond2ContinueReview
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 5678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnalysesTableHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/components/AnalysisTableHeader.jsx";

function AnalysesTableHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: "ID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: "Analyzer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: "timestamp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 3450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebriefingsTable)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8428);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8959);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/components/DebriefingsTable.jsx";



function DebriefingsTable({
  analysis,
  heading,
  debriefings,
  onStartReview,
  onContinueReview
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      striped: true,
      borderless: true,
      size: "sm",
      hover: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "Debriefing ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "Reviewer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: "Timestamp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: debriefings.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: "4",
            children: ["Currently, there aren't any ", heading.toLowerCase()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: debriefings.map(debrief => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: debrief.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: debrief.reviewer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: debrief.timestamp
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
                size: "sm",
                color: "primary",
                disabled: !onContinueReview,
                onClick: () => onContinueReview(debrief.id),
                children: "Continue Review"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
                size: "sm",
                color: "danger",
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 19
            }, this)]
          }, debrief.id, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this))
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "sm",
      color: "primary",
      disabled: !onContinueReview,
      onClick: () => onStartReview(analysis),
      children: "Start Review"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 2603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObserverLogDetails)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8428);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8959);
/* harmony import */ var _ObserverLogTableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1719);
/* harmony import */ var _AnalysesTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1604);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/components/ObserverLogDetails.jsx";





function ObserverLogDetails({
  log,
  scenario,
  analyses,
  onViewAnalysis,
  onAnalyze
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "Observer Log"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      striped: true,
      borderless: true,
      size: "sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ObserverLogTableHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: log.scenarioName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: log.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: log.userName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: log.timestamp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
              size: "sm",
              color: "danger",
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: "Analyses"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AnalysesTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
      analyses: analyses,
      onViewAnalysis: onViewAnalysis,
      onAnalyze: onAnalyze
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObserverLogTable)
/* harmony export */ });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8428);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8959);
/* harmony import */ var _ObserverLogTableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1719);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/components/ObserverLogTable.jsx";
// import { Link, use } from "react-router-dom"



function ObserverLogTable({
  logs,
  viewButtonHandler
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    striped: true,
    borderless: true,
    size: "sm",
    hover: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ObserverLogTableHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tbody", {
      children: logs.map(log => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
          children: log.scenario
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
          children: log.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
          children: log.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
          children: log.timestamp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
            size: "sm",
            color: "success",
            onClick: () => viewButtonHandler(log.id),
            children: "View"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this)]
      }, log.id, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 1719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObserverLogTableHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/components/ObserverLogTableHeader.jsx";

function ObserverLogTableHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Scenario"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Label"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Timestamp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 8573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserverLogDetails": () => (/* reexport safe */ _ObserverLogDetails__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ObserverLogTable": () => (/* reexport safe */ _ObserverLogTable__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ObserverLogTableHeader": () => (/* reexport safe */ _ObserverLogTableHeader__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _ObserverLogDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2603);
/* harmony import */ var _ObserverLogTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(323);
/* harmony import */ var _ObserverLogTableHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1719);




/***/ }),

/***/ 9834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogChooser": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_2__.LogChooser),
/* harmony export */   "ObserverLog": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_2__.ObserverLog),
/* harmony export */   "ObserverLogDetails": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ObserverLogDetails),
/* harmony export */   "ObserverLogList": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_2__.ObserverLogList),
/* harmony export */   "ObserverLogTable": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ObserverLogTable),
/* harmony export */   "ObserverLogTableHeader": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ObserverLogTableHeader)
/* harmony export */ });
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8080);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8573);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3345);




/***/ }),

/***/ 8429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Analysis)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8913);
/* harmony import */ var _components_AnalysisDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2940);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/routes/Analysis.jsx";




 // import { AuthContext } from "@meddbriefer/mdb-auth";




function Analysis({
  onCond1StartReview = null,
  onCond1ContinueReview = null,
  onCond2StartReview = null,
  onCond2ContinueReview = null
}) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    logID,
    analysisID
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)(); // const history = useHistory();
  // const { userName } = useContext(AuthContext);

  const [analysis, setAnalysis] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [cond1DebLogs, setCond1DebLogs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [cond2DebLogs, setCond2DebLogs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (db && !analysis) {
      (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.getAnalysisLog)(db, analysisID).then(data => setAnalysis(data)).then(() => (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.getAnalysisCond1Comments)(db, analysisID)).then(comments => setCond1DebLogs(comments)).then(() => (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.getAnalysisCond2Debriefings)(db, analysisID)).then(debriefings => setCond2DebLogs(debriefings)).catch(error => console.error(error));
    }
  }, [db, logID, analysisID, analysis]);

  if (!(cond1DebLogs && cond2DebLogs)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_AnalysisDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
    analysis: analysis,
    cond1Comments: cond1DebLogs,
    cond2Debriefings: cond2DebLogs,
    onCond1StartReview: onCond1StartReview,
    onCond1ContinueReview: onCond1ContinueReview,
    onCond2StartReview: onCond2StartReview,
    onCond2ContinueReview: onCond2ContinueReview
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 2474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogChooser)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6011);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8913);
/* harmony import */ var _ObserverLogList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4953);
/* harmony import */ var _ObserverLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5786);
/* harmony import */ var _Analysis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8429);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/routes/LogChooser.jsx";










function LogChooser({
  redirectToCond1Debriefing,
  redirectToCond2Debriefing
}) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    userName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);

  const continueCond1ReviewHandler = debriefingID => redirectToCond1Debriefing(debriefingID);

  const startCond1ReviewHandler = async analysis => {
    console.log("I will creating a new review doc and redirect to it", analysis);
    const debriefID = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.createCond1Comments)(db, analysis, userName);
    redirectToCond1Debriefing(debriefID);
  };

  const continueCond2ReviewHandler = debriefID => redirectToCond2Debriefing(debriefID);

  const startCond2ReviewHandler = async analysis => {
    console.log("I will creating a new review doc and redirect to it", analysis);
    const debriefID = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.createCond2Debriefing)(db, analysis, userName);
    redirectToCond2Debriefing(debriefID);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/logs/:logID/analysis/:analysisID",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Analysis__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onCond1StartReview: !redirectToCond1Debriefing ? null : startCond1ReviewHandler,
        onCond1ContinueReview: !redirectToCond1Debriefing ? null : continueCond1ReviewHandler,
        onCond2StartReview: !redirectToCond2Debriefing ? null : startCond2ReviewHandler,
        onCond2ContinueReview: !redirectToCond2Debriefing ? null : continueCond2ReviewHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/logs/:logID",
      component: _ObserverLog__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/",
      component: _ObserverLogList__WEBPACK_IMPORTED_MODULE_5__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 5786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObserverLog)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6011);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8913);
/* harmony import */ var _meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4303);
/* harmony import */ var _components_ObserverLogDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2603);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/routes/ObserverLog.jsx";











function ObserverLog() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useHistory)();
  const {
    logID
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const {
    userName
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_5__.AuthContext);
  const [obsLog, setObsLog] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [scenario, setScenario] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [analysisLogs, setAnalysisLogs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null); // const [debriefings, setDebriefings] = useState(null)
  // const [doneLoading, setDoneLoading] = useState(false)

  const [updateAnalysisLogs, setUpdateAnalysisLogs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);

  const analyzeLogHandler = async () => {
    // console.log("I will analyze now")
    const analysis = (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_7__.analyzeEvents)(scenario, obsLog); // console.log(userName, analysis)

    await (0,_meddbriefer_analysis__WEBPACK_IMPORTED_MODULE_7__.saveAnalysisLog)(db, obsLog, analysis, userName);
    setUpdateAnalysisLogs(true);
  };

  const viewAnalysisHandler = analysisID => {
    history.push(`/logs/${logID}/analysis/${analysisID}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const fetchData = async () => {
      const obsLogData = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_6__.getLog)(db, logID);

      if (obsLogData) {
        setObsLog(obsLogData);
        console.log("obsLog", obsLogData);
        const scenData = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_6__.getPublishedScenarioObjectByID)(db, obsLogData.scenarioID);

        if (scenData) {
          setScenario(scenData);
        }
      }
    };

    if (db && logID && !obsLog) {
      fetchData();
    }
  }, [db, logID, obsLog]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (obsLog && scenario && updateAnalysisLogs) {
      setUpdateAnalysisLogs(false);
      (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_6__.getObserverLogAnalyses)(db, logID).then(records => setAnalysisLogs(records)).catch(error => console.error(error));
    }
  }, [db, logID, obsLog, scenario, updateAnalysisLogs]);

  if (!analysisLogs) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: "Loading.."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ObserverLogDetails__WEBPACK_IMPORTED_MODULE_8__["default"], {
    log: obsLog,
    scenario: scenario,
    analyses: analysisLogs,
    onAnalyze: analyzeLogHandler,
    onViewAnalysis: viewAnalysisHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 4953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObserverLogList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8913);
/* harmony import */ var _components_ObserverLogTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(323);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/debriefing/log-chooser/src/routes/ObserverLogList.jsx";









function ObserverLogList() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  const [obsLogs, setObsLogs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  const viewObsLogHandler = obsLogID => {
    history.push(`/logs/${obsLogID}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.getObserverLogList)(db).then(logs => setObsLogs(logs)).catch(error => console.error(error));
  }, [db]);

  if (!obsLogs) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "Loading Logs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "Observer Logs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_ObserverLogTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      logs: obsLogs,
      viewButtonHandler: viewObsLogHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 3345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analysis": () => (/* reexport safe */ _Analysis__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "LogChooser": () => (/* reexport safe */ _LogChooser__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ObserverLog": () => (/* reexport safe */ _ObserverLog__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ObserverLogList": () => (/* reexport safe */ _ObserverLogList__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _LogChooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2474);
/* harmony import */ var _ObserverLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5786);
/* harmony import */ var _ObserverLogList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4953);
/* harmony import */ var _Analysis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8429);





/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B4CA_PhaseIE": () => (/* binding */ B4CA_PhaseIE)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);
/* Data for phase scenario B4CA for phase IE 
This data structure holds all the information to create the slides to present during the IE phase.
It mirrors the tree structure that is presented in the Excel file. All nodes in the tree are called actions whether 
they are assessments or interventions. Subactions are the children of the actions in the tree.
Fields:
id: identifies the action-node in the tree. It is a string since it is unique.
label: text for the action as it will appear on the slide
type: indicates whether the action is Required, Contraindicated, Unnecessary, Irrelevant, Optional, Alternative.
    Required, it will be listed in the left side of the slide so that students are asked if they performed it.
    Contraindicated: it will be listed on the right side under a list of contraindicated actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Unnecessary: it will be listed on the right side under a list of unnecessary actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Irrelevent: it will be listed on the right side under a list of irrelevant actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Optional: it will be accepted as correct if performed. We are considering it the same as Unnecessary.
    Alternative: will be used for those interventions that can be performed as alternative to required ones. A field
    AlternativeToIntv will be added to indicate the intervention to which it is an alternative.
AlternativeToIntv: indicates the intervention for which the current one is an alternative. It will only have a value if
the type is Alternative.
feedbackAbsent: feedback given if the action was no performed
feedbackOutOfOrder: feedback given if the action was done late (e.g., if the action is Scene size-up and it was done 
    after Primary Survey)
feedbackError: feedback if the action was performed incorrectly (e.g., wrong ventilation rate)
examine: boolean to indicate if this Action needs to be examined (phase E)
prompts: prompts to be included in question headers in phase E, to hint on how to reflect
subActionsList: boolean that indicates whether the subActions need to be listed as bullet points on the slide. If they
    don't need to be listed it is usually because they have been grouped however, the subActions still need to be 
    included in the subActions field because they are used by the analysis to give a summary of their status.
subActions: array with the corresponding subactions (to form the tree)
*/

const B4CA_PhaseIE = {
  Action: {
    id: "top",
    label: "fully assess and manage the patient in this scenario"
    /* the way it will appear on the slide */
    ,
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ
    /*indicates whether the action was Required, Contraindicated, Unnecessary, or Irrelevant" */
    ,
    feedbackAbsent: ["Your log indicates you didn't complete any of these assessment or managment goal. Please restart the scenario and try again"]
    /*feedback if the action was not performed*/
    ,
    feedbackOutOfOrder: [""]
    /*feedback if the action was done late (e.g., if the action is Scene Size-up 
    and it was done after Primary Survey)*/
    ,
    feedbackError: [""]
    /*feedback if the action was performed incorrectly (e.g. wrong Ventilation rate)*/
    ,
    examine: false
    /* boolean to indicate if this Action needs to be examined (phase E) */
    ,
    prompts: ""
    /* prompts to the included in question in phase E to hint on how to reflect */
    ,
    subActionsList: true
    /* boolean that indicates if subActions need to be listed as bullet points on slide */
    ,
    subActions: [
    /*array with the corresponding subactions (to form the tree)*/
    {
      id: "scene-size-up",
      label: "Put on BSI and do a complete Scene Size-up before entering the scene",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself.", "Your scene size up gives you a big-picture view of what is going on before you even begin examining the patient and includes determining the mechanism of injury and number of patients, requesting additional help if necessary, and considering stabilization of the spine.", "In this case, you would have learned that this is a motorbike crash, which should have prompted you to think about a possible spinal cord injury and the need to secure the patient's spine immediately."],
      feedbackOutOfOrder: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself.", "Your scene size up also gives you a big-picture view of what is going on before you even begin examining the patient. This includes determining the mechanism of injury and number of patients, requesting additional help if necessary, and considering stabilization of spine."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-BSI",
        label: "Apply BSI",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-scene-safety",
        label: "Determine the scene/situation is safe",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-injury-mechanism",
        label: "Determine the mechanism of injury (MOI) or nature of illness (NOI)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Knowing what caused the patient's injury or illness can allow you to start developing a plan of action before you even assess your patient.", "By determining the mechanism of injury, you would have learned that this is a motorbike accident, which should have prompted you to think about potential head or spinal injury, injuries to the extremities, and other blunt impact injuries to the chest and abdomen."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-num-patients",
        label: "Determine the number of patients",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Usually you will have one patient, but if there is more than one you will need to plan accordingly."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-requests-additional-help",
        label: "Request additional help if necessary",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Consider the need for extra help based on number of patients, mechanism of injury, and your patient's status.", "Although police and fire personnel were already on scene, you should have considered the need for additional ALS support."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-considers-stabilize-spine",
        label: "Consider stabilization of spine",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["All trauma patients are at risk for spinal injury, including those in high-speed accidents. Take this into consideration before initial contact with the patient to prevent unintentional injury."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "primary-survey",
      label: "Perform a Primary Survey and manage all identified life threats",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["The primary survey is an assessment of mental status, life-threats, and the patient's ABCs. It is where you will identify and address the patient's most serious injuries.", "In this case, the Primary Survey would have revealed a patient who is conscious with chest pain and shortness of breath. Your primary survey does not reveal any apparently life threats so you can move forward to the next step of your assessment."],
      feedbackOutOfOrder: ["You should have started your Primary Survey after the Scene Size-up and completed it before starting the Secondary Survey. Only interrupt your assessment to control life-threats: (1) Conditions that comprimise a patent airway (2) Conditions that compromise breathing or respirations, such as a tension pneumothorax, (3) Conditions that compromise circulation, such as severe bleeding, (4) Cardiac arrest, and any  other potentially life threatening injuries or conditions.  Your patient's condition will deteriorate if these conditions are not addressed before continuing on with your assessment and history taking."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "general-impression",
        label: "Conduct an Initial Assessment",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["You should have performed an Initial Assessment: gathered a general impression, identified any apparent life threats, and determined your patient's level of consciousness.  Your Initial Assessment  would have revealed a patient who is unconscious."],
        feedbackOutOfOrder: ["While you may be tempted to jump straight into your ABCs, apparent life threats (ie. uncontrolled bleeding) should be addressed first, as they can cause a patient to deteriorate quickly. Also, be sure to assess the patient's mental status, as an unconscious patient will need a pulse check first, to ensure he or she does not require CPR."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assess-patient-condition",
          label: "State or request a general impression",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Your general impression allows you to start developing a plan of action before you even assess your patient.", "In this case, your general impression would have been of a man thrown from a motor bike."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-loc",
          label: "Assess the patient's level of consciousness",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The patient's level of consciousness alters how you progress through your assessment.", "The patient is conscious with a GCS of 15."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-life-threats",
          label: "Determine the chief complaint/apparent life-threats",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If you had determined apparent life threats, you would have noticed that the patient was conscious without apparent immediate life threats."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage a potential head or spinal injury",
        label: "Manage a potential head or spinal injury",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["This patient was thrown from a motorcycle and landed on his back, which could have caused a fracture of the spine and/or neck. You should have taken manual c-spine stabilization before performing your ABC assessment and maintained it throughout and applied an appropriately sized cervical collar."],
        feedbackOutOfOrder: ["Managing the cervical spine is one of the first things you should do for any trauma patient, as you must ensure you do not cause any further injury during the remainder of your assessment and management."],
        feedbackErrors: [""],
        examine: true,
        prompts: "Did not consider risk for cervical spine injury; Considered cervical spine injury but did not think the mechanism necessitated spinal stabilization",
        subActionsList: true,
        subActions: [{
          id: "intv-spinal-immobilization-technique-manual-c-spine",
          label: "Apply (or direct a partner to apply) manual c-spine stabilization",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Part of managing a head and/or spinal injury includes manual stabilization of the cervical spine before beginning your assessment, as movement may further injure the patient. When you arrive, this patient is helmeted, but the helmet should be removed while maintaining c-spine stability, even if this requires additional people."],
          feedbackOutOfOrder: ["During trauma situations it is necessary to stabilize the c-spine before continuing as not doing so may cause further injury to the patient. Additionally, the cervical spine needs to be manually supported before and after the application of a cervical collar. Manual support can be stopped after the CID is applied on the long backboard."],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-spinal-immobilization-technique-cervical-collar",
          label: "Apply an appropriately sized cervical collar",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A cervical collar will help you maintain stability while you continue with your exam."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "airway",
        label: "Assess the patient's airway",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Be sure to assess the airway for patency and intact physical structures.", "You would have found this patient's airway to be patent, as evidenced by the fact that he can speak to you."],
        feedbackOutOfOrder: ["If your patient is conscious, you should examine the airway before breathing and circulation. If a patient is unconscious, you should assess the pulse first to evaluate for possible cardiac arrest, then go through your ABCs."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "airway-is-open",
          label: "Check if the airway is patent",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The first step of your airway assessment is to see if the patient's airway is open. If the patient is speaking normally, like in this patient, it is open. Signs like stridor or gasping may indicate an airway obstruction."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "airway-has-intact-physical-structures",
          label: "Check if the airway has intact physical structures",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Though this patient did not have any facial trauma, be sure to look for injuries such as gun-shot wounds or facial fractures, as these may affect what basic or advanced airways you can use."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-open-airway-method-head-tilt"
          /*contraindicated intervention */
          ,
          label: "Head tilt chin lift",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A head-tilt chin lift is contraindicated for a patient with suspected c-spine injury as tilting the head could cause further damage to the neck. You should have used a modified jaw thrust to check this patient's airway."],
          examine: true,
          prompts: "Did not realize patient had a potential cervical spine injury; Did not realize that chin tilt could further injure the spine",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-manual-finger-sweep"
          /* contraindicated intervention */
          ,
          label: "Manual (finger sweep)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, a blind finger sweep is contraindicated as it could lodge a foreign body deeper into the airway. Further, there is no evidence of foreign body in this patient's mouth."],
          examine: true,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-magill-forceps-assisted"
          /* contraindicated intervention */
          ,
          label: "Magill forceps assisted removal",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, there is no evidence of a foreign body in this patient's mouth."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-heimlich-maneuver"
          /* contraindicated intervention */
          ,
          label: "Heimlich Maneuver",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object so the Heimlich maneuver is not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-back-blows-and-chest-thrusts"
          /* contraindicated intervention */
          ,
          label: "Back blows and chest thrusts",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object so back blows and chest thrusts are not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-oropharyngeal-airway"
          /* contraindicated intervention */
          ,
          label: "Oropharyngeal airway (OPA)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient requires only a nasal canula or non-rebreather mask. An airway adjunct is unnecessary and would likely be refused by this conscious patient."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-nasopharyngeal-airway"
          /* contraindicated intervention */
          ,
          label: "Nasopharyngeal airway (NPA)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient requires only a nasal canula or non-rebreather mask. An airway adjunct is unnecessary and would likely be refused by this conscious patient."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-orotracheal-intubation"
          /* contraindicated intervention */
          ,
          label: "Orotracheal intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-nasotracheal-intubation"
          /* contraindicated intervention */
          ,
          label: "Nasotracheal intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-insert-advanced-airway"
          /* contraindicated intervention */
          ,
          label: "Insert advanced/rescue airway",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-rapid-sequence-intubation"
          /* contraindicated intervention */
          ,
          label: "Rapid-sequence intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["RSI is not in the paramedic's scope of practice in Pennsylvania. This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-sedation-assisted-intubation"
          /* contraindicated intervention */
          ,
          label: "Sedation-assisted intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-needle-cricothyrotomy"
          /* contraindicated intervention */
          ,
          label: "Needle cricothyrotomy",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-surgical-cricothyrotomy"
          /* contraindicated intervention */
          ,
          label: "Surgical cricothyrotomy",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothyrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "breathing",
        label: "Assess the patient's breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["After assessing the patient's airway, assess their breathing by listening for breath sounds and observing their respiratory rate, rhythm, and effort.", "You would have found tachypnea with diminished sounds on the left, suggesting possible pneumothorax or hemothorax."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "breathing-checks-rate",
          label: "rate",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A significantly elevated or depressed respiratory rate can suggest impending respiratory failure.", "This patient's tachypnea suggests the need for some respiratory support."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-rhythm",
          label: "rhythm",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Although not found in this case, a patient who is breathing irregularly needs ventilatory support."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-quality",
          label: "quality",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Sounds like stridor, crackles, or wheezing will help you diagnose and manage your patient's respiratory problems.", "This patient had diminished sounds on the left with crepitus, suggesting a possible pneumothorax."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage inadequate breathing",
        label: "Manage inadequate breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["The patient is taking rapid, shallow breaths. He is diminished on the L with an SpO2 of 88%. These are signs that this patient has a pneumothorax, possibly even a tension pneumothorax, and requires respiratory support."],
        feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
        feedbackErrors: [""],
        examine: true,
        prompts: "Didn't realize that the patient's respiratory status was threatened; Didn't know the best way to support this patient's breathing",
        subActionsList: true,
        subActions: [{
          id: "intv-non-rebreather-mask-or-nasal-cannula",
          label: "Administering concentrated oxygen via a non-rebreather mask or, if not tolerated, a nasal cannula to a target SpO2 of 95-99%",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The patient's respiratory rate is fast, but he is ventilating adequately. His SpO2, however, is low, suggesting inadequate oxygenation. You can use either a nasal canula or non-rebreather mask to help with oxygenation. Note that you are not assisting the patient with ventilation. In the case of a pneumothorax, you should avoid positive pressure ventilation, if possible, as this could increase the amount of air outside of the lungs, turning a pneumothorax into a tension pneumothorax."],
          feedbackOutOfOrder: ["Oxygen administration should be performed during the primary survey as this intervention falls under 'Breathing' in the ABC's."],
          feedbackErrors: ["This patient should be allowed to breathe independently. O2 flow rate should be adjusted to achieve an SpO2 between 95 and 99%."],
          examine: true,
          prompts: "Didn't realize that the patient's respiratory status was threatened; thought this patient needed ventilatory support; did not recognize the possibility of a pneumothorax",
          subActionsList: false,
          subActions: [{
            id: "intv-supplemental-oxygen-device-non-rebreather-mask",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["The patient's respiratory rate is fast, but he is ventilating adequately. His SpO2, however, is low, suggesting inadequate oxygenation. You can use either a nasal canula or non-rebreather mask to help with oxygenation. Note that you are not assisting the patient with ventilation. In the case of a pneumothorax, you should avoid positive pressure ventilation, if possible, as this could increase the amount of air outside of the lungs, turning a pneumothorax into a tension pneumothorax."],
            feedbackOutOfOrder: ["Oxygen administration should be performed during the primary survey as this intervention falls under 'Breathing' in the ABC's."],
            feedbackErrors: ["This patient should be allowed to breathe independently. O2 flow rate should be adjusted to achieve an SpO2 between 95 and 99%."],
            subActions: []
          }, {
            id: "intv-supplemental-oxygen-device-nasal-cannula",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ALT,
            alternativeToIntv: "intv-supplemental-oxygen-device-non-rebreather-mask",
            feedbackAbsent: ["The patient's respiratory rate is fast, but he is ventilating adequately. His SpO2, however, is low, suggesting inadequate oxygenation. You can use either a nasal canula or non-rebreather mask to help with oxygenation. Note that you are not assisting the patient with ventilation. In the case of a pneumothorax, you should avoid positive pressure ventilation, if possible, as this could increase the amount of air outside of the lungs, turning a pneumothorax into a tension pneumothorax."],
            feedbackOutOfOrder: ["Oxygen administration should be performed during the primary survey as this intervention falls under 'Breathing' in the ABC's."],
            feedbackErrors: ["This patient should be allowed to breathe independently. O2 flow rate should be adjusted to achieve an SpO2 between 95 and 99%."],
            subActions: []
          }]
        }, {
          id: "reassess-AB",
          label: "Check that breathing management interventions are working by requesting relevant vitals--in particular, P, R, and SpO2",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["When you decide your patient needs a treatment, you must ensure your treatment had the intended outcomes. In this case, after applying oxygen, you want to check to make sure his SpO2 and RR have improved. If not, you will want to reflect on why you did not see the expected improvements? Did you select an incorrect intervention? Do you need to escalate your therapies? Are you performing the intervention correctly?"],
          feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed before you move on to your secondary survey. Repeat your exam and check vitals (SpO2) to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-ventilation-technique-bag-valve-mask"
          /* contraindicated intervention */
          ,
          label: "Bag valve mask",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal cannula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed ventilatory support in addition to oxygenation",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-occlusive-dressing"
          /* contraindicated intervention */
          ,
          label: "Occlusive dressing",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["The patient did not have a penetrating chest wound."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-pleural-decompression"
          /* contraindicated intervention */
          ,
          label: "Needle decompression",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient had a pneumothorax but did not have a tension pneumothorax. Specifically, he had no signs of cardiac obstruction (hypotension, hypoperfusion of the extremities, JVD). While a tension pneumothorax requires needle decompression to treat and prevent obstruction shock, a simple pneumothorax does not. The patient should be continuously monitored, because a simple pneumothorax has the potential to turn into a tension pneumothorax."],
          examine: true,
          prompts: "Thought a simple pneumothorax requires needle decompression; Thought the patient had a tension pneumothorax",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "circulation",
        label: "Assess the patient's circulation",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Evaluate the patient's pulse and skin to assess the patient for shock.  Be sure to also perform a gross blood sweep.", "You would have noticed that your patient had a strong, regular pulse and mild tachycardia."],
        feedbackOutOfOrder: ["All unconscious patients should have a pulse check before starting the ABCs. If the patient is pulseless, you will start high-quality CPR immediately."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "pulse-checks",
          label: "check pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["First check for a radial pulse. However, if you don't feel one, you want to check a carotid pulse to determine if the patient is truly pulseless or if distal pulses are weak because of another reason (most frequently because of shock)."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-pulse-rate",
            label: "rate",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Checking this patient's pulse rate would have revealed that he was tachycardic. A significantly elevated or depressed pulse rate can suggest shock or respiratory failure."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-rhythm",
            label: "rhythm",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["While this patient's heart had a regular rhythm, remember that an irregular rhythm can suggest impending cardiac arrest or arrhythmia."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-quality",
            label: "quality",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["A patient in shock may have weak pulses, especially distally. This patient had normal distal pulses."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "checks-skin",
          label: "checks skin",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-skin-color",
            label: "color",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Pallor and cyanosis are signs of inadequate oxygenation and may be caused by shock or respiratory failure. This patient had pink skin."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-temperature",
            label: "temperature",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["While cold skin suggests decompensated shock, a patient with warm skin, like this patient, may be hemodynamically stable or they may be in compensated shock."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-condition",
            label: "condition",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["This patient had diaphoretic skin, which in this case is non-specific, but should prompt you to think about shock."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "assess-major-bleeding",
          label: "Perform a gross blood sweep",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A gross blood sweep, which was negative in this patient, will help you identify any life-threatening bleeding you may have missed earlier when forming your general impression."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-control-severe-bleeding-technique-direct-pressure"
        /* contraindicated intervention */
        ,
        label: "Direct pressure",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-tourniquet"
        /* contraindicated intervention */
        ,
        label: "Tourniquet",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-2nd-tourniquet"
        /* contraindicated intervention */
        ,
        label: "Second tourniquet",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-pack-wound-with-gauze"
        /* contraindicated intervention */
        ,
        label: "Pack wound with gauze or hemostatic gauze",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-pressure-bandage"
        /* contraindicated intervention */
        ,
        label: "Pressure dressing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-load-and-go"
        /* contraindicated intervention */
        ,
        label: "Load and go due to uncontrolled bleeding.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "transport-decision",
        label: "Make appropriate transport decisions based on your findings so far",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your ABCs and evaluation for life threats and level of consciousness will dictate where you transfer your patient.", "Because of the patient's tachypnea and mechanism of injury, you choose to transfer the patient to the nearby Level 1 trauma center."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "decision-is-load-and-go",
          label: "Determine that this is a critical patient",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient has a pneumothorax and is requiring O2 to maintain a normal SpO2. This is a patient who could deteriorate quickly so you want to make sure he gets to a hospital quickly."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: true,
          prompts: "didn't realize this was a critically ill patient; felt this patient should be further stabilized on site prior to transfer",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-transport",
          label: "Decide where and how to transport the patient to definitive care.",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: ["Initial transport decisions should be made following the 'Primary Survey' (ABCs) because that is when the provider decides whether the patient can be further stabilized on scene or taken directly to a hospital in a 'load and go' scenario. The secondary assessment is only performed on scene if the situation is NOT a 'load and go.' Making transport decisions early is especially important if you are calling for an air ambulance to account for the time it takes for them to arrive."],
          feedbackErrors: [""]
          /*"This patient should be evaluated at the Level I trauma center that is 12 minutes away, where they can provide definitive care for his injuries. The need for a Level 1 trauma center is indicated by the mechanism of injury--namely, a motorcycle crash > 20 mph and fall after a 15-ft jump."*/
          ,
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-call-for-helicopter"
          /* contraindicated intervention */
          ,
          label: "Call for air ambulance",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Air ambulance was not available."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "trauma-expose",
        label: "Trauma expose the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Without exposing your patient, your head-to-toe exam may be hindered and you could miss an important exam finding."],
        feedbackOutOfOrder: ["It is important expose your patient to ensure that your secondary survey can be performed efficiently -- especially in trauma scenarios where there may be more unknown injuries. Exposing the patient allows the provider to more carefully examine the patient during assessment."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "history-taking",
      label: "Obtain or direct a partner to obtain a patient history",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["Vital signs will help you decide how to manage your patient, as will a history. Even if you cannot obtain a history from the patient directly, you should still try to get as much information as you can (e.g., from a bystander)."],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-obtains-vitals",
        label: "Baseline vital signs",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Baseline vitals are critical; they will help you assess, manage, and continue to monitor your patient.", "You would have found that this patient was tachycardic, tachypneic, and hypoxic on room air, prompting you to think about possible causes for these symptoms (such as pain, pneumothorax, hemothorax, shock)."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-attempt-obtain-sample",
        label: "SAMPLE (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Take an efficient but thorough history from the patient or the witnesses: symptoms, allergies, medications, past medical history, last oral intake, events preceding.", "You would have learned that the patient was thrown from his bike after landing a 15-foot jump, landing on his back 20 feet away. You also learn that he has a history of a right forearm fracture 2 years ago but otherwise has no significant past medical history."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-obtain-OPQRST",
        label: "OPQRST (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Assess the patient's pain: in this case the patient reports 9/10 pain in his right wrist and in his left chest and shoulder. That started when he was thrown from his bike."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "secondary-assessment",
      label: "Perform a Secondary Survey (rapid trauma assessment)",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["The Secondary Survey is a thorough exam of your patient to ensure you have a complete understanding of what is going on and how you need to manage your patient."],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "head",
        label: "examine the patient's head",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-and-palpates-skull",
          label: "Inspect and palpate the scalp and skull",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-inspects-facial-bones",
          label: "Inspect and palpate the facial bones",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-eyes",
          label: 'Inspect the eyes for PERRLA and bruising ("raccoon eyes")',
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Abnormal eye movement or pupils, which this patient fortunately did not have, suggest intracranial injury and should prompt you to rapidly transfer your patient to a trauma center.", "Additionally, bruising around the eyes may be caused by basilar skull fracture, though this aspect of the exam was normal in this patient."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [
          /* subActions used for analysis but not for listing as bullet points
                               summary of combined subActions' statuses will be in "inspect-eyes" status */
          {
            id: "inspects-eyes-PERRLA",
            //an example of needing to bottom out at a defined interface id
            feedbackAbsent: ["Abnormal eye movement or pupils, which this patient fortunately did not have, suggest intracranial injury and should prompt you to rapidly transfer your patient to a trauma center."],
            subActions: []
          }, {
            id: "inspects-eyes-racoon",
            feedbackAbsent: ["Bruising around the eyes may be caused by basilar skull fracture, though this aspect of the exam was normal in this patient."],
            subActions: []
          }]
        }, {
          id: "inspects-ears",
          label: 'Inspect the ears for blood, other fluids, and bruising ("battle signs")',
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Although not found in this case, bleeding from the ear may be indicative of a basilar skull fracture and bruising behind the ear suggests a basilar skull fracture (Battle's sign)."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-ears-blood",
            feedbackAbsent: ["Although not found in this case, bleeding from the ear may be indicative of a basilar skull fracture."],
            subActions: []
          }, {
            id: "inspects-ears-bruising",
            feedbackAbsent: ["Although not found in this case, bruising behind the ear suggests a basilar skull fracture (Battle's sign)."],
            subActions: []
          }]
        }, {
          id: "inspects-nose-secretions",
          label: "Inspect the nose for blood and other fluids",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient had no drainage from the nose but consider CSF leak from a basilar skull fracture if you see clear drainage."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-mouth",
          label: "Inspect the mouth for blood, other secretions, and obstructions",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If the patient had had secretions or blood in the mouth, you would have needed to apply suction to clear the airway."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-mouth-fluids",
            feedbackAbsent: ["If the patient had had secretions or blood in the mouth, you would have needed to apply suction to clear the airway."],
            subActions: []
          }, {
            id: "inspects-mouth-obstructions"
            /* no feedback in sheet for this node so repeated the one above */
            ,
            feedbackAbsent: ["If the patient had had secretions or blood in the mouth, you would have needed to apply suction to clear the airway."],
            subActions: []
          }]
        }]
      }, {
        id: "neck",
        label: "examine the patient's neck",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-neck-injury",
          label: "injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-tracheal-deviation",
          label: "tracheal deviation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, tracheal deviation suggests unequal intrathoracic pressure (for example, a pneumothorax). The trachea will be deviated away from the side with increased pressure."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-JVD",
          label: "jugular venous distension (JVD)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember,  JVD suggests that the heart is not adequately pushing out blood. Consider obstructive processes like a tension pneumothorax or hemothorax."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-stepoffs",
          label: "step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, a palable step-off suggests a fracture."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "chest",
        label: "examine the patient's chest",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-check-breath-sounds",
          label: "Listen for breath sounds",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The presence and quality of breath sounds can clue you into underlying problems (e.g., pneumothorax, asthma, fluid build-up in the lungs).", "This patient had diminished sounds on the left with crepitus, suggesting pneumothorax."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-shoulders",
          label: "Inspect and palpate shoulders",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-clavicles",
          label: "Inspect and palpates clavicles",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-anterior-thorax",
          label: "Inspect and palpate anterior thorax for injury, crepitation, and paradoxial motion or flail segments",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The patient had some left-sided crepitus, suggesting that there is air under the skin, likely from an underlying lung injury, namely a pneumothorax.", "The patient had symmetric movement of his chest. Recall that paradoxical chest wall motion suggests flail chest, where multiple rib fractures lead to an unstable portion of the chest wall."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-chest-injury"
            /* no feedback in excel sheet */
            ,
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-palpates-anterior-thorax-crepitation",
            feedbackAbsent: ["The patient had some left-sided crepitus, suggesting that there is air under the skin, likely from an underlying lung injury, namely a pneumothorax.", "The patient had symmetric movement of his chest. Recall that paradoxical chest wall motion suggests flail chest, where multiple rib fractures lead to an unstable portion of the chest wall."],
            subActions: []
          }, {
            id: "inspects-anterior-thorax-paradoxical-motion",
            feedbackAbsent: ["The patient had symmetric movement of his chest. Recall that paradoxical chest wall motion suggests flail chest, where multiple rib fractures lead to an unstable portion of the chest wall."],
            subActions: []
          }]
        }]
      }, {
        id: "abdomen-pelvis",
        label: "examine the patient's abdomen",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-abdomen-injury",
          label: "inspect and palpate for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-distension",
          label: "inspect and palpate for distension",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A distended abdomen suggests trauma and internal bleeding. Fortunately, the patient's abdominal exam was normal."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-rigidity",
          label: "inspect and palpate for rigidity",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A rigid abdomen suggests trauma and internal bleeding. Fortunately, the patient's abdominal exam was normal."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "assess-pelvis",
        label: "examine the patient's pelvis",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-checks-pelvis",
          label: "Inspect and compress the pelvis",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Be sure to do a thorough exam of the pelvis as the pelvis can be a source of life-threatening bleeding. Fortunately, the patient's pelvis exam was normal."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-genitalia-perineum",
          label: "Inspect the genitalia/perineum for blood, other fluids.",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "extremities",
        label: "examine the patient's upper and lower extremities",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-extremities-injury",
          label: "Inspect and palpate each extremity for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-injury",
            subActions: []
          }, {
            id: "inspects-left-arm-injury",
            subActions: []
          }, {
            id: "inspects-right-leg-injury",
            subActions: []
          }, {
            id: "inspects-left-leg-injury",
            subActions: []
          }]
        }, {
          id: "inspects-extremities-pulse",
          label: "Inspect and palpate each extremity for pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Extremity pulses may be weak or non-palpable if your patient is in shock. This patient had normal extremity pulses"],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-pulse",
            feedbackAbsent: ["Extremity pulses may be weak or non-palpable if your patient is in shock. This patient had normal extremity pulses"],
            subActions: []
          }, {
            id: "inspects-left-arm-pulse",
            feedbackAbsent: ["Extremity pulses may be weak or non-palpable if your patient is in shock. This patient had normal extremity pulses"],
            subActions: []
          }, {
            id: "inspects-right-leg-pulse",
            feedbackAbsent: ["Extremity pulses may be weak or non-palpable if your patient is in shock. This patient had normal extremity pulses"],
            subActions: []
          }, {
            id: "inspects-left-leg-pulse",
            feedbackAbsent: ["Extremity pulses may be weak or non-palpable if your patient is in shock. This patient had normal extremity pulses"],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-motor-function",
          label: "Inspect and palpate each extremity for motor function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-motor-ability",
            feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
            subActions: []
          }, {
            id: "inspects-left-arm-motor-ability",
            feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
            subActions: []
          }, {
            id: "inspects-right-leg-motor-ability",
            feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
            subActions: []
          }, {
            id: "inspects-left-leg-motor-ability",
            feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-sensory-function",
          label: "Inspect and palpate each extremity for sensory function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }, {
            id: "inspects-left-arm-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }, {
            id: "inspects-right-leg-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }, {
            id: "inspects-left-leg-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }]
        }]
      }, {
        id: "posterior",
        label: "examine the patient's posterior thorax, lumbar, and buttocks",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["You will need a partner to help you roll the patient safely in order to do a thorough exam of the posterior thorax, lumbar, and buttocks."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-palpates-posterior",
          label: "inspect and palpate the posterior for injury, crepitation and step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Crepitation, which the patient did not have, would suggest underlying injury. A palpable step-off, which the patient did not have, would suggest a fracture."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-posterior-other-injury"
            /* no feedback in excel sheet */
            ,
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-posterior-step-offs",
            feedbackAbsent: ["A palpable step-off, which the patient did not have, would suggest a fracture."],
            subActions: []
          }]
        }]
      }]
    }, {
      id: "Perform ongoing patient assessment and management",
      label: "Continue to provide adequate prehospital care until arriving at the receiving faciliaty",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [""],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "Manage non-life-threatening injuries",
        label: "Manage non-life-threatening injuries before transferring the patient to an immobilization device, including: splint wrist and sling shoulder",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Splint the patient's wrist and apply a sling to his injured shoulder before transferring him to an immobilization device."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [{
          id: "intv-splint-fracture",
          feedbackAbsent: ["Splint the patient's wrist before transferring him to an immobilization device."],
          subActions: []
        }, {
          id: ["intv-sling"],
          feedbackAbsent: ["Apply a sling to the patient's injured shoulder before transferring him to an immobilization device."],
          subActions: []
        }]
      }, {
        id: "intv-place-on-immobilization-device",
        label: "Placing the patient on an immobilization device",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["An immobilization device (e.g., long backboard, vacuum mattress) maintains spinal alignment for transfer to the stretcher. This patient requires full spinal immobilization due to his mechanism of injury.  Failure to fully immobilize this patient could lead to further spinal injury."],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["Full spinal immobilization is required and should be maintained throughout transfer to the ambulance and transport to the care facility, due to the mechanism of injury and high likelihood of spinal injury."],
        examine: true,
        prompts: "Thought cervical collar was adequate; Did not know how to transfer patient while maintaining spinal stability",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-spinal-immobilization-technique-attach-cid",
        label: "Attach CID to further prevent spinal motion",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Once the patient is transferred onto a long backboard or other spinal immobilization device, the CID should be utilized to maintain cervical spine precautions. This will reduce cervical motion and prevent further injury."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "Reassess the patient",
        label: "Reassess the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change. This includes repeating the primary survey, secondary survey, and vital signs. A critically ill patient should be reassessed more frequently to ensure he or she is still stable--approximately every 5 minutes."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "reassess-vital-signs",
          label: "Recheck vital signs every 5 minutes",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Vitals should be reassessed after every intervention and every clinical change, and a critically ill patient should be reassessed more frequently to ensure he or she is still stable.", "If you had reassessed the patient's vitals after administering O2, you would've seen an improvement in his respiratory rate and his SpO2."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-primary-survey",
          label: "Repeat the Primary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change, which includes the primary survey. For example, a patient with a neck injury whose breathing was initially non-labored may develop stridor as the airway becomes swollen."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-secondary-survey",
          label: "Repeat the Secondary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change, which includes your secondary survey. For example, a patient may lose their pulses if you initally failed to notice and treat a source of hemorrhage."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-control-shock-technique-keep-patient-warm"
        /* Collin: can you list vertically the items on the list in the field "label"? */
        ,
        label: "Keep the patient warm, using some of the following methods: (1) apply heat packs to the patient's groin or armpits, (2) remove wet clothing, (3) cover the patient with blankets, (4) turn the heat up in the ambulance.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["This patient is hypotensive with a fast heart rate, suggesting possible shock. Patients in shock have trouble maintaining their body temperatures, so they should be kept warm. It is important to keep this patient warm because hypothermia can cause additional problems or worsening of the patient's current problems, including worsening hypotension, arrhythmias, or even cardiac arrest."],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["You could keep the patient warm by removing his wet swimsuit, applying blankets, applying heatpacks to his armpits or groin, and turning up the heat in the air ambulance."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-establish-iv",
        label: "Establish at least one large bore IV en route",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["All trauma patient should have at least one, ideally two, large-bore IVs placed, even if they do not require fluid resuscitation."],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["With a critical patient, you should ideally establish two large bore IV's while en route to the receiving facility, so as not to delay transfer to definitive care.  While this patient does not require fluid resuscitation at this time, you want to ensure you are prepared should this change."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-prepare-administer-pnv-medications-and-contact-mc"
        /*Unnecessary intervention */
        ,
        label: "Administer pain medication en route if time allows and deemed necessary, with approval from Medical Command.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["A conscious patient with a 9/10 pain level may benefit from analgesia. Fentanyl at 1 mcg/kg (per protocol) likely would have minimal effects -- if any -- on his respiratory drivet.  However, full spinal immobilization and administering life-saving interventions would take priority over starting an IV and administering pain medications."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [{
          id: "intv-prepare-and-administer-pain-nausea-vomiting-medications",
          label: "Prepare and administer medications",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A conscious patient with a 9/10 pain level may benefit from analgesia. Fentanyl at 1 mcg/kg (per protocol) likely would have minimal effects -- if any -- on his respiratory drivet.  However, full spinal immobilization and administering life-saving interventions would take priority over starting an IV and administering pain medications."],
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-contact-medical-command"
          /* No feedback provided */
          ,
          label: "Contact Medical Command",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          subActions: []
        }]
      }, {
        id: "reassess-med-admin",
        label: "Checks that pain medications are working.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-contact-receiving-facility",
        label: "Provide a patient report and ETA to the receiving facility",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["The hospital requires notification for all incoming patients 5 -15 prior to arrival, which is especially important for critical patients as the receiving team needs time to prepare equipment and space."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-shock-technique-administer-iv-boluses"
        /* unnecessary intervention */
        ,
        label: "IV fluid resuscitation",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["This patient is not hypotensive and does not require fluid resuscitation. You should establish IV access, however, and should this change, you would be prepared to start fluids."],
        examine: true,
        prompts: "thought that hypotension should be treated with fluid boluses regardless of etiology",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-apply-sterile-dressings"
        /* contraindicated intervention */
        ,
        label: "Apply sterile dressings",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have any signifcant injuries to the skin."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-prepare-amputation-for-transport"
        /* contraindicated intervention */
        ,
        label: "Prepare amputated part for transport",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have an amputation."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-prepare-and-administer-sedative"
        /* contraindicated intervention */
        ,
        label: "Prepare and administer medications",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["This patient does not require sedation."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }]
  }
};

/***/ }),

/***/ 6220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B5CA_PhaseIE": () => (/* binding */ B5CA_PhaseIE)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);
/* Data for scenario C5CA phase IE 
This data structure holds all the information to create the slides to present during the IE phase.
It mirrors the tree structure that is presented in the Excel file. All nodes in the tree are called actions whether 
they are assessments or interventions. Subactions are the children of the actions in the tree.
Fields:
id: identifies the action-node in the tree. It is a string since it is unique.
label: text for the action as it will appear on the slide
type: indicates whether the action is Required, Contraindicated, Unnecessary, Irrelevant, Optional, Alternative.
    Required, it will be listed in the left side of the slide so that students are asked if they performed it.
    Contraindicated: it will be listed on the right side under a list of contraindicated actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Unnecessary: it will be listed on the right side under a list of unnecessary actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Irrelevent: it will be listed on the right side under a list of irrelevant actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Optional: it will be accepted as correct if performed. We are considering it the same as Unnecessary.
    Alternative: will be used for those interventions that can be performed as alternative to required ones. A field
    AlternativeToIntv will be added to indicate the intervention to which it is an alternative.
AlternativeToIntv: indicates the intervention for which the current one is an alternative. It will only have a value if
the type is Alternative.
feedbackAbsent: feedback given if the action was no performed
feedbackOutOfOrder: feedback given if the action was done late (e.g., if the action is Scene size-up and it was done 
    after Primary Survey)
feedbackError: feedback if the action was performed incorrectly (e.g., wrong ventilation rate)
examine: boolean to indicate if this Action needs to be examined (phase E)
prompts: prompts to be included in question headers in phase E, to hint on how to reflect
subActionsList: boolean that indicates whether the subActions need to be listed as bullet points on the slide. If they
    don't need to be listed it is usually because they have been grouped however, the subActions still need to be 
    included in the subActions field because they are used by the analysis to give a summary of their status.
subActions: array with the corresponding subactions (to form the tree)
*/

const B5CA_PhaseIE = {
  Action: {
    id: "top",
    label: "fully assess and manage the patient in this scenario",

    /* the way it will appear on the slide */
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,

    /*indicates whether the action was Required, Contraindicated, Unnecessary, or Irrelevant" */
    feedbackAbsent: ["Your log indicates you didn't complete any of these assessment or managment goal. Please restart the scenario and try again"],

    /*feedback if the action was not performed*/
    feedbackOutOfOrder: [""],

    /*feedback if the action was done late (e.g., if the action is Scene Size-up 
    and it was done after Primary Survey)*/
    feedbackErrors: [""],

    /*feedback if the action was performed incorrectly (e.g. wrong Ventilation rate)*/
    examine: false,

    /* boolean to indicate if this Action needs to be examined (phase E) */
    prompts: "",

    /* prompts to the included in question in phase E to hint on how to reflect */
    subActionsList: true,

    /* boolean that indicates if subActions need to be listed as bullet points on slide */
    subActions: [
    /*array with the corresponding subactions (to form the tree)*/
    {
      id: "scene-size-up",
      label: "Put on BSI and do a complete Scene Size-up before entering the scene",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [""],
      feedbackOutOfOrder: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself.", "Your scene size up also gives you a big-picture view of what is going on before you even begin examining the patient. This includes determining the mechanism of injury and number of patients, requesting additional help if necessary, and considering stabilization of spine."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-BSI",
        label: "Apply BSI",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-scene-safety",
        label: "Determine the scene/situation is safe",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-injury-mechanism",
        label: "Determine the mechanism of injury (MOI) or nature of illness (NOI)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-num-patients",
        label: "Determine the number of patients",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-requests-additional-help",
        label: "Request additional help if necessary",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-considers-stabilize-spine",
        label: "Consider stabilization of spine",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "primary-survey",
      label: "Perform a Primary Survey and manage all identified life threats",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [""],
      feedbackOutOfOrder: ["You should have started your Primary Survey after the Scene Size-up and completed it before starting the Secondary Survey. Only interrupt your assessment to control life-threats: (1) Conditions that comprimise a patent airway (2) Conditions that compromise breathing or respirations, such as a tension pneumothorax, (3) Conditions that compromise circulation, such as severe bleeding, (4) Cardiac arrest, and any  other potentially life threatening injuries or conditions.  Your patient's condition will deteriorate if these conditions are not addressed before continuing on with your assessment and history taking."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "general-impression",
        label: "Conduct an Initial Assessment",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: ["While you may be tempted to jump straight into your ABCs, apparent life threats (ie. uncontrolled bleeding) should be addressed first, as they can cause a patient to deteriorate quickly. Also, be sure to assess the patient's level of consciousness as an unconscious patient will need a pulse check first to ensure he or she does not require CPR."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assess-patient-condition",
          label: "State or request a general impression",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-loc",
          label: "Assess the patient's level of consciousness",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-life-threats",
          label: "Determine the chief complaint/apparent life-threats",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage a potential head or spinal injury",
        label: "Manage a potential head or spinal injury",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: true,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "intv-spinal-immobilization-technique-manual-c-spine",
          label: "Apply (or direct a partner to apply) manual c-spine stabilization",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-spinal-immobilization-technique-cervical-collar",
          label: "Apply an appropriately sized cervical collar",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "airway",
        label: "Assess the patient's airway",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: ["If your patient is conscious, you should examine the airway before breathing and circulation. If a patient is unconscious, you should assess the pulse first to evaluate for possible cardiac arrest, then go through your ABCs."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "airway-is-open",
          label: "Check if the airway is patent",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "airway-has-intact-physical-structures",
          label: "Check if the airway has intact physical structures",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }
        /*{
          id: "intv-open-airway-method-head-tilt", /*contraindicated intervention 
          label: "Head tilt chin lift",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A head-tilt chin lift is contraindicated for a patient with suspected c-spine injury as tilting the head could cause further damage to the neck. You should have used a modified jaw thrust to check this patient's airway."],
          examine: true,
          prompts: "Did not realize patient had a potential cervical spine injury; Did not realize that chin tilt could further injure the spine",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-manual-finger-sweep", /* contraindicated intervention 
          label: "Manual (finger sweep)",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, a blind finger sweep is contraindicated as it could lodge a foreign body deeper into the airway. Further, there is no evidence of foreign body in this patient's mouth."],
          examine: true,
          prompts: "",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-magill-forceps-assisted", /* contraindicated intervention 
          label: "Magill forceps assisted removal",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, there is no evidence of a foreign body in this patient's mouth."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-heimlich-maneuver", /* contraindicated intervention 
          label: "Heimlich Maneuver",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object so the Heimlich maneuver is not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-back-blows-and-chest-thrusts", /* contraindicated intervention 
          label: "Back blows and chest thrusts",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object so back blows and chest thrusts are not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-oropharyngeal-airway", /* contraindicated intervention 
          label: "Oropharyngeal airway (OPA)",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient requires only a nasal canula or non-rebreather mask. An airway adjunct is unnecessary and would likely be refused by this conscious patient."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-orotracheal-intubation", /* contraindicated intervention 
          label: "Orotracheal intubation",
          type: ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-nasotracheal-intubation", /* contraindicated intervention 
          label: "Nasotracheal intubation",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-insert-advanced-airway", /* contraindicated intervention 
          label: "Insert advanced/rescue airway",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-rapid-sequence-intubation", /* contraindicated intervention 
          label: "Rapid-sequence intubation",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["RSI is not in the paramedic's scope of practice in Pennsylvania. This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-sedation-assisted-intubation", /* contraindicated intervention 
          label: "Sedation-assisted intubation",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with oxygen administered via a nasal canula or non-rebreather mask. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-needle-cricothyrotomy", /* contraindicated intervention 
          label: "Needle cricothyrotomy",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: [],
        },
        {
          id: "intv-surgical-cricothyrotomy", /* contraindicated intervention 
          label: "Surgical cricothyrotomy",
          type: ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothyrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: [],
        },*/
        ]
      }, {
        id: "breathing",
        label: "Assess the patient's breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "breathing-checks-rate",
          label: "rate",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-rhythm",
          label: "rhythm",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-quality",
          label: "quality",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage inadequate breathing",
        label: "Manage inadequate breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "intv-supplemental-oxygen-NRM-OR-NPA+BVM",
          label: "administer concentrated oxygen via a non-rebreather mask or, alternatively, insert an NPA and administer BVM assisted ventilation to a target SpO2 of 95-99%",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "intv-supplemental-oxygen-device-non-rebreather-mask",
            label: "administer concentrated oxygen via a non-rebreather mask",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "intv-manage-breathing-NPA-and-BVM",
            label: "insert an NPA and administer BVM assisted ventilation to a target SpO2 of 95-99%",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ALT,
            alternativeToIntv: "intv-supplemental-oxygen-device-non-rebreather-mask",
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: [{
              id: "intv-nasopharyngeal-airway",
              label: "Insert a basic airway adjunct",
              type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
              feedbackAbsent: [""],
              feedbackOutOfOrder: [""],
              feedbackErrors: [""],
              examine: false,
              prompts: "",
              subActionsList: false,
              subActions: []
            }, {
              id: "intv-ventilation-technique-bag-valve-mask",
              label: "BVM assisted ventilation to a target SpO2 of 95-99%",
              type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
              feedbackAbsent: [""],
              feedbackOutOfOrder: [""],
              feedbackErrors: [""],
              examine: false,
              prompts: "",
              subActionsList: false,
              subActions: []
            }]
          }]
        }, {
          id: "intv-pleural-decompression",
          label: "identify that this patient has a tension pneumothorax and perform pleural decompression appropriately by inserting a large bore needle between ribs 2 and 3 mid-clavicular or between ribs 5 and 6 midaxillary on the right side of the chest",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        },
        /*{
          id: "", /* no id provided
          label: "Listen for a rush of air after decompressing the patient's lung",
          type: ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [],
        },*/
        {
          id: "intv-occlusive-dressing",
          label: "Occlusive dressing",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "reassess-AB",
          label: "Check that airway/breathing interventions are working by requesting relevant vitals--in particular, BP, HR, and SpO2",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "circulation",
        label: "Assess the patient's circulation",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: ["All unconscious patients should have a pulse check before starting the ABCs. If the patient is pulseless, you will start high-quality CPR immediately."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "pulse-checks",
          label: "check pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-pulse-rate",
            label: "rate",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-rhythm",
            label: "rhythm",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-quality",
            label: "quality",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "checks-skin",
          label: "checks skin",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-skin-color",
            label: "color",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-temperature",
            label: "temperature",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-condition",
            label: "condition",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: [""],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "assess-major-bleeding",
          label: "Perform a gross blood sweep",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      },
      /*{
        id: "intv-control-severe-bleeding-technique-direct-pressure", /* contraindicated intervention 
        label: "Direct pressure",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [],
      },
      {
        id: "intv-control-severe-bleeding-technique-tourniquet", /* contraindicated intervention 
        label: "Tourniquet",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [],
      },
      {
        id: "intv-control-severe-bleeding-technique-2nd-tourniquet", /* contraindicated intervention 
        label: "Second tourniquet",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [],
      },
      {
        id: "intv-control-severe-bleeding-technique-pack-wound-with-gauze", /* contraindicated intervention 
        label: "Pack wound with gauze or hemostatic gauze",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [],
      },
      {
        id: "intv-control-severe-bleeding-technique-pressure-bandage", /* contraindicated intervention 
        label: "Pressure dressing",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [],
      },
      {
        id: "intv-control-severe-bleeding-technique-load-and-go", /* contraindicated intervention 
        label: "Load and go due to uncontrolled bleeding.",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [],
      },*/
      {
        id: "transport-decision",
        label: "Make appropriate transport decisions based on your findings so far",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "decision-is-load-and-go",
          label: "Determine that this is a critical patient",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-transport",
          label: "Decide to transport this patient to the Level 2 trauma center by ground ambulance",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: ["Initial transport decisions should be made following the 'Primary Survey' (ABCs) because that is when the provider decides whether the patient can be further stabilized on scene or taken directly to a hospital in a 'load and go' scenario. The secondary assessment is only performed on scene if the situation is NOT a 'load and go.' Making transport decisions early is especially important if you are calling for an air ambulance to account for the time it takes for them to arrive."],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-call-for-helicopter",

          /* contraindicated intervention */
          label: "Call for air ambulance",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Air ambulance was not available."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "trauma-expose",
        label: "Trauma expose the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: ["It is important expose your patient to ensure that your secondary survey can be performed efficiently -- especially in trauma scenarios where there may be more unknown injuries. Exposing the patient allows the provider to more carefully examine the patient during assessment."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "history-taking",
      label: "Obtain or direct a partner to obtain a patient history",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [""],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-obtains-vitals",
        label: "Baseline vital signs",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-attempt-obtain-sample",
        label: "SAMPLE (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-obtain-OPQRST",
        label: "OPQRST (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "secondary-assessment",
      label: "Perform a Secondary Survey (rapid trauma assessment)",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [""],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "head",
        label: "examine the patient's head",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-and-palpates-skull",
          label: "Inspect and palpate the scalp and skull",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-inspects-facial-bones",
          label: "Inspect and palpate the facial bones",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-eyes",
          label: "Inspect the eyes for PERRLA and bruising (\"raccoon eyes\")",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [
          /* subActions used for analysis but not for listing as bullet points
             summary of combined subActions' statuses will be in "inspect-eyes" status */
          {
            id: "inspects-eyes-PERRLA",
            //an example of needing to bottom out at a defined interface id
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-eyes-racoon",
            feedbackAbsent: [""],
            subActions: []
          }]
        }, {
          id: "inspects-ears",
          label: "Inspect the ears for blood, other fluids, and bruising (\"battle signs\")",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-ears-blood",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-ears-bruising",
            feedbackAbsent: [""],
            subActions: []
          }]
        }, {
          id: "inspects-nose-secretions",
          label: "Inspect the nose for blood and other fluids",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-mouth",
          label: "Inspect the mouth for blood, other secretions, and obstructions (teeth, foreign objects, etc.)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-mouth-fluids",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-mouth-obstructions",
            feedbackAbsent: [""],
            subActions: []
          }]
        }]
      }, {
        id: "neck",
        label: "examine the patient's neck",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-neck-injury",
          label: "injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-tracheal-deviation",
          label: "tracheal deviation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-JVD",
          label: "jugular venous distension (JVD)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-stepoffs",
          label: "step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "chest",
        label: "examine the patient's chest",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-check-breath-sounds",
          label: "Listen for breath sounds",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-shoulders",
          label: "Inspect and palpate shoulders",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-clavicles",
          label: "Inspect and palpates clavicles",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-anterior-thorax",
          label: "Inspect and palpate anterior thorax for injury, crepitation, and paradoxial motion (or flail segments)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-chest-injury",

            /* no feedback in excel sheet */
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-palpates-anterior-thorax-crepitation",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-anterior-thorax-paradoxical-motion",
            feedbackAbsent: [""],
            subActions: []
          }]
        }]
      }, {
        id: "abdomen-pelvis",
        label: "examine the patient's abdomen",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-abdomen-injury",
          label: "inspect and palpate for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-distension",
          label: "inspect and palpate for distension",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-rigidity",
          label: "inspect and palpate for rigidity",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "assess-pelvis",
        label: "examine the patient's pelvis",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-checks-pelvis",
          label: "Inspect and compress the pelvis",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-genitalia-perineum",
          label: "Inspect the genitalia/perineum for blood and other fluids.",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "extremities",
        label: "examine the patient's upper and lower extremities",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-extremities-injury",
          label: "Inspect and palpate each extremity for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-injury",
            subActions: []
          }, {
            id: "inspects-left-arm-injury",
            subActions: []
          }, {
            id: "inspects-right-leg-injury",
            subActions: []
          }, {
            id: "inspects-left-leg-injury",
            subActions: []
          }]
        }, {
          id: "inspects-extremities-pulse",
          label: "Inspect and palpate each extremity for pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-pulse",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-left-arm-pulse",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-right-leg-pulse",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-left-leg-pulse",
            feedbackAbsent: [""],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-motor-function",
          label: "Inspect and palpate each extremity for motor function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-motor-ability",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-left-arm-motor-ability",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-right-leg-motor-ability",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-left-leg-motor-ability",
            feedbackAbsent: [""],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-sensory-function",
          label: "Inspect and palpate each extremity for sensory function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-sensory-function",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-left-arm-sensory-function",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-right-leg-sensory-function",
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-left-leg-sensory-function",
            feedbackAbsent: [""],
            subActions: []
          }]
        }]
      }, {
        id: "posterior",
        label: "examine the patient's posterior thorax, lumbar, and buttocks",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-palpates-posterior",
          label: "inspect and palpate the posterior for injury, crepitation and step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-posterior-other-injury",

            /* no feedback in excel sheet */
            feedbackAbsent: [""],
            subActions: []
          }, {
            id: "inspects-posterior-step-offs",
            feedbackAbsent: [""],
            subActions: []
          }]
        }]
      }]
    }, {
      id: "Perform ongoing patient assessment and management",
      label: "Continue to provide adequate prehospital care until arriving at the receiving faciliaty",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [""],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "intv-apply-sterile-dressings",
        label: "Apply sterile dressings to lacerations over the ear and on hands",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-place-on-immobilization-device",
        label: "Place the patient on an immobilization device, optimally with CID attached, taking care not to compress puncture wounds and to move him to the ambulance with minimal spinal motion",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: true,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-spinal-immobilization-technique-attach-cid",
        label: "Attach CID to further prevent spinal motion",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "Reassess the patient",
        label: "Reassess the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "reassess-vital-signs",
          label: "Recheck vital signs every 5 minutes",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-primary-survey",
          label: "Repeat the Primary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-secondary-survey",
          label: "Repeat the Secondary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-control-shock-technique-keep-patient-warm",
        label: "keeping the patient warm, using some of the following methods: a) applying heat packs to the patient's groin or armpits, b) covering the patient with blankets, c) turning the heat up in the ambulance.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-establish-iv",
        label: "Establish at least one large bore IV en route",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-shock-technique-administer-iv-boluses",
        label: "Bolus normal saline or Lactated Ringers to a maintain BP of 90mm Hg systolic en route, if time allows",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-contact-receiving-facility",
        label: "Provide a patient report and ETA to the receiving facility",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }
      /* {
         id: "intv-prepare-amputation-for-transport", /* contraindicated intervention 
         label: "Prepare amputated part for transport",
         type: ACTION_TYPES.CONTRA,
         feedbackAbsent: [""],
         feedbackOutOfOrder: [""],
         feedbackErrors: ["The patient did not have an amputation."],
         examine: false,
         prompts: "",
         subActionsList: false,
         subActions: []
       },
       {
         id: "intv-prepare-and-administer-sedative", /* contraindicated intervention 
         label: "Prepare and administer medications",
         type: ACTION_TYPES.CONTRA,
         feedbackAbsent: [""],
         feedbackOutOfOrder: [""],
         feedbackErrors: ["This patient does not require sedation."],
         examine: false,
         prompts: "",
         subActionsList: false,
         subActions: []
       },*/
      ]
    }]
  }
};

/***/ }),

/***/ 9628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M2CA_PhaseIE": () => (/* binding */ M2CA_PhaseIE)
/* harmony export */ });
/* Bogus data for testing Collin's algorithm
I made the scenario M2CA since that scenario has some corresponding log analysis files that can be used
for testing
Ids need to be added to correspond to those in the analysis log*/
const M2CA_PhaseIE = {
  Action: {
    id: "top",
    label: "Top most node -level 0",
    feedbackAbsent: "Nothing done. Start scenario again.",

    /*feedback if the action was not performed*/
    feedbackOutOfOrder: "",

    /*feedback if the action was done late (e.g., if the action is Scene Size-up 
    and it was done after Primary Survey)*/
    feedbackError: "All wrong. Please start scenario again.",

    /*feedback if the action was performed incorrectly (e.g. wrong Ventilation rate)*/
    subActions: [
    /*array with the corresponding subactions (to form the tree)*/
    {
      id: "scene-size-up",
      label: "Child1 -level1",
      feedbackAbsent: "absent -Child1 level 1",
      feedbackOutOfOrder: "late -Child1 level 1",
      feedbackErrors: "wrong -Child1 level 1",
      subActions: [{
        id: "assess-scene-safety",
        label: "Child1 of Child1 -level 2",
        feedbackAbsent: "absent -Child1 of Child1 -level2",
        feedbackOutOfOrder: "late -Child1 of Child1 -level2",
        feedbackErrors: "wrong -Child1 of Child1 -level2",
        subActions: [],
        examine: "N",
        prompts: ""
      }, {
        id: "required-action-BSI",
        label: "Child2 of Child1 -level 2",
        feedbackAbsent: "absent -Child2 of Child1 -level 2",
        feedbackOutOfOrder: "late -Child2 of Child1 -level 2",
        feedbackErrors: "wrong -Child2 of Child1 -level 2",
        subActions: [],
        examine: "Y",
        prompts: "prompts -Child2 of Child1 -level2"
      }],
      examine: "Y",
      prompts: "prompts -Child1 level 1"
    }, {
      id: "primary-survey",
      label: "Child 2 -level1",
      feedbackAbsent: "absent -Child 2 level1",
      feedbackOutOfOrder: "late -Child 2 level1",
      feedbackErrors: "wrong -Child 2 level1",
      subActions: [{
        id: "general-impression",
        label: "Child1 of Child2 -level2",
        feedbackAbsent: "absent -Child1 of Child2 -level2",
        feedbackOutOfOrder: "late -Child1 of Child2 -level2",
        feedbackErrors: "wrong -Child1 of Child2 -level2",
        subActions: [],
        examine: "N",
        prompts: ""
      }, {
        id: "airway",
        label: "Child2 of child2 -level2",
        feedbackAbsent: "absent -Child2 of Child2 -level2",
        feedbackOutOfOrder: "late -Child2 of Child2 -level2",
        feedbackErrors: "wrong -Child2 of Child2 -level2",
        subActions: [{
          id: "airway-is-open",
          label: "Child1 of (Child2 of Child2) -level3",
          feedbackAbsent: "absent -Child1 of (Child2 of Child2) -level3",
          feedbackOutOfOrder: "late -Child1 of (Child2 of Child2) -level3",
          feedbackErrors: "wrong -Child1 of (Child2 of Child2) -level3",
          subActions: [],
          examine: "N",
          prompts: ""
        }, {
          id: "airway-is-clear-substances",
          label: "Child2 of (Child2 of Child2) -level3",
          feedbackAbsent: "absent -Child2 of (Child2 of Child2) -level3",
          feedbackOutOfOrder: "late -Child2 of (Child2 of Child2) -level3",
          feedbackErrors: "wrong -Child2 of (Child2 of Child2) -level3",
          subActions: [],
          examine: "Y",
          prompts: "prompts -Child2 of (Child2 of Child2) -level3"
        }],
        examine: "N",
        prompts: ""
      }, {
        id: "breathing",
        label: "Child3 of Child2 -level2",
        feedbackAbsent: "absent -Child3 of Child2 -level2",
        feedbackOutOfOrder: "late -Child3 of Child2 -level2",
        feedbackErrors: "wrong -Child3 of Child2 -level2",
        subActions: [],
        examine: "N",
        prompts: ""
      }],
      examine: "N",
      prompts: ""
    }, {
      id: "Manage a potential head and/or spinal injury",
      label: "Child 3 -level1",
      feedbackAbsent: "absent -Child 3 level1",
      feedbackOutOfOrder: "late -Child 3 level1",
      feedbackErrors: "wrong -Child 3 level1",
      subActions: [{
        id: "intv-spinal-immobilization-technique-cervical-collar",
        label: "Cervical Collar",
        feedbackAbsent: "absent - cervical collar",
        feedbackOutOfOrder: "late - cervical collar",
        feedbackErrors: "wrong - cervical collar",
        subActions: [],
        examine: "Y",
        prompts: "prompts - cervical collar"
      }],
      examine: "N",
      prompts: ""
    }, {
      id: "ongoing-mgmt-plan",
      label: "Child 4 -level1",
      feedbackAbsent: "absent -Child 4 level1",
      feedbackOutOfOrder: "late -Child 4 level1",
      feedbackErrors: "wrong -Child 4 level1",
      subActions: [{
        id: "reassess-vital-signs",
        label: "Child1 of Child4 -level 2",
        feedbackAbsent: "absent -Child1 of Child4 -level2",
        feedbackOutOfOrder: "late -Child1 of Child4 -level2",
        feedbackErrors: "wrong -Child1 of Child4 -level2",
        subActions: [],
        examine: "Y",
        prompts: "prompts -Child1 of Child4 -level2"
      }, {
        id: "repeat-primary-survey",
        label: "Child2 of Child4 -level 2",
        feedbackAbsent: "absent -Child2 of Child4 -level 2",
        feedbackOutOfOrder: "late -Child2 of Child4 -level 2",
        feedbackErrors: "wrong -Child2 of Child4 -level 2",
        subActions: [],
        examine: "N",
        prompts: ""
      }],
      examine: "Y",
      prompts: "prompts -Child4 level1"
    }],
    examine: "N",

    /*Boolean that says whether the action needs to be examined*/
    prompts: ""
    /*prompts to hint the student as to how to reflect on the action*/

  }
};

/***/ }),

/***/ 8547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C5CA_PhaseIE": () => (/* binding */ C5CA_PhaseIE)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);
/* Data for scenario C5CA phase IE 
This data structure holds all the information to create the slides to present during the IE phase.
It mirrors the tree structure that is presented in the Excel file. All nodes in the tree are called actions whether 
they are assessments or interventions. Subactions are the children of the actions in the tree.
Fields:
id: identifies the action-node in the tree. It is a string since it is unique.
label: text for the action as it will appear on the slide
type: indicates whether the action is Required, Contraindicated, Unnecessary, Irrelevant, Optional, Alternative.
    Required, it will be listed in the left side of the slide so that students are asked if they performed it.
    Contraindicated: it will be listed on the right side under a list of contraindicated actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Unnecessary: it will be listed on the right side under a list of unnecessary actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Irrelevent: it will be listed on the right side under a list of irrelevant actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Optional: it will be accepted as correct if performed. We are considering it the same as Unnecessary.
    Alternative: will be used for those interventions that can be performed as alternative to required ones. A field
    AlternativeToIntv will be added to indicate the intervention to which it is an alternative.
AlternativeToIntv: indicates the intervention for which the current one is an alternative. It will only have a value if
the type is Alternative.
feedbackAbsent: feedback given if the action was no performed
feedbackOutOfOrder: feedback given if the action was done late (e.g., if the action is Scene size-up and it was done 
    after Primary Survey)
feedbackError: feedback if the action was performed incorrectly (e.g., wrong ventilation rate)
examine: boolean to indicate if this Action needs to be examined (phase E)
prompts: prompts to be included in question headers in phase E, to hint on how to reflect
subActionsList: boolean that indicates whether the subActions need to be listed as bullet points on the slide. If they
    don't need to be listed it is usually because they have been grouped however, the subActions still need to be 
    included in the subActions field because they are used by the analysis to give a summary of their status.
subActions: array with the corresponding subactions (to form the tree)
*/

const C5CA_PhaseIE = {
  Action: {
    id: "top",
    label: "fully assess and manage the patient in this scenario",

    /* the way it will appear on the slide */
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,

    /*indicates whether the action was Required, Contraindicated, Unnecessary, or Irrelevant" */
    feedbackAbsent: ["Your log indicates you didn't complete any of these assessment or managment goal. Please restart the scenario and try again"],

    /*feedback if the action was not performed*/
    feedbackOutOfOrder: [""],

    /*feedback if the action was done late (e.g., if the action is Scene Size-up 
    and it was done after Primary Survey)*/
    feedbackErrors: [""],

    /*feedback if the action was performed incorrectly (e.g. wrong Ventilation rate)*/
    examine: false,

    /* boolean to indicate if this Action needs to be examined (phase E) */
    prompts: "",

    /* prompts to the included in question in phase E to hint on how to reflect */
    subActionsList: true,

    /* boolean that indicates if subActions need to be listed as bullet points on slide */
    subActions: [
    /*array with the corresponding subactions (to form the tree)*/
    {
      id: "scene-size-up",
      label: "Put on BSI and do a complete Scene Size-up before entering the scene",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself.", "Your scene size up gives you a big-picture view of what is going on before you even begin examining the patient and includes determining the mechanism of injury and number of patients, requesting additional help if necessary, and considering stabilization of the spine.", "In this case, you would have learned that your patient has been shot multiple times, so you know that controlling bleeding will be one of your top priorities."],
      feedbackOutOfOrder: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself.", "Your scene size up also gives you a big-picture view of what is going on before you even begin examining the patient. This includes determining the mechanism of injury and number of patients, requesting additional help if necessary, and considering stabilization of spine."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-BSI",
        label: "Apply BSI",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-scene-safety",
        label: "Determine the scene/situation is safe",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-injury-mechanism",
        label: "Determine the mechanism of injury (MOI) or nature of illness (NOI)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Knowing what caused the patient's injury or illness can allow you to start developing a plan of action before you even assess your patient.", "By determining the mechanism of injury, you would have learned that your patient has been shot multiple times, so you know that controlling bleeding will be one of your top priorities."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-num-patients",
        label: "Determine the number of patients",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Usually you will have one patient, but if there is more than one you will need to plan accordingly."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-requests-additional-help",
        label: "Request additional help if necessary",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Consider the need for extra help based on number of patients, mechanism of injury, and your patient's status."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-considers-stabilize-spine",
        label: "Consider stabilization of spine",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Be sure to consider the need for spinal immobilization in this trauma patient. In this case, you have a low level of concern for a spinal injury; further, know that spinal stabilization is contraindicated in patients with penetrating abdominal wounds."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "primary-survey",
      label: "Perform a Primary Survey and manage all identified life threats",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["The primary survey is an assessment of mental status, life-threats, and the patient's ABCs. It is where you will identify and address the patient's most serious injuries.", "In this case, the Primary Survey would have revealed a patient who is lethargic, bleeding profusely from the L upper leg, and breathing rapidly."],
      feedbackOutOfOrder: ["You should have started your Primary Survey after the Scene Size-up and completed it before starting the Secondary Survey. Only interrupt your assessment to control life-threats: (1) Conditions that compromise a patent airway (2) Conditions that compromise breathing or respirations, such as a tension pneumothorax, (3) Conditions that compromise circulation, such as severe bleeding, (4) Cardiac arrest, and any  other potentially life threatening injuries or conditions.  Your patient's condition will deteriorate if these conditions are not addressed before continuing on with your assessment and history taking."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "general-impression",
        label: "Conduct an Initial Assessment",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["You should have performed an Initial Assessment: gathered a general impression, identified any apparent life threats, and determined your patient's level of consciousness.  Your Initial assessment would have revealed a patient who is lethargic and bleeding profusely from the L leg."],
        feedbackOutOfOrder: ["While you may be tempted to jump straight into your ABCs, apparent life threats (ie. uncontrolled bleeding) should be addressed first, as they can cause a patient to deteriorate quickly. Also, be sure to assess the patient's level of consciousness as an unconscious patient will need a pulse check first to ensure he or she does not require CPR."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assess-patient-condition",
          label: "State or request a general impression",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Your general impression allows you to start developing a plan of action before you even assess your patient.", "In this case, your general impression would have been of a man with multiple gunshot wounds."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-loc",
          label: "Assess the patient's level of consciousness",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The patient's level of consciousness alters how you progress through your assessment.", "The patient is lethargic with a GCS of 12. This rules out the need for immediate CPR, so you would start your primary survey with an assessment of the patient's airway."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-life-threats",
          label: "Determine the chief complaint/apparent life-threats",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If you had determined apparent life threats, you would have noticed that the patient had life-threatening bleeding from his leg that should be addressed immediately."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-spinal-immobilization-technique-manual-c-spine",
        label: "Apply (or direct a partner to apply) manual c-spine stabilization",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
        feedbackOutOfOrder: ["During trauma situations it is necessary to stabilize the c-spine before continuing as not doing so may cause further injury to the patient."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "Manage severe external bleeding",
        label: "Manage severe external bleeding",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["This patient has severe bleeding from his left upper thigh. There are large vessels in the leg (including the femoral artery) that can bleed rapidly and quickly lead to hemorrhagic shock and death. Remember, that even if you don't see significant bleeding, any significant injury to the upper leg (ex. GSW, femur fracture) has the potential to lead to hemorrhagic shock."],
        feedbackOutOfOrder: ["Severe bleeding is a life threatening injury that should be considered and dealt with prior to the rest of the ABCs. For extremity injuries, this means a tourniquet is likely needed while other injuries may require direct pressure and bandaging or an occlusive dressing (e.g., for a severe neck bleed)."],
        feedbackErrors: [""],
        examine: true,
        prompts: "Didn't realize that the patient's bleeding could be life-threatening; didn't know the best way to manage the patient's bleeding",
        subActionsList: true,
        subActions: [{
          id: "intv-control-bleeding-direct-pressure-and-tourniquet",
          label: "manage severe external bleeding by applying direct pressure and a tourniquet as far proximal to the wound as possible",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["When you recognize the patient's life-threatening bleed, the first thing you should do is apply direct pressure or direct someone else to do so.", "While the ultimate management of this patient's life-threatening bleed is surgical, it is critical that you stop the bleeding as soon as possible. To do this, you should use a tourniquet and place it as far proximally as possible."],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Be sure to place the tourniquet as far proximally to the wound as possible."],
          examine: true,
          prompts: "Didn't realize that the patient's bleeding could be life-threatening; didn't know the best way to manage the patient's bleeding was with a tourniquet",
          subActionsList: false,
          subActions: [{
            id: "intv-control-severe-bleeding-technique-direct-pressure",
            label: "manage severe external bleeding by applying direct pressure",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["When you recognize the patient's life-threatening bleed, the first thing you should do is apply direct pressure or direct someone else to do so."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "intv-control-severe-bleeding-technique-tourniquet",
            label: "manage severe external bleeding by applying tourniquet as far proximal to the wound as possible",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["While the ultimate management of this patient's life-threatening bleed is surgical, it is critical that you stop the bleeding as soon as possible. To do this, you should use a tourniquet and place it as far proximally as possible."],
            feedbackOutOfOrder: [""],
            feedbackErrors: ["Be sure to place the tourniquet as far proximally to the wound as possible."],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "check-bleeding",
          label: "Confirm that bleeding stopped and pulses are absent",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["After you place your tourniquet, you should ensure that the bleeding has stopped and check to ensure that pulses are absent. If this is not the cause, you may need a second tourniquet."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: true,
          prompts: "Thought that one tourniquet was enough; did not realize a second tourniquet could be used if necessary",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-control-severe-bleeding-technique-2nd-tourniquet",

          /* contraindicated intervention */
          label: "Second tourniquet",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You achieved hemostasis with the first tourniquet; a second tourniquet is not necessary."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-control-severe-bleeding-technique-pack-wound-with-gauze",

          /* unnecessary intervention */
          label: "Pack wound with gauze or hemostatic gauze",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-control-severe-bleeding-technique-pressure-bandage",

          /* unnecessary intervention */
          label: "Pressure dressing",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-control-severe-bleeding-technique-load-and-go",

          /* contraindicated intervention */
          label: "Load and go due to uncontrolled bleeding.",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You achieved hemostasis with the first tourniquet."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "airway",
        label: "Assess the patient's airway",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Be sure to assess the airway for patency and intact physical structures.", "You would have found this patient's airway to be patent, as evidenced by the fact that you hear him moaning in pain."],
        feedbackOutOfOrder: ["If your patient is conscious, you should examine the airway before breathing and circulation. If a patient is unconscious, you should assess the pulse first to evaluate for possible cardiac arrest, then go through your ABCs."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "airway-is-open",
          label: "Check if the airway is patent",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The first step of your airway assessment is to see if the patient's airway is open. This patient's moaning indicates he has an open airway. Signs like stridor or gasping may indicate an airway obstruction."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "airway-has-intact-physical-structures",
          label: "Check if the airway has intact physical structures",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Though this patient did not have any facial trauma, be sure to look for injuries such as gun-shot wounds or facial fractures, as these may affect what basic or advanced airways you can use."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-open-airway-method-head-tilt",
          label: "Head tilt chin lift",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A head-tilt chin lift is contraindicated for a patient with suspected c-spine injury as tilting the head could cause further damage to the neck. You should have used a modified jaw thrust to check this patient's airway."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-manual-finger-sweep",

          /* contraindicated intervention */
          label: "Manual (finger sweep)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, a blind finger sweep is contraindicated as it could lodge a foreign body deeper into the airway. Further, there is no evidence of foreign body in this patient's mouth."],
          examine: true,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-magill-forceps-assisted",

          /* contraindicated intervention */
          label: "Magill forceps assisted removal",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, there is no evidence of a foreign body in this patient's mouth."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-heimlich-maneuver",

          /* contraindicated intervention */
          label: "Heimlich Maneuver",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object so the Heimlich maneuver is not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-back-blows-and-chest-thrusts",

          /* contraindicated intervention */
          label: "Back blows and chest thrusts",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object so back blows and chest thrusts are not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-oropharyngeal-airway",

          /* contraindicated intervention */
          label: "Oropharyngeal airway (OPA)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["While an airway adjunct may be helpful in this case, the patient is conscious and he would likely refuse an oral airway."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-orotracheal-intubation",

          /* contraindicated intervention */
          label: "Orotracheal intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with a BVM. There is no airway injury or lung injury and the patient's GCS is 12. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-nasotracheal-intubation",

          /* contraindicated intervention */
          label: "Nasotracheal intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with a BVM. There is no airway injury or lung injury and the patient's GCS is 12. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-insert-advanced-airway",

          /* contraindicated intervention */
          label: "Insert advanced/rescue airway",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient's respiratory status can be stabilized with a BVM. There is no airway injury or lung injury and the patient's GCS is 12. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-rapid-sequence-intubation",

          /* contraindicated intervention */
          label: "Rapid-sequence intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["RSI is not in the paramedic's scope of practice in Pennsylvania. This patient's respiratory status can be stabilized with a BVM. There is no airway injury or lung injury and the patient's GCS is 12. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-sedation-assisted-intubation",

          /* contraindicated intervention */
          label: "Sedation-assisted intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Sedation assisted intubation is contraindicated for pediatric patients in PA.  This patient's respiratory status can be stabilized with a BVM. There is no airway injury or lung injury and the patient's GCS is 12. More invasive airway support is unnecessary and dangerous."],
          examine: true,
          prompts: "Thought this patient needed to be intubated",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-needle-cricothyrotomy",

          /* contraindicated intervention */
          label: "Needle cricothyrotomy",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothyrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-surgical-cricothyrotomy",

          /* contraindicated intervention */
          label: "Surgical cricothyrotomy",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothyrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "breathing",
        label: "Assess the patient's breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["After assessing the patient's airway, assess their breathing by listening for breath sounds and observing their respiratory rate, rhythm, and effort.", "You would have found shallow and rapid breaths, but with clear and equal bilateral lungs sounds."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "breathing-checks-rate",
          label: "rate",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A significantly elevated or depressed respiratory rate can suggest impending respiratory failure.", "This patient's tachypnea suggests the need for some respiratory support."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-rhythm",
          label: "rhythm",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Although not found in this case, a patient who is breathing irregularly needs ventilatory support."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-quality",
          label: "quality",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Sounds like stridor, crackles, or wheezing will help you diagnose and manage your patient's respiratory problems.", "This patient had rapid breathing but had clear lung sounds, suggesting that his lungs were likely uninjured."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage inadequate breathing",
        label: "Manage inadequate breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Despite not being able to detect an SpO2 when obtaining vitals, your primary survey would have revealed a patient in respiratory distress with rapid, shallow breaths. This patient requires help with both ventilation and oxygenation."],
        feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination.", "Additionally, problems with ventilation and oxygenation are life threatening and should be addressed by oxygen administration and BVM ventilation before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
        feedbackErrors: [""],
        examine: true,
        prompts: "Didn't realize that the patient's respiratory status was threatened; didn't know the best way to support this patient's breathing",
        subActionsList: true,
        subActions: [{
          id: "intv-manage-breathing-NPA-and-BVM",
          label: "manage inadequate breathing by inserting an NPA and ventilating the patient at a rate of 20 BPM while titrating oxygen at a flow rate of 15 L/min to a target SpO2 >= 90%",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient requires respiratory support and responds by groaning in pain. This is a patient who may benefit from an NPA to help you best oxygenate and ventilate him. He has a gag reflex, so you would want to avoid an OPA.", "When you are assessing the patient's airway and breathing, you should have noticed that the patient's respiratory rate is fast and shallow, and his mental status is waning (GCS 12). This patient would benefit from ventilatory support, not just oxygenation. Further, this patient is in hemorrhagic shock. Remember that shock is the inadequate delivery of oxygen, so a key part of the management of shock includes administration of oxygen regardless of the patient's SpO2 or respiratory exam."],
          feedbackOutOfOrder: ["In the event of a potentially compromised airway (including patients who are unconscious), the patient needs to have an airway adjunct for airway support prior to the secondary survey.", "Additionally, problems with ventilation and oxygenation are life threatening and should be addressed by oxygen administration and BVM ventilation before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
          feedbackErrors: ["This patient should be ventilated using a BVM hooked up to O2, turned up to 15LPM."],
          examine: true,
          prompts: "Didn't realize that the patient's respiratory status was threatened; thought this patient only needed oxygenation; didn't remember that oxygen was part of the management of shock",
          subActionsList: false,
          subActions: [{
            id: "intv-nasopharyngeal-airway",
            label: "Insert a basic airway adjunct",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["This patient requires respiratory support and responds by groaning in pain. This is a patient who may benefit from an NPA to help you best oxygenate and ventilate him. He has a gag reflex, so you would want to avoid an OPA."],
            feedbackOutOfOrder: ["In the event of a potentially compromised airway (including patients who are unconscious), the patient needs to have an airway adjunct for airway support prior to the secondary survey."],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "intv-ventilation-technique-bag-valve-mask",
            label: "ventilating the patient at a rate of 20 BPM, while titrating oxygen at a flow rate of 15 L/min to a target SpO2 >= 90%",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["When you are assessing the patient's airway and breathing, you should have noticed that the patient's respiratory rate is fast and shallow, and his mental status is waning (GCS 12). This patient would benefit from ventilatory support, not just oxygenation. Further, this patient is in hemorrhagic shock. Remember that shock is the inadequate delivery of oxygen, so a key part of the management of shock includes administration of oxygen regardless of the patient's SpO2 or respiratory exam."],
            feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed by oxygen administration and BVM ventilation before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
            feedbackErrors: ["This patient should be ventilated using a BVM hooked up to O2, turned up to 15LPM."],
            examine: true,
            prompts: "Didn't realize that the patient's respiratory status was threatened; thought this patient only needed oxygenation; didn't remember that oxygen was part of the management of shock",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "reassess-AB",
          label: "Check that airway/breathing interventions are working by requesting relevant vitals--in particular, BP, HR, and SpO2",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["When you decide your patient needs a treatment, you must ensure your treatment had the intended outcomes. In this case, after starting bag-mask ventilation, you want to see if the patient's SpO2 is improved. If not, you will want to reflect on why you did not see the expected improvements? Did you select an incorrect intervention? Do you need to escalate your therapies? Are you performing the intervention correctly?"],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-supplemental-oxygen-device-nasal-cannula",

          /* unnecessary intervention */
          label: "Nasal cannula",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-supplemental-oxygen-device-non-rebreather-mask",

          /* unnecessary intervention */
          label: "Non-rebreather mask",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-occlusive-dressing",

          /* contraindicated intervention */
          label: "Occlusive dressing",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["The patient did not have a penetrating chest wound."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-pleural-decompression",

          /* contraindicated intervention */
          label: "Needle decompression",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["The patient did not have a penetrating chest wound."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "circulation",
        label: "Assess the patient's circulation",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
        feedbackOutOfOrder: ["All unconscious patients should have a pulse check before starting the ABCs. If the patient is pulseless, you will start high-quality CPR immediately."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "pulse-checks",
          label: "check pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["First check for a radial pulse. However, if you don't feel one, you want to check a carotid pulse.", "This patient's radial pulses were absent, but he did have a weak carotid pulse, which would prompt you to worry about shock."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-pulse-rate",
            label: "rate",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Checking this patient's pulse rate would have revealed that he was tachycardic. A significantly elevated or depressed pulse rate can suggest shock or respiratory failure."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-rhythm",
            label: "rhythm",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["While this patient's heart had a regular rhythm, remember that an irregular rhythm can suggest impending cardiac arrest or arrhythmia."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-quality",
            label: "quality",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["A patient in shock may have weak or absent pulses distally, such as this patient, suggestive of shock."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "checks-skin",
          label: "checks skin",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-skin-color",
            label: "color",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Pallor, which you would have noted on this patient, is a sign of inadequate oxygenation and may be caused by shock or respiratory failure."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-temperature",
            label: "temperature",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["This patient's cold skin suggests decompensated shock."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-condition",
            label: "condition",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["This patient had diaphoretic skin, which in this case is non-specific, but should prompt you to think about shock."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "assess-major-bleeding",
          label: "Perform a gross blood sweep",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A gross blood sweep, which was negative in this patient, will help you identify any life-threatening bleeding you may have missed earlier when forming your general impression.", "Beyond the life-threatening bleeding from his left leg, the patient also has minor bleeding from his left upper abdomen."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "transport-decision",
        label: "Make appropriate transport decisions based on your findings so far",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your ABCs and evaluation for life threats and level of consciousness will dictate where you transfer your patient.", "Because of the patient's life-threatening bleeding, he should be quickly transferred to the level II trauma center for definitive management."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "decision-is-load-and-go",
          label: "Determine that this is a critical patient",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient is in hemorrhagic shock and needs to get to definitive management as soon as possible. You will not be able to fix him in the field."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: true,
          prompts: "Didn't realize this was a critically ill patient; felt this patient should be further stabilized on site prior to transfer",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-transport",
          label: "Decide where and how to transport the patient to definitive care.",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          feedbackOutOfOrder: ["Initial transport decisions should be made following the 'Primary Survey' (ABCs) because that is when the provider decides whether the patient can be further stabilized on scene or taken directly to a hospital in a 'load and go' scenario. The secondary assessment is only performed on scene if the situation is NOT a 'load and go.' Making transport decisions early is especially important if you are calling for an air ambulance to account for the time it takes for them to arrive."],
          feedbackErrors: ["This patient should be evaluated at the level II trauma center that is 18 minutes away, where they can provide definitive care for his injuries. He should be taken by ambulance with lights and sirens."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        },
        /*{
          id: "intv-transfer-patient-to-ambulance",
          label: "Transfer the patient to ambulance",
          type: ACTION_TYPES.REQ,
          feedbackAbsent: [NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["In order to be transported, the patient needs to be loaded into the ambulance. To do this, the patient will be moved onto the stretcher, secured via straps, moved to the rear of the ambulance, and loaded into the ambulance via the power stretcher."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [
            {
              id: "intv-transfer",
              label: "Transfer the patient to ambulance",
              type: ACTION_TYPES.REQ,
              feedbackAbsent: [NO_FEEDBACK],
              feedbackOutOfOrder: [""],
              feedbackErrors: ["In order to be transported, the patient needs to be loaded into the ambulance. To do this, the patient will be moved onto the stretcher, secured via straps, moved to the rear of the ambulance, and loaded into the ambulance via the power stretcher."]
              subActionsList: false,
              subActions: []
            },
            {
              id: "intv-spinal-immobilization-technique-transfer-to-device",
              label: "Place patient on transfer device",
              type: ACTION_TYPES.ALT,
              alternativeToIntv: "intv-transfer",
              feedbackAbsent: [NO_FEEDBACK],
              feedbackOutOfOrder: [""],
              feedbackErrors: ["In order to be transported, the patient needs to be loaded into the ambulance. To do this, the patient will be moved onto the stretcher, secured via straps, moved to the rear of the ambulance, and loaded into the ambulance via the power stretcher."]
              subActionsList: false,
              subActions: []
            },
          ],
        },*/
        {
          id: "intv-call-for-helicopter",

          /* contraindicated intervention */
          label: "Call for air ambulance",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Air ambulance was not available."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "trauma-expose",
        label: "Trauma expose the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Without exposing your patient, your head-to-toe exam may be hindered, and you could miss an important exam finding."],
        feedbackOutOfOrder: ["It is important expose your patient to ensure that your secondary survey can be performed efficiently -- especially in trauma scenarios where there may be more unknown injuries. Exposing the patient allows the provider to more carefully examine the patient during assessment."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "history-taking",
      label: "Obtain or direct a partner to obtain a patient history",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["Vital signs will help you decide how to manage your patient, as will a history. Even if you cannot obtain a history from the patient directly, you should still try to get as much information as you can (e.g., from a bystander)."],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-obtains-vitals",
        label: "Baseline vital signs",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Baseline vitals are critical; they will help you assess, manage, and continue to monitor your patient.", "You would have found that this patient was tachycardic, tachypneic and hypotensive, prompting you to worry about shock, most likely hemorrhagic given the rapid bleeding from the leg."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-attempt-obtain-sample",
        label: "SAMPLE (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Take an efficient but thorough history from the patient or the witnesses: symptoms, allergies, medications, past medical history, last oral intake, events preceding.", "You would have learned that the patient was shot in his abdomen and leg while arguing with a group of people."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-obtain-OPQRST",
        label: "OPQRST (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["In this case the patient is unable to tell you about his pain. Instead, you should ask bystanders for any information they have."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "secondary-assessment",
      label: "Perform a Secondary Survey (rapid trauma assessment)",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["The Secondary Survey is a thorough exam of your patient to ensure you have a complete understanding of what is going on and how you need to manage your patient."],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "head",
        label: "examine the patient's head",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-and-palpates-skull",
          label: "Inspect and palpate the scalp and skull",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-inspects-facial-bones",
          label: "Inspect and palpate the facial bones",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-eyes",
          label: "Inspect the eyes for PERRLA and bruising (\"raccoon eyes\")",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Abnormal eye movement or pupils, which this patient fortunately did not have, suggest intracranial injury and should prompt you to rapidly transfer your patient to a trauma center.", "Additionally, bruising around the eyes may be caused by basilar skull fracture, though this aspect of the exam was normal in this patient."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [
          /* subActions used for analysis but not for listing as bullet points
             summary of combined subActions' statuses will be in "inspect-eyes" status */
          {
            id: "inspects-eyes-PERRLA",
            //an example of needing to bottom out at a defined interface id
            feedbackAbsent: ["Abnormal eye movement or pupils, which this patient fortunately did not have, suggest intracranial injury and should prompt you to rapidly transfer your patient to a trauma center."],
            subActions: []
          }, {
            id: "inspects-eyes-racoon",
            feedbackAbsent: ["This aspect of the exam was normal in this patient, but bruising around the eyes may be caused by basilar skull fracture."],
            subActions: []
          }]
        }, {
          id: "inspects-ears",
          label: "Inspect the ears for blood, other fluids, and bruising (\"battle signs\")",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Although not found in this case, bleeding from the ear may be indicative of a basilar skull fracture and bruising behind the ear suggests a basilar skull fracture (Battle's sign)."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-ears-blood",
            feedbackAbsent: ["Although not found in this case, bleeding from the ear may be indicative of a basilar skull fracture."],
            subActions: []
          }, {
            id: "inspects-ears-bruising",
            feedbackAbsent: ["Although not found in this case, bruising behind the ear suggests a basilar skull fracture (Battle's sign)."],
            subActions: []
          }]
        }, {
          id: "inspects-nose-secretions",
          label: "Inspect the nose for blood and other fluids",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient had no drainage from the nose but consider CSF leak from a basilar skull fracture if you see clear drainage."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-mouth",
          label: "Inspect the mouth for blood, other secretions, and obstructions",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If the patient had had secretions or blood in the mouth, you would have needed to apply suction to clear the airway."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-mouth-fluids",
            feedbackAbsent: ["If the patient had had secretions or blood in the mouth, you would have needed to apply suction to clear the airway."],
            subActions: []
          }, {
            id: "inspects-mouth-obstructions",
            feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
            subActions: []
          }]
        }]
      }, {
        id: "neck",
        label: "examine the patient's neck",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-neck-injury",
          label: "injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-tracheal-deviation",
          label: "tracheal deviation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, tracheal deviation suggests unequal intrathoracic pressure (for example, a pneumothorax). The trachea will be deviated away from the side with increased pressure."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-JVD",
          label: "jugular venous distension (JVD)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, JVD suggests that the heart is not adequately pushing out blood. Consider obstructive processes like a tension pneumothorax or hemothorax."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-stepoffs",
          label: "step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, a palpable step-off suggests a fracture."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "chest",
        label: "examine the patient's chest",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_NO_FEEDBACK],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-check-breath-sounds",
          label: "Listen for breath sounds",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The presence and quality of breath sounds can clue you into underlying problems (e.g., pneumothorax, asthma). This patient's breath sounds were normal and equal bilaterally."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-shoulders",
          label: "Inspect and palpate shoulders",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-clavicles",
          label: "Inspect and palpates clavicles",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-anterior-thorax",
          label: "Inspect and palpate anterior thorax for injury, crepitation, and paradoxial motion or flail segments",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If the patient had had anterior thorax and rib crepitation, you should suspect air outside of the lungs, which would raise your suspicion for a pneumothorax.", "The patient had symmetric movement of his chest. Recall that paradoxical chest wall motion suggests flail chest, where multiple rib fractures lead to an unstable portion of the chest wall."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-chest-injury",
            feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
            subActions: []
          }, {
            id: "inspects-palpates-anterior-thorax-crepitation",
            feedbackAbsent: ["If the patient had had anterior thorax and rib crepitation, you should suspect air outside of the lungs, which would raise your suspicion for a pneumothorax."],
            subActions: []
          }, {
            id: "inspects-anterior-thorax-paradoxical-motion",
            feedbackAbsent: ["The patient had symmetric movement of his chest. Recall that paradoxical chest wall motion suggests flail chest, where multiple rib fractures lead to an unstable portion of the chest wall."],
            subActions: []
          }]
        }]
      }, {
        id: "abdomen-pelvis",
        label: "examine the patient's abdomen",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-abdomen-injury",
          label: "inspect and palpate for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["You should have noticed two gunshot wounds with minimal external bleeding in the left upper quadrant. Despite minimal external bleeding, penetrating abdominal wounds can have significant internal bleeding."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-distension",
          label: "inspect and palpate for distension",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A distended abdomen suggests trauma and internal bleeding. Fortunately, the patient's abdomen was non-distended."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-rigidity",
          label: "inspect and palpate for rigidity",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["On palpation, you should have noticed that the patient's abdomen was rigid, suggesting intra-abdominal blood, likely related to the gunshot wounds."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "assess-pelvis",
        label: "examine the patient's pelvis",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-checks-pelvis",
          label: "Inspect and compress the pelvis",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Be sure to do a thorough exam of the pelvis as the pelvis can be a source of life-threatening bleeding. Fortunately, the patient's pelvis exam was normal."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-genitalia-perineum",
          label: "Inspect the genitalia/perineum for blood, other fluids.",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "extremities",
        label: "examine the patient's upper and lower extremities",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-extremities-injury",
          label: "Inspect and palpate each extremity for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-injury",
            feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
            subActions: []
          }, {
            id: "inspects-left-arm-injury",
            feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
            subActions: []
          }, {
            id: "inspects-right-leg-injury",
            feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
            subActions: []
          }, {
            id: "inspects-left-leg-injury",
            feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-pulse",
          label: "Inspect and palpate each extremity for pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Because the patient was in shock, you would have been unable to appreciate any distal pulses."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-pulse",
            feedbackAbsent: ["Because the patient was in shock, you would have been unable to appreciate any distal pulses."],
            subActions: []
          }, {
            id: "inspects-left-arm-pulse",
            feedbackAbsent: ["Because the patient was in shock, you would have been unable to appreciate any distal pulses."],
            subActions: []
          }, {
            id: "inspects-right-leg-pulse",
            feedbackAbsent: ["Because the patient was in shock, you would have been unable to appreciate any distal pulses."],
            subActions: []
          }, {
            id: "inspects-left-leg-pulse",
            feedbackAbsent: ["Because the patient was in shock, you would have been unable to appreciate any distal pulses."],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-motor-function",
          label: "Inspect and palpate each extremity for motor function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. The patient was shot in the left leg. You may have noted an abnormal motor exam related to either pain or neurovascular injury."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-motor-ability",
            feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
            subActions: []
          }, {
            id: "inspects-left-arm-motor-ability",
            feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
            subActions: []
          }, {
            id: "inspects-right-leg-motor-ability",
            feedbackAbsent: ["Diminished or absent mobility may suggest spinal cord or other nervous system injury. This patient was moving his extremities normally."],
            subActions: []
          }, {
            id: "inspects-left-leg-motor-ability",
            feedbackAbsent: ["The patient was shot in the left leg. You may have noted an abnormal motor exam related to either pain or neurovascular injury."],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-sensory-function",
          label: "Inspect and palpate each extremity for sensory function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }, {
            id: "inspects-left-arm-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }, {
            id: "inspects-right-leg-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }, {
            id: "inspects-left-leg-sensory-function",
            feedbackAbsent: ["Diminished or absent sensation may suggest spinal cord or other nervous system injury. This patient's sensation was intact in his extremities."],
            subActions: []
          }]
        }]
      }, {
        id: "posterior",
        label: "examine the patient's posterior thorax, lumbar, and buttocks",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-palpates-posterior",
          label: "inspect and palpate the posterior for injury, crepitation and step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A palpable step-off, which the patient did not have, would suggest a fracture."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-posterior-other-injury",
            feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.WAIT_TIFF],
            subActions: []
          }, {
            id: "inspects-posterior-step-offs",
            feedbackAbsent: ["A palpable step-off, which the patient did not have, would suggest a fracture."],
            subActions: []
          }]
        }]
      }]
    }, {
      id: "Perform ongoing patient assessment and management",
      label: "Continue to provide adequate prehospital care until arriving at the receiving faciliaty",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.SUM_NODE_FBCK_CHILDREN],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "intv-place-on-immobilization-device",
        label: "Place the patient on an immobilization device, optimally with CID attached, taking care not to compress puncture wounds and to move him to the ambulance with minimal spinal motion",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: true,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-spinal-immobilization-technique-attach-cid",
        label: "Attach CID to further prevent spinal motion",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-establish-iv",
        label: "Establish at least one large bore IV en route",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [_constants__WEBPACK_IMPORTED_MODULE_0__.NO_FEEDBACK],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-manage-hemorrhagic-shock",
        label: "Continue to manage hemorrhagic shock",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["This patient is in shock as evidenced by his lack of peripheral pulses, pale and diaphoretic skin exam, waning mental status, and hypotension. The mostly likely cause of this is the GSW to the leg. Stopping the bleeding and restoring his intravascular volume will help get him to definitive management: surgery."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: true,
        prompts: "Didn't recognize hemorrhagic shock; didn't remember all the steps in the management of hemorrhagic shock",
        subActionsList: true,
        subActions: [{
          id: "intv-control-shock-technique-administer-iv-boluses",
          label: "Bolusing normal saline or Lactated Ringers to a goal BP of 90mm Hg systolic as soon as possible",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient has been bleeding and requires intravascular support to restore and maintain his blood pressure. Administer an isotonic fluid as rapidly as possible (maximizing the size and number of IVs will help you with this) to a goal BP of 90 systolic."],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You want establish at least 2 IVs as soon as possible. As your patient deteriorates and his blood pressure drops further, IV placement becomes more difficult.", "2. You want to use as large of an IV as possible; this will allow you to administer fluids rapidly. Remember that the pressure of the flow of a fluid is inversely proportional to the radius to the 4th power.", "3. Always use an isotonic fluid without dextrose for volume resuscitation. This can be either NS or LR.", "4. Your goal of fluid administration is to re-establish an adequate, if not normal BP to ensure adequate oxygenation to the patient's end-organs. If you give too much fluid, you risk creating new problems, such as pulmonary edema."],
          examine: true,
          prompts: "Didn't know how much fluid to give; didn't know what kind of fluid to give",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-control-shock-technique-keep-patient-warm",
          label: "keeping the patient warm, using some of the following methods: a) applying heat packs to the patient's groin or armpits, b) covering the patient with blankets, c) turning the heat up in the ambulance.",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["It is important to keep this patient warm because hypothermia can cause additional problems or worsening of the patient's current problems, including hypotension, arrhythmias, or even cardiac arrest."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-control-shock-technique-place-patient-supine-position",
          label: "maintaining the patient in supine position",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["When you keep a patient in a supine position, you make it easier for the heart to pump blood to the brain. A patient in shock is already not delivering adequate oxygen to the brain; fighting gravity will not make this any easier."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-apply-sterile-dressings",
        label: "Manage non-life-threatening injuries--in particular apply sterile dressings to the gun shot wounds on the patient's abdomen",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["This patient has GSWs to the LUQ of his abdomen, which should be dressed once the patient is stabilized."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "Reassess the patient",
        label: "Reassess the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change. This includes repeating the primary survey, secondary survey, and vital signs. A critically ill patient should be reassessed more frequently to ensure he or she is still stable--approximately every 5 minutes."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "reassess-vital-signs",
          label: "Recheck vital signs every 5 minutes",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Vitals should be reassessed after every intervention and every clinical change, and a critically ill patient should be reassessed more frequently to ensure he or she is still stable.", "If you had reassessed the patient's vitals after administering a fluid bolus, you would have seen an improvement in the blood pressure."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-primary-survey",
          label: "Repeat the Primary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change, which includes the primary survey. For example, a patient with a neck injury whose breathing was initially non-labored may develop stridor as the airway becomes swollen."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-secondary-survey",
          label: "Repeat the Secondary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change, which includes your secondary survey. For example, a patient may lose their pulses if you initially failed to notice and treat a source of hemorrhage."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-contact-receiving-facility",
        label: "Provide a patient report and ETA to the receiving facility",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["The hospital requires notification for all incoming patients 5 -15 prior to arrival, which is especially important for critical patients as the receiving team needs time to prepare equipment and space."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-splint-fractures",

        /* contraindicated intervention */
        label: "Splint fractures",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have any fractures."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-sling",

        /* contraindicated intervention */
        label: "Apply sling",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have any injuries requiring a sling."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      },
      /*{ /* see item 25 and 26 in Word file
        id: "intv-spinal-immobilization-technique-transfer-to-device", /* contraindicated intervention 
        label: "Transfer to immobilization device",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient does not have any evidence of history suggesting a spinal injury. Further, spinal immobilization is contraindicated in a patient with a penetrating abdominal injury."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      },*/
      {
        id: "intv-prepare-amputation-for-transport",

        /* contraindicated intervention */
        label: "Prepare amputated part for transport",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have an amputation."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-prepare-and-administer-pain-nausea-vomiting-medications",

        /* contraindicated intervention */
        label: "Prepare and administer medications",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["A conscious patient with a 9/10 pain level may benefit from analgesia. Fentanyl at 1 mcg/kg (per protocol) likely would have minimal effects -- if any -- on his respiratory drivet.  However, full spinal immobilization and administering life-saving interventions would take priority over starting an IV and administering pain medications."],
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-contact-medical-command",

        /* unnecessary intervention */
        label: "Contact Medical Command",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        subActions: []
      }
      /*{
        id: "intv-prepare-and-administer-sedative", /* contraindicated intervention 
        label: "Prepare and administer medications",
        type: ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["This patient does not require sedation."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      },*/
      ]
    }]
  }
};

/***/ }),

/***/ 1412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SC8CP_PhaseDEBRF": () => (/* binding */ SC8CP_PhaseDEBRF)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4354);
// type Phase_D = {
//     step:  string;
//     title: string;
//     text:  string[];
// };
// type Phase_E = {
//     step:        string;
//     title:       string;
//     description: string;
//     text:        string[];
// };
// type Phase_B = {
//     step: string;
//     expectations:
//         {
//             id:      string;
//             heading: string;
//             benchmarks:
//                 {
//                     id:   string;
//                     text: string;
//                     subBenchmarks: 
//                         {
//                             id:              string;
//                             phase:           object;
//                             checklistItems:  string[];
//                             feedback:        string;
//                             type:            string;
//                         }[];
//                 }[];
//         }[];
// };
// type Phase_R = {
//     step:    string;
//     slides:  string[] | { text: { __html: string; linkHoverText: object; }}[];
// };
// type Phase_F = {
//     step:      string;
//     title:     string;
//     heading:   string;
//     questions: string;
// };
// type Step_Data = [Phase_D, Phase_E, Phase_B, Phase_R, Phase_F];
// export const STEP_DATA: Step_Data = [

const SC8CP_PhaseDEBRF = [{
  step: "D",
  title: "Define Rules:",
  text: ["The purpose of this debriefing is to reflect on the scenario you have just completed in order to help you improve your skills as a paramedic.  It is not meant to assess your overall abilities as a paramedic.", "This debriefing will summarize the learning objectives of this scenario and the performance benchmarks (standards) for achieving each objective.  The system will then prompt you to examine differences between the treatment actions that you performed and those indicated by the clinical findings revealed during the scenario, or that would have been revealed by a more thorough assessment and reassessment of this patient.  Finally, it will prompt you to state some 'take home points' to improve your performance."]
}, {
  step: "E",
  title: "Explain the learning objectives:",
  description: "This scenario was designed to give you practice with:",
  text: ["Conducting a thorough trauma patient assessment", "Managing a potential head and/or spinal injury", "Managing a compromised airway", "Managing inadequate breathing", "Making appropriate transport decisions", "Performing ongoing patient management and assessment"]
}, {
  step: "B",
  expectations: [{
    expectationText: "Conduct a thorough trauma assessment",
    benchmarks: [{
      benchmarkText: "Before approaching patient, apply PPE, check that the scene is safe, determine the number of patients, and request additional help if necessary",
      subBenchmarks: []
    }, {
      benchmarkText: "On initial patient contact, form a general impression of the patient's condition, assess patient's level of consciousness, and identify apparent life threats",
      subBenchmarks: []
    }, {
      benchmarkText: "During the Primary Survey:",
      subBenchmarks: ["Check that airway is open, clear of fluids and foreign bodies, and has intact physical structures", "Listen for abnormal breath sounds and check breathing rate, rhythm, and quality", "Check circulation: pulse rate/rhythm/quality; skin color/temperature/condition; perform gross blood sweep", "Determine the need for rapid transport and call for an air ambulance asap (i.e., before conducting your Secondary Survey)", "Trauma expose patient"]
    }, {
      benchmarkText: "Take baseline vitals and, if possible, obtain SAMPLE history and OPQRST",
      subBenchmarks: []
    }, {
      benchmarkText: "Perform a rapid head-to-toe assessment (Secondary Survey), looking/listening/feeling for DCAP-BTLS and abnormal conditions at each body part (e.g., check neck for tracheal deviation and JVD).",
      subBenchmarks: []
    }]
  }, {
    expectationText: "Manage a potential head or spinal injury",
    benchmarks: [{
      benchmarkText: "Identify the potential for head or spinal injury during your initial assessment",
      subBenchmarks: []
    }, {
      benchmarkText: "Direct manual stabilization of the cervical spine before checking airway, breathing and circulation",
      subBenchmarks: []
    }, {
      benchmarkText: "Apply an appropriately sized cervical collar",
      subBenchmarks: []
    }]
  }, {
    expectationText: "Manage a compromised airway",
    benchmarks: [{
      benchmarkText: "Open the patient's airway via jaw-thrust instead of head-tilt",
      subBenchmarks: []
    }, {
      benchmarkText: "Suction the patient's mouth using a Yankauer or Long multi-use catheter",
      subBenchmarks: []
    }, {
      benchmarkText: "Insert an oropharyngeal airway",
      subBenchmarks: []
    }, {
      benchmarkText: "Ultimately, intubate the patient.  Pre-oxygenate with a nasal cannula or BVM and then place a size 4.5 or 5.0 ET tube inserted at the correct depth. Alternatively, insert an appropriately sized advanced/rescue airway.",
      subBenchmarks: []
    }, {
      benchmarkText: "Confirm placement of the tube by checking ETCO2 capnography, listening for bilateral lung sounds and absence of gastric sounds. Additional checks include visualizing the tube passing through the vocal cords (if an ET tube) and re-evaluating vital signs.",
      subBenchmarks: []
    }]
  }, {
    expectationText: "Manage inadequate breathing",
    benchmarks: [{
      benchmarkText: "Ventilate the patient at a rate of 20 breaths per minute",
      subBenchmarks: []
    }, {
      benchmarkText: "Titrate oxygen at a flow rate of 15 L/min to a target SpO2 > = 90%",
      subBenchmarks: []
    }]
  }, {
    expectationText: "Make appropriate transport decisions",
    benchmarks: [{
      benchmarkText: "Transport patient to Level 1 pediatric tauma center by air ambulance",
      subBenchmarks: []
    }]
  }, {
    expectationText: "Perform ongoing patient management and assessment",
    benchmarks: [{
      benchmarkText: "Assist air crew in providing a patient report and ETA to the receiving facility",
      subBenchmarks: []
    }, {
      benchmarkText: "Establish at least one IV en route",
      subBenchmarks: []
    }, {
      benchmarkText: "Reassess vitals every 5 minutes; repeat primary and secondary survey",
      subBenchmarks: []
    }]
  }]
}, {
  step: "R",
  slides: [{
    paragraphs: [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.para)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("In an idealized scenario, you arrive on scene and find a 4-year-old boy lying supine beside a pool in the backyard of a suburban house. Other EMS responders have arrived on site to assist you.  Your initial assessment reveals that the boy is unconscious and cyanotic.  A quick pulse check shows that it is slow and weak. Given that the patient is in"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.link)("critical condition,", "This patient is unresponsive and is therefore considered a critical patient."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("you direct a responder to call for air transport to the"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.link)("nearest pediatric trauma center.", "Because this patient is under 14 years of age, he should be transported to the nearest level 1 or 2 pediatric trauma center that is less than 45 minutes away.")), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.para)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("You direct another partner to take"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.link)("manual c-spine precautions", "Any near-drowning or drowning, especially if unwitnessed, should be considered a risk for possible cervical and spinal injury as the patient may have been involved in a diving accident."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("and apply a cervical collar. You open the patient’s airway, using a jaw thrust maneuver.  Finding a substantial amount of water and vomit in the boy’s mouth, you apply suction. After the patient’s airway is cleared, you assess breathing and find it to be slow with gurgling sounds. You direct your partner to insert an OPA and ventilate the patient with 100% oxygen delivered through a"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.link)("bag-valve mask", "This patient was not adequately ventilating (slow, gurgling breaths) or oxygenating (low SpO2) so O2 delivered via nasal cannula or non-rebreather mask would not have been adequate.")), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.para)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("You then"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.link)("intubate the patient", "The patient was unresponsive with a GCS of 3 so should be intubated to safely get the patient to the pediatric trauma center (remember, generally with a GCS <8, you should intubate)."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("and direct your partner to resume BVM ventilation all while maintaining c-spine precautions. You have another responder obtain a set of baseline vitals and obtain a SAMPLE and OPQRST history from the babysitter while you perform a rapid head-to-toe assessment.  On completion of your secondary survey, you secure him onto a long back board.")), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.para)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("You and your partners then place the patient on a stretcher and transfer him to the helicopter as soon as it arrives.  You cover him with blankets and ask the pilot to turn up the heat. While en route to the pediatric trauma center, you contact the facility to alert them to the patient’s condition and your ETA.  You establish two large bore IVs, reassess the patient"), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.link)("every five minutes,", "Critically ill patients should be reassessed every 5 minutes."), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.text)("and confirm that all interventions are working properly, modifying any as necessary."))]
  }]
}, {
  step: "F",
  title: "Formalize learning",
  heading: "Please take a few minutes to think and reply to these questions",
  questions: "What are your key take-home points from this case? What is something you want to continue working on or do differently in the future?"
}];

/***/ }),

/***/ 7884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SC8CP_PhaseIE": () => (/* binding */ SC8CP_PhaseIE)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);
/* Data for scenario SC8CP phase IE 
This data structure holds all the information to create the slides to present during the IE phase.
It mirrors the tree structure that is presented in the Excel file. All nodes in the tree are called actions whether 
they are assessments or interventions. Subactions are the children of the actions in the tree.
Fields:
id: identifies the action-node in the tree. It is a string since it is unique.
label: text for the action as it will appear on the slide
type: indicates whether the action is Required, Contraindicated, Unnecessary or Irrelevant.
    Required, it will be listed in the left side of the slide so that students are asked if they performed it.
    Contraindicated: it will be listed on the right side under a list of contraindicated actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Unnecessary: it will be listed on the right side under a list of unnecessary actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Irrelevent: it will be listed on the right side under a list of irrelevant actions that the student performed
    accompanied by the feedback on the feedbackErrors field.
    Alternative: will be used for those interventions that can be performed as alternative to required ones. A field
alternativeToIntv: indicates the intervention for which the current one is an alternative. It will only have a value if
the type is Alternative.
feedbackAbsent: feedback given if the action was no performed
feedbackOutOfOrder: feedback given if the action was done late (e.g., if the action is Scene size-up and it was done 
    after Primary Survey)
feedbackError: feedback if the action was performed incorrectly (e.g., wrong ventilation rate)
examine: boolean to indicate if this Action needs to be examined (phase E)
prompts: prompts to be included in question headers in phase E, to hint on how to reflect
subActionsList: boolean that indicates whether the subActions need to be listed as bullet points on the slide. If they
    don't need to be listed it is usually because they have been grouped however, the subActions still need to be 
    included in the subActions field because they are used by the analysis to give a summary of their status.
subActions: array with the corresponding subactions (to form the tree)
*/

const SC8CP_PhaseIE = {
  Action: {
    id: "top",
    label: "fully assess and manage the patient in this scenario",

    /* the way it will appear on the slide */
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,

    /*indicates whether the action was Required, Contraindicated, Unnecessary, or Irrelevant" */
    feedbackAbsent: ["Your log indicates you didn't complete any of these assessment or managment goal. Please restart the scenario and try again"],

    /*feedback if the action was not performed*/
    feedbackOutOfOrder: [""],

    /*feedback if the action was done late (e.g., if the action is Scene Size-up 
    and it was done after Primary Survey)*/
    feedbackErrors: [""],

    /*feedback if the action was performed incorrectly (e.g. wrong Ventilation rate)*/
    examine: false,

    /* boolean to indicate if this Action needs to be examined (phase E) */
    prompts: "",

    /* prompts to the included in question in phase E to hint on how to reflect */
    subActionsList: true,

    /* boolean that indicates if subActions need to be listed as bullet points on slide */
    subActions: [
    /*array with the corresponding subactions (to form the tree)*/
    {
      id: "scene-size-up",
      label: "Put on BSI and do a complete Scene Size-up before entering the scene",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself.", "Your scene size up gives you a big-picture view of what is going on before you even begin examining the patient and includes determining the mechanism of injury and number of patients, requesting additional help if necessary, and considering stabilization of the spine.", "In this case, you would have learned that this is a near drowning incident, which should have prompted you to think about potential head or spinal injury, and the need for rescue breaths and/or CPR."],
      feedbackOutOfOrder: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself.", "Your scene size up also gives you a big-picture view of what is going on before you even begin examining the patient. This includes determining the mechanism of injury and number of patients, requesting additional help if necessary, and considering stabilization of spine."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-BSI",
        label: "Apply BSI",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-scene-safety",
        label: "Determine the scene/situation is safe",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your first steps should have been to don your protective wear, including eye protection, and to ensure the scene is safe. You cannot assist a patient if you are not safe yourself."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-injury-mechanism",
        label: "Determine the mechanism of injury (MOI) or nature of illness (NOI)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Knowing what caused the patient's injury or illness can allow you to start developing a plan of action before you even assess your patient.", "By determining the mechanism of injury, you would have learned that this is a near drowning incident, which should have prompted you to think about potential head or spinal injury, and the need for rescue breaths and/or CPR."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "assess-num-patients",
        label: "Determine the number of patients",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Usually you will have one patient, but if there is more than one you will need to plan accordingly."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-requests-additional-help",
        label: "Request additional help if necessary",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Consider the need for extra help based on number of patients, mechanism of injury, and your patient's status.", "Although police and fire personnel were already on scene, you should have considered the need for additional ALS support."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-considers-stabilize-spine",
        label: "Consider stabilization of spine",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["All trauma patients are at risk for spinal injury, including drowning or near drowning patients, which could be caused by a diving accident. Take this into consideration before initial contact with the patient to prevent unintentional injury."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "primary-survey",
      label: "Perform a Primary Survey and manage all identified life threats",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["The primary survey is an assessment of mental status, life-threats, and the patient's ABCs. It is where you will identify and address the patient's most serious injuries.", "In this case, the Primary Survey would have revealed an unconscious patient with respiratory failure and a weak and slow pulse."],
      feedbackOutOfOrder: ["You should have started your Primary Survey after the Scene Size-up and completed it before starting the Secondary Survey. Only interrupt your assessment to control life-threats: (1) Conditions that comprimise a patent airway (2) Conditions that compromise breathing or respirations, such as a tension pneumothorax, (3) Conditions that compromise circulation, such as severe bleeding, (4) Cardiac arrest, and any  other potentially life threatening injuries or conditions.  Your patient's condition will deteriorate if these conditions are not addressed before continuing on with your assessment and history taking."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "general-impression",
        label: "Conduct an Initial Assessment",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["You should have performed an Initial Assessment: gathered a general impression, identified any apparent life threats, and determined your patient's level of consciousness.  Your Initial Assessment  would have revealed a patient who is unconscious."],
        feedbackOutOfOrder: ["While you may be tempted to jump straight into your ABCs, apparent life threats (ie. uncontrolled bleeding) should be addressed first, as they can cause a patient to deteriorate quickly. Also, be sure to assess the patient's level of consciousness as an unconscious patient will need a pulse check first to ensure he or she does not require CPR."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assess-patient-condition",
          label: "State or request a general impression",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Your general impression allows you to start developing a plan of action before you even assess your patient.", "In this case, your general impression would have been of a child who nearly drowned."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-loc",
          label: "Assess the patient's level of consciousness",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The patient's level of consciousness alters how you progress through your assessment.", "This patient was unresponsive with sluggish pupils.  This should have prompted you to consider him a critical patient, check his pulse prior to airway and breathing, and plan for urgent transfer to a nearby trauma center."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assess-life-threats",
          label: "Determine the chief complaint/apparent life-threats",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If you had determined apparent life threats, you would have noticed that the patient was unresponsive, indicating a critical patient."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage a potential head or spinal injury",
        label: "Manage a potential head or spinal injury",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Although the exact MOI is unknown, you should suspect possible head and/or spinal injury with any near drowning incident as diving may have been involved. You should have taken manual c-spine stabilization before performing your ABC assessment and maintained it throughout and applied an appropriately sized cervical collar."],
        feedbackOutOfOrder: ["Managing the cervical spine is one of the first things you should do for any trauma patient, as you must ensure you do not cause any further injury during the remainder of your assessment and management."],
        feedbackErrors: [""],
        examine: true,
        prompts: "didn't recall that spinal injury should be considered in every near drowning incident; did not consider risk for cervical spine injury based on provided information",
        subActionsList: true,
        subActions: [{
          id: "intv-spinal-immobilization-technique-manual-c-spine",
          label: "Apply (or direct a partner to apply) manual c-spine stabilization",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Part of managing a head and/or spinal injury includes manual stabilization of the cervical spine before beginning your assessment, as movement may further injure the patient."],
          feedbackOutOfOrder: ["The cervical spine needs to be manually supported before and after the application of a cervical collar. Manual support can be stopped after the CID is applied on the long backboard."],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-spinal-immobilization-technique-cervical-collar",
          label: "Apply an appropriately sized cervical collar",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A cervical collar will help you maintain stability while you continue with your exam."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "airway",
        label: "Assess the patient's airway",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Be sure to assess the airway for patency and intact physical structures.", "You would have found this patient's airway to be partially obstructed with vomit and water, indicating the need for suctioning."],
        feedbackOutOfOrder: ["If your patient is conscious, you should examine the airway before breathing and circulation. If a patient is unconscious, you should assess the pulse first to evaluate for possible cardiac arrest, then go through your ABCs."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "airway-is-open",
          label: "Check if the airway is patent",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The first step of your airway assessment is to see if the patient's airway is open. If the patient is speaking normally, it is open. Signs like stridor or gasping may indicate an airway obstruction.", "This patient's airway was partially obstructed with vomit and water, which should have been suctioned."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "airway-has-intact-physical-structures",
          label: "Check if the airway has intact physical structures",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Though this patient did not have any facial trauma, be sure to look for injuries such as gun-shot wounds or facial fractures, as these may affect what basic or advanced airways you can use."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage a compromised airway",
        label: "Manage the patient’s compromised airway",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["This patient was unable to protect his airway, as evidenced by his being unconscious and having an obstructed airway. You should have managed this airway with suctioning, ventilating with a BVM, and ultimately intubating him."],
        feedbackOutOfOrder: ["You should identify any airway obstructions, including blood, vomiting, and secretions while checking the patency of your patient's airway. Any obstruction should be addressed at that time."],
        feedbackErrors: [""],
        examine: true,
        prompts: "didn't recognize that being unconscious was an indication for intubation; didn't recognize that the patient's airway was obstructed and needed suctioning",
        subActionsList: true,
        subActions: [{
          id: "intv-open-airway-method-modified-jaw-thrust",
          label: "Open the patient's airway with a jaw thrust maneuver",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Opening the airway is a necessary precursor to inserting a basic adjunct.  The patient is at risk for a cervical spine injury, so opening the airway via head tilt can compromise spinal stability. Instead, you use the jaw-thrust technique to open the airway while maintaining the cervical spine."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-airway-patency-technique-suction-airway",
          label: "Suction the patient's mouth using a Yankauer (rigid)  or Long multi-use catheter",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient had water and vomit in his airway, which should have been suctioned to establish a patent airway and allow you to insert a basic airway and, ultimately, to intubate this patient."],
          feedbackOutOfOrder: ["Suctioning falls under 'A' in the ABCs. Airway obstructions are a potentially life threatening condition and require immediate intervention. Thus, debris in the airway or obstuctions need to be identified and fixed during the primary assessment.", "In critical patients (especially those that are unconscious), the airway requires frequent reassessment. Be even more cautious when the patient has vomited recently or may lose consciousness very quickly.", "The patient's own tongue can be an obstruction, as well (when unconscious)."],
          feedbackErrors: ["Both Yankauer (rigid) and Long multi-use catheters are appropriate for oral suctioning; however, Yankauer would be more effective for suctioning large volumes of blood, vomit, etc.  A soft tip suction catheter should be used for deep suctioning with the ET tube."],
          examine: true,
          prompts: "didn't ensure the airway was clear; did not think the vomit or water needed to be suctioned prior to intubation",
          subActionsList: false,
          subActions: []
        }, {
          id: "reassess-airway",
          label: "Reassess airway patency",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["After every intervention, it is vital to reassess the patient to observe the effect of that intervention. If suctioning is performed but gurgling still occurs on respirations, then further suctioning is required. Furthermore, if suctioning was performed and the airway remains clear, yet the patient continues to desaturate (SPO2), the provider should assess and think about other likely problems that caused the patient condition to worsen."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-oro-or-naso-airway",
          label: "Insert a basic airway adjunct",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Remember: 'basic before advanced'. This patient is unconscious and therefore unable to maintain his airway (e.g. without an OPA, the tongue could obstruct the airway.)  Insert a basic airway adjunct to maintain airway patency and allow you to pre-oxygenate the patient prior to intubation."],
          feedbackOutOfOrder: ["In the event of a potentially compromised airway (inculding patients who are unconscious), the patient needs to have an airway adjunt for airway support prior to the secondary survey."],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "intv-oropharyngeal-airway",
            label: "Insert a basic airway adjunct",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Remember: 'basic before advanced'. This patient is unconscious and therefore unable to maintain his airway (e.g. without an OPA, the tongue could obstruct the airway.)  Insert a basic airway adjunct to maintain airway patency and allow you to pre-oxygenate the patient prior to intubation."],
            feedbackOutOfOrder: ["In the event of a potentially compromised airway (inculding patients who are unconscious), the patient needs to have an airway adjunt for airway support prior to the secondary survey."],
            subActionsList: false,
            subActions: []
          }, {
            id: "intv-nasopharyngeal-airway",
            label: "Insert a basic airway adjunct",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ALT,
            alternativeToIntv: "intv-oropharyngeal-airway",
            feedbackAbsent: ["Remember: 'basic before advanced'. This patient is unconscious and therefore unable to maintain his airway (e.g. without an OPA, the tongue could obstruct the airway.)  Insert a basic airway adjunct to maintain airway patency and allow you to pre-oxygenate the patient prior to intubation."],
            feedbackOutOfOrder: ["In the event of a potentially compromised airway (inculding patients who are unconscious), the patient needs to have an airway adjunt for airway support prior to the secondary survey."],
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "verify-accepts-adjunct",
          label: "Confirm that the patient accepted the airway adjunct",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intubate-patient",

          /* has children intv-preoxygenation and intv-oro-intubation-or-advanced-airway */
          label: "Ultimately, intubate the patient",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Ultimately, this patient should be intubated. This patient has a GCS score of 3; remember, GCS <8, intubate. Since he is unconscious, you need a reliable way to oxygenate and ventilate this patient. While BVM ventilation with an adjunct may be appropriate for a short transport, this near-drowning patient is at increased risk for aspiration, so securing an airway is the best course of action. Orotracheal intubation would be most appropriate because he lacks a gag reflex."],

          /* feedback taken from intv-oro-intubation-or-advanced-airway */
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Inserting an appropriately sized endotracheal tube (ETT) is the most appropriate method of securing this patient's airway, since he lacks a gag reflex.", "Calculate the appropriate size ET tube for a child with the equation age/4 +1. This is the correct size for an uncuffed tube; go down by .5 for a cuffed tube. This child needed a 4.5 cuffed or 5.0 uncuffed tube.  The insertion depth for children is 3cm * (tube size), so about 15cm.", "If using a different advanced airway, reference the Broslow Tape for the acceptable size, but remember that Combitubes are not sized for children."],

          /* feedback taken from intv-oro-intubation-or-advanced-airway */
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "intv-preoxygenation",
            label: "Pre-oxygenating the patient using a BVM alone or coupled with a nasal cannula.",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["This patient has inadequate respirations and requires ventilatory support. Even if you identify immediately that you want to intubate this patient, he would benefit from starting with a bag-valve mask attached to 15LPM O2 to preoxygenate him prior to intubation. Alternatively, oxygenation with a nasal cannula could be coupled with BVM ventilation."],
            feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed by oxygen administration and BVM ventilation before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
            feedbackErrors: ["Use a bag-valve mask attached to 15LPM O2 or greater to preoxygenate the patient prior to intubation. Alternatively, 25 LPM of O2 via nasal cannula while simultaneously performing BVM ventilations with high-flow oxygen could be used for pre-oxygenation."],
            examine: true,
            prompts: "Didn't realize the patient needed ventilatory support; Didn't think the patient needed bagging before intubation",
            subActionsList: false,
            subActions: [{
              id: "intv-ventilation-technique-bag-valve-mask",
              label: "Ventilate the patient with bag valve mask",
              type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
              feedbackAbsent: ["This patient has inadequate respirations and requires ventilatory support. Even if you identify immediately that you want to intubate this patient, he would benefit from starting with a bag-valve mask attached to 15LPM O2 to preoxygenate him prior to intubation. Alternatively, oxygenation with a nasal cannula could be coupled with BVM ventilation."],
              feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed by oxygen administration and BVM ventilation before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
              feedbackErrors: ["Use a bag-valve mask attached to 15LPM O2 or greater to preoxygenate the patient prior to intubation. Alternatively, 25 LPM of O2 via nasal cannula while simultaneously performing BVM ventilations with high-flow oxygen could be used for pre-oxygenation."],
              examine: false,
              prompts: "",
              subActionsList: false,
              subActions: []
            }, {
              id: "intv-bvm-or-nasal-cannula",
              label: "Intubate the patient by pre-oxygenating them with a nasal cannula or BVM",
              type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ALT,
              alternativeToIntv: "intv-ventilation-technique-bag-valve-mask",
              feedbackAbsent: ["This patient has inadequate respirations and requires ventilatory support. Even if you identify immediately that you want to intubate this patient, he would benefit from starting with a bag-valve mask attached to 15LPM O2 to preoxygenate him prior to intubation. Alternatively, oxygenation with a nasal cannula could be coupled with BVM ventilation."],
              feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed by oxygen administration and BVM ventilation before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
              feedbackErrors: ["Use a bag-valve mask attached to 15LPM O2 or greater to preoxygenate the patient prior to intubation. Alternatively, 25 LPM of O2 via nasal cannula while simultaneously performing BVM ventilations with high-flow oxygen could be used for pre-oxygenation."],
              examine: false,
              prompts: "",
              subActionsList: false,
              subActions: [{
                id: "intv-ventilation-technique-bag-valve-mask",
                label: "Ventilate the patient with bag valve mask",
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
                feedbackAbsent: ["This patient has inadequate respirations and requires ventilatory support. Even if you identify immediately that you want to intubate this patient, he would benefit from starting with a bag-valve mask attached to 15LPM O2 to preoxygenate him prior to intubation. Alternatively, oxygenation with a nasal cannula could be coupled with BVM ventilation."],
                feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed by oxygen administration and BVM ventilation before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
                feedbackErrors: ["Use a bag-valve mask attached to 15LPM O2 or greater to preoxygenate the patient prior to intubation. Alternatively, 25 LPM of O2 via nasal cannula while simultaneously performing BVM ventilations with high-flow oxygen could be used for pre-oxygenation."],
                examine: false,
                prompts: "",
                subActionsList: false,
                subActions: []
              }, {
                id: "intv-supplemental-oxygen-device-nasal-cannula",
                label: "Nasal cannula",
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
                feedbackAbsent: ["This patient has inadequate respirations and requires ventilatory support. Even if you identify immediately that you want to intubate this patient, he would benefit from starting with a bag-valve mask attached to 15LPM O2 to preoxygenate him prior to intubation. Alternatively, oxygenation with a nasal cannula could be coupled with BVM ventilation."],
                feedbackOutOfOrder: [""],
                feedbackErrors: ["Use a bag-valve mask attached to 15LPM O2 or greater to preoxygenate the patient prior to intubation. Alternatively, 25 LPM of O2 via nasal cannula while simultaneously performing BVM ventilations with high-flow oxygen could be used for pre-oxygenation."],
                examine: false,
                prompts: "",
                subActionsList: false,
                subActions: []
              }]
            }]
          }, {
            id: "intv-oro-intubation-or-advanced-airway",
            label: "Intubate the patient by placing an appropriately sized endotracheal tube or alternative/rescue airway",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Ultimately, this patient should be intubated. This patient has a GCS score of 3; remember, GCS <8, intubate. Since he is unconscious, you need a reliable way to oxygenate and ventilate this patient. While BVM ventilation with an adjunct may be appropriate for a short transport, this near-drowning patient is at increased risk for aspiration, so securing an airway is the best course of action. Orotracheal intubation would be most appropriate because he lacks a gag reflex."],
            feedbackOutOfOrder: [""],
            feedbackErrors: ["Inserting an appropriately sized endotracheal tube (ETT) is the most appropriate method of securing this patient's airway, since he lacks a gag reflex.  An advanced airway would be indicated if the airway cannot be secured with an ET tube due to difficulty intubating the patient.", "Calculate the appropriate size ET tube for a child with the equation age/4 +1. This is the correct size for an uncuffed tube; go down by .5 for a cuffed tube. This child needed a 4.5 cuffed or 5.0 uncuffed tube.  The insertion depth for children is 3cm * (tube size), so about 15cm.", "If using an advaned/rescue airway, reference the Broslow Tape for the acceptable size, but remember that Combitubes are not sized for children."],
            examine: true,
            prompts: "Didn't realize the patient needed to be intubated; Didn't recall how to calculate the size of an ET tube for a child; Didn't recall how to calculate the depth of an ET tube for a child",
            subActionsList: false,
            subActions: [{
              id: "intv-orotracheal-intubation",
              label: "",
              type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
              feedbackAbsent: ["Ultimately, this patient should be intubated. This patient has a GCS score of 3; remember, GCS <8, intubate. Since he is unconscious, you need a reliable way to oxygenate and ventilate this patient. While BVM ventilation with an adjunct may be appropriate for a short transport, this near-drowning patient is at increased risk for aspiration, so securing an airway is the best course of action. Orotracheal intubation would be most appropriate because he lacks a gag reflex."],
              feedbackOutOfOrder: [""],
              feedbackErrors: ["Inserting an appropriately sized endotracheal tube (ETT) is the most appropriate method of securing this patient's airway, since he lacks a gag reflex.  An advanced airway would be indicated if the airway cannot be secured with an ET tube due to difficulty intubating the patient.", "Calculate the appropriate size ET tube for a child with the equation age/4 +1. This is the correct size for an uncuffed tube; go down by .5 for a cuffed tube. This child needed a 4.5 cuffed or 5.0 uncuffed tube.  The insertion depth for children is 3cm * (tube size), so about 15cm.", "If using an advaned/rescue airway, reference the Broslow Tape for the acceptable size, but remember that Combitubes are not sized for children."],
              examine: false,
              prompts: "",
              subActionsList: false,
              subActions: []
            }, {
              id: "intv-insert-advanced-airway",
              label: "",
              type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ALT,
              alternativeToIntv: "intv-orotracheal-intubation",
              feedbackAbsent: ["Ultimately, this patient should be intubated. This patient has a GCS score of 3; remember, GCS <8, intubate. Since he is unconscious, you need a reliable way to oxygenate and ventilate this patient. While BVM ventilation with an adjunct may be appropriate for a short transport, this near-drowning patient is at increased risk for aspiration, so securing an airway is the best course of action. Orotracheal intubation would be most appropriate because he lacks a gag reflex."],
              feedbackOutOfOrder: [""],
              feedbackErrors: ["Inserting an appropriately sized endotracheal tube (ETT) is the most appropriate method of securing this patient's airway, since he lacks a gag reflex.  An advanced airway would be indicated if the airway cannot be secured with an ET tube due to difficulty intubating the patient.", "Calculate the appropriate size ET tube for a child with the equation age/4 +1. This is the correct size for an uncuffed tube; go down by .5 for a cuffed tube. This child needed a 4.5 cuffed or 5.0 uncuffed tube.  The insertion depth for children is 3cm * (tube size), so about 15cm.", "If using an advaned/rescue airway, reference the Broslow Tape for the acceptable size, but remember that Combitubes are not sized for children."],
              examine: false,
              prompts: "",
              subActionsList: false,
              subActions: []
            }]
          }]
        }, {
          id: "confirm-tube-placement",
          label: "Confirm tube placement by checking ETCO2 capnography, listening for bilateral lung sounds and absence of gastric sounds",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Confirm tube placement by checking ETCO2 capnography, listening for bilateral lung sounds and absence of gastric sounds.  You should visualize the tube passing through the vocal cords as initial confirmation when performing the procedure."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-open-airway-method-head-tilt",

          /*contraindicated intervention */
          label: "Head tilt chin lift",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A head-tilt chin lift is contraindicated for a patient with suspected c-spine injury as tilting the head could cause further damage to the neck. You should have used a modified jaw thrust to check this patient's airway."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-manual-finger-sweep",

          /* contraindicated intervention */
          label: "Manual (finger sweep)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, a blind finger sweep is contraindicated as it could lodge a foreign body deeper into the airway."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-magill-forceps-assisted",

          /* contraindicated intervention */
          label: "Magill forceps assisted removal",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["If there is a visible foreign body in the mouth, it should be removed. However, there is no evidence of a foreign body in this patient's mouth."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-heimlich-maneuver",

          /* contraindicated intervention */
          label: "Heimlich Maneuver",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object, so the Heimlich maneuver is not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-back-blows-and-chest-thrusts",

          /* contraindicated intervention */
          label: "Back blows and chest thrusts",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["You have no evidence the patient is choking on an object, so the Heimlich maneuver is not appropriate at this time."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-nasotracheal-intubation",

          /* contraindicated intervention */
          label: "Nasotracheal intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Nasotracheal intubation is only indicated for specific scenarios where access via the mouth is limited, such as profuse angioedema or trismus. It is a blind procedure and much more difficult than orotracheal intubation so in this patient who has a patent and intact oral airway, orotracheal intubation is preferred."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-rapid-sequence-intubation",

          /* contraindicated intervention */
          label: "Rapid-sequence intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["RSI is not in the paramedic's scope of practice in Pennsylvania"],
          examine: true,
          prompts: "didn't know what type of intubation can be performed in pediatric patients in PA.",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-sedation-assisted-intubation",

          /* contraindicated intervention */
          label: "Sedation-assisted intubation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["Sedation assisted intubation is contraindicated for pediatric patients in PA.  Since this patient is unconscious, orotracheal intubation would be the best option for securing the patient's airway."],
          examine: true,
          prompts: "didn't know what type of intubation can be performed in pediatric patients in PA.",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-needle-cricothyrotomy",

          /* contraindicated intervention */
          label: "Needle cricothyrotomy",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-surgical-cricothyrotomy",

          /* contraindicated intervention */
          label: "Surgical cricothyrotomy",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["A cricothrotomy is indicated when there is an upper airway obstruction that cannot be removed. This patient has a patent airway."],
          examine: true,
          prompts: "thought the patient had an upper airway obstruction",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "breathing",
        label: "Assess the patient's breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["After assessing the patient's airway, assess their breathing by listening for breath sounds and observing their respiratory rate, rhythm, and effort.", "You would have found bradypnea and heard gurgling.  This should have prompted you to apply BVM ventilation or other ventilatory support."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "breathing-checks-rate",
          label: "rate",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A significantly elevated or depressed respiratory rate can suggest impending respiratory failure.", "This patient's bradypnea suggests the need for ventilatory support, not just oxygenation."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-rhythm",
          label: "rhythm",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Although not found in this case, a patient who is breathing irregularly needs ventilatory support."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "breathing-checks-quality",
          label: "quality",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Sounds like stridor, crackles, or wheezing will help you diagnose and manage your patient's respiratory problems.", "This patient had gurgling and bilateral rhonchi, suggesting the need for ventilatory support, not just oxygenation."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "Manage inadequate breathing",
        label: "Manage inadequate breathing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["The patient's respiratory rate is 6 with rhonchi appreciable on exam and no SpO2 capture. This patient needs both oxygen and ventilatory support, so O2 via nasal canula or ventimask would be inadequate."],
        feedbackOutOfOrder: ["Problems with ventilation and oxygenation are life threatening and should be addressed before you move on to your secondary survey. Repeat your exam and check vitals to ensure your interventions have worked as you expected. If not, your patient may deteriorate as you continue on with your examination."],
        feedbackErrors: [""],
        examine: true,
        prompts: "didn't realize that the patient's respiratory status was threatened ",
        subActionsList: true,
        subActions: [{
          id: "intv-ventilation-technique-bag-valve-mask",
          label: "ventilating the patient at a rate of 20 BPM, while titrating oxygen at a flow rate of 15 L/min to a target SpO2 >= 90%",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The patient's respiratory rate is 6 with rhonchi appreciable on exam and no SpO2 capture. This patient needs both oxygen and ventilatory support, so O2 via nasal canula or Ventimask would be inadequate."],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient should have been ventilated at a rate of 20 breaths per minute, which is the recommended rate for a child aged 2-12. When performing BVM ventilation, you use 15LPM O2 in order to both oxygenate and ventilate the patient to a target SpO2 >90%."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "reassess-AB",
          label: "Check that airway/breathing interventions are working by requesting relevant vitals--in particular, BP, HR, and SpO2",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["BVM compliance is necessary during ventilations. This includes proper head positioning (sniffing the morning air position), proper positioning of the body (upper thorax elevated), and a proper BVM seal. If relevant vital signs (e.g., SPO2) do not improve or ventilations do not seem to be working, these factors should be reassessed. Other medical etiologies (choking, pneumothorax, vomitus in the airway, etc. should be considered) in such cases. If the patient continues to fail to improve, you may need to consider more invasive interventions, such as intubation."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-supplemental-oxygen-device-non-rebreather-mask",

          /* unnecessary intervention */
          label: "Non-rebreather mask",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["This patient was unresponsive with slow, gurgling breaths, indicating need for ventilation, not just oxygenation. O2 delivery via a non-rebreather mask would not be adequate in this case, as it assists with oxygenation but does not assist with ventilation."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-occlusive-dressing",

          /* contraindicated intervention */
          label: "Occlusive dressing",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["The patient did not have a penetrating chest wound."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-pleural-decompression",

          /* contraindicated intervention */
          label: "Needle decompression",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["The patient did not have a tension pneumothorax. Notice that the patient had equal lung sounds bilaterally and improved after intubation."],
          examine: true,
          prompts: "thought the child had a tension pneumothorax",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "circulation",
        label: "Assess the patient's circulation",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Evaluate the patient's pulse and skin to assess the patient for shock.  Be sure to also perform a gross blood sweep.", "You would have noticed that your patient had weak slow pulses and dry cyanotic skin, indicating impending respiratory failure."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "pulse-checks",
          label: "check pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["First check for a radial pulse. However, if you don't feel one, you want to check a carotid pulse to determine if the patient is truly pulseless or if distal pulses are weak because of another reason (most frequently because of shock)."],
          feedbackOutOfOrder: ["All unconscious patients should have a pulse check before starting the ABCs. However, paramedics often check breathing while doing a pulse check.  If the patient is pulseless, you will start high-quality CPR immediately.", "An acronym used by some providers for unconscious patients is CABC, which referes to a pulse check (while simaltaneously feeling for breathing) before the assessment of the rest of the ABCs.)"],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-pulse-rate",
            label: "rate",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Checking this patient's pulse rate would have revealed that he was bradycardic. A significantly elevated or depressed pulse rate can suggest shock or respiratory failure."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-rhythm",
            label: "rhythm",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["While this patient's heart had a regular rhythm, remember that an irregular rhythm can suggest impending cardiac arrest or arrhythmia."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-pulse-quality",
            label: "quality",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["Checking this patient's pulse quality would have revealed that he had weak radial pulses, indicating inadequate cardiac output."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "checks-skin",
          label: "checks skin",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [{
            id: "checks-skin-color",
            label: "color",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["By checking this patient's skin color, you would have noticed he had dry, cyanotic skin. Pallor and cyanosis are signs of inadequate oxygenation and may be caused by respiratory failure or shock."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-temperature",
            label: "temperature",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["By checking skin temperature, you would have noticed cold skin, which could be because of inadequate perfusion (decompensated shock) or environmental factors."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }, {
            id: "checks-skin-condition",
            label: "condition",
            type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
            feedbackAbsent: ["In this case, the patient had been pulled from a pool, making a skin exam challenging, but remember that clammy, diaphoretic skin suggests shock."],
            feedbackOutOfOrder: [""],
            feedbackErrors: [""],
            examine: false,
            prompts: "",
            subActionsList: false,
            subActions: []
          }]
        }, {
          id: "assess-major-bleeding",
          label: "Perform a gross blood sweep",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A gross blood sweep, which was negative in this patient, will help you identify any life-threatening bleeding you may have missed earlier when forming your general impression."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-control-severe-bleeding-technique-direct-pressure",

        /* contraindicated intervention */
        label: "Direct pressure",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-tourniquet",

        /* contraindicated intervention */
        label: "Tourniquet",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-2nd-tourniquet",

        /* contraindicated intervention */
        label: "Second tourniquet",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-pack-wound-with-gauze",

        /* contraindicated intervention */
        label: "Pack wound with gauze or hemostatic gauze",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-pressure-bandage",

        /* contraindicated intervention */
        label: "Pressure dressing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-severe-bleeding-technique-load-and-go",

        /* contraindicated intervention */
        label: "Load and go due to uncontrolled bleeding.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have significant bleeding."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "transport-decision",
        label: "Make appropriate transport decisions based on your findings so far",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Your ABCs and evaluation for life threats and level of consciousness will dictate where you transfer your patient.", "This patient was critically ill so you should have decided to transport him to the level 1 pediatric trauma center."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "decision-is-load-and-go",
          label: "Determine that this is a critical patient",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient is unconscious and needs ventilatory support. This patient should be considered critical."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: true,
          prompts: "didn't realize this was a critically ill patient; felt this patient should be further stabilized on site prior to transfer",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-transport",
          label: "Decide to transport this patient to a Level 1 pediatric trauma center by air ambulance",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: ["Initial transport decisions should be made following the 'Primary Survey' (ABCs) because that is when the provider decides whether the patient can be further stabilized on scene or taken directly to a hospital in a 'load and go' scenario. The secondary assessment is only performed on scene if the situation is NOT a 'load and go.' Making transport decisions early is especially important if you are calling for an air ambulance to account for the time it takes for them to arrive."],
          feedbackErrors: ["This patient requires a pediatric trauma center because of age and physiological criteria. The physiological criteria indicating that the patient requires this type of facility are respiratory rate of less than 10 and GCS <5 (not following commands)"],
          examine: true,
          prompts: "did not realize patient requires higher level of service than level II adult facility",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-call-for-air-ambulance",
          label: "Call for an air ambulance",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Given the time required for an air ambulance to arrive, you should call for one as soon after you decide to transport the patient by helicopter as possible, after completing your Primary Survey."],
          feedbackOutOfOrder: ["Call for an air ambulance before beginning your secondary survey to account for the time it takes for them to arrive."],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "trauma-expose",
        label: "Trauma expose the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Without exposing your patient, your head-to-toe exam may be hindered and you could miss an important exam finding."],
        feedbackOutOfOrder: ["It is important expose your patient to ensure that your secondary survey can be performed efficiently -- especially in trauma scenarios where there may be more unknown injuries. Exposing the patient allows the provider to more carefully examine the patient during assessment."],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "history-taking",
      label: "Obtain or direct a partner to obtain a patient history",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["Vital signs will help you decide how to manage your patient, as will a history. Even if you cannot obtain a history from the patient directly, you should still try to get as much information as you can (e.g., from a bystander)."],
      feedbackOutOfOrder: ["You should have obtained a set of vitals or directed a partner to do so before beginning your Secondary Survey. A patient's vital signs may prompt you to repeat parts of your Primary Assessment before moving onto the Secondary Survey."],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "required-action-obtains-vitals",
        label: "Baseline vital signs",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Baseline vitals are critical; they will help you assess, manage, and continue to monitor your patient.", "You would have found that this patient was bradycardic, bradypnic, hypoxic, and hypotensive, alerting you to a critical patient who needed prompt intervention."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-attempt-obtain-sample",
        label: "SAMPLE (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Take an efficient but thorough history from the baby sitter: symptoms, allergies, medications, past medical history, last oral intake, events preceding.", "You would have learned that the child was left unattended on a floating mattress in the pool for 5 minutes, found underwater, and then pulled out of the pool."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "required-action-obtain-OPQRST",
        label: "OPQRST (if possible)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["Assess the patient's pain: onset, provocation/palliation, quality, region/radiation, severity, and time. If the patient cannot tell you his or herself, you should ask a family member or other bystander for whatever information they may have."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }, {
      id: "secondary-assessment",
      label: "Perform a Secondary Survey (rapid trauma assessment)",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: ["The Secondary Survey is a thorough exam of your patient to ensure you have a complete understanding of what is going on and how you need to manage your patient."],
      feedbackOutOfOrder: [""],
      feedbackErrors: [""],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "head",
        label: "examine the patient's head",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-and-palpates-skull",
          label: "Inspect and palpate the scalp and skull",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-inspects-facial-bones",
          label: "Inspect and palpate the facial bones",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-eyes",
          label: "Inspect the eyes",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: true,
          subActions: [
          /* subActions used for analysis but not for listing as bullet points
             summary of combined subActions' statuses will be in "inspect-eyes" status */
          {
            id: "inspects-eyes-PERRLA",
            //an example of needing to bottom out at a defined interface id
            feedbackAbsent: ["Checking for PERRLA would have revealed that the patient's pupils were equal but sluggish, suggesting possible intracranial injury and a critically ill patient who needed rapid transfer to a trauma center."],
            subActions: []
          }, {
            id: "inspects-eyes-racoon",
            feedbackAbsent: ["This aspect of the exam was normal in this patient but bruising around the eyes may be caused by basilar skull fracture."],
            subActions: []
          }]
        }, {
          id: "inspects-ears",
          label: "Inspect the ears for blood, other fluids, and bruising (\"battle signs\")",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Bleeding from the ear may be indicative of a basilar skull fracture. Bruising behind the ear suggests a basilar skull fracture (Battle's sign)."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-ears-blood",
            feedbackAbsent: ["Bleeding from the ear may be indicative of a basilar skull fracture."],
            subActions: []
          }, {
            id: "inspects-ears-bruising",
            feedbackAbsent: ["Bruising behind the ear suggests a basilar skull fracture (Battle's sign)."],
            subActions: []
          }]
        }, {
          id: "inspects-nose-secretions",
          label: "Inspect the nose for blood and other fluids",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Clear drainage may be CSF from a basilar skull fracture."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-mouth",
          label: "Inspect the mouth for blood, other secretions, and obstructions",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["During your primary survey, you should have noticed water and vomit in the patient's mouth; you should have suctioned the patient's airway.  If you had done this, at this stage the patient's airway would be clear of secretions. If you had not suctioned the airway, there would still be vomit and water in the mouth."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-mouth-fluids",
            feedbackAbsent: ["During your primary survey, you should have noticed water and vomit in the patient's mouth; you should have suctioned the patient's airway.  If you had done this, at this stage the patient's airway would be clear of secretions. If you had not suctioned the airway, there would still be vomit and water in the mouth."],
            subActions: []
          }, {
            id: "inspects-mouth-obstructions",

            /* no feedback in excel sheet */
            feedbackAbsent: [""],
            subActions: []
          }]
        }]
      }, {
        id: "neck",
        label: "examine the patient's neck",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-neck-injury",
          label: "injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-tracheal-deviation",
          label: "tracheal deviation",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, tracheal deviation suggests unequal intrathoracic pressure (for example, a pneumothorax). The trachea will be deviated away from the side with increased pressure."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-JVD",
          label: "jugular venous distension (JVD)",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, JVD suggests that the heart is not adequately pushing out blood. Consider obstructive processes like a tension pneumothorax or hemothorax."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-stepoffs",
          label: "step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["This patient's neck exam was normal, but remember, a palpable step-off suggests a fracture."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "chest",
        label: "examine the patient's chest",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-check-breath-sounds",
          label: "Listen for breath sounds",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["The presence and quality of breath sounds can clue you into underlying problems (e.g., pneumothorax, asthma, fluid build-up in the lungs).", "This patient had rales and crackles, suggesting fluid in the alveoli and interstitium of the lungs and possible pulmonary edema."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-shoulders",
          label: "Inspect and palpate shoulders",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],

          /* no feedback on excel sheet */
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "assessment-clavicles",
          label: "Inspect and palpates clavicles",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],

          /* no feedback on excel sheet */
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-anterior-thorax",
          label: "Inspect and palpate anterior thorax for injury, crepitation, and paradoxial motion or flail segments",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If the patient had had anterior thorax and rib crepitation, you should suspect air outside of the lungs, which whould raise your suspicion for a pneumothorax.", "The patient had symmetric movement of his chest. Recall that paradoxical chest wall motion suggests flail chest, where multiple rib fractures lead to an unstable portion of the chest wall."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-chest-injury",
            feedbackAbsent: [""],

            /* no feedback on excel sheet */
            subActions: []
          }, {
            id: "inspects-palpates-anterior-thorax-crepitation",
            feedbackAbsent: ["If the patient had had anterior thorax and rib crepitation, you should suspect air outside of the lungs, which whould raise your suspicion for a pneumothorax."],
            subActions: []
          }, {
            id: "inspects-anterior-thorax-paradoxical-motion",
            feedbackAbsent: ["The patient had symmetric movement of his chest. Recall that paradoxical chest wall motion suggests flail chest, where multiple rib fractures lead to an unstable portion of the chest wall."],
            subActions: []
          }]
        }]
      }, {
        id: "abdomen-pelvis",
        label: "examine the patient's abdomen",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-abdomen-injury",
          label: " inspect and palpate for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],

          /* no feedback on excel sheet */
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-distension",
          label: "inspect and palpate for distension",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A distended abdomen suggests trauma and internal bleeding. Fortunately, the patient's abdominal exam was normal."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-palpates-abdomen-rigidity",
          label: "inspect and palpate for rigidity",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A rigid abdomen suggests trauma and internal bleeding. Fortunately, the patient's abdominal exam was normal."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "assess-pelvis",
        label: "examine the patient's pelvis",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "assessment-checks-pelvis",
          label: "Inspect and compress the pelvis",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Be sure to do a thorough exam of the pelvis as the pelvis can be a source of life-threatening bleeding. Fortunately, the patient's pelvis exam was normal."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "inspects-genitalia-perineum-blood",
          label: "Inspect the genitalia/perineum for blood and other fluids",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],

          /* no feedback in excel sheet */
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "extremities",
        label: "examine the patient's upper and lower extremities",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-extremities-injury",
          label: "Inspect and palpate each extremity for injury",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],

          /* no feedback in excel sheet */
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-injury",
            subActions: []
          }, {
            id: "inspects-left-arm-injury",
            subActions: []
          }, {
            id: "inspects-right-leg-injury",
            subActions: []
          }, {
            id: "inspects-left-leg-injury",
            subActions: []
          }]
        }, {
          id: "inspects-extremities-pulse",
          label: "Inspect and palpate each extremity for pulse",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["If you had checked this patient's extremity pulses, you would have noticed weak extremity pulses, due to inadequate cardiac output."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-pulse",
            feedbackAbsent: ["If you had checked this patient's extremity pulses, you would have noticed weak extremity pulses, due to inadequate cardiac output."],
            subActions: []
          }, {
            id: "inspects-left-arm-pulse",
            feedbackAbsent: ["If you had checked this patient's extremity pulses, you would have noticed weak extremity pulses, due to inadequate cardiac output."],
            subActions: []
          }, {
            id: "inspects-right-leg-pulse",
            feedbackAbsent: ["If you had checked this patient's extremity pulses, you would have noticed weak extremity pulses, due to inadequate cardiac output."],
            subActions: []
          }, {
            id: "inspects-left-leg-pulse",
            feedbackAbsent: ["If you had checked this patient's extremity pulses, you would have noticed weak extremity pulses, due to inadequate cardiac output."],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-motor-function",
          label: "Inspect and palpate each extremity for motor function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Generally, diminished or absent mobility may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-motor-ability",
            feedbackAbsent: ["Generally, diminished or absent mobility may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }, {
            id: "inspects-left-arm-motor-ability",
            feedbackAbsent: ["Generally, diminished or absent mobility may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }, {
            id: "inspects-right-leg-motor-ability",
            feedbackAbsent: ["Generally, diminished or absent mobility may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }, {
            id: "inspects-left-leg-motor-ability",
            feedbackAbsent: ["Generally, diminished or absent mobility may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }]
        }, {
          id: "inspects-extremities-sensory-function",
          label: "Inspect and palpate each extremity for sensory function",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Generally, diminished or absent sensation may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-right-arm-sensory-function",
            feedbackAbsent: ["Generally, diminished or absent sensation may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }, {
            id: "inspects-left-arm-sensory-function",
            feedbackAbsent: ["Generally, diminished or absent sensation may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }, {
            id: "inspects-right-leg-sensory-function",
            feedbackAbsent: ["Generally, diminished or absent sensation may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }, {
            id: "inspects-left-leg-sensory-function",
            feedbackAbsent: ["Generally, diminished or absent sensation may suggest spinal cord or other nervous system injury, but you were not able to perform a motor assessment in this unconscious patient."],
            subActions: []
          }]
        }]
      }, {
        id: "posterior",
        label: "examine the patient's posterior thorax, lumbar, and buttocks",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["You will need a partner to help you roll the patient safely in order to do a thorough exam of the posterior thorax, lumbar, and buttocks."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "inspects-palpates-posterior",
          label: "inspect and palpate the posterior thorax, lumbar, and buttocks for injury and step-offs",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["A palpable step-off, which the patient did not have, would suggest a fracture."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: [{
            id: "inspects-posterior-other-injury",
            feedbackAbsent: [""],

            /* no feedback in excel sheet */
            subActions: []
          }, {
            id: "inspects-posterior-step-offs",
            feedbackAbsent: ["A palpable step-off, which the patient did not have, would suggest a fracture."],
            subActions: []
          }]
        }]
      }]
    }, {
      id: "Perform ongoing patient assessment and management",
      label: "Continue to provide adequate prehospital care until arriving at the receiving faciliaty",
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
      feedbackAbsent: [""],
      feedbackOutOfOrder: [""],
      feedbackErrors: ["How to transfer your patient to the stretcher depends on your level of concern for spinal injury but you should do so with minimal movement to the spine", "Given the low concern for further spinal injury (i.e. the patient was unlikely to have been diving), you could carefully place him directly on the stretcher, with manual c-spine stabilization and a c-collar in place. Alternately, you could use a backboard, scoop stretcher, vacuum mattress, or other device which could be removed after placing the patient on the stretcher.", "Supine position will be required for this patient as he is intubated and in order to properly position the airway."],
      examine: false,
      prompts: "",
      subActionsList: true,
      subActions: [{
        id: "intv-place-on-stretcher-OR-immob-device",
        label: "Transfer the patient directly to the stretcher or by first placing him on an immobilization or transfer device.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["How to transfer your patient to the stretcher depends on your level of concern for spinal injury but you should do so with minimal movement to the spine", "Given the low concern for further spinal injury (i.e. the patient was unlikely to have been diving), you could carefully place him directly on the stretcher, with manual c-spine stabilization and a c-collar in place. Alternately, you could use a backboard, scoop stretcher, vacuum mattress, or other device which could be removed after placing the patient on the stretcher.", "Supine position will be required for this patient as he is intubated and in order to properly position the airway."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: [{
          id: "intv-place-directly-on-stretcher",
          label: "Transfer the patient directly to a stretcher",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["How to transfer your patient to the stretcher depends on your level of concern for spinal injury but you should do so with minimal movement to the spine", "Given the low concern for further spinal injury (i.e. the patient was unlikely to have been diving), you could carefully place him directly on the stretcher, with manual c-spine stabilization and a c-collar in place. Alternately, you could use a backboard, scoop stretcher, vacuum mattress, or other device which could be removed after placing the patient on the stretcher.", "Supine position will be required for this patient as he is intubated and in order to properly position the airway."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "intv-place-on-immobilization-device",
          label: "Transfer patient by first placing him on immobilization device",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ALT,
          alternativeToIntv: "intv-place-directly-on-stretcher",
          feedbackAbsent: [""],
          feedbackOutOfOrder: [""],
          feedbackErrors: ["How to transfer your patient to the stretcher depends on your level of concern for spinal injury but you should do so with minimal movement to the spine", "Given the low concern for further spinal injury (i.e. the patient was unlikely to have been diving), you could carefully place him directly on the stretcher, with manual c-spine stabilization and a c-collar in place. Alternately, you could use a backboard, scoop stretcher, vacuum mattress, or other device which could be removed after placing the patient on the stretcher.", "Supine position will be required for this patient as he is intubated and in order to properly position the airway."],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-spinal-immobilization-technique-transfer-to-device",

        /* unnecessary intervention */
        label: "Transfer patient to immobilization device",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["This near-drowning patient who had an unwitnessed event needs cervical spine stabilization and a cervical collar. However, further spinal immobilization is optional, given the low concern for further spinal injury (i.e. the patient was unlikely to have been diving)."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-spinal-immobilization-technique-attach-cid",

        /* unnecessary intervention */
        label: "Attach cervical immobilization device (CID)",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["This near-drowning patient who had an unwitnessed event needs cervical spine stabilization and a cervical collar. However, further spinal immobilization is optional, given the low concern for further spinal injury (i.e. the patient was unlikely to have been diving)."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "Reassess the patient",
        label: "Reassess the patient",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: true,
        subActions: [{
          id: "reassess-vital-signs",
          label: "Recheck vital signs every 5 minutes",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["Vitals should be reassessed after every intervention and every clinical change, and a critically ill patient should be reassessed more frequently to ensure he or she is still stable.", "If you had reassessed the patient's vitals after intubating the patient, you would have seen an improvement in all of his vital signs."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-primary-survey",
          label: "Repeat the Primary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change, which includes the primary survey. For example, a patient with a neck injury whose breathing was initially non-labored may develop stridor as the airway becomes swollen."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }, {
          id: "repeat-secondary-survey",
          label: "Repeat the Secondary Survey",
          type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
          feedbackAbsent: ["It is important to reassess your patient after every intervention and every clinical change, which includes your secondary survey. For example, a patient may lose their pulses if you initially failed to notice and treat a source of hemorrhage."],
          feedbackOutOfOrder: [""],
          feedbackErrors: [""],
          examine: false,
          prompts: "",
          subActionsList: false,
          subActions: []
        }]
      }, {
        id: "intv-control-shock-technique-keep-patient-warm",

        /* Collin: can you list vertically the items on the list in the field "label"? */
        label: "Keep the patient warm, using some of the following methods: (1) apply heat packs to the patient's groin or armpits, (2) remove wet clothing, (3) cover the patient with blankets, (4) turn the heat up in the ambulance.",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["It is important to keep this patient warm because hypothermia can cause additional problems or worsening of the patient's current problems, including hypotension, arrhythmias, or even cardiac arrest."],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["You could keep the patient warm by removing his wet swimsuit, applying blankets, applying heat packs to his armpits or groin, and turning up the heat in the air ambulance."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-contact-receiving-facility",
        label: "Assist the air crew with giving a patient report to the receiving facility and ETA",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["The hospital requires notification for all incoming patients 5 -15 prior to arrival, which is especially important for critical patients as the receiving team needs time to prepare equipment and space.  During patient handover to the flight crew, you should relay the information that they need to convey to the receiving facility about the patient."],
        feedbackOutOfOrder: [""],
        feedbackErrors: [""],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-establish-iv",
        label: "Establish at least one large bore IV en route",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.REQ,
        feedbackAbsent: ["All trauma patients should have at least one, ideally two, large-bore IVs placed, even if they do not require fluid resuscitation."],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["With a critical patient, you should ideally establish two large bore IV's while en route to the receiving facility, so as not to delay transfer to definitive care.  Establish as large an IV as possible. With pediatric patients, this will likely be 18-, 20-, or 22- gauge IVs."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-control-shock-technique-administer-iv-boluses",

        /* unnecessary intervention */
        label: "IV fluid resuscitation",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.UNNEC,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["While it is true the patient was hypotensive, the reason for his hypotension was his respiratory failure, not hypovolemia. Appropriate management of the patient's airway and breathing would have improved his hypotension without the need for IV fluids. In fact, you should be conservative about fluid resuscitation in a near drowning patient because pulmonary edema would further hinder the patient's respiratory status. In general, when administering fluids to children, you should bolus 20ml/kg at a time to guard against fluid overload."],
        examine: true,
        prompts: "thought that hypotension should be treated with fluid boluses regardless of etiology",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-apply-sterile-dressings",

        /* contraindicated intervention */
        label: "Apply sterile dressings",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have any signifcant injuries to the skin."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-occlusive-dressing",

        /* contraindicated intervention */
        label: "Occlusive dressing",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have any penetrating injuries."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-splint-fractures",

        /* contraindicated intervention */
        label: "Splint fractures",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have any fractures."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-sling",

        /* contraindicated intervention */
        label: "Apply sling",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have any injuries of the upper extremities."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-prepare-amputated-part",

        /* contraindicated intervention */
        label: "Prepare amputated part for transport",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["The patient did not have an amputation."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-prepare-and-administer-pain-nausea-vomiting-medications",

        /* contraindicated intervention */
        label: "Prepare and administer medications",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["This patient is unconscious. Management of life-threatening problems takes precedence, and you should not delay addressing these to manage pain, nausea, vomiting, etc."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }, {
        id: "intv-prepare-and-administer-sedative",

        /* contraindicated intervention */
        label: "Prepare and administer medications",
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.CONTRA,
        feedbackAbsent: [""],
        feedbackOutOfOrder: [""],
        feedbackErrors: ["This patient is already unconscious so does not require any further sedating medications."],
        examine: false,
        prompts: "",
        subActionsList: false,
        subActions: []
      }]
    }]
  }
};

/***/ }),

/***/ 7686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conditionalConstraints": () => (/* binding */ conditionalConstraints),
/* harmony export */   "criticalInterventions": () => (/* binding */ criticalInterventions),
/* harmony export */   "exceptionDefs": () => (/* binding */ exceptionDefs),
/* harmony export */   "globalConstraints": () => (/* binding */ globalConstraints),
/* harmony export */   "globalReassessmentFeedback": () => (/* binding */ globalReassessmentFeedback),
/* harmony export */   "globalReassessmentKn": () => (/* binding */ globalReassessmentKn),
/* harmony export */   "intvChecks": () => (/* binding */ intvChecks),
/* harmony export */   "intvStatusRules": () => (/* binding */ intvStatusRules),
/* harmony export */   "scenarioConstraintIDs": () => (/* binding */ scenarioConstraintIDs),
/* harmony export */   "vitalChecks": () => (/* binding */ vitalChecks),
/* harmony export */   "vitalsCheckFeedbackID": () => (/* binding */ vitalsCheckFeedbackID),
/* harmony export */   "vitalsCheckFeedbackLabel": () => (/* binding */ vitalsCheckFeedbackLabel),
/* harmony export */   "vitalsTakenDueToAssessmentSteps": () => (/* binding */ vitalsTakenDueToAssessmentSteps)
/* harmony export */ });
// defines which assessment steps are not required per scenario.  Provides feedback on
// why the step is not required.
const exceptionDefs = [{
  scenarioName: "M2CA",
  exceptions: [//there is a bystander but wouldn't know about any earlier pain before accident
  ["required-action-obtain-OPQRST", "This cannot be assessed when GCS < 15"], ["assess-opqrst-info", "This cannot be assessed when GCS < 15"]]
} //removed below because there is a bystander who may have info about any pain before accident

/* {scenarioName: "SC8CP", exceptions: [
       ["required-action-obtain-OPQRST", "This cannot be assessed when GCS < 15"],
       ["assess-opqrst-info", "This cannot be assessed when GCS < 15"]
       ]} */
];
/* This starts section on defining temporal constraints, conditional constraints and implications.*/

/*temporal constraints are an
index of event labels with two lists as values.
The first value is a list of event labels that the indexed event
should precede (if any) and the second value is a list of event
labels that the indexed event should follow after (if any)
*/

const globalConstraints = {
  // event < list of other events, > list of other events
  // lookup by event id to see the list of event ids that it should go before
  // and after, and the type of constraint. 
  // included constraints type with values of policy, commonSense and both.  These may be used in future to
  // decide any lead in to feedback about a constraint violation
  // type policy operators are usually "ands", type commonsense operators are ususally "ors" because
  // the ordering is looser than with policy ordering.  An operator can be blank if only one item is listed for the
  // before or for the after.  No software should be written to expect
  // this tendency between type and operators to hold.
  //Note that: 
  //- for now the software will use either the label or id to lookup constraints but id
  // is preferred.
  //- a key (first item on each line) is the first arg in the constraints and is
  //  assumed to have just one constraint applicable to
  //  it but may appear as the second arg in a constraint multiple times (2nd args are
  //  lists under before or after fields)
  //- when something is a phase or subphase with multiple actions then we look for the begining
  //  and ending actions for constraint checking.  If overlap in phases is to be allowed the constraint should
  //  be amongst lower level items and no higher level constraint should be included
  //= there is no check to make sure the constraints expressed do not conflict.  For example,
  //  saying a whole phase should be before another phase and that a particular item in the second
  //  phase can go before some other item in the first phase are in conflict with one another
  // Note: looks like I may need to allow multiple constraints to be listed under an arg1 key.  Shouldn't be
  // difficult to do but waiting to see if it is truly necessary first.  While most constraints for arg1 could
  // be combined in the list below, there is an issue with adding in scenario specific conditional constraints
  // that are expressed in a different structure.
  //"": {id: "T", before: [""], beforeOp: "", after: [], afterOp: "", type: "policy"},
  // T1
  "scene-size-up": {
    id: "T1",
    before: ["primary-survey"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "nonLeaf"
  },
  // T2
  "primary-survey": {
    id: "T2a",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "nonLeaf"
  },
  //listing the below any intervention that I think are always going to address a life threat
  "intv-open-airway-method-head-tilt": {
    id: "T2.1",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-open-airway-method-modified-jaw-thrust": {
    id: "T2.2",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T2.3 see T13 
  "intv-manual-finger-sweep": {
    id: "T2.4",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-magill-forceps-assisted": {
    id: "T2.5",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-heimlich-maneuver": {
    id: "T2.6",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-back-blows-and-chest-thrusts": {
    id: "T2.7",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T2.8 see T28.a
  // T2.9 see T28.b
  "intv-needle-cricothyrotomy": {
    id: "T2.10",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-surgical-cricothyrotomy": {
    id: "T2.11",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T2.12 see T29 
  // T2.13 see T30
  // T2.14 see T17
  "intv-control-severe-bleeding-technique-pack-wound-with-gauze": {
    id: "T2.15",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-control-severe-bleeding-technique-load-and-go": {
    id: "T2.16",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-control-shock-technique-place-patient-supine-position": {
    id: "T2.17",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-occlusive-dressing": {
    id: "T2.18",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T2.19 see T34
  // T2.20 see T10
  "intv-control-severe-bleeding-technique-direct-pressure": {
    id: "T2.21",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-control-severe-bleeding-technique-2nd-tourniquet": {
    id: "T2.22",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-control-severe-bleeding-technique-tourniquet": {
    id: "T2.23",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-control-severe-bleeding-technique-pressure-bandage": {
    id: "T2.24",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-insert-advanced-airway": {
    id: "T2.25",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-sedation-assisted-intubation": {
    id: "T2.26",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-nasotracheal-intubation": {
    id: "T2.27",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-orotracheal-intubation": {
    id: "T2.28",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T3
  "ints-call-for-helicopter": {
    id: "T3.1",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-call-for-air-ambulance": {
    id: "T3.2",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T4
  //"required-action-obtains-vitals": {id: "T4", before: ["secondary-assessment"], beforeOp: "", after: [], afterOp: "", type: "leafA"},
  // T5
  //"required-action-attempt-obtain-sample": {id: "T5", before: ["secondary-assessment"], beforeOp: "", after: [], afterOp: "", type: "leafA"},
  // T6 
  //"required-action-obtain-OPQRST": {id: "T6", before: ["secondary-assessment"], beforeOp: "", after: [], afterOp: "", type: "leafA"},
  // T7
  "intv-transport": {
    id: "T7",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: ["airway", "breathing", "circulation"],
    afterOp: "",
    type: "leafI"
  },
  // T8
  "trauma-expose": {
    id: "T8",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafA"
  },
  // T9
  "general-impression": {
    id: "T9",
    before: ["airway", "breathing", "circulation"],
    beforeOp: "and",
    after: [],
    afterOp: "",
    type: "nonLeaf"
  },
  // T10
  "intv-spinal-immobilization-technique-manual-c-spine": {
    id: "T10-T27",
    before: ["airway", "breathing", "circulation"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T11 was deleted per discussion with Sandy
  // T12 is in scenario specific constraints
  // T13 
  "intv-airway-patency-technique-suction-airway": {
    id: "T13",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T14  deleted
  //"intv-airway-patency-technique-suction-airway": {id: "14", before: ["intv-oropharyngeal-airway", "intv-nasopharyngeal-airway"], beforeOp: "", after: ["airway"], afterOp: "", type: "leafI"},
  // T15  deleted

  /* "intv-oropharyngeal-airway": {id: "T15a", before: ["intv-nasotracheal-intubation", "intv-orotracheal-intubation", "intv-sedation-assisted-intubation", 
                                "intv-rapid-sequence-intubation"], beforeOp: "or", after: [], afterOp: "", type: "leafI"},
  "intv-nasopharyngeal-airway": {id: "T15b", before: ["intv-nasotracheal-intubation", "intv-orotracheal-intubation", "intv-sedation-assisted-intubation", 
                                "intv-rapid-sequence-intubation"], beforeOp: "or", after: [], afterOp: "", type: "leafI"},
  */
  // T16 awaiting observer interface implementation decisions on how contacting medical command will be recorded
  // T17
  "intv-ventilation-technique-bag-valve-mask": {
    id: "T17",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T18 and T19 are constraints involving interventions that have been deleted
  // T20 see T2
  // T27 see T10
  // T28
  "intv-oropharyngeal-airway": {
    id: "T28.1",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  "intv-nasopharyngeal-airway": {
    id: "T28.2",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T29
  "intv-supplemental-oxygen-device-nasal-cannula": {
    id: "T29",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T30
  "intv-supplemental-oxygen-device-non-rebreather-mask": {
    id: "T30",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  },
  // T34
  "intv-pleural-decompression": {
    id: "T34",
    before: ["secondary-assessment"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafI"
  } //used during testing
  //state that ongoing management plan should go after the entirety of everything listed in after
  //"ongoing-mgmt-plan": {id: "c2", before: [ ], beforeOp: "", after: ["bsi", "scene-size-up", "primary-survey", "history-taking","secondary-assessment"], afterOp: "and", type: "commonSense"},
  // have two second args in below because some of Observer logs have one of these ids and some have the other
  //"assess-injury-mechanism": {id: "c7", before: ["required-action-consider-stabilization-of-spine", "required-action-considers-stabilize-spine"], beforeOp: "or", after: [], afterOp: "", type: "commonSense"},
  //"intv-control-severe-bleeding-technique-direct-pressure": {id: "c8", before: ["intv-control-severe-bleeding-technique-tourniquet"], beforeOp: "", after: [], afterOp: "", type: "both"},
  //"intv-control-severe-bleeding-technique-tourniquet": {id: "c9", before: ["intv-control-severe-bleeding-technique-2nd-tourniquet"], beforeOp: "", after: [], afterOp: "", type: "both"},

}; //constraints that depend on whether certain conditions hold within a scenario
//based on the scenario and the constraint ids listed under the scenario in
//scenarioConstraintIDs, the constaints defined here with the ids for the current
//scenario will be added to the general constraints about for temporal constraint testing
// Used convention of appended -c and a one up number just to indicate it is a conditional constraint.  No software
// requires this convention for the ids so it can be changed

const conditionalConstraints = {
  "pulse-checks": {
    id: "T12-c1",
    before: ["airway"],
    beforeOp: "",
    after: [],
    afterOp: "",
    type: "leafA"
  }
}; // used to simulate conditional constraints, i.e. we hardcode which conditional constraint ids as
// defined under conditionalConstraints (above) are relevant to each scenario
// although one could put global constraint ids under scenarios here, it would be redundant and may cause software
// issues

const scenarioConstraintIDs = {
  "B4CA": [],
  "B5CA": [],
  "C5CA": [],
  "SC8CP": ["T12-c1"],
  "B1CA": [],
  "M1CA": [],
  "M2CA": ["T12-c1"],
  "B7CA": [] //"": [],
  //"": []

}; //below are examples of interventions in which status should be checked.  The key intvStatusNeeded
//is true or false.  If true it means should have requested status of this intervention.  If vitals key is
//not empty then should have checked all of these vitals as well.  Will only check entries after an intervention
//up until something other than an intervention check is done
//updates wrt SC8CP-combined-goals-4-4

const intvChecks = {
  "intv-supplemental-oxygen-device-nasal-cannula": {
    intvStatusNeeded: false,
    vitalsNeeded: []
  },
  "intv-supplemental-oxygen-device-non-rebreather-mask": {
    intvStatusNeeded: false,
    vitalsNeeded: []
  },
  "intv-ventilation-technique-bag-valve-mask": {
    intvStatusNeeded: false,
    vitalsNeeded: []
  },
  "intv-pleural-decompression": {
    intvStatusNeeded: false,
    vitalsNeeded: []
  },
  "intv-occlusive-dressing": {
    intvStatusNeeded: false,
    vitalsNeeded: []
  },
  "intv-control-severe-bleeding-technique-direct-pressure": {
    intvStatusNeeded: true,
    vitalsNeeded: []
  },
  "intv-control-severe-bleeding-technique-tourniquet": {
    intvStatusNeeded: true,
    vitalsNeeded: []
  },
  "intv-nasopharyngeal-airway": {
    intvStatusNeeded: true,
    vitalsNeeded: []
  },
  "intv-control-shock-technique-administer-iv-boluses": {
    intvStatusNeeded: false,
    vitalsNeeded: []
  },
  "intv-orotracheal-intubation": {
    intvStatusNeeded: true,
    vitalsNeeded: []
  },
  "intv-oropharyngeal-airway": {
    intvStatusNeeded: true,
    vitalsNeeded: []
  },
  "intv-sedation-assisted-intubation": {
    intvStatusNeeded: true,
    vitalsNeeded: []
  } //"": {intvStatusNeeded: true, vitalsNeeded: []},  
  //"": {intvStatusNeeded: true, vitalsNeeded: []},

}; // this is the name of the assessment step or phase that will use for inserting global vitals check feedback
// use one or the other constants below but not both
// Use this one for inserting in a phase header

const vitalsCheckFeedbackLabel = undefined; //= "Ongoing Management & Reassessment"
// Use this one for inserting in a step

const vitalsCheckFeedbackID = "reassess-vital-signs";
const vitalChecks = {
  "B4CA": ["P", "R", "SpO2"],
  "B5CA": ["BP", "P", "R", "SpO2"],
  "C5CA": ["BP", "P", "R", "SpO2"],
  "SC8CP": ["BP", "P", "R", "SpO2", "ETCO2"],
  "B1CA": ["BP", "P", "R", "SpO2"],
  "M1CA": ["BP", "P", "R", "SpO2", "ETCO2"],
  "M2CA": ["BP", "P", "R", "SpO2", "ETCO2"],
  "B7CA": ["BP", "P", "R", "SpO2"]
}; //the two below expand the above and could eliminate the above
//need to write the software to handle these two structures instead of the above

const globalReassessmentKn = {
  "B4CA": {
    vitalLabels: ["P", "R", "SpO2"],
    requiredVitals: "P, R, and SpO2",
    systems: "breathing",
    criticalInterventions: "high flow O2 via nasal cannula or NRM"
  },
  "B5CA": {
    vitalLabels: ["BP", "P", "R", "SpO2"],
    requiredVitals: "BP, P, R, and SpO2",
    systems: "breathing",
    criticalInterventions: "high flow O2 with NRM or assisted BVM ventilation, needle decompression and an occlusive dressing"
  },
  "C5CA": {
    vitalLabels: ["BP", "P", "R", "SpO2"],
    requiredVitals: "BP, P, R, and SpO2",
    systems: "circulation and breathing, ",
    criticalInterventions: "direct pressure and a tourniquet, a basic adjunct, BVM ventilations with high-flow O2, and IV fluids en route to maintain SBP >= 90"
  },
  "SC8CP": {
    vitalLabels: ["BP", "P", "R", "SpO2", "ETCO2"],
    requiredVitals: "BP, P, R, SpO2 and ETCO2",
    systems: "airway and breathing",
    criticalInterventions: "an airway maneuver, suctioning, intubation, and BVM ventilation with high concentration O2"
  },
  "B1CA": {
    vitalLabels: ["BP", "P", "R", "SpO2"],
    requiredVitals: "BP, P, R, and SpO2",
    systems: "breathing",
    criticalInterventions: "NPA, BVM ventilation with high flow O2, tension pneumothorax, and needle decompression"
  },
  "M1CA": {
    vitalLabels: ["BP", "P", "R", "SpO2", "ETCO2"],
    requiredVitals: "BP, P, R, SpO2 and ETCO2",
    systems: "airway and circulation",
    criticalInterventions: "occlusive dressing on neck wound, basic airway maneuver, an NPA, sedated intubation and BVM ventilation with high flow O2"
  },
  "M2CA": {
    vitalLabels: ["BP", "P", "R", "SpO2", "ETCO2"],
    requiredVitals: "BP, P, R, SpO2 and ETCO2",
    systems: "airway, breathing and circulation",
    criticalInterventions: "direct pressure, a tourniquet, basic airway maneuver, Sedated intubation, an NPA, BVM ventilation with high flow O2, a large bore IV and IV fluids en route to maintain SBP >= 90"
  },
  "B7CA": {
    vitalLabels: ["BP", "P", "R", "SpO2"],
    requiredVitals: "BP, P, R, and SpO2",
    systems: "breathingd",
    criticalInterventions: "supplemental O2 via NRM, pleural decompression and an occlusive dressing to the entrance wound "
  }
};
const globalReassessmentFeedback = {
  good: "This patient had several abnormal baseline vitals—most notably @requiredVitals +bos  The patient needed @criticalInterventions +bos You correctly checked for improvement in these vitals to ensure that the patient's @systems was adequately managed +eos",
  errors: "This patient had several abnormal baseline vitals—most notably @requiredVitals +bos  The patient needed @criticalInterventions +bos You should have checked for improvement in all of these vitals to ensure that the patient's @systems was adequately managed +bos You missed checking @notDone +eos",
  absent: "This patient had several abnormal baseline vitals—most notably @requiredVitals +bos  The patient needed @criticalInterventions +bos You should have checked for improvement in these vitals to ensure that the patient's @systems was adequately managed +eos"
}; //at top level [] read as an or
//at next level [] read as an and
// not yet in use

const vitalsTakenDueToAssessmentSteps = {
  "GCS": [["assess-loc"], ["required-action-obtains-vitals"], ["request-vitals-GCS"]],
  "Pain": [["assess-loc"], ["required-action-obtains-vitals"], ["request-vitals-Pain"]],
  "R": [["breathing-checks-rate", "breathing-checks-rhythm", "breathing-checks-quality"], ["required-action-obtains-vitals"], ["request-vitals-R"]],
  "P": [["checked-carotid-pulse", "checks-pulse-rate", "checks-pulse-rhythm", "checks-pulse-quality"], ["checked-radial-pulse", "checks-pulse-rate", "checks-pulse-rhythm", "checks-pulse-quality"], ["required-action-obtains-vitals"], ["request-vitals-P"]],
  "Skin": [["checks-skin-color", "checks-skin-temperature", "checks-skin-condition"], ["required-action-obtains-vitals"], ["request-vitals-Skin"]],
  "BP": [["required-action-obtains-vitals"], ["request-vitals-BP"]],
  "Glucose": [["required-action-obtains-vitals"], ["request-vitals-Glucose"]],
  "ETCO2": [["required-action-obtains-vitals"], ["request-vitals-ETCO2"]],
  "SpO2": [["required-action-obtains-vitals"], ["request-vitals-Spo2"]],
  "Temp": [["required-action-obtains-vitals"], ["request-vitals-Temp"]]
}; //per scenario sets of interventions that satisfy completion of critical actions for that scenario

const criticalInterventions = {
  B4CA: [["intv-supplemental-oxygen-device-nasal-cannula"], ["intv-supplemental-oxygen-device-non-rebreather-mask"]],
  B5CA: [["intv-supplemental-oxygen-device-non-rebreather-mask", "intv-occlusive-dressing", "intv-pleural-decompression"], ["intv-ventilation-technique-bag-valve-mask", "intv-occlusive-dressing", "intv-pleural-decompression"]],
  C5CA: [["intv-control-severe-bleeding-technique-direct-pressure", "intv-control-severe-bleeding-technique-tourniquet", "intv-nasopharyngeal-airway", "intv-ventilation-technique-bag-valve-mask", "intv-control-shock-technique-administer-iv-boluses"]],
  SC8CP: [["intv-open-airway-method-modified-jaw-thrust", "intv-airway-patency-technique-suction-airway", "intv-oropharyngeal-airway", "intv-orotracheal-intubation", "intv-ventilation-technique-bag-valve-mask"], ["intv-open-airway-method-modified-jaw-thrust", "intv-airway-patency-technique-suction-airway", "intv-nasopharyngeal-airway", "intv-orotracheal-intubation", "intv-ventilation-technique-bag-valve-mask"]],
  B1CA: [["intv-nasopharyngeal-airway", "intv-ventilation-technique-bag-valve-mask", "intv-pleural-decompression"]],
  M1CA: [["intv-occlusive-dressing", "intv-open-airway-method-modified-jaw-thrust", "intv-nasopharyngeal-airway", "intv-sedation-assisted-intubation", "intv-ventilation-technique-bag-valve-mask"]],
  M2CA: [["intv-control-severe-bleeding-technique-direct-pressure", "intv-control-severe-bleeding-technique-tourniquet", "intv-open-airway-method-modified-jaw-thrust", "intv-sedation-assisted-intubation", "intv-nasopharyngeal-airway", "intv-ventilation-technique-bag-valve-mask", "intv-control-shock-technique-administer-iv-boluses"]],
  B7CA: [["intv-supplemental-oxygen-device-non-rebreather-mask", "intv-pleural-decompression", "intv-occlusive-dressing"]]
}; //could create a set of default good values but sounds like will
//want to customize the descriptive text per scenario (and may not
//always want the completely good value as an effect)

const intvStatusRules = {
  B4CA: [],
  B5CA: [],
  C5CA: [],
  SC8CP: {
    "intv-open-airway-method-modified-jaw-thrust": [["airway-has-intact-physical-structures", "patent"]],
    "intv-airway-patency-technique-suction-airway": [["airway-is-open", "open"], ["inspects-mouth-fluids", "clear"]],
    "intv-oropharyngeal-airway": [[]],
    "intv-orotracheal-intubation": [["breathing-checks-rate", "WNL"], ["breathing-checks-quality", "WNL"]],
    "intv-ventilation-technique-bag-valve-mask": [[]],
    "intv-nasopharyngeal-airway": [[]]
  },
  B1CA: [],
  M1CA: [],
  M2CA: [],
  B7CA: []
}; //all below is just for my editing purposes in the above structures
//commented out ones that don't impact assessment findings

const interventions = ["intv-open-airway-method-head-tilt", "intv-open-airway-method-modified-jaw-thrust", "intv-airway-patency-technique-suction-airway", "intv-manual-finger-sweep", "intv-magill-forceps-assisted", "intv-heimlich-maneuver", "intv-back-blows-and-chest-thrusts", "intv-oropharyngeal-airway", "intv-nasopharyngeal-airway", "intv-orotracheal-intubation", "intv-nasotracheal-intubation", //"intv-rapid-sequence-intubation",
"intv-sedation-assisted-intubation", "intv-needle-cricothyrotomy", "intv-surgical-cricothyrotomy", "intv-supplemental-oxygen-device-nasal-cannula", "intv-supplemental-oxygen-device-non-rebreather-mask", "intv-ventilation-technique-bag-valve-mask", "intv-control-severe-bleeding-technique-direct-pressure", "intv-control-severe-bleeding-technique-tourniquet", "intv-control-severe-bleeding-technique-2nd-tourniquet", "intv-control-severe-bleeding-technique-pack-wound-with-gauze", "intv-control-severe-bleeding-technique-pressure-bandage", //"intv-control-severe-bleeding-technique-load-and-go",
"intv-control-shock-technique-keep-patient-warm", "intv-control-shock-technique-place-patient-supine-position", "intv-control-shock-technique-administer-iv-boluses", "intv-occlusive-dressing", "intv-pleural-decompression", //"intv-spinal-immobilization-technique-manual-c-spine",
//"intv-spinal-immobilization-technique-cervical-collar",
//"intv-spinal-immobilization-technique-attach-cid",
//"intv-transport",
//"intv-apply-sterile-dressings",
"intv-prepare-and-administer-pain-nausea-vomiting-medications", //"intv-contact-receiving-facility",
//"intv-sling",
"intv-insert-advanced-airway" //"intv-call-for-air-ambulance",
//"intv-contact-medical-command",
//"intv-establish-iv",
//"intv-prepare-amputated-part",
//"intv-splint-fracture",
//"intv-place-on-immobilization-device",
//"intv-walk-patient-to-ambulance",
//"intv-place-directly-on-stretcher",
];

/***/ }),

/***/ 8680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorTypes": () => (/* binding */ colorTypes),
/* harmony export */   "fbTemplatesDef": () => (/* binding */ fbTemplatesDef),
/* harmony export */   "iconTypes": () => (/* binding */ iconTypes)
/* harmony export */ });
const colorTypes = {
  "Good": "text-success",
  "Caution": "text-warning",
  "Problem": "text-danger",
  "Not implemented": "text-muted"
};
const iconTypes = {
  "Good": "sentiment_satisfied",
  "Caution": "report_problem",
  "Problem": "highlight_off",
  "Not implemented": "sentiment_neutral"
}; //Feedback substitute commands for feedback template
//@ means substitute this entry field into the feedback template and if no value in field say this in feedback, 
//? means substitute this entry field into the feedback template if the value exists,
//+bos adds period to end sentence, two spaces and capitalizes first letter of what follows
//+eos adds a period with no preceding spaces
//assessmentEntries states are used by analyzeEvents, condition1 and condition2, but the rest is used only by condition 1

const fbTemplatesDef = {
  // state: [categorization for feedback, feedback template for condition 1]
  "contraindicated": ["Problem", "Incorrect intervention +bos ?why +eos"],
  "irrelevant": ["Problem", "Irrelevant intervention +bos ?why +eos"],
  "unnecessary": ["Problem", "Unnecessary intervention +bos ?why +eos"],
  "redundant": ["Problem", "Redundant intervention +bos You already did an alternative to this: @redundantToFB +eos"],
  "missingMinimal": ["Problem", "Missing intervention +bos ?why +eos"],
  //"missingOptional": ["Caution", "Missing intervention +bos but it was optional in this case +bos ?why +eos"],
  "missingRequired": ["Problem", "Missing intervention +bos ?why +eos"],
  "missingRequiredAssessment": ["Problem", "Missing assessment +bos ?assessmentFB +eos"],
  "notNecessary": ["Caution", "Unnecessary assessment +bos ?why +eos"],
  //applies only to assessment items
  //note that missing/wrong items cannot be an argument in a misordering of events so there states will not get combined with misOrdered states
  //not yet implemented
  // "missedProblem": ["Problem", "The following should alert you to @problem: +items @problemAssessments"],  //need to add status and fields to analysis code still and +item formatting below
  "assessment": ["Good", ""],
  "assessment-option": ["Good", ""],
  "decision-option": ["Good", ""],
  "required-action": ["Good", ""],
  "optional": ["Good", "?intvStatusFB +eos"],
  "goodIntv": ["Good", "?intvStatusFB +eos"],
  "misOrdered-assessment": ["Problem", "Mistimed assessment +bos @orderingFB +eos"],
  "misOrdered-assessment-option": ["Problem", "Mistimed assessment +bos @orderingFB +eos"],
  "misOrdered-decision-option": ["Problem", "Mistimed assessment +bos @orderingFB"],
  "misOrdered-required-action": ["Problem", "Mistimed intervention +bos @orderingFB"],
  "misOrdered-optional": ["Problem", "Mistimed intervention +bos @orderingFB"],
  "misOrdered-redundant": ["Problem", "Redundant intervention +bos You already did an alternative to this: @redundantToFB +eos"],
  //don't give additional feedback on redudant intervention
  "misOrdered-goodIntv": ["Problem", "Mistimed intervention +bos @orderingFB"],
  //once software re-written to optimaize all design changes, this section should be condensed to just
  //"misOrdered-phase": ["Problem", "Section not completed before starting another +bos @orderingFB +eos"]
  //since we are no longer placing the phase feedback in the first item of a phase
  "misOrdered-phase-assessment": ["Problem", "Section not completed before starting another +bos @orderingFB +eos"],
  "misOrdered-phase-assessment-option": ["Problem", "Section not completed before starting another +bos @orderingFB +eos"],
  "misOrdered-phase-decision-option": ["Problem", "Section not completed before starting another +bos @orderingFB"],
  "misOrdered-phase-required-action": ["Problem", "Section not completed before starting another +bos @orderingFB"],
  "misOrdered-phase-redundant": ["Problem", "Section not completed before starting another +bos @orderingFB"],
  "misOrdered-phase-goodIntv": ["Problem", "Section not completed before starting another +bos @orderingFB"],
  "misOrdered-phase-optional": ["Problem", "Section not completed before starting another +bos @orderingFB"],
  //assuming status checks can't be misordered
  //design of intervention & vitals status checks still in flux but current design still uses this
  "intvCheckWNoIntvFound": ["Caution", "You didn't do this intervention so it doesn't make sense to check the status of it at this point."],
  "unexpectedPatientIntvCheck": ["Caution", "This status check is not likely to reveal any useful information."],
  //nothing indicates a need to check that this intv worked
  "patientIntvCheck": ["Good", ""],
  //as long as the intervention was done and a check expected it is fine to request a status check on it
  "patientVitalCheck": ["Good", ""],
  //currently any patient vital check that is done is fine
  "assessment-option-incorrect": ["Problem", "Incorrect assessment +bos @incorrectAnswersFB +eos "],
  "decision-option-incorrect": ["Problem", "Incorrect assessment +bos @incorrectAnswersFB +eos "],
  "incorrect-answers": ["Problem", "Incorrect intervention +bos @incorrectAnswersFB +bos ?intvStatusFB +eos"],
  "optional-incorrect-answers": ["Problem", "Incorrect intervention +bos ?why +bos @incorrectAnswersFB +bos ?intvStatusFB +eos"],
  "redundant-incorrect-answers": ["Problem", "Redundant intervention +bos You already did an alternative to this: @redundantToFB +eos"],
  //minimal is no longer guaranteed to work so could remove these once verified by redesign of analysis software
  "minimal-incorrect-answers": ["Problem", "Incorrect intervention and violated protocol +bos ?minimalWhy +bos @incorrectAnswersFB +bos ?intvStatusFB +eos"],
  "minimal": ["Caution", "Violated protocol +bos @minimalWhy +bos ?intvStatusFB +eos "],
  "misOrdered-assessment-option-incorrect": ["Problem", "Incorrect assessment and mistimed +bos @orderingFB +bos @incorrectAnswersFB +eos "],
  "misOrdered-decision-option-incorrect": ["Problem", "Incorrect assessment and mistimed +bos @orderingFB +bos @incorrectAnswersFB +eos "],
  "misOrdered-incorrect-answers": ["Problem", "Incorrect intervention and mistimed +bos @orderingFB +bos @incorrectAnswersFB +bos ?intvStatusFB +eos"],
  "misOrdered-optional-incorrect-answers": ["Problem", "Incorrect intervention and mistimed +bos ?why +bos @incorrectAnswersFB +bos ?intvStatusFB +eos"],
  "misOrdered-redundant-incorrect-answers": ["Problem", "Redundant intervention +bos You already did an alternative to this: @redundantToFB +eos"],
  //minimal is no longer guaranteed to work so could remove these once verified during optimization of all design changes
  "misOrdered-minimal-incorrect-answers": ["Problem", "Incorrect intervention and mistimed +bos @orderingFB +bos @minimalWhy +bos @incorrectAnswersFB +bos ?intvStatusFB +eos"],
  "misOrdered-minimal": ["Problem", "Incorrect intervention and mistimed +bos @orderingFB +bos @minimalWhy +bos ?intvStatusFB +eos"],
  //once analysis software re-written to optimaize all design changes, this section can be eliminated
  //since we are no longer placing the phase feedback in the first item of a phase
  "misOrdered-phase-assessment-option-incorrect": ["Problem", "Incorrect assessment and mistimed +bos @incorrectAnswersFB +bos @orderingFB +eos "],
  "misOrdered-phase-decision-option-incorrect": ["Problem", "Incorrect assessment and mistimed  +bos @incorrectAnswersFB +bos @orderingFB +eos "],
  "misOrdered-phase-incorrect-answers": ["Problem", "Incorrect intervention and mistimed +bos @incorrectAnswersFB +bos @orderingFB +bos ?intvStatusFB +eos"],
  "misOrdered-phase-optional-incorrect-answers": ["Problem", "Incorrect intervention and mistimed +bos ?why +bos @incorrectAnswersFB +bos @orderingFB +bos ?intvStatusFB +eos"],
  "misOrdered-phase-redundant-incorrect-answers": ["Problem", "Redundant intervention and mistimed +bos You already did an alternative to this: @redundantToFB +bos @orderingFB +eos"],
  "misOrdered-phase-minimal-incorrect-answers": ["Problem", "Incorrect intervention and mistimed +bos @orderingFB +bos ?minimalWhy +bos @incorrectAnswersFB +bos ?intvStatusFB +eos"],
  "misOrdered-phase-minimal": ["Problem", "Misordered +bos @orderingFB +bos ?minimalWhy +bos ?intvStatusFB +eos"],
  "green": ["Good", ""],
  //just for headers
  "red": ["Problem", ""],
  //just for headers
  "yellow": ["Caution", ""],
  //just for headers
  //"notFound": ["Not implemented", "Assessment knowledge is not yet specified", []],
  "default": ["Not implemented", "This action was not expected.  There could be an issue with how this scenario is represented within the system."]
};

/***/ }),

/***/ 1488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leafStatusList": () => (/* binding */ leafStatusList),
/* harmony export */   "phaseStatusList": () => (/* binding */ phaseStatusList)
/* harmony export */ });
const phaseStatusList = {
  absent: ["absent", "missingMinimal", "missingRequired", "missingRequiredAssessment"],
  errors: ["redundant", "misOrdered-redundant", "redundant-incorrect-answers", "misOrdered-redundant-incorrect-answers", "misOrdered-assessment", "misOrdered-assessment-option", "misOrdered-decision-option", "misOrdered-required-action", "misOrdered-goodIntv", "assessment-option-incorrect", "decision-option-incorrect", "incorrect-answers", "minimal-incorrect-answers", //"minimal", 
  "misOrdered-assessment-option-incorrect", "misOrdered-decision-option-incorrect", "misOrdered-incorrect-answers", "misOrdered-minimal-incorrect-answers", "misOrdered-minimal", "irrelevant", "unnecessary", "contraindicated", "errors", "misOrdered-irrelevant", "misOrdered-alternative", "misOrdered-unnecessary", "midOrdered-contraindicated", "error", "misordered", "misordered-error", "misOrdered-phase-assessment-option-incorrect", "misOrdered-phase-decision-option-incorrect", "misOrdered-phase-incorrect-answers", "misOrdered-phase-minimal-incorrect-answers"],
  good: ["good", "assessment", "assessment-option", "decision-option", "required-action", "goodIntv", "optional", //condition 2 does not address these so put them in the good category
  "patientIntvCheck", "patientVitalCheck", "notNecessary", "notFound", "intvCheckWNoIntvFound", "unexpectedPatientIntvCheck", "default", //condition 2 does not need to address minimal as an error nor misordered-phase as that error appears as misordered at the phase or subphase level
  //condition 1 uses misOrdered-Phase as that error feedback goes on the first line in the phase/subphase
  //so without misOrdered-phase and/or minimal, these are good status values
  "minimal", "misOrdered-phase-minimal", "misOrdered-phase-assessment", "misOrdered-phase-assessment-option", "misOrdered-phase-decision-option", "misOrdered-phase-required-action", "misOrdered-phase-goodIntv"]
};
const leafStatusList = {
  absent: ["missingMinimal", "missingRequired", "missingRequiredAssessment", "absent"],
  misordered: ["misOrdered-assessment", "misOrdered-assessment-option", "misOrdered-decision-option", "misOrdered-required-action", "misOrdered-goodIntv", "misOrdered-minimal"],
  misorderedError: ["misOrdered-assessment-option-incorrect", "misOrdered-decision-option-incorrect", "misOrdered-incorrect-answers", "misOrdered-minimal-incorrect-answers", "misOrdered-phase-assessment-option-incorrect", "misOrdered-phase-decision-option-incorrect", "misOrdered-phase-incorrect-answers", "misOrdered-phase-minimal-incorrect-answers"],
  error: ["assessment-option-incorrect", "decision-option-incorrect", "incorrect-answers", "minimal-incorrect-answers", "contraindicated", "irrelevant", "unnecessary", "redundant", "redundant-incorrect-answers", "misOrdered-redundant", "misOrdered-redundant-incorrect-answers"],
  good: ["assessment", "assessment-option", "decision-option", "required-action", "goodIntv", "optional", //condition 2 does not address these so put them in the good category
  "patientIntvCheck", "patientVitalCheck", "notNecessary", "intvCheckWNoIntvFound", "unexpectedPatientIntvCheck", "default", //condition 2 does not need to address minimal as an error nor misordered-phase as that error appears as misordered at the phase or subphase level
  //condition 1 uses misOrdered-Phase as that error feedback goes on the first line in the phase/subphase
  //so without misOrdered-phase and/or minimal, these are good status values
  "minimal", "misOrdered-phase-minimal", "misOrdered-phase-assessment", "misOrdered-phase-assessment-option", "misOrdered-phase-decision-option", "misOrdered-phase-required-action", "misOrdered-phase-goodIntv"]
};

/***/ }),

/***/ 573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "NO_FEEDBACK": () => (/* binding */ NO_FEEDBACK),
/* harmony export */   "SUM_NODE_FBCK_CHILDREN": () => (/* binding */ SUM_NODE_FBCK_CHILDREN),
/* harmony export */   "SUM_NODE_NO_FEEDBACK": () => (/* binding */ SUM_NODE_NO_FEEDBACK),
/* harmony export */   "WAIT_SANDY": () => (/* binding */ WAIT_SANDY),
/* harmony export */   "WAIT_TIFF": () => (/* binding */ WAIT_TIFF)
/* harmony export */ });
const ACTION_TYPES = Object.freeze({
  REQ: "required",
  CONTRA: "contraindicated",
  UNNEC: "unnecessary",
  IRR: "irrelevent",
  OPT: "optional",
  ALT: "alternative"
});
const WAIT_TIFF = "WAITING FOR FEEDBACK FROM TIFFANY";
const WAIT_SANDY = "PLACEHOLDER";
const SUM_NODE_NO_FEEDBACK = "SUMMARY NODE WITH NO FEEDBACK";
const NO_FEEDBACK = "NO FEEDBACK PROVIDED";
const SUM_NODE_FBCK_CHILDREN = "SUMMARY NODE. NO FEEDBACK BECAUSE CHILDREN ARE SHOWN WITH FEEDBACK"; // to make use of
// import {ACTION_TYPES, WAIT_TIFF, WAIT_SANDY} from "./constants"

/***/ }),

/***/ 9205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B4CA_PhaseIE": () => (/* reexport safe */ _B4CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_5__.B4CA_PhaseIE),
/* harmony export */   "B5CA_PhaseIE": () => (/* reexport safe */ _B5CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_6__.B5CA_PhaseIE),
/* harmony export */   "C5CA_PhaseIE": () => (/* reexport safe */ _C5CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_7__.C5CA_PhaseIE),
/* harmony export */   "M2CA_PhaseIE": () => (/* reexport safe */ _Bogus_data_for_testingA__WEBPACK_IMPORTED_MODULE_8__.M2CA_PhaseIE),
/* harmony export */   "SC8CP_PhaseIE": () => (/* reexport safe */ _SC8CP_data_PhaseIE__WEBPACK_IMPORTED_MODULE_4__.SC8CP_PhaseIE),
/* harmony export */   "colorTypes": () => (/* reexport safe */ _c1Data__WEBPACK_IMPORTED_MODULE_1__.colorTypes),
/* harmony export */   "conditionalConstraints": () => (/* reexport safe */ _analysisData__WEBPACK_IMPORTED_MODULE_3__.conditionalConstraints),
/* harmony export */   "exceptionDefs": () => (/* reexport safe */ _analysisData__WEBPACK_IMPORTED_MODULE_3__.exceptionDefs),
/* harmony export */   "fbTemplatesDef": () => (/* reexport safe */ _c1Data__WEBPACK_IMPORTED_MODULE_1__.fbTemplatesDef),
/* harmony export */   "getScenarioFeedback": () => (/* reexport safe */ _mergeDataFiles__WEBPACK_IMPORTED_MODULE_0__.getScenarioFeedback),
/* harmony export */   "globalConstraints": () => (/* reexport safe */ _analysisData__WEBPACK_IMPORTED_MODULE_3__.globalConstraints),
/* harmony export */   "iconTypes": () => (/* reexport safe */ _c1Data__WEBPACK_IMPORTED_MODULE_1__.iconTypes),
/* harmony export */   "intvChecks": () => (/* reexport safe */ _analysisData__WEBPACK_IMPORTED_MODULE_3__.intvChecks),
/* harmony export */   "leafStatusList": () => (/* reexport safe */ _c2Data__WEBPACK_IMPORTED_MODULE_2__.leafStatusList),
/* harmony export */   "phaseStatusList": () => (/* reexport safe */ _c2Data__WEBPACK_IMPORTED_MODULE_2__.phaseStatusList),
/* harmony export */   "scenarioConstraintIDs": () => (/* reexport safe */ _analysisData__WEBPACK_IMPORTED_MODULE_3__.scenarioConstraintIDs),
/* harmony export */   "vitalsCheckFeedbackID": () => (/* reexport safe */ _analysisData__WEBPACK_IMPORTED_MODULE_3__.vitalsCheckFeedbackID),
/* harmony export */   "vitalsCheckFeedbackLabel": () => (/* reexport safe */ _analysisData__WEBPACK_IMPORTED_MODULE_3__.vitalsCheckFeedbackLabel)
/* harmony export */ });
/* harmony import */ var _mergeDataFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4290);
/* harmony import */ var _c1Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8680);
/* harmony import */ var _c2Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1488);
/* harmony import */ var _analysisData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7686);
/* harmony import */ var _SC8CP_data_PhaseIE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7884);
/* harmony import */ var _B4CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(827);
/* harmony import */ var _B5CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6220);
/* harmony import */ var _C5CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8547);
/* harmony import */ var _Bogus_data_for_testingA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9628);
//import if needed
//export if needed
//put accessors here or import them from another file










/***/ }),

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScenarioFeedback": () => (/* binding */ getScenarioFeedback)
/* harmony export */ });
/* harmony import */ var _B4CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(827);
/* harmony import */ var _C5CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8547);
/* harmony import */ var _SC8CP_DEBR_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1412);
/* harmony import */ var _SC8CP_data_PhaseIE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7884);




const GENERIC_STEP_D = {
  title: "Define Rules:",
  text: ["The purpose of this debriefing is to reflect on the scenario you have just completed in order to help you improve your skills as a paramedic.  It is not meant to assess your overall abilities as a paramedic.", "This debriefing will summarize the learning objectives of this scenario and the performance benchmarks (standards) for achieving each objective.  The system will then prompt you to examine differences between the treatment actions that you performed and those indicated by the clinical findings revealed during the scenario, or that would have been revealed by a more thorough assessment and reassessment of this patient.  Finally, it will prompt you to state some 'take home points' to improve your performance."]
};
const GENERIC_STEP_F = {
  title: "Formalize learning",
  heading: "Please take a few minutes to think and reply to these questions",
  questions: "What are your key take-home points from this case? What is something you want to continue working on or do differently in the future?"
};

function getStep(stepsArray, stepName) {
  return stepsArray.find(e => e.step === stepName) || null;
}

const B4CA = {
  D: GENERIC_STEP_D,
  E: null,
  B: null,
  R: null,
  IE: _B4CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_0__.B4CA_PhaseIE,
  F: GENERIC_STEP_F
};
const C5CA = {
  D: GENERIC_STEP_D,
  E: null,
  B: null,
  R: null,
  IE: _C5CA_data_PhaseIE__WEBPACK_IMPORTED_MODULE_1__.C5CA_PhaseIE,
  F: GENERIC_STEP_F
};
const SC8CP = {
  D: GENERIC_STEP_D,
  E: getStep(_SC8CP_DEBR_Data__WEBPACK_IMPORTED_MODULE_2__.SC8CP_PhaseDEBRF, "E"),
  B: getStep(_SC8CP_DEBR_Data__WEBPACK_IMPORTED_MODULE_2__.SC8CP_PhaseDEBRF, "B"),
  R: getStep(_SC8CP_DEBR_Data__WEBPACK_IMPORTED_MODULE_2__.SC8CP_PhaseDEBRF, "R"),
  IE: _SC8CP_data_PhaseIE__WEBPACK_IMPORTED_MODULE_3__.SC8CP_PhaseIE,
  F: GENERIC_STEP_F
};
function getScenarioFeedback(scenName) {
  switch (scenName) {
    case "B4CA":
      return B4CA;

    case "C5CA":
      return C5CA;

    case "SC8CP":
      return SC8CP;

    default:
      return {};
  }
}

/***/ }),

/***/ 4354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "link": () => (/* binding */ link),
/* harmony export */   "para": () => (/* binding */ para),
/* harmony export */   "text": () => (/* binding */ text)
/* harmony export */ });
function text(textString) {
  return {
    text: textString,
    hoverText: null
  };
}
function link(linkText, hoverText) {
  return {
    text: linkText,
    hoverText: hoverText
  };
}
function para(...spans) {
  return spans;
}

/***/ }),

/***/ 6011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* reexport safe */ _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__.AuthContext),
/* harmony export */   "AuthFlow": () => (/* reexport safe */ _lib_components_AuthFlow__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "AuthProvider": () => (/* reexport safe */ _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),
/* harmony export */   "PrivateRoute": () => (/* reexport safe */ _lib_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "StaffRoute": () => (/* reexport safe */ _lib_routes_StaffRoute__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5600);
/* harmony import */ var _lib_components_AuthFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2956);
/* harmony import */ var _lib_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9585);
/* harmony import */ var _lib_routes_StaffRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);






/***/ }),

/***/ 2956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5600);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9907);
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5032);
/* harmony import */ var _ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4516);
/* harmony import */ var _EmailVerification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7650);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/AuthFlow.js";








const DEFAULT_HEADING = "You must be logged in to access this page";

const AuthFlow = ({
  heading: _heading = DEFAULT_HEADING
}) => {
  const {
    currAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AuthContext);

  const getCurrComponent = () => {
    switch (currAuthComponent) {
      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.REGISTER:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 24
        }, undefined);

      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.FORGOT_PASSWD:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 24
        }, undefined);

      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.EMAIL_VERIFY:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_EmailVerification__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 24
        }, undefined);

      default:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 24
        }, undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["text-center"],
      children: _heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), getCurrComponent()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthFlow);

/***/ }),

/***/ 7650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4292);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5600);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/EmailVerification.js";






const EmailVerification = () => {
  const {
    authMsg,
    currentUser,
    setAuthFlowComponent,
    setAuthMsg,
    setEmailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  const resendVerificationEmail = () => {
    if (!currentUser.emailVerified) {
      // console.log("Resending verification email")
      currentUser.sendEmailVerification().then(() => recheckEmailVerification()).catch(error => console.log(error));
    } else {
      console.log("email address already verified");
    }
  };

  const checkVerification = () => {
    // console.log("Rechecking verification")
    currentUser.reload().then(() => {
      if (currentUser.emailVerified) {
        setEmailVerified(true);
        setAuthFlowComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AUTH_FLOW_COMPONENTS.LOGIN);
        setAuthMsg("");
      } else {
        recheckEmailVerification();
      }
    });
  };

  const recheckEmailVerification = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!currentUser.emailVerified) {
      setTimeout(() => checkVerification(), 5000);
    }
  }, [currentUser.emailVerified, checkVerification]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!currentUser.emailVerified) {
      // console.log("Email is not verified")
      setEmailVerified(false);
      recheckEmailVerification();
    } else {
      setEmailVerified(true);
      setAuthMsg("");
      setAuthFlowComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AUTH_FLOW_COMPONENTS.LOGIN);
    }
  }, [currentUser.emailVerified, recheckEmailVerification, setAuthFlowComponent, setAuthMsg, setEmailVerified] // only run on first render
  );
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        children: authMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: "You will arrive at your destination web page soon after clicking on the verification link."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: "Didn't recieve a verification email? Verification link expired? Click \"Resend Verification Email\"."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["btn-primary"]),
        onClick: resendVerificationEmail,
        children: "Resend Verification Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailVerification);

/***/ }),

/***/ 4516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5600);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/ForgotPasswordForm.js";






const ForgotPasswordForm = () => {
  const {
    sendOutPasswordReset,
    passwdResetError,
    setLoginError,
    setPasswdResetError,
    setCurrAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext); // const haveError = () => "" !== passwdResetError

  const handleRememberedPasswd = event => {
    event.preventDefault();
    setLoginError("");
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AUTH_FLOW_COMPONENTS.LOGIN);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const {
      email
    } = event.target.elements;
    setLoginError("");
    sendOutPasswordReset(email.value).then(() => {
      console.log("password reset set");
    }).catch(error => {
      setPasswdResetError(error.message);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
            children: "MedDBriefer Password Reset Form"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 24
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "email",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-sm-1"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-form-label"]),
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-sm-11"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              id: "email",
              name: "email",
              type: "email",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["form-control"],
              placeholder: "Enter email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["text-danger"],
            children: passwdResetError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "submit",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["btn-primary"]),
            children: "Send Password Reset Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "button",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["btn-link"]),
            onClick: handleRememberedPasswd,
            children: "I remembered my password!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPasswordForm);

/***/ }),

/***/ 9907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5600);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4292);
/* harmony import */ var _icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3391);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/LoginForm.js";









const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    authMsg,
    loginError,
    loginUserWithEmailAndPassword,
    setCurrAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext); // const haveMessage = () => "" !== loginError

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleForgotPassword = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_FLOW_COMPONENTS.FORGOT_PASSWD);
  };

  const handleLogin = event => {
    event.preventDefault();
    const {
      email,
      password
    } = event.target.elements;
    loginUserWithEmailAndPassword(email.value, password.value);
  };

  const handleRegister = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_FLOW_COMPONENTS.REGISTER);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: handleLogin,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "email",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-2"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-form-label"]),
            children: "Email address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-10"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "email",
              name: "email",
              type: "email",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form-control"],
              placeholder: "Enter email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "password",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-2"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-form-label"]),
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-10"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "password",
              name: "password",
              type: passwordVisible ? "text" : "password",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form-control"],
              placeholder: "Enter password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: passwordVisible,
              stateToggler: togglePasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["text-danger"],
            children: loginError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: authMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "submit",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-primary"]),
          children: "Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-link"]),
          onClick: handleForgotPassword,
          children: "I forgot my Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-link"]),
          onClick: handleRegister,
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ 5032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4292);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5600);
/* harmony import */ var _icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3391);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/RegistrationForm.js";









const RegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const {
    setCurrAuthComponent,
    registerErrorMsg,
    registerUserWithEmailAndPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_5__.AuthContext);

  const alreadyHaveAccount = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_FLOW_COMPONENTS.LOGIN); // console.log("I already have an account")
  };

  const handleSignUp = event => {
    event.preventDefault();
    const {
      email,
      password
    } = event.target.elements;
    registerUserWithEmailAndPassword(email.value, password.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: handleSignUp,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
            children: "Sign up for MedDBriefer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "classCode",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Class Code"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "classCode",
              name: "classCode",
              type: "text",
              placeholder: "example: demo",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "emailAddress",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "emailAddress",
              name: "email",
              type: "email",
              placeholder: "example: john.doe@gmail.com",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "password",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "password",
              name: "password",
              type: passwordVisible ? "text" : "password",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              placeholder: "Enter password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: passwordVisible,
              stateToggler: togglePasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "confirmPassword",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Confirm Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "confirmPassword",
              name: "confirmPassword",
              type: confirmPasswordVisible ? "text" : "password",
              placeholder: "Password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: confirmPasswordVisible,
              stateToggler: toggleConfirmPasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["text-danger"],
            children: registerErrorMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "submit",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["btn-primary"]),
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["btn-link"]),
          onClick: alreadyHaveAccount,
          children: "I already have an account."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationForm);

/***/ }),

/***/ 3391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/icons/PasswordVisibilityIcon.js";





const PasswordVisibilityIcon = ({
  visible,
  stateToggler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["input-group-text"], "material-icons-outlined"),
    onClick: stateToggler,
    children: visible ? "visibility" : "visibility_off"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordVisibilityIcon);

/***/ }),

/***/ 5600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_FLOW_COMPONENTS": () => (/* binding */ AUTH_FLOW_COMPONENTS),
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9526);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/contexts/Auth.js";




 // for development purposes, expose db to the dev console
// window.db = db


const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createContext({});
const PASSWORD_RESET_SUCCESS_MSG = "You should soon recieve an email with a password reset link it. " + "After reseting you password, you will be able to sign in.";
const EMAIL_VERIFY_MESSAGE = "A message has been sent to your email address. It contains a link which will " + "verify that you are the owner of that email address";
const ERROR_CODE_UNKNOWN_USER = "auth/user-not-found";
const ERROR_CODE_WRONG_PASSWD = "auth/wrong-password";
const ERROR_CODE_ACCT_ALREADY_EXISTS = "auth/email-already-in-use";
const ERROR_CODE_NETWORK_ERROR = "auth/network-request-failed";
const UNKNOWN_USER_ERROR_MSG = "Sorry, we have no record of a user with your email address";
const WRONG_PASSWD_ERROR_MSG = "Incorrect Password. Try again.";
const ACCT_ALREADY_EXISTS_ERROR_MSG = "An account already exists with that email address";
const NETWORK_ERROR_MSG = "A Network Error has occurred. Try again later.";
const AUTH_FLOW_COMPONENTS = {
  LOGIN: "signin",
  REGISTER: "register",
  FORGOT_PASSWD: "forgot-passwd",
  EMAIL_VERIFY: "email-verify"
};
function AuthProvider({
  children
}) {
  const {
    auth,
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();
  const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [authMsg, setAuthMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [currAuthComponent, setCurrAuthComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(AUTH_FLOW_COMPONENTS.LOGIN);
  const [registerErrorMsg, setRegisterErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [loginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [passwdResetError, setPasswdResetError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [isStaff, setIsStaff] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [emailVerified, setEmailVerified] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [userPrefs, setUserPrefs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});

  const userIsStaff = async user => {
    // returns bool regarding whether user is authenticated and whether they have
    // "staff" privileges.
    // if a user has staff privs, a document will exist in the "staff" db collection
    // whose document id represents their uid
    if (!user) {
      return false;
    }

    const docRef = db.collection("staff").doc(user.uid);
    const doc = await docRef.get();
    return doc.exists;
  };

  const signOutUser = () => {
    auth.signOut().then(() => {
      setUnauthedState();
    }).catch(error => console.log(error));
  };

  const setUnauthedState = () => {
    setIsAuthenticated(false);
    setIsStaff(false);
    setUserName(null);
    setEmailVerified(false);
  };

  const registerUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
      userCredential.user.sendEmailVerification();
      setRegisterErrorMsg("");
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_ACCT_ALREADY_EXISTS:
          setRegisterErrorMsg(ACCT_ALREADY_EXISTS_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setRegisterErrorMsg(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setRegisterErrorMsg(error.message);
          break;
      }
    });
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      setLoginError("");
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_WRONG_PASSWD:
          setLoginError(WRONG_PASSWD_ERROR_MSG);
          break;

        case ERROR_CODE_UNKNOWN_USER:
          setLoginError(UNKNOWN_USER_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setLoginError(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setLoginError(error.message);
          break;
      }
    });
  };

  const sendOutPasswordReset = email => {
    auth.sendPasswordResetEmail(email).then(() => {
      setAuthMsg(PASSWORD_RESET_SUCCESS_MSG);
      setCurrAuthComponent(AUTH_FLOW_COMPONENTS.LOGIN);
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_UNKNOWN_USER:
          setPasswdResetError(UNKNOWN_USER_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setPasswdResetError(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setPasswdResetError(error.message);
          break;
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    auth.onAuthStateChanged(user => {
      // handle changes in auth state - does this include emailVerified changes???
      setCurrentUser(user);

      if (user) {
        setIsAuthenticated(true); // set userName to whatever is before the "@" in the user's email address

        setUserName(user.email.substr(0, user.email.indexOf("@")));
        userIsStaff(user).then(res => {
          setIsStaff(res);

          if (!user.emailVerified) {
            setAuthMsg(EMAIL_VERIFY_MESSAGE);
            setCurrAuthComponent(AUTH_FLOW_COMPONENTS.EMAIL_VERIFY);
          } else {
            setEmailVerified(true);
          }
        }).catch(err => console.error(err));
      } else {
        setUnauthedState();
      }
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [] // only run on first render
  ); // Return current users document

  const getUserDoc = () => db.collection("users").doc(currentUser.uid) || null; // Update or create user data in db


  const saveUserData = (field, data) => {
    getUserDoc().set({
      [field]: data
    }, {
      merge: true
    });
  };

  const getUserData = async () => {
    let data = await getUserDoc().get();
    return data.data();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(AuthContext.Provider, {
    value: {
      auth,
      currentUser,
      authMsg,
      setAuthMsg,
      registerErrorMsg,
      setRegisterErrorMsg,
      registerUserWithEmailAndPassword,
      loginError,
      setLoginError,
      loginUserWithEmailAndPassword,
      passwdResetError,
      setPasswdResetError,
      sendOutPasswordReset,
      currAuthComponent,
      setCurrAuthComponent,
      signOutUser,
      userName,
      isAuthenticated,
      isStaff,
      emailVerified,
      setEmailVerified,
      userPrefs,
      setUserPrefs,
      saveUserData,
      getUserData
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 9585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1461);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5600);
/* harmony import */ var _components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2956);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);

const _excluded = ["component", "authFlowLayout"];
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/routes/PrivateRoute.js";


/* eslint-disable no-extra-boolean-cast */






const PrivateRoute = _ref => {
  let {
    component: RouteComponent,
    authFlowLayout: Layout
  } = _ref,
      rest = (0,_Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const {
    emailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  if (emailVerified) {
    // user is logged in, proceed normally, wrap as normal route as RouteComponent
    // may be depending on standard props passed to routes
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
      render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RouteComponent, Object.assign({}, routeProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined);
  } else if (!!Layout) {
    // return AuthFlow embeded within provided layout
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, rest, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined);
  } else {
    // simply return AuthFlow with out any wrapping layout
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 14
    }, undefined);
  } // if (!unauthedComponent) {
  //   unauthedComponent = (
  //     <>
  //     <AuthFlow />
  //     </>
  //   )
  // }
  // return (
  //   <Route
  //     {...rest}
  //     render={routeProps =>
  //       !!currentUser ? (
  //         <RouteComponent {...routeProps} />
  //       ) : (
  //         unauthedComponent
  //       )
  //     }
  //   />
  // );

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

/***/ 609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1461);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5600);
/* harmony import */ var _components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2956);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);

const _excluded = ["component", "authFlowLayout"];
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/routes/StaffRoute.js";




 // non-exported component which displays message (modififiable by prop) that the
// user does not have staff privileges



const NotStaff = ({
  msg: _msg = "Staff Privileges are required to access this page."
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: _msg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

const StaffRoute = _ref => {
  let {
    component: RouteComponent,
    authFlowLayout: Layout
  } = _ref,
      rest = (0,_Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const {
    isAuthenticated,
    isStaff,
    emailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  if (isStaff && emailVerified) {
    // user is logged in and is staff. proceed normally, wrap as normal route as RouteComponent
    // may be depending on standard props passed to routes
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
      render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RouteComponent, Object.assign({}, routeProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined);
  } else if (isAuthenticated && emailVerified) {
    // display message that the user needs a staff privileges to access this page
    if (Layout) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, routeProps, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NotStaff, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NotStaff, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 20
      }, undefined);
    }
  } else {
    if (Layout) {
      // return AuthFlow embeded within provided layout
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, routeProps, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 29
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined);
    } else {
      // simply return AuthFlow with out any wrapping layout
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaffRoute);

/***/ }),

/***/ 580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evalForIncorrectAnswer": () => (/* reexport safe */ _prompt_answer_grading__WEBPACK_IMPORTED_MODULE_0__.evalForIncorrectAnswer),
/* harmony export */   "getAnswerLabel": () => (/* reexport safe */ _prompt_answer_grading__WEBPACK_IMPORTED_MODULE_0__.getAnswerLabel),
/* harmony export */   "getPrescribedInvAnswers": () => (/* reexport safe */ _prompt_answer_grading__WEBPACK_IMPORTED_MODULE_0__.getPrescribedInvAnswers),
/* harmony export */   "initializePromptAnswerGrading": () => (/* reexport safe */ _prompt_answer_grading__WEBPACK_IMPORTED_MODULE_0__.initializePromptAnswerGrading),
/* harmony export */   "processAssessmentAnswers": () => (/* reexport safe */ _prompt_answer_grading__WEBPACK_IMPORTED_MODULE_0__.processAssessmentAnswers),
/* harmony export */   "processInterventionAnswers": () => (/* reexport safe */ _prompt_answer_grading__WEBPACK_IMPORTED_MODULE_0__.processInterventionAnswers)
/* harmony export */ });
/* harmony import */ var _prompt_answer_grading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1095);


/***/ }),

/***/ 1095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evalForIncorrectAnswer": () => (/* binding */ evalForIncorrectAnswer),
/* harmony export */   "getAnswerLabel": () => (/* binding */ getAnswerLabel),
/* harmony export */   "getPrescribedInvAnswers": () => (/* binding */ getPrescribedInvAnswers),
/* harmony export */   "initializePromptAnswerGrading": () => (/* binding */ initializePromptAnswerGrading),
/* harmony export */   "processAssessmentAnswers": () => (/* binding */ processAssessmentAnswers),
/* harmony export */   "processInterventionAnswers": () => (/* binding */ processInterventionAnswers)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);


let answerIDs = [];
let scenario;
function initializePromptAnswerGrading(scen) {
  getAnswerIDs(scen);
  scenario = scen;
  return 'prompt-answer-grading-initialized';
}

function getAnswerIDs(scen) {
  if (scen._interventionPromptAnswers) {
    let answers = scen._interventionPromptAnswers;
    answers.forEach(answer => {
      answerIDs[answer.id] = answer.label;
    });
  }

  if (scen._checkListMetaData) {
    let entries = scen._checkListMetaData;
    entries.forEach(entry => {
      if (entry.type === "decision-option") {
        answerIDs[entry.id] = entry.label;
      }
    });
  }
}

function getPrescribedInvAnswers(interventionID, variantDef) {
  let intvEntry = scenario.interventionVariantAnswers[interventionID];

  if (intvEntry && !!variantDef) {
    return intvEntry[variantDef];
  } else {
    return false;
  }
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
} //eventIn is the observer log event and eventOut is the event
//being annotated during analysis


function processAssessmentAnswers(eventIn, eventOut, prescribedAnswers, errorStatusVal) {
  if (prescribedAnswers) {
    let answerDetails;
    let correctAnswerLabel;
    let givenAnswerLabel;
    eventOut.answerCorrect = true;
    let promptID = eventIn.parentID;
    let answerID = eventIn.id;
    let correctAnswerID = prescribedAnswers[promptID];
    correctAnswerLabel = getAnswerLabel(correctAnswerID);
    givenAnswerLabel = getAnswerLabel(answerID);

    if (correctAnswerLabel && givenAnswerLabel) {
      //returns false if answered correctly
      let wrongAnswer = evalForIncorrectAnswer(answerID, prescribedAnswers[promptID]); //store details of this answer and its grading

      answerDetails = {
        "correctAnswer": correctAnswerLabel,
        "givenAnswer": givenAnswerLabel,
        "correct": !wrongAnswer
      }; //storing the prompt/answer details

      eventOut.answerDetails[promptID] = answerDetails; //eventOut.actionDescription = eventOut.actionDescription + ", " + givenAnswerLabel;

      if (wrongAnswer) {
        eventOut.answerCorrect = false;
        eventOut.status = errorStatusVal;

        if (eventOut.incorrectAnswersFB) {
          eventOut.incorrectAnswersFB = eventOut.incorrectAnswersFB + ", and " + correctAnswerLabel;
        } else {
          eventOut.incorrectAnswersFB = correctAnswerLabel;
        }
      }
    }
  }

  eventOut.id = eventIn.parentID;
  eventOut.label = eventIn.parentLabel;
  eventOut.actionDescription = eventOut.label;
  return eventOut;
} //eventIn is the observer log event and eventOut is the event
//being annotated during analysis

function processInterventionAnswers(eventIn, eventOut, prescribedAnswers, errorStatusVal) {
  if (!!eventIn.answers && prescribedAnswers && !isEmpty(eventIn.answers)) {
    let answerDetails;
    let correctAnswerLabel;
    let givenAnswerLabel;
    eventOut.answerCorrect = true; // move through the given answers and compare to the prescribed answers

    for (const [promptID, answerEntry] of Object.entries(eventIn.answers)) {
      let answerID = answerEntry[0];
      let correctAnswerID = prescribedAnswers[promptID][0];
      correctAnswerLabel = getAnswerLabel(correctAnswerID);
      givenAnswerLabel = getAnswerLabel(answerID);

      if (correctAnswerLabel && givenAnswerLabel) {
        //returns false if answered correctly
        let wrongAnswer = evalForIncorrectAnswer(answerID, prescribedAnswers[promptID]); //store details of this answer and its grading

        answerDetails = {
          "correctAnswer": correctAnswerLabel,
          "givenAnswer": givenAnswerLabel,
          "correct": !wrongAnswer
        }; //storing the prompt/answer details

        eventOut.answerDetails[promptID] = answerDetails; //eventOut.actionDescription = eventOut.actionDescription + ", " + givenAnswerLabel;

        if (wrongAnswer) {
          eventOut.answerCorrect = false;
          eventOut.status = errorStatusVal;

          if (eventOut.incorrectAnswersFB) {
            eventOut.incorrectAnswersFB = eventOut.incorrectAnswersFB + ", and " + correctAnswerLabel;
          } else {
            eventOut.incorrectAnswersFB = correctAnswerLabel;
          }
        }
      }
    }
  }

  return eventOut;
}
const evalForIncorrectAnswer = (answerID, prescribedAnswers) => {
  if (Array.isArray(prescribedAnswers)) {
    //assumes an and for everything in the array
    //returns bool regarding whether answerID NOT in answers
    return !prescribedAnswers.find(ansId => ansId === answerID);
  } else {
    return prescribedAnswers !== answerID;
  }
};
const getAnswerLabel = answerID => {
  let answerLabel = answerIDs[answerID];
  return answerLabel || "";
};

/***/ }),

/***/ 4292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"auth-styles_container__10AGD","container-fluid":"auth-styles_container-fluid__fwIkl","container-xl":"auth-styles_container-xl__3ys0F","container-lg":"auth-styles_container-lg__5IrFs","container-md":"auth-styles_container-md__30y2c","container-sm":"auth-styles_container-sm__3rV-I","row":"auth-styles_row__2mDwO","no-gutters":"auth-styles_no-gutters__2JKk5","col":"auth-styles_col__3ldCj","col-xl":"auth-styles_col-xl__2Y9VE","col-xl-auto":"auth-styles_col-xl-auto__1NU79","col-xl-12":"auth-styles_col-xl-12__2cHm3","col-xl-11":"auth-styles_col-xl-11__3NJtT","col-xl-10":"auth-styles_col-xl-10__2KsYU","col-xl-9":"auth-styles_col-xl-9__1xLiS","col-xl-8":"auth-styles_col-xl-8__3erd8","col-xl-7":"auth-styles_col-xl-7__2fcIl","col-xl-6":"auth-styles_col-xl-6__1sdz8","col-xl-5":"auth-styles_col-xl-5__3RtO0","col-xl-4":"auth-styles_col-xl-4__1Tdlx","col-xl-3":"auth-styles_col-xl-3__1eyqY","col-xl-2":"auth-styles_col-xl-2__3Q8G3","col-xl-1":"auth-styles_col-xl-1__2L8ID","col-lg":"auth-styles_col-lg__27OgK","col-lg-auto":"auth-styles_col-lg-auto__37EzL","col-lg-12":"auth-styles_col-lg-12__1UdqO","col-lg-11":"auth-styles_col-lg-11__WDNJE","col-lg-10":"auth-styles_col-lg-10__1Q9Mt","col-lg-9":"auth-styles_col-lg-9__1sq-o","col-lg-8":"auth-styles_col-lg-8__3Opus","col-lg-7":"auth-styles_col-lg-7__2bxn2","col-lg-6":"auth-styles_col-lg-6__1R-_o","col-lg-5":"auth-styles_col-lg-5__keq_w","col-lg-4":"auth-styles_col-lg-4__BOl7q","col-lg-3":"auth-styles_col-lg-3__c4ose","col-lg-2":"auth-styles_col-lg-2__2Ldvo","col-lg-1":"auth-styles_col-lg-1__2eOCB","col-md":"auth-styles_col-md__280Kr","col-md-auto":"auth-styles_col-md-auto__3b9B1","col-md-12":"auth-styles_col-md-12__1d6nc","col-md-11":"auth-styles_col-md-11__3dcqK","col-md-10":"auth-styles_col-md-10__rLZ-p","col-md-9":"auth-styles_col-md-9__OvPfP","col-md-8":"auth-styles_col-md-8__3WMD0","col-md-7":"auth-styles_col-md-7__2oSlY","col-md-6":"auth-styles_col-md-6__3peJd","col-md-5":"auth-styles_col-md-5__31sX_","col-md-4":"auth-styles_col-md-4__2J1-h","col-md-3":"auth-styles_col-md-3__1KjCA","col-md-2":"auth-styles_col-md-2__-yWxg","col-md-1":"auth-styles_col-md-1__VXFTn","col-sm":"auth-styles_col-sm__2ySNy","col-sm-auto":"auth-styles_col-sm-auto__1qooL","col-sm-12":"auth-styles_col-sm-12__2oSEw","col-sm-11":"auth-styles_col-sm-11__1GFbu","col-sm-10":"auth-styles_col-sm-10__3xeeR","col-sm-9":"auth-styles_col-sm-9__2G2BH","col-sm-8":"auth-styles_col-sm-8__16wvo","col-sm-7":"auth-styles_col-sm-7__8Gwhq","col-sm-6":"auth-styles_col-sm-6__2PLpR","col-sm-5":"auth-styles_col-sm-5__3FYYp","col-sm-4":"auth-styles_col-sm-4__vU45W","col-sm-3":"auth-styles_col-sm-3__2rUc2","col-sm-2":"auth-styles_col-sm-2__3tlGJ","col-sm-1":"auth-styles_col-sm-1__1gSFk","col-auto":"auth-styles_col-auto__mOtLf","col-12":"auth-styles_col-12__HkJhz","col-11":"auth-styles_col-11__1TZkf","col-10":"auth-styles_col-10__2PHE5","col-9":"auth-styles_col-9__3upp1","col-8":"auth-styles_col-8__3OMmH","col-7":"auth-styles_col-7__3y0BG","col-6":"auth-styles_col-6__z2OvX","col-5":"auth-styles_col-5__1bmv4","col-4":"auth-styles_col-4__ooaUD","col-3":"auth-styles_col-3__3md1A","col-2":"auth-styles_col-2__ZG0mP","col-1":"auth-styles_col-1__3vw5D","row-cols-1":"auth-styles_row-cols-1__1FgYA","row-cols-2":"auth-styles_row-cols-2__T22x2","row-cols-3":"auth-styles_row-cols-3__33SFY","row-cols-4":"auth-styles_row-cols-4__1Upyr","row-cols-5":"auth-styles_row-cols-5__3s0l2","row-cols-6":"auth-styles_row-cols-6__195mx","order-first":"auth-styles_order-first__32Xyg","order-last":"auth-styles_order-last__1gpEV","order-0":"auth-styles_order-0__37anm","order-1":"auth-styles_order-1__1cYTz","order-2":"auth-styles_order-2__2WgEu","order-3":"auth-styles_order-3__1c1Ge","order-4":"auth-styles_order-4__7ses6","order-5":"auth-styles_order-5__OPIHT","order-6":"auth-styles_order-6__2EExL","order-7":"auth-styles_order-7__-LNNy","order-8":"auth-styles_order-8__17xHi","order-9":"auth-styles_order-9__3KedA","order-10":"auth-styles_order-10__2Rcp7","order-11":"auth-styles_order-11__1ldSL","order-12":"auth-styles_order-12__QYXvE","offset-1":"auth-styles_offset-1__S_yky","offset-2":"auth-styles_offset-2__3L8fT","offset-3":"auth-styles_offset-3__1R6FV","offset-4":"auth-styles_offset-4__1uA9L","offset-5":"auth-styles_offset-5__2pHj2","offset-6":"auth-styles_offset-6__1WM7j","offset-7":"auth-styles_offset-7__2l8T6","offset-8":"auth-styles_offset-8__2PX1q","offset-9":"auth-styles_offset-9__NHkNE","offset-10":"auth-styles_offset-10__3A8Zk","offset-11":"auth-styles_offset-11__q7vhc","row-cols-sm-1":"auth-styles_row-cols-sm-1__2IW8N","row-cols-sm-2":"auth-styles_row-cols-sm-2__2TmMR","row-cols-sm-3":"auth-styles_row-cols-sm-3__1Bcpm","row-cols-sm-4":"auth-styles_row-cols-sm-4__2Jgca","row-cols-sm-5":"auth-styles_row-cols-sm-5__1wTaB","row-cols-sm-6":"auth-styles_row-cols-sm-6__N7dM_","order-sm-first":"auth-styles_order-sm-first__1LHjA","order-sm-last":"auth-styles_order-sm-last__1OG2P","order-sm-0":"auth-styles_order-sm-0__3VAGC","order-sm-1":"auth-styles_order-sm-1__3zlDN","order-sm-2":"auth-styles_order-sm-2__2Id98","order-sm-3":"auth-styles_order-sm-3__15b2I","order-sm-4":"auth-styles_order-sm-4__170Pr","order-sm-5":"auth-styles_order-sm-5__1TtxJ","order-sm-6":"auth-styles_order-sm-6__9pb2G","order-sm-7":"auth-styles_order-sm-7__SIm6q","order-sm-8":"auth-styles_order-sm-8__2t0hf","order-sm-9":"auth-styles_order-sm-9__17vw7","order-sm-10":"auth-styles_order-sm-10__31bMw","order-sm-11":"auth-styles_order-sm-11__2ReIr","order-sm-12":"auth-styles_order-sm-12__1ViJl","offset-sm-0":"auth-styles_offset-sm-0__UP_Ye","offset-sm-1":"auth-styles_offset-sm-1__3svSJ","offset-sm-2":"auth-styles_offset-sm-2__3POI4","offset-sm-3":"auth-styles_offset-sm-3__1w0kW","offset-sm-4":"auth-styles_offset-sm-4__3JWGY","offset-sm-5":"auth-styles_offset-sm-5__2EEPf","offset-sm-6":"auth-styles_offset-sm-6__22GCC","offset-sm-7":"auth-styles_offset-sm-7__2q_3d","offset-sm-8":"auth-styles_offset-sm-8__2HZtt","offset-sm-9":"auth-styles_offset-sm-9__2Y-bk","offset-sm-10":"auth-styles_offset-sm-10__3jNcV","offset-sm-11":"auth-styles_offset-sm-11__3Q0ul","row-cols-md-1":"auth-styles_row-cols-md-1__xFmDr","row-cols-md-2":"auth-styles_row-cols-md-2__qZ_pn","row-cols-md-3":"auth-styles_row-cols-md-3__3uzyG","row-cols-md-4":"auth-styles_row-cols-md-4__1xY6o","row-cols-md-5":"auth-styles_row-cols-md-5__ir_PD","row-cols-md-6":"auth-styles_row-cols-md-6__37Dx8","order-md-first":"auth-styles_order-md-first__PXmJ9","order-md-last":"auth-styles_order-md-last__18UQ7","order-md-0":"auth-styles_order-md-0__RcECW","order-md-1":"auth-styles_order-md-1__3Ixnl","order-md-2":"auth-styles_order-md-2__m1tAM","order-md-3":"auth-styles_order-md-3__QDe0k","order-md-4":"auth-styles_order-md-4__31o0n","order-md-5":"auth-styles_order-md-5__3WXPf","order-md-6":"auth-styles_order-md-6__3ULOf","order-md-7":"auth-styles_order-md-7__3VjfE","order-md-8":"auth-styles_order-md-8__3u3G9","order-md-9":"auth-styles_order-md-9__20_DE","order-md-10":"auth-styles_order-md-10__3nlP7","order-md-11":"auth-styles_order-md-11__21LDw","order-md-12":"auth-styles_order-md-12__k3d-a","offset-md-0":"auth-styles_offset-md-0__328EE","offset-md-1":"auth-styles_offset-md-1__1Pv38","offset-md-2":"auth-styles_offset-md-2__EkZRk","offset-md-3":"auth-styles_offset-md-3__1QwfK","offset-md-4":"auth-styles_offset-md-4__2qkvS","offset-md-5":"auth-styles_offset-md-5__2-1Sl","offset-md-6":"auth-styles_offset-md-6__1foUV","offset-md-7":"auth-styles_offset-md-7__1lT_G","offset-md-8":"auth-styles_offset-md-8__3LqIe","offset-md-9":"auth-styles_offset-md-9__2NZK4","offset-md-10":"auth-styles_offset-md-10__1-I-n","offset-md-11":"auth-styles_offset-md-11__30FC1","row-cols-lg-1":"auth-styles_row-cols-lg-1__2BeEB","row-cols-lg-2":"auth-styles_row-cols-lg-2__1-duX","row-cols-lg-3":"auth-styles_row-cols-lg-3__1Ppur","row-cols-lg-4":"auth-styles_row-cols-lg-4__vslwG","row-cols-lg-5":"auth-styles_row-cols-lg-5__34Bqy","row-cols-lg-6":"auth-styles_row-cols-lg-6__17nYq","order-lg-first":"auth-styles_order-lg-first__2KPTW","order-lg-last":"auth-styles_order-lg-last__sd62e","order-lg-0":"auth-styles_order-lg-0__14g0P","order-lg-1":"auth-styles_order-lg-1__1-Fi6","order-lg-2":"auth-styles_order-lg-2__1UeSK","order-lg-3":"auth-styles_order-lg-3__2Bnqq","order-lg-4":"auth-styles_order-lg-4__3wLF4","order-lg-5":"auth-styles_order-lg-5__3BWET","order-lg-6":"auth-styles_order-lg-6__22vzu","order-lg-7":"auth-styles_order-lg-7__1q4YC","order-lg-8":"auth-styles_order-lg-8__2Wn2X","order-lg-9":"auth-styles_order-lg-9__2zwR0","order-lg-10":"auth-styles_order-lg-10__3S5Kf","order-lg-11":"auth-styles_order-lg-11__3lViv","order-lg-12":"auth-styles_order-lg-12__1HbM4","offset-lg-0":"auth-styles_offset-lg-0__3vXRO","offset-lg-1":"auth-styles_offset-lg-1__1qpeE","offset-lg-2":"auth-styles_offset-lg-2__2VlLm","offset-lg-3":"auth-styles_offset-lg-3__29oiZ","offset-lg-4":"auth-styles_offset-lg-4__3zPy2","offset-lg-5":"auth-styles_offset-lg-5__3NNON","offset-lg-6":"auth-styles_offset-lg-6__14HL7","offset-lg-7":"auth-styles_offset-lg-7__fw7as","offset-lg-8":"auth-styles_offset-lg-8__26zm0","offset-lg-9":"auth-styles_offset-lg-9__3lGAr","offset-lg-10":"auth-styles_offset-lg-10__1jr81","offset-lg-11":"auth-styles_offset-lg-11__SABrM","row-cols-xl-1":"auth-styles_row-cols-xl-1__2KEIY","row-cols-xl-2":"auth-styles_row-cols-xl-2__2Q9jD","row-cols-xl-3":"auth-styles_row-cols-xl-3__serpJ","row-cols-xl-4":"auth-styles_row-cols-xl-4__17lXh","row-cols-xl-5":"auth-styles_row-cols-xl-5__se3PY","row-cols-xl-6":"auth-styles_row-cols-xl-6__3Dv0I","order-xl-first":"auth-styles_order-xl-first__2cXN7","order-xl-last":"auth-styles_order-xl-last__3Bu_n","order-xl-0":"auth-styles_order-xl-0__QNT-4","order-xl-1":"auth-styles_order-xl-1__2uJW9","order-xl-2":"auth-styles_order-xl-2__1urQz","order-xl-3":"auth-styles_order-xl-3__HrnTR","order-xl-4":"auth-styles_order-xl-4__lqyBd","order-xl-5":"auth-styles_order-xl-5__1boyL","order-xl-6":"auth-styles_order-xl-6__2ljrn","order-xl-7":"auth-styles_order-xl-7__sAp62","order-xl-8":"auth-styles_order-xl-8__3QIeu","order-xl-9":"auth-styles_order-xl-9__30U3w","order-xl-10":"auth-styles_order-xl-10__1ST15","order-xl-11":"auth-styles_order-xl-11__pbkTF","order-xl-12":"auth-styles_order-xl-12__1s6HJ","offset-xl-0":"auth-styles_offset-xl-0__1BSft","offset-xl-1":"auth-styles_offset-xl-1__2paww","offset-xl-2":"auth-styles_offset-xl-2__6PmLy","offset-xl-3":"auth-styles_offset-xl-3__3Z-Tv","offset-xl-4":"auth-styles_offset-xl-4__2FFWB","offset-xl-5":"auth-styles_offset-xl-5__31OSu","offset-xl-6":"auth-styles_offset-xl-6__3s_gh","offset-xl-7":"auth-styles_offset-xl-7__uzLWG","offset-xl-8":"auth-styles_offset-xl-8__MUIfK","offset-xl-9":"auth-styles_offset-xl-9__3FedX","offset-xl-10":"auth-styles_offset-xl-10__6N_6d","offset-xl-11":"auth-styles_offset-xl-11__jdWF2","form-control":"auth-styles_form-control__TWWjx","form-control-file":"auth-styles_form-control-file__2hM0e","form-control-range":"auth-styles_form-control-range__1L_5t","col-form-label":"auth-styles_col-form-label__nwIeC","col-form-label-lg":"auth-styles_col-form-label-lg__3_NoG","col-form-label-sm":"auth-styles_col-form-label-sm__30gfe","form-control-plaintext":"auth-styles_form-control-plaintext__35RzL","form-control-sm":"auth-styles_form-control-sm__2XZXA","form-control-lg":"auth-styles_form-control-lg__3X3MG","form-group":"auth-styles_form-group__11rq4","form-text":"auth-styles_form-text__2dVxs","form-row":"auth-styles_form-row__kAOLu","form-check":"auth-styles_form-check__2OFdL","form-check-input":"auth-styles_form-check-input__3P2bC","form-check-label":"auth-styles_form-check-label__1v1JV","form-check-inline":"auth-styles_form-check-inline__3rsW7","valid-feedback":"auth-styles_valid-feedback__1_T7-","valid-tooltip":"auth-styles_valid-tooltip__dSCQM","was-validated":"auth-styles_was-validated__1foJB","is-valid":"auth-styles_is-valid__30FJs","custom-select":"auth-styles_custom-select__EDd2g","custom-control-input":"auth-styles_custom-control-input__34O46","custom-control-label":"auth-styles_custom-control-label__3M8RN","custom-file-input":"auth-styles_custom-file-input__24wnE","custom-file-label":"auth-styles_custom-file-label__b7a1j","invalid-feedback":"auth-styles_invalid-feedback__mhQo-","invalid-tooltip":"auth-styles_invalid-tooltip__DQUyl","is-invalid":"auth-styles_is-invalid__2jvIP","form-inline":"auth-styles_form-inline__2VVKx","input-group":"auth-styles_input-group__1a2ep","custom-control":"auth-styles_custom-control__1rlbV","btn":"auth-styles_btn__2MeMF","focus":"auth-styles_focus__3tRPo","disabled":"auth-styles_disabled__3SfTf","btn-primary":"auth-styles_btn-primary__2kI78","active":"auth-styles_active__j6Q1A","show":"auth-styles_show__1auI0","dropdown-toggle":"auth-styles_dropdown-toggle__BJr6U","btn-secondary":"auth-styles_btn-secondary__3c7Cl","btn-success":"auth-styles_btn-success__3k5kU","btn-info":"auth-styles_btn-info__1Jo-l","btn-warning":"auth-styles_btn-warning__kZ8UD","btn-danger":"auth-styles_btn-danger__3hHi0","btn-light":"auth-styles_btn-light__35KKO","btn-dark":"auth-styles_btn-dark__2qjsW","btn-outline-primary":"auth-styles_btn-outline-primary__l7U0o","btn-outline-secondary":"auth-styles_btn-outline-secondary__1Y7Jb","btn-outline-success":"auth-styles_btn-outline-success__bORqD","btn-outline-info":"auth-styles_btn-outline-info__3xoZY","btn-outline-warning":"auth-styles_btn-outline-warning__2yk0b","btn-outline-danger":"auth-styles_btn-outline-danger__2lsp0","btn-outline-light":"auth-styles_btn-outline-light__PFtsK","btn-outline-dark":"auth-styles_btn-outline-dark__26zGm","btn-link":"auth-styles_btn-link__2ucDw","btn-lg":"auth-styles_btn-lg__2IBeZ","btn-sm":"auth-styles_btn-sm__YTkcH","btn-block":"auth-styles_btn-block__3afcY","custom-file":"auth-styles_custom-file__3ftOJ","has-validation":"auth-styles_has-validation__2_Ce9","input-group-prepend":"auth-styles_input-group-prepend__1qaRA","input-group-append":"auth-styles_input-group-append__3pS8K","input-group-text":"auth-styles_input-group-text__1Qb29","input-group-lg":"auth-styles_input-group-lg__1wXEc","input-group-sm":"auth-styles_input-group-sm__18rhn","text-monospace":"auth-styles_text-monospace__1X9A_","text-justify":"auth-styles_text-justify__10_Ve","text-wrap":"auth-styles_text-wrap__1WwEN","text-nowrap":"auth-styles_text-nowrap__1brBE","text-truncate":"auth-styles_text-truncate__2sYj6","text-left":"auth-styles_text-left__2Svts","text-right":"auth-styles_text-right__2_2vI","text-center":"auth-styles_text-center__1z62y","text-sm-left":"auth-styles_text-sm-left__rDHNS","text-sm-right":"auth-styles_text-sm-right__2Q3uT","text-sm-center":"auth-styles_text-sm-center__14hl_","text-md-left":"auth-styles_text-md-left__3qN5c","text-md-right":"auth-styles_text-md-right__2_J53","text-md-center":"auth-styles_text-md-center__35czq","text-lg-left":"auth-styles_text-lg-left__2hmZb","text-lg-right":"auth-styles_text-lg-right__3ow46","text-lg-center":"auth-styles_text-lg-center__1c_KS","text-xl-left":"auth-styles_text-xl-left__GAexL","text-xl-right":"auth-styles_text-xl-right__1lwhB","text-xl-center":"auth-styles_text-xl-center__1Y5yA","text-lowercase":"auth-styles_text-lowercase__2WcMH","text-uppercase":"auth-styles_text-uppercase__EUzPY","text-capitalize":"auth-styles_text-capitalize__2JLp5","font-weight-light":"auth-styles_font-weight-light__OLEh9","font-weight-lighter":"auth-styles_font-weight-lighter__sWCNg","font-weight-normal":"auth-styles_font-weight-normal__229q5","font-weight-bold":"auth-styles_font-weight-bold__1pMRf","font-weight-bolder":"auth-styles_font-weight-bolder__95d11","font-italic":"auth-styles_font-italic__2jtAw","text-white":"auth-styles_text-white__1N8Wd","text-primary":"auth-styles_text-primary__1qUwM","text-secondary":"auth-styles_text-secondary__2B2Ge","text-success":"auth-styles_text-success__3b9Jf","text-info":"auth-styles_text-info__jr8Pv","text-warning":"auth-styles_text-warning__3P8Kl","text-danger":"auth-styles_text-danger__eLgOG","text-light":"auth-styles_text-light__33Ovy","text-dark":"auth-styles_text-dark__RWLO_","text-body":"auth-styles_text-body__3rlQl","text-muted":"auth-styles_text-muted__20KiX","text-black-50":"auth-styles_text-black-50__3ivKm","text-white-50":"auth-styles_text-white-50__1hVag","text-hide":"auth-styles_text-hide__3xzc6","text-decoration-none":"auth-styles_text-decoration-none__3NGqL","text-break":"auth-styles_text-break__2ghoE","text-reset":"auth-styles_text-reset__2elij"});

/***/ }),

/***/ 9526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseContext": () => (/* binding */ FirebaseContext),
/* harmony export */   "useFirebase": () => (/* binding */ useFirebase),
/* harmony export */   "useFirebaseProject": () => (/* binding */ useFirebaseProject)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9748);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2094);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8790);



 // simple switch returning the config for one one of meddbriefer.orgs firebase projects,
// defaults to 'MedDebriefer' (production)

function getProjectConfig(projectName) {
  switch (projectName) {
    case "PamDev":
      return {
        apiKey: "AIzaSyB9eVT-fu4TOjxHoPAXqsnz9tCcbTJkTOw",
        authDomain: "pamdev-ea800.firebaseapp.com",
        projectId: "pamdev-ea800",
        storageBucket: "pamdev-ea800.appspot.com",
        messagingSenderId: "366450927885",
        appId: "1:366450927885:web:caa5f022ef1de182a0e844",
        measurementId: "G-JC5XZEPYT1"
      };

    case "ScottDev":
      return {
        apiKey: "AIzaSyBEhbIdVW2F2vvvfvpNb2SsCDP9Yoc__z8",
        authDomain: "scottdev-f6528.firebaseapp.com",
        projectId: "scottdev-f6528",
        storageBucket: "scottdev-f6528.appspot.com",
        messagingSenderId: "447730403122",
        appId: "1:447730403122:web:1727020dbac4ad4cf6f92b"
      };

    case "MedDBriefer-dev":
      return {
        apiKey: "AIzaSyBqnEMwEstp4D7Mvtbw9OTAiNJ7qza0Ses",
        authDomain: "meddbriefer-dev.firebaseapp.com",
        projectId: "meddbriefer-dev",
        storageBucket: "meddbriefer-dev.appspot.com",
        messagingSenderId: "144940722070",
        appId: "1:144940722070:web:4de179ebb58d84a7679fb7"
      };

    default:
      //MedDBriefer (production)
      return {
        apiKey: "AIzaSyBOgWAbXUGckpad2sk0IUo00hZsV4WxG0E",
        authDomain: "meddbriefer-68cd4.firebaseapp.com",
        projectId: "meddbriefer-68cd4",
        storageBucket: "meddbriefer-68cd4.appspot.com",
        messagingSenderId: "1087114796018",
        appId: "1:1087114796018:web:679fbab38dbf78af0ce96b",
        measurementId: "G-Q7QZKC9KHW"
      };
  }
}

const getApp = appID => {
  const matches = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].apps.filter(app => app.options.appId === appID); // console.log("matches", matches)

  return matches.length === 1 ? matches[0] : null;
};

const getOrInitializeApp = appCfg => {
  const app = getApp(appCfg.appId); // simply log which project is initialized (or about to be)

  console.log(`using ${appCfg.projectId}`); // console.log(`${appCfg.appId} already exists: ${!!app}`)

  return app ? app : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(appCfg, appCfg.projectId);
};

function useFirebaseProject(projectName = "MedDBriefer") {
  // don't reinitialize app if it already exists
  //   projectName comes from App process.env.NX_FIREBASE_PROJECT
  //
  const projectConfig = getProjectConfig(projectName);
  const firebaseApp = getOrInitializeApp(projectConfig);
  return {
    auth: firebaseApp.auth(),
    db: firebaseApp.firestore()
  };
} // to inject firebase app into child react components

const FirebaseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  auth: undefined,
  db: undefined
}); // for child react components to access the firebase app

const useFirebase = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FirebaseContext);

/***/ }),

/***/ 5558:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANALYSIS_TYPES": () => (/* binding */ ANALYSIS_TYPES),
/* harmony export */   "ANSWER": () => (/* binding */ ANSWER),
/* harmony export */   "ASSESS": () => (/* binding */ ASSESS),
/* harmony export */   "ASSESSO": () => (/* binding */ ASSESSO),
/* harmony export */   "ASSESS_OPTION": () => (/* binding */ ASSESS_OPTION),
/* harmony export */   "AWO": () => (/* binding */ AWO),
/* harmony export */   "CB": () => (/* binding */ CB),
/* harmony export */   "CHECKLIST_STEP_TYPES": () => (/* binding */ CHECKLIST_STEP_TYPES),
/* harmony export */   "CL_HEADING": () => (/* binding */ CL_HEADING),
/* harmony export */   "CL_PROMPT": () => (/* binding */ CL_PROMPT),
/* harmony export */   "CRIT_FAIL": () => (/* binding */ CRIT_FAIL),
/* harmony export */   "DECISION": () => (/* binding */ DECISION),
/* harmony export */   "DECISION_OPTION": () => (/* binding */ DECISION_OPTION),
/* harmony export */   "DIST_PROMPT": () => (/* binding */ DIST_PROMPT),
/* harmony export */   "HEADING": () => (/* binding */ HEADING),
/* harmony export */   "INTERV": () => (/* binding */ INTERV),
/* harmony export */   "INTV_FORM": () => (/* binding */ INTV_FORM),
/* harmony export */   "MDB_TYPES": () => (/* binding */ MDB_TYPES),
/* harmony export */   "NESTED_CHECKLIST": () => (/* binding */ NESTED_CHECKLIST),
/* harmony export */   "NONE": () => (/* binding */ NONE),
/* harmony export */   "ONE": () => (/* binding */ ONE),
/* harmony export */   "OOM": () => (/* binding */ OOM),
/* harmony export */   "OPTION": () => (/* binding */ OPTION),
/* harmony export */   "OPTION_TYPES": () => (/* binding */ OPTION_TYPES),
/* harmony export */   "PHASE": () => (/* binding */ PHASE),
/* harmony export */   "PREFIXES": () => (/* binding */ PREFIXES),
/* harmony export */   "PROMPT": () => (/* binding */ PROMPT),
/* harmony export */   "PROMPT_SET": () => (/* binding */ PROMPT_SET),
/* harmony export */   "PROTOCOL_RELATIONSHIPS": () => (/* binding */ PROTOCOL_RELATIONSHIPS),
/* harmony export */   "REQUIRED": () => (/* binding */ REQUIRED),
/* harmony export */   "REQURED": () => (/* binding */ REQURED),
/* harmony export */   "SELECTION_TYPES": () => (/* binding */ SELECTION_TYPES),
/* harmony export */   "SELECTION_TYPE_LABELS": () => (/* binding */ SELECTION_TYPE_LABELS),
/* harmony export */   "SUB_PHASE": () => (/* binding */ SUB_PHASE),
/* harmony export */   "SYSTEMS": () => (/* binding */ SYSTEMS),
/* harmony export */   "SYSTEM_LABELS": () => (/* binding */ SYSTEM_LABELS)
/* harmony export */ });
// the following constants are deprecated (need to figure out how to handle this)
// use MDB_TYPES, SELECTION_TYPES, PREFIXES, and SYSTEMS instead
const ANSWER = "answer";
const ASSESS = "assessment";
const ASSESSO = "assessment-option";
const ASSESS_OPTION = "assessment-option";
const AWO = "assessment-with-options";
const CB = "checkbox";
const CL_HEADING = "checklist-heading";
const CL_PROMPT = "checklist-prompt";
const CRIT_FAIL = "critical-criteria";
const DECISION = "decision";
const DECISION_OPTION = "decision-option";
const DIST_PROMPT = "distinguishing-prompt";
const HEADING = "heading"; //not a leaf node, simply a step which has child steps

const INTERV = "intervention"; // an action performed on the patient

const INTV_FORM = "intervention-form";
const NESTED_CHECKLIST = "nested-checklist";
const NONE = "none";
const ONE = "one";
const OOM = "one-or-more";
const OOM_AND = "one-or-more-logical-and";
const OOM_OR = "one-or-more-logical-or";
const OPTION = "option";
const PHASE = "phase";
const PROMPT = "prompt";
const PROMPT_SET = "prompt-set";
const REQUIRED = "required-action"; // an action the EMT performs, but not on the patient
// keeping as I had a typo. need to deprecate somehow

const REQURED = REQUIRED;
const SUB_PHASE = "sub-phase";
const MDB_TYPES = Object.freeze({
  PHASE: PHASE,
  SUB_PHASE: SUB_PHASE,
  ASSESS: ASSESS,
  AWO: AWO,
  ASSESS_OPTION: ASSESS_OPTION,
  ASSESSO: ASSESS_OPTION,
  CL_HEADING: CL_HEADING,
  CL_PROMPT: CL_PROMPT,
  DECISION: DECISION,
  DECISION_OPTION: DECISION_OPTION,
  DIST_PROMPT: DIST_PROMPT,
  NESTED_CHECKLIST: NESTED_CHECKLIST,
  REQUIRED: REQUIRED,
  REQURED: REQUIRED,
  INTERV: INTERV,
  PROMPT_SET: PROMPT_SET,
  PROMPT: PROMPT,
  ANSWER: ANSWER
});
const SELECTION_TYPES = Object.freeze({
  ONE: ONE,
  OOM: OOM,
  OOM_AND: OOM_AND,
  OOM_OR: OOM_OR,
  NONE: NONE
});
const SELECTION_TYPE_LABELS = Object.freeze({
  "one": "One",
  "one-or-more": "One or more",
  "one-or-more-logical-and": "One or more (logical AND)",
  "one-or-more-logical-or": "One or more (logical OR)",
  "none": "None"
});
const PREFIXES = Object.freeze({
  PHASE: "",
  SUB_PHASE: "",
  ANSWER: "answer-",
  ASSESS: "assess-",
  AWO: "assessment-with-options-",
  ASSESS_OPTION: "assess-option-",
  CL_PROMPT: "cl-prompt-",
  DECISION: "decision-",
  DECISION_OPTION: "decision-option-",
  INTERV: "intv-",
  PROMPT_SET: "prompt-set-",
  PROMPT: "prompt-",
  REQUIRED: "required-action-"
});
const SYSTEMS = Object.freeze({
  AW: "airway",
  BR: "breathing",
  BL: "bleeding",
  SH: "shock"
});
const SYSTEM_LABELS = Object.freeze({
  AW: "Airway",
  BR: "Breathing",
  BL: "Bleeding",
  SH: "Shock"
});
const CHECKLIST_STEP_TYPES = [ASSESS, AWO, DECISION, REQUIRED];
const OPTION_TYPES = [ASSESS_OPTION, DECISION_OPTION];
const ANALYSIS_TYPES = [ASSESS, AWO, DECISION, REQUIRED, INTERV, PHASE, SUB_PHASE];
const PROTOCOL_RELATIONSHIPS = Object.freeze({
  NONE: "",
  MIN: "minimal",
  OPT: "optional",
  REQ: "required",
  CONTRA: "contraindicated",
  UNN: "unnecessary",
  IR: "irrelevant",
  ALT: "alternative"
});

/***/ }),

/***/ 8913:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANALYSIS_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.ANALYSIS_TYPES),
/* harmony export */   "CHECKLIST_STEP_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.CHECKLIST_STEP_TYPES),
/* harmony export */   "MDB_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES),
/* harmony export */   "OPTION_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.OPTION_TYPES),
/* harmony export */   "PublishedScenario": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.PublishedScenario),
/* harmony export */   "SELECTION_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.SELECTION_TYPES),
/* harmony export */   "ScenarioType": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType),
/* harmony export */   "createCond1Comments": () => (/* binding */ createCond1Comments),
/* harmony export */   "createCond2Debriefing": () => (/* binding */ createCond2Debriefing),
/* harmony export */   "createInterventionVariant": () => (/* binding */ createInterventionVariant),
/* harmony export */   "deleteAnaDocument": () => (/* binding */ deleteAnaDocument),
/* harmony export */   "deleteAndArchiveDocument": () => (/* binding */ deleteAndArchiveDocument),
/* harmony export */   "deleteCommentDocument": () => (/* binding */ deleteCommentDocument),
/* harmony export */   "deleteCond1CommentDocument": () => (/* binding */ deleteCond1CommentDocument),
/* harmony export */   "deleteDocument": () => (/* binding */ deleteDocument),
/* harmony export */   "deleteDocumentNoArchive": () => (/* binding */ deleteDocumentNoArchive),
/* harmony export */   "deleteObsAndAnaDocuments": () => (/* binding */ deleteObsAndAnaDocuments),
/* harmony export */   "deleteObsDocument": () => (/* binding */ deleteObsDocument),
/* harmony export */   "getAnalyses": () => (/* binding */ getAnalyses),
/* harmony export */   "getAnalysisCond1Comments": () => (/* binding */ getAnalysisCond1Comments),
/* harmony export */   "getAnalysisCond2Debriefings": () => (/* binding */ getAnalysisCond2Debriefings),
/* harmony export */   "getAnalysisLog": () => (/* binding */ getAnalysisLog),
/* harmony export */   "getCollection": () => (/* binding */ getCollection),
/* harmony export */   "getCond1CommentLog": () => (/* binding */ getCond1CommentLog),
/* harmony export */   "getCond1CommentLogs": () => (/* binding */ getCond1CommentLogs),
/* harmony export */   "getCond2DebriefingLog": () => (/* binding */ getCond2DebriefingLog),
/* harmony export */   "getDebriefCommentLog": () => (/* binding */ getDebriefCommentLog),
/* harmony export */   "getDebriefCommentLogs": () => (/* binding */ getDebriefCommentLogs),
/* harmony export */   "getDebriefLog": () => (/* binding */ getDebriefLog),
/* harmony export */   "getDebriefLogWithName": () => (/* binding */ getDebriefLogWithName),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getDocumentWithName": () => (/* binding */ getDocumentWithName),
/* harmony export */   "getLog": () => (/* binding */ getLog),
/* harmony export */   "getLogs": () => (/* binding */ getLogs),
/* harmony export */   "getObserverLog": () => (/* binding */ getObserverLog),
/* harmony export */   "getObserverLogAnalyses": () => (/* binding */ getObserverLogAnalyses),
/* harmony export */   "getObserverLogList": () => (/* binding */ getObserverLogList),
/* harmony export */   "getPromptAndOptions": () => (/* binding */ getPromptAndOptions),
/* harmony export */   "getPubScenarios": () => (/* binding */ getPubScenarios),
/* harmony export */   "getPublishedScenarioByID": () => (/* binding */ getPublishedScenarioByID),
/* harmony export */   "getPublishedScenarioObjectByID": () => (/* binding */ getPublishedScenarioObjectByID),
/* harmony export */   "getScenarioByID": () => (/* binding */ getScenarioByID),
/* harmony export */   "getScenarioByName": () => (/* binding */ getScenarioByName),
/* harmony export */   "getScenarioType": () => (/* binding */ getScenarioType),
/* harmony export */   "getScenarioTypeByID": () => (/* binding */ getScenarioTypeByID),
/* harmony export */   "getScenarioTypeObject": () => (/* binding */ getScenarioTypeObject),
/* harmony export */   "getScenarioTypeObjectByID": () => (/* binding */ getScenarioTypeObjectByID),
/* harmony export */   "getScenarios": () => (/* binding */ getScenarios),
/* harmony export */   "interventionVariantsAreEqual": () => (/* binding */ interventionVariantsAreEqual),
/* harmony export */   "intvVariant2JSON": () => (/* binding */ intvVariant2JSON),
/* harmony export */   "listDocumentNames": () => (/* binding */ listDocumentNames),
/* harmony export */   "loadIntvPromptAnswers": () => (/* binding */ loadIntvPromptAnswers),
/* harmony export */   "loadIntvPrompts": () => (/* binding */ loadIntvPrompts),
/* harmony export */   "loadIntvs": () => (/* binding */ loadIntvs),
/* harmony export */   "publishDocument": () => (/* binding */ publishDocument),
/* harmony export */   "saveDocument": () => (/* binding */ saveDocument),
/* harmony export */   "updateDocument": () => (/* binding */ updateDocument),
/* harmony export */   "verifyDocNameUniqueness": () => (/* binding */ verifyDocNameUniqueness),
/* harmony export */   "verifyDocument": () => (/* binding */ verifyDocument)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6635);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2117);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5558);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7237);
/* harmony import */ var _intvs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4028);
/* harmony import */ var _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3836);
/* harmony import */ var _intvPromptAnswers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7246);
/* harmony import */ var _intvMenusCats_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6308);
/* harmony import */ var _intvMenuItems_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1722);



 // the rest of these imports can go away soon. simply allows me to delete objects form the db
// and reload with files. not used if records exist in db








const loadIntvs = () => {
  const tmp = _intvs_js__WEBPACK_IMPORTED_MODULE_4__["default"].map(e => {
    const rec = { ...e
    };

    if (!e.abbrLabel) {
      rec.abbrLabel = e.label;
    }

    if (!e.distPrompts) {
      rec.distPrompts = [];
    }

    if (!e.prompts) {
      rec.prompts = [];
    }

    return rec;
  });
  return tmp;
};
const loadIntvPrompts = () => {
  const tmp = _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__["default"].map(e => {
    const rec = { ...e
    };

    if (!!e.interventionID) {
      const found = _intvs_js__WEBPACK_IMPORTED_MODULE_4__["default"].find(i => i.id === e.interventionID);

      if (!found) {
        console.log(`loadIntvPrompts(${e.id}) ${e.interventionID} not found`);
      }
    }

    if (!e.abbrLabel) {
      rec.abbrLabel = "";
    }

    if (!e.feedback) {
      rec.feedback = rec.label;
    }

    if (!e.answers) {
      rec.answers = [];
    }

    return rec;
  });
  return tmp;
};
const loadIntvPromptAnswers = () => {
  const tmp = _intvPromptAnswers_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(e => {
    if (!e.abbrLabel) {
      e.abbrLabel = "";
    }

    const found = _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(p => p.id === e.promptID);

    if (!found) {
      console.log(`loadIntvPromptAnswers(${e.id}) ${e.promptID} not found`);
    }

    return e;
  });
  return tmp;
};
const getScenarios = (db, scenarioType, schemaVersion) => {
  const query = db.collection("scenarios").where("scenarioType", "==", scenarioType).where("schemaVersion", "==", schemaVersion);
  return query.get().then(snapShot => {
    const scenarios = [];

    if (snapShot.size > 0) {
      snapShot.docs.forEach(doc => {
        const data = doc.data();
        scenarios.push({
          id: data.id,
          name: data.name,
          scenarioType: data.scenarioType,
          schemaVersion: data.schemaVersion
        });
      });
    }

    return scenarios;
  });
};
const getPublishedScenarioObjectByID = async (db, scenarioID) => {
  const data = await getPublishedScenarioByID(db, scenarioID);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.PublishedScenario(data);
};
const getPublishedScenarioByID = (db, scenarioID) => {
  return db.collection("published-scenarios").doc(scenarioID).get().then(doc => doc.data());
};
const getScenarioByID = (db, scenarioID) => {
  return db.collection("scenarios").doc(scenarioID).get().then(doc => doc.data());
};
const getScenarioByName = (db, scenarioName, schemaVersion) => {
  return db.collection("scenarios").where("name", "==", scenarioName).where("schemaVersion", "==", schemaVersion).limit(1).get().then(snapShot => {
    if (snapShot.size === 1) {
      return snapShot.docs[0].data();
    } else {
      throw new Error("document not found");
    }
  });
};

const addMissingScenarioTypeFields = scenTypeData => {
  const msgs = [];

  if (!scenTypeData.interventions) {
    msgs.push("loading intvs from file");
    scenTypeData.interventions = loadIntvs();
  }

  if (!scenTypeData.interventionPrompts) {
    const errs = [];
    const tmpPrompts = loadIntvPrompts();
    tmpPrompts.forEach(e => {
      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.PROMPT) {
        // ignore this check if distinguishing prompt (not associated with a single intv)
        if (undefined === scenTypeData.interventions.find(rec => rec.id === e.interventionID)) {
          errs.push(`bad interventionID ${e.interventionID}`);
        }
      }
    });
    let msg = "loading intv prompts from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionPrompts = tmpPrompts;
  }

  if (!scenTypeData.interventionPromptAnswers) {
    const errs = [];
    const tmpPromptAnswers = loadIntvPromptAnswers();
    tmpPromptAnswers.forEach(e => {
      if (undefined === scenTypeData.interventionPrompts.find(rec => rec.id === e.promptID)) {
        errs.push(`bad promptID ${e.promptID}`);
      }
    });
    let msg = "loading intv prompt answers from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionPromptAnswers = tmpPromptAnswers;
  }

  if (!scenTypeData.interventionMenuCategories) {
    msgs.push("loading intv menu categories from file");
    scenTypeData.interventionMenuCategories = _intvMenusCats_js__WEBPACK_IMPORTED_MODULE_7__["default"];
  }

  if (!scenTypeData.interventionMenuItems) {
    const errs = [];
    const tmpIntvMenuItems = _intvMenuItems_js__WEBPACK_IMPORTED_MODULE_8__["default"].map(e => {
      const found = scenTypeData.interventionMenuCategories.find(cat => cat.id === e.intvCategoryID);

      if (!found) {
        errs.push(`bad intvCategoryID ${e.intvCategoryID}`);
      } else {
        if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.INTERV) {
          const intv = scenTypeData.interventions.find(i => i.id === e.interventionID);

          if (!intv) {
            errs.push(`bad interventionID ${e.interventionID}`);
          } else {
            e.label = intv.label;
          }
        }

        return e;
      }
    });
    let msg = "loading intv menu items from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionMenuItems = tmpIntvMenuItems;
  }

  if (msgs.length > 0) {
    msgs.forEach(m => console.log(m));
  } else {
    console.log("all data loaded from db. files not needed");
  }

  return scenTypeData;
};

const getScenarioTypeObjectByID = async (db, scenarioTypeID) => {
  const data = await getScenarioTypeByID(db, scenarioTypeID);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType(data);
};
const getScenarioTypeObject = async (db, scenarioType, schemaVersion) => {
  const data = await getScenarioType(db, scenarioType, schemaVersion);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType(data);
};
const getScenarioTypeByID = (db, scenarioTypeID) => {
  return db.collection("scenario-types").doc(scenarioTypeID).get().then(doc => {
    const data = doc.data();
    data.id = doc.id;
    return addMissingScenarioTypeFields(data);
  }).catch(error => {
    console.log(error);
    return error;
  });
};
const getScenarioType = (db, scenarioType, schemaVersion) => {
  return db.collection("scenario-types").where("name", "==", scenarioType).where("schemaVersion", "==", schemaVersion).limit(1).get().then(snapShot => {
    if (snapShot.size === 1) {
      return addMissingScenarioTypeFields(snapShot.docs[0].data());
    } else {
      throw new Error("document not found");
    }
  });
}; // FIXME: this needs to go away, although I need to figure out if it's in use anywhere first

const getPromptAndOptions = (scenarioTypeOrPubScenario, promptID) => {
  const scenType = scenarioTypeOrPubScenario;
  const prompt = scenType.interventionPrompts.find(e => e.id === promptID);

  if (!!prompt) {
    const options = prompt.answers.map(ansID => scenType.interventionPromptAnswers.find(a => a.id === ansID));
    prompt.options = options.map(opt => {
      return { ...opt,
        prompt: prompt.label
      };
    });
  }

  return prompt;
}; // moved over from apps/data-entry/src/scripts/connect-firebase
// added 'db' as first param so that these functions can be used either from web or server firebase APIs

/**
 * Verify document doesn't already exist in database.
 * @param {object} db instance
 * @param {string} collectionId
 * @param {string} documentId
 * @returns True if document with given ID doesn't exist yet.
 */

const verifyDocument = async (db, collectionId, documentId) => {
  const set = await db.collection(collectionId).where("id", "==", `${documentId}`).get();
  return set.empty;
}; // returns true if combo of name and schemaVersion fields is unique

const verifyDocNameUniqueness = async (db, collectionID, candidateName, dbNameField, schemaVersion) => {
  const snapshot = await db.collection(collectionID).where(dbNameField, "==", candidateName).where("schemaVersion", "==", schemaVersion).get();
  return snapshot.empty;
}; // Upload document object to database

const publishDocument = async (db, collectionId, documentObject, documentId) => {
  documentId ? await db.collection(collectionId).doc(documentId).set(documentObject) : await db.collection(collectionId).doc().set(documentObject);
}; // Update document with given id

const updateDocument = async (db, collectionId, documentId, documentObject) => {
  const set = await db.collection(collectionId).where("id", "==", `${documentId}`).get();
  set.empty ? publishDocument(collectionId, documentObject) : await db.collection(collectionId).doc(set.docs[0].id).set(documentObject);
};
/**
 * Will save document, using auto-generated IDs if documentObject doesn't have
 * an 'id' attribute.
 * @param {object} db instance
 * @param {string} collectionId
 * @param {object} documentObject
 */

const saveDocument = async (db, collectionId, documentObject) => {
  const doc = !documentObject.id ? db.collection(collectionId).doc() : db.collection(collectionId).doc(documentObject.id);
  documentObject.id = doc.id;
  await doc.set(documentObject);
  return documentObject.id;
};
/**
 * Query collection for document with id
 * @param {object} db instance
 * @param {string} collectionId
 * @param {string} documentId
 * @returns {object} Object containing document data.
 */

const getDocument = async (db, collectionId, documentId) => {
  const doc = await db.collection(collectionId).doc(documentId).get();
  return doc.data();
};
/**
 * Query collection for document with name
 * @param {string} collectionId
 * @param {string} documentName
 * @returns {object} Object containing document data.
 */

const getDocumentWithName = async (db, collectionId, documentName) => {
  const set = await db.collection(collectionId).where("name", "==", `${documentName}`).get();
  return set.docs[0]?.data();
};
/**
 * Delete document from collectio
 * @param {string} collectionId
 * @param {string} documentId
 */

const deleteDocument = async (db, collectionId, documentId) => {
  await db.collection(collectionId).doc(documentId).delete();
};
const deleteAndArchiveDocument = (db, collectionId, documentId) => {
  if (window.confirm("Are you sure you want to delete this file?  It will be archived but you will need help to retrieve it.")) {
    const data = getDocument(db, collectionId, documentId);
    let archiveId = "archive-" + collectionId;
    saveDocument(db, archiveId, data);
    deleteDocument(db, collectionId, documentId);
  }
};
const deleteDocumentNoArchive = async (db, collectionId, documentId) => {
  if (window.confirm("Are you sure you want to delete this file?")) {
    await db.collection(collectionId).doc(documentId).delete();
  }

  ;
};
const deleteObsAndAnaDocuments = (db, id) => {
  deleteAndArchiveDocument(db, "logs", id); //deleteDocument(db,"debriefing-feedback-logs",id)
};
const deleteObsDocument = (db, id) => {
  deleteAndArchiveDocument(db, "logs", id);
};
const deleteAnaDocument = (db, id) => {
  deleteDocument(db, "analyzed-logs", id);
};
const deleteCond1CommentDocument = (db, id) => {
  deleteDocument(db, "cond1-comments", id);
};
const deleteCommentDocument = (db, id) => {
  deleteAndArchiveDocument(db, "debriefing-comment-logs", id);
};
/**
 * Pull collection from database as array of document objects
 * @param {string} collectionId
 * @returns {object[]} An array containing all of the document in the collection.
 */

const getCollection = async (db, collectionId) => {
  const collection = await db.collection(collectionId).get();
  return collection.docs?.map(item => item.data());
}; // copied over from /apps/debriefer/src/scripts/connect-firebase and 'db' param added as first param
// Get a list of document names and a copy of each document

const listDocumentNames = async (db, collectionId) => {
  let documentList = db.collectionGroup(collectionId);
  let documentDictionary = {};
  documentList.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      documentDictionary[doc.id] = doc.data();
    });
  });
  return documentDictionary;
};

function exportObserverLogMetaData(doc) {
  const data = doc.data();
  return {
    id: doc.id,
    label: data.label,
    scenario: data.scenarioName,
    scenarioID: data.scenarioID,
    userName: data.userName,
    timestamp: data.timestamp
  };
}

const getLogs = db => {
  return db.collection("logs").get().then(querySnapshot => querySnapshot.docs.map(doc => exportObserverLogMetaData(doc))).catch(error => {
    console.error(error);
    return [];
  });
};
const getObserverLogAnalyses = (db, observerLogID) => {
  return db.collection("analyzed-logs").where("observerLogID", "==", observerLogID).get().then(querySnapShot => {
    return querySnapShot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        observerLogID: data.observerLogID,
        analyzer: data.analyzer,
        timestamp: data.timestamp
      };
    });
  }).catch(error => {
    console.error(error);
    return [];
  });
};
const getObserverLogList = async (db, onlyPublished = true) => {
  // by default, only lists observer logs which don't refer to currently 
  // published scenarioIDs
  const pubScens = await getPubScenarios(db);
  const pubScenIDs = pubScens.map(e => e.id);
  return db.collection("logs").get().then(querySnapshot => querySnapshot.docs.map(doc => exportObserverLogMetaData(doc))).then(logs => onlyPublished ? logs.filter(e => pubScenIDs.includes(e.scenarioID)) : logs).catch(error => {
    console.error(error);
    return [];
  });
};
const getPubScenarios = db => {
  let results = [];
  return db.collection("published-scenarios").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        version: data.version
      };
    });
  });
};
const createCond1Comments = async (db, analysis, userName) => {
  const docRef = await db.collection("cond1-comments").doc();
  const id = docRef.id;
  const data = {
    id,
    analysisLogID: analysis.id,
    observerLogID: analysis.observerLogID,
    reviewer: userName,
    comments: Array(analysis.events.length).fill(""),
    timestamp: Date()
  };
  await docRef.set(data);
  return id;
};
const createCond2Debriefing = async (db, analysis, userName) => {
  const docRef = await db.collection("cond2-debriefings").doc();
  const id = docRef.id;
  const data = {
    id,
    analysisLogID: analysis.id,
    observerLogID: analysis.observerLogID,
    reviewer: userName,
    comments: {},
    timestamp: Date()
  };
  await docRef.set(data);
  return id;
};
const getAnalysisCond1Comments = (db, analysisLogID) => {
  return db.collection("cond1-comments").where("analysisLogID", "==", analysisLogID).get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      };
    });
  });
};
const getAnalysisCond2Debriefings = (db, analysisLogID) => {
  return db.collection("cond2-debriefings").where("analysisLogID", "==", analysisLogID).get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      };
    });
  });
};
const getDebriefCommentLogs = db => {
  return db.collection("debriefing-comment-logs").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        scenario: data.scenarioName,
        scenarioID: data.scenarioID,
        commenter: data.commenter,
        timestamp: data.timestamp
      };
    });
  });
};
const getAnalyses = db => {
  return db.collection("analyzed-logs").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        observerLogID: data.observerLogID,
        analyzer: data.analyzer,
        timestamp: data.timestamp
      };
    });
  });
};
const getCond1CommentLogs = db => {
  return db.collection("cond1-comments").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        analysisLogID: data.analysisLogID,
        commenter: data.commenter,
        timestamp: data.timestamp
      };
    });
  });
};
const getLog = (db, logID) => {
  return db.collection("logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getDebriefLog = (db, logID) => {
  return db.collection("debriefing-feedback-logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getDebriefCommentLog = (db, logID) => {
  return db.collection("debriefing-comment-logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return false;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getAnalysisLog = (db, logID) => {
  return db.collection("analyzed-logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      //data.id = doc.id
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getCond1CommentLog = (db, logID) => {
  return db.collection("cond1-comments").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getCond2DebriefingLog = (db, debriefingID) => {
  return db.collection("cond2-debriefings").doc(debriefingID).get().then(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data
    };
  });
};
const getObserverLog = (db, logID) => {
  return db.collection("logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getDebriefLogWithName = async (db, documentName) => {
  const set = await db.collection("debriefing-feedback-logs").where("ObserverFileName", "==", `${documentName}`).get();
  return set.docs[0]?.data();
};
const createInterventionVariant = distPromptIds2OptIds => {
  // the list of opt IDs mapped to each distPromptID needs to be sorted in order
  // to make them comparable
  const retVal = {};
  Object.entries(distPromptIds2OptIds).forEach(([distPromptID, optionsArray]) => {
    retVal[distPromptID] = optionsArray.sort();
  });
  return retVal;
};
const interventionVariantsAreEqual = (intvVariant1, intvVariant2) => {
  return lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual(intvVariant1, intvVariant2);
};
const intvVariant2JSON = intvVariant => {
  return json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__(intvVariant);
};

/***/ }),

/***/ 1722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_MENU_ITEMS = [{
  "depth": 1,
  "type": "heading",
  "id": "heading-als",
  "label": "ALS",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-amputation",
  "label": "Manage amputation",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-bls",
  "label": "BLS",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-crico",
  "label": "Cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-establish-patency",
  "label": "Establish patency",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-insert-adjunct",
  "label": "Insert adjunct",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-intubation",
  "label": "Intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-manage-internal-bleeding",
  "label": "Manage suspected internal bleeding",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-manage-shock",
  "label": "Manage hemorrhagic shock",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 3,
  "type": "heading",
  "id": "heading-medication-facilitated-intubation",
  "label": "Medication Facilitated Intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-open-airway",
  "label": "Open airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "heading",
  "id": "heading-remove-foreign-body-obstructions",
  "label": "Remove foreign body obstructions",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-severe-external-bleeding",
  "label": "Manage severe external bleeding",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-transfer",
  "label": "Transfer patient to EMS vehicle",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-transport",
  "label": "Transport to care facility",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-advanced-airway-adjunct",
  interventionID: "intv-advanced-airway-adjunct",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-airway-patency-technique-suction-airway",
  interventionID: "intv-airway-patency-technique-suction-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-apply-sterile-dressings",
  interventionID: "intv-apply-sterile-dressings",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-back-blows-and-chest-thrusts",
  interventionID: "intv-back-blows-and-chest-thrusts",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-direct-pressure",
  interventionID: "intv-control-severe-bleeding-technique-direct-pressure",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-tourniquet",
  interventionID: "intv-control-severe-bleeding-technique-tourniquet",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-2nd-tourniquet",
  interventionID: "intv-control-severe-bleeding-technique-2nd-tourniquet",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-pack-wound-with-gauze",
  interventionID: "intv-control-severe-bleeding-technique-pack-wound-with-gauze",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-pressure-bandage",
  interventionID: "intv-control-severe-bleeding-technique-pressure-bandage",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-load-and-go",
  interventionID: "intv-control-severe-bleeding-technique-load-and-go",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-keep-patient-warm",
  interventionID: "intv-control-shock-technique-keep-patient-warm",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-administer-high-concentration-o2",
  interventionID: "intv-control-shock-technique-administer-high-concentration-o2",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-place-patient-supine-position",
  interventionID: "intv-control-shock-technique-place-patient-supine-position",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-administer-iv-boluses",
  interventionID: "intv-control-shock-technique-administer-iv-boluses",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-heimlich-maneuver",
  interventionID: "intv-heimlich-maneuver",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-keep-body-part-cool",
  interventionID: "intv-keep-body-part-cool",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-magill-forceps-assisted",
  interventionID: "intv-magill-forceps-assisted",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-manual-finger-sweep",
  interventionID: "intv-manual-finger-sweep",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-nasopharyngeal-airway",
  interventionID: "intv-nasopharyngeal-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-needle-cricothyrotomy",
  interventionID: "intv-needle-cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-occlusive-dressing",
  interventionID: "intv-occlusive-dressing",
  intvCategoryID: "intv-cat-manage-thoracic-trauma"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-open-airway-method-head-tilt",
  interventionID: "intv-open-airway-method-head-tilt",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-open-airway-method-modified-jaw-thrust",
  interventionID: "intv-open-airway-method-modified-jaw-thrust",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-oropharyngeal-airway",
  interventionID: "intv-oropharyngeal-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-orotracheal-intubation",
  interventionID: "intv-orotracheal-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-place-body-part-in-bag",
  interventionID: "intv-place-body-part-in-bag",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-place-immobilized-patient-on-stretcher",
  interventionID: "intv-place-immobilized-patient-on-stretcher",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-pleural-decompression",
  interventionID: "intv-pleural-decompression",
  intvCategoryID: "intv-cat-manage-thoracic-trauma"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-prepare-and-administer-pain-nausea-vomiting-medications",
  interventionID: "intv-prepare-and-administer-pain-nausea-vomiting-medications",
  intvCategoryID: "intv-cat-manage-pain-nausea-vomiting"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-prepare-and-administer-sedative",
  interventionID: "intv-prepare-and-administer-sedative",
  intvCategoryID: "intv-cat-sedate-agitated-or-combatitive-patient"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-retrieve-amputated-body-part",
  interventionID: "intv-retrieve-amputated-body-part",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-sedation-assisted-intubation",
  interventionID: "intv-sedation-assisted-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-slat",
  interventionID: "intv-slat",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-attach-cid",
  interventionID: "intv-spinal-immobilization-technique-attach-cid",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-cervical-collar",
  interventionID: "intv-spinal-immobilization-technique-cervical-collar",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-manual-c-spine",
  interventionID: "intv-spinal-immobilization-technique-manual-c-spine",
  intvCategoryID: "intv-cat-manual-c-spine-stabilization"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-manual-c-spine2",
  interventionID: "intv-spinal-immobilization-technique-manual-c-spine",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-transfer-to-device",
  interventionID: "intv-spinal-immobilization-technique-transfer-to-device",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-splint-fractures",
  interventionID: "intv-splint-fractures",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-splint-fractures2",
  interventionID: "intv-splint-fractures",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-sterile-dressing-soft-tissue",
  interventionID: "intv-sterile-dressing-soft-tissue",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-supplemental-oxygen-device-nasal-cannula",
  interventionID: "intv-supplemental-oxygen-device-nasal-cannula",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-supplemental-oxygen-device-non-rebreather-mask",
  interventionID: "intv-supplemental-oxygen-device-non-rebreather-mask",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-surgical-cricothyrotomy",
  interventionID: "intv-surgical-cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transfers-patient-method-walk-patient",
  interventionID: "intv-transfers-patient-method-walk-patient",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transfers-patient-method-place-directly-on-stretcher",
  interventionID: "intv-transfers-patient-method-place-directly-on-stretcher",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transport",
  interventionID: "intv-transport",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transport-body-part-to-receiving-facility",
  interventionID: "intv-transport-body-part-to-receiving-facility",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-ventilation-technique-bag-valve-mask",
  interventionID: "intv-ventilation-technique-bag-valve-mask",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-wrap-body-part-in-saline-soaked-gauze",
  interventionID: "intv-wrap-body-part-in-saline-soaked-gauze",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_MENU_ITEMS);

/***/ }),

/***/ 6308:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_MENU_CATS = [{
  "id": "intv-cat-manual-c-spine-stabilization",
  "label": "Manual c-spine stabilization",
  "items": ["menu-item-spinal-immobilization-technique-manual-c-spine"]
}, {
  "id": "intv-cat-airway",
  "label": "Airway",
  "items": ["heading-bls", "heading-open-airway", "menu-item-open-airway-method-head-tilt", "menu-item-open-airway-method-modified-jaw-thrust", "heading-establish-patency", "menu-item-airway-patency-technique-suction-airway", "heading-remove-foreign-body-obstructions", "menu-item-manual-finger-sweep", "menu-item-magill-forceps-assisted", "menu-item-slat", "menu-item-heimlich-maneuver", "menu-item-back-blows-and-chest-thrusts", "heading-insert-adjunct", "menu-item-oropharyngeal-airway", "menu-item-nasopharyngeal-airway", "heading-als", "heading-intubation", "menu-item-advanced-airway-adjunct", "menu-item-orotracheal-intubation", "menu-item-nasotracheal-intubation", "heading-medication-facilitated-intubation", "menu-item-rapid-sequence-intubation", "menu-item-sedation-assisted-intubation", "heading-crico", "menu-item-needle-cricothyrotomy", "menu-item-surgical-cricothyrotomy"]
}, {
  "id": "intv-cat-manage-oxygenation-and-ventilation",
  "label": "Manage oxygenation and ventilation",
  "items": ["menu-item-supplemental-oxygen-device-nasal-cannula", "menu-item-supplemental-oxygen-device-non-rebreather-mask", "menu-item-ventilation-technique-bag-valve-mask"]
}, {
  "id": "intv-cat-circulation-management",
  "label": "Circulation management",
  "items": ["heading-severe-external-bleeding", "menu-item-control-severe-bleeding-technique-direct-pressure", "menu-item-control-severe-bleeding-technique-tourniquet", "menu-item-control-severe-bleeding-technique-2nd-tourniquet", "menu-item-control-severe-bleeding-technique-pack-wound-with-gauze", "menu-item-control-severe-bleeding-technique-pressure-bandage", "menu-item-control-severe-bleeding-technique-load-and-go", "heading-manage-internal-bleeding", "menu-item-splint-fractures", "heading-manage-shock", "menu-item-control-shock-technique-keep-patient-warm", "menu-item-control-shock-technique-administer-high-concentration-o2", "menu-item-control-shock-technique-place-patient-supine-position", "menu-item-control-shock-technique-administer-iv-boluses"]
}, {
  "id": "intv-cat-manage-thoracic-trauma",
  "label": "Manage thoracic trauma",
  "items": ["menu-item-occlusive-dressing", "menu-item-pleural-decompression"]
}, {
  "id": "intv-cat-spinal-motion-restriction",
  "label": "Spinal motion restriction",
  "items": ["menu-item-spinal-immobilization-technique-manual-c-spine2", "menu-item-spinal-immobilization-technique-cervical-collar", "menu-item-spinal-immobilization-technique-transfer-to-device", "menu-item-spinal-immobilization-technique-attach-cid"]
}, {
  "id": "intv-cat-extrication-and-transport",
  "label": "Extrication and transport",
  "items": ["heading-transfer", "menu-item-transfers-patient-method-walk-patient", "menu-item-transfers-patient-method-place-directly-on-stretcher", "menu-item-place-immobilized-patient-on-stretcher", "heading-transport", "menu-item-transport"]
}, {
  "id": "intv-cat-manage-wounds-and-specific-injuries",
  "label": "Manage wounds and specific injuries",
  "items": ["menu-item-apply-sterile-dressings", "menu-item-splint-fractures2", "heading-amputation", "menu-item-sterile-dressing-soft-tissue", "menu-item-retrieve-amputated-body-part", "menu-item-wrap-body-part-in-saline-soaked-gauze", "menu-item-place-body-part-in-bag", "menu-item-keep-body-part-cool", "menu-item-transport-body-part-to-receiving-facility"]
}, {
  "id": "intv-cat-manage-pain-nausea-vomiting",
  "label": "Manage pain, nausea, vomiting",
  "items": ["menu-item-prepare-and-administer-pain-nausea-vomiting-medications"]
}, {
  "id": "intv-cat-sedate-agitated-or-combatitive-patient",
  "label": "Sedate agitated or combatitive patient",
  "items": ["menu-item-prepare-and-administer-sedative"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_MENU_CATS);

/***/ }),

/***/ 7246:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_PROMPT_ANSWERS = [{
  id: "answer-wound-location-head",
  label: "Wound located at head",
  abbrLabel: "Head",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-neck",
  label: "Wound located at neck",
  abbrLabel: "Neck",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-chest",
  label: "Wound located at chest",
  abbrLabel: "Chest",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-abdomen-pelvis",
  label: "Wound located at abdomen/pelvis",
  abbrLabel: "Abdomen/Pelvis",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-posterior",
  label: "Wound located at posterior thorax, lumbar, or buttocks",
  abbrLabel: "Posterior",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-genitalia",
  label: "Wound located at genitalia",
  abbrLabel: "Genitalia",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-left-lower-extremity",
  label: "Wound located at left lower extremity",
  abbrLabel: "Left lower extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-right-lower-extremity",
  label: "Wound located at right lower extremity",
  abbrLabel: "Right lower extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-left-upper-extremity",
  label: "Wound located at left upper extremity",
  abbrLabel: "Left upper extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-right-upper-extremity",
  label: "Wound located at right upper extremity",
  abbrLabel: "Right upper-extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-other",
  label: "Other wound location",
  abbrLabel: "Other",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-locations-head",
  label: "Wound located at head",
  abbrLabel: "Head",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-neck",
  label: "Wound located at neck",
  abbrLabel: "Neck",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-chest",
  label: "Wound located at chest",
  abbrLabel: "Chest",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-abdomen-pelvis",
  label: "Wound located at abdomen/pelvis",
  abbrLabel: "Abdomen/Pelvis",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-posterior",
  label: "Wound located at posterior thorax, lumbar, or buttocks",
  abbrLabel: "Posterior",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-genitalia",
  label: "Wound located at genitalia",
  abbrLabel: "Genitalia",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-left-lower-extremity",
  label: "Wound located at left lower extremity",
  abbrLabel: "Left lower extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-right-lower-extremity",
  label: "Wound located at right lower extremity",
  abbrLabel: "Right lower extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-left-upper-extremity",
  label: "Wound located at left upper extremity",
  abbrLabel: "Left upper extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-right-upper-extremity",
  label: "Wound located at right upper extremity",
  abbrLabel: "Right upper-extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-other",
  label: "Other wound location",
  abbrLabel: "Other",
  promptID: "prompt-wound-locations"
}, {
  "id": "answer-airway-patency-suction-yankauer",
  "label": "Yankauer",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-airway-patency-suction-long-multiuse",
  "label": "Long, multiuse",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-airway-patency-suction-other",
  "label": "Other",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-alternative-rescue-airway-type-ett",
  "label": "Endotracheal tube (ETT)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-combitube",
  "label": "Combitube",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-lta",
  "label": "Laryngeal tube airway (LTA; King tube)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-lma",
  "label": "Laryngeal mask airway (LMA)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-igel",
  "label": "Igel",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-other",
  "label": "Other",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-airway-tube-size-7",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "7.0"
}, {
  "id": "answer-alternative-airway-tube-size-8",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "8.0"
}, {
  "id": "answer-alternative-airway-tube-size-age-div-4-plus-4",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "((age/4 + 4))"
}, {
  "id": "answer-alternative-airway-tube-size--age-div-4-plus-4-minus-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "((age/4 + 4) - 5"
}, {
  "id": "answer-alternative-airway-tube-size-37f",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "37F"
}, {
  "id": "answer-alternative-airway-tube-size-41f",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "41F"
}, {
  "id": "answer-alternative-airway-tube-size-0",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "0"
}, {
  "id": "answer-alternative-airway-tube-size-1",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "1"
}, {
  "id": "answer-alternative-airway-tube-size-1-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "1.5"
}, {
  "id": "answer-alternative-airway-tube-size-2",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "2"
}, {
  "id": "answer-alternative-airway-tube-size-2-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "2.5"
}, {
  "id": "answer-alternative-airway-tube-size-3",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "3"
}, {
  "id": "answer-alternative-airway-tube-size-4",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "4"
}, {
  "id": "answer-alternative-airway-tube-size-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "5"
}, {
  "id": "answer-alternative-airway-tube-size-6",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "6"
}, {
  "id": "answer-alternative-airway-tube-size-other",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "Other"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-21cm",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "21cm"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-23cm",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "23cm"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-3-times-tube-size",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "3 x tube size"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-other",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "Other"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-6-to-6-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "6.0 - 6.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-7-to-7-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "7.0 - 7.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus1",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "(age/4 - 4)-1"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus0-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "(age/4 -4) - 0.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-0-5-1cm-less-than-oro-size",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": ".5 - 1cm less then size for orotracheal tube size"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-other",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "Other"
}, {
  "id": "answer-nasal-cannula-flow-rate-1-6-lpm",
  "promptID": "prompt-nasal-cannula-flow-rate",
  "label": "Nasal cannula flow rate 1-6 liters/min",
  "abbrLabel": "1-6 liters/min"
}, {
  "id": "answer-nasal-cannula-flow-rate-other",
  "promptID": "prompt-nasal-cannula-flow-rate",
  "label": "Nasal cannula flow rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-nasal-cannula-target-saturation-gt-90-pct",
  "promptID": "prompt-nasal-cannula-target-saturation",
  "label": "Nasal cannula target saturation: 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-nasal-cannula-target-saturation-other",
  "promptID": "prompt-nasal-cannula-target-saturation",
  "label": "Nasal cannula target saturation: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-non-rebreather-mask-flow-rate-10-15-liters-min",
  "promptID": "prompt-non-rebreather-mask-flow-rate",
  "label": "Non-rebreather mask flow rate 10-15 L/min",
  "abbrLabel": "10-15 L/min"
}, {
  "id": "answer-non-rebreather-mask-flow-rate-other",
  "promptID": "prompt-non-rebreather-mask-flow-rate",
  "label": "Non-rebreather mask flow rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-non-rebreather-mask-target-saturation-gt-90-pct",
  "promptID": "prompt-non-rebreather-mask-target-saturation",
  "label": "Non-rebreather mask target O2 saturation: 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-non-rebreather-mask-target-saturation-other",
  "promptID": "prompt-non-rebreather-mask-target-saturation",
  "label": "Non-rebreather mask target O2 saturation: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-ventilation-rate-10-12-bpm",
  "promptID": "prompt-bvm-ventilation-rate",
  "label": "BVM ventilation rate: 10-12 BPM",
  "abbrLabel": "10-12 breaths/minute"
}, {
  "id": "answer-bvm-ventilation-rate-other",
  "promptID": "prompt-bvm-ventilation-rate",
  "label": "BVM ventilation rate: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-flow-rate-15-ltm-or-gt",
  "promptID": "prompt-bvm-flow-rate",
  "label": "BVM flow rate: 15 liters/min or greater",
  "abbrLabel": "15 liters/min or greater"
}, {
  "id": "answer-bvm-flow-rate-other",
  "promptID": "prompt-bvm-flow-rate",
  "label": "BVM flow rate: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-target-saturation-rate-gt-90-pct",
  "promptID": "prompt-bvm-target-saturation",
  "label": "BVM target O2 saturation rate 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-bvm-target-saturation-rate-other",
  "promptID": "prompt-bvm-target-saturation",
  "label": "BVM target O2 saturation rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-tourniquet-placement-close-to-core-far-from-wound",
  "promptID": "prompt-tourniquet-placement",
  "label": "Tourniquet placement as far from wound and close to the core as possible",
  "abbrLabel": "As far from wound and close to the core as possible"
}, {
  "id": "answer-tourniquet-placement-other",
  "promptID": "prompt-tourniquet-placement",
  "label": "Tourniquet placement other",
  "abbrLabel": "Other"
}, {
  "id": "answer-2nd-tourniquet-placement-adjacent-to-initial-tourniquet",
  "promptID": "prompt-2nd-tourniquet-placement",
  "label": "Second tourniquet location: adjacent to initial tourniquet",
  "abbrLabel": "Adjacent to initial tourniquet"
}, {
  "id": "answer-2nd-tourniquet-placement-other",
  "promptID": "prompt-2nd-tourniquet-placement",
  "label": "Second tourniquet location: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-occulsivive-dressing-injury-type-open-pneumothorax",
  "promptID": "prompt-occlusive-dressing-injury-type",
  "label": "Occlusive dressing injury type: Open pnuemothorax (sucking chest wound)",
  "abbrLabel": "Open pnuemothorax (sucking chest wound)"
}, {
  "id": "answer-occulsivive-dressing-injury-type-other",
  "promptID": "prompt-occlusive-dressing-injury-type",
  "label": "Occlusive dressing injury type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-occulsive-dressing-method-leave-one-side-untaped",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: Leave one side untaped",
  "abbrLabel": "Leave one side untaped"
}, {
  "id": "answer-occulsive-dressing-method-leave-dressing-with-one-way-valve",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: Dressing with one-way valve (e.g. Hyfin chest seal, Asherman chest seal)",
  "abbrLabel": "Dressing with one-way valve (e.g. Hyfin chest seal, Asherman chest seal)"
}, {
  "id": "answer-occulsive-dressing-method-other",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-injury-type-tension-pneumothorax",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: tension pneumothorax",
  "abbrLabel": "Tension pneumothorax"
}, {
  "id": "answer-pleural-decompression-injury-type-open-pneumothorax",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: Open pnuemothorax (sucking chest wound)",
  "abbrLabel": "Open pnuemothorax (sucking chest wound)"
}, {
  "id": "answer-pleural-decompression-injury-type-other",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-placement-side-of-the-body-right",
  "promptID": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "label": "Pleural Decompression needle placement: right side",
  "abbrLabel": "Right"
}, {
  "id": "answer-pleural-decompression-needle-placement-side-of-the-body-left",
  "promptID": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "label": "Pleural Decompression needle placement: left side",
  "abbrLabel": "Left"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-2nd-or-3rd-intercostal-space-mid-clavicular",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: Second or third intercostal space mid-clavicular line",
  "abbrLabel": "Second or third intercostal space mid-clavicular line"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-4th-or-5th-intercostal-space-mid-axillary",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: Fourth or fifth intercostal space mid-axillary line",
  "abbrLabel": "Fourth or fifth intercostal space mid-axillary line"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-other",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-size-large-bore",
  "promptID": "prompt-pleural-decompression-needle-size",
  "label": "Pleural decompression needle size: Large bore (14 or 16 gauge)",
  "abbrLabel": "Large bore (14 or 16 gauge)"
}, {
  "id": "answer-pleural-decompression-needle-size-other",
  "promptID": "prompt-pleural-decompression-needle-size",
  "label": "Pleural decompression needle size: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-length-2-inches-or-longer",
  "promptID": "prompt-pleural-decompression-needle-length",
  "label": "Pleural Decompression needle size: 2 inches or more",
  "abbrLabel": "2 inches or more"
}, {
  "id": "answer-pleural-decompression-needle-length-other",
  "promptID": "prompt-pleural-decompression-needle-length",
  "label": "Pleural Decompression needle size: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-transport-facility-choice-level-1-or-2-trauma-center",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closest level 1 or 2 trauma center",
  "abbrLabel": "Closest level 1 or 2 trauma center"
}, {
  "id": "answer-transport-facility-choice-level-3-or-4-trauma-center",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closet level 3 or 4 trauma center",
  "abbrLabel": "Closet level 3 or 4 trauma center"
}, {
  "id": "answer-transport-facility-choice-closest",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closest receiving facility",
  "abbrLabel": "Closest receiving facility"
}, {
  "id": "answer-transport-facility-choice-other",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-transport-method-ambulance",
  "promptID": "prompt-transport-method",
  "label": "Ambulance",
  "abbrLabel": "Ambulance"
}, {
  "id": "answer-transport-method-helicopter",
  "promptID": "prompt-transport-method",
  "label": "Helicopter",
  "abbrLabel": "Helicopter"
}, {
  "id": "answer-transport-lights-sirens-yes",
  "promptID": "prompt-transport-lights-siren-decision",
  "label": "Use lights and sirens",
  "abbrLabel": "Yes"
}, {
  "id": "answer-transport-lights-sirens-no",
  "promptID": "prompt-transport-lights-siren-decision",
  "label": "Do not use lights and sirens",
  "abbrLabel": "No"
}, {
  "id": "answer-splint-type-board",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Board splint",
  "abbrLabel": "Board splint"
}, {
  "id": "answer-splint-type-moldable",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Moldable splint",
  "abbrLabel": "Moldable splint"
}, {
  "id": "answer-splint-type-traction",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Traction splint",
  "abbrLabel": "Traction splint"
}, {
  "id": "answer-splint-type-pelvic-binder",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Pelvic binder",
  "abbrLabel": "Pelvic binder"
}, {
  "id": "answer-splint-type-other",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Other",
  "abbrLabel": "Other"
}];
/*
    {
        "id": "",
        "promptID": "",
        "label": "",
        "abbrLabel": ""
    },
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_PROMPT_ANSWERS);

/***/ }),

/***/ 3836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8913);

const INTV_PROMPTS = [{
  "id": "prompt-wound-location",
  type: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DIST_PROMPT,
  selectionType: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  label: "Where is the wound located?",
  abbrLabel: "Wound location?",
  answers: ["answer-wound-location-head", "answer-wound-location-neck", "answer-wound-location-chest", "answer-wound-location-abdomen-pelvis", "answer-wound-location-posterior", "answer-wound-location-genitalia", "answer-wound-location-left-lower-extremity", "answer-wound-location-right-lower-extremity", "answer-wound-location-left-upper-extremity", "answer-wound-location-right-upper-extremity", "answer-wound-location-other"]
}, {
  "id": "prompt-wound-locations",
  type: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DIST_PROMPT,
  selectionType: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.OOM,
  label: "Where are the wound(s) located?",
  abbrLabel: "Wound location(s)?",
  answers: ["answer-wound-locations-head", "answer-wound-locations-neck", "answer-wound-locations-chest", "answer-wound-locations-abdomen-pelvis", "answer-wound-locations-posterior", "answer-wound-locations-genitalia", "answer-wound-locations-left-lower-extremity", "answer-wound-locations-right-lower-extremity", "answer-wound-locations-left-upper-extremity", "answer-wound-locations-right-upper-extremity", "answer-wound-locations-other"]
}, {
  "id": "prompt-airway-patency-suction-device",
  "interventionID": "intv-airway-patency-technique-suction-airway",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What kind of suction catheter will you use?",
  "abbrLabel": "Suction catheter type?",
  "answers": ["answer-airway-patency-suction-yankauer", "answer-airway-patency-suction-long-multiuse", "answer-airway-patency-suction-other"]
}, {
  "id": "prompt-advanced-airway-adjunct-type",
  "interventionID": "intv-advanced-airway-adjunct",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of advanced airway adjunct would you use?",
  "abbrLabel": "Which advanced airway?",
  "answers": ["answer-alternative-rescue-airway-type-ett", "answer-alternative-rescue-airway-type-combitube", "answer-alternative-rescue-airway-type-lta", "answer-alternative-rescue-airway-type-lma", "answer-alternative-rescue-airway-type-igel", "answer-alternative-rescue-airway-type-other"]
}, {
  "id": "prompt-advanced-airway-tube-size",
  "interventionID": "intv-advanced-airway-adjunct",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": "one",
  "label": "What tube size for advanced airway?",
  "abbrLabel": "What size?",
  "answers": ["answer-alternative-airway-tube-size-7", "answer-alternative-airway-tube-size-8", "answer-alternative-airway-tube-size-age-div-4-plus-4", "answer-alternative-airway-tube-size--age-div-4-plus-4-minus-5", "answer-alternative-airway-tube-size-37f", "answer-alternative-airway-tube-size-41f", "answer-alternative-airway-tube-size-0", "answer-alternative-airway-tube-size-1", "answer-alternative-airway-tube-size-1-5", "answer-alternative-airway-tube-size-2", "answer-alternative-airway-tube-size-2-5", "answer-alternative-airway-tube-size-3", "answer-alternative-airway-tube-size-4", "answer-alternative-airway-tube-size-5", "answer-alternative-airway-tube-size-6", "answer-alternative-airway-tube-size-other"]
}, {
  "id": "prompt-orotracheal-intubation-tube-insertion-depth",
  "interventionID": "intv-orotracheal-intubation",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what depth would you insert the tube?",
  "abbrLabel": "Tube insertion depth?",
  "answers": ["answer-orotracheal-intubation-tube-insertion-depth-21cm", "answer-orotracheal-intubation-tube-insertion-depth-23cm", "answer-orotracheal-intubation-tube-insertion-depth-3-times-tube-size", "answer-orotracheal-intubation-tube-insertion-depth-other"]
}, {
  "id": "prompt-nasotracheal-intubation-tube-size",
  "interventionID": "intv-nasotracheal-intubation",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What tube size would you use?",
  "abbrLabel": "Tube size?",
  "answers": ["answer-nasotracheal-intubation-tube-size-6-to-6-5", "answer-nasotracheal-intubation-tube-size-7-to-7-5", "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus1", "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus0-5", "answer-nasotracheal-intubation-tube-size-0-5-1cm-less-than-oro-size", "answer-nasotracheal-intubation-tube-size-other"]
}, {
  "id": "prompt-nasal-cannula-flow-rate",
  "interventionID": "intv-supplemental-oxygen-device-nasal-cannula",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What oxygen flow rate would you administer?",
  "abbrLabel": "Oxygen flow rate?",
  "answers": ["answer-nasal-cannula-flow-rate-1-6-lpm", "answer-nasal-cannula-flow-rate-other"]
}, {
  "id": "prompt-nasal-cannula-target-saturation",
  "interventionID": "intv-supplemental-oxygen-device-nasal-cannula",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-nasal-cannula-target-saturation-gt-90-pct", "answer-nasal-cannula-target-saturation-other"]
}, {
  "id": "prompt-non-rebreather-mask-flow-rate",
  "interventionID": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What oxygen flow rate would you administer?",
  "abbrLabel": "Oxygen flow rate?",
  "answers": ["answer-non-rebreather-mask-flow-rate-10-15-liters-min", "answer-non-rebreather-mask-flow-rate-other"]
}, {
  "id": "prompt-non-rebreather-mask-target-saturation",
  "interventionID": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-non-rebreather-mask-target-saturation-gt-90-pct", "answer-non-rebreather-mask-target-saturation-other"]
}, {
  "id": "prompt-bvm-ventilation-rate",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what rate will you ventilate the patient?",
  "abbrLabel": "",
  "answers": ["answer-bvm-ventilation-rate-10-12-bpm", "answer-bvm-ventilation-rate-other"]
}, {
  "id": "prompt-bvm-flow-rate",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What flow rate would you administer?",
  "abbrLabel": "Flow rate?",
  "answers": ["answer-bvm-flow-rate-15-ltm-or-gt", "answer-bvm-flow-rate-other"]
}, {
  "id": "prompt-bvm-target-saturation",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-bvm-target-saturation-rate-gt-90-pct", "answer-bvm-target-saturation-rate-other"]
}, {
  "id": "prompt-tourniquet-placement",
  "interventionID": "intv-control-severe-bleeding-technique-tourniquet",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Where would you place the tourniquet?",
  "abbrLabel": "Tourniquet location?",
  "answers": ["answer-tourniquet-placement-close-to-core-far-from-wound", "answer-tourniquet-placement-other"]
}, {
  "id": "prompt-2nd-tourniquet-placement",
  "interventionID": "intv-control-severe-bleeding-technique-2nd-tourniquet",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Where would you place the second tourniquet?",
  "abbrLabel": "Tourniquet location?",
  "answers": ["answer-2nd-tourniquet-placement-adjacent-to-initial-tourniquet", "answer-2nd-tourniquet-placement-other"]
}, {
  "id": "prompt-occlusive-dressing-injury-type",
  "interventionID": "intv-occlusive-dressing",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of injury are you trying to manage?",
  "abbrLabel": "For what type of injury?",
  "answers": ["answer-occulsivive-dressing-injury-type-open-pneumothorax", "answer-occulsivive-dressing-injury-type-other"]
}, {
  "id": "prompt-occlusive-dressing-method",
  "interventionID": "intv-occlusive-dressing",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "How would you create a release valve on an occlusive dressing?",
  "abbrLabel": "How would you create a release valve?",
  "answers": ["answer-occulsive-dressing-method-leave-one-side-untaped", "answer-occulsive-dressing-method-leave-dressing-with-one-way-valve", "answer-occulsive-dressing-method-other"]
}, {
  "id": "prompt-pleural-decompression-injury-type",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of injury are you trying to manage?",
  "abbrLabel": "For what type of injury?",
  "answers": ["answer-pleural-decompression-injury-type-tension-pneumothorax", "answer-pleural-decompression-injury-type-open-pneumothorax", "answer-pleural-decompression-injury-type-other"]
}, {
  "id": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "On which side of the body would you place the needle?",
  "abbrLabel": "Which side would you place the needle?",
  "answers": ["answer-pleural-decompression-needle-placement-side-of-the-body-right", "answer-pleural-decompression-needle-placement-side-of-the-body-left"]
}, {
  "id": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what anatomical landmark?",
  "abbrLabel": "At what anatomical landmark?",
  "answers": ["answer-pleural-decompression-needle-placement-anatomical-landmark-2nd-or-3rd-intercostal-space-mid-clavicular", "answer-pleural-decompression-needle-placement-anatomical-landmark-4th-or-5th-intercostal-space-mid-axillary", "answer-pleural-decompression-needle-placement-anatomical-landmark-other"]
}, {
  "id": "prompt-pleural-decompression-needle-size",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What size needle do you want to use?",
  "abbrLabel": "Needle size?",
  "answers": ["answer-pleural-decompression-needle-size-large-bore", "answer-pleural-decompression-needle-size-other"]
}, {
  "id": "prompt-pleural-decompression-needle-length",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "How long a needle would you use?",
  "abbrLabel": "Needle length?",
  "answers": ["answer-pleural-decompression-needle-length-2-inches-or-longer", "answer-pleural-decompression-needle-length-other"]
}, {
  "id": "prompt-transport-facility-choice",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of care facility will you transport the patient to?",
  "abbrLabel": "Type of receiving facility",
  "answers": ["answer-transport-facility-choice-level-1-or-2-trauma-center", "answer-transport-facility-choice-level-3-or-4-trauma-center", "answer-transport-facility-choice-closest", "answer-transport-facility-choice-other"]
}, {
  "id": "prompt-transport-method",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Would you transport this patient by air or ground ambulance?",
  "abbrLabel": "Air or ground ambulance?",
  "answers": ["answer-transport-method-ambulance", "answer-transport-method-helicopter"]
}, {
  "id": "prompt-transport-lights-siren-decision",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Would you use lights and sirens with this patient?",
  "abbrLabel": "Lights and sirens?",
  "answers": ["answer-transport-lights-sirens-yes", "answer-transport-lights-sirens-no"]
}, {
  "id": "prompt-splint-type",
  "interventionID": "intv-splint-fractures",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of splint would you use?",
  "abbrLabel": "Type of splint?",
  "answers": ["answer-splint-type-board", "answer-splint-type-moldable", "answer-splint-type-traction", "answer-splint-type-pelvic-binder", "answer-splint-type-other"]
}];
/*
    {
        "id": "",
        "interventionID": "",
        "type": MDB_TYPES.PROMPT,
        "selectionType": ST.ONE,
        "label": "",
        "abbrLabel": "",
        "answers": [
        ]
    },
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_PROMPTS);

/***/ }),

/***/ 4028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTVS = [{
  "id": "intv-open-airway-method-head-tilt",
  "system": "airway",
  "label": "Head tilt chin lift"
}, {
  "id": "intv-open-airway-method-modified-jaw-thrust",
  "system": "airway",
  "label": "Modified jaw thrust"
}, {
  "id": "intv-airway-patency-technique-suction-airway",
  "system": "airway",
  "label": "Suction airway",
  "prompts": ["prompt-airway-patency-suction-device"]
}, {
  "id": "intv-manual-finger-sweep",
  "system": "airway",
  "label": "Manual (finger sweep)"
}, {
  "id": "intv-magill-forceps-assisted",
  "system": "airway",
  "label": "Magill forceps assisted"
}, {
  "id": "intv-slat",
  "system": "airway",
  "label": "SLAT"
}, {
  "id": "intv-heimlich-maneuver",
  "system": "airway",
  "label": "Heimlich maneuver"
}, {
  "id": "intv-back-blows-and-chest-thrusts",
  "system": "airway",
  "label": "Back blows and chest thrusts"
}, {
  "id": "intv-oropharyngeal-airway",
  "system": "airway",
  "label": "Oropharyngeal airway (OPA)"
}, {
  "id": "intv-nasopharyngeal-airway",
  "system": "airway",
  "label": "Nasopharyngeal airway (NPA)"
}, {
  "id": "intv-advanced-airway-adjunct",
  "system": "airway",
  "label": "Insert advanced airway adjunct",
  "prompts": ["prompt-advanced-airway-adjunct-type", "prompt-advanced-airway-tube-size"]
}, {
  "id": "intv-orotracheal-intubation",
  "system": "airway",
  "label": "Orotracheal intubation",
  "prompts": ["prompt-orotracheal-intubation-tube-insertion-depth"]
}, {
  "id": "intv-nasotracheal-intubation",
  "system": "airway",
  "label": "Nasotracheal intubation",
  "prompts": ["prompt-nasotracheal-intubation-tube-size"]
}, {
  "id": "intv-rapid-sequence-intubation",
  "system": "airway",
  "label": "Rapid sequence intubation (RSI)"
}, {
  "id": "intv-sedation-assisted-intubation",
  "system": "airway",
  "label": "Sedation-assisted intubation",
  "prompts": []
}, {
  "id": "intv-needle-cricothyrotomy",
  "system": "airway",
  "label": "Needle cricothyrotomy"
}, {
  "id": "intv-surgical-cricothyrotomy",
  "system": "airway",
  "label": "Surgical cricothyrotomy"
}, {
  "id": "intv-supplemental-oxygen-device-nasal-cannula",
  "system": "breathing",
  "label": "Nasal cannula",
  "prompts": ["prompt-nasal-cannula-o2-flow-rate", "prompt-nasal-cannula-target-saturation"]
}, {
  "id": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "system": "breathing",
  "label": "Non-rebreather mask",
  "prompts": ["prompt-non-rebreather-mask-flow-rate", "prompt-non-rebreather-mask-target-saturation"]
}, {
  "id": "intv-ventilation-technique-bag-valve-mask",
  "system": "breathing",
  "label": "Bag-valve mask",
  "prompts": ["prompt-bvm-ventilation-rate", "prompt-bvm-flow-rate", "prompt-bvm-target-saturation"]
}, {
  "id": "intv-control-severe-bleeding-technique-direct-pressure",
  "system": "bleeding",
  "label": "Apply direct pressure",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-tourniquet",
  "system": "bleeding",
  "label": "Apply tourniquet",
  distPrompts: ["prompt-wound-location"],
  prompts: ["prompt-tourniquet-placement"]
}, {
  "id": "intv-control-severe-bleeding-technique-2nd-tourniquet",
  "system": "bleeding",
  "label": "Apply second tourniquet",
  distPrompts: ["prompt-wound-location"],
  prompts: ["prompt-2nd-tourniquet-placement"]
}, {
  "id": "intv-control-severe-bleeding-technique-pack-wound-with-gauze",
  "system": "bleeding",
  "label": "Pack wound with gauze or hemostatic gauze",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-pressure-bandage",
  "system": "bleeding",
  "label": "Pressure dressing",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-load-and-go",
  "system": "bleeding",
  "label": "Load and go (if uncontrolled)"
}, {
  "id": "intv-control-shock-technique-keep-patient-warm",
  "system": "shock",
  "label": "Keep patient warm (e.g., apply blankets)"
}, {
  "id": "intv-control-shock-technique-administer-high-concentration-o2",
  "system": "shock",
  "label": "Administer high concentration of oxygen"
}, {
  "id": "intv-control-shock-technique-place-patient-supine-position",
  "system": "shock",
  "label": "Place or maintain patient in supine position"
}, {
  "id": "intv-control-shock-technique-administer-iv-boluses",
  "system": "shock",
  "label": "IV fluid resuscitation",
  prompts: []
}, {
  "id": "intv-occlusive-dressing",
  "system": "breathing",
  "label": "Occlusive dressing",
  prompts: ["prompt-occlusive-dressing-injury-type", "prompt-occlusive-dressing-method"]
}, {
  "id": "intv-pleural-decompression",
  "system": "breathing",
  "label": "Needle decompression",
  prompts: ["prompt-pleural-decompression-injury-type", "prompt-pleural-decompression-needle-placement-side-of-the-body", "prompt-pleural-decompression-needle-placement-anatomical-landmark", "prompt-pleural-decompression-needle-size", "prompt-pleural-decompression-needle-length"]
}, {
  "id": "intv-spinal-immobilization-technique-manual-c-spine",
  "label": "Manual c-spine stabilization"
}, {
  "id": "intv-spinal-immobilization-technique-cervical-collar",
  "label": "Cervical collar"
}, {
  "id": "intv-spinal-immobilization-technique-transfer-to-device",
  "label": "Transfer patient to immobilization device",
  prompts: []
}, {
  "id": "intv-spinal-immobilization-technique-attach-cid",
  "label": "Attach cervical immobilization device (CID)"
}, {
  "id": "intv-transfers-patient-method-walk-patient",
  "label": "Walk patient to ambulance"
}, {
  "id": "intv-transfers-patient-method-place-directly-on-stretcher",
  "label": "Place directly on stretcher"
}, {
  id: "intv-place-immobilized-patient-on-stretcher",
  label: "Place immobilized patient on stretcher"
},
/*
{
   "id": "intv-transfers-patient-method-long-backboard",
   "label": "Place on long back board (LBB)"
},
{
   "id": "intv-transfers-patient-method-short-board",
   "label": "Place on short board (e.g., KED)"
},
{
   "id": "intv-transfers-patient-method-scoop-stretcher",
   "label": "Place on scoop stretcher"
},
*/
{
  "id": "intv-transport",
  "label": "Transport",
  prompts: ["prompt-transport-facility-choice", "prompt-transport-method", "prompt-transport-lights-siren-decision"]
}, {
  "id": "intv-apply-sterile-dressings",
  "label": "Apply sterile dressings",
  distPrompts: ["prompt-wound-locations"]
}, {
  "id": "intv-splint-fractures",
  "system": "bleeding",
  "label": "Splint fractures" // distPrompts: [
  // ],
  // prompts: [
  //    "prompt-splint-type"
  // ]

}, {
  id: "intv-sterile-dressing-soft-tissue",
  label: "Apply sterile dressing over soft tissue",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-retrieve-amputated-body-part",
  "label": "Retrieve avulsed/amputated part",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-wrap-body-part-in-saline-soaked-gauze",
  label: "Wrap part in gauze soaked in saline",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-place-body-part-in-bag",
  label: "Place part in bag",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-keep-body-part-cool",
  label: "Keep cool but do not pack directly on ice",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-transport-body-part-to-receiving-facility",
  label: "Transport part to receiving facility",
  distPrompts: ["prompt-wound-location"]
}, // {
//    "id": "intv-establish-ivs",
//    "label": "Establish IVs"
// },
// {
//    "id": "intv-replace-bls-airway-with-als-airway",
//    "label": "Replace basic airway with advanced airway"
// },
// {
//    "id": "intv-replace-bandages",
//    "label": "Replace bandages"
// },
// {
//    "id": "intv-replace-oxygen-tank",
//    "label": "Replace oxygen tank"
// },
// {
//    "id": "intv-adjust-iv-replace-bolus",
//    "label": "Adjust an IV (e.g., hang second bag)"
// },
// {
//    "id": "intv-turn-up-heat-in-ambulance",
//    "label": "Turn up heat in ambulance"
// },
// {
//    "id": "intv-reassess-intv-other",
//    "label": "Reassess other intervention"
// },
// {
//    "id": "intv-reassess-vital-signs",
//    "label": "Reassess vital signs"
// }
{
  id: "intv-prepare-and-administer-pain-nausea-vomiting-medications",
  label: "Prepare and administer medications"
}, {
  id: "intv-prepare-and-administer-sedative",
  label: "Prepare and administer medications"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTVS);

/***/ }),

/***/ 7237:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublishedScenario": () => (/* binding */ PublishedScenario),
/* harmony export */   "ScenarioType": () => (/* binding */ ScenarioType)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5558);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7414);


class ScenarioType {
  constructor(data) {
    const {
      id,
      name,
      schemaVersion,
      checklist,
      interventions,
      interventionPrompts,
      interventionPromptAnswers,
      interventionVariantAnswers,
      interventionMenuCategories,
      interventionMenuItems,
      medications,
      hierarchy,
      phaseData,
      ...remaining
    } = data; // console.log(checklist)

    this.id = id;
    this.name = name;
    this.schemaVersion = schemaVersion;
    this._checklist = checklist;
    this._interventions = interventions;
    this._interventionPrompts = interventionPrompts;
    this._interventionPromptAnswers = interventionPromptAnswers;
    this.interventionVariantAnswers = interventionVariantAnswers;
    this._interventionMenuCategories = interventionMenuCategories;
    this._interventionMenuItems = interventionMenuItems;
    this._medications = medications;
    this.checkListMetaData = this.genCheckListMetaData();
    this.uniqueIDs = this.genUniqueIDs();
    this.uniqueLabels = this.genUniqueLabels();
  }

  genUniqueIDs() {
    let ids = this._interventions.map(e => e.id);

    ids = ids.concat(this._interventionPrompts.map(e => e.id));
    ids = ids.concat(this._interventionPromptAnswers.map(e => e.id));
    ids = ids.concat(this._interventionMenuCategories.map(e => e.id));
    ids = ids.concat(this._interventionMenuItems.map(e => e.id));
    ids = ids.concat(this._medications.map(e => e.id));
    ids = ids.concat(this._checklist.map(e => e.id));
    return ids;
  }

  genUniqueLabels() {
    let labels = this._interventions.map(e => e.label);

    labels = labels.concat(this._checklist.map(e => e.label));
    return labels;
  }

  genCheckListMetaData() {
    const metaData = [];
    const CHECKLIST = [...this._checklist].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      if (undefined === e.phase) e.phase = null;
      if (undefined === e.subPhase) e.subPhase = null;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e) && !OPTIONS.includes(e));
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null];
    SUB_PHASES.forEach(sp => sp.items = clItemsBySubPhase[sp.id].map(i => i.id)); //

    return CHECKLIST;
  }

  genHierarchy() {
    const CHECKLIST = [...this._checklist].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e));
    CL_ITEMS.forEach(e => {
      if (undefined === e.subPhase) {
        // FIXME: we should set this up in the data-structure itself
        e.subPhase = null;
      }
    });
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null];
    SUB_PHASES.forEach(sp => sp.items = clItemsBySubPhase[sp.id].map(i => i.id));
    const hierarchy = [];
    PHASES.forEach(ph => {
      const {
        subPhases,
        items,
        ...newPh
      } = ph;

      if (undefined !== items) {
        newPh.items = items.map(itemID => {
          const {
            options,
            ...newItem
          } = CL_ITEMS.find(e => e.id === itemID);

          if (undefined !== options) {
            newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
          }

          return newItem;
        });
        hierarchy.push(newPh);
      } else {
        newPh.subPhases = subPhases.map(sphID => {
          const {
            items,
            ...newSph
          } = SUB_PHASES.find(sp => sp.id === sphID);
          newSph.items = items.map(itemID => {
            const {
              options,
              ...newItem
            } = CL_ITEMS.find(i => i.id === itemID);

            if (undefined !== options) {
              newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
            }

            return newItem;
          });
          return newSph;
        });
        hierarchy.push(newPh);
      }
    });
    return hierarchy;
  }

  getChecklistItem(id) {
    return this._checklist.find(e => e.id === id);
  }

  getInterventionForm(interventionID) {
    return this.getIntervention(interventionID, true);
  }

  getIntervention(interventionID, expand = false) {
    const found = this._interventions.find(e => e.id === interventionID);

    if (!found) {
      return {};
    }

    const {
      distPrompts,
      prompts,
      ...intv
    } = found;

    if (!expand) {
      intv.distPrompts = distPrompts;
      intv.prompts = prompts;
      return intv;
    }

    intv.distPrompts = distPrompts.map(distPromptID => this.getPrompt(distPromptID, true));
    intv.prompts = prompts.map(promptID => this.getPrompt(promptID, true));
    return intv;
  }

  getDecisionWithOptions(id) {
    const found = this.getChecklistItem(id);

    if (!found) {
      return {};
    }

    const {
      options,
      ...decision
    } = found; // console.log(decision)

    decision.options = options.map(optID => this.getChecklistItem(optID));
    return decision;
  }

  getPrompt(promptID, expand = false) {
    const found = this._interventionPrompts.find(e => e.id === promptID);

    if (!found) {
      return {};
    }

    const {
      answers,
      ...prompt
    } = found;

    if (!expand) {
      prompt.answers = answers;
    } else {
      prompt.answers = answers.map(answerID => this.getAnswer(answerID));
    }

    return prompt;
  }

  getAnswer(answerID) {
    return this._interventionPromptAnswers.find(e => e.id === answerID);
  }

  getInterventionMenus() {
    return this._interventionMenuCategories.map(e => {
      const {
        items,
        ...newRec
      } = e;
      newRec.items = items.map(itemID => this._interventionMenuItems.find(mi => mi.id === itemID));
      return newRec;
    });
  }

}
class PublishedScenario {
  constructor(data) {
    const {
      id,
      name,
      version,
      datePublished,
      scenarioType,
      schemaVersion,
      info,
      vitalSigns,
      OPQRST,
      SAMPLE,
      assessmentFindings,
      checkListCorrectness,
      correctMedicationDosages,
      problems,
      solutions,
      actions,
      interventionVariantAnswers,
      checkListMetaData,
      medications,
      interventions,
      interventionPrompts,
      interventionPromptAnswers,
      interventionMenuCategories,
      interventionMenuItems,
      ...rest
    } = data;
    this.id = id;
    this.name = name;
    this.version = version;
    this.datePublished = datePublished;
    this.scenarioType = scenarioType;
    this.schemaVersion = schemaVersion;
    this.info = info;
    this.vitalSigns = vitalSigns;
    this.OPQRST = OPQRST;
    this.SAMPLE = SAMPLE;
    this.assessmentFindings = assessmentFindings;
    this.checkListCorrectness = checkListCorrectness;
    this.correctMedicationDosages = correctMedicationDosages;
    this.problems = problems;
    this.solutions = solutions;
    this.actions = actions;
    this.interventionVariantAnswers = interventionVariantAnswers;
    this._checkListMetaData = checkListMetaData;
    this.medications = medications;
    this._interventions = interventions;
    this._interventionPrompts = interventionPrompts;
    this._interventionPromptAnswers = interventionPromptAnswers;
    this._interventionMenuCategories = interventionMenuCategories;
    this._interventionMenuItems = interventionMenuItems; // console.log(rest)

    this.phaseData = this.genPhaseData();
    this.interventionMenus = this.genInterventionMenus();
    this.systemInterventions = this.genSystemInterventions();
  }

  genSystemInterventions() {
    let tmp = this._interventions.filter(e => !!e.system).map(e => {
      return {
        id: e.id,
        type: _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.INTERV,
        label: e.label,
        system: e.system
      };
    });

    const sysIntvs = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(tmp, "system"); // console.log(sysIntvs)

    return sysIntvs;
  }

  genInterventionMenus() {
    return this._interventionMenuCategories.map(cat => {
      const {
        items,
        ...menuCat
      } = cat;
      menuCat.items = items.map(itemID => this._interventionMenuItems.find(mi => mi.id === itemID));
      return menuCat;
    });
  }

  genPhaseData() {
    const CHECKLIST = [...this._checkListMetaData].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e) && !OPTIONS.includes(e));
    CL_ITEMS.forEach(e => {
      if (undefined === e.subPhase) {
        // FIXME: we should set this up in the data-structure itself
        e.subPhase = null;
      }
    });
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null]; // console.log(clItemsBySubPhase)

    SUB_PHASES.forEach(sp => {
      // console.log(sp)
      const items = clItemsBySubPhase[sp.id].map(i => i.id); // console.log()

      sp.items = items;
    });
    const hierarchy = [];
    PHASES.forEach(ph => {
      const {
        subPhases,
        items,
        ...newPh
      } = ph;

      if (undefined !== items) {
        newPh.items = items.map(itemID => {
          const {
            options,
            ...newItem
          } = CL_ITEMS.find(e => e.id === itemID);

          if (undefined !== options) {
            newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
          }

          return newItem;
        });
        hierarchy.push(newPh);
      } else {
        newPh.subPhases = subPhases.map(sphID => {
          const {
            items,
            ...newSph
          } = SUB_PHASES.find(sp => sp.id === sphID);
          newSph.items = items.map(itemID => {
            const {
              options,
              ...newItem
            } = CL_ITEMS.find(i => i.id === itemID);

            if (undefined !== options) {
              newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
            }

            return newItem;
          });
          return newSph;
        });
        hierarchy.push(newPh);
      }
    });
    return hierarchy;
  }

  getChecklistItem(id) {
    return this._checkListMetaData.find(e => e.id === id);
  }

  getInterventionForm(intvID) {
    return this.getIntervention(intvID, true);
  }

  getIntervention(interventionID, expand = false) {
    const found = this._interventions.find(e => e.id === interventionID);

    if (!found) {
      return {};
    }

    const {
      distPrompts,
      prompts,
      ...intv
    } = found;

    if (!expand) {
      intv.distPrompts = distPrompts;
      intv.prompts = prompts;
      return intv;
    }

    intv.distPrompts = distPrompts.map(distPromptID => this.getPrompt(distPromptID, true));
    intv.prompts = prompts.map(promptID => this.getPrompt(promptID, true));
    return intv;
  }

  getPrompt(promptID, expand = false) {
    const found = this._interventionPrompts.find(e => e.id === promptID);

    if (!found) {
      return {};
    }

    const {
      answers,
      ...prompt
    } = found;

    if (!expand) {
      prompt.answers = answers;
    } else {
      prompt.answers = answers.map(answerID => this.getAnswer(answerID));
    }

    return prompt;
  }

  getAnswer(answerID) {
    return this._interventionPromptAnswers.find(e => e.id === answerID);
  }

}

/***/ }),

/***/ 7414:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anyHaveValues": () => (/* binding */ anyHaveValues),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "getRecsOfType": () => (/* binding */ getRecsOfType),
/* harmony export */   "groupByKey": () => (/* binding */ groupByKey)
/* harmony export */ });
const deepCopy = object => {
  return JSON.parse(JSON.stringify(object));
}; // returns subset of records from array 'arr' whose type field matches 'type'

const getRecsOfType = (arr, type) => {
  return arr.filter(rec => rec.type === type);
}; // returns if any of the arrays passed to this have lengths > 0
// perhaps this should be written as a non-1-liner for clarity

const anyHaveValues = (...arrs) => {
  return arrs.map(arr => arr.length > 0).filter(val => val === true).length > 0;
}; // takes a list of objects and fieldName (key) and returns an object who's attributes are
// the distinct values for that field mapped to a list objects which share that
// value

const groupByKey = (list, key) => list.reduce((hash, obj) => ({ ...hash,
  [obj[key]]: (hash[obj[key]] || []).concat(obj)
}), {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7645)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map