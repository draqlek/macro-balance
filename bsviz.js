'use strict';
var g = void 0;
/** @type {boolean} */
var k = true;
/** @type {null} */
var l = null;
/** @type {boolean} */
var o = false;
var q;
/**
 * @param {!Object} options
 * @param {?} key
 * @return {?}
 */
function aa(options, key) {
  var ret = l;
  /** @type {number} */
  i = 0;
  for (; i < options.length; i++) {
    if (options[i].value == key) {
      ret = options.options[i].text;
      break;
    }
  }
  return ret;
}
/**
 * @param {string} value
 * @param {string} action
 * @param {?} context
 * @return {undefined}
 */
function r(value, action, context) {
  if (context) {
    _gaq.push(["_trackEvent", value, action, context]);
  } else {
    _gaq.push(["_trackEvent", value, action]);
  }
}
/**
 * @param {number} id
 * @param {number} f
 * @param {number} num
 * @param {number} n
 * @return {?}
 */
function s(id, f, num, n) {
  /** @type {!Element} */
  var t = document.createElementNS(svgns, "line");
  t.setAttribute("x1", id);
  t.setAttribute("y1", f);
  t.setAttribute("x2", num);
  t.setAttribute("y2", n);
  t.setAttribute("style", "stroke:green;stroke-width:2");
  return t;
}
/**
 * @param {number} v
 * @param {number} r
 * @param {number} obj
 * @param {number} i
 * @param {string} name
 * @param {!Object} f
 * @return {?}
 */
function v(v, r, obj, i, name, f) {
  /** @type {!Element} */
  var a = document.createElementNS(svgns, "rect");
  a.setAttribute("x", v);
  a.setAttribute("y", r);
  a.setAttribute("width", obj);
  a.setAttribute("height", i);
  a.setAttribute("fill", name);
  if (f != g && f != l) {
    a.setAttribute("id", f);
  }
  return a;
}
/**
 * @param {?} f
 * @return {?}
 */
function y(f) {
  /** @type {!Element} */
  var chart = document.createElementNS(svgns, "g");
  if (f != g && f != l) {
    chart.setAttribute("id", f);
  }
  return chart;
}
/**
 * @param {number} a
 * @param {number} b
 * @param {(Object|string)} s
 * @param {!Object} ch
 * @return {?}
 */
function z(a, b, s, ch) {
  /** @type {!Element} */
  var path = document.createElementNS(svgns, "text");
  /** @type {!Text} */
  s = document.createTextNode(s, k);
  path.appendChild(s);
  path.setAttribute("x", a);
  path.setAttribute("y", b);
  if (ch != g && ch != l) {
    path.setAttribute("id", ch);
  }
  return path;
}
var ba = {
  "-1" : "Base Money is a measure of private sector assets that are central bank liabilities, specifically:\\- bank reserves\\- currency (notes and coins) in bank vaults\\- currency (notes and coins) in circulation",
  "-2" : "Broad Money is a measure of private sector money excluding assets of banks, specifically:\\- bank deposits\\- currency (notes and coins) in circulation\\Note: there are various measures of broad money (M1, M2, M3, MZM, etc) outside the scope of this visualizer.",
  "-3" : "Credit",
  "-4" : "Private Debt includes all debt liabilities of private sector entities (e.g., corporate bonds or loans to households.)"
};
/** @type {string} */
var ca = "black";
/** @type {number} */
var B = 70;
/** @type {number} */
var da = 1;
/** @type {number} */
var C = 2 * B + 10;
/** @type {null} */
var D = l;
var E = new ea;
/**
 * @param {number} iconName
 * @param {string} options
 * @param {boolean} b
 * @param {number} x
 * @param {string} n
 * @param {string} a
 * @return {undefined}
 */
function fa(iconName, options, b, x, n, a) {
  /** @type {number} */
  this.Oa = iconName;
  /** @type {string} */
  this.id = options;
  /** @type {boolean} */
  this.jb = b;
  /** @type {number} */
  this.Nb = x;
  /** @type {string} */
  this.type = n;
  /** @type {string} */
  this.ab = a;
}
/**
 * @param {undefined} c
 * @param {undefined} d
 * @param {number} context
 * @param {string} id
 * @param {boolean} text
 * @param {?} i
 * @param {number} value
 * @param {string} type
 * @return {?}
 */
function ga(c, d, context, id, text, i, value, type) {
  this.Sb = this.vb = this.ac = this.Xa = this.Qa = l;
  /** @type {number} */
  this.y = this.x = -1;
  /** @type {number} */
  this.Oa = context;
  /** @type {string} */
  this.id = id;
  /** @type {boolean} */
  this.jb = text;
  this.Nb = i;
  /** @type {number} */
  this.type = value;
  /** @type {string} */
  this.ab = type;
  /** @type {number} */
  this.scale = 1;
  /** @type {!Array} */
  this.eb = [];
  /** @type {number} */
  this.bb = this.Fb = this.wb = 0;
  this.Eb = o;
  this.bc = k;
  this.color = ha(value, type);
  /** @type {!Element} */
  this.Qa = document.createElementNS(svgns, "rect");
  this.Qa.setAttribute("width", B);
  this.Qa.setAttribute("height", this.Wa());
  this.Qa.setAttribute("stroke", ca);
  this.Qa.setAttribute("stroke-width", da);
  this.Qa.setAttribute("fill", this.color);
  this.Qa.addEventListener("mouseover", function(options) {
    if (options != l) {
      options = E.Jb(options.target);
      if (options != l) {
        options.Pb();
      }
    }
  }, o);
  this.Qa.addEventListener("mouseout", function(options) {
    if (options != l) {
      options = E.Jb(options.target);
      if (options != l) {
        options.Ob();
      }
    }
  }, o);
  /** @type {!Element} */
  this.Xa = document.createElementNS(svgns, "text");
  this.Xa.setAttribute("style", "fill: white;");
  /** @type {!Text} */
  this.ac = document.createTextNode(this.jb, k);
  this.Xa.appendChild(this.ac);
  this.Xa.addEventListener("mouseover", function(options) {
    if (options != l) {
      options = E.Kb(options.target);
      if (options != l) {
        options.Pb();
      }
    }
  }, o);
  this.Xa.addEventListener("mouseout", function(options) {
    if (options != l) {
      options = E.Kb(options.target);
      if (options != l) {
        options.Ob();
      }
    }
  }, o);
  /** @type {!Element} */
  this.vb = document.createElementNS(svgns, "text");
  /** @type {!Text} */
  this.Sb = document.createTextNode("", k);
  this.vb.appendChild(this.Sb);
  F(this, c, d);
  G(this, context);
  return k;
}
q = ga.prototype;
/**
 * @return {?}
 */
q.xb = function() {
  return new fa(this.Oa, this.id, this.jb, this.Nb, this.type, this.ab);
};
/**
 * @param {number} a
 * @param {number} callback
 * @return {?}
 */
function ha(a, callback) {
  var color;
  /** @type {string} */
  color = 0 == a ? "darkgreen" : 1 == a ? "darkred" : "mediumblue";
  if (10 == callback) {
    /** @type {string} */
    color = "darkorange";
  } else {
    if (11 == callback) {
      /** @type {string} */
      color = "darkgreen";
    } else {
      if (12 == callback) {
        /** @type {string} */
        color = "darkblue";
      } else {
        if (13 == callback) {
          /** @type {string} */
          color = "#904a1c";
        } else {
          if (14 == callback) {
            /** @type {string} */
            color = "darkred";
          } else {
            if (15 == callback) {
              /** @type {string} */
              color = "#202020";
            } else {
              if (16 == callback) {
                /** @type {string} */
                color = "darkorange";
              }
            }
          }
        }
      }
    }
  }
  return color;
}
/**
 * @return {?}
 */
q.Wa = function() {
  return Math.round(this.Oa / this.scale);
};
/**
 * @param {!Object} a
 * @param {number} b
 * @param {number} c
 * @return {undefined}
 */
function F(a, b, c) {
  if (!(a.x == b && a.y == c)) {
    /** @type {number} */
    a.x = b;
    /** @type {number} */
    a.y = c;
    a.Qa.setAttribute("x", a.x);
    a.Qa.setAttribute("y", a.y);
    a.Xa.setAttribute("x", a.x + Math.round(B / 2));
    a.Xa.setAttribute("y", a.y + 10);
    a.vb.setAttribute("x", 0 == a.type ? a.x - 10 : a.x + B + 10);
    a.vb.setAttribute("y", a.y + 10);
  }
}
/**
 * @param {!Array} value
 * @param {number} string
 * @return {undefined}
 */
function G(value, string) {
  if (0 < string && 0 >= value.Oa) {
    value.Xa.setAttribute("visibility", k);
    ia(value, k);
  }
  /** @type {number} */
  value.Oa = string;
  value.Qa.setAttribute("height", value.Wa());
  if (0 >= string) {
    value.Xa.setAttribute("visibility", o);
    ia(value, o);
  }
  ja(value, value.jb);
}
/**
 * @param {!Array} node
 * @param {boolean} value
 * @return {undefined}
 */
function ia(node, value) {
  node.vb.setAttribute("visibility", value ? "visible" : "hidden");
}
/**
 * @param {!Array} data
 * @param {string} value
 * @return {undefined}
 */
