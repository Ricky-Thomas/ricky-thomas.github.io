---
layout:     post
title:      "Array of Light"
date:       2014-10-05 12:00:00
author:     "Ricky Thomas"
header-img: "img/post-bg-01.jpg"
---

<p>In today's blog I'll be discussing the differences between Hashes and Arrays. Let's start by looking at an array.</p>
<p><code>jedi_counsel = ["Obi Wan", "Yoda", "Mace Windu", "Plo Koon"]</code></p>
<p>Above, we have an array. Basically, we've just created a list of items, in this case some seriously badass peeps. This list has been given the title jedi_counsel. In any array, each listed item is awarded a number. In this case Obi Wan is number 0, Yoda is number 1, and so on. This is the order of numbering in arrays. This is also one of the only ways to access individual items in an array. Okay great we can make lists! But, wouldn't it be kind of great if we had another, even more advanced list, where we could assign different values to list items. Kinda like a restaurant menu? Yeah...that would be great.</p>
<p><code>menu = Hash.new<br>menu = {<br>:cheeseburger => 5<br>:hamburger => 4<br>:salad => 10<br>}</code></p>
<p>Other then healthfoods being outrageously priced these days you may also notice that in this list each item has a partner. This is called a <strong>HASH</strong>. In a hash, you can assign values to what are called "keys" for easy access and arrangement. Hashes can also be assigned a default value so if a key is accessed that has not been assigned a value the default will be returned.</p>
<p>I hope this blog post helps you in your learning!<br>Thanks for reading,<br>-Ricky</p>