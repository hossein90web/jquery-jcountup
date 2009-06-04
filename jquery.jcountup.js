/**
 * jQuery jCountUp Plugin
 *
 * version: 0.1
 * author: Anton Lindqvist <anton@qvister.se>
 * link: http://qvister.se
 */
(function($) {
$.fn.jCountUp = function(args) {
  var tmp;
  var i = 0;
  var c = 0;
  var defaults = { val: 10, speed: 50, up: true, callback: function() {} }; // default arguments.
  var settings = $.extend(defaults, args); // merge defaults with submitted arguments.
  var update = function(el, c) { // update the value of the element.
    tmp = parseInt($(el).text(), 10);

    if (settings.up) { // count up.
      tmp++;
      $(el).text(tmp);
    } else { // count down.
      tmp--;
      $(el).text(tmp);
    }

    if (settings.val == c) {
      settings.callback.call(el); // execute callback function.
    }
  };

  for (; i < settings.val; i++) {
    $(this).fadeTo(settings.speed, 1, function() { // ugly sleep hack.
      c++;
      update(this, c);
    });
  }
};
})(jQuery);