function ja(data, value) {
  /** @type {string} */
  data.jb = value;
  /** @type {string} */
  data.ac.nodeValue = 0 < data.Oa ? 16 != data.ab ? value + " $" + data.Oa : value + " " + data.Oa + "%" : "";
}
/**
 * @param {number} scale
 * @return {undefined}
 */
q.setScale = function(scale) {
  /** @type {boolean} */
  var _useKey = scale != this.scale;
  /** @type {number} */
  this.scale = scale;
  if (_useKey) {
    this.Qa.setAttribute("height", this.Wa());
  }
};
/**
 * @param {?} node
 * @return {undefined}
 */
function ka(node) {
  if (node.bc) {
    node.Qa.setAttribute("stroke", ca);
    node.Qa.setAttribute("stroke-width", da);
  }
  node.Eb = o;
}
/**
 * @return {?}
 */
q.Gb = function() {
  if (!this.Eb) {
    return o;
  }
  if (la) {
    return G(this, this.bb), ka(this), k;
  }
  G(this, this.Oa + this.Fb);
  if (0 > this.Fb && this.Oa <= this.bb || 0 < this.Fb && this.Oa >= this.bb) {
    ka(this);
  }
  return k;
};
/**
 * @param {boolean} a
 * @param {!Object} d
 * @return {undefined}
 */
function ma(a, d) {
  d.appendChild(a.Qa);
  d.appendChild(a.Xa);
  d.appendChild(a.vb);
}
/**
 * @param {!Request} model
 * @param {!Request} a
 * @return {undefined}
 */
function oa(model, a) {
  var prev = o;
  /** @type {number} */
  var j = 0;
  var imagesLen = model.eb.length;
  for (; j < imagesLen; j++) {
    if (model.eb[j] == a) {
      prev = k;
      break;
    }
  }
  if (!prev) {
    model.eb.push(a);
  }
}
/**
 * @return {?}
 */
q.Pb = function() {
  /** @type {number} */
  var n = 0;
  var val = this.eb.length;
  for (; n < val; n++) {
    var i = this.eb[n];
    i.Qa.setAttribute("fill", "white");
    i.Xa.setAttribute("style", "fill:black");
  }
  if (0 < this.eb.length) {
    this.Qa.setAttribute("fill", "#FFFFA0");
    this.Xa.setAttribute("style", "fill:black");
  } else {
    this.Qa.setAttribute("stroke", "white");
  }
  /** @type {string} */
  n = "Pointing At:  " + this.jb;
  val = this.Nb;
  if (!(val == g || val == l || "" == val)) {
    if (H == l) {
      pa();
    }
    /** @type {number} */
    qa = 5;
    /** @type {number} */
    ra = 10;
    I.setAttribute("x", 5);
    I.setAttribute("y", 10);
    sa(0, n, "font-size: 12px; font-weight: bold; font-family: arial,sans-serif; fill:darkred;");
    /** @type {number} */
    n = 1;
    val = val.split("\\");
    /** @type {number} */
    i = 0;
    var newPartNum = val.length;
    for (; i < newPartNum; i++) {
      var item = val[i];
      for (;;) {
        if (29 >= item.length) {
          sa(n++, item, "font-size: 12px; font-weight: normal; font-family: arial,sans-serif;");
          break;
        } else {
          var idx = item.substring(0, 29).lastIndexOf(" ");
          idx = -1 == idx ? 29 : idx + 1;
          var w = item.substring(0, idx);
          sa(n++, w, "font-size: 12px; font-weight: normal; font-family: arial,sans-serif;");
          item = item.substring(idx);
        }
      }
    }
    for (; n < ta; n++) {
      sa(n, "", "font-size: 12px; font-weight: normal; font-family: arial,sans-serif;");
    }
    H.setAttribute("visibility", "visible");
  }
  return k;
};
/**
 * @return {?}
 */
q.Ob = function() {
  if (H != l) {
    H.setAttribute("visibility", "hidden");
    var c;
    for (c in J) {
      /** @type {string} */
      J[c].firstChild.nodeValue = "";
    }
  }
  /** @type {number} */
  c = 0;
  var cN = this.eb.length;
  for (; c < cN; c++) {
    var e = this.eb[c];
    e.Qa.setAttribute("fill", e.color);
    e.Xa.setAttribute("style", "fill:white");
  }
  if (0 < this.eb.length) {
    this.Qa.setAttribute("fill", this.color);
    this.Xa.setAttribute("style", "fill:white");
  }
  this.Qa.setAttribute("stroke", this.Eb ? "yellow" : ca);
  return k;
};
/**
 * @param {number} k
 * @param {string} i
 * @param {!Array} data
 * @param {!Array} plugins
 * @param {number} p
 * @param {number} scale
 * @return {undefined}
 */
function ua(k, i, data, plugins, p, scale) {
  /** @type {number} */
  this.ub = k;
  /** @type {string} */
  this.$a = i;
  /** @type {!Array} */
  this.La = [];
  /** @type {!Array} */
  this.Ma = [];
  /** @type {number} */
  k = 0;
  i = data.length;
  for (; k < i; k++) {
    var falseySection = data[k].xb();
    this.La.push(falseySection);
  }
  /** @type {number} */
  k = 0;
  i = plugins.length;
  for (; k < i; k++) {
    falseySection = plugins[k].xb();
    this.Ma.push(falseySection);
  }
  this.Va = p != l ? p.xb() : l;
  /** @type {number} */
  this.scale = scale;
}
/**
 * @param {!Node} group
 * @param {undefined} value
 * @param {undefined} c
 * @param {undefined} x
 * @return {?}
 */
function K(group, value, c, x) {
  if (group != g) {
    return this.Yb(group, value, c, x);
  }
}
/**
 * @param {?} a
 * @param {string} b
 * @return {undefined}
 */
function L(a, b) {
  a.Ua.setAttribute("id", b);
}
q = K.prototype;
/**
 * @param {!Node} g
 * @param {number} data
 * @param {number} t
 * @param {number} a
 * @return {?}
 */
q.Yb = function(g, data, t, a) {
  this.ub = l;
  /** @type {number} */
  this.x = data;
  /** @type {number} */
  this.y = t;
  this.Ua = l;
  /** @type {!Array} */
  this.La = [];
  /** @type {!Array} */
  this.Ma = [];
  this.ib = this.Va = l;
  /** @type {number} */
  this.ob = this.lb = 0;
  this.$a = "undefined" == typeof a ? o : a;
  this.nb = l;
  /** @type {!Array} */
  this.Mb = [];
  this.Hb = l;
  /** @type {!Node} */
  this.ub = g;
  if (this.Rb) {
    this.Rb.nodeValue = this.ub;
  }
  /** @type {!Element} */
  this.Ua = document.createElementNS(svgns, "g");
  this.Ua.setAttribute("style", "font-size: 9px; font-weight: bold; text-anchor: middle; font-family: arial,sans-serif;");
  /** @type {!Element} */
  g = document.createElementNS(svgns, "line");
  g.setAttribute("x1", this.x - 10);
  g.setAttribute("x2", this.$a ? this.x + B + 10 : this.x + 2 * B + 10 + 10);
  g.setAttribute("y1", this.y + 1);
  g.setAttribute("y2", this.y + 1);
  g.setAttribute("style", "stroke:rgb(99,99,99);stroke-width:2");
  this.Ua.appendChild(g);
  /** @type {!Element} */
  this.ib = document.createElementNS(svgns, "text");
  this.ib.setAttribute("x", this.$a ? this.x + Math.round(B / 2) : this.x + B + Math.round(5));
  this.ib.setAttribute("y", this.y + 10);
  /** @type {!Text} */
  this.Rb = document.createTextNode(this.ub, k);
  this.ib.appendChild(this.Rb);
  this.Ua.appendChild(this.ib);
  this.ib.addEventListener("mouseover", function(options) {
    if (options != l) {
      var lang = E.Ib(options.target);
      if (lang != l) {
        options.target.setAttribute("style", "fill:blue");
        lang.Pb();
      }
    }
  }, o);
  this.ib.addEventListener("mouseout", function(options) {
    if (options != l) {
      var lang = E.Ib(options.target);
      if (lang != l) {
        lang.Ob();
        options.target.setAttribute("style", "fill:black");
      }
    }
  }, o);
  /** @type {!Element} */
  this.Ab = document.createElementNS(svgns, "text");
  this.Ab.setAttribute("x", this.$a ? this.x + Math.round(B / 2) : this.x + B + Math.round(5));
  this.Ab.setAttribute("y", 0);
  /** @type {!Text} */
  this.cc = document.createTextNode("", k);
  this.Ab.appendChild(this.cc);
  this.Ua.appendChild(this.Ab);
  if (!this.$a) {
    /** @type {!Element} */
    this.fb = document.createElementNS(svgns, "text");
    this.fb.setAttribute("x", this.x + Math.round(B / 2));
    this.fb.setAttribute("y", 0);
    this.fb.setAttribute("fill", "#606060");
    this.fb.setAttribute("font-style", "italic");
    /** @type {!Text} */
    this.ec = document.createTextNode("Assets", k);
    this.fb.appendChild(this.ec);
    this.Ua.appendChild(this.fb);
    /** @type {!Element} */
    this.kb = document.createElementNS(svgns, "text");
    this.kb.setAttribute("x", this.x + 1.5 * B + 10);
    this.kb.setAttribute("y", 0);
    this.kb.setAttribute("fill", "#606060");
    this.kb.setAttribute("font-style", "italic");
    /** @type {!Text} */
    this.gc = document.createTextNode("Liabilities", k);
    this.kb.appendChild(this.gc);
    this.Ua.appendChild(this.kb);
  }
  /** @type {number} */
  this.scale = 1;
  M(this);
  return k;
};
/**
 * @param {number} s
 * @return {?}
 */
