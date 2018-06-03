(function () {
'use strict';

var katexMath = (function () {
    var maths = document.querySelectorAll('.arithmatex'),
        block_env = /\\begin\{([a-z]+\*?)\}.+?\\end\{\1\}/,
        tex;

    for (var i = 0; i < maths.length; i++) {
      tex = maths[i].textContent || maths[i].innerText;
      if ((tex.startsWith('\\(') && tex.endsWith('\\)')) ||
          (tex.startsWith('$') && tex.endsWith('$'))) {
        katex.render(tex.slice(2, -2), maths[i], {'displayMode': false});
      } else if ((tex.startsWith('\\[') && tex.endsWith('\\]')) ||
                 (tex.startsWith('$$') && tex.endsWith('$$')) ||
                 block_env.test(tex)) {
        katex.render(tex.slice(2, -2), maths[i], {'displayMode': true});
      }
    }
});

(function () {
  var onReady = function onReady(fn) {
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      document.attachEvent("onreadystatechange", function () {
        if (document.readyState === "interactive") {
          fn();
        }
      });
    }
  };

  onReady(function () {
    if (typeof katex !== "undefined") {
      katexMath();
    }
  });
})();

}());
