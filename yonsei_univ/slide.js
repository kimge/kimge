var i = 0;
//var slideIndex = [];
//
// slideIndex[0] = document.getElementById('slide1');
// slideIndex[1] = document.getElementById('slide2');
// slideIndex[2] = document.getElementById('slide3');
// slideIndex[3] = document.getElementById('slide4');
// console.log(slideIndex[1]);

/*
null 값이 나오는 이유? 값이 없기 때문
웹브라우저 콘솔창에서는 잘 나옴;
해당 요소들 밑에 스크립트 주소를 붙여넣으니까 나옴
<script src="slide.js"></script> 왜?
null도 나옴 왜?

--- feel
미팅 기록 참고
*/

// 요렇게 하면 문법오류 뜸
// ---- feel
// 잘 되는 듯?
var slideIndex = [
  document.getElementById('slide1'),
  document.getElementById('slide2'),
  document.getElementById('slide3'),
  document.getElementById('slide4')
];
//console.log(slideIndex[1]);

var slideCircleGroup = [];

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
    slideIndex[0].className = slideIndex[3].className
    slideIndex[3].className = slideIndex[2].className
    slideIndex[2].className = slideIndex[1].className
    slideIndex[1].className = temp;

    let findSlide = slideIndex.find(slide => {return slide.className.includes('on');});
    //console.log(findSlide);
    //console.log(slideIndex.indexOf(findSlide));
    let findIndex = slideIndex.indexOf(findSlide);

    let findCircle = slideCircleGroup.find(function(circle) { return circle.className.includes('on'); });
    //console.log(findCircle);

    // 바로 직전 circle을 비우고
    findCircle.className = '';
    // 현재 slide의 circle의 style을 채운다
    slideCircleGroup[findIndex].className = 'on';

}, 6000);

//div.slide 에 on 클래스가 붙으면 그 요소의 slideIndex[]를 찾아서
//그 인덱스의 pagination > li에 클래스 on을 붙여준다.

//var pagination = document.getElementsByClassName('group')[6];
//console.log(pagination);

// id를 부여해서 id로 가져오는 방법으로
// id name은 직관적으로
var pagination = document.getElementById('slideGroup');
//console.log(pagination);

//console.log(pagination.childNodes);




// child[0] = pagination.childNodes.item(0);
// child[1] = pagination.childNodes.item(1);
// child[2] = pagination.childNodes.item(2);
// child[3] = pagination.childNodes.item(3);

// li tag 찾기
pagination.childNodes.forEach(node => {
  if (node.nodeName.includes('LI'))
  {
    slideCircleGroup.push(node);
    //console.log(node);
  }
});

//console.log(child);

//html 파일에서 <ul>과 <li>, </li>와 </ul> 사이의 공백을 인식해서
//#text 라는 자식노드가 자동 생성되는데 공백을 없애지 않고도 없앨 수 있는 방법이 있나? - forEach
/*
function pagination() {
  var i = 0;
  i == index[y];
  if ( slideIndex[i].className == 'slide on', i < slideIndex.length, i++ ) {
    child[i].className += " "+"on";
  };
*/

// pagination 함수를 setInterval 함수 안에 넣으면? 그래도 안돼
/* data-index ?
var y = 0;
y < child.length;
y++;
var index = [];
index[0] = child[0].getAttribute("data-index");
index[1] = child[1].getAttribute("data-index");
index[2] = child[2].getAttribute("data-index");
index[3] = child[3].getAttribute("data-index");

i == index[y];
*/

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

/*
var x = slideIndex.find(function() {
    return slideIndex.className == 'on';
});
*/


//slideGroup 의 li 클릭했을 때 해당되는 슬라이드로 이동하는 스크립트
// var clickLi = document.getElementsByClassName('pageLi');
// console.log(clickLi);

// clickLi.addEventListener("click", clickEvent); // li를 클릭했을 때 clickEvent 함수를 불러오기
// typeError 발생,  addEventListener is not a funciton
for (var x = 0; x < slideCircleGroup.length; x += 1) {
  slideCircleGroup[x].onclick = function() {
      var clickLi = slideCircleGroup.indexOf(this);
      let findCircle = slideCircleGroup.find(function(circle) { return circle.className.includes('on'); });
      //console.log(findCircle);

      // 바로 직전 circle을 비우고
      findCircle.className = '';

      // 현재 slide의 circle의 style을 채운다
      slideCircleGroup[clickLi].className = 'on';

      // 슬라이드 이미지
      let findSlide = slideIndex.find(slide => {return slide.className.includes('on');});

      // 클릭된 li 인덱스의 슬라이드의 클래스네임을 비우고
      slideIndex.className = '';
      //바꾼다
      slideIndex[clickLi].className = 'slide on';

      if (clickLi == 0) {
        slideIndex[clickLi+1].className = 'slide next';
        slideIndex[clickLi+2].className = 'slide hide';
        slideIndex[clickLi+3].className = 'slide prev';
      } else if (clickLi == 1) {
        slideIndex[clickLi+1].className = 'slide next';
        slideIndex[clickLi+2].className = 'slide hide';
        slideIndex[clickLi-1].className = 'slide prev';
      } else if (clickLi == 2) {
        slideIndex[clickLi+1].className = 'slide next';
        slideIndex[clickLi-2].className = 'slide hide';
        slideIndex[clickLi-1].className = 'slide prev';
      } else if (clickLi == 3) {
        slideIndex[clickLi-3].className = 'slide next';
        slideIndex[clickLi-2].className = 'slide hide';
        slideIndex[clickLi-1].className = 'slide prev';
      }

  }
};