q.setScale = function(s) {
  /** @type {number} */
  this.scale = s;
  /** @type {number} */
  var i = 0;
  var c = this.La.length;
  for (; i < c; i++) {
    this.La[i].setScale(s);
  }
  /** @type {number} */
  i = 0;
  c = this.Ma.length;
  for (; i < c; i++) {
    this.Ma[i].setScale(s);
  }
  if (this.Va != l) {
    this.Va.setScale(s);
  }
  M(this);
  return k;
};
/**
 * @return {?}
 */
q.xb = function() {
  return new ua(this.ub, this.$a, this.La, this.Ma, this.Va, this.scale);
};
/**
 * @param {!Object} element
 * @param {boolean} d
 * @param {number} input
 * @param {number} val
 * @param {number} name
 * @param {number} n
 * @return {undefined}
 */
function N(element, d, input, val, name, n) {
  d = new ga(0, 0, input, val, name, n, 0, d);
  d.setScale(element.scale);
  element.La.unshift(d);
  element.lb += input;
  ma(d, element.Ua);
  M(element);
}
/**
 * @param {!Object} x
 * @param {boolean} t
 * @param {number} pos
 * @param {number} val
 * @param {number} attrs
 * @param {number} opts
 * @return {undefined}
 */
function P(x, t, pos, val, attrs, opts) {
  t = new ga(0, 0, pos, val, attrs, opts, 1, t);
  t.setScale(x.scale);
  x.Ma.unshift(t);
  x.ob += pos;
  ma(t, x.Ua);
  M(x);
}
/**
 * @return {undefined}
 */
q.Qb = function() {
  this.fc = this.xb();
  this.Mb.push(this.fc);
};
/**
 * @return {?}
 */
q.Wa = function() {
  /** @type {number} */
  var x = Math.max(this.lb, this.ob);
  if (1 != this.scale) {
    /** @type {number} */
    x = Math.round(x / this.scale);
  }
  return x;
};
/**
 * @param {!Object} item
 * @return {undefined}
 */
function M(item) {
  /** @type {number} */
  var height = 0;
  /** @type {number} */
  var offset = 0;
  var i = o;
  /** @type {number} */
  var s = 0;
  /** @type {number} */
  var h = 0;
  /** @type {number} */
  var j = 0;
  var statesLength = item.La.length;
  for (; j < statesLength; j++) {
    F(item.La[j], item.x, item.y - s - item.La[j].Wa());
    s = s + item.La[j].Wa();
    h = h + item.La[j].Oa;
    if (16 == item.La[j].ab) {
      i = k;
    }
  }
  height = item.lb = h;
  offset = s;
  /** @type {number} */
  j = h = s = 0;
  statesLength = item.Ma.length;
  for (; j < statesLength; j++) {
    s = s + item.Ma[j].Wa();
    h = h + item.Ma[j].Oa;
  }
  item.ob = h;
  if (h > height) {
    height = h;
    offset = s;
  }
  if (item.Va == l && !item.$a) {
    item.Va = new ga(0, 0, 0, "equity", "Equity", "", 2, 0);
    item.Va.setScale(item.scale);
    ma(item.Va, item.Ua);
  }
  if (!item.$a) {
    G(item.Va, Math.abs(item.lb - item.ob));
    item.Va.Nb = item.nb != l ? item.nb : "Balance Sheet Equity (also called Capital or Net Worth) is calculated as Assets minus Liabilities. It can be negative if liabilities exceed assets.";
  }
  if (item.ob > item.lb) {
    if (!item.$a) {
      F(item.Va, item.x, item.y - Math.round(item.ob / item.scale));
      ja(item.Va, "Neg.Equity");
    }
    /** @type {number} */
    j = h = s = 0;
    statesLength = item.La.length;
    for (; j < statesLength; j++) {
      F(item.La[j], item.x, item.y - s - item.La[j].Wa());
      s = s + item.La[j].Wa();
      h = h + item.La[j].Oa;
    }
    /** @type {number} */
    j = h = s = 0;
    statesLength = item.Ma.length;
    for (; j < statesLength; j++) {
      F(item.Ma[j], item.x + B + 10, item.y - s - item.Ma[j].Wa());
      s = s + item.Ma[j].Wa();
      h = h + item.Ma[j].Oa;
    }
  } else {
    /** @type {number} */
    j = h = s = 0;
    statesLength = item.La.length;
    for (; j < statesLength; j++) {
      F(item.La[j], item.x, item.y - s - item.La[j].Wa());
      s = s + item.La[j].Wa();
      h = h + item.La[j].Oa;
    }
    if (!item.$a) {
      F(item.Va, item.x + B + 10, item.y - Math.round(item.lb / item.scale));
      ja(item.Va, "Equity");
      /** @type {number} */
      j = h = s = 0;
      statesLength = item.Ma.length;
      for (; j < statesLength; j++) {
        F(item.Ma[j], item.x + B + 10, item.y - s - item.Ma[j].Wa());
        s = s + item.Ma[j].Wa();
        h = h + item.Ma[j].Oa;
      }
    }
  }
  /** @type {string} */
  item.cc.nodeValue = i ? height + "%" : "$" + height;
  /** @type {number} */
  height = item.y - offset - 5;
  item.Ab.setAttribute("y", height);
  if (item.fb) {
    item.fb.setAttribute("y", height);
  }
  if (item.kb) {
    item.kb.setAttribute("y", height);
  }
  if (item.Hb) {
    height = item.Wa();
    item.Hb.setAttribute("x", item.x - 10);
    item.Hb.setAttribute("y", item.y - height - 15);
    item.Hb.setAttribute("height", height + 15 + 0 + 10);
  }
}
/**
 * @param {!Request} a
 * @param {string} val
 * @return {?}
 */
function va(a, val) {
  var j = l;
  if ("equity" == val) {
    j = a.Va;
  }
  /** @type {number} */
  var i = 0;
  var fl = a.La.length;
  for (; i < fl; i++) {
    if (a.La[i].id == val) {
      j = a.La[i];
      break;
    }
  }
  /** @type {number} */
  i = 0;
  fl = a.Ma.length;
  for (; i < fl; i++) {
    if (a.Ma[i].id == val) {
      j = a.Ma[i];
      break;
    }
  }
  return j;
}
/**
 * @param {!Object} value_in_code
 * @return {?}
 */
q.Jb = function(value_in_code) {
  var j = l;
  if (!this.$a && value_in_code == this.Va.Qa) {
    j = this.Va;
  }
  /** @type {number} */
  var i = 0;
  var gLen = this.La.length;
  for (; i < gLen; i++) {
    if (this.La[i].Qa == value_in_code) {
      j = this.La[i];
      break;
    }
  }
  /** @type {number} */
  i = 0;
  gLen = this.Ma.length;
  for (; i < gLen; i++) {
    if (this.Ma[i].Qa == value_in_code) {
      j = this.Ma[i];
      break;
    }
  }
  return j;
};
/**
 * @param {!EventTarget} value_in_code
 * @return {?}
 */
q.Kb = function(value_in_code) {
  var j = l;
  if (!this.$a && value_in_code == this.Va.Xa) {
    j = this.Va;
  }
  /** @type {number} */
  var i = 0;
  var gLen = this.La.length;
  for (; i < gLen; i++) {
    if (this.La[i].Xa == value_in_code) {
      j = this.La[i];
      break;
    }
  }
  /** @type {number} */
  i = 0;
  gLen = this.Ma.length;
  for (; i < gLen; i++) {
    if (this.Ma[i].Xa == value_in_code) {
      j = this.Ma[i];
      break;
    }
  }
  return j;
};
/**
 * @param {!EventTarget} ver
 * @return {?}
 */
q.Ib = function(ver) {
  return this.ib == ver ? this : l;
};
/**
 * @return {?}
 */
q.Gb = function() {
  /** @type {number} */
  var a = 0;
  /** @type {number} */
  var j = 0;
  var statesLength = this.La.length;
  for (; j < statesLength; j++) {
    var f = this.La[j].Gb();
    if (f) {
      a++;
    }
  }
  /** @type {number} */
  j = 0;
  statesLength = this.Ma.length;
  for (; j < statesLength; j++) {
    if (f = this.Ma[j].Gb()) {
      a++;
    }
  }
  if (0 < a || Q || la) {
    M(this);
  }
  return a;
};
/**
 * @return {undefined}
 */
q.Lb = function() {
  /** @type {number} */
  var gridInd = 0;
  var gLen = this.La.length;
  for (; gridInd < gLen; gridInd++) {
    ia(this.La[gridInd], o);
  }
  /** @type {number} */
  gridInd = 0;
  gLen = this.Ma.length;
  for (; gridInd < gLen; gridInd++) {
    ia(this.Ma[gridInd], o);
  }
};
/**
 * @param {!Request} val
 * @param {string} obj
 * @param {!Request} i
 * @param {string} name
 * @return {undefined}
 */
