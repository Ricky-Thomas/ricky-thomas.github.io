---
layout:     post
title:      "Absolutely Fixated on Relative Positioning"
date:       2014-09-30 12:00:00
author:     "Ricky Thomas"
header-img: "img/post-bg-03.jpg"
---
<div id="purple-box"></div>
<p>When I began learning about HTML and CSS, it wasn't long before I began to see all the possible uses. Well, not all of them exactly. The possibilities of HTML and CSS are endless. But in my mind I could see web pages beginning to form. The building blocks of the internet I had been interacting with my entire life had just been revealed to me. I was in awe of the vast sea of knowledge before me and couldn't believe I had never learned any of this before.

In this blog I'll be writing about one particular property that can be given to any HTML element. The position property.

<h3 class="section-heading">Default Static Positioning</h3>

<p>Okay so picture a blank white web page with nothing on it. Not so hard right? The browser window itself has a <strong>STATIC</strong> positioning. That's not so important. What is important is that every element placed inside of that window, unless specified otherwise, also inherits that static positioning. This means that whatever elements you put in that box will start showing up on the top lefthand side with each element below the other.<br>
  <div id="pic-1"><img src="http://s25.postimg.org/ndkab30zz/static_boxes.png" /></div>
  <p>See in the image above how the boxes stack up along the lefthand side? Thats because they've just been put into an html document as three individual divisions. With their inherited static positioning from the blank window they line up along the left from the top down. This is important to know because any elements that you put into a division (unless specified otherwise) will have a default positioning of static and enter the document just like this.</p><br>

  <div id="pic-2"><img src="http://s25.postimg.org/qltd1vcnj/static_2.png" /></div>
To illustrate this in the picture above I've now placed the blue and green boxes inside of the now super sized red box. See how the inner blocks are still stacking up along the top left of the red box? This is because they've still got their untouched static positioning.


<h3 class="section-heading">Relative Positioning</h3>

<div id="pic-3"><img src="http://s25.postimg.org/jl5d93avj/relative_1.png" /></div>
<p>In this picture I've given our red box a <strong>relative</strong> position and a the value "left:200px". See how the box has moved in 200 pixels from the left? This is because by giving that red box a relative position with a following value of "left:200px" the box knows know it's supposed to now live 200 pixels to the left of it's original position. Notice also how the two smaller "child" boxes have moved left WITH the red box. They've still got their <strong>static</strong> positioning but they're coming into existence arranged inside the red box statically as opposed to the browser window.</p> <p>In the next picture, I've given our two small "children" boxes a <strong>relative</strong> position with values of "left:200px" as well. See how they've now moved NOT 200 pixels from the left of the screen, but 200 pixels from the left side of their "parent" div, the red box. This is because giving them a relative position allows them to be moved with top, bottom, left, and right values from their naturally occuring position. Which in this case was statically lined up inside the red box.</p>
<div id="pic-4"><img src="http://s25.postimg.org/qn3avaehb/relative_2.png" /></div>

<h3 class="section-heading">Absolute Positioning</h3>

<div id="pic-5"><img src="http://s25.postimg.org/538613jkf/absolute_pos.png" /></div>

<p>In this image you can see that our blue box has moved up and is taking over green territory! Well it's doing this because I've told it that it now has an <strong>absolute</strong> position. This means that by giving our blue box the values of "left:100px" and "top:50px" it has now placed itself 100 pixels from the left and 50 pixels from the top of it's PARENT div, the red box. See how it just brazenly covers up the poor green box? Absolute positioning gets in our boxes heads and makes them think they're so much better than their brothers and sisters. The blue box now completely ingnores the flow of elements.</p>

<h3 class="section-heading">Fixed Positioning</h3>

<p>The third and final type of positioning is fixed positioning. You've probably noticed the tiny purple box on the left side of this window. See how the rest of the pages content just flows by next to it? This purple box has been given a fixed position. This allowed me to place it anywhere in the browser window (which it will place itself in relation to using top, left, etc.) and hold it in the position regardless of where the page content goes. Elements with a fixed position just don't give a damn. They're gonna stay put to those spots no matter what.</p>

<p>The positioning of elements in a page was something I spent a large amount of time trying to understand. It is, after all, a fundamental building block of web pages. Once you are able to grasp this though, you can immediately begin to improve the look and feel of your websites. I hope this blog helped you out with any of your CSS positioning woes.<br>Until next time cadets,<br>
  -Ricky</p>