---
title: Fall 2025 6.UR Research Report
tags:
  - data science
  - databases
  - climate
---

*This is a research report I wrote for a [undergraduate research opportunity](https://urop.mit.edu/) I did for credit in the fall 2025 semester.*
*The project is titled "A Framework for Machine Learned Forecasts of Air Pollution in the Contiguous United States."*

## Project Overview

As climate change continues to increase the frequency of wildfires across the continental United States, the ability for individuals to judge whether going outside is safe because of air pollution is becoming increasingly pertinent.
We believe an individual’s decision making to, say, go outside at all, or find the best hour to be outside, would be helped significantly by the forecasting of pollution levels.
There is existing work on predicting air pollution (specifically [PM2.5](https://www.epa.gov/pm-pollution/particulate-matter-pm-basics) levels), but we have found them to be underwhelming in various aspects: the current state-of-the-art models have poor precision and recall with regard to predicting high pollution days and thus can end up advising users to go outside during dangerous times of the day.
It is usually much safer for a user to simply look at current measurements for particulate matter at the beginning of the day and assume levels to be constant.
We believe that predictions can be improved significantly, and that even existing forecasts, when used alongside a baseline, can provide some value.
However, we currently find that historical and real-time pollution data is scattered across many governing bodies, such as the EPA and NWS, and hard to consume for both modelers and laypeople alike.

To start working towards righting this, focusing on the contiguous United States, I aimed to create a website which aggregates existing forecast models and ground-truth real-time information.
I primarily focused on the backend of this website, a data pipeline collating these various sources into a uniform database schema, and connecting it to a frontend, studying existing weather forecast interfaces along the way.
By increasing the accessibility, and therefore the awareness, of air pollution data, the public will be able to tangibly connect abstract concerns about climate change to their lives, not only keeping them safer, but creating the potential for increased political and social pressure in favor of decarbonization efforts.

## Progress

Again, my goal during this research opportunity was to begin work on creating a website in order to increase accessibility of pollution data.
To this end, I created a vertical slice, developing the “wireframe” of the application both to confirm that our idea is well-founded and to have a foundation to easily build on in the future.
My web app has two halves: a frontend written using web technologies (HTML, JavaScript, CSS) and a backend using server technologies (Python and SQL).
They communicate with each other over HTTP through a client-server interface defined on the backend and shared using the OpenAPI standard.
The backend manages and processes pollution data, while the frontend makes queries to the backend and displays results to the user.  
First, I will give an overview of the domain model.
All data points regarding pollution are called “measurements,” regardless of whether they are ground truth or predictions.
Each measurement comes with coordinates with respect to the contiguous United States, a UTC timestamp, the PM2.5 density in the standard units of micrograms per centimeter cubed, and a data source in order to differentiate between predictions and ground truths.

The backend is a web server and a series of command line tools written in Python. Housing all measurements is a SQLite database, an embedded database solution native to Python.
“Downloader” modules download data from providers like the EPA’s AirNow, transform them into the measurement model, and then insert them into the database for querying.
For now, just AirNow is supported.
Geospatial aspects of our data are delegated to Spatialite, an extension for SQLite.
Spatialite comes with a spatial index, enabling searching for measurements relevant to a user based on spatial locality.
To interface with the frontend, a web server was implemented using the FastAPI library.
FastAPI enables the rapid definition of client-server interfaces through use of Python’s type system, and then enables the sharing of these interfaces with clients through the OpenAPI standard.
The interface enables clients to search for relevant measurements in the database by supplying latitude-longitude coordinates and a timestamp.

The frontend is a so-called “single-page web app,” implemented using the fifth edition of the Svelte web framework.
The user interface is currently very barebones: on a user opening the app, it immediately requests test data from the frontend using some hardcoded coordinates and timestamp (MIT in the middle of June 2025) and displays it in a list.
Because of the use of OpenAPI, I was able to automatically generate a client for the frontend to use, enabling quick scaffolding of the app.

All together, the backend and frontend, strung together by the interface between them and the domain model, make for a first draft of a functional end-to-end web application.

## Learning Outcomes

I became familiar with many new technologies and techniques through this project, including, but not limited to, Spatialite, coordinate reference systems, integrating frontend build systems with a backend, generating OpenAPI clients, monorepo development, and reaching out to the GIS Lab. 
Furthermore, I learned what it was like to do a full-stack project under a deadline (most of my projects of this sort have been entirely independent), and learned a new standup method: “starting from the top.”

## Problems

Perhaps the biggest challenge for me this semester was productive use of lab meetings.
After having a few unproductive meetings at the start—running out of time, losing train of thought due to tangents—I shared my complaints in a constructive manner on our Slack server.
We were able to resolve this problem by having smaller semi-alternating meetings where I and my fellow UROP’r met with our supervisors separately.

Modulo this UROP, this has easily been my hardest semester at MIT.
If anything, this UROP was a nice escape from my other work, allowing me to return to my roots of playing around with data sets and writing server applications.
Because of my heavy workload, I was tired and unfocused for some of my worksessions.
The fact that I got so much done despite all that is a miracle (and five years of data engineering/web development practice, but still). Even though this is my fourth research opportunity, I still need to work on managing my time well and getting enough sleep.

## Open Questions

* Will the data model scale as more and more sources are added?  
  * especially given that we did not get the chance to implement any forecast sources  
* KNN querying is jank in a lot of ways; how hard is it to build on?  
  * does not handle temporal locality, filtering super well  
  * should time be built into the coordinate system?  
* What is a good user interface for an app like this?  
  * made some wireframes early on in the project, discussed weather apps I liked  
  * want to include aspects of design from AirNow into the application  
  * ultimately ran out of time to fully address what an ideal UI would look like  
* How should we handle culling “irrelevant” measurements from the database and adding new ones as time passes?  
  * AFAIK, this would be the last technical barrier to having a fully functioning application  
  * gets especially complicated when considering having to replace old forecasts with new ones with the same timestamp