function R(val, obj, i, name) {
  if (i != l) {
    val = va(val, obj);
    i = va(i, name);
    if (!(val == l || i == l)) {
      oa(val, i);
      oa(i, val);
    }
  }
}
/**
 * @return {undefined}
 */
q.Pb = function() {
  var i = l;
  if (0 < this.Mb.length) {
    i = this.Mb[this.Mb.length - 1];
  }
  var width = this.x;
  var len = this.y;
  if (S != l) {
    wa();
  }
  width = width + (C + 30 + 5) * (width < C ? 1 : -1);
  if (i != l) {
    var p = new K(i.ub, width, len, i.$a);
    var n = i.La.length;
    /** @type {number} */
    n = n - 1;
    for (; 0 <= n; n--) {
      var m = i.La[n];
      N(p, m.ab, m.Oa, m.id, m.jb);
    }
    n = i.Ma.length;
    /** @type {number} */
    n = n - 1;
    for (; 0 <= n; n--) {
      m = i.Ma[n];
      P(p, m.ab, m.Oa, m.id, m.jb);
    }
    p.setScale(i.scale);
    xa = p;
  }
  p = i == l ? 100 : xa.Wa() + 30;
  S = y();
  n = v(width - 15, len - p - 15, C + 30, p + 30, "white");
  n.setAttribute("stroke", "black");
  n.setAttribute("stroke-width", 2);
  S.appendChild(n);
  if (i != l) {
    S.appendChild(xa.Ua);
  }
  n = z(width + Math.round(C / 2), len - p, "Prior to last operation:");
  n.setAttribute("style", "font-size: 11px; font-weight: bold; text-anchor: middle; font-family: arial,sans-serif; fill: blue;");
  S.appendChild(n);
  if (i == l) {
    i = z(width + Math.round(C / 2), len - p + 25, "No operations performed yet.");
    i.setAttribute("style", "font-size: 10px; font-style: italic; text-anchor: middle; font-family: arial,sans-serif; fill: black;");
    S.appendChild(i);
  }
  D.appendChild(S);
};
/**
 * @return {undefined}
 */
q.Ob = function() {
  wa();
};
ya.prototype = new K;
/**
 * @param {?} e
 * @param {?} o
 * @param {?} c
 * @param {!Object} initlength
 * @return {undefined}
 */
function ya(e, o, c, initlength) {
  K.call(this, e, o, c);
  /** @type {!Object} */
  this.mb = initlength;
  this.Db();
}
/**
 * @return {?}
 */
ya.prototype.Db = function() {
  if (this.mb == l) {
    return o;
  }
  /** @type {number} */
  var code = 0;
  /** @type {number} */
  var Y = 0;
  /** @type {number} */
  var i = 0;
  var inputsSize = this.mb.length;
  for (; i < inputsSize; i++) {
    var om = this.mb[i];
    /** @type {number} */
    var axis = 0;
    var d = om.La.length;
    for (; axis < d; axis++) {
      code = code + om.La[axis].Oa;
    }
    /** @type {number} */
    axis = 0;
    d = om.Ma.length;
    for (; axis < d; axis++) {
      Y = Y + om.Ma[axis].Oa;
    }
  }
  if (0 < code) {
    if (0 == this.La.length) {
      N(this, 1, code, "assetAggregate", "Assets", "This aggregate asset block sums up all the asset blocks in the balance sheets immediately below (grouped by the green line).");
    } else {
      G(this.La[0], code);
    }
  }
  if (0 < Y) {
    if (0 == this.Ma.length) {
      P(this, 2, Y, "liabilityAggregate", "Liabilities", "This aggregate liability block sums up all the liability blocks in the balance sheets immediately below (grouped by the green line).");
    } else {
      G(this.Ma[0], Y);
    }
  }
  M(this);
  return k;
};
za.prototype = new K;
/**
 * @param {?} type
 * @param {?} o
 * @param {?} data
 * @param {?} linkedEntities
 * @param {!Object} force
 * @return {undefined}
 */
function za(type, o, data, linkedEntities, force) {
  K.call(this, type, o, data, k);
  this.Zb = linkedEntities;
  /** @type {!Object} */
  this.mb = force;
  this.$a = k;
  this.Db();
}
/**
 * @return {?}
 */
za.prototype.Db = function() {
  if (this.mb == l) {
    return o;
  }
  /** @type {number} */
  var w = 0;
  var m = l;
  /** @type {number} */
  var r = 0;
  var readersLength = this.mb.length;
  for (; r < readersLength; r++) {
    var ww = this.mb[r];
    /** @type {number} */
    var i = 0;
    for (; i < ww.La.length; i++) {
      switch(m = ww.La[i], this.Zb) {
        case -1:
          if (2 == m.ab || 1 == m.ab) {
            w = w + m.Oa;
          }
          break;
        case -2:
          if (5 == m.ab || 1 == m.ab) {
            w = w + m.Oa;
          }
      }
    }
    /** @type {number} */
    i = 0;
    for (; i < ww.Ma.length; i++) {
      switch(m = ww.Ma[i], this.Zb) {
        case -4:
          if (4 == m.ab || 6 == m.ab) {
            w = w + m.Oa;
          }
      }
    }
  }
  if (0 == this.La.length) {
    N(this, 10, w, "stat", "Total", ba[this.Zb]);
  } else {
    G(this.La[0], w);
  }
  M(this);
  return k;
};
/** @type {null} */
var T = l;
/** @type {boolean} */
var Q = o;
/** @type {boolean} */
var la = o;
/**
 * @return {undefined}
 */
function Aa() {
  var handle = D.suspendRedraw(1E4);
  /** @type {number} */
  var val = 0;
  var state = E.Za;
  /** @type {number} */
  var name = 0;
  var e = state.length;
  for (; name < e; name++) {
    var self = state[name];
    if (!(self instanceof ya || self instanceof za)) {
      val = val + self.Gb();
    }
  }
  state = E;
  /** @type {number} */
  name = 0;
  e = state.Za.length;
  for (; name < e; name++) {
    self = state.Za[name];
    if (self instanceof ya || self instanceof za) {
      self.Db();
    }
  }
  if (0 == val) {
    Ba();
  }
  D.unsuspendRedraw(handle);
}
/**
 * @return {undefined}
 */
function Ba() {
  if (T != l) {
    clearInterval(T);
    T = l;
  }
}
/**
 * @return {undefined}
 */
function ea() {
  /** @type {!Array} */
  this.Za = [];
  this.Vb = this.Ub = l;
}
/**
 * @param {?} a
 * @return {undefined}
 */
function U(a) {
  E.Za.push(a);
}
q = ea.prototype;
/**
 * @param {!Array} value
 * @return {?}
 */
q.Sa = function(value) {
  if (T != l) {
    return o;
  }
  var a = k;
  /** @type {number} */
  var j = 0;
  var valueLength = value.length;
  for (; j < valueLength; j++) {
    var params = value[j][0];
    var route = value[j][1];
    var pageStart = value[j][2];
    params = va(params, route);
    /** @type {number} */
    a = a & (params != l && 0 <= params.Oa + pageStart);
  }
  if (a) {
    if (this.Vb != l) {
      this.Vb();
    }
    this.Lb();
    this.Qb();
    /** @type {number} */
    j = 0;
    valueLength = value.length;
    for (; j < valueLength; j++) {
      if (params = value[j][0], route = value[j][1], pageStart = value[j][2], T == l && (params = va(params, route), params != l && 0 <= params.Oa + pageStart && !(0 > params.Oa + pageStart) && (params.wb = params.Oa, params.bb = params.Oa + pageStart, 0 > params.bb && (params.bb = 0), params.wb != params.bb))) {
        /** @type {number} */
        params.Fb = params.wb < params.bb ? 1 : -1;
        /** @type {string} */
        params.Sb.nodeValue = (0 < params.bb - params.wb ? "+" : "") + (params.bb - params.wb);
        ia(params, k);
        if (Q) {
          G(params, params.bb);
        } else {
          params.bc = k;
          params.Qa.setAttribute("stroke", "yellow");
          params.Qa.setAttribute("stroke-width", 3);
          params.Eb = k;
        }
      }
    }
    if (Q) {
      Aa();
    } else {
      if (T == l) {
        /** @type {number} */
        T = setInterval(Aa, Math.round(1E3 / 15));
      }
    }
  } else {
    if (this.Ub != l) {
      this.Ub();
    }
  }
  return a;
};
/**
 * @return {undefined}
 */
q.Qb = function() {
  /** @type {number} */
  var iAddressLoop = 0;
  var addressCount = this.Za.length;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    this.Za[iAddressLoop].Qb();
  }
};
/**
 * @param {!Element} element
 * @return {?}
 */
q.Jb = function(element) {
  /** @type {number} */
  var j = 0;
  var imagesLen = this.Za.length;
  for (; j < imagesLen; j++) {
    var ch = this.Za[j].Jb(element);
    if (ch != l) {
      return ch;
    }
  }
  return l;
};
/**
 * @param {!EventTarget} element
 * @return {?}
 */
q.Kb = function(element) {
  /** @type {number} */
  var j = 0;
  var imagesLen = this.Za.length;
  for (; j < imagesLen; j++) {
    var ch = this.Za[j].Kb(element);
    if (ch != l) {
      return ch;
    }
  }
  return l;
};
/**
 * @param {!EventTarget} langs
 * @return {?}
 */
