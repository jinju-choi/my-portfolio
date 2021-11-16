
window.onscroll = function() {
  windowY = Math.floor(window.scrollY || document.documentElement.scrollTop);
  headerShow(windowY);
  nav_act(windowY);
  handleScroll();
  homeSectionScrolling(windowY);
}

//about section 진입 헤더 show
function headerShow(winTop){
  let aboutTop = document.getElementById('about').offsetTop;

  if(window.innerWidth > 1200){
    if(winTop >= aboutTop){
      header.style.left= '0';
      header.style.opacity= 1;
    } else {
      header.style.left= '-100%';
      header.style.opacity= 0;
    }
  } 

  if(window.innerWidth < 1200){
    if(winTop >= aboutTop){
      header.style.opacity= 1;
    } else {
      header.style.opacity= 0;
      header.classList.remove('active');
    }
  }
}

//header click scrolling
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  window.scrollTo({top:0, behavior: 'smooth'});
})


//header show
const hambuger = document.querySelector('.hambuger');
const header = document.getElementsByTagName('header')[0];
let headerOpen = false;

hambuger.addEventListener('click',function() {
  header.classList.toggle('active');
  return headerOpen = true;
});

//헤더 영역 외 클릭시 닫힘
function headerOutAreaEvent(event) {
  const target = event.target;

  if(window.innerWidth < 1200 ){
    if(target !== event.currentTarget.querySelector('.hambuger')) {
      header.style.left= '-220px';
      console.log('헤더영역이 아냐');
    } 
    if(target == event.currentTarget.querySelector('header')) {
      header.style.left= 0;
    }
    else if(target == event.currentTarget.querySelector('.hambuger')) {
      header.style.left= 0;
      console.log('헤더영역이야');
    }
  }
}
document.addEventListener('click',headerOutAreaEvent);


//gnb 클릭 섹션 스크롤링
const section = document.getElementsByTagName('section');
const gnbA = document.querySelector('.gnb').getElementsByTagName('a');

Array.from(gnbA).forEach(function(element, index) {
  element.removeAttribute('href');
  element.addEventListener('click', function(){
    let sectionTop = section[index].offsetTop;
    window.scrollTo({top:sectionTop, behavior: 'smooth'});
  });
});


//home 다운버튼 클릭시 스크롤이동
const homeDownBtn = document.querySelector('.down--button');
homeDownBtn.addEventListener('click', function(){
  let aboutTop = document.getElementById('about').offsetTop;
  window.scrollTo({top: aboutTop, behavior: 'smooth'});
});


//home about wheel 이벤트
// function homeSectionScrolling(winTop) {
//   let about = document.getElementById('about');
//   let aboutTop = document.getElementById('about').offsetTop;
//   let wheelSection = true;
//   // const aboutTop = window.pageYOffset + about.getBoundingClientRect().top;

//   window.addEventListener('wheel', (e) => {
//     if (winTop < aboutTop && winTop == 0){
//       if(e.wheelDelta < 0){
//         window.scrollTo({top: aboutTop, behavior: 'smooth'});
//         console.log("어바웃 위치로")
//       } 
//     } else if(winTop <= aboutTop) {
//       if(e.wheelDelta > 0){
//         window.scrollTo({top: 0, behavior: 'smooth'})
//         console.log("홈위치로");
//       }
//     } else if (winTop >= aboutTop) {
//       if (e.wheelDelta <= 0) {
//         console.log("아래로");
//       }
//     }
//   });
// }

