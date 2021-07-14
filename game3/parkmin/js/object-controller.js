// test code
var obj1 = document.querySelector('#obj1');
var obj2 = document.querySelector('#obj2');
var obj3 = document.querySelector('#obj3');
var obj4 = document.querySelector('#obj4');
var msg1 = document.querySelector('#message1')

var msg1_flag = 1;

obj1.onclick = function() {
    alert('YWCA 직원에 대한 소개 책자이다. 잠긴 PC에 대한 힌트가 있을 것 같다.');
    obj1.style.opacity = 0.5;
}


obj2.onclick = function() {
    alert('평범한 시계이다. 어째서인지 시침과 분침이 뽑혀져있다.');
    obj2.style.opacity = 0.5;
}

obj3.onclick = function() {
    var inputString = prompt('PC를 이용하려면 암호를 입력하세요.', '힌트 : YWCA');
    if (inputString == "YWCA") {
        alert('DEBUG :: 다음 단계 게임 진행')
        obj3.style.opacity = 0.5;
    } else {
        alert('암호가 틀렸습니다.');
        alert('이 곳을 탈출하기 위해서는 PC를 이용해야할 것 같다.');
    }
}

msg1.onmouseover = function () {
    if (msg1_flag === 1) {
        alert('책상에서 부스럭 소리가 났다.');        
    } 
    msg1_flag = 0;
}

