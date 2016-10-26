var groupKeys = ['step1', 'step2', 'step3', 'step4'],
    groupIDs = ['step1', 'step2', 'step3', 'step4'],
    s1 = document.getElementById('s1'),
    s2 = document.getElementById('s2'),
    s3 = document.getElementById('s3'),
    s4 = document.getElementById('s4');

/* New Format */
NS = NDAYSwitchr;
NS.init();
var group = NS.group();
group.add(['1', '2'], ['step1', 'step2']);
console.info(NS.Groups)
console.log(group.elements);
group.hideAll();
// group.show('step1');

s1.onclick = function() {
    group.show('1');
};

// s2.onclick = function() {
//     group.show('step2');
// };

// s3.onclick = function() {
//     group.show('step3');
// };

// s4.onclick = function() {
//     group.show('step4');
// };