q.Ib = function(langs) {
  /** @type {number} */
  var j = 0;
  var imagesLen = this.Za.length;
  for (; j < imagesLen; j++) {
    var lang = this.Za[j].Ib(langs);
    if (lang != l) {
      return lang;
    }
  }
  return l;
};
/**
 * @return {undefined}
 */
q.Lb = function() {
  /** @type {number} */
  var iAddressLoop = 0;
  var addressCount = this.Za.length;
  for (; iAddressLoop < addressCount; iAddressLoop++) {
    this.Za[iAddressLoop].Lb();
  }
};
/** @type {null} */
var xa = l;
/** @type {null} */
var S = l;
/**
 * @return {undefined}
 */
function wa() {
  if (S != l) {
    D.removeChild(S);
    S = xa = l;
  }
}
/** @type {number} */
var qa = 0;
/** @type {number} */
var ra = 0;
/** @type {null} */
var H = l;
/** @type {null} */
var I = l;
var J = {};
/** @type {number} */
var ta = 0;
/**
 * @return {undefined}
 */
function pa() {
  H = y();
  H.setAttribute("visibility", "hidden");
  I = v(qa, ra, 175, 250, "#E8FFE8");
  I.setAttribute("stroke", "black");
  I.setAttribute("stroke-width", 2);
  H.appendChild(I);
  D.appendChild(H);
}
/**
 * @param {number} i
 * @param {number} v
 * @param {string} n
 * @return {undefined}
 */
function sa(i, v, n) {
  if (H == l) {
    pa();
  }
  var m = qa + 5;
  var worldLocation = ra + 18 * (i + 1);
  if (J[i] == g) {
    J[i] = z(m, worldLocation, "");
    H.appendChild(J[i]);
    if (i + 1 > ta) {
      ta = i + 1;
    }
  } else {
    J[i].setAttribute("x", m);
    J[i].setAttribute("y", worldLocation);
  }
  /** @type {number} */
  J[i].firstChild.nodeValue = v;
  J[i].setAttribute("style", n);
}
/**
 * @return {undefined}
 */
function Ca() {
  this.rb = this.tb = this.sb = this.zb = this.qb = this.cb = this.Cb = this.yb = this.Bb = this.Ra = this.Ta = this.Na = this.Ka = this.Ja = l;
  /** @type {number} */
  this.$b = 25;
  this.Yb();
}
/**
 * @return {undefined}
 */
Ca.prototype.Yb = function() {
  this.cb = y();
  Da(this);
  D.appendChild(this.cb);
};
/**
 * @return {undefined}
 */
Ca.prototype.reset = function() {
  for (; this.cb.hasChildNodes();) {
    this.cb.removeChild(this.cb.firstChild);
  }
  Da(this);
};
/**
 * @param {!Object} options
 * @return {undefined}
 */
