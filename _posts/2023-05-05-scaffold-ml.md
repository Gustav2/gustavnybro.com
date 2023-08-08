---
layout: post
title: Scaffold-ML project 
tags: project programming machine-learning school
---
In spring of 2023 exam time started, which meant that we were tasked with creating a final exam project for our computer science classes.
My group and I were given a special project, where we would collaborate with a software company, to build a real-life useful project. 

The company we paired with, had a problem in finding the correct parts for a scaffold - especially when building scaffold structures for a bigger construction project. 
They wanted an app which could utilize computer vision to find and mark the correct pieces for a specific construction (if you know the Lego app "Brick-It", this is more or like the same concept - just for scaffolding).
Now, the project was actually meant for university students, but we gave it a go anyway. 

We switched a bit between frameworks and programming languages, to find what we thought would be best.
We need a framework for the computer vision part and one for the UI. 
The group and I had tried working with the Tensorflow framework before, and this was ultimately also the one we ended up using. 
The UI framework were a bit of a different story.

The obvious choice for interacting with Tensorflow is Python, but if you've tried doing frontend, mobile work with Python, you know it's not really a delighting experience. 
We therefore decied to make some quick prototypes for the UI, in different frameworks. 
We tried .NET Maui, which was okay but interaction with the camera wasn't that great (at least not for our use-case). 
We also tried a bunch of different Python frameworks, in the hope they'd be great... They weren't.
JavaScript frameworks were also on the table, but we decided not to. 
Insted we opted to use Kotlin, as its a mature language recommended by Google for developing Android apps. 
This was a bit of a challenge though, as neither of us had even touched Kotlin before. 
At this time we both were comfortable in C#, Python and JavaScript - but not Kotlin.

The tech-stack ended up being:

Mobile app
* Kotlin
* Tensorflow Lite

Machine Learning training
* Python 
* Tensorflow Lite with tflite-model-maker
* Google Colab 