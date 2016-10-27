# Switchr

Switchr is a simple API written in JavaScript and used to control a certain section (or whole section) of a webpage. It does this by changing the visibility of an element (whether using JavaScript or using CSS. N.B. CSS will be added later in v2.0.0). In this way you can 'switch' between panels, menu sections, or UI elements.

## Motivation

I wanted to create a small API to control my menus in my games (I develop html5 games using [PhaserJS](http://phaser.io) btw). The menus are DOM based not canvas based and I wanted an easy way of controlling what menu shows and when. I soon realized that it could be used for more than just plain menus but also any UI I wanted to integrate it into.

## Installation

Take a copy of `Switchr.js` from the `src` folder and place it into your projects `js` folder. Then add these lines of code into your index.html (or whatever you called your webpage):
```javascript
<script src="js/Switchr.js"></script>
<script src="js/main.js"></script>
```

## Code Example

Now in `main.js` you add the code that uses `Switchr.js`

This is how Switchr.js works:
- Create Group
- Add Element to Group
- Manipulate elements using Group methods

You create the group by initializing
```javascript
var swr = Switchr;
swr.init() // Initializing Switchr creates a group known as 'Father'
```
You can also initialize group by placing an array as it's param. The array must hold strings as it's elements.
```javascript
var array = [
    'first',
    'second',
    'third',
    'etc'
];
swr.init(array); // This will create 4 groups with the reference keys being the strings in array
```
If you've already initialized, but want to add a group you can use `swr.addGroup()`
```javascript
swr.addGroup(); // Accepts a string or array of strings
```
Coming soon, getting a group for use in Switchr

Lastly, you can check the `test` folder for examples on how to use Switchr.
## API Reference

Currently, there's no public doc folder. You can however use JSDOC on Switchr.js like so:

```bash
$ jsdoc Switchr.js
```
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
