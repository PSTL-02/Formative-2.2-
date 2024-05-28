###### GIT Boilerplate

This is a boilerplate using gulp and node.js to automate time-consuming tasks such as compilation, linting, and minification.

##### Installation of Gulp
1.You will have to install both npm and node.js and verify them using your command terminal.

2.Then within the project directory, you will have to initialise npm, creating a package.json file.

3.You will also have to install gulp gloabally, and then locally within the project directory.

4.Create a gulpfile.js file, which with contain the tasks we will use in the boilerplate.

5.Create a default task and run gulp by typing "gulp" or the name of any task in project directory terminal.

##### Installation of Node Modules

To install the node modules needed for the boilerplate, first check the developer dependencies on the package.json file. This will give you a list of gulp node modules eg. gulp-connect, gulp-sass that are needed during the development of the project.

#### Gulp Node Modules Required

gulp - the main gulp module to run the tasks below

gulp-sass - compiles the sass file into standard css

gulp-livereload - automatic live reload of the browser after changing files

gulp-connect - creates a local web server for development

gulp-jshint - lints or checks the javascript file for any errors

gulp-rename - renames files

gulp-minify-css - minifies css or reducing size by removing unneccessary whitespace or comments

To install these node modules, go into the project directory, open up the terminal and type "npm install"

##### APIs/CDNs Used In Boilerplate

This boilerplate also uses various CDNs:

JQuery - a JS library used for event handling, animations, DOM manipulation and Ajax

JQuery UI - a JS library used with JQuery for UI, effects, and themes

Mapbox - creates interactive and customisable mapboxes for websites

Font Awesome - a customisable icon library

Swiper - open-source touch slider

These are installed by linking their JS scripts and css stylesheets in the HTML document, and by initialising them and customising their features in the custom script.js file. Some of these eg. Font Awesome, Mapbox, Swiper have icons and swiper layout already included in the HTML file to test their initialisation and functionality.

