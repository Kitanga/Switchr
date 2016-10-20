/** 
 * NDAY Switchr
 *        Author: Kitanga Nday
 *     Copyright: 2016 Kitanga Nday All rights reserved
 *       Version: 0.2.0
 * Last Modified: 18 Oct 2016
 */

/*  
 * May GOD Bless this Code, amen
 */

window.URL = window.URL || window.webkitURL; // window.URL fallback


var NDAYSwitchr = (function() {
    // Private
    var eleGroup = {};
        // grandGroup = '';

    // function getTime() {
    //     var time = Date.now();
    //     return time;
    // }
    // END Private

    // Public
    this.switchr = function(key, callback, beforeGroupTest) {
        if (beforeGroupTest) {
            callback();
        }
        var ele = eleGroup;
        for (var i in ele) {

            if (i !== key) {
                (!ele[i].hidden) ? ele[i].hidden = true: '';
            } else if (i === key) {
                (ele[i].hidden) ? ele[i].hidden = false: '';
            }
        }
        if (!beforeGroupTest) {
            callback();
        }
    };
    /**
     * Hide all elements in eleGroup
     */
    this.hideAll = function() {
        var ele = eleGroup;
        for (var i in ele) {
            ele[i].hidden = true;
        }
    };
    this.init = function(groupKey, groupID) {
        var ele = eleGroup,
            l = groupKey.length;
        if (l > 0) {
            for (var i = 0; i < l; i++) {
                ele[groupKey[i]] = document.getElementById(groupID[i]);
            }
        }
        // grandGroup = document.getElementById(grandGroupID);
    };
    // this.togFullscreen = function() {
    //     // this.isFullscreen = !this.isFullscreen;

    //     if (!document.fullscreenElement && // alternative standard method
    //         !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    //         if (grandGroup.requestFullscreen) {
    //             grandGroup.requestFullscreen();
    //         } else if (grandGroup.msRequestFullscreen) {
    //             grandGroup.msRequestFullscreen();
    //         } else if (grandGroup.mozRequestFullScreen) {
    //             grandGroup.mozRequestFullScreen();
    //         } else if (grandGroup.webkitRequestFullscreen) {
    //             grandGroup.webkitRequestFullscreen();
    //         }
    //     } else {
    //         if (grandGroup.exitFullscreen) {
    //             grandGroup.exitFullscreen();
    //         } else if (grandGroup.msExitFullscreen) {
    //             grandGroup.msExitFullscreen();
    //         } else if (grandGroup.mozCancelFullScreen) {
    //             grandGroup.mozCancelFullScreen();
    //         } else if (grandGroup.webkitExitFullscreen) {
    //             grandGroup.webkitExitFullscreen();
    //         }
    //     }
    // };
    this.version = {
        'name': 'NDAY Switchr',
        'version': '0.0.1',
        'released': '31 July 2016',
        'authors': 'Kitanga Nday'
    };
    this.toString = function() {
        return this.version.name + ": Version " + this.version.version + ", released " + this.version.released + ". By " + this.version.authors + ". All Rights Reserved by owner - Kitanga Nday";
    };
    // END Public

    return {
        init: init,
        /* Initialize the API by setting all the IDs to their respective variables and setting the variables' eventListeners */
        switchr: switchr,
        // togFullscreen: togFullscreen,
        toString: toString /* Custom toString() */
    };
})();

// export default NDAYPhotoEditor;
