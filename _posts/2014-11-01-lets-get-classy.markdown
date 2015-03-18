---
layout:     post
title:      "Let's get Classy"
subtitle:   "An intro to JS classes and constructors"
date:       2014-11-01 12:00:00
author:     "Ricky Thomas"
header-img: "img/post-bg-01.jpg"
---


<p><span style="font-size:3em">T</span>hus far throughout DevBootcamp my main focus has been on the Ruby programming language. However, this last week I spent a good amount of time with Javascript and began to get a bit of a feel for it. During my studies many things about Javascript seemed to fit right in with the concepts I had already learned in Ruby, but there are definitely many differences. So far many of the differences seem to be syntactic though I'm sure as I continue my studies I will find more and more deviations. In this blog I'm going to look at the differences between Ruby classes and Javascript constructor functions.</p>
<h3>Ruby Classes</h3>
<p>In my previous blog <a href="/2014/10/08/hooray-for-chores"><em>Booo Chores 10.18.14</em></a>. I discuss in depth how to create classes in Ruby. But for those of you who are just joining us, let's have a bit of review!</p>

~~~~~~~~
  class Blog
  attr_reader :about, :author
    def initialize(about)
      @about = about
      @author = "Ricky"
    end
  end

  new_blog = Blog.new("Ruby")
  new_blog.about
  ==> "Ruby"

  new_blog.author
  ==> "Ricky"
~~~~~~~~
{: .language-ruby}

<p>In the example above, I've created a new <em>Blog</em> class. I've also given this class an instance variable called <em>@about</em> which when we create a new instance of the Blog class called <em>new_blog</em>, we can then call the new <em>about</em> method in order to display the value of <em>@about</em>; in this case "Ruby." Now let's add a class method.</p>

~~~~~~~~
  class Blog
  attr_reader :about, :author
    def initialize(about)
      @about = about
      @author = "Ricky"
    end

    def is_about
      puts "This blog is about #{self.about}."
    end
  end

  another_new_blog = Blog.new("cats")
  another_new_blog.is_about
  #prints "This blog is about cats."
  another_new_blog.author
  ==> "Ricky"
~~~~~~~~
{: .language-ruby}

<p>Notice that even though we've initiated a new Blog class object (about cats this time) I'm still the author! This class could continue to be built upon until it was a great way to create new blog objects and give them each in turn their own qualities. Let's now look at some Javascript.</p>
<h3>Javascript Constructor Functions</h3>
<p>Javascript is a classless language but there are still ways to create multiple objects that all share the same properties. First let's look at how to create a basic object in Javascript using what's called <em>literal notation</em>:</p>

~~~~~~~~
  var blogObject = {
    about: "Javascript",
    author: "Ricky"
  }

  blogObject.about
  ==> "Javascript"
~~~~~~~~
{: .language-javascript}

<p>This is pretty simple so far. We have a new variable (var blogObject) and we're setting it to have the value of an object we've created with a couple of properties; <em>about</em>, and <em>author</em>. That's all well and good but I want to be able to create new blogs that are about different things! Observe the following:</p>

~~~~~~~~
  function blogObject(about) {
    this.about = about;
    this.author = "Ricky"
  }

  dog_blog = new blogObject("Dogs");
  dog_blog.author
  ==> "Ricky"

  dog_blog.about
  ==> "Dogs"


~~~~~~~~
{: .language-javascript}

<p>In the code above, <em>this</em> works in the same way that <em>self</em> works in Ruby. We now have a function that can be used to create blog objects! Notice the differences in syntax. When we invoke functions using <em>new</em> they are then <em>constructor functions</em>. Using <em>new</em> creates a new object and also indicates that <em>this</em> should refer to that new object as opposed to one global object. But how can we make it so that each new object created is able to perform an object specific function? In the Ruby code earlier we made the method <em>is_about</em> so that any Blog class object could use it. Now let's look at a way to do this in Javascript:</p>

~~~~~~~~
  function blogObject(about) {
    this.about = about;
    this.author = "Ricky"
  }

  blogObject.prototype.isAbout = function() {
    return "This blog is about " + this.about + ".";
  }

  var newBlog = new blogObject("fish");
  newBlog.isAbout();
  ==> "This blog is about fish."

~~~~~~~~
{: .language-javascript}

<p>Now anytime a new blogObject is created in this program the <em>isAbout</em> function will be available to it for use. This is called <em>prototypal inheritance</em>. In the second bit of code where we establish a <em>blogObject.prototype</em> we are just basically accessing that object and writing a function into that objects prototype. We can view an objects prototype by calling the following:</p>

~~~~~~~~
  Object.getPrototypeOf(newBlog);
  ==> { isAbout: [Function] }
~~~~~~~~
{: .language-javascript}
<h3>Summary</h3>
<p>You can see that these two coding languages are very different in some ways. Especially syntactically, but also in that Javascript is not able to make "classes." Of course it does have it's own way of achieving similiar results. I hope this blog has helped you in your learning!<br>
  Thanks for reading!<br>- Ricky</p>