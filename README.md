# Switchr

Switchr is a simple API written in JavaScript that does very simple DOM manipulations (show and hide). It is meant to be used on game/app menus built using HTML

## Contents
- [Motivation](#motivation)
- [Installation](#installation)
- [API Reference](#api-reference)
- [Tests](#tests)
- [Contributors](#contributors)
- [License](#license)

## Motivation

I wanted to create a small API to control my menus in my games (for html games of course). The menus are DOM based not canvas based and I wanted an easy way of controlling what menu shows and when. I soon realized that I could make a simple API to do all my 'element switching' for me. Hence, Switchr was born.

## Installation

Take a copy of `Switchr.min.js` from the `src` folder and place it into your projects `js` folder. Then add these lines of code into your index.html (or whatever you called your webpage):
```html
<script src="js/Switchr.min.js"></script>
<script src="js/main.js"></script>
```

Now in `main.js` you add the code that uses `Switchr`

## How to Use

This is how Switchr works:

- Initialize Switchr


- Create Group
- Add Element to Group
- Manipulate elements using Group methods

### Initializing Switchr 

```javascript
// Initializing Switchr is as easy as creating an instance. Switchr will do the rest (creating a group and such)
var swr = new Switchr();
```

You can also initialize switchr by placing an array as the param. The array must hold strings as its elements.

```javascript
var menus = [
    'main',
    'settings',
    'credits',
    'pause'
];
var swr = new Switchr(menus); // This will create 4 groups with the reference keys being the strings in array
```

### Creating a Groups

Groups in Switchr can be thought of as menu sections (e.g. main menu, pause menu, etc. can be setup as groups). And the elements inside them are pages or parts of that menu. So, using the example previously mentioned, a main menu can have a settings menu (this can be an element that is added to the group)

When you create a `Switchr` instance, you also create a default group known as "main". You can of course change this by passing a string to the constructor.

```javascript
// Creating a Switchr instance without param, creates a default group called "main"
var swr = new Switchr();

// Creating a Switchr instance and passing it the name for the default group. Do this if you will create more than one group 
var swr = new Switchr("main-menu");
```

If you've already initialized, but want to add a group later you can use `swr.addGroup()`

```javascript
swr.addGroup('string'||[]); // Accepts a string or array of strings
```

Now to add elements to the group you'll need to get the group first.

```javascript
swr.group(); // This will get the first group
```

And if you have many groups then you can easily get the one you want like so

```javascript
swr.group('etc');
// or
var group = swr.group('etc');
```

OK, so on to adding elements into groups

```javascript
group.add('me'); // This will add the element with the ID of 'me' and also give it the reference key 'me'
group.add(['me','me-too']); // Add all elements inside array into group
group.add('key','id'); // Add an element and define it's key and ID value independently
group.add(['me','me-too'],['id1','id2']); // Add new elements for each key/string in the first array and use the corresponding ID in the second array
```
When you want to manipulate elements, you have a couple of options and also a couple of different ways of invoking said options

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

You can also checkout the `doc` folder for more info on the API.

Coming soon, `group.toggle()` and some css support. Until then, off to [Impaka!!!!](https://github.com/Kitanga/Impaka)

## Tests

Check the test folder for help on using this API

## Contributors

I don't know if contributing to this repo is needed. Since this code already does what it needs to do. Maybe some sort of plugin system will be good.

## License

MIT License