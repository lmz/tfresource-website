(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{202:function(e,t,o){"use strict";o.r(t);var i=o(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("The trip distribution step (within trip-based models) determines where trips go, spatially. Trip distribution allocates trips to pairs of "),o("a",{attrs:{href:"Traffic_Analysis_Zones"}},[e._v("traffic analysis zones")]),e._v(" (TAZs), from the production (P) end to the attraction (A) end. The result is a PA table, which describes the numbers of person trips between zones (usually over a 24-hour period of time) but does not describe the actual direction of travel. Inputs to the trip distribution step come principally from the trip generation step. There is also a requirement for calibrated parameters. The number of these parameters depends upon the model formulation.")]),e._v(" "),o("p",[e._v("There are a variety of trip distribution formulations. Among recent travel models two formulations dominate: the gravity “model” and the destination choice “model”. There are variations to each formulation.")]),e._v(" "),o("p",[e._v("The gravity “model” allocates trips roughly in proportion to the number of productions at the production end, roughly in proportion to the number of attractions at the attraction end, and roughly in proportion to a measure of proximity (often called a “friction factor”) of the two zones. A gravity “model” may be “singly-constrained” or “doubly-constrained”. A singly-constrained gravity “model” assures that the PA table is consistent with trip productions from trip generation. A doubly-constrained gravity “model” also assures that the PA table is consistent with trip attractions from trip generation.")]),e._v(" "),o("p",[e._v("A friction factor is a function of "),o("a",{attrs:{href:"Impedance"}},[e._v("trip impedance")]),e._v(" (time, cost, distance, etc.) between zones, with impedance usually expressed in units of travel time. There is an inverse relation between the value of a friction factor and the value of impedance. This inverse relation is largely empirical in practice, although theories such as “entropy maximization” have been proposed to derive this relation. A functional form dubbed the “gamma” function has been recommended by NCHRP Report 365 and NCHRP Report 716; however, many travel models use a negative exponential function or a power function with a negative power. Some travel models use a table lookup to obtain friction factors.")]),e._v(" "),o("p",[e._v('A technical discussion of the gravity model, along with example friction factors, may be found in NCHRP Report 716.\nAn alternative to a gravity “model” is a destination choice “model”. The preferred destination choice “model” takes the form of a multinomial logit equation. The utility function for the destination choice “model” may contain measures of impedance (time, cost, distance, etc.) as well as a measure of attraction zone size and perhaps socioeconomic variables. A singly-constraint gravity "model" containing a negative exponential friction factor function is very similar to a destination choice "model".')]),e._v(" "),o("p",[e._v("Trip distribution for multimodal forecasts needs a combined impedance across all modes that reflect the various mode shares. A feedback from mode split to trip distribution is not usually accomplished. Rather, multimodal trip distribution uses a “combined impedance” for all modes which is calculated as a “log sum”, similar to what is used in a nested logit formulation. See NCHRP Report 716 for a discussion about “log sum”.")]),e._v(" "),o("hr")])}),[],!1,null,null,null);t.default=a.exports}}]);