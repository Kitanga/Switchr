var s = NDAYSwitchr,
    groupKey = ['step1','step2','step3','step4'],
    groupID = ['step1','step2','step3','step4'],
    s1 = document.getElementById('s1'),
    s2 = document.getElementById('s2'),
    s3 = document.getElementById('s3'),
    s4 = document.getElementById('s4');

s.init(groupKey, groupID);
s.switchr('step1',null,false);

s1.onclick = function() {
    s.switchr('step1',null,false);
};

s2.onclick = function() {
    s.switchr('step2',null,false);
};

s3.onclick = function() {
    s.switchr('step3',null,false);
};

s4.onclick = function() {
    s.switchr('step4',null,false);
};
