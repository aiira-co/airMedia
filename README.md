# airMedia
* Code Beautiful
* For full documentation, visit http://airdesign.co.nf

## DEPENDENCY
The airMedia library is dependent on the airDesign CSS framework. So please make sure you already have it installed.
Jquery 3.2+
## GETTING STARTED
Dowload the library from this page. it comes bundled in a zip file containing, a css folder, js folder and a fonts folder. The css folder contains the air.media.css . The js folder contains air.media.js which is used for events, to construct the media components and enhances appearance in the libraries. 

## INSTALLATION 
Include in your head tag a link referecing to air.media.css file location , then also include the javascript file. air.media.js is written in jQuery so the Jquery library is required( version 3 and above). 

```html
<link rel="stylesheet" type="text/css" href="css/air.medai.css"/>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/air.media.js"></script>

```

* AirMedia is a web library for user interface and user experience design. We make use of CSS properties and JavaScript to bring the experience to your browser. Our library is absolutely free to use for both commercial and private projects.

## Content Slider

```html
 <div class="ad-slide-group" responsive duration="8" effect="zoomIn">

    <div class="ad-slide ">
      <img src="images/slides/angry.png" alt="" class="img-responsive">
    </div>
    <div class="ad-slide ">
      <img src="images/slides/connect.png" alt="" class="img-responsive">
    </div>
    <div class="ad-slide ">
      <p>
        <img src="images/slides/spotify.png" alt="" class="img-responsive">
    </div>
    <div class="ad-slide ">
      <img src="images/slides/foryou.png" alt="" class="img-responsive">
    </div>

  </div>

```


*  .ad-slide-group is the parent class of the content slider. each slide will have the class ad-slide;
*  adding the responsive attribute to the slider will make the slider responsive when the screen size is change. the default the height of the slider is the height of the first slide
*   duration is used to set the time it takes a slide to stay on view. you can ommit it and the default is 5 seconds
*   effect : 
    *  fadeIn, slideUp, slideDown, slideLeft, slideRight, zoomIn, zoomOut, crossUp, crossDown, crossLeft, crossRight.
All the effects are written in css and can be extended with the scss files. if you have any transition effect in mind, contact us.
*   Top stop autoplay of the slider, add the attribute 'manual' to the .ad-slide-group. This way, the slide will change only if the bullets or navigation buttons are clicked.
*showNav is another attribute that is set to true by default. to ommit the navigation buttons (prev and next buttons), set the attrubute showNav to false;


## Carousel
```html
 <div class="ad-carousel">
  
    <div class="ad-carousel-item">
        item 1
    </div>

    <div class="ad-carousel-item">
        item 2
    </div>

    <div class="ad-carousel-item">
        item 3
    </div>

    <div class="ad-carousel-item">
        item 4
    </div>

    <div class="ad-carousel-item">
        item 5
    </div>

</div>

```

* Put your items into the .ad-caurosel-item, or better, set the items attribute to the class name of the items you want the caurosel to move.


## Media Player

Working on it....