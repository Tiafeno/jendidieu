(function ($) {
  $(document).ready(function () {
    var windowHeight = $(window).innerHeight();
    var windowWidth = 0;
    var container = $("main#container, #scroll-container");
    var group = $('.group-container');
    $("html").mousewheel(function (event, delta) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
    });

    /** set exactelly body width */
    var paragraphs = group.find('.paragraphs-items');
    paragraphs.each(function(index, element) {
      var currentWidth = $( this ).width();
      windowWidth += parseFloat(currentWidth);
      posWindow(); 
    })
    positionHeight()
      .then(function successCallback(height) {
        container.css({height: height + "px", visibility: 'visible'});
      });

    $(window).resize(function() {
      positionHeight()
      .then(function successCallback(height) {
        container.css({height: height + "px", visibility: 'visible'});
      });
    });

    function posWindow() {
      group.width(windowWidth);
    }

    function positionHeight() {
      return new Promise(function(resolve, reject) {
        container.css({height : parseFloat(windowHeight), visibility: 'hidden'});
        var currentHeight = $(window).innerHeight();
        if (parseFloat(windowHeight) > parseFloat(currentHeight)) {
          resolve(parseFloat(currentHeight));
        } else resolve( windowHeight );
      })
    }
    
  });
})(jQuery)