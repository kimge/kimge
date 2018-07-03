var i = 0;
var slideIndex = [];

slideIndex[0] = document.getElementById('slide1');
slideIndex[1] = document.getElementById('slide2');
slideIndex[2] = document.getElementById('slide3');
slideIndex[3] = document.getElementById('slide4');
//console.log(slideIndex[1]);

/*
null 값이 나오는 이유? 값이 없기 때문
웹브라우저 콘솔창에서는 잘 나옴;
해당 요소들 밑에 스크립트 주소를 붙여넣으니까 나옴
<script src="slide.js"></script> 왜?
null도 나옴 왜?

요렇게 하면 문법오류 뜸
var slideIndex = [
  document.getElementById('slide1'),
  document.getElementById('slide2'),
  document.getElementById('slide3'),
  document.getElementById('slide4')
];
*/

/*
let slide = () => {
  let temp = slideIndex[0].className;
  slideIndex[0].className = slideIndex[3].className;
  slideIndex[3].className = slideIndex[2].className;
  slideIndex[2].className = slideIndex[1].className;
  slideIndex[1].className = temp;
  //클래스네임을 여러 개 설정하고 그 중 특정 클래스네임을 가져올 수는 없나
};
*/

setInterval(function() {
    let temp = slideIndex[0].className;
    //console.log(slideIndex[0].className);
    slideIndex[0].className = slideIndex[1].className
    slideIndex[1].className = slideIndex[2].className
    slideIndex[2].className = slideIndex[3].className
    slideIndex[3].className = temp;

}, 6000);

//div.slide 에 on 클래스가 붙으면 그 요소의 slideIndex[]를 찾아서
//그 인덱스의 pagination > li에 클래스 on을 붙여준다.

var pagination = document.getElementsByClassName('group')[6];
//console.log(pagination);

var child = [];
child[0] = pagination.childNodes.item(0);
child[1] = pagination.childNodes.item(1);
child[2] = pagination.childNodes.item(2);
child[3] = pagination.childNodes.item(3);
//console.log(child[0]);

//html 파일에서 <ul>과 <li>, </li>와 </ul> 사이의 공백을 인식해서
//#text 라는 자식노드가 자동 생성되는데 공백을 없애지 않고도 없앨 수 있는 방법이 있나?


function pagination() {
  var i = 0;
  if ( slideIndex[i].className == 'on', i < slideIndex.length, i++ ) {
    child[i].className += " "+on;
  };
};
// pagination 함수를 setInterval 함수 안에 넣으면?


/*
1. 클래스네임이 on 인 슬라이드인덱스를 찾아서
2. 인덱스 [i]를 변수에 담고
3. child[i]의 클래스 on add
*/

/*
var i = 0;
var x = document.getElementsByClassName("slide on");

if(slideIndex[i] == x) {
  child[i].className += " "+on;
};
*/

//
