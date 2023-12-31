import JSZip from "jszip";
/* PptxGenJS 3.12.0 @ 2023-03-20T03:12:27.629Z */
var PptxGenJS = (function () {
  "use strict";
  function T(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var D = T(JSZip),
    y = function () {
      return (y =
        Object.assign ||
        function (e) {
          for (var t, a = 1, A = arguments.length; a < A; a++)
            for (var o in (t = arguments[a]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
  function p(e, r, l, c) {
    return new (l = l || Promise)(function (a, t) {
      function A(e) {
        try {
          n(c.next(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        try {
          n(c.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function n(e) {
        var t;
        e.done
          ? a(e.value)
          : ((t = e.value) instanceof l
              ? t
              : new l(function (e) {
                  e(t);
                })
            ).then(A, o);
      }
      n((c = c.apply(e, r || [])).next());
    });
  }
  function d(A, o) {
    var n,
      r,
      l,
      c = {
        label: 0,
        sent: function () {
          if (1 & l[0]) throw l[1];
          return l[1];
        },
        trys: [],
        ops: [],
      },
      i = { next: e(0), throw: e(1), return: e(2) };
    return (
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function e(a) {
      return function (e) {
        var t = [a, e];
        if (n) throw new TypeError("Generator is already executing.");
        for (; (c = i && t[(i = 0)] ? 0 : c); )
          try {
            if (
              ((n = 1),
              r &&
                (l =
                  2 & t[0]
                    ? r.return
                    : t[0]
                    ? r.throw || ((l = r.return) && l.call(r), 0)
                    : r.next) &&
                !(l = l.call(r, t[1])).done)
            )
              return l;
            switch (((r = 0), (t = l ? [2 & t[0], l.value] : t)[0])) {
              case 0:
              case 1:
                l = t;
                break;
              case 4:
                return c.label++, { value: t[1], done: !1 };
              case 5:
                c.label++, (r = t[1]), (t = [0]);
                continue;
              case 7:
                (t = c.ops.pop()), c.trys.pop();
                continue;
              default:
                if (
                  !(l = 0 < (l = c.trys).length && l[l.length - 1]) &&
                  (6 === t[0] || 2 === t[0])
                ) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!l || (t[1] > l[0] && t[1] < l[3])))
                  c.label = t[1];
                else if (6 === t[0] && c.label < l[1])
                  (c.label = l[1]), (l = t);
                else {
                  if (!(l && c.label < l[2])) {
                    l[2] && c.ops.pop(), c.trys.pop();
                    continue;
                  }
                  (c.label = l[2]), c.ops.push(t);
                }
            }
            t = o.call(A, c);
          } catch (e) {
            (t = [6, e]), (r = 0);
          } finally {
            n = l = 0;
          }
        if (5 & t[0]) throw t[1];
        return { value: t[0] ? t[1] : void 0, done: !0 };
      };
    }
  }
  function Q(e, t, a) {
    if (a || 2 === arguments.length)
      for (var A, o = 0, n = t.length; o < n; o++)
        (!A && o in t) ||
          ((A = A || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
    return e.concat(A || Array.prototype.slice.call(t));
  }
  var r,
    l,
    S,
    E,
    G,
    A,
    j,
    Y,
    c,
    v,
    X,
    n,
    N,
    o,
    f,
    e,
    F = 914400,
    x = 12700,
    u = "\r\n",
    H = 2147483649,
    W = /^[0-9a-fA-F]{6}$/,
    V = 1.67,
    q = 27,
    J = "solid",
    K = "666666",
    Z = 1,
    _ = [0.05, 0.1, 0.05, 0.1],
    $ = "363636",
    ee = 1,
    C = { color: "888888", style: "solid", size: 1, cap: "flat" },
    w = "000000",
    P = 12,
    te = 18,
    i = "LAYOUT_16x9",
    ae = "DEFAULT",
    Ae = "333333",
    s = {
      type: "outer",
      blur: 3,
      offset: 23e3 / 12700,
      angle: 90,
      color: "000000",
      opacity: 0.35,
      rotateWithShape: !0,
    },
    oe = [0.5, 0.5, 0.5, 0.5],
    ne = {
      type: "outer",
      blur: 8,
      offset: 4,
      angle: 270,
      color: "000000",
      opacity: 0.75,
    },
    re = { size: 8, color: "FFFFFF", opacity: 0.75 },
    L = "2094734552",
    le = "2094734553",
    ce = "2094734554",
    ie = "2094734555",
    se = "2094734556",
    pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    de = [
      "C0504D",
      "4F81BD",
      "9BBB59",
      "8064A2",
      "4BACC6",
      "F79646",
      "628FC6",
      "C86360",
      "C0504D",
      "4F81BD",
      "9BBB59",
      "8064A2",
      "4BACC6",
      "F79646",
      "628FC6",
      "C86360",
    ],
    fe = [
      "5DA5DA",
      "FAA43A",
      "60BD68",
      "F17CB0",
      "B2912F",
      "B276B2",
      "DECF3F",
      "F15854",
      "A7A7A7",
      "5DA5DA",
      "FAA43A",
      "60BD68",
      "F17CB0",
      "B2912F",
      "B276B2",
      "DECF3F",
      "F15854",
      "A7A7A7",
    ],
    ue =
      (((e = r = r || {}).left = "left"),
      (e.center = "center"),
      (e.right = "right"),
      (e.justify = "justify"),
      ((e = l = l || {}).b = "b"),
      (e.ctr = "ctr"),
      (e.t = "t"),
      "{F7021451-1387-4CA6-816F-3879F97B5CBC}"),
    h =
      (((e = S = S || {}).arraybuffer = "arraybuffer"),
      (e.base64 = "base64"),
      (e.binarystring = "binarystring"),
      (e.blob = "blob"),
      (e.nodebuffer = "nodebuffer"),
      (e.uint8array = "uint8array"),
      ((e = E = E || {}).area = "area"),
      (e.bar = "bar"),
      (e.bar3d = "bar3D"),
      (e.bubble = "bubble"),
      (e.bubble3d = "bubble3D"),
      (e.doughnut = "doughnut"),
      (e.line = "line"),
      (e.pie = "pie"),
      (e.radar = "radar"),
      (e.scatter = "scatter"),
      ((e = G = G || {}).accentBorderCallout1 = "accentBorderCallout1"),
      (e.accentBorderCallout2 = "accentBorderCallout2"),
      (e.accentBorderCallout3 = "accentBorderCallout3"),
      (e.accentCallout1 = "accentCallout1"),
      (e.accentCallout2 = "accentCallout2"),
      (e.accentCallout3 = "accentCallout3"),
      (e.actionButtonBackPrevious = "actionButtonBackPrevious"),
      (e.actionButtonBeginning = "actionButtonBeginning"),
      (e.actionButtonBlank = "actionButtonBlank"),
      (e.actionButtonDocument = "actionButtonDocument"),
      (e.actionButtonEnd = "actionButtonEnd"),
      (e.actionButtonForwardNext = "actionButtonForwardNext"),
      (e.actionButtonHelp = "actionButtonHelp"),
      (e.actionButtonHome = "actionButtonHome"),
      (e.actionButtonInformation = "actionButtonInformation"),
      (e.actionButtonMovie = "actionButtonMovie"),
      (e.actionButtonReturn = "actionButtonReturn"),
      (e.actionButtonSound = "actionButtonSound"),
      (e.arc = "arc"),
      (e.bentArrow = "bentArrow"),
      (e.bentUpArrow = "bentUpArrow"),
      (e.bevel = "bevel"),
      (e.blockArc = "blockArc"),
      (e.borderCallout1 = "borderCallout1"),
      (e.borderCallout2 = "borderCallout2"),
      (e.borderCallout3 = "borderCallout3"),
      (e.bracePair = "bracePair"),
      (e.bracketPair = "bracketPair"),
      (e.callout1 = "callout1"),
      (e.callout2 = "callout2"),
      (e.callout3 = "callout3"),
      (e.can = "can"),
      (e.chartPlus = "chartPlus"),
      (e.chartStar = "chartStar"),
      (e.chartX = "chartX"),
      (e.chevron = "chevron"),
      (e.chord = "chord"),
      (e.circularArrow = "circularArrow"),
      (e.cloud = "cloud"),
      (e.cloudCallout = "cloudCallout"),
      (e.corner = "corner"),
      (e.cornerTabs = "cornerTabs"),
      (e.cube = "cube"),
      (e.curvedDownArrow = "curvedDownArrow"),
      (e.curvedLeftArrow = "curvedLeftArrow"),
      (e.curvedRightArrow = "curvedRightArrow"),
      (e.curvedUpArrow = "curvedUpArrow"),
      (e.custGeom = "custGeom"),
      (e.decagon = "decagon"),
      (e.diagStripe = "diagStripe"),
      (e.diamond = "diamond"),
      (e.dodecagon = "dodecagon"),
      (e.donut = "donut"),
      (e.doubleWave = "doubleWave"),
      (e.downArrow = "downArrow"),
      (e.downArrowCallout = "downArrowCallout"),
      (e.ellipse = "ellipse"),
      (e.ellipseRibbon = "ellipseRibbon"),
      (e.ellipseRibbon2 = "ellipseRibbon2"),
      (e.flowChartAlternateProcess = "flowChartAlternateProcess"),
      (e.flowChartCollate = "flowChartCollate"),
      (e.flowChartConnector = "flowChartConnector"),
      (e.flowChartDecision = "flowChartDecision"),
      (e.flowChartDelay = "flowChartDelay"),
      (e.flowChartDisplay = "flowChartDisplay"),
      (e.flowChartDocument = "flowChartDocument"),
      (e.flowChartExtract = "flowChartExtract"),
      (e.flowChartInputOutput = "flowChartInputOutput"),
      (e.flowChartInternalStorage = "flowChartInternalStorage"),
      (e.flowChartMagneticDisk = "flowChartMagneticDisk"),
      (e.flowChartMagneticDrum = "flowChartMagneticDrum"),
      (e.flowChartMagneticTape = "flowChartMagneticTape"),
      (e.flowChartManualInput = "flowChartManualInput"),
      (e.flowChartManualOperation = "flowChartManualOperation"),
      (e.flowChartMerge = "flowChartMerge"),
      (e.flowChartMultidocument = "flowChartMultidocument"),
      (e.flowChartOfflineStorage = "flowChartOfflineStorage"),
      (e.flowChartOffpageConnector = "flowChartOffpageConnector"),
      (e.flowChartOnlineStorage = "flowChartOnlineStorage"),
      (e.flowChartOr = "flowChartOr"),
      (e.flowChartPredefinedProcess = "flowChartPredefinedProcess"),
      (e.flowChartPreparation = "flowChartPreparation"),
      (e.flowChartProcess = "flowChartProcess"),
      (e.flowChartPunchedCard = "flowChartPunchedCard"),
      (e.flowChartPunchedTape = "flowChartPunchedTape"),
      (e.flowChartSort = "flowChartSort"),
      (e.flowChartSummingJunction = "flowChartSummingJunction"),
      (e.flowChartTerminator = "flowChartTerminator"),
      (e.folderCorner = "folderCorner"),
      (e.frame = "frame"),
      (e.funnel = "funnel"),
      (e.gear6 = "gear6"),
      (e.gear9 = "gear9"),
      (e.halfFrame = "halfFrame"),
      (e.heart = "heart"),
      (e.heptagon = "heptagon"),
      (e.hexagon = "hexagon"),
      (e.homePlate = "homePlate"),
      (e.horizontalScroll = "horizontalScroll"),
      (e.irregularSeal1 = "irregularSeal1"),
      (e.irregularSeal2 = "irregularSeal2"),
      (e.leftArrow = "leftArrow"),
      (e.leftArrowCallout = "leftArrowCallout"),
      (e.leftBrace = "leftBrace"),
      (e.leftBracket = "leftBracket"),
      (e.leftCircularArrow = "leftCircularArrow"),
      (e.leftRightArrow = "leftRightArrow"),
      (e.leftRightArrowCallout = "leftRightArrowCallout"),
      (e.leftRightCircularArrow = "leftRightCircularArrow"),
      (e.leftRightRibbon = "leftRightRibbon"),
      (e.leftRightUpArrow = "leftRightUpArrow"),
      (e.leftUpArrow = "leftUpArrow"),
      (e.lightningBolt = "lightningBolt"),
      (e.line = "line"),
      (e.lineInv = "lineInv"),
      (e.mathDivide = "mathDivide"),
      (e.mathEqual = "mathEqual"),
      (e.mathMinus = "mathMinus"),
      (e.mathMultiply = "mathMultiply"),
      (e.mathNotEqual = "mathNotEqual"),
      (e.mathPlus = "mathPlus"),
      (e.moon = "moon"),
      (e.noSmoking = "noSmoking"),
      (e.nonIsoscelesTrapezoid = "nonIsoscelesTrapezoid"),
      (e.notchedRightArrow = "notchedRightArrow"),
      (e.octagon = "octagon"),
      (e.parallelogram = "parallelogram"),
      (e.pentagon = "pentagon"),
      (e.pie = "pie"),
      (e.pieWedge = "pieWedge"),
      (e.plaque = "plaque"),
      (e.plaqueTabs = "plaqueTabs"),
      (e.plus = "plus"),
      (e.quadArrow = "quadArrow"),
      (e.quadArrowCallout = "quadArrowCallout"),
      (e.rect = "rect"),
      (e.ribbon = "ribbon"),
      (e.ribbon2 = "ribbon2"),
      (e.rightArrow = "rightArrow"),
      (e.rightArrowCallout = "rightArrowCallout"),
      (e.rightBrace = "rightBrace"),
      (e.rightBracket = "rightBracket"),
      (e.round1Rect = "round1Rect"),
      (e.round2DiagRect = "round2DiagRect"),
      (e.round2SameRect = "round2SameRect"),
      (e.roundRect = "roundRect"),
      (e.rtTriangle = "rtTriangle"),
      (e.smileyFace = "smileyFace"),
      (e.snip1Rect = "snip1Rect"),
      (e.snip2DiagRect = "snip2DiagRect"),
      (e.snip2SameRect = "snip2SameRect"),
      (e.snipRoundRect = "snipRoundRect"),
      (e.squareTabs = "squareTabs"),
      (e.star10 = "star10"),
      (e.star12 = "star12"),
      (e.star16 = "star16"),
      (e.star24 = "star24"),
      (e.star32 = "star32"),
      (e.star4 = "star4"),
      (e.star5 = "star5"),
      (e.star6 = "star6"),
      (e.star7 = "star7"),
      (e.star8 = "star8"),
      (e.stripedRightArrow = "stripedRightArrow"),
      (e.sun = "sun"),
      (e.swooshArrow = "swooshArrow"),
      (e.teardrop = "teardrop"),
      (e.trapezoid = "trapezoid"),
      (e.triangle = "triangle"),
      (e.upArrow = "upArrow"),
      (e.upArrowCallout = "upArrowCallout"),
      (e.upDownArrow = "upDownArrow"),
      (e.upDownArrowCallout = "upDownArrowCallout"),
      (e.uturnArrow = "uturnArrow"),
      (e.verticalScroll = "verticalScroll"),
      (e.wave = "wave"),
      (e.wedgeEllipseCallout = "wedgeEllipseCallout"),
      (e.wedgeRectCallout = "wedgeRectCallout"),
      (e.wedgeRoundRectCallout = "wedgeRoundRectCallout"),
      ((e = A = A || {}).text1 = "tx1"),
      (e.text2 = "tx2"),
      (e.background1 = "bg1"),
      (e.background2 = "bg2"),
      (e.accent1 = "accent1"),
      (e.accent2 = "accent2"),
      (e.accent3 = "accent3"),
      (e.accent4 = "accent4"),
      (e.accent5 = "accent5"),
      (e.accent6 = "accent6"),
      ((e = j = j || {}).left = "left"),
      (e.center = "center"),
      (e.right = "right"),
      (e.justify = "justify"),
      ((e = Y = Y || {}).top = "top"),
      (e.middle = "middle"),
      (e.bottom = "bottom"),
      ((e = c = c || {}).ACTION_BUTTON_BACK_OR_PREVIOUS =
        "actionButtonBackPrevious"),
      (e.ACTION_BUTTON_BEGINNING = "actionButtonBeginning"),
      (e.ACTION_BUTTON_CUSTOM = "actionButtonBlank"),
      (e.ACTION_BUTTON_DOCUMENT = "actionButtonDocument"),
      (e.ACTION_BUTTON_END = "actionButtonEnd"),
      (e.ACTION_BUTTON_FORWARD_OR_NEXT = "actionButtonForwardNext"),
      (e.ACTION_BUTTON_HELP = "actionButtonHelp"),
      (e.ACTION_BUTTON_HOME = "actionButtonHome"),
      (e.ACTION_BUTTON_INFORMATION = "actionButtonInformation"),
      (e.ACTION_BUTTON_MOVIE = "actionButtonMovie"),
      (e.ACTION_BUTTON_RETURN = "actionButtonReturn"),
      (e.ACTION_BUTTON_SOUND = "actionButtonSound"),
      (e.ARC = "arc"),
      (e.BALLOON = "wedgeRoundRectCallout"),
      (e.BENT_ARROW = "bentArrow"),
      (e.BENT_UP_ARROW = "bentUpArrow"),
      (e.BEVEL = "bevel"),
      (e.BLOCK_ARC = "blockArc"),
      (e.CAN = "can"),
      (e.CHART_PLUS = "chartPlus"),
      (e.CHART_STAR = "chartStar"),
      (e.CHART_X = "chartX"),
      (e.CHEVRON = "chevron"),
      (e.CHORD = "chord"),
      (e.CIRCULAR_ARROW = "circularArrow"),
      (e.CLOUD = "cloud"),
      (e.CLOUD_CALLOUT = "cloudCallout"),
      (e.CORNER = "corner"),
      (e.CORNER_TABS = "cornerTabs"),
      (e.CROSS = "plus"),
      (e.CUBE = "cube"),
      (e.CURVED_DOWN_ARROW = "curvedDownArrow"),
      (e.CURVED_DOWN_RIBBON = "ellipseRibbon"),
      (e.CURVED_LEFT_ARROW = "curvedLeftArrow"),
      (e.CURVED_RIGHT_ARROW = "curvedRightArrow"),
      (e.CURVED_UP_ARROW = "curvedUpArrow"),
      (e.CURVED_UP_RIBBON = "ellipseRibbon2"),
      (e.CUSTOM_GEOMETRY = "custGeom"),
      (e.DECAGON = "decagon"),
      (e.DIAGONAL_STRIPE = "diagStripe"),
      (e.DIAMOND = "diamond"),
      (e.DODECAGON = "dodecagon"),
      (e.DONUT = "donut"),
      (e.DOUBLE_BRACE = "bracePair"),
      (e.DOUBLE_BRACKET = "bracketPair"),
      (e.DOUBLE_WAVE = "doubleWave"),
      (e.DOWN_ARROW = "downArrow"),
      (e.DOWN_ARROW_CALLOUT = "downArrowCallout"),
      (e.DOWN_RIBBON = "ribbon"),
      (e.EXPLOSION1 = "irregularSeal1"),
      (e.EXPLOSION2 = "irregularSeal2"),
      (e.FLOWCHART_ALTERNATE_PROCESS = "flowChartAlternateProcess"),
      (e.FLOWCHART_CARD = "flowChartPunchedCard"),
      (e.FLOWCHART_COLLATE = "flowChartCollate"),
      (e.FLOWCHART_CONNECTOR = "flowChartConnector"),
      (e.FLOWCHART_DATA = "flowChartInputOutput"),
      (e.FLOWCHART_DECISION = "flowChartDecision"),
      (e.FLOWCHART_DELAY = "flowChartDelay"),
      (e.FLOWCHART_DIRECT_ACCESS_STORAGE = "flowChartMagneticDrum"),
      (e.FLOWCHART_DISPLAY = "flowChartDisplay"),
      (e.FLOWCHART_DOCUMENT = "flowChartDocument"),
      (e.FLOWCHART_EXTRACT = "flowChartExtract"),
      (e.FLOWCHART_INTERNAL_STORAGE = "flowChartInternalStorage"),
      (e.FLOWCHART_MAGNETIC_DISK = "flowChartMagneticDisk"),
      (e.FLOWCHART_MANUAL_INPUT = "flowChartManualInput"),
      (e.FLOWCHART_MANUAL_OPERATION = "flowChartManualOperation"),
      (e.FLOWCHART_MERGE = "flowChartMerge"),
      (e.FLOWCHART_MULTIDOCUMENT = "flowChartMultidocument"),
      (e.FLOWCHART_OFFLINE_STORAGE = "flowChartOfflineStorage"),
      (e.FLOWCHART_OFFPAGE_CONNECTOR = "flowChartOffpageConnector"),
      (e.FLOWCHART_OR = "flowChartOr"),
      (e.FLOWCHART_PREDEFINED_PROCESS = "flowChartPredefinedProcess"),
      (e.FLOWCHART_PREPARATION = "flowChartPreparation"),
      (e.FLOWCHART_PROCESS = "flowChartProcess"),
      (e.FLOWCHART_PUNCHED_TAPE = "flowChartPunchedTape"),
      (e.FLOWCHART_SEQUENTIAL_ACCESS_STORAGE = "flowChartMagneticTape"),
      (e.FLOWCHART_SORT = "flowChartSort"),
      (e.FLOWCHART_STORED_DATA = "flowChartOnlineStorage"),
      (e.FLOWCHART_SUMMING_JUNCTION = "flowChartSummingJunction"),
      (e.FLOWCHART_TERMINATOR = "flowChartTerminator"),
      (e.FOLDED_CORNER = "folderCorner"),
      (e.FRAME = "frame"),
      (e.FUNNEL = "funnel"),
      (e.GEAR_6 = "gear6"),
      (e.GEAR_9 = "gear9"),
      (e.HALF_FRAME = "halfFrame"),
      (e.HEART = "heart"),
      (e.HEPTAGON = "heptagon"),
      (e.HEXAGON = "hexagon"),
      (e.HORIZONTAL_SCROLL = "horizontalScroll"),
      (e.ISOSCELES_TRIANGLE = "triangle"),
      (e.LEFT_ARROW = "leftArrow"),
      (e.LEFT_ARROW_CALLOUT = "leftArrowCallout"),
      (e.LEFT_BRACE = "leftBrace"),
      (e.LEFT_BRACKET = "leftBracket"),
      (e.LEFT_CIRCULAR_ARROW = "leftCircularArrow"),
      (e.LEFT_RIGHT_ARROW = "leftRightArrow"),
      (e.LEFT_RIGHT_ARROW_CALLOUT = "leftRightArrowCallout"),
      (e.LEFT_RIGHT_CIRCULAR_ARROW = "leftRightCircularArrow"),
      (e.LEFT_RIGHT_RIBBON = "leftRightRibbon"),
      (e.LEFT_RIGHT_UP_ARROW = "leftRightUpArrow"),
      (e.LEFT_UP_ARROW = "leftUpArrow"),
      (e.LIGHTNING_BOLT = "lightningBolt"),
      (e.LINE_CALLOUT_1 = "borderCallout1"),
      (e.LINE_CALLOUT_1_ACCENT_BAR = "accentCallout1"),
      (e.LINE_CALLOUT_1_BORDER_AND_ACCENT_BAR = "accentBorderCallout1"),
      (e.LINE_CALLOUT_1_NO_BORDER = "callout1"),
      (e.LINE_CALLOUT_2 = "borderCallout2"),
      (e.LINE_CALLOUT_2_ACCENT_BAR = "accentCallout2"),
      (e.LINE_CALLOUT_2_BORDER_AND_ACCENT_BAR = "accentBorderCallout2"),
      (e.LINE_CALLOUT_2_NO_BORDER = "callout2"),
      (e.LINE_CALLOUT_3 = "borderCallout3"),
      (e.LINE_CALLOUT_3_ACCENT_BAR = "accentCallout3"),
      (e.LINE_CALLOUT_3_BORDER_AND_ACCENT_BAR = "accentBorderCallout3"),
      (e.LINE_CALLOUT_3_NO_BORDER = "callout3"),
      (e.LINE_CALLOUT_4 = "borderCallout3"),
      (e.LINE_CALLOUT_4_ACCENT_BAR = "accentCallout3"),
      (e.LINE_CALLOUT_4_BORDER_AND_ACCENT_BAR = "accentBorderCallout3"),
      (e.LINE_CALLOUT_4_NO_BORDER = "callout3"),
      (e.LINE = "line"),
      (e.LINE_INVERSE = "lineInv"),
      (e.MATH_DIVIDE = "mathDivide"),
      (e.MATH_EQUAL = "mathEqual"),
      (e.MATH_MINUS = "mathMinus"),
      (e.MATH_MULTIPLY = "mathMultiply"),
      (e.MATH_NOT_EQUAL = "mathNotEqual"),
      (e.MATH_PLUS = "mathPlus"),
      (e.MOON = "moon"),
      (e.NON_ISOSCELES_TRAPEZOID = "nonIsoscelesTrapezoid"),
      (e.NOTCHED_RIGHT_ARROW = "notchedRightArrow"),
      (e.NO_SYMBOL = "noSmoking"),
      (e.OCTAGON = "octagon"),
      (e.OVAL = "ellipse"),
      (e.OVAL_CALLOUT = "wedgeEllipseCallout"),
      (e.PARALLELOGRAM = "parallelogram"),
      (e.PENTAGON = "homePlate"),
      (e.PIE = "pie"),
      (e.PIE_WEDGE = "pieWedge"),
      (e.PLAQUE = "plaque"),
      (e.PLAQUE_TABS = "plaqueTabs"),
      (e.QUAD_ARROW = "quadArrow"),
      (e.QUAD_ARROW_CALLOUT = "quadArrowCallout"),
      (e.RECTANGLE = "rect"),
      (e.RECTANGULAR_CALLOUT = "wedgeRectCallout"),
      (e.REGULAR_PENTAGON = "pentagon"),
      (e.RIGHT_ARROW = "rightArrow"),
      (e.RIGHT_ARROW_CALLOUT = "rightArrowCallout"),
      (e.RIGHT_BRACE = "rightBrace"),
      (e.RIGHT_BRACKET = "rightBracket"),
      (e.RIGHT_TRIANGLE = "rtTriangle"),
      (e.ROUNDED_RECTANGLE = "roundRect"),
      (e.ROUNDED_RECTANGULAR_CALLOUT = "wedgeRoundRectCallout"),
      (e.ROUND_1_RECTANGLE = "round1Rect"),
      (e.ROUND_2_DIAG_RECTANGLE = "round2DiagRect"),
      (e.ROUND_2_SAME_RECTANGLE = "round2SameRect"),
      (e.SMILEY_FACE = "smileyFace"),
      (e.SNIP_1_RECTANGLE = "snip1Rect"),
      (e.SNIP_2_DIAG_RECTANGLE = "snip2DiagRect"),
      (e.SNIP_2_SAME_RECTANGLE = "snip2SameRect"),
      (e.SNIP_ROUND_RECTANGLE = "snipRoundRect"),
      (e.SQUARE_TABS = "squareTabs"),
      (e.STAR_10_POINT = "star10"),
      (e.STAR_12_POINT = "star12"),
      (e.STAR_16_POINT = "star16"),
      (e.STAR_24_POINT = "star24"),
      (e.STAR_32_POINT = "star32"),
      (e.STAR_4_POINT = "star4"),
      (e.STAR_5_POINT = "star5"),
      (e.STAR_6_POINT = "star6"),
      (e.STAR_7_POINT = "star7"),
      (e.STAR_8_POINT = "star8"),
      (e.STRIPED_RIGHT_ARROW = "stripedRightArrow"),
      (e.SUN = "sun"),
      (e.SWOOSH_ARROW = "swooshArrow"),
      (e.TEAR = "teardrop"),
      (e.TRAPEZOID = "trapezoid"),
      (e.UP_ARROW = "upArrow"),
      (e.UP_ARROW_CALLOUT = "upArrowCallout"),
      (e.UP_DOWN_ARROW = "upDownArrow"),
      (e.UP_DOWN_ARROW_CALLOUT = "upDownArrowCallout"),
      (e.UP_RIBBON = "ribbon2"),
      (e.U_TURN_ARROW = "uturnArrow"),
      (e.VERTICAL_SCROLL = "verticalScroll"),
      (e.WAVE = "wave"),
      ((e = v = v || {}).AREA = "area"),
      (e.BAR = "bar"),
      (e.BAR3D = "bar3D"),
      (e.BUBBLE = "bubble"),
      (e.BUBBLE3D = "bubble3D"),
      (e.DOUGHNUT = "doughnut"),
      (e.LINE = "line"),
      (e.PIE = "pie"),
      (e.RADAR = "radar"),
      (e.SCATTER = "scatter"),
      ((e = X = X || {}).TEXT1 = "tx1"),
      (e.TEXT2 = "tx2"),
      (e.BACKGROUND1 = "bg1"),
      (e.BACKGROUND2 = "bg2"),
      (e.ACCENT1 = "accent1"),
      (e.ACCENT2 = "accent2"),
      (e.ACCENT3 = "accent3"),
      (e.ACCENT4 = "accent4"),
      (e.ACCENT5 = "accent5"),
      (e.ACCENT6 = "accent6"),
      ((e = n = n || {}).chart = "chart"),
      (e.image = "image"),
      (e.line = "line"),
      (e.rect = "rect"),
      (e.text = "text"),
      (e.placeholder = "placeholder"),
      ((e = N = N || {}).chart = "chart"),
      (e.hyperlink = "hyperlink"),
      (e.image = "image"),
      (e.media = "media"),
      (e.online = "online"),
      (e.placeholder = "placeholder"),
      (e.table = "table"),
      (e.tablecell = "tablecell"),
      (e.text = "text"),
      (e.notes = "notes"),
      ((e = o = o || {}).title = "title"),
      (e.body = "body"),
      (e.image = "pic"),
      (e.chart = "chart"),
      (e.table = "tbl"),
      (e.media = "media"),
      ((e = f = f || {}).DEFAULT = "&#x2022;"),
      (e.CHECK = "&#x2713;"),
      (e.STAR = "&#x2605;"),
      (e.TRIANGLE = "&#x25B6;"),
      "data:image/png;base64,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");
  function R(e, t, a) {
    return "number" ==
      typeof (e = "string" != typeof e || isNaN(Number(e)) ? e : Number(e)) &&
      e < 100
      ? M(e)
      : "number" == typeof e && 100 <= e
      ? e
      : "string" == typeof e && e.includes("%")
      ? (!t || "X" !== t) && t && "Y" === t
        ? Math.round((parseFloat(e) / 100) * a.height)
        : Math.round((parseFloat(e) / 100) * a.width)
      : 0;
  }
  function he(e) {
    return e.replace(/[xy]/g, function (e) {
      var t = (16 * Math.random()) | 0;
      return ("x" === e ? t : (3 & t) | 8).toString(16);
    });
  }
  function I(e) {
    return void 0 === e || null == e
      ? ""
      : e
          .toString()
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");
  }
  function M(e) {
    return "number" == typeof e && 100 < e
      ? e
      : ("string" == typeof e && (e = Number(e.replace(/in*/gi, ""))),
        Math.round(F * e));
  }
  function O(e) {
    e = Number(e) || 0;
    return isNaN(e) ? 0 : Math.round(e * x);
  }
  function k(e) {
    return (e = e || 0), Math.round(6e4 * (360 < e ? e - 360 : e));
  }
  function ge(e) {
    e = e.toString(16);
    return 1 === e.length ? "0" + e : e;
  }
  function me(e, t, a) {
    return (ge(e) + ge(t) + ge(a)).toUpperCase();
  }
  function z(e, t) {
    var e = (e || "").replace("#", ""),
      a =
        (W.test(e) ||
          e === A.background1 ||
          e === A.background2 ||
          e === A.text1 ||
          e === A.text2 ||
          e === A.accent1 ||
          e === A.accent2 ||
          e === A.accent3 ||
          e === A.accent4 ||
          e === A.accent5 ||
          e === A.accent6 ||
          (console.warn(
            '"'
              .concat(e, '" is not a valid scheme color or hex RGB! "')
              .concat(
                w,
                "\" used instead. Only provide 6-digit RGB or 'pptx.SchemeColor' values!"
              )
          ),
          (e = w)),
        W.test(e) ? "srgbClr" : "schemeClr"),
      e = 'val="' + (W.test(e) ? e.toUpperCase() : e) + '"';
    return t
      ? "<a:".concat(a, " ").concat(e, ">").concat(t, "</a:").concat(a, ">")
      : "<a:".concat(a, " ").concat(e, "/>");
  }
  function U(e) {
    var t = "solid",
      a = "",
      A = "",
      o = "";
    return (
      e &&
        ("string" == typeof e
          ? (a = e)
          : (e.type && (t = e.type),
            e.color && (a = e.color),
            e.alpha &&
              (A += '<a:alpha val="'.concat(
                Math.round(1e3 * (100 - e.alpha)),
                '"/>'
              )),
            e.transparency &&
              (A += '<a:alpha val="'.concat(
                Math.round(1e3 * (100 - e.transparency)),
                '"/>'
              ))),
        (o +=
          "solid" === t
            ? "<a:solidFill>".concat(z(a, A), "</a:solidFill>")
            : "")),
      o
    );
  }
  function g(e) {
    return e._rels.length + e._relsChart.length + e._relsMedia.length + 1;
  }
  function be(e) {
    if (e && "object" == typeof e)
      return (
        "outer" !== e.type &&
          "inner" !== e.type &&
          "none" !== e.type &&
          (console.warn(
            "Warning: shadow.type options are `outer`, `inner` or `none`."
          ),
          (e.type = "outer")),
        e.angle &&
          ((isNaN(Number(e.angle)) || e.angle < 0 || 359 < e.angle) &&
            (console.warn("Warning: shadow.angle can only be 0-359"),
            (e.angle = 270)),
          (e.angle = Math.round(Number(e.angle)))),
        e.opacity &&
          ((isNaN(Number(e.opacity)) || e.opacity < 0 || 1 < e.opacity) &&
            (console.warn("Warning: shadow.opacity can only be 0-1"),
            (e.opacity = 0.75)),
          (e.opacity = Number(e.opacity))),
        e.color &&
          e.color.startsWith("#") &&
          (console.warn(
            'Warning: shadow.color should not include hash (#) character, , e.g. "FF0000"'
          ),
          (e.color = e.color.replace("#", ""))),
        e
      );
  }
  function ye(e, f, t, a) {
    void 0 === e && (e = []);
    var A,
      o = oe,
      s = +F,
      p = 0,
      n = 0,
      u = [],
      r = R((f = void 0 === f ? {} : f).x, "X", t),
      l = R(f.y, "Y", t),
      c = R(f.w, "X", t),
      i = R(f.h, "Y", t),
      d = c;
    function h() {
      var e = 0;
      0 === u.length && (e = l || M(o[0])),
        0 < u.length &&
          (e = M(f.autoPageSlideStartY || f.newSlideStartY || o[0])),
        (s = (i || t.height) - e - M(o[2])),
        1 < u.length &&
          ("number" == typeof f.autoPageSlideStartY
            ? (s = (i || t.height) - M(f.autoPageSlideStartY + o[2]))
            : "number" == typeof f.newSlideStartY
            ? (s = (i || t.height) - M(f.newSlideStartY + o[2]))
            : l &&
              (s = (i || t.height) - M((l / F < o[0] ? l / F : o[0]) + o[2])) <
                i &&
              (s = i));
    }
    if (
      (f.verbose &&
        (console.log("[[VERBOSE MODE]]"),
        console.log(
          "|-- TABLE PROPS --------------------------------------------------------|"
        ),
        console.log(
          "| presLayout.width ................................ = ".concat(
            (t.width / F).toFixed(1)
          )
        ),
        console.log(
          "| presLayout.height ............................... = ".concat(
            (t.height / F).toFixed(1)
          )
        ),
        console.log(
          "| tableProps.x .................................... = ".concat(
            "number" == typeof f.x ? (f.x / F).toFixed(1) : f.x
          )
        ),
        console.log(
          "| tableProps.y .................................... = ".concat(
            "number" == typeof f.y ? (f.y / F).toFixed(1) : f.y
          )
        ),
        console.log(
          "| tableProps.w .................................... = ".concat(
            "number" == typeof f.w ? (f.w / F).toFixed(1) : f.w
          )
        ),
        console.log(
          "| tableProps.h .................................... = ".concat(
            "number" == typeof f.h ? (f.h / F).toFixed(1) : f.h
          )
        ),
        console.log(
          "| tableProps.slideMargin .......................... = ".concat(
            f.slideMargin ? String(f.slideMargin) : ""
          )
        ),
        console.log(
          "| tableProps.margin ............................... = ".concat(
            String(f.margin)
          )
        ),
        console.log(
          "| tableProps.colW ................................. = ".concat(
            String(f.colW)
          )
        ),
        console.log(
          "| tableProps.autoPageSlideStartY .................. = ".concat(
            f.autoPageSlideStartY
          )
        ),
        console.log(
          "| tableProps.autoPageCharWeight ................... = ".concat(
            f.autoPageCharWeight
          )
        ),
        console.log(
          "|-- CALCULATIONS -------------------------------------------------------|"
        ),
        console.log(
          "| tablePropX ...................................... = ".concat(r / F)
        ),
        console.log(
          "| tablePropY ...................................... = ".concat(l / F)
        ),
        console.log(
          "| tablePropW ...................................... = ".concat(c / F)
        ),
        console.log(
          "| tablePropH ...................................... = ".concat(i / F)
        ),
        console.log(
          "| tableCalcW ...................................... = ".concat(d / F)
        )),
      f.slideMargin || 0 === f.slideMargin || (f.slideMargin = oe[0]),
      a && void 0 !== a._margin
        ? Array.isArray(a._margin)
          ? (o = a._margin)
          : isNaN(Number(a._margin)) ||
            (o = [
              Number(a._margin),
              Number(a._margin),
              Number(a._margin),
              Number(a._margin),
            ])
        : (!f.slideMargin && 0 !== f.slideMargin) ||
          (Array.isArray(f.slideMargin)
            ? (o = f.slideMargin)
            : isNaN(f.slideMargin) ||
              (o = [
                f.slideMargin,
                f.slideMargin,
                f.slideMargin,
                f.slideMargin,
              ])),
      f.verbose &&
        console.log(
          "| arrInchMargins .................................. = [".concat(
            o.join(", "),
            "]"
          )
        ),
      (e[0] || []).forEach(function (e) {
        e = (e = e || { _type: N.tablecell }).options || null;
        n += Number(null !== e && e.colspan ? e.colspan : 1);
      }),
      f.verbose &&
        console.log(
          "| numCols ......................................... = ".concat(n)
        ),
      !c &&
        f.colW &&
        ((d = Array.isArray(f.colW)
          ? f.colW.reduce(function (e, t) {
              return e + t;
            }) * F
          : f.colW * n || 0),
        f.verbose) &&
        console.log(
          "| tableCalcW ...................................... = ".concat(d / F)
        ),
      (A = d || M((r ? r / F : o[1]) + o[3])),
      f.verbose &&
        console.log(
          "| emuSlideTabW .................................... = ".concat(
            (A / F).toFixed(1)
          )
        ),
      !f.colW || !Array.isArray(f.colW))
    )
      if (f.colW && !isNaN(Number(f.colW))) {
        var g = [];
        (e[0] || []).forEach(function () {
          return g.push(f.colW);
        }),
          (f.colW = []),
          g.forEach(function (e) {
            Array.isArray(f.colW) && f.colW.push(e);
          });
      } else {
        f.colW = [];
        for (var m = 0; m < n; m++) f.colW.push(A / F / n);
      }
    var b = { rows: [] };
    return (
      e.forEach(function (e, t) {
        for (
          var d = [],
            a = 0,
            A = 0,
            o = [],
            n =
              (e.forEach(function (e) {
                var t;
                o.push({ _type: N.tablecell, text: [], options: e.options }),
                  e.options.margin && 1 <= e.options.margin[0]
                    ? (null != (t = e.options) &&
                      t.margin &&
                      e.options.margin[0] &&
                      O(e.options.margin[0]) > a
                        ? (a = O(e.options.margin[0]))
                        : null != f &&
                          f.margin &&
                          f.margin[0] &&
                          O(f.margin[0]) > a &&
                          (a = O(f.margin[0])),
                      null != (t = e.options) &&
                      t.margin &&
                      e.options.margin[2] &&
                      O(e.options.margin[2]) > A
                        ? (A = O(e.options.margin[2]))
                        : null != f &&
                          f.margin &&
                          f.margin[2] &&
                          O(f.margin[2]) > A &&
                          (A = O(f.margin[2])))
                    : (null != (t = e.options) &&
                      t.margin &&
                      e.options.margin[0] &&
                      M(e.options.margin[0]) > a
                        ? (a = M(e.options.margin[0]))
                        : null != f &&
                          f.margin &&
                          f.margin[0] &&
                          M(f.margin[0]) > a &&
                          (a = M(f.margin[0])),
                      null != (t = e.options) &&
                      t.margin &&
                      e.options.margin[2] &&
                      M(e.options.margin[2]) > A
                        ? (A = M(e.options.margin[2]))
                        : null != f &&
                          f.margin &&
                          f.margin[2] &&
                          M(f.margin[2]) > A &&
                          (A = M(f.margin[2])));
              }),
              h(),
              (p += a + A),
              f.verbose &&
                0 === t &&
                console.log(
                  "| SLIDE ["
                    .concat(u.length, "]: emuSlideTabH ...... = ")
                    .concat((s / F).toFixed(1), " ")
                ),
              e.forEach(function (a, A) {
                var e,
                  o,
                  t,
                  n,
                  r,
                  l,
                  c,
                  i,
                  s = {
                    _type: N.tablecell,
                    _lines: null,
                    _lineHeight: M(
                      ((null != (s = a.options) && s.fontSize
                        ? a.options.fontSize
                        : f.fontSize || P) *
                        (V + (f.autoPageLineWeight || 0))) /
                        100
                    ),
                    text: [],
                    options: a.options,
                  },
                  p =
                    (s.options.rowspan && (s._lineHeight = 0),
                    (s.options.autoPageCharWeight =
                      f.autoPageCharWeight || null),
                    f.colW[A]);
                a.options.colspan &&
                  Array.isArray(f.colW) &&
                  (p = f.colW
                    .filter(function (e, t) {
                      return A <= t && t < t + a.options.colspan;
                    })
                    .reduce(function (e, t) {
                      return e + t;
                    })),
                  (s._lines =
                    ((p = p),
                    (o = !1),
                    (t =
                      2.3 +
                      (null != (t = (e = a).options) && t.autoPageCharWeight
                        ? e.options.autoPageCharWeight
                        : 0)),
                    (n =
                      Math.floor((p / x) * F) /
                      ((null != (p = e.options) && p.fontSize
                        ? e.options.fontSize
                        : P) /
                        t)),
                    (r = []),
                    (p = []),
                    (l = []),
                    (c = []),
                    e.text && 0 === e.text.toString().trim().length
                      ? p.push({ _type: N.tablecell, text: " " })
                      : "number" == typeof e.text || "string" == typeof e.text
                      ? p.push({
                          _type: N.tablecell,
                          text: (e.text || "").toString().trim(),
                        })
                      : Array.isArray(e.text) && (p = e.text),
                    o &&
                      (console.log("[1/4] inputCells"),
                      p.forEach(function (e, t) {
                        return console.log(
                          "[1/4] ["
                            .concat(t + 1, "] cell: ")
                            .concat(JSON.stringify(e))
                        );
                      })),
                    (i = []),
                    p.forEach(function (t) {
                      var e;
                      "string" == typeof t.text &&
                        (1 < t.text.split("\n").length
                          ? t.text.split("\n").forEach(function (e) {
                              i.push({
                                _type: N.tablecell,
                                text: e,
                                options: y(y({}, t.options), { breakLine: !0 }),
                              });
                            })
                          : i.push({
                              _type: N.tablecell,
                              text: t.text.trim(),
                              options: t.options,
                            }),
                        null != (e = t.options)) &&
                        e.breakLine &&
                        (o &&
                          console.log(
                            "inputCells: new line > ".concat(JSON.stringify(i))
                          ),
                        l.push(i),
                        (i = [])),
                        0 < i.length && (l.push(i), (i = []));
                    }),
                    o &&
                      (console.log("[2/4] inputLines1 (".concat(l.length, ")")),
                      l.forEach(function (e, t) {
                        return console.log(
                          "[2/4] ["
                            .concat(t + 1, "] line: ")
                            .concat(JSON.stringify(e))
                        );
                      })),
                    l.forEach(function (e) {
                      e.forEach(function (A) {
                        var o = [],
                          n = String(A.text).split(" ");
                        n.forEach(function (e, t) {
                          var a = y({}, A.options);
                          null != a &&
                            a.breakLine &&
                            (a.breakLine = t + 1 === n.length),
                            o.push({
                              _type: N.tablecell,
                              text: e + (t + 1 < n.length ? " " : ""),
                              options: a,
                            });
                        }),
                          c.push(o);
                      });
                    }),
                    o &&
                      (console.log("[3/4] inputLines2 (".concat(c.length, ")")),
                      c.forEach(function (e) {
                        return console.log(
                          "[3/4] line: ".concat(JSON.stringify(e))
                        );
                      })),
                    c.forEach(function (e) {
                      var t = [],
                        a = "";
                      e.forEach(function (e) {
                        a.length + e.text.length > n &&
                          (r.push(t), (t = []), (a = "")),
                          t.push(e),
                          (a += e.text.toString());
                      }),
                        0 < t.length && r.push(t);
                    }),
                    o &&
                      (console.log("[4/4] parsedLines (".concat(r.length, ")")),
                      r.forEach(function (e, t) {
                        return console.log(
                          "[4/4] [Line "
                            .concat(t + 1, "]:\n")
                            .concat(JSON.stringify(e))
                        );
                      }),
                      console.log(
                        "...............................................\n\n"
                      )),
                    r)),
                  d.push(s);
              }),
              f.verbose &&
                console.log(
                  "\n| SLIDE ["
                    .concat(u.length, "]: ROW [")
                    .concat(t, "]: START...")
                ),
              0),
            r = 0,
            l = !1;
          !l;

        ) {
          var c = d[n],
            i = o[n],
            c =
              (d.forEach(function (e) {
                e._lineHeight >= r && (r = e._lineHeight);
              }),
              s < p + r &&
                (f.verbose &&
                  (console.log(
                    "\n|-----------------------------------------------------------------------|"
                  ),
                  console.log(
                    "|-- NEW SLIDE CREATED (currTabH+currLineH > maxH) => "
                      .concat((p / F).toFixed(2), " + ")
                      .concat((c._lineHeight / F).toFixed(2), " > ")
                      .concat(s / F)
                  ),
                  console.log(
                    "|-----------------------------------------------------------------------|\n\n"
                  )),
                0 < o.length &&
                  0 <
                    o
                      .map(function (e) {
                        return e.text.length;
                      })
                      .reduce(function (e, t) {
                        return e + t;
                      }) &&
                  b.rows.push(o),
                u.push(b),
                (b = { rows: [] }),
                (o = []),
                e.forEach(function (e) {
                  return o.push({
                    _type: N.tablecell,
                    text: [],
                    options: e.options,
                  });
                }),
                h(),
                (p += a + A),
                f.verbose &&
                  console.log(
                    "| SLIDE ["
                      .concat(u.length, "]: emuSlideTabH ...... = ")
                      .concat((s / F).toFixed(1), " ")
                  ),
                (p = 0),
                (f.addHeaderToEach || f.autoPageRepeatHeader) &&
                  f._arrObjTabHeadRows &&
                  f._arrObjTabHeadRows.forEach(function (e) {
                    var t = [],
                      a = 0;
                    e.forEach(function (e) {
                      t.push(e), e._lineHeight > a && (a = e._lineHeight);
                    }),
                      b.rows.push(t),
                      (p += a);
                  }),
                (i = o[n])),
              c._lines.shift());
          Array.isArray(i.text) &&
            (c
              ? (i.text = i.text.concat(c))
              : 0 === i.text.length &&
                (i.text = i.text.concat({ _type: N.tablecell, text: "" }))),
            n === d.length - 1 && (p += r),
            (n = n < d.length - 1 ? n + 1 : 0),
            0 ===
              d
                .map(function (e) {
                  return e._lines.length;
                })
                .reduce(function (e, t) {
                  return e + t;
                }) && (l = !0);
        }
        0 < o.length && b.rows.push(o),
          f.verbose &&
            console.log(
              "- SLIDE ["
                .concat(u.length, "]: ROW [")
                .concat(t, "]: ...COMPLETE ...... emuTabCurrH = ")
                .concat((p / F).toFixed(2), " ( emuSlideTabH = ")
                .concat((s / F).toFixed(2), " )")
            );
      }),
      u.push(b),
      f.verbose &&
        (console.log("\n|================================================|"),
        console.log("| FINAL: tableRowSlides.length = ".concat(u.length)),
        u.forEach(function (e) {
          return console.log(e);
        }),
        console.log("|================================================|\n\n")),
      u
    );
  }
  var ve = 0;
  function xe(e, t, a, A) {
    function o(e) {
      e &&
        "none" !== e.style &&
        (void 0 !== e.size &&
          (isNaN(Number(e.size)) || e.size <= 0) &&
          (console.warn("Warning: chart.gridLine.size must be greater than 0."),
          delete e.size),
        e.style &&
          !["solid", "dash", "dot"].includes(e.style) &&
          (console.warn(
            "Warning: chart.gridLine.style options: `solid`, `dash`, `dot`."
          ),
          delete e.style),
        e.cap) &&
        !["flat", "square", "round"].includes(e.cap) &&
        (console.warn(
          "Warning: chart.gridLine.cap options: `flat`, `square`, `round`."
        ),
        delete e.cap);
    }
    var n = ++ve,
      r = { _type: null, text: null, options: null, chartRid: null },
      l = null,
      c = [],
      l = Array.isArray(t)
        ? (t.forEach(function (e) {
            c = c.concat(e.data);
          }),
          a || A)
        : ((c = a), A),
      i =
        (c.forEach(function (e, t) {
          (e._dataIndex = t),
            void 0 === e.labels ||
              Array.isArray(e.labels[0]) ||
              (e.labels = [e.labels]);
        }),
        l && "object" == typeof l ? l : {});
    (i._type = t),
      (i.x = void 0 === i.x || null == i.x || isNaN(Number(i.x)) ? 1 : i.x),
      (i.y = void 0 === i.y || null == i.y || isNaN(Number(i.y)) ? 1 : i.y),
      (i.w = i.w || "50%"),
      (i.h = i.h || "50%"),
      (i.objectName = i.objectName
        ? I(i.objectName)
        : "Chart ".concat(
            e._slideObjects.filter(function (e) {
              return e._type === N.chart;
            }).length
          )),
      ["bar", "col"].includes(i.barDir || "") || (i.barDir = "col"),
      i._type !== v.AREA ||
        ["stacked", "standard", "percentStacked"].includes(
          i.barGrouping || ""
        ) ||
        (i.barGrouping = "standard"),
      i._type !== v.BAR ||
        ["clustered", "stacked", "percentStacked"].includes(
          i.barGrouping || ""
        ) ||
        (i.barGrouping = "clustered"),
      i._type !== v.BAR3D ||
        ["clustered", "stacked", "standard", "percentStacked"].includes(
          i.barGrouping || ""
        ) ||
        (i.barGrouping = "standard"),
      null != (a = i.barGrouping) &&
        a.includes("tacked") &&
        !i.barGapWidthPct &&
        (i.barGapWidthPct = 50),
      i.dataLabelPosition &&
        ((i._type !== v.AREA &&
          i._type !== v.BAR3D &&
          i._type !== v.DOUGHNUT &&
          i._type !== v.RADAR) ||
          delete i.dataLabelPosition,
        i._type !== v.PIE ||
          ["bestFit", "ctr", "inEnd", "outEnd"].includes(i.dataLabelPosition) ||
          delete i.dataLabelPosition,
        (i._type !== v.BUBBLE &&
          i._type !== v.BUBBLE3D &&
          i._type !== v.LINE &&
          i._type !== v.SCATTER) ||
          ["b", "ctr", "l", "r", "t"].includes(i.dataLabelPosition) ||
          delete i.dataLabelPosition,
        i._type === v.BAR) &&
        (["stacked", "percentStacked"].includes(i.barGrouping || "") ||
          ["ctr", "inBase", "inEnd"].includes(i.dataLabelPosition) ||
          delete i.dataLabelPosition,
        ["clustered"].includes(i.barGrouping || "") ||
          ["ctr", "inBase", "inEnd", "outEnd"].includes(i.dataLabelPosition) ||
          delete i.dataLabelPosition),
      (i.dataLabelBkgrdColors =
        !(!i.dataLabelBkgrdColors && i.dataLabelBkgrdColors) &&
        i.dataLabelBkgrdColors),
      ["b", "l", "r", "t", "tr"].includes(i.legendPos || "") ||
        (i.legendPos = "r"),
      [
        "cone",
        "coneToMax",
        "box",
        "cylinder",
        "pyramid",
        "pyramidToMax",
      ].includes(i.bar3DShape || "") || (i.bar3DShape = "box"),
      [
        "circle",
        "dash",
        "diamond",
        "dot",
        "none",
        "square",
        "triangle",
      ].includes(i.lineDataSymbol || "") || (i.lineDataSymbol = "circle"),
      ["gap", "span"].includes(i.displayBlanksAs || "") ||
        (i.displayBlanksAs = "span"),
      ["standard", "marker", "filled"].includes(i.radarStyle || "") ||
        (i.radarStyle = "standard"),
      (i.lineDataSymbolSize =
        i.lineDataSymbolSize && !isNaN(i.lineDataSymbolSize)
          ? i.lineDataSymbolSize
          : 6),
      (i.lineDataSymbolLineSize =
        i.lineDataSymbolLineSize && !isNaN(i.lineDataSymbolLineSize)
          ? O(i.lineDataSymbolLineSize)
          : O(0.75)),
      i.layout &&
        ["x", "y", "w", "h"].forEach(function (e) {
          var t = i.layout[e];
          (isNaN(Number(t)) || t < 0 || 1 < t) &&
            (console.warn("Warning: chart.layout." + e + " can only be 0-1"),
            delete i.layout[e]);
        }),
      (i.catGridLine =
        i.catGridLine ||
        (i._type === v.SCATTER
          ? { color: "D9D9D9", size: 1 }
          : { style: "none" })),
      (i.valGridLine =
        i.valGridLine ||
        (i._type === v.SCATTER ? { color: "D9D9D9", size: 1 } : {})),
      (i.serGridLine =
        i.serGridLine ||
        (i._type === v.SCATTER
          ? { color: "D9D9D9", size: 1 }
          : { style: "none" })),
      o(i.catGridLine),
      o(i.valGridLine),
      o(i.serGridLine),
      be(i.shadow),
      (i.showDataTable =
        !(!i.showDataTable && i.showDataTable) && i.showDataTable),
      (i.showDataTableHorzBorder =
        !(i.showDataTableHorzBorder || !i.showDataTableHorzBorder) ||
        i.showDataTableHorzBorder),
      (i.showDataTableVertBorder =
        !(i.showDataTableVertBorder || !i.showDataTableVertBorder) ||
        i.showDataTableVertBorder),
      (i.showDataTableOutline =
        !(i.showDataTableOutline || !i.showDataTableOutline) ||
        i.showDataTableOutline),
      (i.showDataTableKeys =
        !(i.showDataTableKeys || !i.showDataTableKeys) || i.showDataTableKeys),
      (i.showLabel = !(!i.showLabel && i.showLabel) && i.showLabel),
      (i.showLegend = !(!i.showLegend && i.showLegend) && i.showLegend),
      (i.showPercent = !(i.showPercent || !i.showPercent) || i.showPercent),
      (i.showTitle = !(!i.showTitle && i.showTitle) && i.showTitle),
      (i.showValue = !(!i.showValue && i.showValue) && i.showValue),
      (i.showLeaderLines =
        !(!i.showLeaderLines && i.showLeaderLines) && i.showLeaderLines),
      (i.catAxisLineShow = void 0 === i.catAxisLineShow || i.catAxisLineShow),
      (i.valAxisLineShow = void 0 === i.valAxisLineShow || i.valAxisLineShow),
      (i.serAxisLineShow = void 0 === i.serAxisLineShow || i.serAxisLineShow),
      (i.v3DRotX =
        !isNaN(i.v3DRotX) && -90 <= i.v3DRotX && i.v3DRotX <= 90
          ? i.v3DRotX
          : 30),
      (i.v3DRotY =
        !isNaN(i.v3DRotY) && 0 <= i.v3DRotY && i.v3DRotY <= 360
          ? i.v3DRotY
          : 30),
      (i.v3DRAngAx = !(i.v3DRAngAx || !i.v3DRAngAx) || i.v3DRAngAx),
      (i.v3DPerspective =
        !isNaN(i.v3DPerspective) &&
        0 <= i.v3DPerspective &&
        i.v3DPerspective <= 240
          ? i.v3DPerspective
          : 30),
      (i.barGapWidthPct =
        !isNaN(i.barGapWidthPct) &&
        0 <= i.barGapWidthPct &&
        i.barGapWidthPct <= 1e3
          ? i.barGapWidthPct
          : 150),
      (i.barGapDepthPct =
        !isNaN(i.barGapDepthPct) &&
        0 <= i.barGapDepthPct &&
        i.barGapDepthPct <= 1e3
          ? i.barGapDepthPct
          : 150),
      (i.chartColors = Array.isArray(i.chartColors)
        ? i.chartColors
        : i._type === v.PIE || i._type === v.DOUGHNUT
        ? fe
        : de),
      (i.chartColorsOpacity =
        i.chartColorsOpacity && !isNaN(i.chartColorsOpacity)
          ? i.chartColorsOpacity
          : null),
      (i.border = i.border && "object" == typeof i.border ? i.border : null),
      !i.border || (i.border.pt && !isNaN(i.border.pt)) || (i.border.pt = ee),
      !i.border ||
        (i.border.color && "string" == typeof i.border.color) ||
        (i.border.color = $),
      (i.plotArea = i.plotArea || {}),
      (i.plotArea.border =
        i.plotArea.border && "object" == typeof i.plotArea.border
          ? i.plotArea.border
          : null),
      !i.plotArea.border ||
        (i.plotArea.border.pt && !isNaN(i.plotArea.border.pt)) ||
        (i.plotArea.border.pt = ee),
      !i.plotArea.border ||
        (i.plotArea.border.color &&
          "string" == typeof i.plotArea.border.color) ||
        (i.plotArea.border.color = $),
      i.border && (i.plotArea.border = i.border),
      (i.plotArea.fill = i.plotArea.fill || {
        color: null,
        transparency: null,
      }),
      i.fill && (i.plotArea.fill.color = i.fill),
      (i.chartArea = i.chartArea || {}),
      (i.chartArea.border =
        i.chartArea.border && "object" == typeof i.chartArea.border
          ? i.chartArea.border
          : null),
      i.chartArea.border &&
        (i.chartArea.border = {
          color: i.chartArea.border.color || $,
          pt: i.chartArea.border.pt || ee,
        }),
      (i.chartArea.roundedCorners =
        "boolean" != typeof i.chartArea.roundedCorners ||
        i.chartArea.roundedCorners),
      (i.dataBorder =
        i.dataBorder && "object" == typeof i.dataBorder ? i.dataBorder : null),
      !i.dataBorder ||
        (i.dataBorder.pt && !isNaN(i.dataBorder.pt)) ||
        (i.dataBorder.pt = 0.75),
      !i.dataBorder ||
        (i.dataBorder.color &&
          "string" == typeof i.dataBorder.color &&
          6 === i.dataBorder.color.length) ||
        (i.dataBorder.color = "F9F9F9"),
      i.dataLabelFormatCode ||
        i._type !== v.SCATTER ||
        (i.dataLabelFormatCode = "General"),
      i.dataLabelFormatCode ||
        (i._type !== v.PIE && i._type !== v.DOUGHNUT) ||
        (i.dataLabelFormatCode = i.showPercent ? "0%" : "General"),
      (i.dataLabelFormatCode =
        i.dataLabelFormatCode && "string" == typeof i.dataLabelFormatCode
          ? i.dataLabelFormatCode
          : "#,##0"),
      i.dataLabelFormatScatter ||
        i._type !== v.SCATTER ||
        (i.dataLabelFormatScatter = "custom"),
      (i.lineSize = "number" == typeof i.lineSize ? i.lineSize : 2),
      (i.valAxisMajorUnit =
        "number" == typeof i.valAxisMajorUnit ? i.valAxisMajorUnit : null),
      i._type === v.AREA ||
      i._type === v.BAR ||
      i._type === v.BAR3D ||
      i._type === v.LINE
        ? (i.catAxisMultiLevelLabels = !!i.catAxisMultiLevelLabels)
        : delete i.catAxisMultiLevelLabels,
      (r._type = "chart"),
      (r.options = i),
      (r.chartRid = g(e)),
      e._relsChart.push({
        rId: g(e),
        data: c,
        opts: i,
        type: i._type,
        globalId: n,
        fileName: "chart".concat(n, ".xml"),
        Target: "/ppt/charts/chart".concat(n, ".xml"),
      }),
      e._slideObjects.push(r);
  }
  function Ce(e, t) {
    var a = {
        _type: null,
        text: null,
        options: null,
        image: null,
        imageRid: null,
        hyperlink: null,
      },
      A = t.x || 0,
      o = t.y || 0,
      n = t.w || 0,
      r = t.h || 0,
      l = t.sizing || null,
      c = t.hyperlink || "",
      i = t.data || "",
      s = t.path || "",
      p = g(e),
      d = t.objectName
        ? I(t.objectName)
        : "Image ".concat(
            e._slideObjects.filter(function (e) {
              return e._type === N.image;
            }).length
          );
    if (s || i)
      if (s && "string" != typeof s)
        console.error(
          "ERROR: addImage() 'path' should be a string, ex: {path:'/img/sample.png'} - you sent ".concat(
            String(s)
          )
        );
      else if (i && "string" != typeof i)
        console.error(
          "ERROR: addImage() 'data' should be a string, ex: {data:'image/png;base64,NMP[...]'} - you sent ".concat(
            String(i)
          )
        );
      else if (
        i &&
        "string" == typeof i &&
        !i.toLowerCase().includes("base64,")
      )
        console.error(
          "ERROR: Image `data` value lacks a base64 header! Ex: 'image/png;base64,NMP[...]')"
        );
      else {
        var f = (
          s
            .substring(s.lastIndexOf("/") + 1)
            .split("?")[0]
            .split(".")
            .pop()
            .split("#")[0] || "png"
        ).toLowerCase();
        if (
          (i && /image\/(\w+);/.exec(i) && 0 < /image\/(\w+);/.exec(i).length
            ? (f = /image\/(\w+);/.exec(i)[1])
            : null != i &&
              i.toLowerCase().includes("image/svg+xml") &&
              (f = "svg"),
          (a._type = N.image),
          (a.image = s || "preencoded.png"),
          (a.options = {
            x: A || 0,
            y: o || 0,
            w: n || 1,
            h: r || 1,
            altText: t.altText || "",
            rounding: "boolean" == typeof t.rounding && t.rounding,
            sizing: l,
            placeholder: t.placeholder,
            rotate: t.rotate || 0,
            flipV: t.flipV || !1,
            flipH: t.flipH || !1,
            transparency: t.transparency || 0,
            objectName: d,
            shadow: be(t.shadow),
          }),
          "svg" === f
            ? (e._relsMedia.push({
                path: s || i + "png",
                type: "image/png",
                extn: "png",
                data: i || "",
                rId: p,
                Target: "../media/image-"
                  .concat(e._slideNum, "-")
                  .concat(e._relsMedia.length + 1, ".png"),
                isSvgPng: !0,
                svgSize: {
                  w: R(a.options.w, "X", e._presLayout),
                  h: R(a.options.h, "Y", e._presLayout),
                },
              }),
              e._relsMedia.push({
                path: s || i,
                type: "image/svg+xml",
                extn: f,
                data: i || "",
                rId: (a.imageRid = p) + 1,
                Target: "../media/image-"
                  .concat(e._slideNum, "-")
                  .concat(e._relsMedia.length + 1, ".")
                  .concat(f),
              }),
              (a.imageRid = p + 1))
            : ((A = e._relsMedia.filter(function (e) {
                return (
                  e.path &&
                  e.path === s &&
                  e.type === "image/" + f &&
                  !e.isDuplicate
                );
              })[0]),
              e._relsMedia.push({
                path: s || "preencoded." + f,
                type: "image/" + f,
                extn: f,
                data: i || "",
                rId: p,
                isDuplicate: !(null == A || !A.Target),
                Target:
                  null != A && A.Target
                    ? A.Target
                    : "../media/image-"
                        .concat(e._slideNum, "-")
                        .concat(e._relsMedia.length + 1, ".")
                        .concat(f),
              }),
              (a.imageRid = p)),
          "object" == typeof c)
        ) {
          if (!c.url && !c.slide)
            throw new Error(
              "ERROR: `hyperlink` option requires either: `url` or `slide`"
            );
          e._rels.push({
            type: N.hyperlink,
            data: c.slide ? "slide" : "dummy",
            rId: ++p,
            Target: c.url || c.slide.toString(),
          }),
            (c._rId = p),
            (a.hyperlink = c);
        }
        e._slideObjects.push(a);
      }
    else
      console.error(
        "ERROR: addImage() requires either 'data' or 'path' parameter!"
      );
  }
  function we(e, t, a) {
    var a = "object" == typeof a ? a : {},
      A =
        ((a.line = a.line || { type: "none" }),
        { _type: N.text, shape: t || c.RECTANGLE, options: a, text: null });
    if (!t)
      throw new Error(
        "Missing/Invalid shape parameter! Example: `addShape(pptxgen.shapes.LINE, {x:1, y:1, w:1, h:1});`"
      );
    var t = {
      type: a.line.type || "solid",
      color: a.line.color || Ae,
      transparency: a.line.transparency || 0,
      width: a.line.width || 1,
      dashType: a.line.dashType || "solid",
      beginArrowType: a.line.beginArrowType || null,
      endArrowType: a.line.endArrowType || null,
    };
    "object" == typeof a.line && "none" !== a.line.type && (a.line = t),
      (a.x = a.x || (0 === a.x ? 0 : 1)),
      (a.y = a.y || (0 === a.y ? 0 : 1)),
      (a.w = a.w || (0 === a.w ? 0 : 1)),
      (a.h = a.h || (0 === a.h ? 0 : 1)),
      (a.objectName = a.objectName
        ? I(a.objectName)
        : "Shape ".concat(
            e._slideObjects.filter(function (e) {
              return e._type === N.text;
            }).length
          )),
      "string" == typeof a.line &&
        (((t = t).color = String(a.line)), (a.line = t)),
      "number" == typeof a.lineSize && (a.line.width = a.lineSize),
      "string" == typeof a.lineDash && (a.line.dashType = a.lineDash),
      "string" == typeof a.lineHead && (a.line.beginArrowType = a.lineHead),
      "string" == typeof a.lineTail && (a.line.endArrowType = a.lineTail),
      m(e, A),
      e._slideObjects.push(A);
  }
  function Pe(a, e, t, A) {
    var o = {
      _type: A ? N.placeholder : N.text,
      shape: (null == t ? void 0 : t.shape) || c.RECTANGLE,
      text: e && 0 !== e.length ? e : [{ text: "", options: null }],
      options: t || {},
    };
    function n(t) {
      var e;
      return (
        t.placeholder || (t.color = t.color || o.options.color || a.color || w),
        (t.placeholder || A) && (t.bullet = t.bullet || !1),
        ((t =
          t.placeholder &&
          a._slideLayout &&
          a._slideLayout._slideObjects &&
          null !=
            (e = a._slideLayout._slideObjects.filter(function (e) {
              return (
                "placeholder" === e._type &&
                e.options &&
                e.options.placeholder &&
                e.options.placeholder === t.placeholder
              );
            })[0]) &&
          e.options
            ? y(y({}, t), e.options)
            : t).objectName = t.objectName
          ? I(t.objectName)
          : "Text ".concat(
              a._slideObjects.filter(function (e) {
                return e._type === N.text;
              }).length
            )),
        t.shape === c.LINE &&
          ((e = {
            type: t.line.type || "solid",
            color: t.line.color || Ae,
            transparency: t.line.transparency || 0,
            width: t.line.width || 1,
            dashType: t.line.dashType || "solid",
            beginArrowType: t.line.beginArrowType || null,
            endArrowType: t.line.endArrowType || null,
          }),
          "object" == typeof t.line && (t.line = e),
          "string" == typeof t.line &&
            ((e = e),
            "string" == typeof t.line && (e.color = t.line),
            (t.line = e)),
          "number" == typeof t.lineSize && (t.line.width = t.lineSize),
          "string" == typeof t.lineDash && (t.line.dashType = t.lineDash),
          "string" == typeof t.lineHead && (t.line.beginArrowType = t.lineHead),
          "string" == typeof t.lineTail) &&
          (t.line.endArrowType = t.lineTail),
        (t.line = t.line || {}),
        (t.lineSpacing =
          t.lineSpacing && !isNaN(t.lineSpacing) ? t.lineSpacing : null),
        (t.lineSpacingMultiple =
          t.lineSpacingMultiple && !isNaN(t.lineSpacingMultiple)
            ? t.lineSpacingMultiple
            : null),
        (t._bodyProp = t._bodyProp || {}),
        (t._bodyProp.autoFit = t.autoFit || !1),
        (t._bodyProp.anchor = t.placeholder ? null : l.ctr),
        (t._bodyProp.vert = t.vert || null),
        (t._bodyProp.wrap = "boolean" != typeof t.wrap || t.wrap),
        ((t.inset && !isNaN(Number(t.inset))) || 0 === t.inset) &&
          ((t._bodyProp.lIns = M(t.inset)),
          (t._bodyProp.rIns = M(t.inset)),
          (t._bodyProp.tIns = M(t.inset)),
          (t._bodyProp.bIns = M(t.inset))),
        "boolean" == typeof t.underline &&
          !0 === t.underline &&
          (t.underline = { style: "sng" }),
        0 === (t.align || "").toLowerCase().indexOf("c")
          ? (t._bodyProp.align = r.center)
          : 0 === (t.align || "").toLowerCase().indexOf("l")
          ? (t._bodyProp.align = r.left)
          : 0 === (t.align || "").toLowerCase().indexOf("r")
          ? (t._bodyProp.align = r.right)
          : 0 === (t.align || "").toLowerCase().indexOf("j") &&
            (t._bodyProp.align = r.justify),
        0 === (t.valign || "").toLowerCase().indexOf("b")
          ? (t._bodyProp.anchor = l.b)
          : 0 === (t.valign || "").toLowerCase().indexOf("m")
          ? (t._bodyProp.anchor = l.ctr)
          : 0 === (t.valign || "").toLowerCase().indexOf("t") &&
            (t._bodyProp.anchor = l.t),
        be(t.shadow),
        t
      );
    }
    (o.options = n(o.options)),
      o.text.forEach(function (e) {
        return (e.options = n(e.options || {}));
      }),
      m(a, o.text || ""),
      a._slideObjects.push(o);
  }
  function Le(e, t) {
    var a, A;
    t.bkgd &&
      (t.background || (t.background = {}),
      "string" == typeof t.bkgd
        ? (t.background.color = t.bkgd)
        : (t.bkgd.data && (t.background.data = t.bkgd.data),
          t.bkgd.path && (t.background.path = t.bkgd.path),
          t.bkgd.src && (t.background.path = t.bkgd.src))),
      null != (a = t.background) &&
        a.fill &&
        (t.background.color = t.background.fill),
      e &&
        (e.path || e.data) &&
        ((e.path = e.path || "preencoded.png"),
        "jpg" === (a = (e.path.split(".").pop() || "png").split("?")[0]) &&
          (a = "jpeg"),
        (t._relsMedia = t._relsMedia || []),
        (A = t._relsMedia.length + 1),
        t._relsMedia.push({
          path: e.path,
          type: N.image,
          extn: a,
          data: e.data || null,
          rId: A,
          Target: "../media/"
            .concat((t._name || "").replace(/\s+/gi, "-"), "-image-")
            .concat(t._relsMedia.length + 1, ".")
            .concat(a),
        }),
        (t._bkgdImgRid = A));
  }
  function m(a, e) {
    var t = [];
    "string" != typeof e &&
      "number" != typeof e &&
      (Array.isArray(e) ? (t = e) : "object" == typeof e && (t = [e]),
      t.forEach(function (e) {
        var t;
        Array.isArray(e)
          ? m(a, e)
          : Array.isArray(e.text)
          ? m(a, e.text)
          : e &&
            "object" == typeof e &&
            e.options &&
            e.options.hyperlink &&
            !e.options.hyperlink._rId &&
            ("object" != typeof e.options.hyperlink
              ? console.log(
                  "ERROR: text `hyperlink` option should be an object. Ex: `hyperlink: {url:'https://github.com'}` "
                )
              : e.options.hyperlink.url || e.options.hyperlink.slide
              ? ((t = g(a)),
                a._rels.push({
                  type: N.hyperlink,
                  data: e.options.hyperlink.slide ? "slide" : "dummy",
                  rId: t,
                  Target:
                    I(e.options.hyperlink.url) ||
                    e.options.hyperlink.slide.toString(),
                }),
                (e.options.hyperlink._rId = t))
              : console.log(
                  "ERROR: 'hyperlink requires either: `url` or `slide`'"
                ));
      }));
  }
  Object.defineProperty(t.prototype, "bkgd", {
    get: function () {
      return this._bkgd;
    },
    set: function (e) {
      (this._bkgd = e),
        (this._background && this._background.color) ||
          (this._background || (this._background = {}),
          "string" == typeof e && (this._background.color = e));
    },
    enumerable: !1,
    configurable: !0,
  }),
    Object.defineProperty(t.prototype, "background", {
      get: function () {
        return this._background;
      },
      set: function (e) {
        (this._background = e) && Le(e, this);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "color", {
      get: function () {
        return this._color;
      },
      set: function (e) {
        this._color = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "hidden", {
      get: function () {
        return this._hidden;
      },
      set: function (e) {
        this._hidden = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "slideNumber", {
      get: function () {
        return this._slideNumberProps;
      },
      set: function (e) {
        (this._slideNumberProps = e), this._setSlideNum(e);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "newAutoPagedSlides", {
      get: function () {
        return this._newAutoPagedSlides;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.addChart = function (e, t, a) {
      return xe(this, ((a || {})._type = e), t, a), this;
    }),
    (t.prototype.addImage = function (e) {
      return Ce(this, e), this;
    }),
    (t.prototype.addMedia = function (e) {
      var t,
        a,
        A = this,
        o = e.x || 0,
        n = e.y || 0,
        r = e.w || 2,
        l = e.h || 2,
        c = e.data || "",
        i = e.link || "",
        s = e.path || "",
        p = e.type || "audio",
        d =
          e.cover ||
          "data:image/png;base64,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AAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKREkRUAAACwrUpLSwuGDRvWfMCAAS26du3avKysrLiioqKkZcuWzZs1a1bcvHnz0tLS0rJsNtusuLi4ebNmzUoLCgo+8/eijY2N9Zs3b66pra2tqqur21xTU1NdVVVVs2nTptqNGzdWbdiwoeYvf/nL5hUrVlQtWLBgw6xZs6pqamoaJQYAAEDaKYABAACIiIghQ4aUHnTQQW379u3bql27dq3at2/fpkWLFq2bN29eWVpa2qpZs2bNCwsLm2ez2fLCwsLyoqKi8sLCwtKknK+hoaG6vr6+qqGh4S91dXV/aWhoqNq8eXNVTU3NuqqqqvUbNmxYu2rVqjWrV69e99Zbb6177rnnPpgzZ06NTwYAAABJogAGAADIA8OGDWt+xBFHdBwwYECnLl26dGjdunXHFi1adCgtLe1YUlLSvlmzZq0KCgqK07yDwsLCssLCwrKIaPdp/zuNjY21mzdvXrdp06ZVNTU172/YsGHl2rVr31+2bNnKBQsWrHjyySffnzVrVpVPGAAAAE1Fpuexsd9HfaF+ZcSal0ptCAAAIAE6deqUPf744zvtueeeXbp3796lbdu2XSorKzuXlpZ2KS0t7VBYWFhhSztGQ0PDxpqampU1NTXL169fv+yDDz5Y9s477yybPXv2sj/96U8rVqxYUWdLAAAAbE9t9q6Jog4f/TUFMAAAQEJks9nMt7/97Y4jRozo1bdv397t2rXrXl5e3rWsrKxzcXFx+4gosKUmp7G2tnZVTU3Nso0bNy5btWrV0tdff/2tJ598cvG999672noAAADYFgpgAACAhPne977X6a9Fb/v27Xu1bNmyV1lZWa8kvXOXLauvr9/wl7/8ZdG6desWL1u2bNHChQsX/fGPf1w8derUjbYDAADAliiAAQAAmqhsNps59dRTuxx66KH9+/Tp87n27dv3Ly8v719UVOSRzXlq06ZNKzZu3Pj6+++//8abb775xqOPPvrG3XffvcpmAAAA+CsFMAAAQBNx6qmndvniF784qHfv3v3btWv3uYqKis8VFhaW2wxbUl9fv37Dhg1vfPDBB68vXrz4jccee2z+jTfeuNxmAAAA8pMCGAAAYBc45phjWn/rW9/aq3///kPatGnTv6Kiop9HOLO9NDQ0VG/cuPGtNWvWLFy4cOGcO+6445WHHnporc0AAACknwIYAABgJzjjjDO6f+lLX9qrV69eg1u3bj2orKysR0RkbIadJFddXb103bp18xcvXjz30UcffeXqq69+x1oAAADSRwEMAACwnZWWlhb86le/2u3QQw8d1r17931btmw5qLCwsMxmaEoaGhqqP/zww/nvvPPOzGeeeWbW2LFj36ipqWm0GQAAgGRTAAMAAGwHP/7xj7t+9atf3bdXr15D27Ztu1c2m21jKyRJXV3dmg8++OCVRYsWvfznP/95xh/+8IdltgIAAJA8CmAAAIBtcOKJJ7Y75ZRTDujXr9+w1q1bD81ms61shTSpq6tbt3bt2pfffPPNWbfccsvUe++9d7WtAAAANH0KYAAAgE+hoqKi4IILLhg0YsSI/bp27bpfy5YtB2YymUKbIR/kcrmGDz/8cP6777474/nnn59x4YUXvrZx40aPiwYAAGiCFMAAAAAf4/jjj2/7/e9//8D+/fsf2Lp1630KCgpKbAUiGhsbN61fv37eW2+9NeWGG2545u67715lKwAAAE2DAhgAAOB/ZLPZzAUXXPC5I4888sDu3bsfWFFRsVtEFNgMbFl1dfWSd999d8qsWbNmnnvuuS+vW7euwVYAAAB2DQUwAACQ10pLSwsuvfTSQYcccsjBXbt2HVFWVtbDVmDb1dbWrnr//fdfmDp16uRf/vKXL65evbreVgAAAHYeBTAAAJB3Bg0aVHrBBRd8fs899zywQ4cOBxQVFbWwFdj+Ghsba9euXTtrzpw5T59//vmTX3755WpbAQAA2LEUwAAAQF4YNmxY8/POO+/gIUOGHOZ9vrDz/W0ZfNFFFz07a9asKlsBAADY/hTAAABAarVq1arwyiuv3HfEiBEjO3TocFBhYWGZrcCu19DQUP3+++8/O2XKlIk/+clPZm7cuLHRVgAAALYPBTAAAJAqrVq1Kvztb3+7/3777Xd4x44dRxQWFpbbCjRdDQ0NG99///0pM2bMeOqHP/zhC8pgAACAz0YBDAAApMJZZ53V45vf/OaRvXr1GllaWtrVRiB5ampq3l28ePHEO++8c9LVV1/9jo0AAABsPQUwAACQWMOHDy+/6KKLvjB48OCjW7RoMdBGID0+/PDDV+fNmzfhvPPOe3L69Ol/sREAAIBPRwEMAAAkSqtWrQpvuOGGQ/bbb79/atOmzX6ZTCZrK5BeuVyubs2aNTNmzJjx2JgxYyavW7euwVYAAAA+ngIYAABIhB//+Mddv/e9732lZ8+e/1RcXNzWRiD/1NbWfvD2228/dssttzz029/+9l0bAQAA+L8UwAAAQJNVUVFRcO21137+4IMPPrZ169b7ZTKZAlsBIqJxzZo1M59//vnxp5122hR3BQMAAPx/CmAAAKDJOeWUUzqefvrpx/bu3ftL2Wy2jY0AH6e+vn7j0qVLH/vd7373x+uvv36ZjQAAAPlOAQwAADQJ2Ww2c+uttx5wyCGHnNC6deu9I8LdvsDWaFy7du1L06ZN+/OPfvSjZ1evXl1vJQAAQD5SAAMAALtU//79S6655pp/2nPPPY8tLy/vayPAZ1VTU7NswYIF488999wHp06dutFGAACAfKIABgAAdomf//znPU855ZQTu3btemRhYWGZjQDbW2NjY92KFSuevOWWW+689NJLF9kIAACQDxTAAADATuMxz8Cusn79+rlPP/30f5188slT6+rqcjYCAACklQIYAADY4fr27Vv8hz/84a+Pee5nI8CuUlNT8+68efPu/8EPfvDgwoULN9kIAACQNgpgAABghxkyZEjpNddc89XBgwefWFxc3MFGgKaitrZ21dy5c+/5yU9+8uc5c+bU2AgAAJAWWyqAPYoNAADYJqNHj+4wb968n06ZMuXRYcOGnaH8BZqa4uLi9sOGDTtjypQpj86bN++nJ510UntbAQAA0s4dwAAAwFY599xze33/+9//dufOnY/IZDJZGwGSIpfL1S1fvvzJG2644fbLLrvsbRsBAACSyiOgAQCAz+y8887r+53vfOfbHTt2PDyTyRTaCJBUuVyuYcWKFU/cdNNN//XrX/96sY0AAABJowAGAAC22WWXXTboG9/4xg9at249zDaAtFm7du2su++++9pzzjnnNdsAAACSQgEMAABsNcUvkE8UwQAAQJIogAEAgE9N8Qvks7Vr18665557rvv5z38+3zYAAICmaksFcGHlwOj6UV9orIqoWZG1PQAAyBO/+MUvet9xxx3nHHrooT8pLS3tYiNAPiotLe2y7777HvP973+/X1lZ2ZIpU6assxUAAKCpKetcHwXlH/01BTAAAOS5M844o/u99957zpe//OWflZeX94qIjK0AeS5TXl7e8+CDDx71/e9/v3dEvDVjxowPrQUAAGgqFMAAAMD/ceKJJ7a77777fjJq1Kh/KS8v7xOKX4B/lCkvL+99+OGHj/rWt77VfvXq1Qvnz59fbS0AAMCutqUC2DuAAQAgzwwdOrTs+uuvP6l///4nFRYWltkI20NjY2Ns2rQpqquro6amJurr62PTpk2xefPmqK+vj+rq6qivr4/NmzfHpk2boqGhYZv/fxUWFkZJSUk0a9YsioqKoqysLIqKiqJZs2ZRUlISRUVFUVpa+r9/FRQUCIjtoqGhoeq11167a8yYMffMmTOnxkYAAIBdZUvvAFYAAwBAnujUqVP2nnvuGbXXXnudnM1mK22Ej9PQ0BAbN26MDRs2/J+/Nm7cGBs3boyamprYtGlTbNq0KWpqaqK2trbJnqe4uDhKSkqitLT0f/9eUVERFRUV0aJFi//zV0VFRRQWFvog8LHq6urWvvjii7eceOKJf169enW9jQAAADubAhgAAPLcXXfdddAXv/jF00tLS7vZRn7L5XKxYcOGWLt2baxbty7Wrl37d3+tW7cuNmzYkPd7atGiRbRu3TpatWoVrVu3jjZt2vzvf27dunW0aNHCh4morq5e+sgjj1zzne98Z6ptAAAAO5MCGAAA8tTVV189+MQTTzyzoqJioG3kj8bGxli5cmUsX748Pvjgg1i9evX//n3t2rXR2NhoSZ9RYWFhtGrVKtq1axdt27b937937tw5OnTo4LHTeWbDhg3z77333qvOPPPMebYBAADsDApgAADIM1/72tfaXHrppad27979qIjQRKVUQ0NDrFq1KlasWBHvv//+//595cqVTfqRzGlXXFwcHTp0iI4dO0bnzp2jY8eO0alTp2jXrp1HS6dYLpdrfOeddx76+c9/fv2ECRPW2QgAALAjKYABACBP9OrVq9ldd931jT322OM7hYWFZTaSHh9++GG88847sXTp0njvvfdixYoVsXr16mhoaLCchCgsLIz27dtHp06dolu3btG9e/fo3r27x0mnTENDQ9W8efNu++Y3v/nHJUuWbLYRAABgR1AAAwBAHrjrrrtG/NM//dOZJSUlXWwj2davXx9Lly6Nd955539L3w8//NBiUqqysvJ/y+C//tWqVSuLSbiamppljz322G9Gjx49xTYAAIDtTQEMAAAp9qtf/arPD3/4w5+1atVqL9tIno0bN8aSJUvirbfeikWLFsV7770XmzZtspg8V1JSEl27do0+ffpE3759o3fv3lFeXm4xCbRu3bqXr7322ivGjh27yDYAAIDtRQEMAAApNGjQoNI77rjju7vttttJBQUFWRtJhtWrV8ebb74ZixcvjiVLlsTy5cujsbHRYtiigoKC6Ny5c/Tu3Tt69+4d/fr1i7Zt21pMQjQ2Nta98cYbd33rW9+6ff78+TU2AgAAfFYKYAAASJHS0tKCBx988Jj99tvvn7PZbBsbaboaGhri7bffjrfeeisWLFgQS5YscXcv201FRUX06tUr+vbtG3379o2ePXtGYWGhxTRhdXV1a2bMmHHjV77ylYdqamr85gcAALDNFMAAAJASp59+erdf/vKX51ZWVu5jG03T6tWr47XXXouFCxfGm2++GRs3brQUdooWLVpE3759Y8CAATFw4EB3CDdh69evf/E//uM//vPqq69+xzYAAIBtoQAGAICEGzRoUOm99977w969ex+byWTc4teErF+/PubNmxcLFiyIN954Q+FLk9GiRYvo169fDBgwIPbYY4+orKy0lCYkl8s1LF68eNyJJ554rcdCAwAAW0sBDAAACXbNNdcMOemkk35RVlbWyzZ2vVwuF++++27MnTs3XnvttViyZIl3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B7lcrm7y5Mm//vKXv/yIbQAAwK63pXcAK4ABAMg7paWlBTNnzjyzT58+x9vG39uwYUOMGzcuZsyY4VHPQF7KZDKx3377xde//vWoqKiwkH+waNGiP+27775X1dTUeCwEAADsQgpgAAD4H926dctOnjz5V506dRppG/9fLpeLqVOnxp///OfYuHGjhQB5r6KiIkaNGhX777+/x0L/g+XLlz9+6KGHXvLuu+/W2QYAAOwaWyqAvQMYAIC8MXz48PInnnjiynbt2o2wjf/vnXfeiWuvvTaee+652Lx5s4UARMTmzZtjzpw58dprr0XPnj2jRYsWlvI/Kioq+n7rW98aMnXq1Ofee+89f3AAAMAusKV3ACuAAQDIC9/+9rc73n777X9o0aLFANv4b1VVVXHXXXfFvffeG+vXr7cQgI+wbt26eP7552P9+vWx2267RVFRkaVERElJSefjjjvuoA8++GDKK6+88hcbAQCAnUsBDABAXjv//PP7XXzxxX8oKSnpbBv/bfr06XHttdfGokWLLAPgU3jnnXdi2rRp0bp16+jc2R8nERHZbLbyC1/4whElJSUvTp48eY2NAADAzqMABgAgb/3ud7/b60c/+tFVRUVFrWwjYs2aNXHzzTfHpEmTora21kIAtkJtbW289NJL8c4770Tfvn2jtLQ073dSWFhYNnz48C/26dNn4UMPPbTMpwQAAHYOBTAAAHnp1ltv3f+b3/zmfxYWFjbP913kcrl4/vnn4/rrr4/ly5f7cAB8BitXroxp06ZFRUVFdOvWLTKZTF7vo6CgIDto0KBDBw0atOiBBx54xycEAAB2vC0VwJmex8Z+H/WF+pURa17ym6wAACTTww8//KXDDjvsXzKZTN6/rPGDDz6I22+/Pd544w0fDIDtbMCAAfGtb30r2rRpk/e7yOVyjVOmTPn1yJEjH/LJAACAHavN3jVR1OGjv6YABgAgdV555ZXTPve5z30r3/fQ0NAQjz32WDz++ONRV1fngwGwg2Sz2Tj66KPjC1/4QhQUFOT9Pl5//fU79tprr9/7ZAAAwI6jAAYAIC9ks9nMyy+/fFafPn2Oz/ddvPvuu3HbbbfFe++954MBsJN069YtvvOd70S3bt3yfhdLliy5f5999rmypqam0ScDAAC2PwUwAACpV1paWjBr1qyzevfufVw+7yGXy8WTTz4ZDz74oLt+AXaBbDYbxxxzTBxxxBF5fzfw0qVLHxg6dOjlSmAAANj+FMAAAKRar169mk2ePHlsu3btDsrnPaxcuTJuueWWePvtt30oAHaxnj17ximnnBIdOnTI6z2sXr16yiGHHPIvS5Ys2exTAQAA28+WCuDCyoHR9aO+0FgVUbMia3sAADRpQ4cOLXvqqacub9Omzf75uoNcLhfPPPNMXH/99bF27VofCoAmYP369TFlypQoKSmJnj17RiaTycs9NG/evPtJJ500ZPLkyc+sWLHCoykAAGA7KetcHwXlH/01BTAAAIk1ZMiQ0kceeeSKVq1a7Z2vO6iuro7bb789nnjiiWhs9IRNgKaksbEx5s+fH++//34MGDAgstn8/DlLaWlpp6997WuDn3rqqadXrlxZ75MBAACfnQIYAIDUOfTQQ1s8+OCDv2/ZsuUe+bqDOXPmxNVXX+2RzwBN3PLly+OFF16Ijh075u0joUtLSzudcMIJ+7/00ktPv/3227U+FQAA8NkogAEASJVhw4Y1v++++37TsmXLQfl4/vr6+hg/fnz88Y9/jNpaP0MHSILNmzfHiy++GJs3b47ddtstCgoK8m4HxcXFbY866qg9n3vuuaeXL1/ucdAAAPAZKIABAEiNI488snLcuHG/b9GixcB8PP97770XV111VcyZM8eHASCBFi1aFC+//HL069cvWrRokXfnLykp6XDcccftP2fOnGcWLVq0yScCAAC2jQIYAIBUOPLIIyvvvPPO35aXl++Wj+d/+umn48Ybb4wPP/zQhwEgwf7yl7/ECy+8ECUlJdGrV6+8O3+zZs3aHHXUUfspgQEAYNspgAEASLxjjz227W233faH5s2b98m3s1dVVcXNN98cTz31VDQ2NvowAKRAY2NjzJ8/P5YtWxYDBgyIZs2a5dX5mzVr1uaYY4458M0333xm4cKFNT4RAACwdRTAAAAk2qGHHtritttuuzofy9+33347rrnmmli8eLEPAkAKvf/++/HKK69Enz59orKyMq/Ons1mK4888sh9Zs6c+dTSpUs3+zQAAMCnpwAGACCxjjjiiJb33nvvteXl5f3y6dy5XC4mTZoUN998c1RVVfkgAKRYVVVVTJ06NbLZbPTp0ycymUzenL24uLjtV7/61c+/8sorTy1evLjWpwEAAD4dBTAAAIl06KGHtrj33nt/l2/lb3V1ddx0000xefLkyOVyPggAeSCXy8WCBQvi3Xffjd133z2y2fz5mUyzZs1aH3300fvNmDHjSXcCAwDAp6MABgAgcYYOHVo2fvz4qysqKgbk07mXLVsWV111lUc+A+SplStXxiuvvBKf+9znoqKiIm/O3axZszZHH3300GeeeebJFStW1PkkAADAlimAAQBIlCFDhpQ++uij17Rs2XL3fDr31KlT49prr42NGzf6EADksaqqqpg+fXq0bds2unTpkjfnLikpaT9q1KihTz755JMrV66s90kAAICPt6UCuMB6AABoSjp16pSdMGHCv1dWVu6RL2dubGyMcePGxR133BF1dW56AiCitrY2br755hg/fnw0NjbmzbkrKyv3mDBhwr9369bNXQkAALCNFMAAADQZrVq1Kpw+ffolbdq02T9fzlxdXR2/+93vYtKkSd73C8DfyeVy8fjjj8fvf//7qK6uzptzt2nTZv8pU6Zc0qpVq0KfAgAA2HoKYAAAmoSKioqC2bNnX9KuXbuD8uXMS5cujYsuuijmz5/vAwDAx3r11VfjoosuiqVLl+bNmdu1a3fQ7Nmz/72iosLPrgAAYCu5iAYAoEmYOXPmz9q1a3dIvpz35ZdfjiuuuCLWrVsnfAA+0bp16+KKK66Il19+OW/O3K5du4Nnzpz5M+kDAMDWUQADALDLvfjii2N69OgxKh/Omsvl4oEHHogbbrghamtrhQ/Ap1ZbWxs33HBDPPDAA3nz2oAePXqMevHFF8dIHwAAPj0FMAAAu9SkSZO+NnDgwFPy4ax1dXVx8803x8SJE73vF4BtksvlYuLEiXHLLbdEXV1dXpx54MCBJ0+aNOlr0gcAgE9HAQwAwC7z6KOPHnXggQeekw9nXbduXfz617+OWbNmCR6Az2zmzJnx61//Ol9eJZA58MADz3n00UePkjwAAHyywsqB0fWjvtBYFVGzImtDAADsEDfeeOO+Rx999EWZTKYw7Wddvnx5XHXVVbFy5UrBA7DdbNiwIWbPnh0DBw6MioqKtB8307179/179uz56sMPP7xc+gAA5LuyzvVRUP7RX1MAAwCw011xxRV7fPe7372qoKCgWdrPOmfOnPjtb38bGzduFDwA2111dXVMmzYtOnfuHB07dkz1WTOZTOHuu+9+eJs2bV6aNGnSKukDAJDPFMAAADQZZ5xxRvef/exnvy0sLCxP+1knTJgQd999d9TX1wsegB2moaEhXnrppchms9G3b99UnzWTyRTttddeB/3lL395dubMmRukDwBAvlIAAwDQJBx00EEVf/jDH64pLi7ulOZz5nK5eOCBB+Kxxx4TOgA77c+eBQsWRF1dXfTv3z8ymUxqz1pQUFBywAEHDJs+ffqkpUuXbpY+AAD5aEsFcIH1AACwMwwaNKj0vvvuu7qsrKxXms9ZV1cX1113XUyaNEnoAOx0EydOjOuvvz7q6upSfc6ysrJef/rTn67u379/idQBAODvKYABANjhKioqCh577LGLKyoqBqb5nNXV1XHNNdfE7NmzhQ7ALvPKK6/ElVdeGVVVVak+Z4sWLQZOnDhxbEVFhZ9vAQDA33CBDADADjdz5syftW3b9sA0n3HdunVx2WWXxRtvvCFwAHa5xYsXx2WXXRZr165N9TnbtWt34MyZM38mcQAA+P8UwAAA7FBPPvnkqB49eoxK8xlXrVoVV1xxRSxfvlzgADQZK1asiCuuuCJWrlyZ6nP26NFj1KRJk0ZJHAAA/lth5cDo+lFfaKyKqFmRtSEAALbZjTfeuO+XvvSlCzOZTGp/8fDdd9+NK6+8MtatWydwAJqc6urqmDVrVvTv3z8qKytTe85u3boN79mz57yHH37Yb2MBAJAXyjrXR0H5R39NAQwAwA5x3nnn9T311FOvLigoKE7rGV977bW45pprorq6WuAANFmbN2+OGTNmRI8ePaJ9+/apPGMmkykYNGjQIYWFhVOee+45v5UFAEDqKYABANipjjrqqFb/8R//8YdmzZq1SusZX3755bj++uujrq5O4AA0eQ0NDfHSSy9Fp06dolOnTqk8Y0FBQXbYsGGfnz9//qQ33nhjk9QBAEizLRXA3gEMAMB21a1bt+wNN9zwnyUlJR3TesYpU6bEjTfeGPX19QIHIDHq6+vjxhtvjKlTp6b2jCUlJZ1uuOGG/+jWrZu7GgAAyFsKYAAAtqunn376XyorK/dI6/kmTZoUd955ZzQ2NgobgMRpbGyMO+64I5588snUnrGysnLw008//UtpAwCQrxTAAABsN88///w3unTp8k9pPd/EiRNj3LhxkcvlhA1AYuVyubj//vtTXQJ36dLlS88+++yJ0gYAIB95BzAAANvFTTfdNPzII488L5PJZNJ4vsceeyzGjx8vaABS47XXXotmzZpF3759U3m+zp0779urV695Dz/88DJpAwCQNlt6B7ACGACAz+wXv/hF7x/+8IdXFxQUNEvj+R544IF45JFHBA1A6ixYsCDq6upiwIABqTtbJpPJDBo06ODGxsbnpk6dul7aAACkiQIYAIAd5oADDqj43e9+99tmzZq1TeP5xo0bF5MmTRI0AKm1aNGi2Lx5cwwcODB1ZysoKMjut99+w5577rnH33vvvc3SBgAgLbZUAHsHMAAA2yybzWbuvPPOfyktLe2exvNNmDBB+QtAXpg0aVI89NBDqTxbaWlpj3vuuedfstlsRtIAAOQDBTAAANvs+eef/06HDh0OTePZHn744Xj44YeFDEDeeOSRR+LPf/5zKs/WoUOHw5599tlvSxkAgHygAAYAYJvcd999hw8ePPjUNJ7t/vvvjwkTJggZgLzz2GOPxX333ZfKs+25554/+NOf/nSYlAEASDvvAAYAYKudccYZ3ceMGXN5QUFBcdrONnHixHjkkUeEDEDeWrx4cWSz2ejbt2/ajpbp06fPvn/5y18mz5w5c4OkAQBIsi29A1gBDADAVhk2bFjzG2+88Q/NmjVrl7azPfroo6l99CUAbI2FCxdGUVFR9OvXL1XnKigoKD7wwAP3e/LJJx9dsWJFnaQBAEiqLRXAHgENAMBWuffee39ZWlraPW3nevzxx+PBBx8UMAD8jz//+c8xceLE1J2rtLS0x3333fdLCQMAkFYKYAAAPrVJkyaN6tSp0xEpPFeMHz9ewADwD8aPHx+TJ09O3bk6der0hUmTJn1VwgAApJFHQAMA8Kmcd955fU888cR/z2QyRWk618yZM+Puu+8WMAB8jNdeey06duwYnTt3TtW5unbtuk9BQcHzzz333DopAwCQNN4BDADAZ3LEEUe0vOKKK67NZrOVaTrXyy+/HDfffHPkcjkhA8DHyOVyMXv27OjSpUt06tQpNefKZDJF++yzz/CpU6c+9u67726WNAAASeIdwAAAbLNsNpu55ZZb/q2kpKRjms61YMGCuPnmm6OxsVHIAPAJGhsb4+abb44333wzVecqLS3tcvfdd5+fzWYzUgYAIC0UwAAAbNGkSZO+3rZt2wPTdKZly5bFDTfcEPX19QIGgE+prq4urr322li+fHmqztWuXbsDH3/88VESBgAgLTwCGgCAj3XZZZcN+upXvzo2k8mk5hcH33///bjyyiujqqpKwACwlerq6uLll1+OIUOGRHl5eWrO1aVLl31LS0unPvPMM2ukDABAEngENAAAW61///4lJ5988q8ymUxRWs60YcOG+P3vfx8bN24UMABso40bN8bvfve7VP15WlBQkP3hD394ft++fYslDABA4q9vrQAAgI/y4IMPnl1WVtYrLeeprq6O3/zmN7Fq1SrhAsBntGrVqrjyyiujuro6NWcqKyvr8/DDD58lXQAAkk4BDADA/zF+/Pgju3XrdnRazlNfX5/KdxYCwK60fPnyuO6666K+vj41Z+rRo8dXx40bd4R0AQBIMgUwAAB/53vf+16nI4444py0nCeXy8Vtt90Wb7zxhnABYDt7/fXX47bbbotcLpeaMx155JHnfvvb3+4oXQAAkkoBDADA/6qoqCi4+OKLLywsLCxPy5nGjx8fs2bNEi4A7CCzZs2Khx56KDXnKSwsrPj1r399QUVFhZ+bAQCQSC5kAQD4XxMnThxdWVk5OC3nef7552PixImCBYAd7LHHHosXXnghNeeprKzc89FHHz1RsgAAJFFh5cDo+lFfaKyKqFmRtSEAgDxxwQUX7DZq1KgLM5lMYRrO8+qrr8Ytt9ySqkdSAkBT/7O3d+/e0a5du1Scp2PHjkNzudxzU6ZMWSddAACamrLO9VHwMc/wcwcwAADRt2/f4h//+McXZzKZVPwG4HvvvRc33HBDNDY2ChcAdpKGhoa47rrrYtmyZak4T0FBQfbss88e27dv32LpAgCQqGtZKwAAYPz48T8qKyvrkYazbNiwIX7/+99HbW2tYAFgJ9u0aVP8/ve/j40bN6biPGVlZb3GjRs3RrIAACSJAhgAIM/ddNNNw/v06XN8Gs5SX18f1157baxdu1awALCLrFmzJq699tqor69PxXn69ev3jd///vdDJQsAQFIogAEA8thBBx1Uceyxx/5rRGTScJ477rgjFi9eLFgA2MUWLVoUd955Z1qOU/CNb3zj34YNG9ZcsgAAJOIC1goAAPLXzTfffFZxcXG7NJxl4sSJMX36dKECQBMxbdq0mDRpUirOUlJS0unOO+88Q6oAACSBAhgAIE/913/914FdunT5UhrO8tprr8Wf//xnoQJAEzN+/PhYsGBBKs7SrVu3o2+66abhUgUAoKlTAAMA5KEvfelLlV/5yld+lYazrFixIq6//vpobGwULAA0MY2NjXHdddfFihUr0nCczHHHHfergw46qEKyAAA0ZQpgAIA8dPXVV5+ezWYrk36OmpqauPbaa2PTpk1CBYAmatOmTXHttddGTU1N4s+SzWbb3njjjT+RKgAATZkCGAAgz9x6663Du3Tp8uWknyOXy8Utt9wSK1euFCoANHErV66MW2+9NXK5XOLP4lHQAAA0dQpgAIA8MnTo0LKvfvWrv0jDWSZMmBBz584VKgAkxJw5c+Kxxx5LxVlGjRr1i6FDh5ZJFQCApkgBDACQR+64444fFRcXd0z6OV5++eV45JFHBAoACfPQQw+l4he4SkpKOt5xxx0/lCgAAE2RAhgAIE9cfvnlu/fs2XNU0s/xwQcfxB133JGKR0gCQL7J5XJx2223xZo1axJ/lp49ex57+eWX7y5VAACaGgUwAEAe6NatW/a73/3uv2YymURf/9XX18cNN9wQ1dXVQgWAhKqqqoobb7wx6uvrE32OTCZT8N3vfvdX3bp1y0oVAICmRAEMAJAHxo8ff0pZWVmvpJ/jnnvuiaVLlwoUABJuyZIlcd999yX+HGVlZT3Hjx9/ikQBAGhKFMAAACn385//vOeAAQNGJ/0c06dPjylTpggUAFJi8uTJMWPGjMSfY8CAAaN//vOf95QoAABNhQIYACDFstls5qyzzjo3k8kk+tGEK1asiLvvvlugAJAyd911V6xYsSLRZ8hkMtmzzjrr3Gw2m5EoAABNgQIYACDFxo0b98XKysq9knyG2trauOGGG6K2tlagAJAyf/1zfvPmzYk+R2Vl5V7jxo0bKVEAAJoCBTAAQEoNHz68/OCDDz4t6ee4//77Y/ny5QIFgJRavnx5jBs3LvHnGDFixI+HDRvWXKIAAOxqCmAAgJS69dZbT8tms22TfIYZM2bEc889J0wASLnJkyfHzJkzE32G4uLitrfffvtp0gQAYFdTAAMApNBVV121R48ePb6S5DOsXLky7rrrLmECQJ64++6744MPPkj0GXr27PnVK664Yg9pAgCwKymAAQBSprS0tOAb3/jGT5N8rdfY2Bi333679/4CQB6pqamJ2267LRobG5N8jIJvfvObZ5aWlvqZGwAAu+6i1AoAANJlwoQJX6uoqBiQ5DOMHz8+Fi1aJEwAyDNvvvlmPPjgg4k+Q4sWLQY9+OCDx0gTAIBdRQEMAJAiRx55ZOWwYcN+kOQzzJ07N5544glhAkCemjhxYixYsCDRZxg+fPiPjjjiiJbSBABgV1AAAwCkyBVXXHFyUVFRRVLnr6qqijvvvDNyuZwwASBP5XK5uP3226O6ujqxZygqKmrxm9/85mRpAgCwKyiAAQBS4vzzz+/Xu3fv45J8httvvz0+/PBDYQJAnlu3bl3cfvvtiT5D7969jz///PP7SRMAgJ1NAQwAkALZbDZz6qmn/jyTyST2+m769OkxZ84cYQIAERExe/bsmDFjRmLnz2QyBaeeeurPs9lsRpoAAOxMCmAAgBT44x//eERlZeXgpM6/du3auPfeewUJAPyde+65J9atW5fY+SsrKwf/6U9/+oIkAQDYmRTAAAAJ17dv3+JDDjnkR0k+w9133x01NTXCBAD+Tk1NTdx9992JPsPBBx/8o759+xZLEwCAnUUBDACQcHfdddc3S0pKOiV1/smTJ8e8efMECQB8pLlz58azzz6b2PlLSko63nPPPd+SJAAAO4sCGAAgwb70pS9VDhw48KSkzr9mzZoYP368IAGALXrggQdizZo1iZ2/f//+Jx111FGtJAkAwM6gAAYASLArrrji1MLCwvIkzp7L5eK2226LTZs2CRIA2KJNmzbFbbfdFrlcLpHzFxYWll1++eU/kCQAADuDAhgAIKF+8Ytf9O7evftXkjr/s88+G2+88YYgAYBP5Y033ojnn38+sfN369bt6F/96ld9JAkAwI6mAAYASKgf/vCHP8pkMom8nvvggw/igQceECIAsFXGjRsX69atS+TsmUym4NRTT/2xFAEA2NEUwAAACXTdddcNa9eu3YFJnD2Xy8Udd9wRtbW1ggQAtsqmTZvizjvvTOz8bdq02f+mm27aT5IAAOxICmAAgIQpLS0t+NrXvnZ6Uud/4YUXYuHChYIEALbJq6++GjNmzEjs/Mccc8zpFRUVfiYHAMAO42ITACBhbr/99oMrKip2S+LsGzZsiHHjxgkRAPhM7r///qiqqkrk7OXl5X3/67/+6wgpAgCwoyiAAQASpKKiouCwww47Nanz33vvvYn9YS0A0HRs2LAh7r///sTOf9BBB/1zq1atCiUJAMCOoAAGAEiQ+++//+iysrKeSZx9zpw58dJLLwkRANguXnjhhViwYEEiZy8tLe32xz/+8StSBABgR1AAAwAkRN++fYv33Xfff07i7LW1tXHvvfcKEQDYru6+++6oq6tL5Oz77bffKf379y+RIgAA25sCGAAgIW6++eZRxcXFbZM4+yOPPBJr164VIgCwXa1atSoee+yxRM6ezWbb3njjjV+TIgAA25sCGAAgAYYOHVq21157fSeJs7/33nvxxBNPCBEA2CEmTpwYK1asSOTsQ4YM+c7QoUPLpAgAwPakAAYASIBrr732xKKiosqkzZ3L5eKee+6JxsZGIQIAO0R9fX3cddddkcvlEjd7UVFR5bXXXnuCFAEA2J4UwAAATdwBBxxQMWDAgG8kcfYZM2bEW2+9JUQAYId6880348UXX0zk7AMGDPjG8OHDy6UIAMD2ogAGAGjirrrqqhOKiooqkjb3pk2b4oEHHhAgALBT3H///VFbW5u4uYuKilpcffXV7gIGAGC7UQADADRhBx10UEX//v0Teffvww8/HB9++KEQAYCdYv369TFhwoREzj5w4MBvHHDAARVSBABge1AAAwA0Yf/5n/95bGFhYfOkzb1q1aqYPHmyAAGAnerpp5+O1atXJ27uwsLC8ssuu2yUBAEA2B4UwAAATdQBBxxQMWjQoNFJnP3uu++O+vp6IQIAO1V9fX3cddddiZx99913/+bQoUPLpAgAwGelAAYAaKIuv/zyYwsLC8uTNvfcuXNjwYIFAgQAdokFCxbE3LlzEzd3UVFRi9/97ndflyAAAJ+VAhgAoAkaOnRo2aBBgxL37t+6urr405/+JEAAYJf605/+FHV1dYmbe/fdd//mkCFDSiUIAMBnoQAGAGiCfvOb33ylqKioZdLmfu655xL53j0AIF1Wr14dzz33XOLmLioqann11VcfLUEAAD4LBTAAQBPTq1evZoMHD/5m0uaurq6ORx55RIAAQJPwyCOPRHV1deLmHjJkyLe6deuWlSAAANtKAQwA0MTcdNNNxxQXF7dN2twTJkyIqqoqAQIATUJVVVUifzmtuLi43a233uouYAAAtpkCGACgCWnVqlXhXnvtdVLS5l61alU8++yzAgQAmpTJkyfHqlWrEjf30KFDR7dq1apQggAAbAsFMABAE3LLLbccXlJS0jlpcz/44INRX18vQACgSamvr48HH3wwcXOXlJR0vummmw6VIAAA20IBDADQRGSz2cwBBxzw7aTNvWjRonjppZcECAA0SS+99FIsXrw4cXOPGDHiO9lsNiNBAAC2lgIYAKCJuOaaa/YuLy/vm7S5H3roocjlcgIEAJqkXC6XyLuAy8vL+1111VV7SRAAgK2lAAYAaCK+8pWvfDdpM8+bNy8WLlwoPACgSVu4cGG8+uqrrg8BAMgLCmAAgCbgsssuG1RZWblPkmbO5XIxfvx44QEAifDAAw8k7qklrVu33veSSy7pLz0AALaGAhgAoAkYNWrUCUmbefbs2bFs2TLhAQCJsGzZsnjllVcSN/cJJ5xwovQAANgaCmAAgF3sn//5nzt37NjxiCTN3NjYGA888IDwAIBEGT9+fDQ0NCRq5k6dOn1h9OjRHaQHAMCnpQAGANjFfvSjH30tk8kk6rps2rRpsWrVKuEBAImyatWqeOGFFxI1cyaTKfzpT386SnoAAHxaCmAAgF1o0KBBpX369Plqkmaur6+PCRMmCA8ASKQJEyZEXV1dombu27fvV/r27VssPQAAPg0FMADALnTZZZcdXlRUVJGkmadOnRpr164VHgCQSOvXr48pU6YkauaioqLK3/zmN0dIDwCAT0MBDACwi2Sz2cy+++57UpJmrqurc/cvAJB4jz76aOLuAt5///1PymazGekBAPBJFMAAALvI1VdfPbSsrKx3kmaeMmVKbNiwQXgAQKJt2LAhnn/++UTNXFZW1ueqq67aS3oAAHwSBTAAwC7y5S9/+bgkzVtfXx8TJ04UHACQCo8//nji7gL+0pe+dLzkAAD4JApgAIBdYPTo0R3atm07IkkzT5s2LdatWyc8ACAVPvzww5g+fXqiZm7fvv2I0aNHd5AeAABbogAGANgFfvrTn47KZDKFSZm3vr4+HnnkEcEBAKnyyCOPRH19fWLmzWQyhT/96U+/JjkAALZEAQwAsJN16tQp26dPn6OTNLO7fwGANFq3bl1MmzYtUTP36dPnmE6dOmWlBwDAx1EAAwDsZFddddUB2Wy2dVLmbWxsjEmTJgmOVOvYsWN06OCJmgD5aNKkSdHY2JiYebPZbOurrrrqAMkBAPBxFMAAADvZiBEjvp6keV988cVYtWqV4Ei1Ll26xIUXXhinnXZadO3a1UIA8siqVavipZdecj0JAEBqKIABAHaiM844o3tlZeXeSZk3l8vFxIkTBUdeyGQyMXjw4PjVr34VY8aMcUcwQB55/PHHI5fLJWbeysrKvc8444zukgMA4KMogAEAdqJTTjnlqxGRScq8CxYsiPfee09w5JVMJhN77713XHjhhTFmzJho3769pQCk3HvvvRcLFy5M1B9X/3NdCQAA/4cCGABgJ+nVq1ezXr16fTlJM3v3L/nsr0XwBRdcECeffHK0bdvWUgBSLGnXPb169fpyr169mkkOAIB/pAAGANhJrrjiioOLiopaJmXeBN4JAztEYWFhDB8+PC688MIYPXp0VFZWWgpACi1YsCCWLVuWmHmLiopaXnnllYdIDgCAf6QABgDYSYYPH/6VJM2btHfhwY5WVFQUI0aMiEsuuSRGjx4dLVu2tBSAFMnlcvH4448naub99tvvK5IDAOAfKYABAHaC0aNHd6isrByalHnXrl0bL7/8suDgI/y1CL744ovjhBNOiBYtWlgKQEq89NJLsW7dusTMW1lZudfo0aM7SA4AgL+lAAYA2AlOP/30o5J07fXMM89EQ0OD4GALiouL47DDDouxY8fGqFGjoqyszFIAEq6hoSGeeeaZJI1c8D/XmQAA8P8vEq0AAGDHymazmX79+n05KfPW1tbGlClTBAefUnFxcYwcOTIuvfTSGDVqVJSWlloKQII9//zzUVtbm5h5+/Xr9+VsNpuRHAAAf6UABgDYwX7zm9/sWVJS0jkp886YMSOqq6sFB1uppKQkRo4cGZdcckkcffTRUVJSYikACVRdXR0zZ85M0p8/na+44orBkgMA4K8UwAAAO9gXvvCFLyVl1lwuF08//bTQ4DNo3rx5HHXUUXHJJZfEyJEjI5vNWgpAwjz11FORy+USM++RRx75ZakBAPBXCmAAgB1oyJAhpZ07dz4iKfO+/vrrsWLFCsHBdlBeXh6jRo2KSy+9VBEMkDArVqyI119/PTHzdunS5fD+/ft79AQAABGhAAYA2KHGjh17aGFhYWJeCOruX9j+KioqYtSoUXHxxRfH4YcfHkVFRZYC4LpouyosLGz+H//xHwdLDQCACAUwAMAOteeeex6ZlFnXrl0b8+bNExrsIK1atYrjjz8+LrroohgxYkQUFPh2DKApmzdvXqxZsyYx8+61115HSg0AgAgFMADADnPMMce0bt269b5Jmfe5556LxsZGwcEO1qZNmxg9enRcfPHFimCAJqyxsTGee+65JP35MvyYY45pLTkAAPykAQBgBznzzDMPz2Qyibje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FpafffbZvaQFAJA+CmAAgE9p//3375+EOV9//XVhAXmjvLw8Ro0aFf/+7/8eI0eOjGw2aymA67FP6fOf//xAaQEApI8CGADgU+rRo8fuTX3G2traePvtt4UF5J2KiooYNWpUXHzxxXH44Yc3+XdvAum2ePHiRLySo1evXoOkBQCQPgpgAIBPqXXr1k3+DoklS5ZEQ0ODsIC81apVqzj++OPj4osvjhEjRkRBgW97gZ2voaEhlixZ0uTnbNOmjQIYACCFfCcMAPApDBkypLR58+a9m/qcb775prAAIqJ169YxevToGDt2rCIYcF32MZo3b95n0KBBpdICAEgX3wEDAHwKp556av9MJtPkr53eeustYQH8jTZt2sTo0aPjvPPOi+HDhyuCAddlfyOTyRT84Ac/+Jy0AADSxXe+AACfwuDBg5v84/Hq6+tj0aJFwgL4CJ06dYqTTz45/u3f/i323nvvyGQylgLsUIsXL07Eqzn23HPPgdICAEgXBTAAwKfQpUuXAU19xnfeeSfq6uqEBbAFnTt3jjFjxiiCgR2utrY23n333SRc53oPMABAyiiAAQA+hZYtW/Zv6jN6/DPAp9elS5cYM2ZMnHvuuTF48GALAfL2+iwJ17kAAGwdBTAAwCcYPnx4eUlJSeemPqfHPwNsvV69esVpp50W55xzTvTvrwMB8u/6rLS0tPPw4cPLpQUAkB4KYACAT/Ctb31rt4ho8s8IXbx4sbAAtlGfPn3irLPOinPOOSd22203CwG2i4T8gl7m29/+dj9pAQCkhwIYAOAT7L777k2+CVi7dm1s2LBBWACfUZ8+feLss8+OM888M3r27GkhwGfy4Ycfxrp165r8nAMHDlQAAwCkSJEVAABsWadOnZr8D8TefvttQQFsRwMGDIgBAwbEggULYvz48bF06VJLAbb5Oq1Vq1audwEA2GkUwAAAn6CyslIBDJCnBgwYEP3794958+bFQw89FO+++66lAFtlyZIlsddeezX1613PvgcASBEFMADAFnTq1CnbvHnzXk19ziVLlggLYAfJZDIxePDg2GOPPeLll1+OBx98MFauXGkxQGqu05o3b967Xbt2RatXr66XGABA8nkHMADAFowZM6ZnJpPJNuUZGxsbPZoUYCfIZDKx9957x4UXXhhjxoyJ9u3bWwrwiZYuXRqNjY1NesaCgoLsqaee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k8nE7NmzY+LEibFmzRoNAXif/VNSzJo161kTAwBongTAAAC70O233/7KOeecszU/P78022sdMGBAtG/f3tWu0My9+uqrMWnSpFi1apVmALyPjh07xgEHHJCIWhsbG6u/8Y1v/NXUAACaJwEwAMAutHLlyob169fP6tat2+hsrzWVSsXhhx8ekyZNMjhohubMmROTJ0+OJUuWaAbAh3D44YdHKpVKRK3r16+fVVFR0WhqAADNU54WAADsWq+++mpirts77LDDDAyamTfffDP+/d//PX7yk58IfwE+pFQqFSNGjEhMva+88sozpgYA0Hw5AQwAsIvddNNNz5166qnV+fn5rbO91m7dukX//v1j4cKFBgc5btmyZfHYY4/F/PnzNQPgIzrggAOic+fOiai1sbFxy4033jjL1AAAmi8BMADALrZy5cqG8vLyGT179vx0Euo9+uijBcCQw5YvXx7jxo0T/AJ8wv1SUpSXlz9TXl7eYGoAAM2XABgAYDeYMWPGUxdccEEiAuAhQ4ZE69ato7q62uAgh6xcuTImTJgQc+fOjUwmoyEAH1ObNm3i0EMPTUy9zz777FOmBgDQvPkGMADAbvDVr371lYaGhk1JqLWgoCCOOOIIQ4McsW7duvj5z38ed955Z8yZM0f4C/AJjRw5MvLz8xNRa0NDw8abbrrpVVMDAGjenAAGANgNKisrm1atWjW9T58+5ySh3qOPPjqefPJJQREk2Pr16+Oxxx6L2bNn+3cZYBdJpVIxatSoxNS7cuXKadXV1WmTAwBo3pwABgDYTaZNm5aY6/c6duwYAwYMMDRIoA0bNsSvf/3r+Nd//dd49dVXhb8Au9CAAQOiY8eOian36aefftLUAAAQAAMA7CZf+9rX5tTX11ckpd6jjjrK0CBBqqqq4v77749vf/vb8eKLL0ZTU5OmAOxiRx55ZGJqra+vX/eNb3zjdVMDAMAV0AAAu0ltbW16xYoVT++///6fT0K9hx56aLRt2zaqqqoMD7LYli1bYsqUKfHcc8/F9u3bNQRgN2nbtm0MGTIkMfUuX778qdraWtc/AwDgBDAAwO70xz/+cUJSas3Pz4/jjjvO0CBL1dTUxKOPPhq33XZb/OUvfxH+Auxmxx57bOTn5yel3Myvf/3rCaYGAECEABgAYLe66667llZXV89PSr1HH310tGjRwuAgi7wd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qATAAABZ4umnn968fPnyxF3xN3r06GjXrp0BAgBZqUOHDnH88ccnru5ly5ZNmD59+hYTBADgoxIAAwBkkbvvvvtPmUymKUk1FxYWxumnn254AEBWOvPMMxP3yYpMJtN41113/dH0AAD4OATAAABZ5Be/+MWatWvXTkta3UcccUT06tXLAAGArNK7d+847LDDEld3eXn5X+6///51JggAwMchAAYAyDIPP/zwn5JWcyqVijPPPNPwAICsMmbMmEilUomr+8EHH/yT6QEA8HEJgAEAsszXv/71NzZs2DAraXUPHDgwDj74YAMEALLCoEGDYsCAAYmru6KiYuatt966wAQBAPi4BMAAAFlo3Lhxv01i3WPGjIm8PFtMAGDvysvLizFjxiSy9j//+c+/NUEAAD7RflgLAACyz/XXXz+nqqrqr0mru1evXnHUUUcZIACwVx1zzDHRvXv3xNW9adOmV2666aa5JggAwCchAAYAyFJ/+tOf7k1i3WPGjInS0lIDBAD2ijZt2sRZZ52VyNofeOCBe00QAIBPSgAMAJClbrrpprlJPAVcXFwcZ555pgECAHvFWWedFS1btkxc3Zs2bXrl5ptvnmeCAAB8UgJgAIAsNm7cuF8lse5Ro0ZF7969DRAA2KP69OkTI0eOTGTtjz322K9MEACAXUEADACQxcaOHTu7qqrqb0mrO5VKxfnnnx+pVMoQAYA9tv/4/Oc/n8j9R2Vl5d+uueaav5kiAAC7ggAYACDLTZ069bdJrLtv374xZMgQAwQA9ojDDjsssTeQTJ48+TcmCADAriIABgDIcpdeeumLVVVVryax9s9//vNRXFxsiADAblVaWhrnn39+Imuvqqr66+WXX/6SKQIAsKsIgAEAEuChhx76WRLrLisri9NPP90AAYDd6qyzzoqSkpIklp753e9+91MTBABgVxIAAwAkwA033DB3w4YNs5JY+3HHHRd9+vQxRABgt+jbt28cddRRiay9oqJi1te//vU3TBEAgF1JAAwAkBA///nPfxoR6aTVnUql4vOf/3zk5dl6AgC7Vn5+flx00UWRSqWSWH76F7/4xX+bIgAAu5q3cAAACXHHHXe8tW7duulJrL13795xzDHHGCIAsEudcMIJ0b1790TWXl5e/pc77rjjLVMEAGBXEwADACTI3XfffW8mk2lKYu1nnXVWtG3b1hAB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onv37vEv//IvccABBzSrdWcymaYnnnji9s997nPPeAoAAODDEQADAJBYDz/88NJjjjlmY+/evY+KiGZzFKq0tDSGDx8eq1evjvXr13sQAHLcwIED45prrol27do1t6VnZsyY8YOzzjprqqcAAAA+PAEwAACJdv/99795zDHHVO6zzz5HRDMKgVu0aBGHHXZYtGzZMhYuXBjpdNrDAJBjCgoK4pxzzonzzz8/WrRo0dyWn37uuefuOuWUUyZ4EgAA4KMRAAMAkHi///3v5w8bNmxF3759j2lO10GnUqno27dvDB06NBYvXhxbtmzxMADkiJ49e8YNN9wQgwcPblbf+434x7XPU6ZM+fbpp58+2ZMAAAAfnQAYAICc8OCDDy4ZNmzYin79+jWrEDgionXr1nHEEUdEfX19LF261MMAkGCpVCpOOOGEuOKKK6JNmzbNbv07wt9vnXPOOX/xNAAAwMcjAAYAIGc89NBDS4YNG7a8X79+xza3EDg/Pz8OPvjg6NWrV8yfPz8aGho8EAAJU1JSEpdffnmccMIJkZ+f3+zWn8lkGp944olvffazn53maQAAgI9PAAwAQE556KGHlo4cOXJdnz59RqWa252ZEdG1a9cYNmxYLFu2LCorKz0QAAnRt2/fuO6662K//fZrluvPZDLpp59++rvnnHPO054GAAD4ZATAAADknD/96U+LDj300KX7779/s7sOOiKiuLg4jjzyyCgpKYk333wz0um0hwIgSxUUFMRnP/vZuPDCC6OkpKRZ9iCdTjc88sgjt5x//vnTPREAAPDJCYABAMhJDz/88NId3wQelUqlmt09mqlUKvr06RMHH3xwLFy4MLZt2+ahAMgynTt3jrFjx8bQoUOjGV5aERH/CH+feOKJ2y+88MLnPBEAALBrCIABAMhZDz300JIePXq8NmjQoGPz8vJaNMcetG3bNkaNGhVNTU2xZMkSDwVAFkilUjF69Oi48soro0OHDs22D01NTdt++9vf/stll132oqcCAAB2HQEwAAA5bdKkSeXdu3efM3jw4GYbAufn58eAAQOiV69esWDBgti+fbsHA2Avad26dVx66aVx/PHHR35+frPtQ2NjY/WvfvWrf7nuuute81QAAMCuJQAGACDnTZ48eW1jY+OMI4444uiCgoKS5tqHrl27xqhRo2Lbtm2xcuVKDwbAHpRKpWLUqFExduzY6NWrV7PuRX19/fo77rjjK9/61rcWejIAAGDXEwADANAsPP/881UbNmx45rjjjjuqsLCwrLn2obCwMAYNGhT77bdfLF68OGpraz0cALtZ+/bt44orrogTTzwxCgub9/uU2tralTfffPPVP/nJT1Z7MgAAYPcQAAMA0Gz87W9/27p27doZJ5xwwsjCwsK2zbkXnTp1ipEjR0Z1dbXTwAC70ciRI+Pqq6+OHj16NPte1NTULL/hhhuu/e1vf7vOkwEAALuPABgAgGbltdde2zpv3rynTznllKFFRUWdmnMvCgsL49BDD4399tsvFi1a5DQwwC709qnfk08+udmf+o2I2Lx587yLL774unHjxm30dAAAwO71fgFwat9zYsTOftC4LmLjq610DwCAxOrVq1fhs88++69du3Y9QTciGhoaYurUqTF58uRobGzUEICPqaCgIE499dQYPXq04HeH8vLyp4499tjvrly5skE3AABg9+swrDYKuuz8ZwJgAAByWuvWrfNeeumlm/fdd9+zdeMfVq9eHffff38sWbJEMwA+ov322y8uuugi1z2/w8KFC38/fPjwnzY0NGR0AwAA9gwBMAAAzd7zzz9/8aGHHnp1RKR0IyKTycTMmTPjz3/+c9TV1WkIwAcoKSmJ8847L0aMGBGplL9Kdki//PLL9xx77LEPagUAAOxZ7xcA+wYwAADNwn333Tfn+OOP39yrV6/DQwgcqVQqevfuHcOHD49169ZFRUWFhwTgPRxyyCExduzY6N+/v/B3h0wm0/jMM8/828knnzxONwAAYM97v28AC4ABAGg2fve7370xePDgJf369Ts6lUrl60hEcXFxjBgxInr06BFLly6N2tpaTQHYoUOHDvGFL3whzjzzzCguLtaQHZqammoeeOCBWz73uc9N1w0AANg7BMAAALDDww8/vKygoOC54cOHH1FQUFCqI//QrVu3OO6446K0tDQWL14cTU1NmgI0Wy1btoxzzjknLr300ujevbuGvENtbe2K22677arbbrvtDd0AAIC9RwAMAADv8Oyzz25avHjx0yeddNKQoqKiTjryD3l5edGnT58YOXJkbN26NVatWqUpQLNz+OGHx1e+8pUYMGBA5OXlacg7VFVV/e3CCy+8/oEHHvDdAAAA2MsEwAAA8C7z58+vefbZZ58+44wz+hcX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OigOOOCAKCoq0pQs0djYuGXmzJk/PvPMMyc2NDS4XgAAAPjQBMAAAJADjjzyyNY/+9nPrujbt++5EZGnI9mluro6Fi5cGPPnz4958+ZFZWWlprBXtGvXLg455JAYMGBA9O/fP1q39nsjWSj91ltv/fmqq676xaxZs6q1AwAA+KgEwAAAkEN++ctfjhgzZsyNrVq16q0b2SmdTsfKlStj0aJFsXDhwli8eHFs27ZNY9gtSkpKol+/ftG/f//Yf//9o1evXpGX53dEslVNTc3yRx999EdXXnnlK7oBAAB8XAJgAADIMd26dSt8+OGHPzd48ODL8vPzbdyzXCaTiTVr1sTChQtj0aJFsWjRotiyZYvG8LGUlZVF//79/xn6du/ePVKplMZkuaampprXXnvtV2PGjHmgoqKiUUcAAIBPQgAMAAA56rjjjiv7r//6r8tdC508mzdvjuXLl8eKFSti+fLlsXjx4qipqdEY/pfi4uLo169f9O7dO/bZZ5/Yd999o6ysTGMSJJPJpJcsWfLn66677pfTp0/3mx8AAMAuIQAGAIAc99Of/nTIueeee3NpaWlf3UimxsbGWLlyZSxdujSWLVsWy5cvj3Xr1kUmk9GcZiKVSkWXLl1in332iT59+kSfPn2iV69eUVBQoDkJtXXr1sUPPvjgj6699tq/6wYAALArCYABAKAZaNeuXf64cePOGTp06BUFBQWtdST56uvrY+XKlf88KbxixYpYu3ZtpNNpzUm4vLy86Nq1a+yzzz7//KdXr17RsmVLzckBjY2NW/7617/+4pxzznm0srKySUcAAIBdTQAMAADNyIknntjmnnvuuXzfffcdk0qlHB3MMdu3b481a9bEmjVrYu3atbF27dooLy+PDRs2CIazUF5eXnTs2DG6desWXbt2jW7dukW3bt2iR48eUVhYqEE5JpPJNC5ZsuRR1z0DAAC7mwAYAACaoa9+9av7Xnfdddd16NDhCN3IfY2Njf8MhNetWxfr1q2LioqKWLduXWzbtk2DdrPS0tLo3LnzP//p0qVLdO3aNbp27eoK52Ziw4YNM//rv/7rxz/60Y+W6wYAALC7CYABAKAZ++UvfznirLPOuq64uNj3gZupmpqaWL9+/T//qaioiMrKyqisrIxNmzZFY2OjJn2AgoKCaN++fbRr1y7at28fHTt2jC5dukSnTp2ic+fOUVxcrEnN1NatW98aP378PVdcccXLugEAAOwpAmAAAGjm2rVrl//ggw+eOWLEiCsLCwvb6gjvtHnz5n+GwZs2bYrKysqorq6OLVu2xJYtW6K6ujqqq6sjk8nk3NpTqVS0bt06WrduHWVlZdGmTZsoLS39X2Fvu3btok2bNh4U/peGhobKl1566efnnHPO+OrqavevAwAAe5QAGAAAiIiIoUOHFt97770XHHjggRfk5+c7ssiHlk6n/xkEV1dXR01Nzfv+k8lkora2NtLpdNTX10dTU1PU1dXt0u8U5+XlRcuWLSM/Pz+KiooiLy8vWrVqFalUKoqLi3f6T0lJSbRq1eqfgW9paWnk5eUZMB9aU1NTzYIFC/745S9/+Y+zZ8+u0REAAGBvEAADAAD/y2mnndb2rrvuurRPnz5n5+XlFeoIe9LbgfDbtm/f/r7XUBcUFESLFi3++b/fDnxhT8pkMg1LliwZd8stt/xq0qRJVToCAADsTQJgAABgp0477bS2d95554X777//5wTBAP9XJpNpWLhw4QO33nrrHwS/AABAtni/ADi/7UHRc2c/SG+LqC33/gcAAHLZokWL6u69995X0un0swcddFCnkpKS3roC8A8VFRUz/7//7/+77aKLLpq6aNGiOh0BAACyRXH3xsgr3fnPBMAAAEDMnDmz8u67736qqalpWr9+/Ypbt27dN5VKpXQGaG4ymUx6zZo1U+65555/Peeccx6cOXNmpa4AAADZRgAMAAB8KDNnzqz88Y9//Gw6nZ4uCAaak7eD37vvvvtfzz///McEvwAAQDYTAAMAAB+JIBhoLgS/AABAEgmAAQCAj+XtILisrOyFvn37diwuLu4VEYJgIBdkKioqnrv33nu/PWbMmEcEvwAAQJK8XwCc2vecGLGzHzSui9j4aivdAwAA/unqq6/u8ZWvfOX8Pn36nJWXl9dCR4CkSafT9UuXLh3/X//1Xw/84he/WKMjAABAEnUYVhsFXXb+MwEwAADwkZ1xxhntb7/99rMPPPDA8/Pz81vrCJDtmpqaqhcsWPDgd77znUcmTpzotC8AAJBoAmAAAGC3GD58eMkPf/jDzwwePPjioqKijjoCZJv6+voNr7322u9vvPHGx2fPnl2jIwAAQC4QAAMAALvV0KFDi++5556zDjnkkPOKioq66giwt9XV1a19/fXXH7z++uvHC34BAIBcIwAGAAD2iFatWuXdc889w0455ZTzO3bseJSOAHtYZsOGDbOmTJny4PXXX/9qbW1tWksAAIBcJAAGAAD2uH/913/tf/7555/dq1ev0/Ly8lroCLC7pNPp+pUrV05+4IEHHvnOd76zSEcAAIBcJwAGAAD2mjPOOKP97bfffvYBBxzw2YKCgjY6AuwqjY2NVW+++eafv/e97z06YcKETToCAAA0FwJgAABgrxs+fHjJ97///dGDBg0aU1paur+OAB9XdXX1wtdee+3Rr371q1Nfe+21Wh0BAACaGwEwAACQVb761a/ue8EFF3y6b9++ZxUUFLTWEeCDNDY2bnnrrbfG/+EPf5j4ox/9aLmOAAAAzZkAGAAAyEpDhw4t/sEPfnDy4MGDz27dunV/HQHerbq6+s2XX375weuuu+7ppUuXbtcRAAAAATAAAJDlCgsLU3ffffeQ0aNHn9G1a9fj8vLyinQFmq90Ol1XXl4+bcqUKROuvfbav+sIAADA/yYABgAAEqNPnz4t/v3f/33UyJEjz2rfvv2nIiKlK9AsZDZt2vTXF1544bGvfe1rzzntCwAA8N4EwAAAQCJddNFFXa6++uqTDzzwwLNbtmzZTUcg99TV1a1ZsGDBuJ/+9KdP3n///et0BAAA4IMJgAEAgETr1q1b4d13333k4YcffmqHDh2OyMvLK9QVSK50Ot2wcePGWbNmzZp8/fXXz6qoqGjUFQAAgA9PAAwAAOSMo48+uvWtt956/CGHHHJKu3btBkdEnq5AIqQrKytfmzdv3uQ777xz+owZM6q1BAAA4OMRAAMAADnpuOOOK/vGN75x/CGHHHJa27ZtB4bvBUO2yVRVVc2dN2/epO9///vTpk+fvkVLAAAAPjkBMAAAkPNuu+22vmedddZJffr0Oa5Vq1a9dQT2ntra2uXLly+f/uijjz51xx13vKUjAAAAu5YAGAAAaFa+9KUvdbv44ouP7t+//wlOBsMekamqqpq7cOHCv/z+97+fcd9995VrCQAAwO4jAAYAAJqtSy65pOtll112jDAYdrl0VVXVvIULF/7lV7/61bO/+93v1moJAADAniEABgAAiIirr766x/nnnz9q//33P7JNmzZDUqlUga7Ah5fJZBoqKyv/vnjx4uf+9Kc/zbr33ntX6woAAMCeJwAGAAB4l379+hV97WtfGzRy5MhRPXv2PLaoqKizrsD/VV9fv37VqlXPvPDCC8/9+7//+5zFixfX6woAAMDeJQAGAAB4H61bt8678847Bx599NFHde/efURpaen+4apomq/M1q1bF69Zs+bF5557btY3v/nNOdXV1WltAQAAyB4CYAAAgI9g8ODBrcaOHXvI8OHDD+vevfvw1q1bHxACYXJXprq6+s01a9a88sorr7z8k5/8ZN5rr71Wqy0AAADZSwAMAADwCVx//fX7nHHGGYf169dvePv27Yfm5+e31hWSrLGxsXrjxo2vvvXWWy+PHz/+lR//+McrdQUAACA5BMAAAAC70Je//OUe55xzzvA+ffoM7tix45CioqKuukI2q6+vX7t27doXFy9ePGfixImv3Xvvvat1BQAAILkEwAAAALvRl7/85R6f+cxnBvfr129Qly5dDm/ZsqVAmL2qrq5u7bp16wS+AAAAOUoADAAAsIe0atUq75prrtnn2GOPPXi//fY7uH379oeUlpb2TaVS+brDbpKuqalZtnHjxnlvvfXW3GeffXbef/3Xfy2vra1Naw0AAEBuEgADAADsRQceeGDLq6+++oAhQ4Yc3LNnz4Pbtm17sGuj+biampqqq6qqXi8vL583Z86ceb/85S/nvfjii1t1BgAAoPkQAAMAAGSZoUOHFn/xi1/cf9CgQQf26NHjwHbt2h3YqlWr3qlUKk932CFdU1OzvLKycsHq1asXzJkzZ8Gf//znJTNmzKjWGgAAgOZNAAwAAJAAxx13XNkFF1xw4MEHH3xA165dDywtLd23pKRkn1QqVag7uS2TyTRs27ZtRXV19dJ169YtfOONNxZOmDBh4YQJEzbpDgAAAO8mAAYAAEiw8847r+OJJ57Yp3///vt16dKlT5s2bfZr3bp1v/z8/GLdSZampqaa6urqxZs3b16ybt26pQsXLlzy9NNPL33ooYc26A4AAAAflgAYAAAgx7Rr1y7/kksu6TFkyJCe++67b89OnTr1Kisr61VcXNyzZcuW3VKpVL4u7R2ZTKaprq6uvKamZtWWLVtWVlRUrFy6dOnK2bNnr7r//vvXVFZWNukSAAAAn4QAGAAAoBnp1KlTwec+97luQ4cO7bnPPvv0aNeuXafWrVt3Li4u7tqyZcvORUVFnfLy8lro1MeTTqe319fXr6+rq6uoqalZW11dvb6y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AACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoMY3JP//9K8My551lzpAk293a7QAAAAAAAAD8iIw3r+SL7TpPxuSt4/ibJJuz20QDBgAAAAAAAHhzrJPp6NvHYcyyjLl7dJTPbl/Jp6sPLufSsM+5ec7q5YOrF0OeP/SVaAAAAAAAAIA3weH7u6zfm79dWDIMSw6225w785vsx3XyzasOby5ssz69c4sAAAAAAAAAr9n69C6bC9sT93a7rKdnORin5Otxynzi1JQcfiwCAwAAAAAAALxO69O7HH68TaaT98cp85R8vbp3Nfszv8q0LHn7xMF1sjk/ZzUPmZ/MmWefhAYAAAAAAAD4oayPdjn7223Gn7x6ZrXPnetX8mBKkpv3cufDd/Pufn5FL56SzcVtNheT3dNt8tQlAwAAAAAAAHyv1sm0ySv/9XtsNWZ3I/lHkgzHi7/4XY7WYz5yiwAAAAAAAAA/Ivtcv/3nPEyS1fHa42t5+vNLyX7JoRsCAAAAAAAAePPt1/nbV3/KvePn1Xc371/NYxEYAAAAAAAA4M0yTHk2rvNo2WdzvHZqzN9v/SF3vju3evng/at5fPDLPDu1yuGyZHSVAAAAAAAAAK/XOGe4ueSvZ4e8M8xZbVe5ceuPufvy3Oqkw4+v5emDX+fuuTlLhhwsEYIBAAAAAAAAXpclGR8OuXP0TR4cPM/9z/+SRyfNDf/1TZezOp/87KdjzizJZkhO7edMy/w/nAUAAAAAAADg/zaMWcZkP8/ZLsmLacr2/MV8+cnvs/tP5/4FmLjAq1ifcioAAAAASUVORK5CYII=",
        f = e.objectName
          ? I(e.objectName)
          : "Media ".concat(
              A._slideObjects.filter(function (e) {
                return e._type === N.media;
              }).length
            ),
        u = { _type: N.media };
      if (!s && !c && "online" !== p)
        throw new Error(
          "addMedia() error: either `data` or `path` are required!"
        );
      if (c && !c.toLowerCase().includes("base64,"))
        throw new Error(
          "addMedia() error: `data` value lacks a base64 header! Ex: 'video/mpeg;base64,NMP[...]')"
        );
      if (d && !d.toLowerCase().includes("base64,"))
        throw new Error(
          "addMedia() error: `cover` value lacks a base64 header! Ex: 'data:image/png;base64,iV[...]')"
        );
      if ("online" !== p || i)
        return (
          (t =
            e.extn ||
            (c ? c.split(";")[0].split("/")[1] : s.split(".").pop()) ||
            "mp3"),
          (u.mtype = p),
          (u.media = s || "preencoded.mov"),
          (u.options = {}),
          (u.options.x = o),
          (u.options.y = n),
          (u.options.w = r),
          (u.options.h = l),
          (u.options.objectName = f),
          "online" === p
            ? ((a = g(A)),
              A._relsMedia.push({
                path: s || "preencoded" + t,
                data: "dummy",
                type: "online",
                extn: t,
                rId: a,
                Target: i,
              }),
              (u.mediaRid = a),
              A._relsMedia.push({
                path: "preencoded.png",
                data: d,
                type: "image/png",
                extn: "png",
                rId: g(A),
                Target: "../media/image-"
                  .concat(A._slideNum, "-")
                  .concat(A._relsMedia.length + 1, ".png"),
              }))
            : ((e = A._relsMedia.filter(function (e) {
                return (
                  e.path &&
                  e.path === s &&
                  e.type === p + "/" + t &&
                  !e.isDuplicate
                );
              })[0]),
              (a = g(A)),
              A._relsMedia.push({
                path: s || "preencoded" + t,
                type: p + "/" + t,
                extn: t,
                data: c || "",
                rId: a,
                isDuplicate: !(null == e || !e.Target),
                Target:
                  null != e && e.Target
                    ? e.Target
                    : "../media/media-"
                        .concat(A._slideNum, "-")
                        .concat(A._relsMedia.length + 1, ".")
                        .concat(t),
              }),
              (u.mediaRid = a),
              A._relsMedia.push({
                path: s || "preencoded" + t,
                type: p + "/" + t,
                extn: t,
                data: c || "",
                rId: g(A),
                isDuplicate: !(null == e || !e.Target),
                Target:
                  null != e && e.Target
                    ? e.Target
                    : "../media/media-"
                        .concat(A._slideNum, "-")
                        .concat(A._relsMedia.length + 0, ".")
                        .concat(t),
              }),
              A._relsMedia.push({
                path: "preencoded.png",
                type: "image/png",
                extn: "png",
                data: d,
                rId: g(A),
                Target: "../media/image-"
                  .concat(A._slideNum, "-")
                  .concat(A._relsMedia.length + 1, ".png"),
              })),
          A._slideObjects.push(u),
          this
        );
      throw new Error("addMedia() error: online videos require `link` value");
    }),
    (t.prototype.addNotes = function (e) {
      return (
        this._slideObjects.push({ _type: N.notes, text: [{ text: e }] }), this
      );
    }),
    (t.prototype.addShape = function (e, t) {
      return we(this, e, t), this;
    }),
    (t.prototype.addTable = function (e, t) {
      return (
        (this._newAutoPagedSlides = (function (A, e, t, o, a, n, r) {
          var l,
            c,
            i,
            s = [A],
            p = t && "object" == typeof t ? t : {};
          if (
            ((p.objectName = p.objectName
              ? I(p.objectName)
              : "Table ".concat(
                  A._slideObjects.filter(function (e) {
                    return e._type === N.table;
                  }).length
                )),
            null === e || 0 === e.length || !Array.isArray(e))
          )
            throw new Error(
              "addTable: Array expected! EX: 'slide.addTable( [rows], {options} );' (https://gitbrent.github.io/PptxGenJS/docs/api-tables.html)"
            );
          if (e[0] && Array.isArray(e[0]))
            return (
              (l = []),
              e.forEach(function (e) {
                var a = [];
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      var t = {
                          _type: N.tablecell,
                          text: "",
                          options:
                            "object" == typeof e && e.options ? e.options : {},
                        },
                        e =
                          ("string" == typeof e || "number" == typeof e
                            ? (t.text = e.toString())
                            : e.text &&
                              ("string" == typeof e.text ||
                              "number" == typeof e.text
                                ? (t.text = e.text.toString())
                                : e.text && (t.text = e.text),
                              e.options) &&
                              "object" == typeof e.options &&
                              (t.options = e.options),
                          (t.options.border = t.options.border ||
                            p.border || [
                              { type: "none" },
                              { type: "none" },
                              { type: "none" },
                              { type: "none" },
                            ]),
                          t.options.border);
                      Array.isArray(e) ||
                        "object" != typeof e ||
                        (t.options.border = [e, e, e, e]),
                        t.options.border[0] ||
                          (t.options.border[0] = { type: "none" }),
                        t.options.border[1] ||
                          (t.options.border[1] = { type: "none" }),
                        t.options.border[2] ||
                          (t.options.border[2] = { type: "none" }),
                        t.options.border[3] ||
                          (t.options.border[3] = { type: "none" });
                      [0, 1, 2, 3].forEach(function (e) {
                        t.options.border[e] = {
                          type: t.options.border[e].type || J,
                          color: t.options.border[e].color || K,
                          pt:
                            "number" == typeof t.options.border[e].pt
                              ? t.options.border[e].pt
                              : Z,
                        };
                      }),
                        a.push(t);
                    })
                  : (console.log(
                      "addTable: tableRows has a bad row. A row should be an array of cells. You provided:"
                    ),
                    console.log(e)),
                  l.push(a);
              }),
              (p.x = R(p.x || (0 === p.x ? 0 : F / 2), "X", a)),
              (p.y = R(p.y || (0 === p.y ? 0 : F / 2), "Y", a)),
              p.h && (p.h = R(p.h, "Y", a)),
              (p.fontSize = p.fontSize || P),
              (p.margin = 0 === p.margin || p.margin ? p.margin : _),
              "number" == typeof p.margin &&
                (p.margin = [
                  Number(p.margin),
                  Number(p.margin),
                  Number(p.margin),
                  Number(p.margin),
                ]),
              p.color || (p.color = p.color || w),
              "string" == typeof p.border
                ? (console.warn(
                    "addTable `border` option must be an object. Ex: `{border: {type:'none'}}`"
                  ),
                  (p.border = null))
                : Array.isArray(p.border) &&
                  [0, 1, 2, 3].forEach(function (e) {
                    p.border[e] = p.border[e]
                      ? {
                          type: p.border[e].type || J,
                          color: p.border[e].color || K,
                          pt: p.border[e].pt || Z,
                        }
                      : { type: "none" };
                  }),
              (p.autoPage = "boolean" == typeof p.autoPage && p.autoPage),
              (p.autoPageRepeatHeader =
                "boolean" == typeof p.autoPageRepeatHeader &&
                p.autoPageRepeatHeader),
              (p.autoPageHeaderRows =
                void 0 === p.autoPageHeaderRows ||
                isNaN(Number(p.autoPageHeaderRows))
                  ? 1
                  : Number(p.autoPageHeaderRows)),
              (p.autoPageLineWeight =
                void 0 === p.autoPageLineWeight ||
                isNaN(Number(p.autoPageLineWeight))
                  ? 0
                  : Number(p.autoPageLineWeight)),
              p.autoPageLineWeight &&
                (1 < p.autoPageLineWeight
                  ? (p.autoPageLineWeight = 1)
                  : p.autoPageLineWeight < -1 && (p.autoPageLineWeight = -1)),
              (c = oe),
              o &&
                void 0 !== o._margin &&
                (Array.isArray(o._margin)
                  ? (c = o._margin)
                  : isNaN(Number(o._margin)) ||
                    (c = [
                      Number(o._margin),
                      Number(o._margin),
                      Number(o._margin),
                      Number(o._margin),
                    ])),
              p.colW
                ? ((t = l[0].reduce(function (e, t) {
                    var a;
                    return (
                      null != (a = null == t ? void 0 : t.options) &&
                      a.colspan &&
                      "number" == typeof t.options.colspan
                        ? (e += t.options.colspan)
                        : (e += 1),
                      e
                    );
                  }, 0)),
                  "string" == typeof p.colW ||
                  "number" == typeof p.colW ||
                  (p.colW &&
                    Array.isArray(p.colW) &&
                    1 === p.colW.length &&
                    1 < t)
                    ? ((p.w = Math.floor(Number(p.colW) * t)), (p.colW = null))
                    : p.colW &&
                      Array.isArray(p.colW) &&
                      p.colW.length !== t &&
                      (console.warn(
                        "addTable: mismatch: (colW.length != data.length) Therefore, defaulting to evenly distributed col widths."
                      ),
                      (p.colW = null)))
                : p.w
                ? (p.w = R(p.w, "X", a))
                : (p.w = Math.floor(a._sizeW / F - c[1] - c[3])),
              p.x && p.x < 20 && (p.x = M(p.x)),
              p.y && p.y < 20 && (p.y = M(p.y)),
              p.w && p.w < 20 && (p.w = M(p.w)),
              p.h && p.h < 20 && (p.h = M(p.h)),
              l.forEach(function (a) {
                a.forEach(function (e, t) {
                  "number" == typeof e || "string" == typeof e
                    ? (a[t] = {
                        _type: N.tablecell,
                        text: String(a[t]),
                        options: p,
                      })
                    : "object" == typeof e &&
                      ("number" == typeof e.text
                        ? (a[t].text = a[t].text.toString())
                        : (void 0 !== e.text && null !== e.text) ||
                          (a[t].text = ""),
                      (a[t].options = e.options || {}),
                      (a[t]._type = N.tablecell));
                });
              }),
              (i = []),
              p && !p.autoPage
                ? (m(A, l),
                  A._slideObjects.push({
                    _type: N.table,
                    arrTabRows: l,
                    options: Object.assign({}, p),
                  }))
                : (p.autoPageRepeatHeader &&
                    (p._arrObjTabHeadRows = l.filter(function (e, t) {
                      return t < p.autoPageHeaderRows;
                    })),
                  ye(l, p, a, o).forEach(function (e, t) {
                    r(A._slideNum + t) ||
                      s.push(
                        n({
                          masterName: (null == o ? void 0 : o._name) || null,
                        })
                      ),
                      0 < t &&
                        (p.y = M(
                          p.autoPageSlideStartY || p.newSlideStartY || c[0]
                        ));
                    var a = r(A._slideNum + t);
                    (p.autoPage = !1),
                      m(a, e.rows),
                      a.addTable(e.rows, Object.assign({}, p)),
                      0 < t && i.push(a);
                  })),
              i
            );
          throw new Error(
            "addTable: 'rows' should be an array of cells! EX: 'slide.addTable( [ ['A'], ['B'], {text:'C',options:{align:'center'}} ] );' (https://gitbrent.github.io/PptxGenJS/docs/api-tables.html)"
          );
        })(
          this,
          e,
          t,
          this._slideLayout,
          this._presLayout,
          this.addSlide,
          this.getSlide
        )),
        this
      );
    }),
    (t.prototype.addText = function (e, t) {
      return (
        Pe(
          this,
          "string" == typeof e || "number" == typeof e
            ? [{ text: e, options: t }]
            : e,
          t,
          !1
        ),
        this
      );
    });
  var Be = t;
  function t(e) {
    (this.addSlide = e.addSlide),
      (this.getSlide = e.getSlide),
      (this._name = "Slide ".concat(e.slideNumber)),
      (this._presLayout = e.presLayout),
      (this._rId = e.slideRId),
      (this._rels = []),
      (this._relsChart = []),
      (this._relsMedia = []),
      (this._setSlideNum = e.setSlideNum),
      (this._slideId = e.slideId),
      (this._slideLayout = e.slideLayout || null),
      (this._slideNum = e.slideNumber),
      (this._slideObjects = []),
      (this._slideNumberProps =
        null != (e = this._slideLayout) && e._slideNumberProps
          ? this._slideLayout._slideNumberProps
          : null);
  }
  function Te(m, b) {
    return p(this, void 0, void 0, function () {
      var g;
      return d(this, function (e) {
        switch (e.label) {
          case 0:
            return (
              (g = m.data),
              [
                4,
                new Promise(function (t, a) {
                  var A,
                    e,
                    o,
                    n,
                    r = new D.default(),
                    l = 2 * (g.length - 1) + 1,
                    c =
                      1 <
                      (null == (c = null == (c = g[0]) ? void 0 : c.labels)
                        ? void 0
                        : c.length),
                    i =
                      (r.folder("_rels"),
                      r.folder("docProps"),
                      r.folder("xl/_rels"),
                      r.folder("xl/tables"),
                      r.folder("xl/theme"),
                      r.folder("xl/worksheets"),
                      r.folder("xl/worksheets/_rels"),
                      r.file(
                        "[Content_Types].xml",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>  <Default Extension="xml" ContentType="application/xml"/>  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>  <Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>  <Override PartName="/xl/tables/table1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/>  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>\n'
                      ),
                      r.file(
                        "_rels/.rels",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>\n'
                      ),
                      r.file(
                        "docProps/app.xml",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Macintosh Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>1</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="1" baseType="lpstr"><vt:lpstr>Sheet1</vt:lpstr></vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>\n'
                      ),
                      r.file(
                        "docProps/core.xml",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>PptxGenJS</dc:creator><cp:lastModifiedBy>PptxGenJS</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">' +
                          new Date().toISOString() +
                          '</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">' +
                          new Date().toISOString() +
                          "</dcterms:modified></cp:coreProperties>"
                      ),
                      r.file(
                        "xl/_rels/workbook.xml.rels",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/></Relationships>'
                      ),
                      r.file(
                        "xl/styles.xml",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="0" formatCode="General"/></numFmts><fonts count="4"><font><sz val="9"/><color indexed="8"/><name val="Geneva"/></font><font><sz val="9"/><color indexed="8"/><name val="Geneva"/></font><font><sz val="10"/><color indexed="8"/><name val="Geneva"/></font><font><sz val="18"/><color indexed="8"/><name val="Arial"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><dxfs count="0"/><tableStyles count="0"/><colors><indexedColors><rgbColor rgb="ff000000"/><rgbColor rgb="ffffffff"/><rgbColor rgb="ffff0000"/><rgbColor rgb="ff00ff00"/><rgbColor rgb="ff0000ff"/><rgbColor rgb="ffffff00"/><rgbColor rgb="ffff00ff"/><rgbColor rgb="ff00ffff"/><rgbColor rgb="ff000000"/><rgbColor rgb="ffffffff"/><rgbColor rgb="ff878787"/><rgbColor rgb="fff9f9f9"/></indexedColors></colors></styleSheet>\n'
                      ),
                      r.file(
                        "xl/theme/theme1.xml",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="4472C4"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="5B9BD5"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="Yu Gothic Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="DengXian Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="Yu Gothic"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="DengXian"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>'
                      ),
                      r.file(
                        "xl/workbook.xml",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x15" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><fileVersion appName="xl" lastEdited="7" lowestEdited="6" rupBuild="10507"/><workbookPr/><bookViews><workbookView xWindow="0" yWindow="500" windowWidth="20960" windowHeight="15960"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="0" concurrentCalc="0"/></workbook>\n'
                      ),
                      r.file(
                        "xl/worksheets/_rels/sheet1.xml.rels",
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Target="../tables/table1.xml"/></Relationships>\n'
                      ),
                      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'),
                    s =
                      (m.opts._type === v.BUBBLE || m.opts._type === v.BUBBLE3D
                        ? (i +=
                            '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'
                              .concat(l, '" uniqueCount="')
                              .concat(l, '">'))
                        : m.opts._type === v.SCATTER
                        ? (i +=
                            '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'
                              .concat(g.length, '" uniqueCount="')
                              .concat(g.length, '">'))
                        : (i = c
                            ? ((A = g.length),
                              g[0].labels.forEach(function (e) {
                                return (A += e.filter(function (e) {
                                  return e && "" !== e;
                                }).length);
                              }),
                              i +
                                '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'
                                  .concat(A, '" uniqueCount="')
                                  .concat(A, '">') +
                                "<si><t/></si>")
                            : ((e =
                                g.length +
                                g[0].labels.length * g[0].labels[0].length +
                                g[0].labels.length),
                              (o =
                                g.length +
                                g[0].labels.length * g[0].labels[0].length +
                                1),
                              i +
                                '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'
                                  .concat(e, '" uniqueCount="')
                                  .concat(o, '">') +
                                '<si><t xml:space="preserve"></t></si>')),
                      m.opts._type === v.BUBBLE || m.opts._type === v.BUBBLE3D
                        ? g.forEach(function (e, t) {
                            0 === t
                              ? (i += "<si><t>X-Axis</t></si>")
                              : (i =
                                  (i += "<si><t>".concat(
                                    I(e.name || "Y-Axis".concat(t)),
                                    "</t></si>"
                                  )) +
                                  "<si><t>".concat(
                                    I("Size".concat(t)),
                                    "</t></si>"
                                  ));
                          })
                        : g.forEach(function (e) {
                            i += "<si><t>".concat(
                              I((e.name || " ").replace("X-Axis", "X-Values")),
                              "</t></si>"
                            );
                          }),
                      m.opts._type !== v.BUBBLE &&
                        m.opts._type !== v.BUBBLE3D &&
                        m.opts._type !== v.SCATTER &&
                        g[0].labels
                          .slice()
                          .reverse()
                          .forEach(function (e) {
                            e.filter(function (e) {
                              return e && "" !== e;
                            }).forEach(function (e) {
                              i += "<si><t>".concat(I(e), "</t></si>");
                            });
                          }),
                      (i += "</sst>\n"),
                      r.file("xl/sharedStrings.xml", i),
                      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'),
                    p =
                      (m.opts._type === v.BUBBLE || m.opts._type === v.BUBBLE3D
                        ? ((s =
                            (s +=
                              '<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" id="1" name="Table1" displayName="Table1" ref="A1:'
                                .concat(B(l))
                                .concat(l, '" totalsRowShown="0">')) +
                            '<tableColumns count="'.concat(l, '">')),
                          (n = 1),
                          g.forEach(function (e, t) {
                            0 === t
                              ? (s += '<tableColumn id="'.concat(
                                  t + 1,
                                  '" name="X-Values"/>'
                                ))
                              : ((s += '<tableColumn id="'
                                  .concat(t + n, '" name="')
                                  .concat(e.name, '"/>')),
                                n++,
                                (s += '<tableColumn id="'
                                  .concat(t + n, '" name="Size')
                                  .concat(t, '"/>')));
                          }))
                        : m.opts._type === v.SCATTER
                        ? ((s =
                            (s +=
                              '<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" id="1" name="Table1" displayName="Table1" ref="A1:'
                                .concat(B(g.length))
                                .concat(
                                  g[0].values.length + 1,
                                  '" totalsRowShown="0">'
                                )) +
                            '<tableColumns count="'.concat(g.length, '">')),
                          g.forEach(function (e, t) {
                            s += '<tableColumn id="'
                              .concat(t + 1, '" name="')
                              .concat(0 === t ? "X-Values" : "Y-Value ")
                              .concat(t, '"/>');
                          }))
                        : ((s =
                            (s +=
                              '<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" id="1" name="Table1" displayName="Table1" ref="A1:'
                                .concat(B(g.length + g[0].labels.length))
                                .concat(
                                  g[0].labels[0].length + 1,
                                  '\'" totalsRowShown="0">'
                                )) +
                            '<tableColumns count="'.concat(
                              g.length + g[0].labels.length,
                              '">'
                            )),
                          g[0].labels.forEach(function (e, t) {
                            s += '<tableColumn id="'
                              .concat(t + 1, '" name="Column')
                              .concat(t + 1, '"/>');
                          }),
                          g.forEach(function (e, t) {
                            s += '<tableColumn id="'
                              .concat(t + g[0].labels.length + 1, '" name="')
                              .concat(I(e.name), '"/>');
                          })),
                      (s =
                        (s += "</tableColumns>") +
                        '<tableStyleInfo showFirstColumn="0" showLastColumn="0" showRowStripes="1" showColumnStripes="0"/>' +
                        "</table>"),
                      r.file("xl/tables/table1.xml", s),
                      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
                  if (
                    ((p +=
                      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">'),
                    m.opts._type === v.BUBBLE || m.opts._type === v.BUBBLE3D
                      ? (p += '<dimension ref="A1:'
                          .concat(B(l))
                          .concat(g[0].values.length + 1, '"/>'))
                      : m.opts._type === v.SCATTER
                      ? (p += '<dimension ref="A1:'
                          .concat(B(g.length))
                          .concat(g[0].values.length + 1, '"/>'))
                      : (p += '<dimension ref="A1:'
                          .concat(B(g.length + 1))
                          .concat(g[0].values.length + 1, '"/>')),
                    (p =
                      p +
                      '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="B1" sqref="B1"/></sheetView></sheetViews>' +
                      '<sheetFormatPr baseColWidth="10" defaultRowHeight="16"/>'),
                    m.opts._type === v.BUBBLE || m.opts._type === v.BUBBLE3D)
                  ) {
                    for (
                      var p =
                          (p += "<sheetData>") +
                          '<row r="1" spans="1:'.concat(l, '">') +
                          '<c r="A1" t="s"><v>0</v></c>',
                        d = 1;
                      d < l;
                      d++
                    )
                      p += '<c r="'
                        .concat(B(d + 1), '1" t="s"><v>')
                        .concat(d, "</v></c>");
                    (p += "</row>"),
                      g[0].values.forEach(function (e, t) {
                        p =
                          (p += '<row r="'
                            .concat(t + 2, '" spans="1:')
                            .concat(l, '">')) +
                          '<c r="A'
                            .concat(t + 2, '"><v>')
                            .concat(e, "</v></c>");
                        for (var a = 2, A = 1; A < g.length; A++)
                          (p =
                            (p += '<c r="'
                              .concat(B(a))
                              .concat(t + 2, '"><v>')
                              .concat(g[A].values[t] || "", "</v></c>")) +
                            '<c r="'
                              .concat(B(++a))
                              .concat(t + 2, '"><v>')
                              .concat(g[A].sizes[t] || "", "</v></c>")),
                            a++;
                        p += "</row>";
                      });
                  } else if (m.opts._type === v.SCATTER) {
                    p =
                      (p += "<sheetData>") +
                      '<row r="1" spans="1:'.concat(g.length, '">');
                    for (d = 0; d < g.length; d++)
                      p += '<c r="'
                        .concat(B(d + 1), '1" t="s"><v>')
                        .concat(d, "</v></c>");
                    (p += "</row>"),
                      g[0].values.forEach(function (e, t) {
                        p =
                          (p += '<row r="'
                            .concat(t + 2, '" spans="1:')
                            .concat(g.length, '">')) +
                          '<c r="A'
                            .concat(t + 2, '"><v>')
                            .concat(e, "</v></c>");
                        for (var a = 1; a < g.length; a++)
                          p += '<c r="'
                            .concat(B(a + 1))
                            .concat(t + 2, '"><v>')
                            .concat(
                              g[a].values[t] || 0 === g[a].values[t]
                                ? g[a].values[t]
                                : "",
                              "</v></c>"
                            );
                        p += "</row>";
                      });
                  } else if (((p += "<sheetData>"), c)) {
                    p += '<row r="1" spans="1:'.concat(
                      g.length + g[0].labels.length,
                      '">'
                    );
                    for (d = 0; d < g[0].labels.length; d++)
                      p += '<c r="'.concat(B(d + 1), '1" t="s"><v>0</v></c>');
                    for (
                      d = g[0].labels.length - 1;
                      d < g.length + g[0].labels.length - 1;
                      d++
                    )
                      p += '<c r="'
                        .concat(B(d + g[0].labels.length), '1" t="s"><v>')
                        .concat(d, "</v></c>");
                    p += "</row>";
                    for (
                      var f = g.length,
                        u = g[0].labels[0].length,
                        h = g[0].labels.length,
                        d = 0;
                      d < u;
                      d++
                    )
                      !(function (a) {
                        p += '<row r="'
                          .concat(a + 2, '" spans="1:')
                          .concat(f + h, '">');
                        var A = f,
                          o = g[0].labels.slice().reverse();
                        o.forEach(function (e, t) {
                          e[a] &&
                            ((e =
                              0 === t
                                ? 1
                                : o[t - 1].filter(function (e) {
                                    return e && "" !== e;
                                  }).length),
                            (A += e),
                            (p += '<c r="'
                              .concat(B(a + 1 + t))
                              .concat(a + 2, '" t="s"><v>')
                              .concat(A, "</v></c>")));
                        });
                        for (var e = 0; e < f; e++)
                          p += '<c r="'
                            .concat(B(h + e + 1))
                            .concat(a + 2, '"><v>')
                            .concat(g[e].values[a] || 0, "</v></c>");
                        p += "</row>";
                      })(d);
                  } else {
                    (p += '<row r="1" spans="1:'.concat(
                      g.length + g[0].labels.length,
                      '">'
                    )),
                      g[0].labels.forEach(function (e, t) {
                        p += '<c r="'.concat(B(t + 1), '1" t="s"><v>0</v></c>');
                      });
                    for (var d = 0; d < g.length; d++)
                      p += '<c r="'
                        .concat(B(d + 1 + g[0].labels.length), '1" t="s"><v>')
                        .concat(d + 1, "</v></c>");
                    (p += "</row>"),
                      g[0].labels[0].forEach(function (e, t) {
                        p += '<row r="'
                          .concat(t + 2, '" spans="1:')
                          .concat(g.length + g[0].labels.length, '">');
                        for (var a = g[0].labels.length - 1; 0 <= a; a--)
                          p =
                            (p += '<c r="'
                              .concat(B(g[0].labels.length - a))
                              .concat(t + 2, '" t="s">')) +
                            "<v>".concat(g.length + t + 1, "</v>") +
                            "</c>";
                        for (var A = 0; A < g.length; A++)
                          p += '<c r="'
                            .concat(B(g[0].labels.length + A + 1))
                            .concat(t + 2, '"><v>')
                            .concat(g[A].values[t] || "", "</v></c>");
                        p += "</row>";
                      });
                  }
                  (p +=
                    '</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>\n'),
                    r.file("xl/worksheets/sheet1.xml", p),
                    r
                      .generateAsync({ type: "base64" })
                      .then(function (e) {
                        b.file(
                          "ppt/embeddings/Microsoft_Excel_Worksheet".concat(
                            m.globalId,
                            ".xlsx"
                          ),
                          e,
                          { base64: !0 }
                        ),
                          b.file(
                            "ppt/charts/_rels/" + m.fileName + ".rels",
                            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
                              '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/package" Target="../embeddings/Microsoft_Excel_Worksheet'.concat(
                                m.globalId,
                                '.xlsx"/>'
                              ) +
                              "</Relationships>"
                          ),
                          b.file(
                            "ppt/charts/".concat(m.fileName),
                            (function (o) {
                              var e,
                                n =
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                                r = !1;
                              (n =
                                (n +=
                                  '<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><c:date1904 val="0"/>') +
                                '<c:roundedCorners val="'.concat(
                                  o.opts.chartArea.roundedCorners ? "1" : "0",
                                  '"/>'
                                ) +
                                "<c:chart>"),
                                o.opts.showTitle
                                  ? (n =
                                      n +
                                      Ne(
                                        {
                                          title: o.opts.title || "Chart Title",
                                          color: o.opts.titleColor,
                                          fontFace: o.opts.titleFontFace,
                                          fontSize: o.opts.titleFontSize || te,
                                          titleAlign: o.opts.titleAlign,
                                          titleBold: o.opts.titleBold,
                                          titlePos: o.opts.titlePos,
                                          titleRotate: o.opts.titleRotate,
                                        },
                                        o.opts.x,
                                        o.opts.y
                                      ) +
                                      '<c:autoTitleDeleted val="0"/>')
                                  : (n += '<c:autoTitleDeleted val="1"/>');
                              o.opts._type === v.BAR3D &&
                                (n += '<c:view3D><c:rotX val="'
                                  .concat(o.opts.v3DRotX, '"/><c:rotY val="')
                                  .concat(o.opts.v3DRotY, '"/><c:rAngAx val="')
                                  .concat(
                                    o.opts.v3DRAngAx ? 1 : 0,
                                    '"/><c:perspective val="'
                                  )
                                  .concat(
                                    o.opts.v3DPerspective,
                                    '"/></c:view3D>'
                                  ));
                              (n += "<c:plotArea>"),
                                o.opts.layout
                                  ? (n =
                                      (n =
                                        (n =
                                          (n =
                                            (n =
                                              (n =
                                                (n =
                                                  (n += "<c:layout>") +
                                                  ' <c:manualLayout>  <c:layoutTarget val="inner" />') +
                                                '  <c:xMode val="edge" />  <c:yMode val="edge" />') +
                                              '  <c:x val="' +
                                              (o.opts.layout.x || 0) +
                                              '" />') +
                                            '  <c:y val="' +
                                            (o.opts.layout.y || 0) +
                                            '" />') +
                                          '  <c:w val="' +
                                          (o.opts.layout.w || 1) +
                                          '" />') +
                                        '  <c:h val="' +
                                        (o.opts.layout.h || 1) +
                                        '" />') +
                                      " </c:manualLayout></c:layout>")
                                  : (n += "<c:layout/>");
                              Array.isArray(o.opts._type)
                                ? o.opts._type.forEach(function (e) {
                                    var t = y(y({}, o.opts), e.options),
                                      a = t.secondaryValAxis ? le : L,
                                      A = t.secondaryCatAxis ? ie : ce;
                                    (r = r || t.secondaryValAxis),
                                      (n += De(e.type, e.data, t, a, A));
                                  })
                                : (n += De(
                                    o.opts._type,
                                    o.data,
                                    o.opts,
                                    L,
                                    ce
                                  ));
                              if (
                                o.opts._type !== v.PIE &&
                                o.opts._type !== v.DOUGHNUT
                              ) {
                                if (
                                  o.opts.valAxes &&
                                  1 < o.opts.valAxes.length &&
                                  !r
                                )
                                  throw new Error(
                                    "Secondary axis must be used by one of the multiple charts"
                                  );
                                if (o.opts.catAxes) {
                                  if (
                                    !o.opts.valAxes ||
                                    o.opts.valAxes.length !==
                                      o.opts.catAxes.length
                                  )
                                    throw new Error(
                                      "There must be the same number of value and category axes."
                                    );
                                  n += Se(
                                    y(y({}, o.opts), o.opts.catAxes[0]),
                                    ce,
                                    L
                                  );
                                } else n += Se(o.opts, ce, L);
                                o.opts.valAxes
                                  ? ((n += Ee(
                                      y(y({}, o.opts), o.opts.valAxes[0]),
                                      L
                                    )),
                                    o.opts.valAxes[1] &&
                                      (n += Ee(
                                        y(y({}, o.opts), o.opts.valAxes[1]),
                                        le
                                      )))
                                  : ((n += Ee(o.opts, L)),
                                    o.opts._type === v.BAR3D &&
                                      (n += (function (t, e, a) {
                                        var A = "";
                                        (A =
                                          (A =
                                            (A =
                                              (A =
                                                (A =
                                                  A +
                                                  '<c:serAx>  <c:axId val="' +
                                                  e +
                                                  '"/>') +
                                                '  <c:scaling><c:orientation val="' +
                                                (t.serAxisOrientation ||
                                                  (t.barDir, "minMax")) +
                                                '"/></c:scaling>') +
                                              '  <c:delete val="' +
                                              (t.serAxisHidden ? "1" : "0") +
                                              '"/>') +
                                            '  <c:axPos val="' +
                                            ("col" === t.barDir ? "b" : "l") +
                                            '"/>') +
                                          ("none" !== t.serGridLine.style
                                            ? Fe(t.serGridLine)
                                            : "")),
                                          t.showSerAxisTitle &&
                                            (A += Ne({
                                              color: t.serAxisTitleColor,
                                              fontFace: t.serAxisTitleFontFace,
                                              fontSize: t.serAxisTitleFontSize,
                                              titleRotate: t.serAxisTitleRotate,
                                              title:
                                                t.serAxisTitle || "Axis Title",
                                            }));
                                        (A =
                                          (A =
                                            (A =
                                              (A =
                                                (A =
                                                  (A =
                                                    (A =
                                                      (A =
                                                        (A =
                                                          (A =
                                                            (A =
                                                              (A =
                                                                (A =
                                                                  (A =
                                                                    (A =
                                                                      (A +=
                                                                        '  <c:numFmt formatCode="'.concat(
                                                                          I(
                                                                            t.serLabelFormatCode
                                                                          ) ||
                                                                            "General",
                                                                          '" sourceLinked="0"/>'
                                                                        )) +
                                                                      '  <c:majorTickMark val="out"/>  <c:minorTickMark val="none"/>') +
                                                                    '  <c:tickLblPos val="'.concat(
                                                                      t.serAxisLabelPos ||
                                                                        "col" ===
                                                                          t.barDir
                                                                        ? "low"
                                                                        : "nextTo",
                                                                      '"/>'
                                                                    )) +
                                                                  '  <c:spPr>    <a:ln w="12700" cap="flat">') +
                                                                (t.serAxisLineShow
                                                                  ? "<a:solidFill>".concat(
                                                                      z(
                                                                        t.serAxisLineColor ||
                                                                          C.color
                                                                      ),
                                                                      "</a:solidFill>"
                                                                    )
                                                                  : "<a:noFill/>") +
                                                                '      <a:prstDash val="solid"/>') +
                                                              "      <a:round/>    </a:ln>") +
                                                            "  </c:spPr>  <c:txPr>") +
                                                          "    <a:bodyPr/>    <a:lstStyle/>") +
                                                        "    <a:p>    <a:pPr>") +
                                                      '    <a:defRPr sz="'
                                                        .concat(
                                                          Math.round(
                                                            100 *
                                                              (t.serAxisLabelFontSize ||
                                                                P)
                                                          ),
                                                          '" b="'
                                                        )
                                                        .concat(
                                                          t.serAxisLabelFontBold
                                                            ? "1"
                                                            : "0",
                                                          '" i="'
                                                        )
                                                        .concat(
                                                          t.serAxisLabelFontItalic
                                                            ? "1"
                                                            : "0",
                                                          '" u="none" strike="noStrike">'
                                                        )) +
                                                    "      <a:solidFill>".concat(
                                                      z(
                                                        t.serAxisLabelColor || w
                                                      ),
                                                      "</a:solidFill>"
                                                    )) +
                                                  '      <a:latin typeface="'.concat(
                                                    t.serAxisLabelFontFace ||
                                                      "Arial",
                                                    '"/>'
                                                  )) +
                                                "   </a:defRPr>  </a:pPr>") +
                                              '  <a:endParaRPr lang="' +
                                              (t.lang || "en-US") +
                                              '"/>') + "  </a:p> </c:txPr>") +
                                          ' <c:crossAx val="' +
                                          a +
                                          '"/> <c:crosses val="autoZero"/>'),
                                          t.serAxisLabelFrequency &&
                                            (A +=
                                              ' <c:tickLblSkip val="' +
                                              t.serAxisLabelFrequency +
                                              '"/>');
                                        t.serLabelFormatCode &&
                                          ([
                                            "serAxisBaseTimeUnit",
                                            "serAxisMajorTimeUnit",
                                            "serAxisMinorTimeUnit",
                                          ].forEach(function (e) {
                                            !t[e] ||
                                              ("string" == typeof t[e] &&
                                                [
                                                  "days",
                                                  "months",
                                                  "years",
                                                ].includes(e.toLowerCase())) ||
                                              (console.warn(
                                                '"'.concat(
                                                  e,
                                                  "\" must be one of: 'days','months','years' !"
                                                )
                                              ),
                                              (t[e] = null));
                                          }),
                                          t.serAxisBaseTimeUnit &&
                                            (A +=
                                              ' <c:baseTimeUnit  val="'.concat(
                                                t.serAxisBaseTimeUnit.toLowerCase(),
                                                '"/>'
                                              )),
                                          t.serAxisMajorTimeUnit &&
                                            (A +=
                                              ' <c:majorTimeUnit val="'.concat(
                                                t.serAxisMajorTimeUnit.toLowerCase(),
                                                '"/>'
                                              )),
                                          t.serAxisMinorTimeUnit &&
                                            (A +=
                                              ' <c:minorTimeUnit val="'.concat(
                                                t.serAxisMinorTimeUnit.toLowerCase(),
                                                '"/>'
                                              )),
                                          t.serAxisMajorUnit &&
                                            (A += ' <c:majorUnit val="'.concat(
                                              t.serAxisMajorUnit,
                                              '"/>'
                                            )),
                                          t.serAxisMinorUnit) &&
                                          (A += ' <c:minorUnit val="'.concat(
                                            t.serAxisMinorUnit,
                                            '"/>'
                                          ));
                                        return (A += "</c:serAx>");
                                      })(o.opts, se, L))),
                                  null != (e = o.opts) &&
                                    e.catAxes &&
                                    null != (e = o.opts) &&
                                    e.catAxes[1] &&
                                    (n += Se(
                                      y(y({}, o.opts), o.opts.catAxes[1]),
                                      ie,
                                      le
                                    ));
                              }
                              o.opts.showDataTable &&
                                (n =
                                  (n =
                                    (n =
                                      (n =
                                        (n =
                                          (n =
                                            (n =
                                              (n =
                                                (n =
                                                  (n =
                                                    (n =
                                                      (n =
                                                        (n =
                                                          (n =
                                                            (n =
                                                              (n +=
                                                                "<c:dTable>") +
                                                              '  <c:showHorzBorder val="'.concat(
                                                                o.opts
                                                                  .showDataTableHorzBorder
                                                                  ? 1
                                                                  : 0,
                                                                '"/>'
                                                              )) +
                                                            '  <c:showVertBorder val="'.concat(
                                                              o.opts
                                                                .showDataTableVertBorder
                                                                ? 1
                                                                : 0,
                                                              '"/>'
                                                            )) +
                                                          '  <c:showOutline    val="'.concat(
                                                            o.opts
                                                              .showDataTableOutline
                                                              ? 1
                                                              : 0,
                                                            '"/>'
                                                          )) +
                                                        '  <c:showKeys       val="'.concat(
                                                          o.opts
                                                            .showDataTableKeys
                                                            ? 1
                                                            : 0,
                                                          '"/>'
                                                        )) +
                                                      "  <c:spPr>    <a:noFill/>") +
                                                    '    <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="tx1"><a:lumMod val="15000"/><a:lumOff val="85000"/></a:schemeClr></a:solidFill><a:round/></a:ln>    <a:effectLst/>') +
                                                  "  </c:spPr>  <c:txPr>") +
                                                '   <a:bodyPr rot="0" spcFirstLastPara="1" vertOverflow="ellipsis" vert="horz" wrap="square" anchor="ctr" anchorCtr="1"/>   <a:lstStyle/>') +
                                              '   <a:p>     <a:pPr rtl="0">') +
                                            '       <a:defRPr sz="'.concat(
                                              Math.round(
                                                100 *
                                                  (o.opts.dataTableFontSize ||
                                                    P)
                                              ),
                                              '" b="0" i="0" u="none" strike="noStrike" kern="1200" baseline="0">'
                                            )) +
                                          '         <a:solidFill><a:schemeClr val="tx1"><a:lumMod val="65000"/><a:lumOff val="35000"/></a:schemeClr></a:solidFill>         <a:latin typeface="+mn-lt"/>') +
                                        '         <a:ea typeface="+mn-ea"/>         <a:cs typeface="+mn-cs"/>') +
                                      "       </a:defRPr>     </a:pPr>") +
                                    '    <a:endParaRPr lang="en-US"/>   </a:p>') +
                                  " </c:txPr></c:dTable>");
                              (n =
                                (n =
                                  (n =
                                    (n += "  <c:spPr>") +
                                    (null != (e = o.opts.plotArea.fill) &&
                                    e.color
                                      ? U(o.opts.plotArea.fill)
                                      : "<a:noFill/>")) +
                                  (o.opts.plotArea.border
                                    ? '<a:ln w="'
                                        .concat(
                                          O(o.opts.plotArea.border.pt),
                                          '" cap="flat">'
                                        )
                                        .concat(
                                          U(o.opts.plotArea.border.color),
                                          "</a:ln>"
                                        )
                                    : "<a:ln><a:noFill/></a:ln>") +
                                  "    <a:effectLst/>") +
                                "  </c:spPr></c:plotArea>"),
                                o.opts.showLegend &&
                                  ((n =
                                    (n += "<c:legend>") +
                                    '<c:legendPos val="' +
                                    o.opts.legendPos +
                                    '"/><c:overlay val="0"/>'),
                                  (o.opts.legendFontFace ||
                                    o.opts.legendFontSize ||
                                    o.opts.legendColor) &&
                                    ((n =
                                      (n =
                                        (n =
                                          (n += "<c:txPr>") +
                                          "  <a:bodyPr/>  <a:lstStyle/>") +
                                        "  <a:p>    <a:pPr>") +
                                      (o.opts.legendFontSize
                                        ? '<a:defRPr sz="'.concat(
                                            Math.round(
                                              100 *
                                                Number(o.opts.legendFontSize)
                                            ),
                                            '">'
                                          )
                                        : "<a:defRPr>")),
                                    o.opts.legendColor &&
                                      (n += U(o.opts.legendColor)),
                                    o.opts.legendFontFace &&
                                      (n +=
                                        '<a:latin typeface="' +
                                        o.opts.legendFontFace +
                                        '"/>'),
                                    o.opts.legendFontFace &&
                                      (n +=
                                        '<a:cs    typeface="' +
                                        o.opts.legendFontFace +
                                        '"/>'),
                                    (n =
                                      (n =
                                        (n += "      </a:defRPr>") +
                                        '    </a:pPr>    <a:endParaRPr lang="en-US"/>') +
                                      "  </a:p></c:txPr>")),
                                  (n += "</c:legend>"));
                              (n =
                                (n += '  <c:plotVisOnly val="1"/>') +
                                '  <c:dispBlanksAs val="' +
                                o.opts.displayBlanksAs +
                                '"/>'),
                                o.opts._type === v.SCATTER &&
                                  (n += '<c:showDLblsOverMax val="1"/>');
                              return (n =
                                (n =
                                  (n =
                                    (n =
                                      (n += "</c:chart><c:spPr>") +
                                      (null != (e = o.opts.chartArea.fill) &&
                                      e.color
                                        ? U(o.opts.chartArea.fill)
                                        : "<a:noFill/>")) +
                                    (o.opts.chartArea.border
                                      ? '<a:ln w="'
                                          .concat(
                                            O(o.opts.chartArea.border.pt),
                                            '" cap="flat">'
                                          )
                                          .concat(
                                            U(o.opts.chartArea.border.color),
                                            "</a:ln>"
                                          )
                                      : "<a:ln><a:noFill/></a:ln>")) +
                                  "  <a:effectLst/></c:spPr>") +
                                '<c:externalData r:id="rId1"><c:autoUpdate val="0"/></c:externalData></c:chartSpace>');
                            })(m)
                          ),
                          t("");
                      })
                      .catch(function (e) {
                        a(e);
                      });
                }),
              ]
            );
          case 1:
            return [2, e.sent()];
        }
      });
    });
  }
  function De(A, o, n, e, t) {
    var r = -1,
      l = 1,
      a = null,
      c = "";
    switch (A) {
      case v.AREA:
      case v.BAR:
      case v.BAR3D:
      case v.LINE:
      case v.RADAR:
        (c += "<c:".concat(A, "Chart>")),
          A === v.AREA &&
            "stacked" === n.barGrouping &&
            (c += '<c:grouping val="' + n.barGrouping + '"/>'),
          (A !== v.BAR && A !== v.BAR3D) ||
            (c =
              (c += '<c:barDir val="' + n.barDir + '"/>') +
              '<c:grouping val="' +
              (n.barGrouping || "clustered") +
              '"/>'),
          A === v.RADAR && (c += '<c:radarStyle val="' + n.radarStyle + '"/>'),
          (c += '<c:varyColors val="0"/>'),
          o.forEach(function (e) {
            r++,
              (c =
                (c =
                  (c =
                    (c += "<c:ser>") +
                    '  <c:idx val="'
                      .concat(e._dataIndex, '"/><c:order val="')
                      .concat(e._dataIndex, '"/>') +
                    "  <c:tx>    <c:strRef>") +
                  "      <c:f>Sheet1!$" +
                  B(e._dataIndex + e.labels.length + 1) +
                  "$1</c:f>") +
                '      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>' +
                I(e.name) +
                "</c:v></c:pt></c:strCache>    </c:strRef>  </c:tx>");
            var t = n.chartColors
              ? n.chartColors[r % n.chartColors.length]
              : null;
            (c += "  <c:spPr>"),
              "transparent" === t
                ? (c += "<a:noFill/>")
                : n.chartColorsOpacity
                ? (c +=
                    "<a:solidFill>" +
                    z(
                      t,
                      '<a:alpha val="'.concat(
                        Math.round(1e3 * n.chartColorsOpacity),
                        '"/>'
                      )
                    ) +
                    "</a:solidFill>")
                : (c += "<a:solidFill>" + z(t) + "</a:solidFill>"),
              A === v.LINE || A === v.RADAR
                ? 0 === n.lineSize
                  ? (c += "<a:ln><a:noFill/></a:ln>")
                  : (c =
                      (c += '<a:ln w="'
                        .concat(O(n.lineSize), '" cap="')
                        .concat(Re(n.lineCap), '"><a:solidFill>')
                        .concat(z(t), "</a:solidFill>")) +
                      ('<a:prstDash val="' + (n.lineDash || "solid")) +
                      '"/><a:round/></a:ln>')
                : n.dataBorder &&
                  (c += '<a:ln w="'
                    .concat(O(n.dataBorder.pt), '" cap="')
                    .concat(Re(n.lineCap), '"><a:solidFill>')
                    .concat(
                      z(n.dataBorder.color),
                      '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'
                    )),
              (c =
                c +
                b(n.shadow, s) +
                '  </c:spPr>  <c:invertIfNegative val="0"/>'),
              A !== v.RADAR &&
                ((c =
                  (c += "<c:dLbls>") +
                  '<c:numFmt formatCode="'.concat(
                    I(n.dataLabelFormatCode) || "General",
                    '" sourceLinked="0"/>'
                  )),
                n.dataLabelBkgrdColors &&
                  (c += "<c:spPr><a:solidFill>".concat(
                    z(t),
                    "</a:solidFill></c:spPr>"
                  )),
                (c =
                  (c =
                    (c =
                      (c += "<c:txPr><a:bodyPr/><a:lstStyle/><a:p><a:pPr>") +
                      '<a:defRPr b="'
                        .concat(n.dataLabelFontBold ? 1 : 0, '" i="')
                        .concat(
                          n.dataLabelFontItalic ? 1 : 0,
                          '" strike="noStrike" sz="'
                        )
                        .concat(
                          Math.round(100 * (n.dataLabelFontSize || P)),
                          '" u="none">'
                        )) +
                    "<a:solidFill>".concat(
                      z(n.dataLabelColor || w),
                      "</a:solidFill>"
                    )) +
                  '<a:latin typeface="'.concat(
                    n.dataLabelFontFace || "Arial",
                    '"/>'
                  ) +
                  "</a:defRPr></a:pPr></a:p></c:txPr>"),
                n.dataLabelPosition &&
                  (c += '<c:dLblPos val="'.concat(n.dataLabelPosition, '"/>')),
                (c =
                  (c =
                    (c =
                      (c += '<c:showLegendKey val="0"/>') +
                      '<c:showVal val="'.concat(
                        n.showValue ? "1" : "0",
                        '"/>'
                      )) +
                    '<c:showCatName val="0"/><c:showSerName val="'.concat(
                      n.showSerName ? "1" : "0",
                      '"/><c:showPercent val="0"/><c:showBubbleSize val="0"/>'
                    )) +
                  '<c:showLeaderLines val="'.concat(
                    n.showLeaderLines ? "1" : "0",
                    '"/>'
                  ) +
                  "</c:dLbls>")),
              (A !== v.LINE && A !== v.RADAR) ||
                ((c =
                  (c += "<c:marker>") +
                  '  <c:symbol val="' +
                  n.lineDataSymbol +
                  '"/>'),
                n.lineDataSymbolSize &&
                  (c += '<c:size val="'.concat(n.lineDataSymbolSize, '"/>')),
                (c =
                  (c =
                    (c += "  <c:spPr>") +
                    "    <a:solidFill>".concat(
                      z(
                        n.chartColors[
                          e._dataIndex + 1 > n.chartColors.length
                            ? Math.floor(Math.random() * n.chartColors.length)
                            : e._dataIndex
                        ]
                      ),
                      "</a:solidFill>"
                    )) +
                  '    <a:ln w="'
                    .concat(
                      n.lineDataSymbolLineSize,
                      '" cap="flat"><a:solidFill>'
                    )
                    .concat(
                      z(n.lineDataSymbolLineColor || t),
                      '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'
                    ) +
                  "    <a:effectLst/>  </c:spPr></c:marker>")),
              (A !== v.BAR && A !== v.BAR3D) ||
                1 !== o.length ||
                !(
                  (n.chartColors &&
                    n.chartColors !== de &&
                    1 < n.chartColors.length) ||
                  (null != (t = n.invertedColors) && t.length)
                ) ||
                e.values.forEach(function (e, t) {
                  e =
                    e < 0
                      ? n.invertedColors || n.chartColors || de
                      : n.chartColors || [];
                  (c =
                    (c += "  <c:dPt>") +
                    '    <c:idx val="'.concat(t, '"/>') +
                    '      <c:invertIfNegative val="0"/>    <c:bubble3D val="0"/>    <c:spPr>'),
                    0 === n.lineSize
                      ? (c += "<a:ln><a:noFill/></a:ln>")
                      : (c =
                          A === v.BAR
                            ? (c += "<a:solidFill>") +
                              '  <a:srgbClr val="' +
                              e[t % e.length] +
                              '"/></a:solidFill>'
                            : (c += "<a:ln>  <a:solidFill>") +
                              '   <a:srgbClr val="' +
                              e[t % e.length] +
                              '"/>  </a:solidFill></a:ln>'),
                    (c = c + b(n.shadow, s) + "    </c:spPr>  </c:dPt>");
                }),
              (c += "<c:cat>"),
              n.catLabelFormatCode
                ? ((c =
                    (c =
                      (c =
                        (c += "  <c:numRef>") +
                        "    <c:f>Sheet1!$A$2:$A$".concat(
                          e.labels[0].length + 1,
                          "</c:f>"
                        ) +
                        "    <c:numCache>") +
                      "      <c:formatCode>" +
                      (n.catLabelFormatCode || "General") +
                      "</c:formatCode>") +
                    '      <c:ptCount val="'.concat(e.labels[0].length, '"/>')),
                  e.labels[0].forEach(function (e, t) {
                    return (c += '<c:pt idx="'
                      .concat(t, '"><c:v>')
                      .concat(I(e), "</c:v></c:pt>"));
                  }),
                  (c += "    </c:numCache>  </c:numRef>"))
                : ((c =
                    (c =
                      (c += "  <c:multiLvlStrRef>") +
                      "    <c:f>Sheet1!$A$2:$"
                        .concat(B(e.labels.length), "$")
                        .concat(e.labels[0].length + 1, "</c:f>") +
                      "    <c:multiLvlStrCache>") +
                    '      <c:ptCount val="'.concat(e.labels[0].length, '"/>')),
                  e.labels.forEach(function (e) {
                    (c += "<c:lvl>"),
                      e.forEach(function (e, t) {
                        return (c += '<c:pt idx="'
                          .concat(t, '"><c:v>')
                          .concat(I(e), "</c:v></c:pt>"));
                      }),
                      (c += "</c:lvl>");
                  }),
                  (c += "    </c:multiLvlStrCache>  </c:multiLvlStrRef>")),
              (c =
                (c =
                  (c =
                    (c = c + "</c:cat>" + "<c:val>  <c:numRef>") +
                    "<c:f>Sheet1!$"
                      .concat(B(e._dataIndex + e.labels.length + 1), "$2:$")
                      .concat(B(e._dataIndex + e.labels.length + 1), "$")
                      .concat(e.labels[0].length + 1, "</c:f>") +
                    "    <c:numCache>") +
                  "      <c:formatCode>" +
                  (n.valLabelFormatCode || n.dataTableFormatCode || "General") +
                  "</c:formatCode>") +
                '      <c:ptCount val="'.concat(e.labels[0].length, '"/>')),
              e.values.forEach(function (e, t) {
                return (c += '<c:pt idx="'
                  .concat(t, '"><c:v>')
                  .concat(e || 0 === e ? e : "", "</c:v></c:pt>"));
              }),
              (c += "    </c:numCache>  </c:numRef></c:val>"),
              A === v.LINE &&
                (c += '<c:smooth val="' + (n.lineSmooth ? "1" : "0") + '"/>'),
              (c += "</c:ser>");
          }),
          (c =
            (c =
              (c =
                (c =
                  (c += "  <c:dLbls>") +
                  '    <c:numFmt formatCode="'.concat(
                    I(n.dataLabelFormatCode) || "General",
                    '" sourceLinked="0"/>'
                  ) +
                  "    <c:txPr>      <a:bodyPr/>      <a:lstStyle/>      <a:p><a:pPr>") +
                '        <a:defRPr b="'
                  .concat(n.dataLabelFontBold ? 1 : 0, '" i="')
                  .concat(
                    n.dataLabelFontItalic ? 1 : 0,
                    '" strike="noStrike" sz="'
                  )
                  .concat(
                    Math.round(100 * (n.dataLabelFontSize || P)),
                    '" u="none">'
                  )) +
              "          <a:solidFill>" +
              z(n.dataLabelColor || w) +
              "</a:solidFill>") +
            '          <a:latin typeface="' +
            (n.dataLabelFontFace || "Arial") +
            '"/>        </a:defRPr>      </a:pPr></a:p>    </c:txPr>'),
          n.dataLabelPosition &&
            (c += ' <c:dLblPos val="' + n.dataLabelPosition + '"/>'),
          (c =
            (c =
              (c =
                (c += '    <c:showLegendKey val="0"/>') +
                '    <c:showVal val="' +
                (n.showValue ? "1" : "0") +
                '"/>    <c:showCatName val="0"/>') +
              '    <c:showSerName val="' +
              (n.showSerName ? "1" : "0") +
              '"/>    <c:showPercent val="0"/>    <c:showBubbleSize val="0"/>') +
            '    <c:showLeaderLines val="'.concat(
              n.showLeaderLines ? "1" : "0",
              '"/>'
            ) +
            "  </c:dLbls>"),
          A === v.BAR
            ? (c =
                (c += '  <c:gapWidth val="'.concat(n.barGapWidthPct, '"/>')) +
                '  <c:overlap val="'.concat(
                  (n.barGrouping || "").includes("tacked")
                    ? 100
                    : n.barOverlapPct || 0,
                  '"/>'
                ))
            : A === v.BAR3D
            ? (c =
                (c =
                  (c += '  <c:gapWidth val="'.concat(n.barGapWidthPct, '"/>')) +
                  '  <c:gapDepth val="'.concat(n.barGapDepthPct, '"/>')) +
                ('  <c:shape val="' + n.bar3DShape) +
                '"/>')
            : A === v.LINE && (c += '  <c:marker val="1"/>'),
          (c =
            (c += '<c:axId val="'
              .concat(t, '"/><c:axId val="')
              .concat(e, '"/><c:axId val="')
              .concat(se, '"/>')) + "</c:".concat(A, "Chart>"));
        break;
      case v.SCATTER:
        (c =
          (c += "<c:" + A + "Chart>") +
          '<c:scatterStyle val="lineMarker"/>' +
          '<c:varyColors val="0"/>'),
          (r = -1),
          o
            .filter(function (e, t) {
              return 0 < t;
            })
            .forEach(function (a, e) {
              r++,
                (c =
                  (c =
                    (c =
                      (c =
                        (c += "<c:ser>") + '  <c:idx val="'.concat(e, '"/>')) +
                      '  <c:order val="'.concat(e, '"/>') +
                      "  <c:tx>    <c:strRef>") +
                    "      <c:f>Sheet1!$".concat(B(e + 2), "$1</c:f>")) +
                  '      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>' +
                  I(a.name) +
                  "</c:v></c:pt></c:strCache>    </c:strRef>  </c:tx>  <c:spPr>");
              var A,
                t = n.chartColors[r % n.chartColors.length];
              "transparent" === t
                ? (c += "<a:noFill/>")
                : n.chartColorsOpacity
                ? (c +=
                    "<a:solidFill>" +
                    z(
                      t,
                      '<a:alpha val="' +
                        Math.round(1e3 * n.chartColorsOpacity).toString() +
                        '"/>'
                    ) +
                    "</a:solidFill>")
                : (c += "<a:solidFill>" + z(t) + "</a:solidFill>"),
                0 === n.lineSize
                  ? (c += "<a:ln><a:noFill/></a:ln>")
                  : (c =
                      (c += '<a:ln w="'
                        .concat(O(n.lineSize), '" cap="')
                        .concat(Re(n.lineCap), '"><a:solidFill>')
                        .concat(z(t), "</a:solidFill>")) +
                      '<a:prstDash val="'.concat(
                        n.lineDash || "solid",
                        '"/><a:round/></a:ln>'
                      )),
                (c =
                  (c = (c += b(n.shadow, s)) + "  </c:spPr>" + "<c:marker>") +
                  '  <c:symbol val="' +
                  n.lineDataSymbol +
                  '"/>'),
                n.lineDataSymbolSize &&
                  (c += '<c:size val="'.concat(n.lineDataSymbolSize, '"/>')),
                (c =
                  (c =
                    (c += "<c:spPr>") +
                    "<a:solidFill>".concat(
                      z(
                        n.chartColors[
                          e + 1 > n.chartColors.length
                            ? Math.floor(Math.random() * n.chartColors.length)
                            : e
                        ]
                      ),
                      "</a:solidFill>"
                    )) +
                  '<a:ln w="'
                    .concat(
                      n.lineDataSymbolLineSize,
                      '" cap="flat"><a:solidFill>'
                    )
                    .concat(
                      z(
                        n.lineDataSymbolLineColor ||
                          n.chartColors[r % n.chartColors.length]
                      ),
                      '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'
                    ) +
                  "<a:effectLst/></c:spPr></c:marker>"),
                n.showLabel &&
                  ((A = he("-xxxx-xxxx-xxxx-xxxxxxxxxxxx")),
                  !a.labels[0] ||
                    ("custom" !== n.dataLabelFormatScatter &&
                      "customXY" !== n.dataLabelFormatScatter) ||
                    ((c += "<c:dLbls>"),
                    a.labels[0].forEach(function (e, t) {
                      ("custom" !== n.dataLabelFormatScatter &&
                        "customXY" !== n.dataLabelFormatScatter) ||
                        ((c =
                          (c =
                            (c =
                              (c += "  <c:dLbl>") +
                              '    <c:idx val="'.concat(t, '"/>') +
                              "    <c:tx>      <c:rich>            <a:bodyPr>                <a:spAutoFit/>            </a:bodyPr>            <a:lstStyle/>            <a:p>                <a:pPr>                    <a:defRPr/>                </a:pPr>              <a:r>") +
                            '                    <a:rPr lang="' +
                            (n.lang || "en-US") +
                            '" dirty="0"/>') +
                          "                    <a:t>" +
                          I(e) +
                          "</a:t>              </a:r>"),
                        (c =
                          ("customXY" !== n.dataLabelFormatScatter ||
                          /^ *$/.test(e)
                            ? c
                            : (c =
                                (c =
                                  (c =
                                    (c =
                                      (c =
                                        (c =
                                          (c =
                                            (c =
                                              (c =
                                                (c += "              <a:r>") +
                                                '                  <a:rPr lang="' +
                                                (n.lang || "en-US") +
                                                '" baseline="0" dirty="0"/>                  <a:t> (</a:t>              </a:r>') +
                                              '              <a:fld id="{' +
                                              he(
                                                "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                                              ) +
                                              '}" type="XVALUE">') +
                                            '                  <a:rPr lang="' +
                                            (n.lang || "en-US") +
                                            '" baseline="0"/>                  <a:pPr>                      <a:defRPr/>                  </a:pPr>') +
                                          "                  <a:t>[" +
                                          I(a.name) +
                                          "</a:t>              </a:fld>              <a:r>") +
                                        '                  <a:rPr lang="' +
                                        (n.lang || "en-US") +
                                        '" baseline="0" dirty="0"/>                  <a:t>, </a:t>              </a:r>') +
                                      '              <a:fld id="{' +
                                      he(
                                        "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                                      ) +
                                      '}" type="YVALUE">') +
                                    '                  <a:rPr lang="' +
                                    (n.lang || "en-US") +
                                    '" baseline="0"/>                  <a:pPr>                      <a:defRPr/>                  </a:pPr>') +
                                  "                  <a:t>[" +
                                  I(a.name) +
                                  "]</a:t>              </a:fld>              <a:r>") +
                                '                  <a:rPr lang="' +
                                (n.lang || "en-US") +
                                '" baseline="0" dirty="0"/>                  <a:t>)</a:t>              </a:r>') +
                              '              <a:endParaRPr lang="' +
                              (n.lang || "en-US") +
                              '" dirty="0"/>') +
                          "            </a:p>      </c:rich>    </c:tx>    <c:spPr>        <a:noFill/>        <a:ln>            <a:noFill/>        </a:ln>        <a:effectLst/>    </c:spPr>"),
                        n.dataLabelPosition &&
                          (c +=
                            ' <c:dLblPos val="' + n.dataLabelPosition + '"/>'),
                        (c =
                          (c +=
                            '    <c:showLegendKey val="0"/>    <c:showVal val="0"/>    <c:showCatName val="0"/>    <c:showSerName val="0"/>    <c:showPercent val="0"/>    <c:showBubbleSize val="0"/>       <c:showLeaderLines val="1"/>    <c:extLst>      <c:ext uri="{CE6537A1-D6FC-4f65-9D91-7224C49458BB}" xmlns:c15="http://schemas.microsoft.com/office/drawing/2012/chart"/>      <c:ext uri="{C3380CC4-5D6E-409C-BE32-E72D297353CC}" xmlns:c16="http://schemas.microsoft.com/office/drawing/2014/chart">') +
                          '            <c16:uniqueId val="{'
                            .concat(
                              "00000000"
                                .substring(0, 8 - (t + 1).toString().length)
                                .toString()
                            )
                            .concat(t + 1)
                            .concat(A, '}"/>') +
                          "      </c:ext>        </c:extLst></c:dLbl>"));
                    }),
                    (c += "</c:dLbls>")),
                  "XY" === n.dataLabelFormatScatter) &&
                  ((c +=
                    '<c:dLbls>    <c:spPr>        <a:noFill/>        <a:ln>            <a:noFill/>        </a:ln>          <a:effectLst/>    </c:spPr>    <c:txPr>        <a:bodyPr>            <a:spAutoFit/>        </a:bodyPr>        <a:lstStyle/>        <a:p>            <a:pPr>                <a:defRPr/>            </a:pPr>            <a:endParaRPr lang="en-US"/>        </a:p>    </c:txPr>'),
                  n.dataLabelPosition &&
                    (c += ' <c:dLblPos val="' + n.dataLabelPosition + '"/>'),
                  (c =
                    (c =
                      (c =
                        (c += '    <c:showLegendKey val="0"/>') +
                        ' <c:showVal val="'.concat(
                          n.showLabel ? "1" : "0",
                          '"/>'
                        )) +
                      ' <c:showCatName val="'.concat(
                        n.showLabel ? "1" : "0",
                        '"/>'
                      )) +
                    ' <c:showSerName val="'.concat(
                      n.showSerName ? "1" : "0",
                      '"/>'
                    ) +
                    '    <c:showPercent val="0"/>    <c:showBubbleSize val="0"/>    <c:extLst>        <c:ext uri="{CE6537A1-D6FC-4f65-9D91-7224C49458BB}" xmlns:c15="http://schemas.microsoft.com/office/drawing/2012/chart">            <c15:showLeaderLines val="1"/>        </c:ext>    </c:extLst></c:dLbls>')),
                1 === o.length &&
                  n.chartColors !== de &&
                  a.values.forEach(function (e, t) {
                    e =
                      e < 0
                        ? n.invertedColors || n.chartColors || de
                        : n.chartColors || [];
                    (c =
                      (c += "  <c:dPt>") +
                      '    <c:idx val="'.concat(t, '"/>') +
                      '      <c:invertIfNegative val="0"/>    <c:bubble3D val="0"/>    <c:spPr>'),
                      0 === n.lineSize
                        ? (c += "<a:ln><a:noFill/></a:ln>")
                        : (c =
                            (c += "<a:solidFill>") +
                            ' <a:srgbClr val="' +
                            e[t % e.length] +
                            '"/></a:solidFill>'),
                      (c = c + b(n.shadow, s) + "    </c:spPr>  </c:dPt>");
                  }),
                (c =
                  (c =
                    (c += "<c:xVal>  <c:numRef>") +
                    "    <c:f>Sheet1!$A$2:$A$".concat(
                      o[0].values.length + 1,
                      "</c:f>"
                    ) +
                    "    <c:numCache>      <c:formatCode>General</c:formatCode>") +
                  '      <c:ptCount val="'.concat(o[0].values.length, '"/>')),
                o[0].values.forEach(function (e, t) {
                  c += '<c:pt idx="'
                    .concat(t, '"><c:v>')
                    .concat(e || 0 === e ? e : "", "</c:v></c:pt>");
                }),
                (c =
                  (c =
                    (c +=
                      "    </c:numCache>  </c:numRef></c:xVal><c:yVal>  <c:numRef>") +
                    "    <c:f>Sheet1!$"
                      .concat(B(e + 2), "$2:$")
                      .concat(B(e + 2), "$")
                      .concat(o[0].values.length + 1, "</c:f>") +
                    "    <c:numCache>      <c:formatCode>General</c:formatCode>") +
                  '      <c:ptCount val="'.concat(o[0].values.length, '"/>')),
                o[0].values.forEach(function (e, t) {
                  c += '<c:pt idx="'
                    .concat(t, '"><c:v>')
                    .concat(
                      a.values[t] || 0 === a.values[t] ? a.values[t] : "",
                      "</c:v></c:pt>"
                    );
                }),
                (c =
                  (c += "    </c:numCache>  </c:numRef></c:yVal>") +
                  '<c:smooth val="' +
                  (n.lineSmooth ? "1" : "0") +
                  '"/></c:ser>');
            }),
          (c =
            (c =
              (c =
                (c =
                  (c += "  <c:dLbls>") +
                  '    <c:numFmt formatCode="'.concat(
                    I(n.dataLabelFormatCode) || "General",
                    '" sourceLinked="0"/>'
                  ) +
                  "    <c:txPr>      <a:bodyPr/>      <a:lstStyle/>      <a:p><a:pPr>") +
                '        <a:defRPr b="'
                  .concat(n.dataLabelFontBold ? "1" : "0", '" i="')
                  .concat(
                    n.dataLabelFontItalic ? "1" : "0",
                    '" strike="noStrike" sz="'
                  )
                  .concat(
                    Math.round(100 * (n.dataLabelFontSize || P)),
                    '" u="none">'
                  )) +
              "          <a:solidFill>" +
              z(n.dataLabelColor || w) +
              "</a:solidFill>") +
            '          <a:latin typeface="' +
            (n.dataLabelFontFace || "Arial") +
            '"/>        </a:defRPr>      </a:pPr></a:p>    </c:txPr>'),
          n.dataLabelPosition &&
            (c += ' <c:dLblPos val="' + n.dataLabelPosition + '"/>'),
          (c =
            (c =
              (c += '    <c:showLegendKey val="0"/>') +
              '    <c:showVal val="' +
              (n.showValue ? "1" : "0") +
              '"/>    <c:showCatName val="0"/>') +
            '    <c:showSerName val="' +
            (n.showSerName ? "1" : "0") +
            '"/>    <c:showPercent val="0"/>    <c:showBubbleSize val="0"/>  </c:dLbls>'),
          (c =
            (c += '<c:axId val="'
              .concat(t, '"/><c:axId val="')
              .concat(e, '"/>')) +
            ("</c:" + A + "Chart>"));
        break;
      case v.BUBBLE:
      case v.BUBBLE3D:
        (c = c + "<c:bubbleChart>" + '<c:varyColors val="0"/>'),
          (r = -1),
          o
            .filter(function (e, t) {
              return 0 < t;
            })
            .forEach(function (a, e) {
              r++,
                (c =
                  (c =
                    (c =
                      (c =
                        (c += "<c:ser>") + '  <c:idx val="'.concat(e, '"/>')) +
                      '  <c:order val="'.concat(e, '"/>') +
                      "  <c:tx>    <c:strRef>") +
                    "      <c:f>Sheet1!$" +
                    B(l + 1) +
                    "$1</c:f>") +
                  '      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>' +
                  I(a.name) +
                  "</c:v></c:pt></c:strCache>    </c:strRef>  </c:tx><c:spPr>");
              e = n.chartColors[r % n.chartColors.length];
              "transparent" === e
                ? (c += "<a:noFill/>")
                : n.chartColorsOpacity
                ? (c += "<a:solidFill>".concat(
                    z(
                      e,
                      '<a:alpha val="' +
                        Math.round(1e3 * n.chartColorsOpacity).toString() +
                        '"/>'
                    ),
                    "</a:solidFill>"
                  ))
                : (c += "<a:solidFill>" + z(e) + "</a:solidFill>"),
                0 === n.lineSize
                  ? (c += "<a:ln><a:noFill/></a:ln>")
                  : n.dataBorder
                  ? (c += '<a:ln w="'
                      .concat(O(n.dataBorder.pt), '" cap="flat"><a:solidFill>')
                      .concat(
                        z(n.dataBorder.color),
                        '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'
                      ))
                  : (c =
                      (c += '<a:ln w="'
                        .concat(O(n.lineSize), '" cap="flat"><a:solidFill>')
                        .concat(z(e), "</a:solidFill>")) +
                      '<a:prstDash val="'.concat(
                        n.lineDash || "solid",
                        '"/><a:round/></a:ln>'
                      )),
                (c = c + b(n.shadow, s) + "</c:spPr>"),
                (c =
                  (c =
                    (c += "<c:xVal>  <c:numRef>") +
                    "    <c:f>Sheet1!$A$2:$A$".concat(
                      o[0].values.length + 1,
                      "</c:f>"
                    ) +
                    "    <c:numCache>      <c:formatCode>General</c:formatCode>") +
                  '      <c:ptCount val="'.concat(o[0].values.length, '"/>')),
                o[0].values.forEach(function (e, t) {
                  c += '<c:pt idx="'
                    .concat(t, '"><c:v>')
                    .concat(e || 0 === e ? e : "", "</c:v></c:pt>");
                }),
                (c =
                  (c +=
                    "    </c:numCache>  </c:numRef></c:xVal><c:yVal>  <c:numRef>") +
                  "<c:f>Sheet1!$"
                    .concat(B(l + 1), "$2:$")
                    .concat(B(l + 1), "$")
                    .concat(o[0].values.length + 1, "</c:f>")),
                l++,
                (c =
                  (c +=
                    "    <c:numCache>      <c:formatCode>General</c:formatCode>") +
                  '      <c:ptCount val="'.concat(o[0].values.length, '"/>')),
                o[0].values.forEach(function (e, t) {
                  c += '<c:pt idx="'
                    .concat(t, '"><c:v>')
                    .concat(
                      a.values[t] || 0 === a.values[t] ? a.values[t] : "",
                      "</c:v></c:pt>"
                    );
                }),
                (c =
                  (c +=
                    "    </c:numCache>  </c:numRef></c:yVal>  <c:bubbleSize>    <c:numRef>") +
                  "<c:f>Sheet1!$"
                    .concat(B(l + 1), "$2:$")
                    .concat(B(l + 1), "$")
                    .concat(a.sizes.length + 1, "</c:f>")),
                l++,
                (c =
                  (c +=
                    "      <c:numCache>        <c:formatCode>General</c:formatCode>") +
                  '           <c:ptCount val="'.concat(a.sizes.length, '"/>')),
                a.sizes.forEach(function (e, t) {
                  c += '<c:pt idx="'
                    .concat(t, '"><c:v>')
                    .concat(e || "", "</c:v></c:pt>");
                }),
                (c =
                  (c += "      </c:numCache>    </c:numRef>  </c:bubbleSize>") +
                  '  <c:bubble3D val="' +
                  (A === v.BUBBLE3D ? "1" : "0") +
                  '"/></c:ser>');
            }),
          (c =
            (c =
              (c =
                (c =
                  (c += "<c:dLbls>") +
                  '<c:numFmt formatCode="'.concat(
                    I(n.dataLabelFormatCode) || "General",
                    '" sourceLinked="0"/>'
                  ) +
                  "<c:txPr><a:bodyPr/><a:lstStyle/><a:p><a:pPr>") +
                '<a:defRPr b="'
                  .concat(n.dataLabelFontBold ? 1 : 0, '" i="')
                  .concat(
                    n.dataLabelFontItalic ? 1 : 0,
                    '" strike="noStrike" sz="'
                  )
                  .concat(
                    Math.round(100 * Math.round(n.dataLabelFontSize || P)),
                    '" u="none">'
                  )) +
              "<a:solidFill>".concat(
                z(n.dataLabelColor || w),
                "</a:solidFill>"
              )) +
            '<a:latin typeface="'.concat(
              n.dataLabelFontFace || "Arial",
              '"/>'
            ) +
            "</a:defRPr></a:pPr></a:p></c:txPr>"),
          n.dataLabelPosition &&
            (c += '<c:dLblPos val="'.concat(n.dataLabelPosition, '"/>')),
          (c =
            (c =
              (c =
                (c =
                  (c += '<c:showLegendKey val="0"/>') +
                  '<c:showVal val="'.concat(n.showValue ? "1" : "0", '"/>')) +
                '<c:showCatName val="0"/><c:showSerName val="'.concat(
                  n.showSerName ? "1" : "0",
                  '"/><c:showPercent val="0"/><c:showBubbleSize val="0"/>'
                ) +
                '<c:extLst>  <c:ext uri="{CE6537A1-D6FC-4f65-9D91-7224C49458BB}" xmlns:c15="http://schemas.microsoft.com/office/drawing/2012/chart">') +
              '    <c15:showLeaderLines val="' +
              (n.showLeaderLines ? "1" : "0") +
              '"/>  </c:ext></c:extLst></c:dLbls>') +
            '<c:axId val="'.concat(t, '"/><c:axId val="').concat(e, '"/>') +
            "</c:bubbleChart>");
        break;
      case v.DOUGHNUT:
      case v.PIE:
        (a = o[0]),
          (c =
            (c =
              (c =
                (c =
                  (c =
                    (c =
                      (c =
                        (c =
                          (c =
                            c +
                            ("<c:" + A + "Chart>") +
                            '  <c:varyColors val="1"/>') +
                          "<c:ser>" +
                          '  <c:idx val="0"/>') +
                        '  <c:order val="0"/>' +
                        "  <c:tx>") +
                      "    <c:strRef>" +
                      "      <c:f>Sheet1!$B$1</c:f>") +
                    "      <c:strCache>" +
                    '        <c:ptCount val="1"/>') +
                  ('        <c:pt idx="0"><c:v>' +
                    I(a.name) +
                    "</c:v></c:pt>")) +
                "      </c:strCache>" +
                "    </c:strRef>") +
              "  </c:tx>" +
              "  <c:spPr>") +
            '    <a:solidFill><a:schemeClr val="accent1"/></a:solidFill>' +
            '    <a:ln w="9525" cap="flat"><a:solidFill><a:srgbClr val="F9F9F9"/></a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'),
          n.dataNoEffects ? (c += "<a:effectLst/>") : (c += b(n.shadow, s)),
          (c += "  </c:spPr>"),
          a.labels[0].forEach(function (e, t) {
            (c =
              (c =
                (c += "<c:dPt>") +
                ' <c:idx val="'.concat(t, '"/>') +
                ' <c:bubble3D val="0"/> <c:spPr>') +
              "<a:solidFill>".concat(
                z(
                  n.chartColors[
                    t + 1 > n.chartColors.length
                      ? Math.floor(Math.random() * n.chartColors.length)
                      : t
                  ]
                ),
                "</a:solidFill>"
              )),
              n.dataBorder &&
                (c += '<a:ln w="'
                  .concat(O(n.dataBorder.pt), '" cap="flat"><a:solidFill>')
                  .concat(
                    z(n.dataBorder.color),
                    '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'
                  )),
              (c = c + b(n.shadow, s) + "  </c:spPr></c:dPt>");
          }),
          (c += "<c:dLbls>"),
          a.labels[0].forEach(function (e, t) {
            (c =
              (c =
                (c =
                  (c =
                    (c = (c += "<c:dLbl>") + ' <c:idx val="'.concat(t, '"/>')) +
                    '  <c:numFmt formatCode="'.concat(
                      I(n.dataLabelFormatCode) || "General",
                      '" sourceLinked="0"/>'
                    ) +
                    "  <c:spPr/><c:txPr>   <a:bodyPr/><a:lstStyle/>   <a:p><a:pPr>") +
                  '   <a:defRPr sz="'
                    .concat(
                      Math.round(100 * (n.dataLabelFontSize || P)),
                      '" b="'
                    )
                    .concat(n.dataLabelFontBold ? 1 : 0, '" i="')
                    .concat(
                      n.dataLabelFontItalic ? 1 : 0,
                      '" u="none" strike="noStrike">'
                    )) +
                "    <a:solidFill>" +
                z(n.dataLabelColor || w) +
                "</a:solidFill>") +
              '    <a:latin typeface="'.concat(
                n.dataLabelFontFace || "Arial",
                '"/>'
              ) +
              "   </a:defRPr>      </a:pPr></a:p>    </c:txPr>"),
              A === v.PIE &&
                n.dataLabelPosition &&
                (c += '<c:dLblPos val="'.concat(n.dataLabelPosition, '"/>')),
              (c =
                (c =
                  (c =
                    (c =
                      (c += '    <c:showLegendKey val="0"/>') +
                      '    <c:showVal val="' +
                      (n.showValue ? "1" : "0") +
                      '"/>') +
                    '    <c:showCatName val="' +
                    (n.showLabel ? "1" : "0") +
                    '"/>') +
                  '    <c:showSerName val="' +
                  (n.showSerName ? "1" : "0") +
                  '"/>') +
                '    <c:showPercent val="' +
                (n.showPercent ? "1" : "0") +
                '"/>    <c:showBubbleSize val="0"/>  </c:dLbl>');
          }),
          (c =
            (c =
              (c =
                (c =
                  (c =
                    (c =
                      (c =
                        (c =
                          (c =
                            (c =
                              (c =
                                (c =
                                  (c =
                                    (c =
                                      c +
                                      ' <c:numFmt formatCode="'.concat(
                                        I(n.dataLabelFormatCode) || "General",
                                        '" sourceLinked="0"/>'
                                      ) +
                                      "    <c:txPr>") +
                                    "      <a:bodyPr/>" +
                                    "      <a:lstStyle/>") +
                                  "      <a:p>" +
                                  "        <a:pPr>") +
                                '          <a:defRPr sz="1800" b="'
                                  .concat(
                                    n.dataLabelFontBold ? "1" : "0",
                                    '" i="'
                                  )
                                  .concat(
                                    n.dataLabelFontItalic ? "1" : "0",
                                    '" u="none" strike="noStrike">'
                                  ) +
                                '            <a:solidFill><a:srgbClr val="000000"/></a:solidFill><a:latin typeface="Arial"/>') +
                              "          </a:defRPr>" +
                              "        </a:pPr>") +
                            "      </a:p>" +
                            "    </c:txPr>") +
                          (A === v.PIE ? '<c:dLblPos val="ctr"/>' : "")) +
                        '    <c:showLegendKey val="0"/>' +
                        '    <c:showVal val="0"/>') +
                      '    <c:showCatName val="1"/>' +
                      '    <c:showSerName val="0"/>') +
                    '    <c:showPercent val="1"/>' +
                    '    <c:showBubbleSize val="0"/>') +
                  ' <c:showLeaderLines val="'.concat(
                    n.showLeaderLines ? "1" : "0",
                    '"/>'
                  ) +
                  "</c:dLbls>") +
                "<c:cat>" +
                "  <c:strRef>") +
              "    <c:f>Sheet1!$A$2:$A$".concat(
                a.labels[0].length + 1,
                "</c:f>"
              ) +
              "    <c:strCache>") +
            '         <c:ptCount val="'.concat(a.labels[0].length, '"/>')),
          a.labels[0].forEach(function (e, t) {
            c += '<c:pt idx="'
              .concat(t, '"><c:v>')
              .concat(I(e), "</c:v></c:pt>");
          }),
          (c =
            (c =
              (c =
                (c =
                  (c += "    </c:strCache>") + "  </c:strRef>" + "</c:cat>") +
                "  <c:val>" +
                "    <c:numRef>") +
              "      <c:f>Sheet1!$B$2:$B$".concat(
                a.labels[0].length + 1,
                "</c:f>"
              ) +
              "      <c:numCache>") +
            '           <c:ptCount val="'.concat(a.labels[0].length, '"/>')),
          a.values.forEach(function (e, t) {
            c += '<c:pt idx="'
              .concat(t, '"><c:v>')
              .concat(e || 0 === e ? e : "", "</c:v></c:pt>");
          }),
          (c =
            (c =
              (c = c + "      </c:numCache>" + "    </c:numRef>") +
              "  </c:val>" +
              "  </c:ser>") +
            '  <c:firstSliceAng val="'.concat(
              n.firstSliceAng ? Math.round(n.firstSliceAng) : 0,
              '"/>'
            )),
          A === v.DOUGHNUT &&
            (c += '<c:holeSize val="'.concat(
              "number" == typeof n.holeSize ? n.holeSize : "50",
              '"/>'
            )),
          (c += "</c:" + A + "Chart>");
        break;
      default:
        c += "";
    }
    return c;
  }
  function Se(t, e, a) {
    var A = "";
    return (
      t._type === v.SCATTER || t._type === v.BUBBLE || t._type === v.BUBBLE3D
        ? (A += "<c:valAx>")
        : (A += "<c:" + (t.catLabelFormatCode ? "dateAx" : "catAx") + ">"),
      (A =
        (A += '  <c:axId val="' + e + '"/>') +
        "  <c:scaling>" +
        ('<c:orientation val="' +
          (t.catAxisOrientation || (t.barDir, "minMax")) +
          '"/>')),
      (!t.catAxisMaxVal && 0 !== t.catAxisMaxVal) ||
        (A += '<c:max val="'.concat(t.catAxisMaxVal, '"/>')),
      (!t.catAxisMinVal && 0 !== t.catAxisMinVal) ||
        (A += '<c:min val="'.concat(t.catAxisMinVal, '"/>')),
      (A =
        (A =
          (A =
            A +
            "</c:scaling>" +
            ('  <c:delete val="' + (t.catAxisHidden ? "1" : "0") + '"/>')) +
          ('  <c:axPos val="' + ("col" === t.barDir ? "b" : "l") + '"/>')) +
        ("none" !== t.catGridLine.style ? Fe(t.catGridLine) : "")),
      t.showCatAxisTitle &&
        (A += Ne({
          color: t.catAxisTitleColor,
          fontFace: t.catAxisTitleFontFace,
          fontSize: t.catAxisTitleFontSize,
          titleRotate: t.catAxisTitleRotate,
          title: t.catAxisTitle || "Axis Title",
        })),
      t._type === v.SCATTER || t._type === v.BUBBLE || t._type === v.BUBBLE3D
        ? (A +=
            '  <c:numFmt formatCode="' +
            (t.valAxisLabelFormatCode
              ? I(t.valAxisLabelFormatCode)
              : "General") +
            '" sourceLinked="1"/>')
        : (A +=
            '  <c:numFmt formatCode="' +
            (I(t.catLabelFormatCode) || "General") +
            '" sourceLinked="1"/>'),
      t._type === v.SCATTER
        ? (A +=
            '  <c:majorTickMark val="none"/>  <c:minorTickMark val="none"/>  <c:tickLblPos val="nextTo"/>')
        : (A =
            (A =
              (A +=
                '  <c:majorTickMark val="' +
                (t.catAxisMajorTickMark || "out") +
                '"/>') +
              '  <c:minorTickMark val="' +
              (t.catAxisMinorTickMark || "none") +
              '"/>') +
            '  <c:tickLblPos val="' +
            (t.catAxisLabelPos || ("col" === t.barDir ? "low" : "nextTo")) +
            '"/>'),
      (A =
        (A =
          (A =
            (A =
              (A =
                (A += "  <c:spPr>") +
                '    <a:ln w="'.concat(
                  t.catAxisLineSize ? O(t.catAxisLineSize) : x,
                  '" cap="flat">'
                )) +
              (t.catAxisLineShow
                ? "<a:solidFill>" +
                  z(t.catAxisLineColor || C.color) +
                  "</a:solidFill>"
                : "<a:noFill/>")) +
            ('      <a:prstDash val="' +
              (t.catAxisLineStyle || "solid") +
              '"/>')) +
          "      <a:round/>" +
          "    </a:ln>") +
        "  </c:spPr>" +
        "  <c:txPr>"),
      t.catAxisLabelRotate
        ? (A += '<a:bodyPr rot="'.concat(k(t.catAxisLabelRotate), '"/>'))
        : (A += "<a:bodyPr/>"),
      (A =
        (A =
          (A =
            (A =
              (A =
                (A =
                  (A =
                    (A =
                      (A =
                        (A =
                          (A += "    <a:lstStyle/>") +
                          "    <a:p>" +
                          "    <a:pPr>") +
                        '      <a:defRPr sz="'
                          .concat(
                            Math.round(100 * (t.catAxisLabelFontSize || P)),
                            '" b="'
                          )
                          .concat(t.catAxisLabelFontBold ? 1 : 0, '" i="')
                          .concat(
                            t.catAxisLabelFontItalic ? 1 : 0,
                            '" u="none" strike="noStrike">'
                          )) +
                      ("      <a:solidFill>" +
                        z(t.catAxisLabelColor || w) +
                        "</a:solidFill>")) +
                    ('      <a:latin typeface="' +
                      (t.catAxisLabelFontFace || "Arial") +
                      '"/>')) +
                  "   </a:defRPr>" +
                  "  </a:pPr>") +
                ('  <a:endParaRPr lang="' + (t.lang || "en-US") + '"/>') +
                "  </a:p>") +
              " </c:txPr>" +
              (' <c:crossAx val="' + a + '"/>')) +
            " <c:"
              .concat(
                "number" == typeof t.valAxisCrossesAt ? "crossesAt" : "crosses",
                ' val="'
              )
              .concat(t.valAxisCrossesAt || "autoZero", '"/>')) +
          ' <c:auto val="1"/>' +
          ' <c:lblAlgn val="ctr"/>') +
        ' <c:noMultiLvlLbl val="'.concat(
          t.catAxisMultiLevelLabels ? 0 : 1,
          '"/>'
        )),
      t.catAxisLabelFrequency &&
        (A += ' <c:tickLblSkip val="' + t.catAxisLabelFrequency + '"/>'),
      (t.catLabelFormatCode ||
        t._type === v.SCATTER ||
        t._type === v.BUBBLE ||
        t._type === v.BUBBLE3D) &&
        (t.catLabelFormatCode &&
          ([
            "catAxisBaseTimeUnit",
            "catAxisMajorTimeUnit",
            "catAxisMinorTimeUnit",
          ].forEach(function (e) {
            !t[e] ||
              ("string" == typeof t[e] &&
                ["days", "months", "years"].includes(t[e].toLowerCase())) ||
              (console.warn(
                '"'.concat(e, "\" must be one of: 'days','months','years' !")
              ),
              (t[e] = null));
          }),
          t.catAxisBaseTimeUnit &&
            (A +=
              '<c:baseTimeUnit val="' +
              t.catAxisBaseTimeUnit.toLowerCase() +
              '"/>'),
          t.catAxisMajorTimeUnit &&
            (A +=
              '<c:majorTimeUnit val="' +
              t.catAxisMajorTimeUnit.toLowerCase() +
              '"/>'),
          t.catAxisMinorTimeUnit) &&
          (A +=
            '<c:minorTimeUnit val="' +
            t.catAxisMinorTimeUnit.toLowerCase() +
            '"/>'),
        t.catAxisMajorUnit &&
          (A += '<c:majorUnit val="'.concat(t.catAxisMajorUnit, '"/>')),
        t.catAxisMinorUnit) &&
        (A += '<c:minorUnit val="'.concat(t.catAxisMinorUnit, '"/>')),
      t._type === v.SCATTER || t._type === v.BUBBLE || t._type === v.BUBBLE3D
        ? (A += "</c:valAx>")
        : (A += "</c:" + (t.catLabelFormatCode ? "dateAx" : "catAx") + ">"),
      A
    );
  }
  function Ee(e, t) {
    var a =
        t === L
          ? "col" === e.barDir
            ? "l"
            : "b"
          : "col" !== e.barDir
          ? "r"
          : "t",
      A = (t === le && (a = "r"), t === L ? ce : ie),
      o = "",
      o =
        (o += "<c:valAx>") + ('  <c:axId val="' + t + '"/>') + "  <c:scaling>";
    return (
      e.valAxisLogScaleBase &&
        (o += '<c:logBase val="'.concat(e.valAxisLogScaleBase, '"/>')),
      (o +=
        '<c:orientation val="' +
        (e.valAxisOrientation || (e.barDir, "minMax")) +
        '"/>'),
      (!e.valAxisMaxVal && 0 !== e.valAxisMaxVal) ||
        (o += '<c:max val="'.concat(e.valAxisMaxVal, '"/>')),
      (!e.valAxisMinVal && 0 !== e.valAxisMinVal) ||
        (o += '<c:min val="'.concat(e.valAxisMinVal, '"/>')),
      (o =
        (o += "  </c:scaling>") +
        '  <c:delete val="'.concat(e.valAxisHidden ? 1 : 0, '"/>') +
        ('  <c:axPos val="' + a + '"/>')),
      "none" !== e.valGridLine.style && (o += Fe(e.valGridLine)),
      e.showValAxisTitle &&
        (o += Ne({
          color: e.valAxisTitleColor,
          fontFace: e.valAxisTitleFontFace,
          fontSize: e.valAxisTitleFontSize,
          titleRotate: e.valAxisTitleRotate,
          title: e.valAxisTitle || "Axis Title",
        })),
      (o += '<c:numFmt formatCode="'.concat(
        e.valAxisLabelFormatCode ? I(e.valAxisLabelFormatCode) : "General",
        '" sourceLinked="0"/>'
      )),
      e._type === v.SCATTER
        ? (o +=
            '  <c:majorTickMark val="none"/>  <c:minorTickMark val="none"/>  <c:tickLblPos val="nextTo"/>')
        : (o =
            (o =
              (o +=
                ' <c:majorTickMark val="' +
                (e.valAxisMajorTickMark || "out") +
                '"/>') +
              ' <c:minorTickMark val="' +
              (e.valAxisMinorTickMark || "none") +
              '"/>') +
            ' <c:tickLblPos val="' +
            (e.valAxisLabelPos || ("col" === e.barDir ? "nextTo" : "low")) +
            '"/>'),
      (o =
        (o =
          (o =
            (o =
              (o =
                (o =
                  (o =
                    (o =
                      (o =
                        (o =
                          (o =
                            (o =
                              (o =
                                (o += " <c:spPr>") +
                                '   <a:ln w="'.concat(
                                  e.valAxisLineSize ? O(e.valAxisLineSize) : x,
                                  '" cap="flat">'
                                )) +
                              (e.valAxisLineShow
                                ? "<a:solidFill>" +
                                  z(e.valAxisLineColor || C.color) +
                                  "</a:solidFill>"
                                : "<a:noFill/>")) +
                            ('     <a:prstDash val="' +
                              (e.valAxisLineStyle || "solid") +
                              '"/>')) +
                          "     <a:round/>" +
                          "   </a:ln>") +
                        " </c:spPr>" +
                        " <c:txPr>") +
                      "  <a:bodyPr".concat(
                        e.valAxisLabelRotate
                          ? ' rot="' + k(e.valAxisLabelRotate).toString() + '"'
                          : "",
                        "/>"
                      ) +
                      "  <a:lstStyle/>") +
                    "  <a:p>" +
                    "    <a:pPr>") +
                  '      <a:defRPr sz="'
                    .concat(
                      Math.round(100 * (e.valAxisLabelFontSize || P)),
                      '" b="'
                    )
                    .concat(e.valAxisLabelFontBold ? 1 : 0, '" i="')
                    .concat(
                      e.valAxisLabelFontItalic ? 1 : 0,
                      '" u="none" strike="noStrike">'
                    )) +
                ("        <a:solidFill>" +
                  z(e.valAxisLabelColor || w) +
                  "</a:solidFill>")) +
              ('        <a:latin typeface="' +
                (e.valAxisLabelFontFace || "Arial") +
                '"/>')) +
            "      </a:defRPr>" +
            "    </a:pPr>") +
          ('  <a:endParaRPr lang="' + (e.lang || "en-US") + '"/>') +
          "  </a:p>") +
        " </c:txPr>" +
        (' <c:crossAx val="' + A + '"/>')),
      "number" == typeof e.catAxisCrossesAt
        ? (o += ' <c:crossesAt val="'.concat(e.catAxisCrossesAt, '"/>'))
        : "string" == typeof e.catAxisCrossesAt
        ? (o += ' <c:crosses val="' + e.catAxisCrossesAt + '"/>')
        : (o +=
            ' <c:crosses val="' +
            ("r" === a || "t" === a ? "max" : "autoZero") +
            '"/>'),
      (o +=
        ' <c:crossBetween val="' +
        (e._type === v.SCATTER ||
        (Array.isArray(e._type) &&
          0 <
            e._type.filter(function (e) {
              return e.type === v.AREA;
            }).length)
          ? "midCat"
          : "between") +
        '"/>'),
      e.valAxisMajorUnit &&
        (o += ' <c:majorUnit val="'.concat(e.valAxisMajorUnit, '"/>')),
      e.valAxisDisplayUnit &&
        (o += '<c:dispUnits><c:builtInUnit val="'
          .concat(e.valAxisDisplayUnit, '"/>')
          .concat(
            e.valAxisDisplayUnitLabel ? "<c:dispUnitsLbl/>" : "",
            "</c:dispUnits>"
          )),
      (o += "</c:valAx>")
    );
  }
  function Ne(e, t, a) {
    var A =
        "left" === e.titleAlign || "right" === e.titleAlign
          ? '<a:pPr algn="'.concat(e.titleAlign.substring(0, 1), '">')
          : "<a:pPr>",
      o = e.titleRotate
        ? '<a:bodyPr rot="'.concat(k(e.titleRotate), '"/>')
        : "<a:bodyPr/>",
      n = e.fontSize ? 'sz="'.concat(Math.round(100 * e.fontSize), '"') : "",
      r = e.titleBold ? 1 : 0,
      l = "<c:layout/>";
    return (
      e.titlePos &&
        "number" == typeof e.titlePos.x &&
        "number" == typeof e.titlePos.y &&
        (1 <= (t = 0 === (t = e.titlePos.x + t) ? 0 : (t * (t / 5)) / 10) &&
          (t /= 10),
        0.1 <= t && (t /= 10),
        1 <= (a = 0 === (a = e.titlePos.y + a) ? 0 : (a * (a / 5)) / 10) &&
          (a /= 10),
        0.1 <= a && (a /= 10),
        (l =
          '<c:layout><c:manualLayout><c:xMode val="edge"/><c:yMode val="edge"/><c:x val="'
            .concat(t, '"/><c:y val="')
            .concat(a, '"/></c:manualLayout></c:layout>'))),
      "<c:title>\n      <c:tx>\n        <c:rich>\n          "
        .concat(o, "\n          <a:lstStyle/>\n          <a:p>\n            ")
        .concat(A, "\n            <a:defRPr ")
        .concat(n, ' b="')
        .concat(
          r,
          '" i="0" u="none" strike="noStrike">\n              <a:solidFill>'
        )
        .concat(
          z(e.color || w),
          '</a:solidFill>\n              <a:latin typeface="'
        )
        .concat(
          e.fontFace || "Arial",
          '"/>\n            </a:defRPr>\n          </a:pPr>\n          <a:r>\n            <a:rPr '
        )
        .concat(n, ' b="')
        .concat(
          r,
          '" i="0" u="none" strike="noStrike">\n              <a:solidFill>'
        )
        .concat(
          z(e.color || w),
          '</a:solidFill>\n              <a:latin typeface="'
        )
        .concat(
          e.fontFace || "Arial",
          '"/>\n            </a:rPr>\n            <a:t>'
        )
        .concat(
          I(e.title) || "",
          "</a:t>\n          </a:r>\n        </a:p>\n        </c:rich>\n      </c:tx>\n      "
        )
        .concat(l, '\n      <c:overlay val="0"/>\n    </c:title>')
    );
  }
  function B(e) {
    e -= 1;
    return e <= 25
      ? pe[e]
      : "".concat(pe[Math.floor(e / pe.length - 1)]).concat(pe[e % pe.length]);
  }
  function b(e, t) {
    var a, A, o, n, r, l;
    return e
      ? "object" != typeof e
        ? (console.warn(
            "`shadow` options must be an object. Ex: `{shadow: {type:'none'}}`"
          ),
          "<a:effectLst/>")
        : ((a = "<a:effectLst>"),
          (e = (t = y(y({}, t), e)).type || "outer"),
          (A = O(t.blur)),
          (o = O(t.offset)),
          (n = Math.round(6e4 * t.angle)),
          (r = t.color),
          (l = Math.round(1e5 * t.opacity)),
          (t = t.rotateWithShape ? 1 : 0),
          (a =
            (a =
              (a += "<a:"
                .concat(
                  e,
                  'Shdw sx="100000" sy="100000" kx="0" ky="0"  algn="bl" blurRad="'
                )
                .concat(A, '" rotWithShape="')
                .concat(t, '" dist="')
                .concat(o, '" dir="')
                .concat(n, '">')) + '<a:srgbClr val="'.concat(r, '">')) +
            '<a:alpha val="'.concat(l, '"/></a:srgbClr>')) +
            "</a:".concat(e, "Shdw>") +
            "</a:effectLst>")
      : "<a:effectLst/>";
  }
  function Fe(e) {
    var t = "<c:majorGridlines>";
    return (
      (t += " <c:spPr>") +
      '  <a:ln w="'
        .concat(O(e.size || C.size), '" cap="')
        .concat(Re(e.cap || C.cap), '">') +
      ('  <a:solidFill><a:srgbClr val="' +
        (e.color || C.color) +
        '"/></a:solidFill>') +
      ('   <a:prstDash val="' + (e.style || C.style) + '"/><a:round/>') +
      "  </a:ln>" +
      " </c:spPr>" +
      "</c:majorGridlines>"
    );
  }
  function Re(e) {
    if (e && "flat" !== e) {
      if ("square" === e) return "sq";
      if ("round" === e) return "rnd";
      throw new Error("Invalid chart line cap: ".concat(e));
    }
    return "flat";
  }
  function Ie(e) {
    var n =
        "undefined" != typeof require && "undefined" == typeof window
          ? require("fs")
          : null,
      // r =
      //   "undefined" != typeof require && "undefined" == typeof window
      //     ? require("https")
      //     : null,
      r = null,
      t = [],
      l = e._relsMedia.filter(function (e) {
        return (
          "online" !== e.type &&
          !e.data &&
          (!e.path || (e.path && !e.path.includes("preencoded")))
        );
      }),
      a = [];
    return (
      l.forEach(function (e) {
        a.includes(e.path)
          ? (e.isDuplicate = !0)
          : ((e.isDuplicate = !1), a.push(e.path));
      }),
      l
        .filter(function (e) {
          return !e.isDuplicate;
        })
        .forEach(function (o) {
          t.push(
            new Promise(function (a, A) {
              var t;
              if (n && 0 !== o.path.indexOf("http"))
                try {
                  var e = n.readFileSync(o.path);
                  (o.data = Buffer.from(e).toString("base64")),
                    l
                      .filter(function (e) {
                        return e.isDuplicate && e.path === o.path;
                      })
                      .forEach(function (e) {
                        return (e.data = o.data);
                      }),
                    a("done");
                } catch (e) {
                  (o.data = h),
                    l
                      .filter(function (e) {
                        return e.isDuplicate && e.path === o.path;
                      })
                      .forEach(function (e) {
                        return (e.data = o.data);
                      }),
                    A(
                      new Error(
                        'ERROR: Unable to read media: "'
                          .concat(o.path, '"\n')
                          .concat(String(e))
                      )
                    );
                }
              else
                n && r && 0 === o.path.indexOf("http")
                  ? r.get(o.path, function (e) {
                      var t = "";
                      e.setEncoding("binary"),
                        e.on("data", function (e) {
                          return (t += e);
                        }),
                        e.on("end", function () {
                          (o.data = Buffer.from(t, "binary").toString(
                            "base64"
                          )),
                            l
                              .filter(function (e) {
                                return e.isDuplicate && e.path === o.path;
                              })
                              .forEach(function (e) {
                                return (e.data = o.data);
                              }),
                            a("done");
                        }),
                        e.on("error", function (e) {
                          (o.data = h),
                            l
                              .filter(function (e) {
                                return e.isDuplicate && e.path === o.path;
                              })
                              .forEach(function (e) {
                                return (e.data = o.data);
                              }),
                            A(
                              new Error(
                                "ERROR! Unable to load image (https.get): ".concat(
                                  o.path
                                )
                              )
                            );
                        });
                    })
                  : (((t = new XMLHttpRequest()).onload = function () {
                      var e = new FileReader();
                      (e.onloadend = function () {
                        (o.data = e.result),
                          l
                            .filter(function (e) {
                              return e.isDuplicate && e.path === o.path;
                            })
                            .forEach(function (e) {
                              return (e.data = o.data);
                            }),
                          o.isSvgPng
                            ? Me(o)
                                .then(function () {
                                  a("done");
                                })
                                .catch(function (e) {
                                  A(e);
                                })
                            : a("done");
                      }),
                        e.readAsDataURL(t.response);
                    }),
                    (t.onerror = function (e) {
                      (o.data = h),
                        l
                          .filter(function (e) {
                            return e.isDuplicate && e.path === o.path;
                          })
                          .forEach(function (e) {
                            return (e.data = o.data);
                          }),
                        A(
                          new Error(
                            "ERROR! Unable to load image (xhr.onerror): ".concat(
                              o.path
                            )
                          )
                        );
                    }),
                    t.open("GET", o.path),
                    (t.responseType = "blob"),
                    t.send());
            })
          );
        }),
      e._relsMedia
        .filter(function (e) {
          return e.isSvgPng && e.data;
        })
        .forEach(function (e) {
          n
            ? ((e.data = h),
              t.push(
                Promise.resolve().then(function () {
                  return "done";
                })
              ))
            : t.push(Me(e));
        }),
      t
    );
  }
  function Me(o) {
    return p(this, void 0, void 0, function () {
      return d(this, function (e) {
        switch (e.label) {
          case 0:
            return [
              4,
              new Promise(function (a, t) {
                var A = new Image();
                (A.onload = function () {
                  A.width + A.height === 0 && A.onerror("h/w=0");
                  var e = document.createElement("CANVAS"),
                    t = e.getContext("2d");
                  (e.width = A.width),
                    (e.height = A.height),
                    t.drawImage(A, 0, 0);
                  try {
                    (o.data = e.toDataURL(o.type)), a("done");
                  } catch (e) {
                    A.onerror(e);
                  }
                }),
                  (A.onerror = function (e) {
                    (o.data = h),
                      t(
                        new Error(
                          "ERROR! Unable to load image (image.onerror): ".concat(
                            o.path
                          )
                        )
                      );
                  }),
                  (A.src = "string" == typeof o.data ? o.data : h);
              }),
            ];
          case 1:
            return [2, e.sent()];
        }
      });
    });
  }
  var Oe = {
    cover: function (e, t) {
      var e = e.h / e.w,
        a = e < t.h / t.w,
        A = a ? t.h / e : t.w,
        a = a ? t.h : t.w * e,
        e = Math.round(5e4 * (1 - t.w / A)),
        A = Math.round(5e4 * (1 - t.h / a));
      return '<a:srcRect l="'
        .concat(e, '" r="')
        .concat(e, '" t="')
        .concat(A, '" b="')
        .concat(A, '"/><a:stretch/>');
    },
    contain: function (e, t) {
      var e = e.h / e.w,
        a = e < t.h / t.w,
        A = a ? t.w : t.h / e,
        a = a ? t.w * e : t.h,
        e = Math.round(5e4 * (1 - t.w / A)),
        A = Math.round(5e4 * (1 - t.h / a));
      return '<a:srcRect l="'
        .concat(e, '" r="')
        .concat(e, '" t="')
        .concat(A, '" b="')
        .concat(A, '"/><a:stretch/>');
    },
    crop: function (e, t) {
      var a = t.x,
        A = e.w - (t.x + t.w),
        o = t.y,
        t = e.h - (t.y + t.h),
        a = Math.round((a / e.w) * 1e5),
        A = Math.round((A / e.w) * 1e5),
        o = Math.round((o / e.h) * 1e5),
        t = Math.round((t / e.h) * 1e5);
      return '<a:srcRect l="'
        .concat(a, '" r="')
        .concat(A, '" t="')
        .concat(o, '" b="')
        .concat(t, '"/><a:stretch/>');
    },
  };
  function ke(D) {
    var e,
      S = D._name ? '<p:cSld name="' + D._name + '">' : "<p:cSld>",
      E = 1;
    return (
      D._bkgdImgRid
        ? (S +=
            '<p:bg><p:bgPr><a:blipFill dpi="0" rotWithShape="1"><a:blip r:embed="rId'.concat(
              D._bkgdImgRid,
              '"><a:lum/></a:blip><a:srcRect/><a:stretch><a:fillRect/></a:stretch></a:blipFill><a:effectLst/></p:bgPr></p:bg>'
            ))
        : null != (e = D.background) && e.color
        ? (S += "<p:bg><p:bgPr>".concat(U(D.background), "</p:bgPr></p:bg>"))
        : !D.bkgd &&
          D._name &&
          D._name === ae &&
          (S +=
            '<p:bg><p:bgRef idx="1001"><a:schemeClr val="bg1"/></p:bgRef></p:bg>'),
      (S =
        (S =
          S +
          "<p:spTree>" +
          '<p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>') +
        '<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/>' +
        '<a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>'),
      D._slideObjects.forEach(function (A, e) {
        var t,
          a,
          c,
          o,
          n,
          r,
          l,
          i,
          s = 0,
          p = 0,
          d = R("75%", "X", D._presLayout),
          f = 0,
          u = "",
          h = null,
          g = 0,
          m = 0,
          b = null,
          y = null == (t = A.options) ? void 0 : t.sizing,
          v = null == (t = A.options) ? void 0 : t.rounding,
          x =
            (void 0 !== D._slideLayout &&
              void 0 !== D._slideLayout._slideObjects &&
              A.options &&
              A.options.placeholder &&
              (a = D._slideLayout._slideObjects.filter(function (e) {
                return e.options.placeholder === A.options.placeholder;
              })[0]),
            (A.options = A.options || {}),
            void 0 !== A.options.x && (s = R(A.options.x, "X", D._presLayout)),
            void 0 !== A.options.y && (p = R(A.options.y, "Y", D._presLayout)),
            (d =
              void 0 !== A.options.w ? R(A.options.w, "X", D._presLayout) : d)),
          C = (f =
            void 0 !== A.options.h ? R(A.options.h, "Y", D._presLayout) : f);
        switch (
          (a &&
            ((!a.options.x && 0 !== a.options.x) ||
              (s = R(a.options.x, "X", D._presLayout)),
            (!a.options.y && 0 !== a.options.y) ||
              (p = R(a.options.y, "Y", D._presLayout)),
            (!a.options.w && 0 !== a.options.w) ||
              (d = R(a.options.w, "X", D._presLayout)),
            (!a.options.h && 0 !== a.options.h) ||
              (f = R(a.options.h, "Y", D._presLayout))),
          A.options.flipH && (u += ' flipH="1"'),
          A.options.flipV && (u += ' flipV="1"'),
          A.options.rotate && (u += ' rot="'.concat(k(A.options.rotate), '"')),
          A._type)
        ) {
          case N.table:
            if (
              ((h = A.arrTabRows),
              (c = A.options),
              h[(m = g = 0)].forEach(function (e) {
                (o = e.options || null),
                  (g += null !== o && o.colspan ? Number(o.colspan) : 1);
              }),
              (b = '<p:graphicFrame><p:nvGraphicFramePr><p:cNvPr id="'
                .concat(E * D._slideNum + 1, '" name="')
                .concat(A.options.objectName, '"/>')),
              (b =
                (b +=
                  '<p:cNvGraphicFramePr><a:graphicFrameLocks noGrp="1"/></p:cNvGraphicFramePr>  <p:nvPr><p:extLst><p:ext uri="{D42A27DB-BD31-4B8C-83A1-F6EECF244321}"><p14:modId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1579011935"/></p:ext></p:extLst></p:nvPr></p:nvGraphicFramePr>') +
                '<p:xfrm><a:off x="'
                  .concat(s || (0 === s ? 0 : F), '" y="')
                  .concat(p || (0 === p ? 0 : F), '"/><a:ext cx="')
                  .concat(d || (0 === d ? 0 : F), '" cy="')
                  .concat(f || F, '"/></p:xfrm>') +
                '<a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/table"><a:tbl><a:tblPr/>'),
              Array.isArray(c.colW))
            ) {
              b += "<a:tblGrid>";
              for (var w = 0; w < g; w++) {
                var P = M(c.colW[w]);
                (null != P && !isNaN(P)) ||
                  (P = ("number" == typeof A.options.w ? A.options.w : 1) / g),
                  (b += '<a:gridCol w="'.concat(Math.round(P), '"/>'));
              }
            } else {
              (m = c.colW || F),
                A.options.w &&
                  !c.colW &&
                  (m = Math.round(
                    ("number" == typeof A.options.w ? A.options.w : 1) / g
                  )),
                (b += "<a:tblGrid>");
              for (var L = 0; L < g; L++)
                b += '<a:gridCol w="'.concat(m, '"/>');
            }
            (b += "</a:tblGrid>"),
              h.forEach(function (o) {
                for (var n, r, e = 0; e < o.length; )
                  !(function (e) {
                    var t = o[e],
                      a = null == (n = t.options) ? void 0 : n.colspan,
                      A = null == (n = t.options) ? void 0 : n.rowspan;
                    a && 1 < a
                      ? ((t = new Array(a - 1).fill(void 0).map(function (e) {
                          return {
                            _type: N.tablecell,
                            options: { rowspan: A },
                            _hmerge: !0,
                          };
                        })),
                        o.splice.apply(o, Q([e + 1, 0], t, !1)),
                        (e += a))
                      : (e += 1),
                      (r = e);
                  })(e),
                    (e = r);
              }),
              h.forEach(function (e, t) {
                var o = h[t + 1];
                o &&
                  e.forEach(function (e, t) {
                    var a =
                        e._rowContinue ||
                        (null == (a = e.options) ? void 0 : a.rowspan),
                      A = null == (A = e.options) ? void 0 : A.colspan,
                      e = e._hmerge;
                    a &&
                      1 < a &&
                      ((A = {
                        _type: N.tablecell,
                        options: { colspan: A },
                        _rowContinue: a - 1,
                        _vmerge: !0,
                        _hmerge: e,
                      }),
                      o.splice(t, 0, A));
                  });
              }),
              h.forEach(function (e, t) {
                var a = 0;
                Array.isArray(c.rowH) && c.rowH[t]
                  ? (a = M(Number(c.rowH[t])))
                  : c.rowH && !isNaN(Number(c.rowH))
                  ? (a = M(Number(c.rowH)))
                  : (A.options.cy || A.options.h) &&
                    (a = Math.round(
                      (A.options.h
                        ? M(A.options.h)
                        : "number" == typeof A.options.cy
                        ? A.options.cy
                        : 1) / h.length
                    )),
                  (b += '<a:tr h="'.concat(a, '">')),
                  e.forEach(function (e) {
                    var t,
                      a,
                      A,
                      o,
                      n,
                      r = {
                        rowSpan:
                          1 < (null == (l = e.options) ? void 0 : l.rowspan)
                            ? e.options.rowspan
                            : void 0,
                        gridSpan:
                          1 < (null == (l = e.options) ? void 0 : l.colspan)
                            ? e.options.colspan
                            : void 0,
                        vMerge: e._vmerge ? 1 : void 0,
                        hMerge: e._hmerge ? 1 : void 0,
                      },
                      l =
                        (l = Object.keys(r)
                          .map(function (e) {
                            return [e, r[e]];
                          })
                          .filter(function (e) {
                            return e[0], !!e[1];
                          })
                          .map(function (e) {
                            var t = e[0],
                              e = e[1];
                            return ""
                              .concat(String(t), '="')
                              .concat(String(e), '"');
                          })
                          .join(" ")) && " " + l;
                    e._hmerge || e._vmerge
                      ? (b += "<a:tc".concat(l, "><a:tcPr/></a:tc>"))
                      : ((t = e.options || {}),
                        (e.options = t),
                        [
                          "align",
                          "bold",
                          "border",
                          "color",
                          "fill",
                          "fontFace",
                          "fontSize",
                          "margin",
                          "underline",
                          "valign",
                        ].forEach(function (e) {
                          c[e] && !t[e] && 0 !== t[e] && (t[e] = c[e]);
                        }),
                        (a = t.valign
                          ? ' anchor="'.concat(
                              t.valign
                                .replace(/^c$/i, "ctr")
                                .replace(/^m$/i, "ctr")
                                .replace("center", "ctr")
                                .replace("middle", "ctr")
                                .replace("top", "t")
                                .replace("btm", "b")
                                .replace("bottom", "b"),
                              '"'
                            )
                          : ""),
                        (A = (A =
                          (null !=
                            (A = null == (A = e._optImp) ? void 0 : A.fill) &&
                          A.color
                            ? e._optImp.fill.color
                            : null != (A = e._optImp) &&
                              A.fill &&
                              "string" == typeof e._optImp.fill
                            ? e._optImp.fill
                            : "") || t.fill
                            ? t.fill
                            : "")
                          ? U(A)
                          : ""),
                        (o = 0 === t.margin || t.margin ? t.margin : _),
                        (n = ""),
                        (n =
                          1 <=
                          (o =
                            Array.isArray(o) || "number" != typeof o
                              ? o
                              : [o, o, o, o])[0]
                            ? ' marL="'
                                .concat(O(o[3]), '" marR="')
                                .concat(O(o[1]), '" marT="')
                                .concat(O(o[0]), '" marB="')
                                .concat(O(o[2]), '"')
                            : ' marL="'
                                .concat(M(o[3]), '" marR="')
                                .concat(M(o[1]), '" marT="')
                                .concat(M(o[0]), '" marB="')
                                .concat(M(o[2]), '"')),
                        (b += "<a:tc"
                          .concat(l, ">")
                          .concat(Ge(e), "<a:tcPr")
                          .concat(n)
                          .concat(a, ">")),
                        t.border &&
                          Array.isArray(t.border) &&
                          [
                            { idx: 3, name: "lnL" },
                            { idx: 1, name: "lnR" },
                            { idx: 0, name: "lnT" },
                            { idx: 2, name: "lnB" },
                          ].forEach(function (e) {
                            "none" !== t.border[e.idx].type
                              ? (b =
                                  (b =
                                    (b =
                                      (b += "<a:"
                                        .concat(e.name, ' w="')
                                        .concat(
                                          O(t.border[e.idx].pt),
                                          '" cap="flat" cmpd="sng" algn="ctr">'
                                        )) +
                                      "<a:solidFill>".concat(
                                        z(t.border[e.idx].color),
                                        "</a:solidFill>"
                                      )) +
                                    '<a:prstDash val="'.concat(
                                      "dash" === t.border[e.idx].type
                                        ? "sysDash"
                                        : "solid",
                                      '"/><a:round/><a:headEnd type="none" w="med" len="med"/><a:tailEnd type="none" w="med" len="med"/>'
                                    )) + "</a:".concat(e.name, ">"))
                              : (b += "<a:"
                                  .concat(
                                    e.name,
                                    ' w="0" cap="flat" cmpd="sng" algn="ctr"><a:noFill/></a:'
                                  )
                                  .concat(e.name, ">"));
                          }),
                        (b = b + A + "  </a:tcPr> </a:tc>"));
                  }),
                  (b += "</a:tr>");
              }),
              (S += b =
                (b = b + "      </a:tbl>" + "    </a:graphicData>") +
                "  </a:graphic>" +
                "</p:graphicFrame>"),
              E++;
            break;
          case N.text:
          case N.placeholder:
            if (
              (A.options.line || 0 !== f || (f = 0.3 * F),
              A.options._bodyProp || (A.options._bodyProp = {}),
              A.options.margin && Array.isArray(A.options.margin)
                ? ((A.options._bodyProp.lIns = O(A.options.margin[0] || 0)),
                  (A.options._bodyProp.rIns = O(A.options.margin[1] || 0)),
                  (A.options._bodyProp.bIns = O(A.options.margin[2] || 0)),
                  (A.options._bodyProp.tIns = O(A.options.margin[3] || 0)))
                : "number" == typeof A.options.margin &&
                  ((A.options._bodyProp.lIns = O(A.options.margin)),
                  (A.options._bodyProp.rIns = O(A.options.margin)),
                  (A.options._bodyProp.bIns = O(A.options.margin)),
                  (A.options._bodyProp.tIns = O(A.options.margin))),
              (S =
                (S += "<p:sp>") +
                '<p:nvSpPr><p:cNvPr id="'
                  .concat(e + 2, '" name="')
                  .concat(A.options.objectName, '">')),
              null != (n = A.options.hyperlink) &&
                n.url &&
                (S += '<a:hlinkClick r:id="rId'
                  .concat(A.options.hyperlink._rId, '" tooltip="')
                  .concat(
                    A.options.hyperlink.tooltip
                      ? I(A.options.hyperlink.tooltip)
                      : "",
                    '"/>'
                  )),
              null != (n = A.options.hyperlink) &&
                n.slide &&
                (S += '<a:hlinkClick r:id="rId'
                  .concat(A.options.hyperlink._rId, '" tooltip="')
                  .concat(
                    A.options.hyperlink.tooltip
                      ? I(A.options.hyperlink.tooltip)
                      : "",
                    '" action="ppaction://hlinksldjump"/>'
                  )),
              (S =
                (S =
                  (S =
                    (S =
                      (S =
                        (S += "</p:cNvPr>") +
                        ("<p:cNvSpPr" +
                          (null != (n = A.options) && n.isTextBox
                            ? ' txBox="1"/>'
                            : "/>"))) +
                      "<p:nvPr>".concat(
                        "placeholder" === A._type ? je(A) : je(a),
                        "</p:nvPr>"
                      ) +
                      "</p:nvSpPr><p:spPr>") + "<a:xfrm".concat(u, ">")) +
                  '<a:off x="'.concat(s, '" y="').concat(p, '"/>')) +
                '<a:ext cx="'.concat(d, '" cy="').concat(f, '"/></a:xfrm>')),
              "custGeom" === A.shape)
            )
              (S =
                (S +=
                  '<a:custGeom><a:avLst /><a:gdLst></a:gdLst><a:ahLst /><a:cxnLst></a:cxnLst><a:rect l="l" t="t" r="r" b="b" /><a:pathLst>') +
                '<a:path w="'.concat(d, '" h="').concat(f, '">')),
                null != (n = A.options.points) &&
                  n.forEach(function (e, t) {
                    if ("curve" in e)
                      switch (e.curve.type) {
                        case "arc":
                          S += '<a:arcTo hR="'
                            .concat(R(e.curve.hR, "Y", D._presLayout), '" wR="')
                            .concat(
                              R(e.curve.wR, "X", D._presLayout),
                              '" stAng="'
                            )
                            .concat(k(e.curve.stAng), '" swAng="')
                            .concat(k(e.curve.swAng), '" />');
                          break;
                        case "cubic":
                          S += '<a:cubicBezTo>\n\t\t\t\t\t\t\t\t\t<a:pt x="'
                            .concat(R(e.curve.x1, "X", D._presLayout), '" y="')
                            .concat(
                              R(e.curve.y1, "Y", D._presLayout),
                              '" />\n\t\t\t\t\t\t\t\t\t<a:pt x="'
                            )
                            .concat(R(e.curve.x2, "X", D._presLayout), '" y="')
                            .concat(
                              R(e.curve.y2, "Y", D._presLayout),
                              '" />\n\t\t\t\t\t\t\t\t\t<a:pt x="'
                            )
                            .concat(R(e.x, "X", D._presLayout), '" y="')
                            .concat(
                              R(e.y, "Y", D._presLayout),
                              '" />\n\t\t\t\t\t\t\t\t\t</a:cubicBezTo>'
                            );
                          break;
                        case "quadratic":
                          S += '<a:quadBezTo>\n\t\t\t\t\t\t\t\t\t<a:pt x="'
                            .concat(R(e.curve.x1, "X", D._presLayout), '" y="')
                            .concat(
                              R(e.curve.y1, "Y", D._presLayout),
                              '" />\n\t\t\t\t\t\t\t\t\t<a:pt x="'
                            )
                            .concat(R(e.x, "X", D._presLayout), '" y="')
                            .concat(
                              R(e.y, "Y", D._presLayout),
                              '" />\n\t\t\t\t\t\t\t\t\t</a:quadBezTo>'
                            );
                      }
                    else
                      "close" in e
                        ? (S += "<a:close />")
                        : e.moveTo || 0 === t
                        ? (S += '<a:moveTo><a:pt x="'
                            .concat(R(e.x, "X", D._presLayout), '" y="')
                            .concat(
                              R(e.y, "Y", D._presLayout),
                              '" /></a:moveTo>'
                            ))
                        : (S += '<a:lnTo><a:pt x="'
                            .concat(R(e.x, "X", D._presLayout), '" y="')
                            .concat(
                              R(e.y, "Y", D._presLayout),
                              '" /></a:lnTo>'
                            ));
                  }),
                (S += "</a:path></a:pathLst></a:custGeom>");
            else {
              if (
                ((S += '<a:prstGeom prst="' + A.shape + '"><a:avLst>'),
                A.options.rectRadius)
              )
                S += '<a:gd name="adj" fmla="val '.concat(
                  Math.round((A.options.rectRadius * F * 1e5) / Math.min(d, f)),
                  '"/>'
                );
              else if (A.options.angleRange) {
                for (var B = 0; B < 2; B++) {
                  var T = A.options.angleRange[B];
                  S += '<a:gd name="adj'
                    .concat(B + 1, '" fmla="val ')
                    .concat(k(T), '" />');
                }
                A.options.arcThicknessRatio &&
                  (S += '<a:gd name="adj3" fmla="val '.concat(
                    Math.round(5e4 * A.options.arcThicknessRatio),
                    '" />'
                  ));
              }
              S += "</a:avLst></a:prstGeom>";
            }
            (S += A.options.fill ? U(A.options.fill) : "<a:noFill/>"),
              A.options.line &&
                ((S += A.options.line.width
                  ? '<a:ln w="'.concat(O(A.options.line.width), '">')
                  : "<a:ln>"),
                A.options.line.color && (S += U(A.options.line)),
                A.options.line.dashType &&
                  (S += '<a:prstDash val="'.concat(
                    A.options.line.dashType,
                    '"/>'
                  )),
                A.options.line.beginArrowType &&
                  (S += '<a:headEnd type="'.concat(
                    A.options.line.beginArrowType,
                    '"/>'
                  )),
                A.options.line.endArrowType &&
                  (S += '<a:tailEnd type="'.concat(
                    A.options.line.endArrowType,
                    '"/>'
                  )),
                (S += "</a:ln>")),
              A.options.shadow &&
                "none" !== A.options.shadow.type &&
                ((A.options.shadow.type = A.options.shadow.type || "outer"),
                (A.options.shadow.blur = O(A.options.shadow.blur || 8)),
                (A.options.shadow.offset = O(A.options.shadow.offset || 4)),
                (A.options.shadow.angle = Math.round(
                  6e4 * (A.options.shadow.angle || 270)
                )),
                (A.options.shadow.opacity = Math.round(
                  1e5 * (A.options.shadow.opacity || 0.75)
                )),
                (A.options.shadow.color = A.options.shadow.color || ne.color),
                (S =
                  (S =
                    (S =
                      (S += "<a:effectLst>") +
                      " <a:"
                        .concat(A.options.shadow.type, "Shdw ")
                        .concat(
                          "outer" === A.options.shadow.type
                            ? 'sx="100000" sy="100000" kx="0" ky="0" algn="bl" rotWithShape="0"'
                            : "",
                          ' blurRad="'
                        )
                        .concat(A.options.shadow.blur, '" dist="')
                        .concat(A.options.shadow.offset, '" dir="')
                        .concat(A.options.shadow.angle, '">')) +
                    ' <a:srgbClr val="'.concat(A.options.shadow.color, '">')) +
                  ' <a:alpha val="'.concat(
                    A.options.shadow.opacity,
                    '"/></a:srgbClr>'
                  ) +
                  " </a:outerShdw></a:effectLst>")),
              (S = (S += "</p:spPr>") + Ge(A) + "</p:sp>");
            break;
          case N.image:
            (S =
              (S = S + "<p:pic>" + "  <p:nvPicPr>") +
              '<p:cNvPr id="'
                .concat(e + 2, '" name="')
                .concat(A.options.objectName, '" descr="')
                .concat(I(A.options.altText || A.image), '">')),
              null != (n = A.hyperlink) &&
                n.url &&
                (S += '<a:hlinkClick r:id="rId'
                  .concat(A.hyperlink._rId, '" tooltip="')
                  .concat(
                    A.hyperlink.tooltip ? I(A.hyperlink.tooltip) : "",
                    '"/>'
                  )),
              null != (n = A.hyperlink) &&
                n.slide &&
                (S += '<a:hlinkClick r:id="rId'
                  .concat(A.hyperlink._rId, '" tooltip="')
                  .concat(
                    A.hyperlink.tooltip ? I(A.hyperlink.tooltip) : "",
                    '" action="ppaction://hlinksldjump"/>'
                  )),
              (S =
                (S =
                  (S =
                    S +
                    "    </p:cNvPr>" +
                    '    <p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr>') +
                  ("    <p:nvPr>" + je(a) + "</p:nvPr>")) +
                "  </p:nvPicPr>" +
                "<p:blipFill>"),
              (S =
                (D._relsMedia || []).filter(function (e) {
                  return e.rId === A.imageRid;
                })[0] &&
                "svg" ===
                  (D._relsMedia || []).filter(function (e) {
                    return e.rId === A.imageRid;
                  })[0].extn
                  ? (S =
                      (S += '<a:blip r:embed="rId'.concat(
                        A.imageRid - 1,
                        '">'
                      )) +
                      (A.options.transparency
                        ? ' <a:alphaModFix amt="'.concat(
                            Math.round(1e3 * (100 - A.options.transparency)),
                            '"/>'
                          )
                        : "") +
                      ' <a:extLst>  <a:ext uri="{96DAC541-7B7A-43D3-8B79-37D633B846F1}">') +
                    '   <asvg:svgBlip xmlns:asvg="http://schemas.microsoft.com/office/drawing/2016/SVG/main" r:embed="rId'.concat(
                      A.imageRid,
                      '"/>'
                    ) +
                    "  </a:ext> </a:extLst></a:blip>"
                  : (S += '<a:blip r:embed="rId'.concat(A.imageRid, '">')) +
                    (A.options.transparency
                      ? '<a:alphaModFix amt="'.concat(
                          Math.round(1e3 * (100 - A.options.transparency)),
                          '"/>'
                        )
                      : "") +
                    "</a:blip>"),
              null != y && y.type
                ? ((n = y.w ? R(y.w, "X", D._presLayout) : d),
                  (r = y.h ? R(y.h, "Y", D._presLayout) : f),
                  (l = R(y.x || 0, "X", D._presLayout)),
                  (i = R(y.y || 0, "Y", D._presLayout)),
                  (S += Oe[y.type]({ w: x, h: C }, { w: n, h: r, x: l, y: i })),
                  (x = n),
                  (C = r))
                : (S += "  <a:stretch><a:fillRect/></a:stretch>"),
              (S =
                (S =
                  (S =
                    (S =
                      (S += "</p:blipFill>") +
                      "<p:spPr>" +
                      (" <a:xfrm" + u + ">")) +
                    '  <a:off x="'.concat(s, '" y="').concat(p, '"/>')) +
                  '  <a:ext cx="'.concat(x, '" cy="').concat(C, '"/>') +
                  " </a:xfrm>") +
                ' <a:prstGeom prst="'.concat(
                  v ? "ellipse" : "rect",
                  '"><a:avLst/></a:prstGeom>'
                )),
              A.options.shadow &&
                "none" !== A.options.shadow.type &&
                ((A.options.shadow.type = A.options.shadow.type || "outer"),
                (A.options.shadow.blur = O(A.options.shadow.blur || 8)),
                (A.options.shadow.offset = O(A.options.shadow.offset || 4)),
                (A.options.shadow.angle = Math.round(
                  6e4 * (A.options.shadow.angle || 270)
                )),
                (A.options.shadow.opacity = Math.round(
                  1e5 * (A.options.shadow.opacity || 0.75)
                )),
                (A.options.shadow.color = A.options.shadow.color || ne.color),
                (S =
                  (S =
                    (S =
                      (S =
                        (S += "<a:effectLst>") +
                        "<a:"
                          .concat(A.options.shadow.type, "Shdw ")
                          .concat(
                            "outer" === A.options.shadow.type
                              ? 'sx="100000" sy="100000" kx="0" ky="0" algn="bl" rotWithShape="0"'
                              : "",
                            ' blurRad="'
                          )
                          .concat(A.options.shadow.blur, '" dist="')
                          .concat(A.options.shadow.offset, '" dir="')
                          .concat(A.options.shadow.angle, '">')) +
                      '<a:srgbClr val="'.concat(A.options.shadow.color, '">')) +
                    '<a:alpha val="'.concat(
                      A.options.shadow.opacity,
                      '"/></a:srgbClr>'
                    )) +
                  "</a:".concat(A.options.shadow.type, "Shdw>") +
                  "</a:effectLst>")),
              (S = S + "</p:spPr>" + "</p:pic>");
            break;
          case N.media:
            S =
              "online" === A.mtype
                ? (S =
                    (S =
                      (S =
                        (S += "<p:pic> <p:nvPicPr>") +
                        '<p:cNvPr id="'
                          .concat(A.mediaRid + 2, '" name="')
                          .concat(A.options.objectName, '"/>') +
                        " <p:cNvPicPr/> <p:nvPr>") +
                      '  <a:videoFile r:link="rId'.concat(A.mediaRid, '"/>') +
                      " </p:nvPr> </p:nvPicPr>") +
                    ' <p:blipFill><a:blip r:embed="rId'.concat(
                      A.mediaRid + 1,
                      '"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>'
                    ) +
                    " <p:spPr>") +
                  "  <a:xfrm"
                    .concat(u, '><a:off x="')
                    .concat(s, '" y="')
                    .concat(p, '"/><a:ext cx="')
                    .concat(d, '" cy="')
                    .concat(f, '"/></a:xfrm>') +
                  '  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom> </p:spPr></p:pic>'
                : (S =
                    (S =
                      (S =
                        (S =
                          (S += "<p:pic> <p:nvPicPr>") +
                          '<p:cNvPr id="'
                            .concat(A.mediaRid + 2, '" name="')
                            .concat(
                              A.options.objectName,
                              '"><a:hlinkClick r:id="" action="ppaction://media"/></p:cNvPr>'
                            ) +
                          ' <p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr> <p:nvPr>') +
                        '  <a:videoFile r:link="rId'.concat(A.mediaRid, '"/>') +
                        '  <p:extLst>   <p:ext uri="{DAA4B4D4-6D71-4841-9C94-3DE7FCFB9230}">') +
                      '    <p14:media xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" r:embed="rId'.concat(
                        A.mediaRid + 1,
                        '"/>'
                      ) +
                      "   </p:ext>  </p:extLst> </p:nvPr> </p:nvPicPr>") +
                    ' <p:blipFill><a:blip r:embed="rId'.concat(
                      A.mediaRid + 2,
                      '"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>'
                    ) +
                    " <p:spPr>") +
                  "  <a:xfrm"
                    .concat(u, '><a:off x="')
                    .concat(s, '" y="')
                    .concat(p, '"/><a:ext cx="')
                    .concat(d, '" cy="')
                    .concat(f, '"/></a:xfrm>') +
                  '  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom> </p:spPr></p:pic>';
            break;
          case N.chart:
            S =
              (S =
                (S =
                  (S =
                    (S =
                      (S =
                        (S = S + "<p:graphicFrame>" + " <p:nvGraphicFramePr>") +
                        '   <p:cNvPr id="'
                          .concat(e + 2, '" name="')
                          .concat(A.options.objectName, '" descr="')
                          .concat(I(A.options.altText || ""), '"/>') +
                        "   <p:cNvGraphicFramePr/>") +
                      "   <p:nvPr>".concat(je(a), "</p:nvPr>") +
                      " </p:nvGraphicFramePr>") +
                    ' <p:xfrm><a:off x="'
                      .concat(s, '" y="')
                      .concat(p, '"/><a:ext cx="')
                      .concat(d, '" cy="')
                      .concat(f, '"/></p:xfrm>')) +
                  ' <a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">' +
                  '  <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart">') +
                '   <c:chart r:id="rId'.concat(
                  A.chartRid,
                  '" xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"/>'
                ) +
                "  </a:graphicData>") +
              " </a:graphic>" +
              "</p:graphicFrame>";
            break;
          default:
            S += "";
        }
      }),
      D._slideNumberProps &&
        (D._slideNumberProps.align || (D._slideNumberProps.align = "left"),
        (S =
          (S +=
            '<p:sp> <p:nvSpPr>  <p:cNvPr id="25" name="Slide Number Placeholder 0"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>  <p:nvPr><p:ph type="sldNum" sz="quarter" idx="4294967295"/></p:nvPr> </p:nvSpPr> <p:spPr>') +
          "<a:xfrm>" +
          '<a:off x="'
            .concat(R(D._slideNumberProps.x, "X", D._presLayout), '" y="')
            .concat(R(D._slideNumberProps.y, "Y", D._presLayout), '"/>') +
          '<a:ext cx="'
            .concat(
              D._slideNumberProps.w
                ? R(D._slideNumberProps.w, "X", D._presLayout)
                : "800000",
              '" cy="'
            )
            .concat(
              D._slideNumberProps.h
                ? R(D._slideNumberProps.h, "Y", D._presLayout)
                : "300000",
              '"/>'
            ) +
          '</a:xfrm> <a:prstGeom prst="rect"><a:avLst/></a:prstGeom> <a:extLst><a:ext uri="{C572A759-6A51-4108-AA02-DFA0A04FC94B}"><ma14:wrappingTextBoxFlag val="0" xmlns:ma14="http://schemas.microsoft.com/office/mac/drawingml/2011/main"/></a:ext></a:extLst></p:spPr><p:txBody><a:bodyPr'),
        D._slideNumberProps.margin && Array.isArray(D._slideNumberProps.margin)
          ? (S =
              (S =
                (S =
                  (S += ' lIns="'.concat(
                    O(D._slideNumberProps.margin[3] || 0),
                    '"'
                  )) +
                  ' tIns="'.concat(
                    O(D._slideNumberProps.margin[0] || 0),
                    '"'
                  )) +
                ' rIns="'.concat(O(D._slideNumberProps.margin[1] || 0), '"')) +
              ' bIns="'.concat(O(D._slideNumberProps.margin[2] || 0), '"'))
          : "number" == typeof D._slideNumberProps.margin &&
            (S =
              (S =
                (S =
                  (S += ' lIns="'.concat(
                    O(D._slideNumberProps.margin || 0),
                    '"'
                  )) +
                  ' tIns="'.concat(O(D._slideNumberProps.margin || 0), '"')) +
                ' rIns="'.concat(O(D._slideNumberProps.margin || 0), '"')) +
              ' bIns="'.concat(O(D._slideNumberProps.margin || 0), '"')),
        D._slideNumberProps.valign &&
          (S += ' anchor="'.concat(
            D._slideNumberProps.valign
              .replace("top", "t")
              .replace("middle", "ctr")
              .replace("bottom", "b"),
            '"'
          )),
        (S += "/>  <a:lstStyle><a:lvl1pPr>"),
        (D._slideNumberProps.fontFace ||
          D._slideNumberProps.fontSize ||
          D._slideNumberProps.color) &&
          ((S += '<a:defRPr sz="'.concat(
            Math.round(100 * (D._slideNumberProps.fontSize || 12)),
            '">'
          )),
          D._slideNumberProps.color && (S += U(D._slideNumberProps.color)),
          D._slideNumberProps.fontFace &&
            (S += '<a:latin typeface="'
              .concat(D._slideNumberProps.fontFace, '"/><a:ea typeface="')
              .concat(D._slideNumberProps.fontFace, '"/><a:cs typeface="')
              .concat(D._slideNumberProps.fontFace, '"/>')),
          (S += "</a:defRPr>")),
        (S += "</a:lvl1pPr></a:lstStyle><a:p>"),
        D._slideNumberProps.align.startsWith("l")
          ? (S += '<a:pPr algn="l"/>')
          : D._slideNumberProps.align.startsWith("c")
          ? (S += '<a:pPr algn="ctr"/>')
          : D._slideNumberProps.align.startsWith("r")
          ? (S += '<a:pPr algn="r"/>')
          : (S += '<a:pPr algn="l"/>'),
        (S =
          (S += '<a:fld id="'
            .concat(ue, '" type="slidenum"><a:rPr b="')
            .concat(D._slideNumberProps.bold ? 1 : 0, '" lang="en-US"/>')) +
          "<a:t>".concat(
            D._slideNum,
            '</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p>'
          ) +
          "</p:txBody></p:sp>")),
      (S = S + "</p:spTree>" + "</p:cSld>")
    );
  }
  function ze(e, t) {
    var a = 0,
      A =
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        u +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
    return (
      e._rels.forEach(function (e) {
        (a = Math.max(a, e.rId)),
          e.type.toLowerCase().includes("hyperlink")
            ? "slide" === e.data
              ? (A += '<Relationship Id="rId'
                  .concat(
                    e.rId,
                    '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slide'
                  )
                  .concat(e.Target, '.xml"/>'))
              : (A += '<Relationship Id="rId'
                  .concat(
                    e.rId,
                    '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="'
                  )
                  .concat(e.Target, '" TargetMode="External"/>'))
            : e.type.toLowerCase().includes("notesSlide") &&
              (A += '<Relationship Id="rId'
                .concat(e.rId, '" Target="')
                .concat(
                  e.Target,
                  '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide"/>'
                ));
      }),
      (e._relsChart || []).forEach(function (e) {
        (a = Math.max(a, e.rId)),
          (A += '<Relationship Id="rId'
            .concat(
              e.rId,
              '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart" Target="'
            )
            .concat(e.Target, '"/>'));
      }),
      (e._relsMedia || []).forEach(function (e) {
        var t = e.rId.toString();
        (a = Math.max(a, e.rId)),
          e.type.toLowerCase().includes("image")
            ? (A +=
                '<Relationship Id="rId' +
                t +
                '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="' +
                e.Target +
                '"/>')
            : e.type.toLowerCase().includes("audio")
            ? A.includes(' Target="' + e.Target + '"')
              ? (A +=
                  '<Relationship Id="rId' +
                  t +
                  '" Type="http://schemas.microsoft.com/office/2007/relationships/media" Target="' +
                  e.Target +
                  '"/>')
              : (A +=
                  '<Relationship Id="rId' +
                  t +
                  '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/audio" Target="' +
                  e.Target +
                  '"/>')
            : e.type.toLowerCase().includes("video")
            ? A.includes(' Target="' + e.Target + '"')
              ? (A +=
                  '<Relationship Id="rId' +
                  t +
                  '" Type="http://schemas.microsoft.com/office/2007/relationships/media" Target="' +
                  e.Target +
                  '"/>')
              : (A +=
                  '<Relationship Id="rId' +
                  t +
                  '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/video" Target="' +
                  e.Target +
                  '"/>')
            : e.type.toLowerCase().includes("online") &&
              (A.includes(' Target="' + e.Target + '"')
                ? (A +=
                    '<Relationship Id="rId' +
                    t +
                    '" Type="http://schemas.microsoft.com/office/2007/relationships/image" Target="' +
                    e.Target +
                    '"/>')
                : (A +=
                    '<Relationship Id="rId' +
                    t +
                    '" Target="' +
                    e.Target +
                    '" TargetMode="External" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/video"/>'));
      }),
      t.forEach(function (e, t) {
        A += '<Relationship Id="rId'
          .concat(a + t + 1, '" Type="')
          .concat(e.type, '" Target="')
          .concat(e.target, '"/>');
      }),
      (A += "</Relationships>")
    );
  }
  function Ue(e, t) {
    var a,
      A,
      o = "",
      n = "",
      r = "",
      l = "",
      c = t ? "a:lvl1pPr" : "a:pPr",
      i = O(q),
      s = "<".concat(c).concat(e.options.rtlMode ? ' rtl="1" ' : "");
    if (e.options.align)
      switch (e.options.align) {
        case "left":
          s += ' algn="l"';
          break;
        case "right":
          s += ' algn="r"';
          break;
        case "center":
          s += ' algn="ctr"';
          break;
        case "justify":
          s += ' algn="just"';
          break;
        default:
          s += "";
      }
    return (
      e.options.lineSpacing
        ? (n = '<a:lnSpc><a:spcPts val="'.concat(
            Math.round(100 * e.options.lineSpacing),
            '"/></a:lnSpc>'
          ))
        : e.options.lineSpacingMultiple &&
          (n = '<a:lnSpc><a:spcPct val="'.concat(
            Math.round(1e5 * e.options.lineSpacingMultiple),
            '"/></a:lnSpc>'
          )),
      e.options.indentLevel &&
        !isNaN(Number(e.options.indentLevel)) &&
        0 < e.options.indentLevel &&
        (s += ' lvl="'.concat(e.options.indentLevel, '"')),
      e.options.paraSpaceBefore &&
        !isNaN(Number(e.options.paraSpaceBefore)) &&
        0 < e.options.paraSpaceBefore &&
        (r += '<a:spcBef><a:spcPts val="'.concat(
          Math.round(100 * e.options.paraSpaceBefore),
          '"/></a:spcBef>'
        )),
      e.options.paraSpaceAfter &&
        !isNaN(Number(e.options.paraSpaceAfter)) &&
        0 < e.options.paraSpaceAfter &&
        (r += '<a:spcAft><a:spcPts val="'.concat(
          Math.round(100 * e.options.paraSpaceAfter),
          '"/></a:spcAft>'
        )),
      "object" == typeof e.options.bullet
        ? (null !=
            (A =
              null == (A = null == e ? void 0 : e.options)
                ? void 0
                : A.bullet) &&
            A.indent &&
            (i = O(e.options.bullet.indent)),
          e.options.bullet.type
            ? "number" === e.options.bullet.type.toString().toLowerCase() &&
              ((s += ' marL="'
                .concat(
                  e.options.indentLevel && 0 < e.options.indentLevel
                    ? i + i * e.options.indentLevel
                    : i,
                  '" indent="-'
                )
                .concat(i, '"')),
              (o =
                '<a:buSzPct val="100000"/><a:buFont typeface="+mj-lt"/><a:buAutoNum type="'
                  .concat(
                    e.options.bullet.style || "arabicPeriod",
                    '" startAt="'
                  )
                  .concat(
                    e.options.bullet.numberStartAt ||
                      e.options.bullet.startAt ||
                      "1",
                    '"/>'
                  )))
            : (o = e.options.bullet.characterCode
                ? ((a = "&#x".concat(e.options.bullet.characterCode, ";")),
                  /^[0-9A-Fa-f]{4}$/.test(e.options.bullet.characterCode) ||
                    (console.warn(
                      "Warning: `bullet.characterCode should be a 4-digit unicode charatcer (ex: 22AB)`!"
                    ),
                    (a = f.DEFAULT)),
                  (s += ' marL="'
                    .concat(
                      e.options.indentLevel && 0 < e.options.indentLevel
                        ? i + i * e.options.indentLevel
                        : i,
                      '" indent="-'
                    )
                    .concat(i, '"')),
                  '<a:buSzPct val="100000"/><a:buChar char="' + a + '"/>')
                : e.options.bullet.code
                ? ((a = "&#x".concat(e.options.bullet.code, ";")),
                  /^[0-9A-Fa-f]{4}$/.test(e.options.bullet.code) ||
                    (console.warn(
                      "Warning: `bullet.code should be a 4-digit hex code (ex: 22AB)`!"
                    ),
                    (a = f.DEFAULT)),
                  (s += ' marL="'
                    .concat(
                      e.options.indentLevel && 0 < e.options.indentLevel
                        ? i + i * e.options.indentLevel
                        : i,
                      '" indent="-'
                    )
                    .concat(i, '"')),
                  '<a:buSzPct val="100000"/><a:buChar char="' + a + '"/>')
                : ((s += ' marL="'
                    .concat(
                      e.options.indentLevel && 0 < e.options.indentLevel
                        ? i + i * e.options.indentLevel
                        : i,
                      '" indent="-'
                    )
                    .concat(i, '"')),
                  '<a:buSzPct val="100000"/><a:buChar char="'.concat(
                    f.DEFAULT,
                    '"/>'
                  ))))
        : e.options.bullet
        ? ((s += ' marL="'
            .concat(
              e.options.indentLevel && 0 < e.options.indentLevel
                ? i + i * e.options.indentLevel
                : i,
              '" indent="-'
            )
            .concat(i, '"')),
          (o = '<a:buSzPct val="100000"/><a:buChar char="'.concat(
            f.DEFAULT,
            '"/>'
          )))
        : e.options.bullet ||
          ((s += ' indent="0" marL="0"'), (o = "<a:buNone/>")),
      e.options.tabStops &&
        Array.isArray(e.options.tabStops) &&
        ((A = e.options.tabStops
          .map(function (e) {
            return '<a:tab pos="'
              .concat(M(e.position || 1), '" algn="')
              .concat(e.alignment || "l", '"/>');
          })
          .join("")),
        (l = "<a:tabLst>".concat(A, "</a:tabLst>"))),
      (s += ">" + n + r + o + l),
      t && (s += Qe(e.options, !0)),
      (s += "</" + c + ">")
    );
  }
  function Qe(e, t) {
    var a,
      A,
      o,
      n,
      r = "",
      t = t ? "a:defRPr" : "a:rPr",
      r =
        (r =
          (r =
            (r =
              (r +=
                "<" +
                t +
                ' lang="' +
                (e.lang || "en-US") +
                '"' +
                (e.lang ? ' altLang="en-US"' : "")) +
              (e.fontSize
                ? ' sz="'.concat(Math.round(100 * e.fontSize), '"')
                : "")) +
            (null != e && e.bold
              ? ' b="'.concat(e.bold ? "1" : "0", '"')
              : "")) +
          (null != e && e.italic
            ? ' i="'.concat(e.italic ? "1" : "0", '"')
            : "")) +
        (null != e && e.strike
          ? ' strike="'.concat(
              "string" == typeof e.strike ? e.strike : "sngStrike",
              '"'
            )
          : "");
    if (
      ("object" == typeof e.underline && null != (a = e.underline) && a.style
        ? (r += ' u="'.concat(e.underline.style, '"'))
        : "string" == typeof e.underline
        ? (r += ' u="'.concat(String(e.underline), '"'))
        : e.hyperlink && (r += ' u="sng"'),
      e.baseline
        ? (r += ' baseline="'.concat(Math.round(50 * e.baseline), '"'))
        : e.subscript
        ? (r += ' baseline="-40000"')
        : e.superscript && (r += ' baseline="30000"'),
      (r =
        r +
        (e.charSpacing
          ? ' spc="'.concat(Math.round(100 * e.charSpacing), '" kern="0"')
          : "") +
        ' dirty="0">'),
      (e.color ||
        e.fontFace ||
        e.outline ||
        ("object" == typeof e.underline && e.underline.color)) &&
        (e.outline &&
          "object" == typeof e.outline &&
          (r += '<a:ln w="'
            .concat(O(e.outline.size || 0.75), '">')
            .concat(U(e.outline.color || "FFFFFF"), "</a:ln>")),
        e.color && (r += U({ color: e.color, transparency: e.transparency })),
        e.highlight &&
          (r += "<a:highlight>".concat(z(e.highlight), "</a:highlight>")),
        "object" == typeof e.underline &&
          e.underline.color &&
          (r += "<a:uFill>".concat(U(e.underline.color), "</a:uFill>")),
        e.glow &&
          (r += "<a:effectLst>".concat(
            ((a = e.glow),
            (o = ""),
            (A = y(y({}, (A = re)), a)),
            (a = Math.round(A.size * x)),
            (n = A.color),
            (A = Math.round(1e5 * A.opacity)),
            (o += '<a:glow rad="'.concat(a, '">')) +
              z(n, '<a:alpha val="'.concat(A, '"/>')) +
              "</a:glow>"),
            "</a:effectLst>"
          )),
        e.fontFace) &&
        (r += '<a:latin typeface="'
          .concat(
            e.fontFace,
            '" pitchFamily="34" charset="0"/><a:ea typeface="'
          )
          .concat(
            e.fontFace,
            '" pitchFamily="34" charset="-122"/><a:cs typeface="'
          )
          .concat(e.fontFace, '" pitchFamily="34" charset="-120"/>')),
      e.hyperlink)
    ) {
      if ("object" != typeof e.hyperlink)
        throw new Error(
          "ERROR: text `hyperlink` option should be an object. Ex: `hyperlink:{url:'https://github.com'}` "
        );
      if (!e.hyperlink.url && !e.hyperlink.slide)
        throw new Error("ERROR: 'hyperlink requires either `url` or `slide`'");
      e.hyperlink.url
        ? (r += '<a:hlinkClick r:id="rId'
            .concat(
              e.hyperlink._rId,
              '" invalidUrl="" action="" tgtFrame="" tooltip="'
            )
            .concat(
              e.hyperlink.tooltip ? I(e.hyperlink.tooltip) : "",
              '" history="1" highlightClick="0" endSnd="0"'
            )
            .concat(e.color ? ">" : "/>"))
        : e.hyperlink.slide &&
          (r += '<a:hlinkClick r:id="rId'
            .concat(
              e.hyperlink._rId,
              '" action="ppaction://hlinksldjump" tooltip="'
            )
            .concat(e.hyperlink.tooltip ? I(e.hyperlink.tooltip) : "", '"')
            .concat(e.color ? ">" : "/>")),
        e.color &&
          (r +=
            ' <a:extLst>  <a:ext uri="{A12FA001-AC4F-418D-AE19-62706E023703}">   <ahyp:hlinkClr xmlns:ahyp="http://schemas.microsoft.com/office/drawing/2018/hyperlinkcolor" val="tx"/>  </a:ext> </a:extLst></a:hlinkClick>');
    }
    return (r += "</".concat(t, ">"));
  }
  function Ge(a) {
    var n,
      e,
      t,
      A,
      o,
      r = a.options || {},
      l = [],
      c = [];
    return !r ||
      a._type === N.tablecell ||
      (void 0 !== a.text && null !== a.text)
      ? ((n = a._type === N.tablecell ? "<a:txBody>" : "<p:txBody>"),
        (n +=
          ((t = "<a:bodyPr"),
          (e = a) && e._type === N.text && e.options._bodyProp
            ? ((t += e.options._bodyProp.wrap
                ? ' wrap="square"'
                : ' wrap="none"'),
              (!e.options._bodyProp.lIns && 0 !== e.options._bodyProp.lIns) ||
                (t += ' lIns="'.concat(e.options._bodyProp.lIns, '"')),
              (!e.options._bodyProp.tIns && 0 !== e.options._bodyProp.tIns) ||
                (t += ' tIns="'.concat(e.options._bodyProp.tIns, '"')),
              (!e.options._bodyProp.rIns && 0 !== e.options._bodyProp.rIns) ||
                (t += ' rIns="'.concat(e.options._bodyProp.rIns, '"')),
              (!e.options._bodyProp.bIns && 0 !== e.options._bodyProp.bIns) ||
                (t += ' bIns="'.concat(e.options._bodyProp.bIns, '"')),
              (t += ' rtlCol="0"'),
              e.options._bodyProp.anchor &&
                (t += ' anchor="' + e.options._bodyProp.anchor + '"'),
              e.options._bodyProp.vert &&
                (t += ' vert="' + e.options._bodyProp.vert + '"'),
              (t += ">"),
              e.options.fit &&
                ("none" === e.options.fit
                  ? (t += "")
                  : "shrink" === e.options.fit
                  ? (t += "<a:normAutofit/>")
                  : "resize" === e.options.fit && (t += "<a:spAutoFit/>")),
              e.options.shrinkText && (t += "<a:normAutofit/>"),
              (t =
                t +
                (e.options._bodyProp.autoFit ? "<a:spAutoFit/>" : "") +
                "</a:bodyPr>"))
            : (t += ' wrap="square" rtlCol="0"></a:bodyPr>'),
          e._type === N.tablecell ? "<a:bodyPr/>" : t)),
        0 === r.h && r.line && r.align
          ? (n += '<a:lstStyle><a:lvl1pPr algn="l"/></a:lstStyle>')
          : "placeholder" === a._type
          ? (n += "<a:lstStyle>".concat(Ue(a, !0), "</a:lstStyle>"))
          : (n += "<a:lstStyle/>"),
        "string" == typeof a.text || "number" == typeof a.text
          ? l.push({ text: a.text.toString(), options: r || {} })
          : a.text &&
            !Array.isArray(a.text) &&
            "object" == typeof a.text &&
            Object.keys(a.text).includes("text")
          ? l.push({ text: a.text || "", options: a.options || {} })
          : Array.isArray(a.text) &&
            (l = a.text.map(function (e) {
              return { text: e.text, options: e.options };
            })),
        l.forEach(function (t, e) {
          t.text || (t.text = ""),
            (t.options = t.options || r || {}),
            0 === e &&
              t.options &&
              !t.options.bullet &&
              r.bullet &&
              (t.options.bullet = r.bullet),
            ("string" != typeof t.text && "number" != typeof t.text) ||
              (t.text = t.text.toString().replace(/\r*\n/g, u)),
            t.text.includes(u) && null === t.text.match(/\n$/g)
              ? t.text.split(u).forEach(function (e) {
                  (t.options.breakLine = !0),
                    c.push({ text: e, options: t.options });
                })
              : c.push(t);
        }),
        (A = []),
        (o = []),
        c.forEach(function (e, t) {
          0 < o.length && (e.options.align || r.align)
            ? e.options.align !== c[t - 1].options.align &&
              (A.push(o), (o = []))
            : 0 < o.length &&
              e.options.bullet &&
              0 < o.length &&
              (A.push(o), (o = []), (e.options.breakLine = !1)),
            o.push(e),
            0 < o.length &&
              e.options.breakLine &&
              t + 1 < c.length &&
              (A.push(o), (o = [])),
            t + 1 === c.length && A.push(o);
        }),
        A.forEach(function (e) {
          var t,
            A = !1,
            o =
              ((n += "<a:p>"),
              "<a:pPr ".concat(
                null != (t = e[0].options) && t.rtlMode ? ' rtl="1" ' : ""
              ));
          e.forEach(function (a, e) {
            0 < (a.options._lineIdx = e) &&
              a.options.softBreakBefore &&
              (n += "<a:br/>"),
              (a.options.align = a.options.align || r.align),
              (a.options.lineSpacing = a.options.lineSpacing || r.lineSpacing),
              (a.options.lineSpacingMultiple =
                a.options.lineSpacingMultiple || r.lineSpacingMultiple),
              (a.options.indentLevel = a.options.indentLevel || r.indentLevel),
              (a.options.paraSpaceBefore =
                a.options.paraSpaceBefore || r.paraSpaceBefore),
              (a.options.paraSpaceAfter =
                a.options.paraSpaceAfter || r.paraSpaceAfter),
              (o = Ue(a, !1)),
              (n += o.replace("<a:pPr></a:pPr>", "")),
              Object.entries(r)
                .filter(function (e) {
                  var t = e[0];
                  return e[1], !(a.options.hyperlink && "color" === t);
                })
                .forEach(function (e) {
                  var t = e[0],
                    e = e[1];
                  "bullet" === t || a.options[t] || (a.options[t] = e);
                }),
              (n += (e = a).text
                ? "<a:r>"
                    .concat(Qe(e.options, !1), "<a:t>")
                    .concat(I(e.text), "</a:t></a:r>")
                : ""),
              ((!a.text && r.fontSize) || a.options.fontSize) &&
                ((A = !0), (r.fontSize = r.fontSize || a.options.fontSize));
          }),
            a._type === N.tablecell && (r.fontSize || r.fontFace)
              ? r.fontFace
                ? (n =
                    (n =
                      (n =
                        (n +=
                          '<a:endParaRPr lang="'.concat(
                            r.lang || "en-US",
                            '"'
                          ) +
                          (r.fontSize
                            ? ' sz="'.concat(Math.round(100 * r.fontSize), '"')
                            : "") +
                          ' dirty="0">') +
                        '<a:latin typeface="'.concat(
                          r.fontFace,
                          '" charset="0"/>'
                        )) +
                      '<a:ea typeface="'.concat(
                        r.fontFace,
                        '" charset="0"/>'
                      )) +
                    '<a:cs typeface="'.concat(r.fontFace, '" charset="0"/>') +
                    "</a:endParaRPr>")
                : (n +=
                    '<a:endParaRPr lang="'.concat(r.lang || "en-US", '"') +
                    (r.fontSize
                      ? ' sz="'.concat(Math.round(100 * r.fontSize), '"')
                      : "") +
                    ' dirty="0"/>')
              : (n += A
                  ? '<a:endParaRPr lang="'.concat(r.lang || "en-US", '"') +
                    (r.fontSize
                      ? ' sz="'.concat(Math.round(100 * r.fontSize), '"')
                      : "") +
                    ' dirty="0"/>'
                  : '<a:endParaRPr lang="'.concat(
                      r.lang || "en-US",
                      '" dirty="0"/>'
                    )),
            (n += "</a:p>");
        }),
        (n += a._type === N.tablecell ? "</a:txBody>" : "</p:txBody>"))
      : "";
  }
  function je(e) {
    var t, a;
    return e
      ? ((t =
          null != (t = e.options) && t._placeholderIdx
            ? e.options._placeholderIdx
            : ""),
        (a =
          (a =
            null != (a = e.options) && a._placeholderType
              ? e.options._placeholderType
              : "") && o[a]
            ? o[a].toString()
            : ""),
        "<p:ph\n\t\t"
          .concat(t ? ' idx="' + t.toString() + '"' : "", "\n\t\t")
          .concat(a && o[a] ? ' type="'.concat(a, '"') : "", "\n\t\t")
          .concat(
            e.text && 0 < e.text.length ? ' hasCustomPrompt="1"' : "",
            "\n\t\t/>"
          ))
      : "";
  }
  function Ye(e) {
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      .concat(
        u,
        '<p:notes xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr><p:sp><p:nvSpPr><p:cNvPr id="2" name="Slide Image Placeholder 1"/><p:cNvSpPr><a:spLocks noGrp="1" noRot="1" noChangeAspect="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldImg"/></p:nvPr></p:nvSpPr><p:spPr/></p:sp><p:sp><p:nvSpPr><p:cNvPr id="3" name="Notes Placeholder 2"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="body" idx="1"/></p:nvPr></p:nvSpPr><p:spPr/><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:r><a:rPr lang="en-US" dirty="0"/><a:t>'
      )
      .concat(
        I(
          ((t = ""),
          e._slideObjects.forEach(function (e) {
            e._type === N.notes &&
              (t += null != e && e.text && e.text[0] ? e.text[0].text : "");
          }),
          t.replace(/\r*\n/g, u))
        ),
        '</a:t></a:r><a:endParaRPr lang="en-US" dirty="0"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="4" name="Slide Number Placeholder 3"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldNum" sz="quarter" idx="10"/></p:nvPr></p:nvSpPr><p:spPr/><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:fld id="'
      )
      .concat(ue, '" type="slidenum"><a:rPr lang="en-US"/><a:t>')
      .concat(
        e._slideNum,
        '</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp></p:spTree><p:extLst><p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}"><p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1024086991"/></p:ext></p:extLst></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:notes>'
      );
    var t;
  }
  function Xe(e, t, a) {
    return ze(e[a - 1], [
      {
        target: "../slideLayouts/slideLayout".concat(
          (function (e, t, a) {
            for (var A = 0; A < t.length; A++)
              if (t[A]._name === e[a - 1]._slideLayout._name) return A + 1;
            return 1;
          })(e, t, a),
          ".xml"
        ),
        type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout",
      },
      {
        target: "../notesSlides/notesSlide".concat(a, ".xml"),
        type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide",
      },
    ]);
  }
  function a() {
    var a = this;
    (this._version = "3.12.0"),
      (this._alignH = j),
      (this._alignV = Y),
      (this._chartType = E),
      (this._outputType = S),
      (this._schemeColor = A),
      (this._shapeType = G),
      (this._charts = v),
      (this._colors = X),
      (this._shapes = c),
      (this.addNewSlide = function (e) {
        var t =
          0 < a.sections.length &&
          0 <
            a.sections[a.sections.length - 1]._slides.filter(function (e) {
              return e._slideNum === a.slides[a.slides.length - 1]._slideNum;
            }).length;
        return (
          (e.sectionTitle = t ? a.sections[a.sections.length - 1].title : null),
          a.addSlide(e)
        );
      }),
      (this.getSlide = function (t) {
        return a.slides.filter(function (e) {
          return e._slideNum === t;
        })[0];
      }),
      (this.setSlideNumber = function (e) {
        (a.masterSlide._slideNumberProps = e),
          (a.slideLayouts.filter(function (e) {
            return e._name === ae;
          })[0]._slideNumberProps = e);
      }),
      (this.createChartMediaRels = function (e, a, t) {
        e._relsChart.forEach(function (e) {
          return t.push(Te(e, a));
        }),
          e._relsMedia.forEach(function (e) {
            var t;
            "online" !== e.type &&
              "hyperlink" !== e.type &&
              (((t =
                e.data && "string" == typeof e.data ? e.data : "").includes(
                ","
              ) ||
                t.includes(";")) &&
              t.includes(",")
                ? t.includes(";") || (t = "image/png;" + t)
                : (t = "image/png;base64," + t),
              a.file(e.Target.replace("..", "ppt"), t.split(",").pop(), {
                base64: !0,
              }));
          });
      }),
      (this.writeFileToBrowser = function (A, o) {
        return p(a, void 0, void 0, function () {
          var t, a;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return ((t = document.createElement("a")).setAttribute(
                  "style",
                  "display:none;"
                ),
                (t.dataset.interception = "off"),
                document.body.appendChild(t),
                window.URL.createObjectURL)
                  ? ((a = window.URL.createObjectURL(
                      new Blob([o], {
                        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      })
                    )),
                    (t.href = a),
                    (t.download = A),
                    t.click(),
                    setTimeout(function () {
                      window.URL.revokeObjectURL(a),
                        document.body.removeChild(t);
                    }, 100),
                    [4, Promise.resolve(A)])
                  : [3, 2];
              case 1:
                return [2, e.sent()];
              case 2:
                return [2];
            }
          });
        });
      }),
      (this.exportPresentation = function (s) {
        return p(a, void 0, void 0, function () {
          var c,
            t,
            i,
            a = this;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (c = []),
                  (t = []),
                  (i = new D.default()),
                  this.slides.forEach(function (e) {
                    t = t.concat(Ie(e));
                  }),
                  this.slideLayouts.forEach(function (e) {
                    t = t.concat(Ie(e));
                  }),
                  (t = t.concat(Ie(this.masterSlide))),
                  [
                    4,
                    Promise.all(t).then(function () {
                      return p(a, void 0, void 0, function () {
                        var l = this;
                        return d(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (
                                this.slides.forEach(function (e) {
                                  var a;
                                  e._slideLayout &&
                                    (
                                      (a = e)._slideLayout._slideObjects || []
                                    ).forEach(function (t) {
                                      t._type === N.placeholder &&
                                        0 ===
                                          a._slideObjects.filter(function (e) {
                                            return (
                                              e.options &&
                                              e.options.placeholder ===
                                                t.options.placeholder
                                            );
                                          }).length &&
                                        Pe(a, [{ text: "" }], t.options, !1);
                                    });
                                }),
                                i.folder("_rels"),
                                i.folder("docProps"),
                                i.folder("ppt").folder("_rels"),
                                i.folder("ppt/charts").folder("_rels"),
                                i.folder("ppt/embeddings"),
                                i.folder("ppt/media"),
                                i.folder("ppt/slideLayouts").folder("_rels"),
                                i.folder("ppt/slideMasters").folder("_rels"),
                                i.folder("ppt/slides").folder("_rels"),
                                i.folder("ppt/theme"),
                                i.folder("ppt/notesMasters").folder("_rels"),
                                i.folder("ppt/notesSlides").folder("_rels"),
                                i.file(
                                  "[Content_Types].xml",
                                  ((A = this.slides),
                                  (o = this.slideLayouts),
                                  (n = this.masterSlide),
                                  (r =
                                    (r =
                                      (r =
                                        (r =
                                          (r =
                                            (r =
                                              '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
                                              u) +
                                            '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/>') +
                                          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="jpeg" ContentType="image/jpeg"/>') +
                                        '<Default Extension="jpg" ContentType="image/jpg"/><Default Extension="svg" ContentType="image/svg+xml"/>') +
                                      '<Default Extension="png" ContentType="image/png"/><Default Extension="gif" ContentType="image/gif"/>') +
                                    '<Default Extension="m4v" ContentType="video/mp4"/><Default Extension="mp4" ContentType="video/mp4"/>'),
                                  A.forEach(function (e) {
                                    (e._relsMedia || []).forEach(function (e) {
                                      "image" === e.type ||
                                        "online" === e.type ||
                                        "chart" === e.type ||
                                        "m4v" === e.extn ||
                                        r.includes(e.type) ||
                                        (r +=
                                          '<Default Extension="' +
                                          e.extn +
                                          '" ContentType="' +
                                          e.type +
                                          '"/>');
                                    });
                                  }),
                                  (r =
                                    (r +=
                                      '<Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing"/><Default Extension="xlsx" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>') +
                                    '<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/><Override PartName="/ppt/notesMasters/notesMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml"/>'),
                                  A.forEach(function (e, t) {
                                    (r =
                                      (r +=
                                        '<Override PartName="/ppt/slideMasters/slideMaster'.concat(
                                          t + 1,
                                          '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>'
                                        )) +
                                      '<Override PartName="/ppt/slides/slide'.concat(
                                        t + 1,
                                        '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>'
                                      )),
                                      e._relsChart.forEach(function (e) {
                                        r += '<Override PartName="'.concat(
                                          e.Target,
                                          '" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>'
                                        );
                                      });
                                  }),
                                  (r =
                                    (r +=
                                      '<Override PartName="/ppt/presProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presProps+xml"/><Override PartName="/ppt/viewProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml"/>') +
                                    '<Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/><Override PartName="/ppt/tableStyles.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml"/>'),
                                  o.forEach(function (e, t) {
                                    (r +=
                                      '<Override PartName="/ppt/slideLayouts/slideLayout'.concat(
                                        t + 1,
                                        '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>'
                                      )),
                                      (e._relsChart || []).forEach(function (
                                        e
                                      ) {
                                        r +=
                                          ' <Override PartName="' +
                                          e.Target +
                                          '" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>';
                                      });
                                  }),
                                  A.forEach(function (e, t) {
                                    r +=
                                      '<Override PartName="/ppt/notesSlides/notesSlide'.concat(
                                        t + 1,
                                        '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml"/>'
                                      );
                                  }),
                                  n._relsChart.forEach(function (e) {
                                    r +=
                                      ' <Override PartName="' +
                                      e.Target +
                                      '" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>';
                                  }),
                                  n._relsMedia.forEach(function (e) {
                                    "image" === e.type ||
                                      "online" === e.type ||
                                      "chart" === e.type ||
                                      "m4v" === e.extn ||
                                      r.includes(e.type) ||
                                      (r +=
                                        ' <Default Extension="' +
                                        e.extn +
                                        '" ContentType="' +
                                        e.type +
                                        '"/>');
                                  }),
                                  (r =
                                    (r +=
                                      ' <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>') +
                                    ' <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>'))
                                ),
                                i.file(
                                  "_rels/.rels",
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                    u,
                                    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n\t\t<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>\n\t\t<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>\n\t\t<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>\n\t\t</Relationships>'
                                  )
                                ),
                                i.file(
                                  "docProps/app.xml",
                                  ((o = this.slides),
                                  (A = this.company),
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                                    .concat(
                                      u,
                                      '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">\n\t<TotalTime>0</TotalTime>\n\t<Words>0</Words>\n\t<Application>Microsoft Office PowerPoint</Application>\n\t<PresentationFormat>On-screen Show (16:9)</PresentationFormat>\n\t<Paragraphs>0</Paragraphs>\n\t<Slides>'
                                    )
                                    .concat(o.length, "</Slides>\n\t<Notes>")
                                    .concat(
                                      o.length,
                                      '</Notes>\n\t<HiddenSlides>0</HiddenSlides>\n\t<MMClips>0</MMClips>\n\t<ScaleCrop>false</ScaleCrop>\n\t<HeadingPairs>\n\t\t<vt:vector size="6" baseType="variant">\n\t\t\t<vt:variant><vt:lpstr>Fonts Used</vt:lpstr></vt:variant>\n\t\t\t<vt:variant><vt:i4>2</vt:i4></vt:variant>\n\t\t\t<vt:variant><vt:lpstr>Theme</vt:lpstr></vt:variant>\n\t\t\t<vt:variant><vt:i4>1</vt:i4></vt:variant>\n\t\t\t<vt:variant><vt:lpstr>Slide Titles</vt:lpstr></vt:variant>\n\t\t\t<vt:variant><vt:i4>'
                                    )
                                    .concat(
                                      o.length,
                                      '</vt:i4></vt:variant>\n\t\t</vt:vector>\n\t</HeadingPairs>\n\t<TitlesOfParts>\n\t\t<vt:vector size="'
                                    )
                                    .concat(
                                      o.length + 1 + 2,
                                      '" baseType="lpstr">\n\t\t\t<vt:lpstr>Arial</vt:lpstr>\n\t\t\t<vt:lpstr>Calibri</vt:lpstr>\n\t\t\t<vt:lpstr>Office Theme</vt:lpstr>\n\t\t\t'
                                    )
                                    .concat(
                                      o
                                        .map(function (e, t) {
                                          return "<vt:lpstr>Slide ".concat(
                                            t + 1,
                                            "</vt:lpstr>"
                                          );
                                        })
                                        .join(""),
                                      "\n\t\t</vt:vector>\n\t</TitlesOfParts>\n\t<Company>"
                                    )
                                    .concat(
                                      A,
                                      "</Company>\n\t<LinksUpToDate>false</LinksUpToDate>\n\t<SharedDoc>false</SharedDoc>\n\t<HyperlinksChanged>false</HyperlinksChanged>\n\t<AppVersion>16.0000</AppVersion>\n\t</Properties>"
                                    ))
                                ),
                                i.file(
                                  "docProps/core.xml",
                                  ((n = this.title),
                                  (o = this.subject),
                                  (A = this.author),
                                  (t = this.revision),
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n\t<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\t\t<dc:title>'
                                    .concat(
                                      I(n),
                                      "</dc:title>\n\t\t<dc:subject>"
                                    )
                                    .concat(
                                      I(o),
                                      "</dc:subject>\n\t\t<dc:creator>"
                                    )
                                    .concat(
                                      I(A),
                                      "</dc:creator>\n\t\t<cp:lastModifiedBy>"
                                    )
                                    .concat(
                                      I(A),
                                      "</cp:lastModifiedBy>\n\t\t<cp:revision>"
                                    )
                                    .concat(
                                      t,
                                      '</cp:revision>\n\t\t<dcterms:created xsi:type="dcterms:W3CDTF">'
                                    )
                                    .concat(
                                      new Date()
                                        .toISOString()
                                        .replace(/\.\d\d\dZ/, "Z"),
                                      '</dcterms:created>\n\t\t<dcterms:modified xsi:type="dcterms:W3CDTF">'
                                    )
                                    .concat(
                                      new Date()
                                        .toISOString()
                                        .replace(/\.\d\d\dZ/, "Z"),
                                      "</dcterms:modified>\n\t</cp:coreProperties>"
                                    ))
                                ),
                                i.file(
                                  "ppt/_rels/presentation.xml.rels",
                                  (function (e) {
                                    for (
                                      var t = 1,
                                        a =
                                          (a =
                                            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
                                            u) +
                                          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
                                          '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>',
                                        A = 1;
                                      A <= e.length;
                                      A++
                                    )
                                      a += '<Relationship Id="rId'
                                        .concat(
                                          ++t,
                                          '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide'
                                        )
                                        .concat(A, '.xml"/>');
                                    return (a +=
                                      '<Relationship Id="rId'.concat(
                                        ++t + 0,
                                        '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="notesMasters/notesMaster1.xml"/>'
                                      ) +
                                      '<Relationship Id="rId'.concat(
                                        t + 1,
                                        '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps" Target="presProps.xml"/>'
                                      ) +
                                      '<Relationship Id="rId'.concat(
                                        t + 2,
                                        '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps" Target="viewProps.xml"/>'
                                      ) +
                                      '<Relationship Id="rId'.concat(
                                        t + 3,
                                        '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>'
                                      ) +
                                      '<Relationship Id="rId'.concat(
                                        t + 4,
                                        '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles" Target="tableStyles.xml"/>'
                                      ) +
                                      "</Relationships>");
                                  })(this.slides)
                                ),
                                i.file(
                                  "ppt/theme/theme1.xml",
                                  ((o =
                                    null != (o = (n = this).theme) &&
                                    o.headFontFace
                                      ? '<a:latin typeface="'.concat(
                                          null == (o = n.theme)
                                            ? void 0
                                            : o.headFontFace,
                                          '"/>'
                                        )
                                      : '<a:latin typeface="Calibri Light" panose="020F0302020204030204"/>'),
                                  (n =
                                    null != (A = n.theme) && A.bodyFontFace
                                      ? '<a:latin typeface="'.concat(
                                          null == (A = n.theme)
                                            ? void 0
                                            : A.bodyFontFace,
                                          '"/>'
                                        )
                                      : '<a:latin typeface="Calibri" panose="020F0502020204030204"/>'),
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="4472C4"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="5B9BD5"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont>'
                                    .concat(
                                      o,
                                      '<a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Angsana New"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:majorFont><a:minorFont>'
                                    )
                                    .concat(
                                      n,
                                      '<a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Cordia New"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>'
                                    ))
                                ),
                                i.file(
                                  "ppt/presentation.xml",
                                  (function (e) {
                                    var t =
                                      (t =
                                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                          u
                                        ) +
                                        '<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' +
                                        'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" '.concat(
                                          e.rtlMode ? 'rtl="1"' : "",
                                          ' saveSubsetFonts="1" autoCompressPictures="0">'
                                        )) +
                                      '<p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>' +
                                      "<p:sldIdLst>";
                                    e.slides.forEach(function (e) {
                                      return (t += '<p:sldId id="'
                                        .concat(e._slideId, '" r:id="rId')
                                        .concat(e._rId, '"/>'));
                                    }),
                                      (t =
                                        (t =
                                          (t =
                                            (t += "</p:sldIdLst>") +
                                            '<p:notesMasterIdLst><p:notesMasterId r:id="rId'.concat(
                                              e.slides.length + 2,
                                              '"/></p:notesMasterIdLst>'
                                            )) +
                                          '<p:sldSz cx="'
                                            .concat(
                                              e.presLayout.width,
                                              '" cy="'
                                            )
                                            .concat(
                                              e.presLayout.height,
                                              '"/>'
                                            )) +
                                        '<p:notesSz cx="'
                                          .concat(e.presLayout.height, '" cy="')
                                          .concat(e.presLayout.width, '"/>') +
                                        "<p:defaultTextStyle>");
                                    for (var a = 1; a < 10; a++)
                                      t +=
                                        "<a:lvl"
                                          .concat(a, 'pPr marL="')
                                          .concat(
                                            457200 * (a - 1),
                                            '" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">'
                                          ) +
                                        '<a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/>' +
                                        "</a:defRPr></a:lvl".concat(a, "pPr>");
                                    return (
                                      (t += "</p:defaultTextStyle>"),
                                      e.sections &&
                                        0 < e.sections.length &&
                                        ((t +=
                                          '<p:extLst><p:ext uri="{521415D9-36F7-43E2-AB2F-B90AF26B5E84}"><p14:sectionLst xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main">'),
                                        e.sections.forEach(function (e) {
                                          (t += '<p14:section name="'
                                            .concat(I(e.title), '" id="{')
                                            .concat(
                                              he(
                                                "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                                              ),
                                              '}"><p14:sldIdLst>'
                                            )),
                                            e._slides.forEach(function (e) {
                                              return (t +=
                                                '<p14:sldId id="'.concat(
                                                  e._slideId,
                                                  '"/>'
                                                ));
                                            }),
                                            (t +=
                                              "</p14:sldIdLst></p14:section>");
                                        }),
                                        (t +=
                                          '</p14:sectionLst></p:ext><p:ext uri="{EFAFB233-063F-42B5-8137-9DF3F51BA10A}"><p15:sldGuideLst xmlns:p15="http://schemas.microsoft.com/office/powerpoint/2012/main"/></p:ext></p:extLst>')),
                                      (t += "</p:presentation>")
                                    );
                                  })(this)
                                ),
                                i.file(
                                  "ppt/presProps.xml",
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                    u,
                                    '<p:presentationPr xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"/>'
                                  )
                                ),
                                i.file(
                                  "ppt/tableStyles.xml",
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                    u,
                                    '<a:tblStyleLst xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" def="{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}"/>'
                                  )
                                ),
                                i.file(
                                  "ppt/viewProps.xml",
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                    u,
                                    '<p:viewPr xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:normalViewPr horzBarState="maximized"><p:restoredLeft sz="15611"/><p:restoredTop sz="94610"/></p:normalViewPr><p:slideViewPr><p:cSldViewPr snapToGrid="0" snapToObjects="1"><p:cViewPr varScale="1"><p:scale><a:sx n="136" d="100"/><a:sy n="136" d="100"/></p:scale><p:origin x="216" y="312"/></p:cViewPr><p:guideLst/></p:cSldViewPr></p:slideViewPr><p:notesTextViewPr><p:cViewPr><p:scale><a:sx n="1" d="1"/><a:sy n="1" d="1"/></p:scale><p:origin x="0" y="0"/></p:cViewPr></p:notesTextViewPr><p:gridSpacing cx="76200" cy="76200"/></p:viewPr>'
                                  )
                                ),
                                this.slideLayouts.forEach(function (e, t) {
                                  i.file(
                                    "ppt/slideLayouts/slideLayout".concat(
                                      t + 1,
                                      ".xml"
                                    ),
                                    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n\t\t<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" preserve="1">\n\t\t'.concat(
                                      ke(e),
                                      "\n\t\t<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>"
                                    )
                                  ),
                                    i.file(
                                      "ppt/slideLayouts/_rels/slideLayout".concat(
                                        t + 1,
                                        ".xml.rels"
                                      ),
                                      ((e = t + 1),
                                      ze(l.slideLayouts[e - 1], [
                                        {
                                          target:
                                            "../slideMasters/slideMaster1.xml",
                                          type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster",
                                        },
                                      ]))
                                    );
                                }),
                                this.slides.forEach(function (e, t) {
                                  var a;
                                  i.file(
                                    "ppt/slides/slide".concat(t + 1, ".xml"),
                                    ((a = e),
                                    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                      u
                                    ) +
                                      '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"' +
                                      "".concat(
                                        null != a && a.hidden
                                          ? ' show="0"'
                                          : "",
                                        ">"
                                      ) +
                                      "".concat(ke(a)) +
                                      "<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>")
                                  ),
                                    i.file(
                                      "ppt/slides/_rels/slide".concat(
                                        t + 1,
                                        ".xml.rels"
                                      ),
                                      Xe(l.slides, l.slideLayouts, t + 1)
                                    ),
                                    i.file(
                                      "ppt/notesSlides/notesSlide".concat(
                                        t + 1,
                                        ".xml"
                                      ),
                                      Ye(e)
                                    ),
                                    i.file(
                                      "ppt/notesSlides/_rels/notesSlide".concat(
                                        t + 1,
                                        ".xml.rels"
                                      ),
                                      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n\t\t<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n\t\t\t<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="../notesMasters/notesMaster1.xml"/>\n\t\t\t<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="../slides/slide'.concat(
                                        t + 1,
                                        '.xml"/>\n\t\t</Relationships>'
                                      )
                                    );
                                }),
                                i.file(
                                  "ppt/slideMasters/slideMaster1.xml",
                                  ((a = this.masterSlide),
                                  (t = (t = this.slideLayouts).map(function (
                                    e,
                                    t
                                  ) {
                                    return '<p:sldLayoutId id="'
                                      .concat(H + t, '" r:id="rId')
                                      .concat(a._rels.length + t + 1, '"/>');
                                  })),
                                  (A =
                                    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
                                    u),
                                  (A +=
                                    '<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">') +
                                    ke(a) +
                                    '<p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:sldLayoutIdLst>' +
                                    t.join("") +
                                    '</p:sldLayoutIdLst><p:hf sldNum="0" hdr="0" ftr="0" dt="0"/><p:txStyles> <p:titleStyle>  <a:lvl1pPr algn="ctr" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="0"/></a:spcBef><a:buNone/><a:defRPr sz="4400" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mj-lt"/><a:ea typeface="+mj-ea"/><a:cs typeface="+mj-cs"/></a:defRPr></a:lvl1pPr> </p:titleStyle> <p:bodyStyle>  <a:lvl1pPr marL="342900" indent="-342900" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="•"/><a:defRPr sz="3200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl1pPr>  <a:lvl2pPr marL="742950" indent="-285750" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="–"/><a:defRPr sz="2800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl2pPr>  <a:lvl3pPr marL="1143000" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="•"/><a:defRPr sz="2400" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl3pPr>  <a:lvl4pPr marL="1600200" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="–"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl4pPr>  <a:lvl5pPr marL="2057400" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="»"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl5pPr>  <a:lvl6pPr marL="2514600" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="•"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl6pPr>  <a:lvl7pPr marL="2971800" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="•"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl7pPr>  <a:lvl8pPr marL="3429000" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="•"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl8pPr>  <a:lvl9pPr marL="3886200" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="•"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl9pPr> </p:bodyStyle> <p:otherStyle>  <a:defPPr><a:defRPr lang="en-US"/></a:defPPr>  <a:lvl1pPr marL="0" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl1pPr>  <a:lvl2pPr marL="457200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl2pPr>  <a:lvl3pPr marL="914400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl3pPr>  <a:lvl4pPr marL="1371600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl4pPr>  <a:lvl5pPr marL="1828800" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl5pPr>  <a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl6pPr>  <a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl7pPr>  <a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl8pPr>  <a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl9pPr> </p:otherStyle></p:txStyles></p:sldMaster>')
                                ),
                                i.file(
                                  "ppt/slideMasters/_rels/slideMaster1.xml.rels",
                                  ((o = this.masterSlide),
                                  (n = (n = this.slideLayouts).map(function (
                                    e,
                                    t
                                  ) {
                                    return {
                                      target:
                                        "../slideLayouts/slideLayout".concat(
                                          t + 1,
                                          ".xml"
                                        ),
                                      type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout",
                                    };
                                  })).push({
                                    target: "../theme/theme1.xml",
                                    type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
                                  }),
                                  ze(o, n))
                                ),
                                i.file(
                                  "ppt/notesMasters/notesMaster1.xml",
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                    u,
                                    '<p:notesMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:bg><p:bgRef idx="1001"><a:schemeClr val="bg1"/></p:bgRef></p:bg><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr><p:sp><p:nvSpPr><p:cNvPr id="2" name="Header Placeholder 1"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="hdr" sz="quarter"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="2971800" cy="458788"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0"/><a:lstStyle><a:lvl1pPr algn="l"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="3" name="Date Placeholder 2"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="dt" idx="1"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="3884613" y="0"/><a:ext cx="2971800" cy="458788"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0"/><a:lstStyle><a:lvl1pPr algn="r"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:fld id="{5282F153-3F37-0F45-9E97-73ACFA13230C}" type="datetimeFigureOut"><a:rPr lang="en-US"/><a:t>7/23/19</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="4" name="Slide Image Placeholder 3"/><p:cNvSpPr><a:spLocks noGrp="1" noRot="1" noChangeAspect="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldImg" idx="2"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="685800" y="1143000"/><a:ext cx="5486400" cy="3086100"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln w="12700"><a:solidFill><a:prstClr val="black"/></a:solidFill></a:ln></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="ctr"/><a:lstStyle/><a:p><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="5" name="Notes Placeholder 4"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="body" sz="quarter" idx="3"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="685800" y="4400550"/><a:ext cx="5486400" cy="3600450"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0"/><a:lstStyle/><a:p><a:pPr lvl="0"/><a:r><a:rPr lang="en-US"/><a:t>Click to edit Master text styles</a:t></a:r></a:p><a:p><a:pPr lvl="1"/><a:r><a:rPr lang="en-US"/><a:t>Second level</a:t></a:r></a:p><a:p><a:pPr lvl="2"/><a:r><a:rPr lang="en-US"/><a:t>Third level</a:t></a:r></a:p><a:p><a:pPr lvl="3"/><a:r><a:rPr lang="en-US"/><a:t>Fourth level</a:t></a:r></a:p><a:p><a:pPr lvl="4"/><a:r><a:rPr lang="en-US"/><a:t>Fifth level</a:t></a:r></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="6" name="Footer Placeholder 5"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="ftr" sz="quarter" idx="4"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="0" y="8685213"/><a:ext cx="2971800" cy="458787"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="b"/><a:lstStyle><a:lvl1pPr algn="l"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="7" name="Slide Number Placeholder 6"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldNum" sz="quarter" idx="5"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="3884613" y="8685213"/><a:ext cx="2971800" cy="458787"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="b"/><a:lstStyle><a:lvl1pPr algn="r"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:fld id="{CE5E9CC1-C706-0F49-92D6-E571CC5EEA8F}" type="slidenum"><a:rPr lang="en-US"/><a:t>‹#›</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp></p:spTree><p:extLst><p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}"><p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1024086991"/></p:ext></p:extLst></p:cSld><p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:notesStyle><a:lvl1pPr marL="0" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl1pPr><a:lvl2pPr marL="457200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl2pPr><a:lvl3pPr marL="914400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl3pPr><a:lvl4pPr marL="1371600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl4pPr><a:lvl5pPr marL="1828800" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl5pPr><a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl6pPr><a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl7pPr><a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl8pPr><a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl9pPr></p:notesStyle></p:notesMaster>'
                                  )
                                ),
                                i.file(
                                  "ppt/notesMasters/_rels/notesMaster1.xml.rels",
                                  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat(
                                    u,
                                    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n\t\t<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>\n\t\t</Relationships>'
                                  )
                                ),
                                this.slideLayouts.forEach(function (e) {
                                  l.createChartMediaRels(e, i, c);
                                }),
                                this.slides.forEach(function (e) {
                                  l.createChartMediaRels(e, i, c);
                                }),
                                this.createChartMediaRels(
                                  this.masterSlide,
                                  i,
                                  c
                                ),
                                [
                                  4,
                                  Promise.all(c).then(function () {
                                    return p(l, void 0, void 0, function () {
                                      return d(this, function (e) {
                                        switch (e.label) {
                                          case 0:
                                            return "STREAM" !== s.outputType
                                              ? [3, 2]
                                              : [
                                                  4,
                                                  i.generateAsync({
                                                    type: "nodebuffer",
                                                    compression: s.compression
                                                      ? "DEFLATE"
                                                      : "STORE",
                                                  }),
                                                ];
                                          case 1:
                                            return [2, e.sent()];
                                          case 2:
                                            return s.outputType
                                              ? [
                                                  4,
                                                  i.generateAsync({
                                                    type: s.outputType,
                                                  }),
                                                ]
                                              : [3, 4];
                                          case 3:
                                            return [2, e.sent()];
                                          case 4:
                                            return [
                                              4,
                                              i.generateAsync({
                                                type: "blob",
                                                compression: s.compression
                                                  ? "DEFLATE"
                                                  : "STORE",
                                              }),
                                            ];
                                          case 5:
                                            return [2, e.sent()];
                                        }
                                      });
                                    });
                                  }),
                                ]
                              );
                            case 1:
                              return [2, e.sent()];
                          }
                          var a, t, A, o, n, r;
                        });
                      });
                    }),
                  ]
                );
              case 1:
                return [2, e.sent()];
            }
          });
        });
      });
    (this.LAYOUTS = {
      LAYOUT_4x3: { name: "screen4x3", width: 9144e3, height: 6858e3 },
      LAYOUT_16x9: { name: "screen16x9", width: 9144e3, height: 5143500 },
      LAYOUT_16x10: { name: "screen16x10", width: 9144e3, height: 5715e3 },
      LAYOUT_WIDE: { name: "custom", width: 12192e3, height: 6858e3 },
    }),
      (this._author = "PptxGenJS"),
      (this._company = "PptxGenJS"),
      (this._revision = "1"),
      (this._subject = "PptxGenJS Presentation"),
      (this._title = "PptxGenJS Presentation"),
      (this._presLayout = {
        name: this.LAYOUTS[i].name,
        _sizeW: this.LAYOUTS[i].width,
        _sizeH: this.LAYOUTS[i].height,
        width: this.LAYOUTS[i].width,
        height: this.LAYOUTS[i].height,
      }),
      (this._rtlMode = !1),
      (this._slideLayouts = [
        {
          _margin: oe,
          _name: ae,
          _presLayout: this._presLayout,
          _rels: [],
          _relsChart: [],
          _relsMedia: [],
          _slide: null,
          _slideNum: 1e3,
          _slideNumberProps: null,
          _slideObjects: [],
        },
      ]),
      (this._slides = []),
      (this._sections = []),
      (this._masterSlide = {
        addChart: null,
        addImage: null,
        addMedia: null,
        addNotes: null,
        addShape: null,
        addTable: null,
        addText: null,
        _name: null,
        _presLayout: this._presLayout,
        _rId: null,
        _rels: [],
        _relsChart: [],
        _relsMedia: [],
        _slideId: null,
        _slideLayout: null,
        _slideNum: null,
        _slideNumberProps: null,
        _slideObjects: [],
      });
  }
  return (
    Object.defineProperty(a.prototype, "layout", {
      get: function () {
        return this._layout;
      },
      set: function (e) {
        var t = this.LAYOUTS[e];
        if (!t) throw new Error("UNKNOWN-LAYOUT");
        (this._layout = e), (this._presLayout = t);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "version", {
      get: function () {
        return this._version;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "author", {
      get: function () {
        return this._author;
      },
      set: function (e) {
        this._author = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "company", {
      get: function () {
        return this._company;
      },
      set: function (e) {
        this._company = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "revision", {
      get: function () {
        return this._revision;
      },
      set: function (e) {
        this._revision = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "subject", {
      get: function () {
        return this._subject;
      },
      set: function (e) {
        this._subject = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "theme", {
      get: function () {
        return this._theme;
      },
      set: function (e) {
        this._theme = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "title", {
      get: function () {
        return this._title;
      },
      set: function (e) {
        this._title = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "rtlMode", {
      get: function () {
        return this._rtlMode;
      },
      set: function (e) {
        this._rtlMode = e;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "masterSlide", {
      get: function () {
        return this._masterSlide;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "slides", {
      get: function () {
        return this._slides;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "sections", {
      get: function () {
        return this._sections;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "slideLayouts", {
      get: function () {
        return this._slideLayouts;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "AlignH", {
      get: function () {
        return this._alignH;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "AlignV", {
      get: function () {
        return this._alignV;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "ChartType", {
      get: function () {
        return this._chartType;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "OutputType", {
      get: function () {
        return this._outputType;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "presLayout", {
      get: function () {
        return this._presLayout;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "SchemeColor", {
      get: function () {
        return this._schemeColor;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "ShapeType", {
      get: function () {
        return this._shapeType;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "charts", {
      get: function () {
        return this._charts;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "colors", {
      get: function () {
        return this._colors;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(a.prototype, "shapes", {
      get: function () {
        return this._shapes;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (a.prototype.stream = function (t) {
      return p(this, void 0, void 0, function () {
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                this.exportPresentation({
                  compression: null == t ? void 0 : t.compression,
                  outputType: "STREAM",
                }),
              ];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
    (a.prototype.write = function (A) {
      return p(this, void 0, void 0, function () {
        var t, a;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (t =
                  "object" == typeof A && null != A && A.outputType
                    ? A.outputType
                    : A || null),
                (a =
                  !("object" != typeof A || null == A || !A.compression) &&
                  A.compression),
                [4, this.exportPresentation({ compression: a, outputType: t })]
              );
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
    (a.prototype.writeFile = function (A) {
      return p(this, void 0, void 0, function () {
        var o,
          t,
          a,
          n,
          r = this;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (o =
                  "undefined" != typeof require && "undefined" == typeof window
                    ? require("fs")
                    : null),
                "string" == typeof A &&
                  console.log(
                    "Warning: `writeFile(filename)` is deprecated - please use `WriteFileProps` argument (v3.5.0)"
                  ),
                (t =
                  "object" == typeof A && null != A && A.fileName
                    ? A.fileName
                    : "string" == typeof A
                    ? A
                    : ""),
                (a =
                  !("object" != typeof A || null == A || !A.compression) &&
                  A.compression),
                (n = t
                  ? t.toString().toLowerCase().endsWith(".pptx")
                    ? t
                    : t + ".pptx"
                  : "Presentation.pptx"),
                [
                  4,
                  this.exportPresentation({
                    compression: a,
                    outputType: o ? "nodebuffer" : null,
                  }).then(function (A) {
                    return p(r, void 0, void 0, function () {
                      return d(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return o
                              ? [
                                  4,
                                  new Promise(function (t, a) {
                                    o.writeFile(n, A, function (e) {
                                      e ? a(e) : t(n);
                                    });
                                  }),
                                ]
                              : [3, 2];
                          case 1:
                            return [2, e.sent()];
                          case 2:
                            return [4, this.writeFileToBrowser(n, A)];
                          case 3:
                            return [2, e.sent()];
                        }
                      });
                    });
                  }),
                ]
              );
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
    (a.prototype.addSection = function (e) {
      e
        ? e.title || console.warn("addSection requires a title")
        : console.warn("addSection requires an argument");
      var t = { _type: "user", _slides: [], title: e.title };
      e.order ? this.sections.splice(e.order, 0, t) : this._sections.push(t);
    }),
    (a.prototype.addSlide = function (t) {
      var a =
          "string" == typeof t
            ? t
            : null != t && t.masterName
            ? t.masterName
            : "",
        e = {
          _name: this.LAYOUTS[i].name,
          _presLayout: this.presLayout,
          _rels: [],
          _relsChart: [],
          _relsMedia: [],
          _slideNum: this.slides.length + 1,
        },
        A =
          (a &&
            (A = this.slideLayouts.filter(function (e) {
              return e._name === a;
            })[0]) &&
            (e = A),
          new Be({
            addSlide: this.addNewSlide,
            getSlide: this.getSlide,
            presLayout: this.presLayout,
            setSlideNum: this.setSlideNumber,
            slideId: this.slides.length + 256,
            slideRId: this.slides.length + 2,
            slideNumber: this.slides.length + 1,
            slideLayout: e,
          }));
      return (
        this._slides.push(A),
        null != t && t.sectionTitle
          ? (e = this.sections.filter(function (e) {
              return e.title === t.sectionTitle;
            })[0])
            ? e._slides.push(A)
            : console.warn(
                'addSlide: unable to find section with title: "'.concat(
                  t.sectionTitle,
                  '"'
                )
              )
          : this.sections &&
            0 < this.sections.length &&
            (null == t || !t.sectionTitle) &&
            ("default" === (e = this._sections[this.sections.length - 1])._type
              ? e._slides.push(A)
              : this._sections.push({
                  title: "Default-".concat(
                    this.sections.filter(function (e) {
                      return "default" === e._type;
                    }).length + 1
                  ),
                  _type: "default",
                  _slides: [A],
                })),
        A
      );
    }),
    (a.prototype.defineLayout = function (e) {
      e
        ? e.name
          ? e.width
            ? e.height
              ? "number" != typeof e.height
                ? console.warn(
                    "defineLayout `height` should be a number (inches)"
                  )
                : "number" != typeof e.width &&
                  console.warn(
                    "defineLayout `width` should be a number (inches)"
                  )
              : console.warn("defineLayout requires `height`")
            : console.warn("defineLayout requires `width`")
          : console.warn("defineLayout requires `name`")
        : console.warn("defineLayout requires `{name, width, height}`"),
        (this.LAYOUTS[e.name] = {
          name: e.name,
          _sizeW: Math.round(Number(e.width) * F),
          _sizeH: Math.round(Number(e.height) * F),
          width: Math.round(Number(e.width) * F),
          height: Math.round(Number(e.height) * F),
        });
    }),
    (a.prototype.defineSlideMaster = function (e) {
      if (!e.title)
        throw new Error(
          "defineSlideMaster() object argument requires a `title` value. (https://gitbrent.github.io/PptxGenJS/docs/masters.html)"
        );
      var t,
        o,
        a = {
          _margin: e.margin || oe,
          _name: e.title,
          _presLayout: this.presLayout,
          _rels: [],
          _relsChart: [],
          _relsMedia: [],
          _slide: null,
          _slideNum: 1e3 + this.slideLayouts.length + 1,
          _slideNumberProps: e.slideNumber || null,
          _slideObjects: [],
          background: e.background || null,
          bkgd: e.bkgd || null,
        };
      (o = a),
        (t = e).bkgd && (o.bkgd = t.bkgd),
        t.objects &&
          Array.isArray(t.objects) &&
          0 < t.objects.length &&
          t.objects.forEach(function (e, t) {
            var a = Object.keys(e)[0],
              A = o;
            n[a] && "chart" === a
              ? xe(A, e[a].type, e[a].data, e[a].opts)
              : n[a] && "image" === a
              ? Ce(A, e[a])
              : n[a] && "line" === a
              ? we(A, c.LINE, e[a])
              : n[a] && "rect" === a
              ? we(A, c.RECTANGLE, e[a])
              : n[a] && "text" === a
              ? Pe(A, [{ text: e[a].text }], e[a].options, !1)
              : n[a] &&
                "placeholder" === a &&
                ((e[a].options.placeholder = e[a].options.name),
                delete e[a].options.name,
                (e[a].options._placeholderType = e[a].options.type),
                delete e[a].options.type,
                (e[a].options._placeholderIdx = 100 + t),
                Pe(A, [{ text: e[a].text }], e[a].options, !0));
          }),
        t.slideNumber &&
          "object" == typeof t.slideNumber &&
          (o._slideNumberProps = t.slideNumber),
        this.slideLayouts.push(a),
        (e.background || e.bkgd) && Le(e.background, a),
        a._slideNumberProps &&
          !this.masterSlide._slideNumberProps &&
          (this.masterSlide._slideNumberProps = a._slideNumberProps);
    }),
    (a.prototype.tableToSlides = function (e, t) {
      var o,
        A = this,
        n = e,
        e = (t = void 0 === t ? {} : t),
        a =
          null != t && t.masterSlideName
            ? this.slideLayouts.filter(function (e) {
                return e._name === t.masterSlideName;
              })[0]
            : null,
        r = (e = void 0 === e ? {} : e) || {},
        l =
          ((r.slideMargin =
            r.slideMargin || 0 === r.slideMargin ? r.slideMargin : 0.5),
          r.w || A.presLayout.width,
          []),
        c = [],
        i = [],
        s = [],
        p = [],
        d = [0.5, 0.5, 0.5, 0.5],
        f = 0;
      if (!document.getElementById(n))
        throw new Error('tableToSlides: Table ID "' + n + '" does not exist!');
      null != a && a._margin
        ? (Array.isArray(a._margin)
            ? (d = a._margin)
            : isNaN(a._margin) ||
              (d = [a._margin, a._margin, a._margin, a._margin]),
          (r.slideMargin = d))
        : null != r &&
          r.slideMargin &&
          (Array.isArray(r.slideMargin)
            ? (d = r.slideMargin)
            : isNaN(r.slideMargin) ||
              (d = [
                r.slideMargin,
                r.slideMargin,
                r.slideMargin,
                r.slideMargin,
              ])),
        (o = (r.w ? M(r.w) : A.presLayout.width) - M(d[1] + d[3])),
        r.verbose &&
          (console.log("[[VERBOSE MODE]]"),
          console.log(
            "|-- `tableToSlides` ----------------------------------------------------|"
          ),
          console.log(
            "| tableProps.h .................................... = ".concat(r.h)
          ),
          console.log(
            "| tableProps.w .................................... = ".concat(r.w)
          ),
          console.log(
            "| pptx.presLayout.width ........................... = ".concat(
              (A.presLayout.width / F).toFixed(1)
            )
          ),
          console.log(
            "| pptx.presLayout.height .......................... = ".concat(
              (A.presLayout.height / F).toFixed(1)
            )
          ),
          console.log(
            "| emuSlideTabW .................................... = ".concat(
              (o / F).toFixed(1)
            )
          )),
        (e =
          0 ===
          (e = document.querySelectorAll("#".concat(n, " tr:first-child th")))
            .length
            ? document.querySelectorAll("#".concat(n, " tr:first-child td"))
            : e).forEach(function (e) {
          if (e.getAttribute("colspan"))
            for (var t = 0; t < Number(e.getAttribute("colspan")); t++)
              p.push(
                Math.round(e.offsetWidth / Number(e.getAttribute("colspan")))
              );
          else p.push(e.offsetWidth);
        }),
        p.forEach(function (e) {
          f += e;
        }),
        p.forEach(function (e, t) {
          var e = Number(((Number(o) * ((e / f) * 100)) / 100 / F).toFixed(2)),
            a = 0,
            A = document.querySelector(
              "#"
                .concat(n, " thead tr:first-child th:nth-child(")
                .concat(t + 1, ")")
            ),
            A =
              (A && (a = Number(A.getAttribute("data-pptx-min-width"))),
              document.querySelector(
                "#"
                  .concat(n, " thead tr:first-child th:nth-child(")
                  .concat(t + 1, ")")
              ));
          A && (a = Number(A.getAttribute("data-pptx-width"))),
            s.push(e < a ? a : e);
        }),
        r.verbose &&
          console.log(
            "| arrColW ......................................... = [".concat(
              s.join(", "),
              "]"
            )
          ),
        ["thead", "tbody", "tfoot"].forEach(function (t) {
          document
            .querySelectorAll("#".concat(n, " ").concat(t, " tr"))
            .forEach(function (e) {
              var a = [];
              switch (
                (Array.from(e.cells).forEach(function (A) {
                  var e = window
                      .getComputedStyle(A)
                      .getPropertyValue("color")
                      .replace(/\s+/gi, "")
                      .replace("rgba(", "")
                      .replace("rgb(", "")
                      .replace(")", "")
                      .split(","),
                    t = window
                      .getComputedStyle(A)
                      .getPropertyValue("background-color")
                      .replace(/\s+/gi, "")
                      .replace("rgba(", "")
                      .replace("rgb(", "")
                      .replace(")", "")
                      .split(","),
                    o =
                      (("rgba(0, 0, 0, 0)" !==
                        window
                          .getComputedStyle(A)
                          .getPropertyValue("background-color") &&
                        !window
                          .getComputedStyle(A)
                          .getPropertyValue("transparent")) ||
                        (t = ["255", "255", "255"]),
                      {
                        align: null,
                        bold: !!(
                          "bold" ===
                            window
                              .getComputedStyle(A)
                              .getPropertyValue("font-weight") ||
                          500 <=
                            Number(
                              window
                                .getComputedStyle(A)
                                .getPropertyValue("font-weight")
                            )
                        ),
                        border: null,
                        color: me(Number(e[0]), Number(e[1]), Number(e[2])),
                        fill: {
                          color: me(Number(t[0]), Number(t[1]), Number(t[2])),
                        },
                        fontFace:
                          (
                            window
                              .getComputedStyle(A)
                              .getPropertyValue("font-family") || ""
                          )
                            .split(",")[0]
                            .replace(/"/g, "")
                            .replace("inherit", "")
                            .replace("initial", "") || null,
                        fontSize: Number(
                          window
                            .getComputedStyle(A)
                            .getPropertyValue("font-size")
                            .replace(/[a-z]/gi, "")
                        ),
                        margin: null,
                        colspan: Number(A.getAttribute("colspan")) || null,
                        rowspan: Number(A.getAttribute("rowspan")) || null,
                        valign: null,
                      });
                  ["left", "center", "right", "start", "end"].includes(
                    window.getComputedStyle(A).getPropertyValue("text-align")
                  ) &&
                    ((e = window
                      .getComputedStyle(A)
                      .getPropertyValue("text-align")
                      .replace("start", "left")
                      .replace("end", "right")),
                    (o.align =
                      "center" === e
                        ? "center"
                        : "left" === e
                        ? "left"
                        : "right" === e
                        ? "right"
                        : null)),
                    ["top", "middle", "bottom"].includes(
                      window
                        .getComputedStyle(A)
                        .getPropertyValue("vertical-align")
                    ) &&
                      ((t = window
                        .getComputedStyle(A)
                        .getPropertyValue("vertical-align")),
                      (o.valign =
                        "top" === t
                          ? "top"
                          : "middle" === t
                          ? "middle"
                          : "bottom" === t
                          ? "bottom"
                          : null)),
                    window
                      .getComputedStyle(A)
                      .getPropertyValue("padding-left") &&
                      ((o.margin = [0, 0, 0, 0]),
                      [
                        "padding-top",
                        "padding-right",
                        "padding-bottom",
                        "padding-left",
                      ].forEach(function (e, t) {
                        o.margin[t] = Math.round(
                          Number(
                            window
                              .getComputedStyle(A)
                              .getPropertyValue(e)
                              .replace(/\D/gi, "")
                          )
                        );
                      })),
                    (window
                      .getComputedStyle(A)
                      .getPropertyValue("border-top-width") ||
                      window
                        .getComputedStyle(A)
                        .getPropertyValue("border-right-width") ||
                      window
                        .getComputedStyle(A)
                        .getPropertyValue("border-bottom-width") ||
                      window
                        .getComputedStyle(A)
                        .getPropertyValue("border-left-width")) &&
                      ((o.border = [null, null, null, null]),
                      ["top", "right", "bottom", "left"].forEach(function (
                        e,
                        t
                      ) {
                        var a = Math.round(
                            Number(
                              window
                                .getComputedStyle(A)
                                .getPropertyValue("border-" + e + "-width")
                                .replace("px", "")
                            )
                          ),
                          e = window
                            .getComputedStyle(A)
                            .getPropertyValue("border-" + e + "-color")
                            .replace(/\s+/gi, "")
                            .replace("rgba(", "")
                            .replace("rgb(", "")
                            .replace(")", "")
                            .split(","),
                          e = me(Number(e[0]), Number(e[1]), Number(e[2]));
                        o.border[t] = { pt: a, color: e };
                      })),
                    a.push({
                      _type: N.tablecell,
                      text: A.innerText,
                      options: o,
                    });
                }),
                t)
              ) {
                case "thead":
                  l.push(a);
                  break;
                case "tbody":
                  c.push(a);
                  break;
                case "tfoot":
                  i.push(a);
                  break;
                default:
                  console.log(
                    "table parsing: unexpected table part: ".concat(t)
                  );
              }
            });
        }),
        (r._arrObjTabHeadRows = l || null),
        (r.colW = s),
        ye(Q(Q(Q([], l, !0), c, !0), i, !0), r, A.presLayout, a).forEach(
          function (e, t) {
            var a = A.addSlide({ masterName: r.masterSlideName || null });
            0 === t && (r.y = r.y || d[0]),
              0 < t &&
                (r.y = r.autoPageSlideStartY || r.newSlideStartY || d[0]),
              r.verbose &&
                console.log(
                  "| opts.autoPageSlideStartY: "
                    .concat(r.autoPageSlideStartY, " / arrInchMargins[0]: ")
                    .concat(d[0], " => opts.y = ")
                    .concat(r.y)
                ),
              a.addTable(e.rows, {
                x: r.x || d[3],
                y: r.y,
                w: Number(o) / F,
                colW: s,
                autoPage: !1,
              }),
              r.addImage &&
                ((r.addImage.options = r.addImage.options || {}),
                r.addImage.image &&
                (r.addImage.image.path || r.addImage.image.data)
                  ? a.addImage({
                      path: r.addImage.image.path,
                      data: r.addImage.image.data,
                      x: r.addImage.options.x,
                      y: r.addImage.options.y,
                      w: r.addImage.options.w,
                      h: r.addImage.options.h,
                    })
                  : console.warn(
                      "Warning: tableToSlides.addImage requires either `path` or `data`"
                    )),
              r.addShape &&
                a.addShape(r.addShape.shapeName, r.addShape.options || {}),
              r.addTable &&
                a.addTable(r.addTable.rows, r.addTable.options || {}),
              r.addText && a.addText(r.addText.text, r.addText.options || {});
          }
        );
    }),
    a
  );
})();
//# sourceMappingURL=pptxgen.min.js.map

export default PptxGenJS;
