var groupKeys = ['1', '2', '3', '4'], // Create array of strings to use as keys.
    groupIDs = ['step1', 'step2', 'step3', 'step4'], // Create array of strings to use as IDs 
    btn1 = document.getElementById('s1'), // Get button element
    btn2 = document.getElementById('s2'), // Get button element
    btn3 = document.getElementById('s3'), // Get button element
    btn4 = document.getElementById('s4'); // Get button element

var swr = new Switchr();

// Initialize Switchr. I.e., create a single group known as 'Father'. Unless you add an array of strings then they will be created as keys for corresponding group
// swr.init();

// .group() returns the first group. Since there's only one group (we initialized without using any key), it's the same as using .group('Father')
var group = swr.group();

group.add(groupKeys, groupIDs); // Add elements with keys to reference the elements later.

group.showAll(); // Show all elements in the group.

btn1.onclick = function() {
    group.hide(function() { // Hide element in group. In this case, the first element. The function is there to be run after the element is hidden
        alert("First element is hidden!!!!"); // Alert to test that the function works
    });
};

btn2.onclick = function() {
    group.hide('2', function() { // It's the same hide() except this time it has a 'key' and function afterwards
        alert("Second element is hidden!!!!");
    });
};

btn3.onclick = function() {
    group.hide('3'); // Hide this the element that this key represents
};

btn4.onclick = function() {
    group.hide('4');
};