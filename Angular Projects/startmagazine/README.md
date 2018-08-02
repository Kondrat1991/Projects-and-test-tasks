#Task
Develop a feed page that shows content items from a given api endpoint.
- The feed's design should be responsive
- Each feed item should include the following
    - item's title
    - item's main image as a background
    - like button
- click on the like button should toggle it on and off (/assets folder contains assets)



1) Write a service that gets content items from 
the following api
/api/items.json

2) you can use views/home.html and scripts/home_controller to write you code or alternativly create a new view and controller from scratch

3) style changes should be made in /styles/main.css

4) localhost server is available by typing 'gulp serve' in the command line - it will refresh the browser with each change you will make in the code

5) each item in items.json contains these fields:
	- title: the title of the article
	- images.mainImage.url: the main image of the article


#First installation (for the recruiter)
- install nodejs (lts) - https://nodejs.org/dist/v8.11.3/node-v8.11.3.pkg
- run first_time_install.bat
- run 'gulp serve' to see if it is working
