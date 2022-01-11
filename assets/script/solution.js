jQuery(document).ready(function($){
	//store DOM elements
	var imageWrapper = $('.cd-images-list'),
		imagesList = imageWrapper.children('li'),
		contentWrapper = $('.cd-content-block'),
		contentList = contentWrapper.children('ul').eq(0).children('li'),
		blockNavigation = $('.block-navigation'),
		blockNavigationNext = blockNavigation.find('.cd-next'),
		blockNavigationPrev = blockNavigation.find('.cd-prev'),
		//used to check if the animation is running
		animating = false;

	//on mobile - open a single project content when selecting a project image
	imageWrapper.on('click', 'a', function(event){
		event.preventDefault();
		var device = MQ();
		
		(device == 'mobile') && updateBlock(imagesList.index($(this).parent('li')), 'mobile');
	});

	//on mobile - close visible project when clicking the .cd-close btn
	contentWrapper.on('click', '.cd-close', function(){
		var closeBtn = $(this);
		if( !animating ) {
			animating = true;
			
			closeBtn.removeClass('is-scaled-up').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				contentWrapper.removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					animating = false;
				});

				$('.cd-image-block').removeClass('content-block-is-visible');
				closeBtn.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
		}
	});

	//on desktop - update visible project when clicking the .block-navigation
	blockNavigation.on('click', 'button', function(){
		var direction = $(this),
			indexVisibleblock = imagesList.index(imageWrapper.children('li.is-selected'));

		if( !direction.hasClass('inactive') ) {
			var index = ( direction.hasClass('cd-next') ) ? (indexVisibleblock + 1) : (indexVisibleblock - 1); 
			updateBlock(index);
		}
	});

	//on desktop - update visible project on keydown
	$(document).on('keydown', function(event){
		var device = MQ();
		if( event.which=='39' && !blockNavigationNext.hasClass('inactive') && device == 'desktop') {
			//go to next project
			updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) + 1);
		} else if( event.which=='37' && !blockNavigationPrev.hasClass('inactive') && device == 'desktop' ) {
			//go to previous project
			updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) - 1);
		}
	});

	function updateBlock(n, device) {
		if( !animating) {
			animating = true;
			var imageItem = imagesList.eq(n),
				contentItem = contentList.eq(n);
			
			classUpdate($([imageItem, contentItem]));
			
			if( device == 'mobile') {
				contentItem.scrollTop(0);
				$('.cd-image-block').addClass('content-block-is-visible');
				contentWrapper.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					contentWrapper.find('.cd-close').addClass('is-scaled-up');
					animating = false;
				});
			} else {
				contentList.addClass('overflow-hidden');
				contentItem.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					contentItem.siblings().scrollTop(0);
					contentList.removeClass('overflow-hidden');
					animating = false;
				});
			}

			//if browser doesn't support transition
			if( $('.no-csstransitions').length > 0 ) animating = false;

			updateBlockNavigation(n);
		}
	}

	function classUpdate(items) {
		items.each(function(){
			var item = $(this);
			item.addClass('is-selected').removeClass('move-left').siblings().removeClass('is-selected').end().prevAll().addClass('move-left').end().nextAll().removeClass('move-left');
		});
	}

	function updateBlockNavigation(n) {
		( n == 0 ) ? blockNavigationPrev.addClass('inactive') : blockNavigationPrev.removeClass('inactive');
		( n + 1 >= imagesList.length ) ? blockNavigationNext.addClass('inactive') : blockNavigationNext.removeClass('inactive');
	}

	function MQ() {
		return window.getComputedStyle(imageWrapper.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
	}

});



$('.block-navigation .cd-next').on('click', function() {
	if($('.is-selected a h2').html() == 'Support / Helpdesk Model') {
		$('.cd-prev h6').hide().html('<i class="far fa-long-arrow-left"></i> &nbsp; ' + $('.cd-images-list li:nth-of-type(1) a h2').html()).show('slide', {direction: 'right'}, 500);
		$('.cd-next h6').hide().html($('.cd-images-list li:nth-of-type(3) a h2').html() + ' &nbsp; <i class="far fa-long-arrow-right"></i>').show('slide', {direction: 'right'}, 500);
	}
	if($('.is-selected a h2').html() == 'Implementation / Rollout Model') {
		$('.cd-prev h6').hide().html('<i class="far fa-long-arrow-left"></i> &nbsp; ' + $('.cd-images-list li:nth-of-type(2) a h2').html()).show('slide', {direction: 'right'}, 500);
		$('.cd-next h6').hide().html('').show('slide', {direction: 'right'}, 500);
	}
})

$('.block-navigation .cd-prev').on('click', function() {
	if($('.is-selected a h2').html() == 'Result') {
		$('.cd-prev h6').hide().html('<i class="far fa-long-arrow-left"></i> &nbsp; ' + $('.cd-images-list li:nth-of-type(1) a h2').html()).show('slide', {direction: 'left'}, 500);
		$('.cd-next h6').hide().html($('.cd-images-list li:nth-of-type(3) a h2').html() + ' &nbsp; <i class="far fa-long-arrow-right"></i>').show('slide', {direction: 'left'}, 500);
	}
	if($('.is-selected a h2').html() == 'Implementation / Rollout Model') {
		$('.cd-prev h6').hide().html('').show('slide', {direction: 'left'}, 500);
		$('.cd-next h6').hide().html($('.cd-images-list li:nth-of-type(2) a h2').html() + ' &nbsp; <i class="far fa-long-arrow-right"></i>').show('slide', {direction: 'left'}, 500);
	}
})


$(".models #stay-in-place-1").on("click", function() {
	$(".models #move-in-to-place-2").css("right", "0");
})
$(".models #stay-in-place-2").on("click", function() {
	$(".models #move-in-to-place-1").css("left", "0");
})
$(".close-model").on("click", function() {
	$(".models #move-in-to-place-2").css("right", "-100%");
	$(".models #move-in-to-place-1").css("left", "-100%");
})