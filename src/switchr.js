/*  
 * May GOD Bless this Code, amen! (Leave this line untouched)
 */
/**
 * @file         Hide/show DOM Elements
 * @author       [Kitanga Nday]{@link https://twitter.com/kitanga_nday}
 * @copyright    © 2016 [Kitanga Nday]{@link https://twitter.com/kitanga_nday} All rights reserved
 * @license      [MIT License]{@link https://github.com/Kitanga/Switchr/blob/master/LICENSE}
 * @version      v1.1.0
 */

//#region
/**
 * Switchr - DOM element manipulator
 * @param {string | string[]} [initParam] Optional param that can be a string to represent the first group or an array of group names
 */
function Switchr(initParam) {

    var self = this;

    /**
     * This is where all the groups are stored
     * @type {Object}
     */
    this.Groups = {};

    /**
     * This is the default name for the main group (when the user doesn't define a default name).
     * @type {String}
     */
    this.baseGroupName = 'main';

    /* Initialize Switchr */
    this.init(initParam);
};

/**
 * This is the function that hides the element. I created this because it was too repetetive in the show/hide/showAll/hideAll functions
 * @param {HTMLElement} _ele The HTML Element that needs to be hidden
 */
Switchr.prototype.hideMe = function(_ele) {
    /* If the _ele does exist */
    if (_ele) {
        /* Hide the element */
        _ele.hidden = (_ele.hidden) ? true : true;
    } else {
        console.error('There are no parameters');
        console.info('Please add an html element in as a parameter');
    }
};

/**
 * This is the function that shows the element. I created this for the same reasons as this.hideMe()
 * @param {HTMLElement} _ele The HTML element that needs to be shown
 */
Switchr.prototype.showMe = function(_ele) {
    /* If _ele exists or is set */
    if (_ele) {
        /* Show element */
        _ele.hidden = (_ele.hidden) ? false : false;
    } else {
        console.error('There are no parameters');
        console.info('Please add an html element in as a parameter');
    }
};

/**
 * The function used to add groups to the Groups object
 * @param {String} group The key you want to use to reference the group
 */
Switchr.prototype.addGroup = function(group) {
    if (group && helper.ifKeyExists(group, this.Groups)) {
        /* If the parameter is a string... */
        if (helper.checkType(group, 'string')) {
            /* Create 1 group using the key as the key */
            this.createGroup(group);
        }
        /* If the param is an array... */
        else if (helper.checkType(group, 'array')) {
            for (var i = 0, length = group.length; i < length; i++) {
                /* Create multiple group objects using the strings in array as keys */
                this.createGroup(group[i]);
            }
        }
    } else {
        console.error("There are no parameters or your param isn't a string");
        console.info('Please add either a string or array of strings as parameter');
    }
};

/**
 * Creates a new instance of Group()
 * @param {String} key The string you want to use as a reference for this new group
 */
Switchr.prototype.createGroup = function(key) {
    this.Groups[key] = new Group(this);
};

/**
 * This function returns a reference to a group that the key references
 * @param {String} [key] The key used to find the group
 * @return {Object}     The group object that the key references
 */
Switchr.prototype.group = function(key) {

    /**
     * This is the object which will be returned for further work
     * @type {Object}
     */
    var group = {};

    /* If no parameter was given then return the first group */
    if (!key) {
        /* Get the first group */
        group = helper.getFirst(this.Groups);
    }
    /* And if the key exists */
    else {
        /* If the key has been found then reference the object it points to */
        var keyFound = false;
        for (var i in this.Groups) {
            if (key === i) {
                /* Set the variable that needs to be returned to the found group */
                group = this.Groups[key];
                /* Set keyFound to true so that the console logs below aren't executed */
                keyFound = true;
                break;
            }
        }

        /* If key wasn't found */
        if (!keyFound) {
            console.error('Your key: ' + key + '. was not found in the Group Object.');
            console.info('Please add this key using addGroup(key)');
            return false;
        }
    }

    return group;
};