function Da(options) {
  /** @type {number} */
  var x = 2 * C + 55;
  /** @type {number} */
  var b = 2 * C + 85 - 10;
  /** @type {number} */
  var f = 3 * C + 90;
  /** @type {number} */
  var c = 15 + C + 35 - 10;
  /** @type {number} */
  var i = 2 * C + 55;
  /** @type {number} */
  var result = 1.5 * C + 67.5 - 10;
  var data = C + 20;
  /** @type {number} */
  var buffer = 15 + 3.5 * (C + 35) - 10 - 20;
  /** @type {number} */
  var item = 3 * B + 2 * options.$b + 20;
  options.qb = y("privateSectorBSGroup");
  options.zb = y();
  options.sb = y();
  options.tb = y();
  options.rb = y();
  var ret = l;
  ret = v(5, 270, x, 320, "#E8E8E8", "govBgRect");
  options.zb.appendChild(ret);
  ret = v(b, 270, f, 320, "#E8E8E8", "priBgRect");
  options.qb.appendChild(ret);
  ret = v(c, 125, i, 135, "#E8E8E8", "subAggBgRect");
  options.sb.appendChild(ret);
  ret = v(result, 15, data, 100, "#E8E8E8", "aggBgRect");
  options.tb.appendChild(ret);
  ret = v(buffer, 125, item, 135, "#FFFFC0", "statBgRect");
  options.rb.appendChild(ret);
  ret = l;
  ret = z(b + f + 5, 285, "Scale: 1/1", "priScaleLabel");
  ret.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
  options.qb.appendChild(ret);
  ret = z(c + i + 5, 140, "Scale: 1/4", "subAggScaleLabel");
  ret.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
  options.sb.appendChild(ret);
  ret = z(result + data + 5, 30, "Scale: 1/8", "aggScaleLabel");
  ret.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
  options.tb.appendChild(ret);
  ret = z(buffer + item + 5, 140, "Scale: 1/2", "statScaleLabel");
  ret.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
  options.rb.appendChild(ret);
  /** @type {number} */
  data = 15;
  options.Ta = new K("Treasury (Federal Government)", data, 570);
  L(options.Ta, "treasuryBS");
  item = options.Ta;
  /** @type {string} */
  item.nb = "Without the treasury's negative equity (liabilities exceeding financial assets), it would not be possible for the private sector to have a positive financial net worth. Note that this entire visualizer excludes tangible assets in order to focus on financials.";
  M(item);
  N(options.Ta, 2, 40, "reserves", "T.Deposits", "Treasury Deposits are the Treasury's account balance at the Central Bank, used for government spending. The size is small and sovereign governments are not dependent on 'saving up' in order to spend in the future.");
  N(options.Ta, 9, 0, "ttl", "T T & L", "Treasury Tax & Loan Accounts (TT&L) are Treasury account balances held at commercial banks. These balances are used in the settlement process when Special Depository banks participate in auctions of treasury debt.");
  P(options.Ta, 3, 210, "treasuries", "Treasuries", "The Treasury's Liabilities (bonds, bills and notes) facilitate private sector savings. The private sector's savings desires predominantly determine the size of the treasury's debt (liabilities), assisted by the automatic stabilizers. Treasury liabilities exceed financial assets by design!");
  U(options.Ta);
  options.zb.appendChild(options.Ta.Ua);
  data = data + (C + 35);
  options.Ra = new K("Central Bank (Federal Government)", data, 570);
  L(options.Ra, "centralBankBS");
  item = options.Ra;
  /** @type {string} */
  item.nb = "Central Banks maintain a small positive buffer of equity (capital). Their solvency is never a concern because (a) they hold mostly high quality assets that earn income, (b) they need not mark assets to market, and (c) various forms of recapitalization by treasury are possible if ever they were needed.";
  M(item);
  N(options.Ra, 3, 170, "treasuries", "Treasuries", 'One role of central banks is to "transform" treasury liabilities into currency, so they hold treasuries as assets. They may also hold private sector securities. The income from these assets adds to equity, so central banks periodically remit these earnings to the treasury.');
  P(options.Ra, 1, 40, "currency", "Currency", "Currency (physical notes and coins) is a liability of the central bank.");
  P(options.Ra, 2, 120, "reserves", "Deposits", "The majority of the central bank's deposits are reserve balances held within the banking system, though the treasury also has an account at the central bank.");
  U(options.Ra);
  options.zb.appendChild(options.Ra.Ua);
  data = data + (C + 35);
  options.Ja = new K("Banks", data, 570);
  L(options.Ja, "bankBS");
  item = options.Ja;
  /** @type {string} */
  item.nb = "Bank Equity is specifically referred to as Capital. A bank becomes insolvent if its assets (typically loans) fall too far in value, turning equity negative (or at least below regulatory minimums.) Bank lending is capital constrained (temporarily, capital can be injected) but never reserve constrained.";
  M(item);
  N(options.Ja, 1, 40, "currency", "Currency", "Banks hold currency (physical notes and coins) in vaults in a sufficient quantity to meet the withdrawal demands of their customers. Currency and reserve balances are interchangeable from the central bank as needed.");
  N(options.Ja, 2, 80, "reserves", "Reserves", 'Bank reserve balances are electronic accounting entries and liabilities of the central bank, and are equivalent to currency. Reserve balances provide interbank liquidity for the payments system (e.g., a when a check clears reserves are transferred between banks.) Banks never "lend out" reserves!');
  N(options.Ja, 3, 0, "treasuries", "Treasuries", "Banks may hold treasuries and other assets in addition to their loans, currency, and reserve balances.");
  N(options.Ja, 4, 0, "ib-asset", "Interbank", "Asset corresponding to reserves lent to other banks in the overnight market.");
  N(options.Ja, 4, 0, "loans", "Loans", "When banks make loans they may hold them as assets on their balance sheets (or loans can be packaged and sold as securities). Interest paid by borrowers is a source of bank earnings. Writedowns and defaults shrink the value of loans, reducing bank capital (equity).");
  P(options.Ja, 5, 80, "deposits", "Deposits", "Customer deposits are the primary source of funding for banks, though they can also borrow in other ways (e.g., issuing bonds). Banks usually pay customers interest on their deposits, but make up for this cost via earning higher interest rates on loans, charging fees to customers, etc.");
  P(options.Ja, 9, 0, "ttl", "T T & L", "Treasury Tax & Loan Accounts (TT&L) are Treasury account balances held at commercial banks. These balances are used in the settlement process when Special Depository banks participate in auctions of treasury debt.");
  U(options.Ja);
  options.qb.appendChild(options.Ja.Ua);
  data = data + (C + 35);
  options.Ka = new K("Households", data, 570);
  L(options.Ka, "householdBS");
  item = options.Ka;
  /** @type {string} */
  item.nb = "Household net worth is usually positive, because on aggregate households are generally net savers. Within the household sector, some households have negative net worth (e.g., students with loans, 'underwater' homeowners, etc) while others have positive net worth (e.g., retirees with savings accounts.)";
  M(item);
  N(options.Ka, 1, 0, "currency", "Currency", "Households may choose to hold physical currency (notes and coins) either to use for cash transactions or simply as a form of savings.");
  N(options.Ka, 5, 40, "deposits", "Deposits", "Most households have one or more checking or savings accounts at banks, and these assets are called bank deposits. The bank based payment system credits and debits various depositors' accounts as payments are made by check, electronic transfer, etc.");
  N(options.Ka, 3, 40, "treasuries", "Treasuries", "Households may hold government treasuries as one form of savings.");
  N(options.Ka, 6, 0, "bonds", "Bonds", "Households may buy corporate bonds and hold them as a form of savings.");
  P(options.Ka, 4, 0, "loans", "Loans", "Households often borrow to make purchases (e.g., cars, homes, education, furniture, etc.) The loans are a liability that must be paid off over time and on which regular interest payments are usually due.");
  U(options.Ka);
  options.qb.appendChild(options.Ka.Ua);
  data = data + (C + 35);
  options.Na = new K("Companies (+ foreign sector, misc)", data, 570);
  data = options.Na;
  /** @type {string} */
  data.nb = "Companies usually have positive net worth because profits add to balance sheet equity. (But consistently unprofitable companies may become insolvent.)";
  M(data);
  N(options.Na, 1, 0, "currency", "Currency", "Companies may choose to hold some assets as physical currency (notes and coins). An example would be businesses that accept cash payments.");
  N(options.Na, 5, 40, "deposits", "Deposits", "Like households, companies hold some assets as bank deposits that they can use for buying inventory, paying employees, making investments, etc.");
  N(options.Na, 3, 0, "treasuries", "Treasuries", "Like households, companies may choose to hold government treasuries as one form of asset.");
  N(options.Na, 6, 0, "securitizedloans", "Secur. Loans", "A securitized loan is one that has been transferred from a bank's balance sheet to an investor's (or investment company's) balance sheet, typically as part of a pooled purchase. It is similar to a bond in that it is a form of private debt/borrowing that on net does not increase the broad money supply.");
  P(options.Na, 4, 0, "loans", "Loans", "Like households, companies can borrow from banks.");
  P(options.Na, 6, 0, "bonds", "Bonds", "Some companies can issue bonds to fund themselves. Other possible forms of borrowing or funding include money markets, bank loans, and capital raises (not shown here).");
  U(options.Na);
  options.qb.appendChild(options.Na.Ua);
  R(options.Ta, "treasuries", options.Ra, "treasuries");
  R(options.Ta, "treasuries", options.Ja, "treasuries");
  R(options.Ta, "treasuries", options.Ka, "treasuries");
  R(options.Ta, "treasuries", options.Na, "treasuries");
  R(options.Ta, "ttl", options.Ja, "ttl");
  R(options.Ra, "reserves", options.Ta, "reserves");
  R(options.Ra, "reserves", options.Ja, "reserves");
  R(options.Ra, "currency", options.Ja, "currency");
  R(options.Ra, "currency", options.Ka, "currency");
  R(options.Ra, "currency", options.Na, "currency");
  R(options.Ja, "deposits", options.Ka, "deposits");
  R(options.Ja, "deposits", options.Na, "deposits");
  R(options.Ka, "loans", options.Ja, "loans");
  R(options.Na, "securitizedloans", options.Ka, "loans");
  R(options.Na, "loans", options.Ja, "loans");
  R(options.Na, "bonds", options.Ka, "bonds");
  data = 15 + C + 35;
  options.yb = new ya("Federal Government Sector (aggregate)", data, 250, [options.Ta, options.Ra]);
  options.yb.setScale(4);
  U(options.yb);
  options.sb.appendChild(options.yb.Ua);
  item = data;
  data = data + (C + 35);
  options.Bb = new ya("Private Sector (aggregate)", data, 250, [options.Ja, options.Ka, options.Na]);
  options.Bb.setScale(4);
  U(options.Bb);
  options.sb.appendChild(options.Bb.Ua);
  ret = data;
  data = 15 + C + 35 + (C + 35) / 2;
  options.Cb = new ya("Total Economy (aggregate)", data, 105, [options.Bb, options.yb]);
  options.Cb.setScale(8);
  U(options.Cb);
  options.tb.appendChild(options.Cb.Ua);
  data = y();
  var w = y();
  var d = l;
  d = s(5, 270, 5 + x, 270);
  w.appendChild(d);
  d = s(5, 270, 5, 285);
  w.appendChild(d);
  d = s(5 + x, 270, 5 + x, 285);
  w.appendChild(d);
  d = s(item + Math.round(C / 2), 270, item + Math.round(C / 2), 260);
  w.appendChild(d);
  d = s(b, 270, b + f, 270);
  w.appendChild(d);
  d = s(b, 270, b, 285);
  w.appendChild(d);
  d = s(b + f, 270, b + f, 285);
  w.appendChild(d);
  d = s(ret + Math.round(C / 2), 270, ret + Math.round(C / 2), 260);
  w.appendChild(d);
  d = s(c, 125, c + i, 125);
  data.appendChild(d);
  d = s(c, 125, c, 140);
  data.appendChild(d);
  d = s(c + i, 125, c + i, 140);
  data.appendChild(d);
  d = s(result + Math.round(C / 2), 125, result + Math.round(C / 2), 115);
  data.appendChild(d);
  options.sb.appendChild(w);
  options.tb.appendChild(data);
  /** @type {number} */
  data = buffer + 10;
  options.gb = new za("Base Money", data, 250, -1, [options.Ja, options.Ka, options.Na]);
  L(options.gb, "baseMoneyStat");
  options.gb.setScale(2);
  U(options.gb);
  options.rb.appendChild(options.gb.Ua);
  data = data + (B + options.$b);
  options.hb = new za("Broad Money", data, 250, -2, [options.Ka, options.Na]);
  L(options.hb, "broadMoneyStat");
  options.hb.setScale(2);
  U(options.hb);
  options.rb.appendChild(options.hb.Ua);
  data = data + (B + options.$b);
  options.pb = new za("Private Debt", data, 250, -4, [options.Ja, options.Ka, options.Na]);
  L(options.pb, "privateDebtStat");
  options.pb.setScale(2);
  U(options.pb);
  options.rb.appendChild(options.pb.Ua);
  R(options.gb, "stat", options.Ja, "currency");
  R(options.gb, "stat", options.Ja, "reserves");
  R(options.gb, "stat", options.Ka, "currency");
  R(options.gb, "stat", options.Na, "currency");
  R(options.hb, "stat", options.Ka, "currency");
  R(options.hb, "stat", options.Na, "currency");
  R(options.hb, "stat", options.Ka, "deposits");
  R(options.hb, "stat", options.Na, "deposits");
  R(options.pb, "stat", options.Ka, "loans");
  R(options.pb, "stat", options.Na, "bonds");
  R(options.pb, "stat", options.Na, "bonds");
  options.cb.appendChild(options.qb);
  options.cb.appendChild(options.zb);
  options.cb.appendChild(options.sb);
  options.cb.appendChild(options.tb);
  options.cb.appendChild(options.rb);
}
/**
 * @param {!Array} name
 * @return {undefined}
 */
Ca.prototype.Sa = function(name) {
  E.Sa(name);
};
/** @type {null} */
var V = l;
/**
 * @return {?}
 */
function Ea() {
  /** @type {(Element|null)} */
  var p = document.getElementById("opAmountText");
  /** @type {number} */
  var e = 0;
  if (p != l && p.value != g && p.value != l) {
    /** @type {number} */
    e = parseInt(p.value);
  }
  if (0 == e) {
    /** @type {number} */
    e = 30;
  }
  return e;
}
/**
 * @return {undefined}
 */
function Fa() {
  var window = E;
  Ba();
  /** @type {!Array} */
  window.Za = [];
  window.Lb();
  try {
    if (H) {
      D.removeChild(H);
    }
  } catch (b) {
  }
  I = H = l;
  J = {};
  /** @type {number} */
  ta = 0;
  V.reset();
  Ga();
  Ha(o);
}
/**
 * @return {?}
 */
function W() {
  return document.getElementById("opSelect").value;
}
/**
 * @param {number} a
 * @return {undefined}
 */
