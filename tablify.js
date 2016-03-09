(function($) {
   $.fn.tablify = function(options) {
      // Default options 
      var defaults = {
        mouseover: false
      };

      var $this = $(this);
      var opts = $.extend( {}, defaults, options );

      var showTab = function(e) {
         if (!$(e.target).hasClass('selected')) {
            var idx = $(this).index();
            $('.selected').removeClass('selected');
            $('.tab-active').removeClass('tab-active');
            $(this).addClass('selected')
            $($this.selector).not(':eq(' + idx + ')').hide();
            $($this.selector).eq(idx).show();
         }
      }

      var tabs = $('<ul></ul>').addClass('tabs');
      $this.each(function(idx, val) {
         tabs.append('<li class="test">' + $(val).attr('data-tab-title') + '</li>');
      });

      // Append tabs before first of class
      $($this.selector).first().before(tabs);
      $($this.selector).parent().addClass('tab-container');

      // Apply on handler to show and hide tab content
      if (opts.mouseover) {
         $('.tabs li').on('mouseover', showTab);
      } else {
         $('.tabs li').on('click', showTab);
      }

      // Click first tab to hide others
      $($(this).selector).hide();
      $($(this).selector).eq(0).show();
      $('.tabs li').eq(0).trigger('click');
      return this;
   }
}(jQuery));