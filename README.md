# Switchr

Switchr is a simple API written in JavaScript that does very simple DOM manipulations. Curently it only shows and hides elements.

## Contents
- [Motivation](#motivation)
- [Installation](#installation)
- [API Reference](#api-reference)
- [Tests](#tests)
- [Contributors](#contributors)
- [License](#license)

## Motivation

I wanted to create a small API to control my menus in my games (I develop html5 games using [PhaserJS](http://phaser.io) btw). The menus are DOM based not canvas based and I wanted an easy way of controlling what menu shows and when. I soon realized that it could be used for more than just plain menus but also any UI I wanted to integrate it into.

## Installation

Take a copy of `Switchr.js` from the `src` folder and place it into your projects `js` folder. Then add these lines of code into your index.html (or whatever you called your webpage):
```html
<script src="js/Switchr.js"></script>
<script src="js/main.js"></script>
```

## API Reference

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
Now to add elements to the group you'll need to get the group first.
```javascript
swr.group(); // This will get the first group (Use this only when you have one group. I.e, you used .init() )
```
And if you have many groups then you can easily get them (I'm trying to rememeber what the term is but can't find the word. Is it to get the reference?) like so
```javascript
swr.group('etc');
// or
var group = swr.group('etc');
```
OK, so on to adding elements to groups
```javascript
group.add('me'); // This will add the element with the ID of 'me' and also give it the reference key 'me'
group.add(['me','me-too']); // Add all elements inside array into group
group.add('key','id'); // Add an element and define it's key and ID value independently
group.add(['me','me-too'],['id1','id2']); // Add new elements for each key/string in the first array and use the corresponding ID in the second array
``` 
When you want to manipulate elements, you have a couple of options and also a couple of different ways of invoking the option
```javascript
// First is the hide/show functions
// I'll be using the hide function only, but replace it with show, because they are pretty much mirrors of each other.
group.hide(); // Hide first element
group.hide('me'); // Hide the element to which key references
group.hide('me',function(){ console.log('You hid who?')}); // This invokes the function after hiding element
group.hide(function(){ console.log('Who am I hiding exaclty?')}); // Hides the first element and then invokes function
group.hide(['me','me-too']); // Hide element to which each key is referencing.
group.hide(['me','me-too'],function(){ console.log('Hide all the peoples')}); // Hide each element and run the function after each element is hidden. NOT when all elements are hidden but when each single element is hidden.

// Now the second is the hideAll/showAll function
// Again, I'll use hideAll only and you can also imagine that it was showAll function
group.hideAll(); // Hide all elements in the group
group.hideAll('me'); // Hide all elements except the element to which this key ('me') is referencing
group.hideAll('me',function(){console.log('Hide everyone except me. I like me')}); // Same as above, only difference is that function is invoked after hide operation
group.hideAll(function(){console.log('Hide everyone!!!! And then scream about hiding everyone')}); // Hide all elements and then run function after
```
Coming soon, `group.toggle()` and some css stuff. Until then, off to [Impaka!!!!](https://github.com/Kitanga/Impaka)
## Tests

Check the test folder for help on using this API

## Contributors

Contributions are welcome.

You can fork/clone this project. Then if you have any new ideas create a descriptive branch and work from there. Then send a pull request to the dev branch here so that we can discuss/review.

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
