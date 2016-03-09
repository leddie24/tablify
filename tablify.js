(function($) {
   $.fn.tablify = function() {
      var $this = $(this);
      var tabs = $('<ul></ul>').addClass('tabs');
      $this.each(function(idx, val) {
         tabs.append('<li class="test">' + $(val).attr('data-tab-title') + '</li>');
      });

      // Append tabs before first of class
      $('.' + $(this)[0].className).first().before(tabs);

      // Apply on click handler to show and remove tab content
      $('.tabs li').on('click', function(e) {
         if (!$(e.target).hasClass('selected')) {
            var idx = $(this).index();
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            $($this.selector).hide();
            $($this.selector).eq(idx).show();
         }
      });

      // Click first tab to hide others
      $('.tabs li').eq(0).click();
      return this;
   }
}(jQuery));