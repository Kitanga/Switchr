/*  
 * May GOD Bless this Code, amen! (Leave this line untouched)
 */
/**
 * @file         Hide/show DOM Elements
 * @author       [Kitanga Nday]{@link https://twitter.com/kitanga_nday}
 * @copyright    2016 Kitanga Nday All rights reserved
 * @license      [MIT License]{@link https://github.com/Kitanga/Impaka/blob/master/LICENSE}
 * @version      v1.0.0-unstable
 */

/**
 * NDAYSwitchr - DOM element manipulator
 * @namespace NDAYSwitchr
 */
var Switchr = ( /** @lends NDAYSwitchr */ function(win) {

    var self = this;

    /* Classes */
    function Group(key) {
        this.elements = {};
        this.getLength = function() {
            var counter = 0;
            for (var i in this) {
                counter++;
            }
            return counter;
        };

        /**
         * This is what is used to add DOM elements to the group
         * @param {string|array} key       This is the key(s) used to identify elements
         * 
         * @param {string|array} id        The element's id(s) in the html code
         * 
         * @param {string|array} hideHow   The class styles that will be used on the element to hide the element. This will affect all elements added using arrays. This stops the hide/show functions (and their variants) from being hidden using their hidden attribute. So make sure one of the classes has a 'display:none' style.
         * 
         * @param {string|array} showHow   These are the styles that will be used when the element is being shown. Remember that having the hideHow param set means that showHow param is required
         */
        this.add = function(key, id /* Add this in v2.0.0 , hideHow, showHow */ ) {
            if (!self.ifKeyExists(key, this.elements)) {

                if (self.checkType(key, 'string') && self.checkType(id, 'undefined')) {

                    this.elements[key] = {
                        'domEle': document.getElementById(key)
                    };

                } else if (self.checkType(key, 'array') && self.checkType(id, 'undefined')) {

                    for (var i = 0; i < key.length; i++) {
                        this.elements[key[i]] = {
                            'domEle': document.getElementById(key[i])
                        };
                    }

                } else if (self.checkType(key, 'string') && self.checkType(id, 'string')) {

                    this.elements[key] = {
                        'domEle': document.getElementById(id)
                    };
                } else if (self.checkType(key, 'array') && self.checkType(id, 'array')) {

                    for (var i = 0; i < key.length; i++) {
                        this.elements[key[i]] = {
                            'domEle': document.getElementById(id[i])
                        };
                    }
                }
            } else {
                console.error("The key (" + key + ") already exists.");
                console.info("Please use a different key");
            }
        };

        /**
         * Hides element(s)
         * @param  {array|string} key        The key of the element to be hidden
         * @param  {function} ftn        Function to be invoked after hiding of element
         */
        this.hide = function(key, ftn) {
            if (!key) {
                var element = self.getFirst(this.elements); /* Get the first element in the elements object */
                /* Hide element */
                self.hideMe(element.domEle);
            } else if (self.checkType(key, 'string')) {
                /* Hide element */
                self.hideMe(this.elements[key].domEle);
            } else if (self.checkType(key, 'array')) {
                /* Loop through key array and get all keys to be hidden */
                for (var i = 0; i < key.length; i++) {
                    /* Hide elements that have same key as keys in array */
                    self.hideMe(this.element[key[i]].domEle);
                    /* A custom function that runs after the element has been hidden */
                    if (self.checkType(ftn, 'function')) {
                        ftn(this.elements[key[i]].domEle); /* Invoke ftn() */
                    }
                }
            } else if (self.checkType(key, 'function')) {
                var element = self.getFirst(this.elements); /* Get the first element in the elements object */
                /* Hide element */
                self.hideMe(element.domEle);
                key(element.domEle); /* Invoke callBack() */
            }
            if (self.checkType(ftn, 'function')) {
                ftn(this.elements[key[i]].domEle); /* Invoke ftn() */
            }
        };

        this.hideAll = function(key) {
            for (var i in this.elements) { /* For loop through elements and hide them */
                self.hideMe(this.elements[i].domEle); /* Hide this element */
            }
            if (key) { /* If key doesn't exist */
                if (self.checkType(key, 'string')) {
                    self.showMe(this.elements[key].domEle); /* This shows this element if the key param exists */
                } else if (self.checkType(key, 'function')) {
                    key();
                }
            }

            if (self.checkType(ftn, 'function')) {
                ftn();
            }
        };

        this.show = function(key, ftn) {
            if (!key) {
                var element = self.getFirst(this.elements); /* Get the first element in the elements object */
                /* Show element */
                self.showMe(element.domEle);
            } else if (self.checkType(key, 'string')) {
                /* Show element */
                self.showMe(this.elements[key].domEle);
            } else if (self.checkType(key, 'array')) {
                /* Loop through key array and get all keys to be shown */
                for (var i = 0; i < key.length; i++) {
                    /* Show elements that have same key as keys in array */
                    self.showMe(this.element[key[i]].domEle);
                    if (self.checkType(ftn, 'function')) {
                        ftn(this.elements[key[i]].domEle); /* Invoke ftn() */
                    }
                }
            } else if (self.checkType(key, 'function')) {
                var element = self.getFirst(this.elements); /* Get the first element in the elements object */
                /* Show element */
                self.showMe(element.domEle);
                key(element.domEle); /* Invoke callBack() */
            }


            /* A custom function that runs after the element has been shown */
            if (self.checkType(ftn, 'function')) {
                var callBack = ftn; /* Set the callBack to ftn if it exists */
                callBack(this.elements[key].domEle); /* Invoke callBack() */
            }
        };

        this.showAll = function(key, ftn) {
            for (var i in this.elements) { /* For loop through elements and show them */
                self.showMe(this.elements[i].domEle); /* show this element */
            }
            if (key) { /* If key doesn't exist */
                if (self.checkType(key, 'string')) {
                    self.hideMe(this.elements[key].domEle); /* This hides this element if the key param exists */
                } else if (self.checkType(key, 'function')) {
                    key();
                }
            }

            if (self.checkType(ftn, 'function')) {
                ftn();
            }
        };
    }
    /* END Classes */

    /**
     * This is where all the groups are stored
     * @type {Object}
     */
    this.Groups = {};

    /**
     * This is the default name for the main group (when the user doesn't define a default name). CORRECTION: User will not be allowed to change default name
     * @type {String}
     */
    this.baseGroupName = 'Father';

    this.checkType = function(_obj, _type) {
        if (typeof _type === 'string') {
            var isType = undefined;
            switch (_type) {
                case 'string':
                    if (typeof _obj === 'string') {
                        isType = true;
                    } else {
                        isType = false;
                    };
                    break;
                case 'array':
                    if (_obj.constructor === Array) {
                        isType = true;
                    } else {
                        isType = false;
                    };
                    break;
                case 'undefined':
                    if (_obj === undefined) {
                        isType = true;
                    } else {
                        isType = false;
                    };
                    break;
                case 'function':
                    if (typeof _obj === 'function') {
                        isType = true;
                    } else {
                        isType = false;
                    };
                    break;
                case 'object':
                    if (typeof _obj === 'object') {
                        isType = true;
                    } else {
                        isType = false;
                    };
                    break;
                default:
                    console.error("Error: Something's up with parameter #2");
                    console.info('Just put the right type please.');
                    break;
            }

            if (isType !== undefined) {
                return isType;
            }
        } else {
            console.error("One/All of your params aren't strings");
            console.info('Please use valid datatype (aka strings!!!!!)');
        }
    };

    this.getFirst = function(_obj) {
        var toReturn = false;

        if (_obj) {
            for (var i in _obj) {
                toReturn = (_obj[i]) ? _obj[i] : false;
                break;
            }

            if (!toReturn) {
                console.error('There are no objects in the object.');
                console.info('Please add one or more objects inside the given object. So that this function can actually find the first element');
            }
        } else {
            console.error('There are no parameters');
            console.info('Please add an object in as a parameter');
        }

        return toReturn;
    };

    this.ifKeyExists = function(key, _obj) {
        var exists = false;
        for (var i in _obj) {
            if (i === key) {
                exists = true;
            }
        }

        return exists;
    };

    this.hideMe = function(_ele) {
        if (_ele) {
            _ele.hidden = (_ele.hidden) ? true : true;
        } else {
            console.error('There are no parameters');
            console.info('Please add an html element in as a parameter');
        }
    };

    this.showMe = function(_ele) {
        if (_ele) {
            _ele.hidden = (_ele.hidden) ? false : false;
        } else {
            console.error('There are no parameters');
            console.info('Please add an html element in as a parameter');
        }
    };
    this.addGroup = function(group) {
        if (group && this.ifKeyExists(group, this.Groups)) {
            if (self.checkType(group, 'string')) { /* If the parameter is a string... */
                this.createGroup(group); /* Create 1 group using the key as the key */
            } else if (self.checkType(group, 'array')) { /* If the param is an array... */
                for (var i = 0; i < group.length; i++) {
                    this.createGroup(group[i]); /* Create multiple group objects using the strings in array as keys*/
                }
            }
        } else {
            console.error("There are no parameters or your param isn't a string");
            console.info('Please add either a string or array of strings as parameter');
        }
    }
    this.createGroup = function(key) {
        this.Groups[key] = new Group(key);
    };

    this.group = function(key) {

        /**
         * This is the object which will be returned for further work
         * @type {Object}
         */
        var toReturn = {};

        if (!key) {
            toReturn = this.getFirst(this.Groups);
            if (!toReturn) {
                console.error('There are no groups in the Group Object.');
                console.info('Please add one or more groups using the addGroup(key)');
            }
        } else if (key) {
            var keyFound = false; /* If the key has been found then reference the object it points to */
            for (var i in this.Groups) {
                if (key === i) {
                    toReturn = this.Groups[key];
                    keyFound = true;
                    break;
                }
            }
            if (!keyFound) {
                console.error('Your key: ' + key + '. was not found in the Group Object.');
                console.info('Please add this key using addGroup(key)');
                return false;
            }
        }

        return toReturn;
    };

    this.init = function(groupKey) {
        if (groupKey) {
            if (self.checkType(groupKey, 'array')) {
                for (var i = 0; i < groupKey.length; i++) {
                    this.createGroup(groupKey[i]);
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
            this.createGroup(this.baseGroupName);
        }
    };

    return this;
})(window);