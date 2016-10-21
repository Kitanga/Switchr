/*  
 * May GOD Bless this Code, amen! (Leave this line untouched)
 */
/**
 * @file         Hide/show DOM Elements
 * @author       [Kitanga Nday]{@link https://twitter.com/kitanga_nday}
 * @copyright    2016 Kitanga Nday All rights reserved
 * @license      [MIT License]{@link https://github.com/Kitanga/Impaka/blob/master/LICENSE}
 * @version      0.5.0
 */

/**
 * NDAYSwitchr - DOM element manipulator
 * @namespace NDAYSwitchr
 */
var NDAYSwitchr = ( /** @lends NDAYSwitchr */ function() {

    var self = this;
    /**
     * This is where all the groups are
     * @type {Object}
     */
    this.Groups = {};

    /**
     * This is the default name for the main group (when the user doesn't define a default name)
     * @type {String}
     */
    this.baseGroupName = 'Father';

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
            console.info('Please add add an object in as a parameter');
        }

        return toReturn;
    };

    this.createGroup = function(key) {
        this.Groups[key] = {};
        this.Groups[key].elements = {};
        this.Groups[key].getLength = function() {
            var counter = 0;
            for (var i in this) {
                counter++;
            }
            return counter;
        };
        this.Groups[key].ifKeyExists = function(key) {
            var exists = false;
            for (var i in this.elements) {
                if (i === key) {
                    exists = true;
                }
            }

            return exists;
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
        this.Groups[key].add = function(key, id /* Add this in v2.0.0 , hideHow, showHow*/ ) {
            if (!this.ifKeyExists(key)) {
                if (key.constructor === Array && id.constructor === Array) {
                    for (var i = 0; i < key.length; i++) {
                        this.elements[key[i]] = {
                            'domEle': document.getElementById(id[i])
                        };
                    }
                } else if (typeof key === 'string' && typeof id === 'string') {
                    this.elements[key] = {
                        'domEle': document.getElementById(id)
                    };
                };
            } else {
                console.error("The key (" + key + ") already exists.");
                console.info("Please use a different key");
            }
            console.log(this.elements);
        };
        this.Groups[key].hide = function(key, ftn) {
            if (typeof key === 'string') {
                /* If it's hidden, then keep it hidden. If not, then hide it. */
                this.elements[key].domEle.hidden = (this.elements[key].domEle.hidden) ? true : true;
            } else if (!key) {
                var element = self.getFirst(this.elements);
                element.domEle.hidden = (this.elements[key].domEle.hidden) ? true : true;
            }

            /* A custom function that runs after the element has been hidden */
            if (typeof ftn === 'function' || typeof key === 'function') {
                var callBack = ftn || key;
                callback();
            }
        };

        this.Groups[key].hideAll = function() {
            //
        };

        this.Groups[key].show = function() {
            //
        };

        this.Groups[key].showAll = function() {
            //
        };
    };
    /* END Private */

    /* Public */

    this.group = function(key) {

        /**
         * This is the object which will be returned for further work
         * @type {Object}
         */
        var toReturn = {};

        if (!key) {
            var counter = 0;
            for (var i in this.Groups) {
                if (counter > 0) {
                    break;
                }
                toReturn = this.Groups[i];
                counter++;
            }
            if (!toReturn) {
                console.error('There are no groups in the Group Object.');
                console.info('Please add one or more using the addGroup(key)');
            }
        } else if (key) {
            var keyFound = false;
            for (var i in this.Groups) {
                if (key === i) {
                    toReturn = key;
                    keyFound = true;
                }
            }
            if (!keyFound) {
                console.error('Your key: ' + key + '. was not found in the Group Object.');
                console.info('Please add this key using addGroup(key)');
                return false;
            }
        }
        console.log(this.Groups)
        return toReturn;
    };

    this.init = function(groupKey) {
        if (groupKey) {
            if (groupKey.constructor === Array) {
                for (var i = 0; i < groupKey.length; i++) {
                    this.createGroup(groupKey[i]);
                }
            } else {
                console.error("Parameter 1's data type should be Array. Data type of inputted parameter " + typeof groupKey);
            }
            /* Comment the code block below because there's no need to rename the default group since it'll be the only one. User will most probably only call .group() since there's only one group */
            /* else if (typeof groupKey === 'string') {
                this.baseGroupName = key;
                this.groups[groupKey];
            }*/
        } else if (!groupKey) {
            this.createGroup(this.baseGroupName);
        }
    };
    /* END Public */

    return this;
})();
