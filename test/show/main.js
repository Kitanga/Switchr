var groupKeys = ['step1', 'step2', 'step3', 'step4'],
    groupIDs = ['step1', 'step2', 'step3', 'step4'],
    s1 = document.getElementById('s1'),
    s2 = document.getElementById('s2'),
    s3 = document.getElementById('s3'),
    s4 = document.getElementById('s4');

/* New Format */
var swr = Switchr;
swr.init();
var group = swr.group();
group.add(['1', '2', '3', '4'], ['step1', 'step2', 'step3', 'step4']);
group.hideAll();

s1.onclick = function() {
    group.show(function(){
        alert("Hello!!!!");
    });
};

s2.onclick = function() {
    group.show('2');
};

s3.onclick = function() {
    group.show('3');
};

s4.onclick = function() {
    group.show('4');
};