function Ia(a) {
  switch(W()) {
    case "privatespending":
      var op = V;
      /** @type {!Array} */
      var record = [];
      record.push([op.Ka, "deposits", -a]);
      record.push([op.Na, "deposits", a]);
      op.Sa(record);
      break;
    case "governmentspending":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ta, "reserves", -a]);
      record.push([op.Ka, "deposits", a]);
      record.push([op.Ja, "reserves", a]);
      record.push([op.Ja, "deposits", a]);
      op.Sa(record);
      break;
    case "governmenttaxes":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ta, "reserves", a]);
      record.push([op.Ka, "deposits", -a]);
      record.push([op.Ja, "reserves", -a]);
      record.push([op.Ja, "deposits", -a]);
      op.Sa(record);
      break;
    case "governmentdebtissuance":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ta, "reserves", a]);
      record.push([op.Ta, "treasuries", a]);
      record.push([op.Ka, "deposits", -a]);
      record.push([op.Ja, "reserves", -a]);
      record.push([op.Ja, "deposits", -a]);
      record.push([op.Ka, "treasuries", a]);
      op.Sa(record);
      break;
    case "consolidatedgovernmentspending":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ta, "treasuries", a]);
      record.push([op.Ka, "treasuries", a]);
      op.Sa(record);
      break;
    case "governmentspendingnobonds":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ta, "treasuries", a]);
      record.push([op.Ra, "treasuries", a]);
      record.push([op.Ra, "reserves", a]);
      record.push([op.Ja, "reserves", a]);
      record.push([op.Ja, "deposits", a]);
      record.push([op.Ka, "deposits", a]);
      op.Sa(record);
      break;
    case "withdrawcurrency":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ka, "deposits", -a]);
      record.push([op.Ka, "currency", a]);
      record.push([op.Ja, "currency", -a]);
      record.push([op.Ja, "deposits", -a]);
      op.Sa(record);
      break;
    case "depositcurrency":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ka, "deposits", a]);
      record.push([op.Ka, "currency", -a]);
      record.push([op.Ja, "currency", a]);
      record.push([op.Ja, "deposits", a]);
      op.Sa(record);
      break;
    case "bankloan":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ja, "loans", a]);
      record.push([op.Ja, "deposits", a]);
      record.push([op.Ka, "deposits", a]);
      record.push([op.Ka, "loans", a]);
      op.Sa(record);
      break;
    case "bankloaninterest":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ka, "deposits", -a]);
      record.push([op.Ja, "deposits", -a]);
      op.Sa(record);
      break;
    case "bankloanrepayment":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ja, "loans", -a]);
      record.push([op.Ja, "deposits", -a]);
      record.push([op.Ka, "deposits", -a]);
      record.push([op.Ka, "loans", -a]);
      op.Sa(record);
      break;
    case "bankloandefault":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ja, "loans", -a]);
      record.push([op.Ka, "loans", -a]);
      op.Sa(record);
      break;
    case "bondissuance":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Na, "deposits", a]);
      record.push([op.Na, "bonds", a]);
      record.push([op.Ka, "deposits", -a]);
      record.push([op.Ka, "bonds", a]);
      op.Sa(record);
      break;
    case "bondinterest":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Na, "deposits", -a]);
      record.push([op.Ka, "deposits", a]);
      op.Sa(record);
      break;
    case "bondrepayment":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Na, "deposits", -a]);
      record.push([op.Na, "bonds", -a]);
      record.push([op.Ka, "deposits", a]);
      record.push([op.Ka, "bonds", -a]);
      op.Sa(record);
      break;
    case "bonddefault":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Na, "bonds", -a]);
      record.push([op.Ka, "bonds", -a]);
      op.Sa(record);
      break;
    case "bankloansecuritize":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ja, "loans", -a]);
      record.push([op.Ja, "deposits", -a]);
      record.push([op.Na, "deposits", -a]);
      record.push([op.Na, "securitizedloans", a]);
      op.Sa(record);
      break;
    case "qe":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ra, "treasuries", a]);
      record.push([op.Ra, "reserves", a]);
      record.push([op.Ka, "deposits", a]);
      record.push([op.Ka, "treasuries", -a]);
      record.push([op.Ja, "reserves", a]);
      record.push([op.Ja, "deposits", a]);
      op.Sa(record);
      break;
    case "qebanks":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ra, "treasuries", a]);
      record.push([op.Ra, "reserves", a]);
      record.push([op.Ja, "treasuries", -a]);
      record.push([op.Ja, "reserves", a]);
      op.Sa(record);
      break;
    case "omoraiserates":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ra, "treasuries", -a]);
      record.push([op.Ra, "reserves", -a]);
      record.push([op.Ja, "treasuries", a]);
      record.push([op.Ja, "reserves", -a]);
      op.Sa(record);
      break;
    case "omolowerrates":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ra, "treasuries", a]);
      record.push([op.Ra, "reserves", a]);
      record.push([op.Ja, "treasuries", -a]);
      record.push([op.Ja, "reserves", a]);
      op.Sa(record);
      break;
    case "governmentdebtissuancettl":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ta, "ttl", a]);
      record.push([op.Ta, "treasuries", a]);
      record.push([op.Ja, "treasuries", a]);
      record.push([op.Ja, "ttl", a]);
      op.Sa(record);
      break;
    case "treasurymovesttl":
      op = V;
      /** @type {!Array} */
      record = [];
      record.push([op.Ja, "reserves", -a]);
      record.push([op.Ja, "ttl", -a]);
      record.push([op.Ta, "ttl", -a]);
      record.push([op.Ta, "reserves", a]);
      op.Sa(record);
  }
}
/**
 * @return {undefined}
 */
function X() {
  Ia(Ea());
  Ha(k);
}
/**
 * @return {undefined}
 */
function Y() {
  Ia(0 - Ea());
}
/**
 * @return {undefined}
 */
function Ja() {
  /** @type {string} */
  document.getElementById("errorLabel").style.display = "block";
  r("BS Manual", "Error Op Invalid", W());
}
/**
 * @return {undefined}
 */
function Ga() {
  /** @type {string} */
  document.getElementById("errorLabel").style.display = "none";
}
/** @type {string} */
var Ka = "privatespending";
/**
 * @param {!Object} i
 * @return {undefined}
 */
function La(i) {
  if (i == l) {
    /** @type {string} */
    document.getElementById("explanationArea").style.display = "none";
  } else {
    /** @type {string} */
    document.getElementById("explanationArea").style.display = "block";
    if (Ka != l) {
      /** @type {(Element|null)} */
      var p = document.getElementById(Ka);
      if (p != l) {
        /** @type {string} */
        p.style.display = "none";
      }
    }
    Ka = i != l ? i.value : l;
    if (Ka != l) {
      /** @type {(Element|null)} */
      p = document.getElementById(Ka);
      if (p != l) {
        /** @type {string} */
        p.style.display = "block";
      }
    }
    i = aa(document.getElementById("opSelect"), W());
    /** @type {string} */
    document.getElementById("opDetailsOpName").innerHTML = " (" + i + ")";
    Ha(o);
  }
}
/**
 * @param {boolean} targetChar
 * @return {undefined}
 */