/**
 * This initializes Switchr by creating the first group(s)
 * @param {String|Array} groupKey The string or array of strings to be used to create the groups
 */
Switchr.prototype.init = function(groupKey) {
    /* If param exists */
    if (groupKey) {
        /* If the param's a key */
        if (helper.checkType(groupKey, 'array')) {
            for (var i = 0, length = groupKey.length; i < length; i++) {
                /* Make sure that the key is a string*/
                if (helper.checkType(groupKey[i], 'string')) {
                    /* Create groups using strings in array */
                    this.createGroup(groupKey[i]);
                }
            }
        } else {
            console.error("Parameter 1's data type should be Array. Data type of inputed parameter " + typeof groupKey);
        }
        /* Commentted the code block below because there's no need to rename the default group since it'll be the only one. User will most probably only call .group() since there's only one group */
        /* else if (typeof groupKey === 'string') {
            this.baseGroupName = key;
            this.groups[groupKey];
        }*/
    } else {
        /* If the param doesn't exist then we create a single group with this.baseGroupName as the property key */
        this.createGroup(this.baseGroupName);
    }
};
//#endregion

//#region
function Group(parent) {

    /**
     * This is where all of the group's elements (aka HTML Element) are stored.
     * @type {Object}
     */
    this.elements = {};

    /**
     * This is the Switchr object that owns this group
     * @type {Switchr}
     */
    this.parent = parent;
}

/**
 * This is what is used to add DOM elements to the group
 * @param {string|array} key  This is the key(s) used to identify elements
 * @param {string|array} id   The element's id(s) in the html code
 */
Group.prototype.add = function(key, id /* Add this in v2.0.0==> hideHow, showHow */ ) {

    /* If the key doesn't exist in the group's element object then continue */
    if (!helper.ifKeyExists(key, this.elements)) {
        /* If the key's a string and the id is undefined then... */
        if (helper.checkType(key, 'string') && helper.checkType(id, 'undefined')) {
            /* ...we set the elements key and it's HTML Element id to key */
            helper.addElement(this, key, key);
        }
        /* If the key's an array and the id is undefined then... */
        else if (helper.checkType(key, 'array') && helper.checkType(id, 'undefined')) {
            /* ...we do the same as done above but this time we use the array's strings as keys. */
            for (var i = 0, length = key.length; i < length; i++) {
                if (helper.checkType(key[i], 'string')) { /* Making sure that the key is a string */
                    helper.addElement(this, key[i], key[i]);
                }
            }
        }
        /* If both the key and the id are strings then... */
        else if (helper.checkType(key, 'string') && helper.checkType(id, 'string')) {

            /* Use the key as the reference key (aka property name) and the ID as the id used to get the element */
            helper.addElement(this, key, id);
        }
        /* If both the key and id are arrays then use the strings in them for the appropriate use */
        else if (helper.checkType(key, 'array') && helper.checkType(id, 'array')) {

            for (var i = 0, length = key.length; i < length; i++) {
                /* Making sure that we are dealing with strings */
                if (helper.checkType(key[i], 'string') && helper.checkType(id[i], 'string')) {
                    helper.addElement(this, key[i], id[i]);
                }
            }
        }
    }
    /* Log errors to the browser's console telling you that the key already exists */
    else {
        console.error("The key (" + key + ") already exists.");
        console.info("Please use a different key");
    }
};

/**
 * Hides element(s)
 * @param {array|string} key The key of the element to be hidden
 * @param {function}    _ftn Function to be invoked after hiding of element
 */
