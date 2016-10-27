var groupKeys = ['1', '2', '3', '4'],
    groupIDs = ['step1', 'step2', 'step3', 'step4'],
    s1 = document.getElementById('s1'),
    s2 = document.getElementById('s2'),
    s3 = document.getElementById('s3'),
    s4 = document.getElementById('s4');

/* New Format */
var swr = Switchr;

swr.init();

var group = swr.group();

group.add(groupKeys, groupIDs); //

group.showAll();

s1.onclick = function() {
    group.hide(function() {
        alert("First element is hidden!!!!");
    });
};

s2.onclick = function() {
    group.hide('2', function() {
        alert("Second element is hidden!!!!");
    });
};

s3.onclick = function() {
    group.hide('3');
};

s4.onclick = function() {
    group.hide('4');
};