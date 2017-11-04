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
*   effect :  This is the transition effect
    *  fadeIn, 
    *   slideUp, 
    *   slideDown, 
    *   slideLeft, 
    *   slideRight, 
    *   zoomIn, 
    *   zoomOut, 
    *   crossUp, 
    *   crossDown, 
    *   crossLeft, 
    *   crossRight.

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
    *   eg. i want the item to be .ad-persons (which has a defined width). The carousel uses the width of the items to make calculations of the appropriate number of items that are suppose to be in view, in any given
    screen size.
    *   Hence, set the items attribute of the carousel to ad-persons,
    *   Then place the element with the class ad-persons in the carousel

```html
 <div class="ad-carousel" items="ad-persons">
  
    <div class="ad-persons">
        {{IMG}}
        Person Name
    </div>

     <div class="ad-persons">
        {{IMG}}
        Person Name
    </div>
      <div class="ad-persons">
        {{IMG}}
        Person Name
    </div>
      <div class="ad-persons">
        {{IMG}}
        Person Name
    </div>
      <div class="ad-persons">
        {{IMG}}
        Person Name
    </div>
      <div class="ad-persons">
        {{IMG}}
        Person Name
    </div>
      <div class="ad-persons">
        {{IMG}}
        Person Name
    </div>


</div>

```


## Media Player
   
Adding airdesign's Video and Audio to your html is as simple as adding the video element itself.
*   Create a div with class '.ad-video';
*   In the element 'div.ad-video' add the video element with the 'controls' attribute.
    *   Add an Id to the video, eg myVideo.
    *   Add an attribute 'videoId' to the div.ad-video, setting the id of the video element as its value.
    *   This is useful if you want to display more than one video player on the page.
    *   By default, the id of the video should be id='video';

*   [Optional] you can add the attribut 'videoTitle' to the div element.
    *   The videoTitle attribute is used to display the title of the video when ever the user hovers on top of the video.
*   Done.!



```html

 <div class="ad-video" videoId="dress">
    <video id="dress" src="videos/dress.mp4" controls></video>
</div>

```


* Width the video title.

```html

 <div class="ad-video" videoTitle="Dress Well, Men's shirt pull-ups" videoId="dress">
    <video id="dress" src="videos/dress.mp4" controls></video>
</div>

```



* Note that the videoId attribute of the div.ad-video matches the video id. For more than one video see:

```html

 <div class="ad-video" videoTitle="My Birthday" videoId="post0777">
    <video id="post0777" src="videos/post0777.mp4" controls></video>
</div>

<div class="ad-video" videoTitle="10 Tips of the day" videoId="post2123">
    <video id="post2123" src="videos/post0777.mp4" controls></video>
</div>

```

###Features
*   Hover over the video to display controls.
    * If you dont like the slide in effects of the controls, click on the video control (not on a button) to switch to fixed mode.
    *   This way, the video-controls will fadeIn when hovered

*   Click of the video to play or pause,
*   Click on the volume button or icon to mute or set volume to the previous value before it was muted.
*   Scroll up or down on the volume button to increase or decrease volume. (at the moment it only scrolls to the max volume of 50%, working on it  to fix that issue);
*   Make Video full screen by clicking on the fullscreen button
*   Click the more/setting icon to display other info, such as 'video playlist, settings, video info etc.' [under development];

    


###For Audio
    Working on it.
* expecting...


```html

 <div class="ad-audio" audioTitle="Eagle's Wing" audioInfo="Hillsong" audioId="audio">
    <audio id="audio" src="music/hil_023233.mp4" controls></audio>
</div>

```