Group.prototype.hide = function(key, _ftn) {
    /* Check if the key param isn't undefined */
    if (!key) {
        /* Get the first element in the elements object */
        var element = helper.getFirst(this.elements);

        /* Hide element */
        this.parent.hideMe(element.domEle);
    }
    /* If key is a string */
    else if (helper.checkType(key, 'string')) {
        /* Hide element */
        this.parent.hideMe(this.elements[key].domEle);
    }
    /* If key is an array */
    else if (helper.checkType(key, 'array')) {
        /* Loop through key array and get all keys to be hidden */
        for (var i = 0, length = key.length; i < length; i++) {
            /* Hide elements that have same key as keys in array */
            this.parent.hideMe(this.element[key[i]].domEle);
            /* A function that runs after the element has been hidden */
            if (helper.checkType(_ftn, 'function')) {
                /* Invoke _ftn() */
                _ftn(this.elements[key[i]].domEle);
            }
        }
    }
    /* Check if key is a function */
    else if (helper.checkType(key, 'function')) {
        /* Get the first element in the elements object */
        var element = helper.getFirst(this.elements);

        /* Hide element */
        this.parent.hideMe(element.domEle);
        /* Invoke callBack() */
        key(element.domEle);
    }
    if (helper.checkType(_ftn, 'function')) {
        /* Invoke _ftn() */
        _ftn(this.elements[key].domEle);
    }
};

/**
 * Hide all elements except the key given
 * @param {string}   [key] The reference key for the element that shouldn't be hidden
 * @param {function} [_ftn] The function that should run after all elements are hidden
 */
Group.prototype.hideAll = function(key, _ftn) {
    /* For loop through elements and hide them */
    for (var i in this.elements) {
        /* Hide this element */
        this.parent.hideMe(this.elements[i].domEle);
    }
    /* If key does exist */
    if (key) {
        /* Check if key is a string */
        if (helper.checkType(key, 'string')) {
            /* This shows this element if the key param exists */
            this.parent.showMe(this.elements[key].domEle);
            /* Check if key is a function */
        } else if (helper.checkType(key, 'function')) {
            key();
        }
    }

    /* if _ftn is a function */
    if (helper.checkType(_ftn, 'function')) {
        _ftn();
    }
};

/**
 * Show the element
 * @param {string|array}  key  The reference key of element(s) that need to be shown
 * @param {function}      _ftn  The function that should run after an element is shown
 */
Group.prototype.show = function(key, _ftn) {
    /* If the key param doesn't exists */
    if (!key) {
        /* Get the first element in the elements object */
        var element = helper.getFirst(this.elements);
        /* Show element */
        this.parent.showMe(element.domEle);
    }
    /* If key is string */
    else if (helper.checkType(key, 'string')) {
        /* Show element */
        this.parent.showMe(this.elements[key].domEle);
    }
    /* If key is an array */
    else if (helper.checkType(key, 'array')) {
        /* Loop through key array and get all keys to be shown */
        for (var i = 0, length = key.length; i < length; i++) {
            /* Show elements that have same key as keys in array */
            this.parent.showMe(this.element[key[i]].domEle);
            /* If _ftn is a function */
            if (helper.checkType(_ftn, 'function')) {
                /* Invoke _ftn() */
                _ftn(this.elements[key[i]].domEle);
            }
        }
    }
    /* If key is a function */
    else if (helper.checkType(key, 'function')) {
        /* Get the first element in the elements object */
        var element = helper.getFirst(this.elements);
        /* Show element */
        this.parent.showMe(element.domEle);
        /* Invoke callBack() */
        key(element.domEle);
    }


    /* A custom function that runs after the element has been shown */
    /* If _ftn is a function */
    if (helper.checkType(_ftn, 'function')) {
        /* Invoke callBack() */
        _ftn(this.elements[key].domEle);
    }
};

/**
 * Show all elements
 * @param {string}    key The reference key for element that shouldn't be shown
 * @param {function} _ftn The function that runs after each element is shown
 */
