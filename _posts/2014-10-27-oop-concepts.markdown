---
layout:     post
title:      "OOP and Functional Programming"
date:       2014-10-27 12:00:00
author:     "Ricky Thomas"
header-img: "img/post-bg-01.jpg"
---

<p><span style="font-size:3em">A</span>s I delve deeper into the realm of the computer sciences throughout my DevBootcamp training, every so often new concepts come up that I'm required to familiarize myself with. The concept today was the programming paradigm, functional programming. Now the first thing I did when I read that was look up just what the heck a paradigm is... A paradigm is defined as a typical example or pattern of something; a model. Okay so then functional programming is just another style of organizing code. But wait, up to this point most of my learning has been encapsulated in object oriented design! You're tellin me there are not just one but a whole bunch of other programming paradigms?! Needless to say I was a bit taken aback. After a break from the computer and some hot apple cider, I dove back into seeing for myself just what the differences between these two paradigms are.</p>
<h3>Object Oriented Programming in a Nutshell</h3>
<p>When you write code in an Object Oriented coding language, everything takes on the role of an object. Objects in the programming world, just as in the real world, have attributes that make them unique. In programming, objects can be mostly anything. For example, lets say that we've created one of these objects in the Ruby coding language, and this particular object is a Walnut. That's right...a walnut.</p>

~~~~~~~~
  class Walnut
  attr_reader :shell, :nut
    def initialize
      @shell = true
      @nut = true
    end
  end
~~~~~~~~
{: .language-ruby}

<p>Above we have a new ruby class establishing a Walnut object that has the attributes of shell and nut. Now, we COULD write a whole bunch of fun methods in here but a nut doesn't too much in the real world beside have a shell and a nut. But what the heck we can figure out something.</p>

~~~~~~~~
  class Walnut
  attr_reader :shell, :nut
    def initialize
      @shell = true
      @nut = true
    end

    def squirrel
      @shell = false
    end
  end
~~~~~~~~
{: .language-ruby}

<p>Now our Walnut object class has a new ability (method) called squirrel. Just as a squirrel might shell a walnut, our squirrel method changes the state of our @shell variable to false. If we were to create a new walnut and then tell it to use it's squirrel method, it would take away it's shell. I realize that nut's can't squirrel themselves but hey you get the idea. If we were to really get into it, we could create a squirrel object that could deshell a nut object and perform a myriad of other squirrely tasks but I'm a bit short on time lately.</p>
<h3>Functional Programming in a... okay just functional programming</h3>
<p>Functional programming is another way to develop programs using coding languages and this style does it all using what are known as functions. Basically, this style of programming computes information relying solely on mathematical equations. Remember how in our examples of OOP above we were setting different objects to hold information. Like how the @nut variable (which also counts as an object) holds a value of true. Well this value is what's known as the object's state. Functional programming doesn't deal with state. Variables don't retain state after specific functions and they are also immutable (meaning they can't be changed after creation). Some people see this as beneficial and others disagree. What we know for sure is that this way of doing things does eliminate occasions where variables might be changed as a side effect of calling some code. For some this is more clear cut and preferable. You can write functions that execute their specified code and use them as arguments for other functions to then execute their output. In this manner, functions upon functions upon functions can be built into giant programs.</p>
<h3>So what's the difference?</h3>
<p>Well, it's a tough question to answer and one that would be impossible for me to do so in such a small amount of time. There are many differences and many similiarities. The main take-away that I've had so far in my research is this. When you are developing in an Object Oriented Programming language, you will usually have a set of "operations" that affect "things." As new operations are needed, new "things" (objects in this case) are added to the code. In a Functional Programming language you normally work with a set of exisiting "things" and add more operations as you develop the code.<br>
  I hope this basic intro helps you in your learning!<br>Best,<br>- Ricky</p>