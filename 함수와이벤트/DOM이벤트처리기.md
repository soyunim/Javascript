> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [DOM이벤트처리기]

 > DOM이벤트처리기는 기존과 무슨 차이?

 기존 이벤트 처리기 지정 방법은 HTML이 주인이 되어 자바스크립트 함수를 불러왔다.   
 DOM을 사용하면 자바스크립트가 주인이 되어 HTML의 요소를 가져와 이벤트 처리기를 연결한다.  
 즉, HTML과 자바스크립트 중 어느 쪽을 중심으로 잡는가에 따라 지정하는 방법이 다르다.

 ```
 //기본형
 웹 요소.onclick = 함수;

 //예시: 버튼 클릭해 글자색 바꾸기
 <button id = "change"> 글자색 바꾸기 </button>
 <p>blah blah blah</p>
 ```
 > 방법1: 웹 요소를 변수로 지정 & 미리 만든 함수 사용
```
var changeBttn = document.querySelector("#change");
changeBttn.onclick = changeColor; //함수 이름 뒤 괄호가 없음.

function changeColor(){
    document.querySelector('p').style.color = "#f00";
}
```
 > 방법2: 웹 요소를 따로 변수로 만들지 않고 사용
 ```
 document.querySelector("#change").onclick = changeColor;

function changeColor(){
    document.querySelector('p').style.color = "#f00";
}
 ```
 > 방법3: 함수를 직접 선언
 ```
 document.querySelector("#change").onclick = function(){
    document.querySelector("p").style.color="#f00";
 };
 ```