Group.prototype.showAll = function(key, _ftn) {
    /* For loop through elements and show them */
    for (var i in this.elements) {
        /* show this element */
        this.parent.showMe(this.elements[i].domEle);
    }
    /* If key param does exist */
    if (key) {
        /* If key is a string */
        if (helper.checkType(key, 'string')) {
            /* This hides this element if the key param exists */
            this.parent.hideMe(this.elements[key].domEle);
        }
        /* If key is a function */
        else if (helper.checkType(key, 'function')) {
            key();
        }
    }

    /* If _ftn is a function */
    if (helper.checkType(_ftn, 'function')) {
        /* Call function */
        _ftn();
    }
};

//#endregion

/**
 * Helper functions for this API.
 * @type {Object}
 */
var helper = {};

/**
 * Get the length of the group. I.e, find how many elements/properties there are in an object.
 * @return {Number} Return the length
 */
helper.getLength = function(_obj) {
    /* Counter is the object that will actually do the counting of props */
    var counter = 0;
    /* For loop through the object _obj and count how many props there are in it */
    for (var i in _obj) {
        /* Increment for each prop found */
        counter++;
    }
    /* Return counter for external use */
    return counter;
};

/**
 * Check the type of an object
 * @param {Object} _obj  Could be any JavaScript object: String, Number, Function, Object, etc.
 * @param {String} _type The type you want to check _obj with
 * @return {Boolean}      Returns a true/false value
 */
helper.checkType = function(_obj, _type) {
    if (typeof _type === 'string') {
        /* This is the boolean that verifies if _obj is the wanted type (described by _type) */
        var isType = false;

        switch (_type) {
            case 'string':
                /* Check if the _obj is a string using typeof */
                if (typeof _obj === 'string') {
                    /* Set isType to true if this is the type... */
                    isType = true;
                }
                break;
            case 'array':
                /* For arrays, I use the object's constructor */
                if (_obj.constructor === Array) {
                    isType = true;
                }
                break;
            case 'undefined':
                if (_obj === undefined) {
                    isType = true;
                }
                break;
            case 'function':
                if (typeof _obj === 'function') {
                    isType = true;
                }
                break;
            case 'object':
                if (typeof _obj === 'object') {
                    isType = true;
                }
                break;
            default:
                console.error("Error: Something's up with parameter #2");
                console.info('Just put the right type please.');
                break;
        }

        return isType;
    } else {
        console.error("One/All of your params aren't strings");
    }
};

/**
 * Get the first object property in object. Sort of like getting the first item in an array
 * @param {Object} _obj Object to get first element from
 * @return {Object}      Returns whatever the first element is
 */
helper.getFirst = function(_obj) {
    /* The object to return */
    var toReturn = false;

    /* Check if _obj isn't undefined */
    if (_obj) {
        /* For loop once inside of the object and get the first element */
        for (var i in _obj) {
            /* If the first element exists then get a reference for it */
            toReturn = (_obj[i]) ? _obj[i] : false;
            /* Break on the first iteration so that we have the first element only */
            break;
        }

        /* If toReturn is false */
        if (!toReturn) {
            console.error('There are no objects in the object.');
            console.info('Please add one or more objects inside the given object. So that this function can actually find the first element');
        }
        /* Return the object */
        return toReturn;
    } else {
        console.error('There are no parameters');
        console.info('Please add an object in as a parameter');
    }


};

/**
 * If the key exists in the obj as a property
 * @param {String} key  The property name whose existence we check
 * @param {{}} _obj The object we are searching in
 * @return {Boolean}    Return true or false
 */
helper.ifKeyExists = function(key, _obj) {
    /* This is where the existence of the key is stored */
    var exists = false;
    for (var i in _obj) {
        /* If i and the key are equal then the key does exist*/
        if (i === key) {
            /* Set to true 'cause it exists */
            exists = true;
        }
    }

    /* Return the value */
    return exists;
};

/**
 * Adds elements to _obj's elements prop
 * @param {Object} _obj Object to which 'elements' belong
 * @param {string} _key The reference string used to find elements
 * @param {string} _id  ID used to find HTML Elements
 */
helper.addElement = function(_obj, _key, _id) {
    _obj.elements[_key] = {
        'domEle': document.getElementById(_id)
    };
}