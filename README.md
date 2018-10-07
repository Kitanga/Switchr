# Switchr

Switchr is a simple JavaScript library made for simple DOM manipulations (e.g. show and hide).

## Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [API Reference](#api-reference)
- [Tests](#tests)
- [Contributors](#contributors)
- [License](#license)

## Motivation

I wanted to create a small API to control my menus in my games (for html games of course). The menus are DOM based not canvas based and I wanted an easy way of controlling what menu are currently shown, and which of their sub-menus/elements are visible.

## Installation

Take a copy of `Switchr.min.js` from the `dist folder`. Then add it to your index.html:

```html
<!-- Switchr.min.js library -->
<script src="js/Switchr.min.js"></script>

<!-- Your own code -->
<script src="js/main.js"></script>
```

## How to Use

### Create instance of Switchr 

```javascript
// Initializing Switchr is as easy as creating an instance.
var swr = new Switchr();
```

You can also initialize switchr by placing an array as the param. The array must have strings as its elements (these will be the keys to the different groups).

```javascript
var menus = [
    'main',
    'settings',
    'credits',
    'pause'
];
var swr = new Switchr(menus); // This will create 4 groups with the reference keys being the strings in array
```

### Creating a Group

Groups in Switchr can be thought of as menu sections (e.g. main menu, pause menu, etc. can be setup as groups).

And the elements inside them are pages or parts of that menu. E.g. a main menu can have a settings menu (this can be added as an element that is added to the group).

Switchr creates a default group with the key (more on this later) of `main`.

Now if you wanted to create a new group after initialization, you use `swr.addGroup()`:

```javascript
swr.addGroup('string'||[]); // Accepts a string or array of strings
```

### Adding elements

Now before adding `elements` to a `group` you'll need to get a reference to the latter first.

```javascript
var group = swr.group(); // This will get the default group (or first group, if you passed Switchr an array during instantiation)

var group = swr.group('main'); // This will get the group with the key main
```

After that we can now use one of the group's methods, `add()`, to add elements.

```javascript
/* There are a couple of ways of adding elements to groups */

group.add('me'); // This will add the element with the ID of 'me' and a key of 'me' as well

group.add('key','id'); // Add an element and define it's key and ID value independently.

// Don't worry, you will understand what the key is used for soon

 // You can also use arrays instead of strings
var keys = ['me','me-too'];
var IDs = ['id1','id2'];

group.add(keys, IDs);
```

When you want to manipulate elements, you have a couple of options and also a couple of different ways of invoking said options

```javascript
/* First is the hide/show function */
// I'll be using the hide function only, but you can also use the same methods for show, because they are pretty much mirrors of each other.

group.hide(); // Hide first element in group

group.hide('me'); // Hide the element to which key references

group.hide('me',function(){ console.log('You hid who?')}); // This invokes the function after hiding element

group.hide(function(){ console.log('Who am I hiding exaclty?')}); // Hides the first element and then invokes function

group.hide(['me','me-too']); // Hide element to which each key is referencing.

group.hide(['me','me-too'],function(){ console.log('Hide all the peoples')}); // Hide each element and run the function after each element is hidden. NOT when all elements are hidden but when each single element is hidden.

/* Now the second is the hideAll/showAll function */
// Again, I'll use hideAll only and you can also imagine that it was showAll function

group.hideAll(); // Hide all elements in the group

group.hideAll('me'); // Hide all elements except the element to which this key ('me') is referencing

group.hideAll('me',function(){console.log('Hide everyone except me. I like me')}); // Same as above, only difference is that function is invoked after hide operation

group.hideAll(function(){console.log('Hide everyone!!!! And then scream about hiding everyone')}); // Hide all elements and then run function after
```

You can also checkout the `doc` folder for more info on the API.

## Tests

Check the test folder for help on using this API

## Contributors

I don't know if contributing to this repo is needed. Since this code already does what it needs to do. Maybe some sort of plugin system will be good.

## License

MIT License