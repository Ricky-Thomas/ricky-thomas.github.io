---
layout:     post
title:      "Hooray for Classes!"
subtitle:   "Boooo chores"
date:       2014-10-08 12:00:00
author:     "Ricky Thomas"
header-img: "img/post-bg-01.jpg"
---

<p><span style="font-size:3em">W</span>hen I was a boy, my sister and I would always argue about who had to do which chores over the weekend. I always wanted to mow the lawn because at age ten the driving lawn mower may as well have been Falcor from "The Neverending Story." It rocked. I absolutely hated doing the dishes, and being the younger child, it seemed that was always my task. I am telling you...somehow...she rigged it! That damn sister of mine! So for this blog I'm going to solve one of my ten year old problems.</p>
<h3>Creating a ChoreChart Class</h3>
<code>class ChoreChart<br>
          def initialize<br>
              @chores = ["sweep", "vacuum", "rake", "dishes", "bathroom", "mow"]<br>
              @ricky = []<br>
              @alicia = []<br>
          end<br>end</code>
<p>So in the above code. We are establishing a new class called 'ChoreChart' and initializing a few instance variables. Those are the words with an '@' at the start of them. These variables can be set and used now throughout any other methods we create in the ChoreChart class. So now, as you can see, we've made two empty arrays (representing myself and my sister) and one array containing six strings representing all of the weekend chores. The next thing that we want is a way to randomly assign three chores each to my sister and I. Let's create a ChoreChart method for this:</p>

<code>def assign<br>
 into_hat = @chores.shuffle<br>
 @ricky << into_hat.first(3)<br>
 @alicia << into_hat.drop(3)<br>
end<br><br></code>

<p>In the method above (which will be included in the class), we shuffle up the chore names in the @chore array and make that into a new array that I've designated as 'into_hat.' Just like putting slips of paper with chores on them into a hat! Then we put the first three chores in the @ricky array and the last three into the @alicia array.</p><p>So now that we have a way to mix up the chores, and split them in a fair and equal manner, we can build one last method to tell us what our chores are for the weekend:</p>

<code>def tell<br>
              @ricky = @ricky.join(", ")<br>
              puts "Ricky's chores: #{@ricky}."<br>
              @alicia = @alicia.join(", ")<br>
              puts "Alicia's chores: #{@alicia}."<br>
          end<br><br></code>

<p>In the 'tell' method above, you can see that we turn our new and improved versions of @ricky and @alicia ([random_chore, random_chore, random_chore]) and join all the elements into one long string that we now reset @ricky and @alicia too. Then we print each list to the console with puts.</p>
<p>Here's the whole class together:</p>

<code>class ChoreChart<br>
          def initialize<br>
              @chores = ["sweep", "vacuum", "rake", "dishes", "bathroom", "mow"]<br>
              @ricky = []<br>
              @alicia = []<br>
          end<br><br>
          def assign<br>
           into_hat = @chores.shuffle<br>
           @ricky << into_hat.first(3)<br>
           @alicia << into_hat.drop(3)<br>
          end<br><br>
          def tell<br>
              @ricky = @ricky.join(", ")<br>
              puts "Ricky's chores: #{@ricky}."<br>
              @alicia = @alicia.join(", ")<br>
              puts "Alicia's chores: #{@alicia}."<br>
          end<br><br>
      end<br><br></code>
<p>Now consider running following code:</p>



<code>weekend_chores = ChoreChart.new<br>
  weekend_chores.assign<br>
  weekend_chores.tell</code>

<p>The first line of the above code creates a new instance of our class titled "weekend_chores."</p>
<p>Next, we call our assign method on weekend_chores so that our instance variables (@ricky and @alicia) are given their chore assignments.</p>
<p>Finally, we can call our tell method and see printed out lists telling us which chores we have! Wooooooo chores!!!</p>

<p>Can you see how the instance variables we created are used throughout multiple methods in the new class? Also, note that we represent a real world object with ChoreChart. Data structures often can be set up to resemble real world objects. For example, five arrays of five elements each stacked on top of one another looks just like a bingo board!<br>I hope this helps you in your learning and thanks for reading!!<br>-Ricky</p>