function Ha(targetChar) {
  /** @type {(Element|null)} */
  var pageCountInput = document.getElementById("replayOpButton");
  if (targetChar) {
    pageCountInput.removeAttribute("disabled");
  } else {
    pageCountInput.setAttribute("disabled", "disabled");
  }
}
/** @type {boolean} */
var Ma = o;
var Z = {
  Pa : -1,
  Ya : [["privatespending", k, "To start, observe how spending transfers assets (and financial net worth) between balance sheets within the private sector."], ["governmentspending", k, "Government spending results in an equivalent transfer of assets (and financial net worth) TO the private sector."], ["governmenttaxes", k, "Government taxation reduces the financial net worth of the private sector so as to limit potential spending and inflationary pressures. When available economic capacity is limited, taxation can also make room for the politically desired level of government spending."], 
  ["governmentspending", k, "For this step the government will spend again in preparation for the next step."], ["governmentdebtissuance", k, "Government bond issuance comes after government spending and simply gives the private sector a longer duration asset in exchange for money (i.e., it's an asset swap)."], ["consolidatedgovernmentspending", k, "A combined operation (government spending plus debt issuance) shows how government deficits supply the private sector with financial savings in the form of government liabilities."], 
  ["consolidatedgovernmentspending", o, "This step runs the combined operation in reverse so the balance sheets don't grow too large for this visualizer."], ["governmentspendingnobonds", k, "A sovereign government does not need to 'raise money' before it can spend, and this combined operation demonstrates why."], ["governmentspendingnobonds", o, "This step runs the combined operation in reverse so the balance sheets don't grow too large for this visualizer."], ["governmentspending", k, "For this step the government will spend again in preparation for later steps."], 
  ["withdrawcurrency", k, "Customers can withdraw physical cash from their bank deposit accounts."], ["depositcurrency", k, "Customers can deposit physical cash into bank accounts."], ["bankloan", k, "Banks make loans to credit-worthy borrowers (thus creating deposits) and lending is never constrained by how many reserves banks have!"], ["bankloaninterest", k, "Borrowers make regular interest payments to banks. [In real life, interest payments would be much smaller relative to original loan size than shown here.]"], 
  ["bankloanrepayment", k, "Borrowers repay loan principal over time, typically as they earn the necessary income, thus reversing the balance sheet impacts of the original loan."], ["bankloan", k, "This step creates another bank loan in preparation for the next step."], ["bankloandefault", k, "Borrower defaults on bank loans are comparable to a gift of balance sheet net worth from banks to borrowers, which is why banks only want to lend to credit-worthy borrowers."], ["bondissuance", k, "When they need money, companies can issue bonds as an alternative to borrowing from banks. (There are additional funding options also, such as the commercial paper market)."], 
  ["bondinterest", k, "Companies make interest payments on their outstanding bonds. [In real life, interest payments would be much smaller relative to original bond size than shown here.]"], ["bondrepayment", k, "Companies repay the principal on bonds as the bonds come due (bonds have fixed duration)."], ["bondissuance", k, "This step enacts another corporate bond issuance in preparation for the next step."], ["bonddefault", k, "Companies can default on their bond obligations just like bank borrowers can default on bank loans."], 
  ["bankloan", k, "This step creates another bank loan in preparation for the next step."], ["bankloansecuritize", k, "Securitization packages loans as bond-like securities that can be sold to investors."], ["qe", k, "Quantitative easing by a central bank is essentially an asset swap that replaces long duration assets in the private sector with short duration assets (either reserves or bank deposits plus reserves)."], ["omoraiserates", k, "Central banks traditionally use open market operations to defend their current target overnight interest rate. While the rate is below target, the central bank sells treasuries (withdrawing reserves) to drive the rate up toward target."], 
  ["omolowerrates", k, "Conversely, while the overnight rate is above target, the central bank adds buys treasuries (adding reserves to the banking system) to drive the rate down toward target."]],
  reset : function() {
    /** @type {number} */
    Z.Pa = -1;
    Z.Tb();
  },
  hc : function() {
    if (T == l) {
      if (Z.Pa == Z.Ya.length - 1) {
        alert("At last step already");
      } else {
        Z.Pa++;
        Z.Tb();
        var a = Z.Ya[Z.Pa][1];
        if (a) {
          X();
        } else {
          Y();
        }
        r("BS Wizard", a ? "Op Run" : "Op Reverse", W());
        if (Z.Pa == Z.Ya.length - 1) {
          r("BS Wizard", "Wizard Completed");
        }
      }
    }
  },
  jc : function() {
    if (T == l) {
      Q = k;
      var a = Z.Ya[Z.Pa][1];
      if (a) {
        Y();
      } else {
        X();
      }
      Q = o;
      if (a) {
        X();
      } else {
        Y();
      }
      r("BS Wizard", "Op Replay", W());
    }
  },
  ic : function() {
    if (T == l) {
      if (-1 == Z.Pa) {
        alert("At first step already");
      } else {
        Q = k;
        var a = Z.Ya[Z.Pa][1];
        if (a) {
          Y();
        } else {
          X();
        }
        Z.Pa--;
        Z.dc();
        if (0 <= Z.Pa) {
          if (a = Z.Ya[Z.Pa][1]) {
            Y();
          } else {
            X();
          }
          if (a) {
            X();
          } else {
            Y();
          }
        }
        Q = o;
        Z.Tb();
        r("BS Wizard", "Op Back");
      }
    }
  },
  Tb : function() {
    /** @type {string} */
    document.getElementById("wizardTotalSteps").innerHTML = "(" + (Z.Ya.length + 1) + " total steps)";
    document.getElementById("wizardPrevStepNum").innerHTML = Z.Pa + 1;
    document.getElementById("wizardCurrStepNum").innerHTML = Z.Pa + 2;
    document.getElementById("wizardNextStepNum").innerHTML = Z.Pa + 3;
    document.getElementById("wizardPrevStepOp").innerHTML = Z.Xb(Z.Pa - 1);
    document.getElementById("wizardCurrStepOp").innerHTML = Z.Xb(Z.Pa);
    document.getElementById("wizardNextStepOp").innerHTML = Z.Xb(Z.Pa + 1);
    document.getElementById("wizardPrevStepComments").innerHTML = Z.Wb(Z.Pa - 1);
    document.getElementById("wizardCurrStepComments").innerHTML = Z.Wb(Z.Pa);
    document.getElementById("wizardNextStepComments").innerHTML = Z.Wb(Z.Pa + 1);
    /** @type {string} */
    document.getElementById("wizardDoneDonate").style.display = Z.Pa == Z.Ya.length - 1 ? "inline" : "none";
    Z.dc();
    if (1 > Z.Pa) {
      document.getElementById("wizardPrevButton").setAttribute("disabled", "disabled");
    } else {
      document.getElementById("wizardPrevButton").removeAttribute("disabled");
    }
    if (0 > Z.Pa) {
      document.getElementById("wizardReplayButton").setAttribute("disabled", "disabled");
    } else {
      document.getElementById("wizardReplayButton").removeAttribute("disabled");
    }
    if (Z.Pa >= Z.Ya.length - 1) {
      document.getElementById("wizardNextButton").setAttribute("disabled", "disabled");
    } else {
      document.getElementById("wizardNextButton").removeAttribute("disabled");
    }
  },
  dc : function() {
    if (0 <= Z.Pa && Z.Pa < Z.Ya.length) {
      /** @type {(Element|null)} */
      var a = document.getElementById("opSelect");
      var bpb = Z.Ya[Z.Pa][0];
      /** @type {number} */
      i = 0;
      for (; i < a.length; i++) {
        if (a[i].value == bpb) {
          /** @type {number} */
          a.selectedIndex = i;
          break;
        }
      }
      La(document.getElementById("opSelect"));
    } else {
      La(l);
    }
  },
  Xb : function(curFileIdx) {
    /** @type {string} */
    var pix_color = "";
    if (0 <= curFileIdx && curFileIdx < Z.Ya.length) {
      pix_color = aa(document.getElementById("opSelect"), Z.Ya[curFileIdx][0]);
      if (!Z.Ya[curFileIdx][1]) {
        /** @type {string} */
        pix_color = pix_color + " (REVERSAL)";
      }
    }
    return pix_color;
  },
  Wb : function(indexDonor) {
    /** @type {string} */
    var th_field = "";
    return th_field = 0 > indexDonor ? "[Starting point]" : indexDonor >= Z.Ya.length ? "[Ending point]" : Z.Ya[indexDonor][2];
  }
};
/**
 * @return {undefined}
 */
window.bsOnload = function() {
  /** @type {!NodeList<Element>} */
  var c = document.getElementsByTagName("button");
  /** @type {number} */
  var a = 0;
  for (; a < c.length; a++) {
    c[a].disabled = o;
  }
  /** @type {!Element} */
  D = document.getElementsByTagNameNS(svgns, "svg")[0];
  V = new Ca;
  /** @type {function(): undefined} */
  E.Ub = Ja;
  /** @type {function(): undefined} */
  E.Vb = Ga;
  /** @type {string} */
  c = "op".replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  /** @type {(Array<string>|null)} */
  c = RegExp("[\\?&]" + c + "=([^&#]*)").exec(window.location.href);
  c = c == l ? l : c[1];
  if (c != l && "" != c) {
    /** @type {(Element|null)} */
    a = document.getElementById("opSelect");
    /** @type {number} */
    var i = 0;
    var az = a.length;
    for (; i < az; i++) {
      if (a[i].value == c) {
        /** @type {number} */
        a.selectedIndex = i;
        La(a[i]);
        break;
      }
    }
  }
  La(document.getElementById("opSelect"));
};
window.setVisibilityNotes = setVisibilityNotes;
window.setVisibilityTips = setVisibilityTips;
/**
 * @return {undefined}
 */
window.toggleWizardMode = function() {
  if (Ma) {
    Fa();
    /** @type {string} */
    document.getElementById("wizardToggleButton").innerHTML = document.getElementById("wizardToggleButton").innerHTML.replace("OFF", "ON");
    /** @type {string} */
    document.getElementById("wizardArea").style.display = "none";
    /** @type {string} */
    document.getElementById("controlArea").style.display = "block";
    /** @type {string} */
    document.getElementById("explanationArea").style.display = "block";
    Ma = o;
    r("BS Wizard", "Wizard Off");
  } else {
    Fa();
    /** @type {string} */
    document.getElementById("wizardToggleButton").innerHTML = document.getElementById("wizardToggleButton").innerHTML.replace("ON", "OFF");
    /** @type {string} */
    document.getElementById("wizardArea").style.display = "block";
    /** @type {string} */
    document.getElementById("controlArea").style.display = "none";
    Z.reset();
    /** @type {string} */
    document.getElementById("opAmountText").value = "30";
    Ma = k;
    r("BS Manual", "Wizard On");
    alert("Please click the 'Run This' button in the box below the balance sheet diagrams. Repeatedly clicking this button will walk you through all the macroeconomic operations, one at a time.");
  }
};
window.BalanceSheetWizard = Z;
/**
 * @return {undefined}
 */
window.BalanceSheetWizard_stepPrev = function() {
  Z.ic();
};
/**
 * @return {undefined}
 */
window.BalanceSheetWizard_stepReplay = function() {
  Z.jc();
};
/**
 * @return {undefined}
 */
window.BalanceSheetWizard_stepNext = function() {
  Z.hc();
};
/**
 * @param {!Object} a
 * @return {undefined}
 */
window.selectionChangedClick = function(a) {
  La(a);
  r("BS Manual", "Op Select", a.value);
};
/**
 * @return {undefined}
 */
window.doActionClick = function() {
  X();
  r("BS Manual", "Op Run", W());
};
/**
 * @return {undefined}
 */
window.replayActionClick = function() {
  Q = k;
  Y();
  Q = o;
  if ("none" == document.getElementById("errorLabel").style.display) {
    X();
  }
  r("BS Manual", "Op Replay", W());
};
/**
 * @return {undefined}
 */
window.reverseActionClick = function() {
  Y();
  Ha(o);
  r("BS Manual", "Op Reverse", W());
};
/**
 * @return {undefined}
 */
window.resetBalanceSheetsClick = function() {
  Fa();
  r("BS Manual", "Reset Diagram");
};
