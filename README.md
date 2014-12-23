Blue Button: Toolkit
======

The markup, styles, and build workflow are based partly on the [Blue Button Connector](https://github.com/blue-button/connector)

### To make changes to this site:

1. Clone or fork this repository
2. [Download and install Node.js](http://nodejs.org)
3. In your terminal, cd to the repo directory and type `npm install`
4. Type `npm install -g grunt-cli`. If you get an error, type `sudo npm install -g grunt-cli` and enter your admin password
5. Type `grunt watch`. As you save .styl and .jade files, or the bbtoolkit.json file, the grunt task will compile the CSS and HTML in the background, so don't close this terminal window. Using Jade and Stylus out of the scope of this readme. :)

Most of the content for the site is found in the `_src/bbtoolkit.json` file.

### To deploy changes

Unlike the Connector, this repo is currently set up to serve a Github Pages site directly from the root of the master branch. Just push your changes and wait a few minutes.
