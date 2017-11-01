$(document).ready(function () {

    var wrapper = $('body');
    // first scan DOM for .ad-slider or .ad-slide-group


    // windowsResize
    $(window).resize(function () {
        // make responsive slider take new height
        $('.ad-slide-group[responsive]').each(function () {
            // console.log('responsive slide found');
            let height = $(this).find('.ad-slide:first').height();
            $(this).css('height', height);
        });

        $('.ad-carousel').each(function () {
            resizeCarousel($(this));
        });

    });

    // Auto Play if set to true

    class AutoSlide {
        // google = 'ama';

        start(duration, slideId, effect, slidesLength) {
            setInterval(function () {
                // autoplay = new AutoPlay;
                // console.log('autoplay meDat method called',autoplay.meDat());

                // console.log('function autoplay called on id', slideId);

                let currentSlide = $('#' + slideId).attr('currentslide');
                // console.log('With current slide of', currentSlide, slidesLength);
                // console.log('update Slide');
                for (let i = 0; i < slidesLength; i++) {
                    if (i == currentSlide) {
                        // console.log('found a match');
                        $('#' + slideId).find('.ad-slide')[i].classList.add('exit');
                        // wait to remove it
                        setTimeout(function () {
                            $('#' + slideId).find('.ad-slide')[i].classList.remove('active');
                            $('#' + slideId).find('.ad-slide')[i].classList.remove('exit');
                        }, 1050)

                        $('#' + slideId).find('.ad-slide-bullet span')[i].classList.remove('active');

                        // console.log('current found');

                        if (effect == "slideLeft" || effect == "slideRight") {
                            setTimeout(function () {

                                if ($('#' + slideId).attr('currentslide') == (slidesLength - 1)) {
                                    // console.log('on the last slide');
                                    $('#' + slideId).find('.ad-slide')[0].classList.add('active');
                                    $('#' + slideId).find('.ad-slide-bullet span')[0].classList.add('active');
                                    $('#' + slideId).attr('currentslide', 0);
                                } else {
                                    // console.log('any slide');
                                    $('#' + slideId).attr('currentslide', i + 1);
                                    $('#' + slideId).find('.ad-slide')[i + 1].classList.add('active');
                                    $('#' + slideId).find('.ad-slide-bullet span')[i + 1].classList.add('active');
                                }

                                // console.log('current slide attr is:', $('#' + slideId).attr('currentslide'));
                            }, 100);

                        } else {

                            // setTimeout(function () {

                            if ($('#' + slideId).attr('currentslide') == (slidesLength - 1)) {
                                // console.log('on the last slide');
                                $('#' + slideId).find('.ad-slide')[0].classList.add('active');
                                $('#' + slideId).find('.ad-slide-bullet span')[0].classList.add('active');
                                $('#' + slideId).attr('currentslide', 0);
                            } else {
                                // console.log('any slide');
                                $('#' + slideId).attr('currentslide', i + 1);
                                $('#' + slideId).find('.ad-slide')[i + 1].classList.add('active');
                                $('#' + slideId).find('.ad-slide-bullet span')[i + 1].classList.add('active');
                            }

                            // console.log('current slide attr is:', $('#' + slideId).attr('currentslide'));
                            // }, 300)
                        }


                        // console.log('end loop');
                        // end the loop
                        return true;
                    }
                }

            }, duration);
        }
        slide(slideId, effect, slidesLength) {

            // autoplay = new AutoPlay;
            // console.log('autoplay meDat method called',autoplay.meDat());

            console.log('function autopplay called', $('#' + slideId).attr('currentslide'));

            let currentSlide = $('#' + slideId).attr('currentslide');
            // console.log('update Slide');
            for (let i = 0; i < slidesLength; i++) {
                if (i == currentSlide) {
                    console.log($('#' + slideId).find('.ad-slide'));
                    $('#' + slideId).find('.ad-slide')[i].classList.add('exit');
                    // wait to remove it
                    setTimeout(function () {
                        $('#' + slideId).find('.ad-slide')[i].classList.remove('active');
                        $('#' + slideId).find('.ad-slide')[i].classList.remove('exit');
                    }, 1050)

                    $('#' + slideId).find('.ad-slide-bullet span')[i].classList.remove('active');

                    // console.log('current found');
                    // setTimeout(function () {

                    if ($this.attr('currentslide') == (slidesLength - 1)) {
                        $('#' + slideId).find('.ad-slide')[0].addClass('active');
                        $('#' + slideId).find('.ad-slide-bullet span')[0].classList.add('active');
                        $('#' + slideId).attr('currentslide', 0);
                    } else {
                        $('#' + slideId).attr('currentslide', i + 1);
                        $('#' + slideId).find('.ad-slide')[i + 1].classList.add('active');
                        $('#' + slideId).find('.ad-slide-bullet span')[i + 1].classList.add('active');
                    }

                    console.log('current slide attr is:', $('#' + slideId).attr('currentslide'));
                    // }, 300)


                    // console.log('end loop');
                    // end the loop
                    return true;
                }
            }

        }
    }


    function scanDOM4media() {

        // scan for ad-slide-group
        if ($('.ad-slide-group').length) {
            console.log('slider found');
            constructSlider();

        }

        if ($('.ad-carousel').length) {
            console.log('carousel foound');
            constructCarousel();
        }



    }

    scanDOM4media();



    // Make Construct

    function constructSlider() {
        $('.ad-slide-group').each(function (id) {
            $this = $(this);

            // fix height if responsive

            if ($this[0].hasAttribute('responsive')) {
                // console.log('responsive');
                let height = $this.find('.ad-slide:first').height();

                // console.log('height is',height);
                $this.css('height', height);
            }
            // setIds  for them
            slideId = "slide_" + id;
            console.log('slide id of:', slideId);
            $this.attr('id', slideId);

            // Set Effect
            effect = $this[0].hasAttribute('effect') ? $this.attr('effect') : 'fade';

            //Set autoplay or manual
            autoplay = $this[0].hasAttribute('manual') ? false : true;

            // Set Duration
            if ($this[0].hasAttribute('duration')) {
                duration = $this.attr('duration') * 1000;
            } else {
                duration = 5000;
            }


            // Set Effect


            // Create Bullets
            if ($this[0].hasAttribute('showBullets')) {
                showBullets = $this.attr('showBullets') == 'false' ? false : true;
            } else {
                showBullets = true;
            }


            // bullet building/construct needs the slidesLength for indexing
            var slides = $this.find('.ad-slide');
            var slidesLength = slides.length;

            if (showBullets && $this.find('.ad-slide-bullet').length == 0) {
                // console.log('construct bullet');
                openBullet = '<div class="ad-slide-bullet">';
                closeBullet = '</div>';
                bullets = '';
                // console.log(slidesLength);
                for (let i = 0; i < slidesLength; i++) {
                    bullets = bullets + '<span index="' + i + '"></span>';
                    // console.log('yo');
                }
                // console.log(bullets);
                $this.append(openBullet + bullets + closeBullet);
            }


            // Create Nav
            if ($this[0].hasAttribute('showNav')) {

                showNav = $this.attr('showNav') == 'false' ? false : true;
            } else {
                showNav = true;
            }

            if (showNav && $this.find('.ad-slide-previous').length == 0) {

                prevNav = '<div  class="ad-slide-previous "><button class="ad-btn ad-lg ad-flat ad-round ad-icon no-margin"><i class="fa fa-angle-left "></i></button></div>';
                nextNav = '<div  class="ad-slide-next "><button class="ad-btn ad-lg ad-flat ad-round ad-icon no-margin" style="margin-left:-8px;"><i class="fa fa-angle-right "></i></button></div>';
                $this.append(prevNav + nextNav);

            }



            var slideBullets = $this.find('.ad-slide-bullet span');

            var slide1 = $this.find('.ad-slide:first');

            // clear any active class predefined by user
            slides.removeClass('active');
            slideBullets.removeClass('active');

            slide1.addClass('active');
            slideBullets[0].classList.add('active');
            currentSlide = 0;
            $this.attr('currentslide', 0);

            if (autoplay) {
                autoSlide = new AutoSlide;
                autoSlide.start(duration, slideId, effect, slidesLength);
            }

        });
    }


    // then Listen for Event

    // When bullet is clicked
    wrapper.on('click', '.ad-slide-bullet span', function (e) {
        var parent = $(this).parents('.ad-slide-group');
        var slideIndex = $(this).attr('index');
        // console.log('index is', slideIndex);
        var slides = parent.find('.ad-slide');
        // console.log(parent);
        currentSlide = parent.attr('currentslide');

        // play exit animation
        slides[currentSlide].classList.add('exit');
        // wait to remove them
        setTimeout(function () {
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.remove('exit');
        }, 1050)


        slides[slideIndex].classList.add('active');
        parent.find('.ad-slide-bullet span').removeClass('active');
        $(this).addClass('active');

        parent.attr('currentslide', slideIndex);
    });




    // When previous BTN is clicked
    wrapper.on('click', '.ad-slide-previous', function (e) {
        var parent = $(this).parents('.ad-slide-group');
        currentSlide = parent.attr('currentslide');
        var slides = parent.find('.ad-slide');

        // play the exit animation
        slides[currentSlide].classList.add('exit');
        // wait to remove it
        setTimeout(function () {
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.remove('exit');
        }, 1050)


        var slideBullets = parent.find('.ad-slide-bullet span');
        slideBullets.removeClass('active');

        if (currentSlide == 0) {
            slides[slides.length - 1].classList.add('active');
            slideBullets[slides.length - 1].classList.add('active');

            parent.attr('currentslide', slides.length - 1);

        } else {

            slides[currentSlide - 1].classList.add('active');
            slideBullets[currentSlide - 1].classList.add('active');
            parent.attr('currentslide', currentSlide - 1);
        }

    });


    // When next BTN is clicked
    wrapper.on('click', '.ad-slide-next', function (e) {
        var parent = $(this).parents('.ad-slide-group');
        currentSlide = parent.attr('currentslide');
        var slides = parent.find('.ad-slide');
        // play exit animation
        slides[currentSlide].classList.add('exit');
        // wait to remove them
        setTimeout(function () {
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.remove('exit');
        }, 1050)


        var slideBullets = parent.find('.ad-slide-bullet span');
        slideBullets.removeClass('active');

        // console.log('last is', slides.length - 1);
        if (currentSlide == (slides.length - 1)) {
            slides[0].classList.add('active');
            slideBullets[0].classList.add('active');

            parent.attr('currentslide', 0);

        } else {
            let $next = (1 * currentSlide) + 1;
            slides[$next].classList.add('active');
            slideBullets[$next].classList.add('active');
            parent.attr('currentslide', $next);
        }

    });





    function constructCarousel() {
        openConstruct = ' <div class="carousel-container"><div class="carousel-overflow">';
        closeConstruct = '</div></div>';

        prevNav = '<div  class="ad-carousel-previous hidden"><button class="ad-btn ad-md ad-flat ad-round ad-icon"><i class="fa fa-angle-left "></i></button></div>';
        nextNav = '<div  class="ad-carousel-next "><button class="ad-btn ad-md ad-flat ad-round ad-icon"><i class="fa fa-angle-right"></i></button></div>';

        $('.ad-carousel').each(function () {
            // $(this).addClass('is-loading');
            content = $(this).html();
            $(this).html(openConstruct + content + closeConstruct);
            if ($(this).find('.ad-carousel-previous').length == 0) {
                console.log('show navBTNS');
                $(this).append(prevNav + nextNav);
            }
            resizeCarousel($(this));


            // $(this).removeClass('is-loading');

        });
    }


    function resizeCarousel(carousel) {

        $this = carousel.find('.carousel-container');
        if (carousel[0].hasAttribute('items')) {

            item = $this.find('.' + carousel.attr('items') + '');
        } else {
            item = $this.find('.ad-carousel-item');
        }
        $this.height(item.height() + 5);
        console.log('items is sanakjcbndjcscd', carousel.attr('items'));
        container = $this.find('.carousel-overflow');


        // Calculate the number of items to show
        numberOfItemstoShow = $this.width() / item.width();
        visibleItems = Math.round(numberOfItemstoShow) * item.width() > $this.width() ? Math.round(numberOfItemstoShow) - 1 : Math.round(numberOfItemstoShow);
        console.log('number to shopwwwwwwwwwwwww', visibleItems);

        // Calculate the marign-right of the items, base on the items to show and the ad-carousel width
        leftSpace = $this.width() - (visibleItems * item.width());
        margin = leftSpace / visibleItems
        console.log('space, margin isssssssss', leftSpace, margin, 2.5.toFixed());

        item.css('margin', '0 ' + (margin / 2) + 'px');
        console.log((margin) + 'px');

        containerWidth = (item.width() * item.length) + item.width() * margin;
        container.css('width', containerWidth);
        console.log('container withggggggggggggg', containerWidth, $this.width());


        // create emoveby
        moveBy = item.width() + margin;
        consolidate = (margin * item.length) / 100 + ($this.width() * .002);
        carousel.attr('moveby', Math.round(moveBy + consolidate));


        // create hidden carousel for navigation
        if (carousel[0].hasAttribute('caurosel_hidden-items')) {
            lHiddenItems = carousel.attr('caurosel_hidden-items');
        } else {
            lHiddenItems = 0
        }

        carousel.attr('caurosel_hidden-items', lHiddenItems);
        carousel.attr('caurosel_shown-items', visibleItems);
        carousel.attr('caurosel_total-items', item.length);
        //Check if is-loaging is on, then remove it,


    }


    // When CAROUSEL previous BTN is clicked
    wrapper.on('click', '.ad-carousel-previous', function () {
        carouselNav($(this), 1);

    });


    // for touch event, lets wait for hammer.js

    wrapper.on('click', '.ad-carousel-next', function () {
        carouselNav($(this), -1);

    });

    function carouselNav(clicked, factor) {
        var parent = clicked.parents('.ad-carousel');
        // if (parent[0].hasAttribute('items')) {

        //     item = parent.find('.' + carousel.attr('items') + ':first');
        // } else {
        //     item = parent.find('.ad-carousel-item:first');
        // }
        // margin = 2 * item.attr('style').split(' ')[2].replace('px;', '');
        // moveBy = item.width() + margin;
        console.log(parent.attr('moveby'));
        // math them out. get hidden, then see if the visible items plus hidden is total

        var lHiddenItems = parseInt(parent.attr('caurosel_hidden-items'));
        var visibleItems = parseInt(parent.attr('caurosel_shown-items'));
        var totalItems = parseInt(parent.attr('caurosel_total-items'));

        var moveFactor = -1;
        var moveby = parseInt(parent.attr('moveby')) * moveFactor;


        caltems = lHiddenItems + visibleItems;


        if ((factor == -1) && (caltems == totalItems)) {
            console.log('maximum reached, so dont move again, or hide it. Hidden, Visible, Total', lHiddenItems, visibleItems, totalItems);
        } else {

            if (factor === -1) {

                calMove = (lHiddenItems + 1) * moveby;
                updateHidden = lHiddenItems + 1;
            } else {
                //check if it not zero zero
                if (lHiddenItems) {
                    calMove = (lHiddenItems - 1) * moveby;
                    updateHidden = lHiddenItems - 1;
                } else {
                    //check if its zero
                    console.log('nothing to move previous to');
                    calMove = 0;
                    updateHidden = lHiddenItems;
                }
            }

            parent.find('.carousel-overflow').animate({
                'margin-left': calMove
            }, 300, 'linear');

            console.log('Hidden, Visible, Plus, Total', lHiddenItems, visibleItems, caltems, totalItems);
            //update the hiddenItemsI
            parent.attr('caurosel_hidden-items', updateHidden);

            // now hide the prev. btn if its full
            if (updateHidden + visibleItems == totalItems) {
                parent.find('.ad-carousel-next').addClass('hidden');
                parent.find('.ad-carousel-previous').removeClass('hidden');

            } else {
                parent.find('.ad-carousel-next').removeClass('hidden');
                parent.find('.ad-carousel-previous').removeClass('hidden');


            }

            if (updateHidden == 0) {

                parent.find('.ad-carousel-next').removeClass('hidden');
                parent.find('.ad-carousel-previous').addClass('hidden');

            }
        }

    }

});