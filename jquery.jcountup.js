/**
 * jQuery jCountUp Plugin
 *
 * version: 0.1
 * author: Anton Lindqvist <anton@qvister.se>
 * link: http://qvister.se
 */
(function($) {
$.fn.jCountUp = function(options) {
  var i, c, tmp, defaults, update;
  i = 0;
  c = 0;
  defaults = { val: 10, speed: 50, up: true, callback: function() {} }; // default arguments.
  options = $.extend(defaults, options); // merge defaults with submitted arguments.
  update = function(el, c) { // update the value of the element.
    tmp = parseInt($(el).text(), 10);
    
    if (options.up) { // count up.
      tmp += 1;
      $(el).text(tmp);
    } else { // count down.
      tmp -= 1;
      $(el).text(tmp);
    }

    if (options.val === c) {
      options.callback.call(el); // execute callback function.
    }
  };

  for (; i < options.val; i += 1) {
    $(this).fadeTo(options.speed, 1, function() { // ugly sleep hack.
      c += 1;
      update(this, c);
    });
  }
};
})(jQuery);