function homeSectionScrolling(winTop) {
  let about = document.getElementById('about');
  let aboutTop = document.getElementById('about').offsetTop;
  let homeWheel = (e) => {
    if(e.wheelDelta < 0){
      window.scrollTo({top: aboutTop, behavior: 'smooth'});
    }
  }
  let aboutWheel = (e) => {
    if(e.wheelDelta > 0){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  if (winTop < aboutTop) {
    window.addEventListener('wheel', homeWheel, true);
  } else if (winTop >= aboutTop) {
    window.addEventListener('wheel', aboutWheel, function(){
      window.removeEventListener('wheel', homeWheel, true);
    });
  }
}



//섹션 진입시 메뉴 색 변경
function nav_act(winy) {
  let section = document.getElementsByTagName('section');
  let gnbA = document.querySelector('.gnb').getElementsByTagName('a');

  let ac_point = new Array;
  Array.from(section).forEach(function(element,index){
    ac_point[index]= Math.floor(element.offsetTop);
  });

  Array.from(ac_point).forEach(function(element,index){
    if(element <= winy){
      reset(gnbA ,"active");
      gnbA[index].classList.add("active");
    }
  });
}


//다크모드
const body = document.getElementsByTagName('body')[0];
const darkModeBtn = document.querySelector('.d-mode--btn');

darkModeBtn.addEventListener('click',function() {
  body.classList.toggle('dark-mode');
});

//스크롤시 나타남
function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.up-on-scroll');
  let ch_point;
  if(window.innerWidth > 768) {
    ch_point = window.innerHeight / 3;
  }
  if(window.innerWidth < 768) {
    ch_point = window.innerHeight / 5;
  }
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -ch_point)) {
      elem.classList.add('show');
    } else {
      elem.classList.remove('show');
    }
  });
}
window.addEventListener('scroll', handleScroll);

//remove class 함수
function reset(content,className){
  Array.from(content).forEach(element => {
    element.classList.remove(className);
  });
}

//skill hover
const skill_list = document.querySelectorAll('.skill_item');
const skill_description = document.querySelector('.skill__description').getElementsByTagName('li');
skill_list.forEach(function(elem, index) {
  elem.addEventListener('mouseover', function() {
    skill_description[index].classList.add('hover');
  });
  elem.addEventListener('mouseout', function() {
    skill_description[index].classList.remove('hover');
  });
});


//thanks message btn
const thanksMessage = document.querySelector('.thankyou_message');
const thanksCloseBtn = thanksMessage.querySelector('.close--btn');
function thanksBtnClose() {
  thanksMessage.style.display = 'none';
}

thanksCloseBtn.addEventListener('click', thanksBtnClose);

//마우스 따라다니는 효과
if ( window.innerWidth > 1200) {
  const mouseCircle = document.createElement('div');
  mouseCircle.className = 'mouse-circle';
  document.body.appendChild(mouseCircle);

  //마우스 커서 위치 담는 변수
  let mouseX = 0;
  let mouseY = 0;

  function getMousePosition(e) {
    let eobj = window.event ? window.event : e; //IE, FF에 따라 이벤트 처리
    mouseX = eobj.clientX;
    mouseY = eobj.clientY + document.documentElement.scrollTop;

    mouseCircle.style.left = mouseX + 15 + 'px';
    mouseCircle.style.top = mouseY + 15 +'px';
  }
  document.onmousemove = getMousePosition;
}
// function moveImg(){
//   // 이미지 위치 파악하기
//   let m_x = parseInt(document.querySelector('.mouse-circle').style.left.replace('px', ''));
//   let m_y = parseInt(document.querySelector('.mouse-circle').style.top.replace('px', ''));

//   // 이미지 움직이기
//   mouseCircle.style.left = Math.round(m_x + ((mouseX - m_x) / 5)) + 'px';
//   mouseCircle.style.top = Math.round(m_y + ((mouseY - m_y) / 5)) + 'px';

//   // 부드럽게 따라오는 공식 대략..
//   // 현재 이미지위치 = 현재이미지 위치 + (이미지 위치기준 마우스 커서 위치 / 적절한 나누기 값)
//   // 반복 처리 해주면 됩니다.
   
//   // ※ 이미지 위치 기준 마우스 커서 위치란?
//   // 이미지를 기준으로 그 이미지에서 커서가 얼마나 떨어져 있는지 여부
// }


// setInterval("moveImg()", 50); // moveImg 함수 반복 실행하여 이미지 움직이기




// 구현할것
// resize 구현
// 클릭시 전체 페이지 보여주기
// 다크모드 버튼 수정