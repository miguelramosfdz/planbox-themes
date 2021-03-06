$(function(){
  'use strict';

  var version;
  if (Planbox.Data.project.slug == 'macon-action-plan')  version = 1;
  if (Planbox.Data.project.slug == 'macon-action-plan-dev')  version = 1;

  // Init the image gallery interactivity
  $(document).on('click', '.macon-action-thumb-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parents('.macon-action-image-gallery'),
        caption = $this.attr('data-caption'),
        imageUrl = $this.attr('data-url');

    $context.find('.macon-action-thumb-link').removeClass('active prev next');
    $this.addClass('active');
    $this.prev('.macon-action-thumb-link').addClass('prev');
    $this.next('.macon-action-thumb-link').addClass('next');

    $context.find('.macon-action-image').attr('src', imageUrl);
    $context.find('.macon-action-caption').html(caption);
  });

  // Init the get involved form toggles
  $(document).on('click', '.macon-action-toggle-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parent('.panel');

    $context.find('.macon-action-toggle-target').removeClass('hide');
    $this.addClass('hide');

  });

  // Inject the tagline and action buttons into the project header
  var $header = $('.project-header'),
      headermarkup =
        // '<div class="columns large-12">' +
        // '  <h1 class="project-tagline">An intriguing tag line about the project.</h1>' +
        // '</div>' +
        '<div class="columns large-6">' +
        '  <a href="#section-get-involved" class="button large expand radius">GET INVOLVED</a>' +
        '</div>' +
        '<div class="columns large-6">' +
        '  <a href="#section-urban-core" class="button large expand radius">LEARN MORE</a>' +
        '</div>';

  if (version === 1) {
    $header.append(headermarkup);
  }

  // Inject social links into the header
  var $header = $('.project-header'),
      socialbuttons = 
        '<ul class="social-media-list right">' +
        '  <li><a class="" href="https://www.facebook.com/pages/Macon-Action-Plan/264633970391707" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-facebook.gif"></a></li>' +
        '  <li><a class="" href="http://instagram.com/MaconActionPlan" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-instagram.gif"></a></li>' +
        '  <li><a class="" href="http://twitter.com/MaconActionPlan" target="_blank"><img src="//openplans.github.io/planbox-themes/grandrapids-forward/images/social-twitter.gif"></a></li>' +
        '</ul>';

  if (version === 1) {
    $header.prepend(socialbuttons);
  }

});
