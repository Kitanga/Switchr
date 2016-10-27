# Switchr

Switchr is a simple API written in JavaScript and used to control a certain section (or whole section) of a webpage. It does this by changing the visibility of an element (whether using JavaScript or using CSS. N.B. CSS will be added later in v2.0.0). In this way you can 'switch' between panels, menu sections, or UI elements.

## Motivation

I wanted to create a small API to control my menus in my games (I develop html5 games using [PhaserJS](http://phaser.io) btw). The menus are DOM based not canvas based and I wanted an easy way of controlling what menu shows when. I soon realized that it could be used for more than just plain menus but also any UI I wanted to integrate it into.

## Installation

You can pretty much clone/download this repo. Take the Switchr.js out of the src folder and paste it wherever you put js files.
Then add this line of code before your main.js (or whatever file will control/use the Switchr object.)
`<script src="js/Switchr.js"></script>`

## Code Example

Currently there's no example code. I need to make the API stable first.

## API Reference

Currently, there's no public doc folder. You can however use JSDOC on Switchr.js like so:

`$ jsdoc Switchr.js`

This will create HTML files documenting Switchr.js (I, currently, haven't fully documented Switchr, but I will soon)
## Tests

Check the test folder for help on using this API

## Contributors

Contributions are welcome. Heavily commenting your work and using JSDOC is highly recommended.

## License

MIT License

Copyright (c) 2016 Kitanga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
