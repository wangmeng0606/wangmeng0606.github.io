/* Render chemical formulas typed as plain text (CO2, CaSO4, ...) with subscripts.
   Works on text nodes only, so URLs, permalinks and bibliographic source text are untouched. */
(function () {
  var FORMULA = /\b(CO2|CaSO4|CaCO3|H2O|CH4|SO4)(?![0-9A-Za-z])/g;
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1, PRE: 1, SUB: 1, SUP: 1 };

  function subscript(text) {
    var frag = document.createDocumentFragment();
    var last = 0;
    var m;
    FORMULA.lastIndex = 0;
    while ((m = FORMULA.exec(text)) !== null) {
      var formula = m[1];
      var split = formula.search(/[0-9]/);
      frag.appendChild(document.createTextNode(text.slice(last, m.index) + formula.slice(0, split)));
      var sub = document.createElement('sub');
      sub.textContent = formula.slice(split);
      frag.appendChild(sub);
      last = m.index + formula.length;
    }
    frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }

  function walk(node) {
    for (var child = node.firstChild; child; ) {
      var next = child.nextSibling;
      if (child.nodeType === 3) {
        FORMULA.lastIndex = 0;
        if (FORMULA.test(child.nodeValue)) {
          node.replaceChild(subscript(child.nodeValue), child);
        }
      } else if (child.nodeType === 1 && !SKIP[child.tagName]) {
        walk(child);
      }
      child = next;
    }
  }

  function run() {
    walk(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
