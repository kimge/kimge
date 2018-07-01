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

var slideClass = {
  "first":"slide prev",
  "second":"slide on",
  "third":"slide next",
  "fourth":"slide hide"
}

setInterval(slideClass.show = function() {
    let temp = slideIndex[0].className;
    //console.log(slideClass.first);
    slideIndex[0].className = slideClass.fourth;
    slideIndex[1].className = slideClass.second;
    slideIndex[2].className = slideClass.third;
    slideIndex[3].className = temp;
      //console.log(slideIndex[3].className);
}, 1000);

//첫번째와 마지막 슬라이드의 클래스네임이 겹침.
