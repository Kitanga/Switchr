/*  
 * May GOD Bless this Code, amen! (Leave this line untouched)
 */
/**
 * @file         Hide/show DOM Elements
 * @author       [Kitanga Nday]{@link https://twitter.com/kitanga_nday}
 * @copyright    2016 Kitanga Nday All rights reserved
 * @license      [MIT License]{@link https://github.com/Kitanga/Impaka/blob/master/LICENSE}
 * @version      0.4.0
 */

/**
 * NDAYSwitchr - DOM element manipulator
 * @module NDAYSwitchr
 */
var NDAYSwitchr = (/** @lends module:NDAYSwitchr */function() {
    /* Private */
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

    this.createGroup = function(key) {
        var grp = this.Groups[key];

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
        var add = function(key, id, hideHow, showHow) {
            if (key.constructor === Array && id.constructor === Array) {
                for (var i = 0; i < key.length; i++) {
                    grp.elements[key[i]].domEle = document.getElementById(id[i]);
                }
            } else if (typeof key === 'string' && typeof id === 'string') {
                grp.elements[key].domEle = document.getElementById(id);
            };

            if (hideHow) {
                //then showHow
            }
        };

        var hide = function(key,ftn) {
            /* If it's hidden, then keep it hidden. If not, then hide it. */
            grp.elements[key].hidden = (grp.elements[key].hidden) ? true : true;

            /* A custom function that runs after the element has been hidden */
        };

        var hideAll = function() {
            //
        };

        var show = function() {
            //
        };

        var showAll = function() {
            //
        };

        this.Groups[key] = {
            'add': add,
            'hide': hide,
            'hideAll': hideAll,
            'show': show,
            'showAll': showAll,
            // 'switchr':switchr,
            'elements': {};
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
            if (toReturn) {
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
                console.error('Your key: '+key+'. was not found in the Group Object.');
                console.info('Please add this key using addGroup(key)');
                return false;
            }
        }

        return toReturn;
    };

    this.init = function(groupKey) {
        if (groupKey) {
            if (groupKey.constructor === Array) {
                for (var i = 0; i < groupKey.length; i++) {
                    this.createGroup(groupKey[i]);
                }
            } else {
                console.error("");
            }
            /* Comment the code block below because there's no need to rename the default group since it'll be the only one. User will most probably only call .group() since there's only one group */
            /*else if (typeof groupKey === 'string') {
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
