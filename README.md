# airMedia
*   Code Beautiful
*   For full documentation, visit http://airdesign.co.nf
*   For Demo, go here http://airdesign.co.nf/air_media

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
*   To stop autoplay of the slider, add the attribute 'manual' to the .ad-slide-group. This way, the slide will change only if the bullets or navigation buttons are clicked.
*   showNav is another attribute that is set to true by default. to ommit the navigation buttons (prev and next buttons), set the attrubute showNav to false;
*   roundbullet to change the bullet rounded design. Its best suite for multiple slides to afford the spacing


*   There are  cases where the slider will flicker or wait for some seconds before the contents appear, such occurances are not good for user experience. Instead of letting the user see that, the best solution is to add a waiting animation.
    *   To do that, add a div with the class .ad-spinner.
    *   The spinner class will show for 3ms or until the content of the slider, carousel or video is fully loaded.
    *   This also solves the case of constructing 'air media's element which are called via AJAX.
    *   airDesign also has a class called 'is-loading' which can be applied to the media elements, when the loading is done, airMedia automatically removes  the class.


```html
 <div class="ad-slide-group" effect="zoomIn">
     <div class="ad-spinner "></div>

    <div class="ad-slide ">
        ...
    </div>
    <div class="ad-slide ">
        ...
    </div>
    <div class="ad-slide ">
      ...
    </div>
    <div class="ad-slide ">
      ...
    </div>

  </div>

```

* Using is-loading class


```html
 <div class="ad-slide-group is-loading" effect="zoomIn">

    <div class="ad-slide ">
        ...
    </div>
    <div class="ad-slide ">
        ...
    </div>
    <div class="ad-slide ">
      ...
    </div>
    <div class="ad-slide ">
      ...
    </div>

  </div>

```

*   NOTE: The loading div can be applied to all airmedia's components. the 'background-color' property of the ad-spinner div can be change to match the template of your design.
    *   From airDesign's CSS framework, the class:
    *   bg-dark applies a dark background -- default for the ad-spinner class
    *   bg-white applies a white background
    *   bg-pink applies a pink background
    *   bg-blue applies a blue background
    *   bg-prim applies a primary color background & etc.


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
    *   You can also add the flow attribute if you want the carousel items to mave no margins.

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

*   Without any videoId attribute. make sure to set the id of the video element to 'video'. use this if its the only video on the webpage

```html

 <div class="ad-video">
    <video id="video" src="videos/dress.mp4" controls></video>
</div>

```
*   With  videoId attribute. Note: the id of the video element is the same as the value of the videoId attribute. This way, your webpage can contain more than on video.

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
    <video id="post2123" src="videos/post2123.mp4" controls></video>
</div>

```

*   Change color theme of the video player from green(the default) to pink, yellow, blue, prim. just add the theme class to the .ad-video like so:

```html

 <div class="ad-video theme-pink">
    <video id="video" src="videos/movie.mp4" controls></video>
</div>

```
*   'theme-pink' for pink theme
*   'theme-blue' for blue theme
*   'theme-yellow' for yellow theme
*   'theme-prim' for prim theme

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
*   Create a div with class '.ad-audio';
*   In the element 'div.ad-audio' add the audio element with the 'controls' attribute.
    *   Add an Id to the audio, eg myVideo.
    *   Add an attribute 'audioId' to the div.ad-audio, setting the id of the audio element as its value.
    *   This is useful if you want to display more than one audio player on the page.
    *   By default, the id of the audio should be id='audio';

*   [Optional] you can add the attribut 'audioTitle' to the div element.
    *   The audioTitle attribute is used to display the title of the audio on the player.
*   Done.!

*   Without any audioId attribute. make sure to set the id of the audio element to 'audio'. use this if its the only audio on the webpage

```html

 <div class="ad-audio">
    <audio id="audio" src="music/smith.mp3" controls></audio>
</div>

```
*   With  audioId attribute. Note: the id of the audio element is the same as the value of the audioId attribute. This way, your webpage can contain more than on audio.

```html

 <div class="ad-audio" audioId="smith">
    <audio id="smith" src="music/smith.mp3" controls></audio>
</div>

```


* With the audio title.

```html

 <div class="ad-audio" audioTitle="Desperate For You" audioId="smith">
    <audio id="smith" src="music/smith.mp4" controls></audio>
</div>

```

* With the artist atrribute.

```html

 <div class="ad-audio" artist="Micheal W. Smith" audioTitle="Desperate For You" audioId="smith">
    <audio id="smith" src="music/smith.mp4" controls></audio>
</div>

```
* With the 'poster' atrribute; this is used as the album art for the player

```html

 <div class="ad-audio" poster="images/art.jpg" artist="Micheal W. Smith" audioTitle="Desperate For You" audioId="smith">
    <audio id="smith" src="music/smith.mp4" controls></audio>
</div>

```


* Note that the audioId attribute of the div.ad-audio matches the audio id. For more than one audio see:

```html

 <div class="ad-audio" audioTitle="My Birthday" audioId="post0777">
    <audio id="post0777" src="music/post0777.mp4" controls></audio>
</div>

<div class="ad-audio" audioTitle="10 Tips of the day" audioId="post2123">
    <audio id="post2123" src="music/post2123.mp4" controls></audio>
</div>

```

*   Change color theme of the audio player from green(the default) to pink, yellow, blue, prim. just add the theme class to the .ad-audio like so:

```html

 <div class="ad-audio theme-pink">
    <audio id="audio" src="music/song.mp3" controls></audio>
</div>

```
*   'theme-pink' for pink theme
*   'theme-blue' for blue theme
*   'theme-yellow' for yellow theme
*   'theme-prim' for prim theme


#NOTE
The slider effects and themes for the media players are all written in css, hence they can easily be extended. eg: To add your own theme for the video player:
*   Open the 'scss' folder in the the 'dist' folder
*   In the components folder, open '_video.scss' file.
*   At the latter part of the file you will find .theme-[color] classes there.
*   Just duplicate on of the theme class and change it to your desired color.
*   Note that its written in SCSS so you will need to compile it to CSS
