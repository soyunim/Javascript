> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [문서 객체 모델(DOM)-이벤트처리]
 > DOM 이벤트처리

 웹 문서에서 이벤트가 발생하면 이벤트 처리기를 연결해야 한다.

 HTML 태그에서 이벤트 처리기를 연결할 수 있지만 태그와 스크립트 소스가 섞여 복잡한 프로그램에는 적합하지 않다.

 이럴 때 DOM에서 이벤트 처리기를 연결하면 HTML 태그와 스크립트 소스를 분리할 수 있다.

 > DOM요소에 함수 직접 연결하기
 
 이벤트 처리기 함수가 간단하다면 DOM요소에 직접 연결할 수 있다.
 
 ```
 <img src="images/img.png" id="cup">
 
 <script>
    var cup = document.querySelector("#cup");
    cup.onclick = function(){
        alert("이미지를 클릭했습니다.");
    }
 </script>
 ```

 > 함수 이름을 사용해 연결하기
 
 이벤트가 발생했을 때 실행할 함수를 따로 정의해 놓았다면 함수 이름을 사용해 연결할 수 있다.
 
 ```
 <img src="images/img.png" id="cup">
 
 <script>
    var cup = document.querySelector("#cup");
    cup.onclick = clickPic
    
    function clickPic(){
        alert("이미지를 클릭했습니다.");
    }
 </script>
 ```

 > DOM의 event 객체

 DOM에는 이벤트 정보를 저장하는 event 객체가 있다. 이 객체에는 웹 문서에서 이벤트가 발생한 요소가 무엇인지, 어떤 이벤트가 발생했는지 등의 정보가 들어 있다.

```
 <img src="images/img.png" id="cup">
 
 <script>
    var cup = document.querySelector("#cup");
    cup.onclick = function(event){
        alert("이벤트 유형: " + event.type + ", 이벤트 발생 위치: " + event.pageX + "," + event.pageY);
    }
 </script>
 ```

 >> event객체 프로퍼티
 - altKey: 이벤트가 발생할 때 Alt키를 눌렀는지 여부를 boolean값으로 반환
 - button: 마우스를 누른 버튼의 키값을 반환
 - charCode: keypress 이벤트가 발생할 때 어떤 키를 눌렀는지 유니코드값으로 반환
 - clientX: 이벤트가 발생한 가로 위치를 반환
 - clientY: 이벤트가 발생한 세로 위치를 반환
 - ctrlKey: 이벤트가 발생했을 때 Ctrl키를 눌렀는지 여부를 boolean값으로 반환
 - pageX: 현재 문서 기준으로 이벤트가 발생한 가로 위치 반환
 - pageY: 현재 문서 기준으로 이벤트가 발생한 세로 위치 반환
 - screenX: 현재 화면 기준으로 이벤트가 발생한 가로 위치 반환 
 - screenY: 현재 화면 기준으로 이벤트가 발생한 세로 위치 반환 
 - shiftKey: 이벤트가 발생할 때 Shift키를 눌렀는지 여부를 boolean값으로 반환 
 - target: 이벤트가 최초로 발생한 대상을 반환
 - timeStamp: 이벤트가 발생한 시간을 반환
 - type: 발생한 이벤트 이름을 반환
 - which: 키보드와 관련된 이벤트가 발생할 때 키의 유니코드값을 반환

 >> event객체 메서드
 - preventDefault(): 이벤트를 취소할 수 있는 경우에 취소


 >> this 예약어 사용 
 
 event객체에는 이벤트 정보만 들어있다. 만약 이벤트가 발생한 대상에 접근하려면 이벤트 처리기에서 예약어 this를 사용해야 한다.

 ```
 <img src="images/img.png" id="cup">
 
 <script>
    var cup = document.querySelector("#cup");
    cup.onclick = function(event){
        alert("클릭한 이미지 파일: " + this.src);
    }
 </script>
 ```

 > addEventListener() 메서드

 위 이벤트 처리기들은 한 요소에 하나의 이벤트 처리기만 연결할 수 있다.  
 하지만 addEventListener() 메서드와 event 객체를 사용하면 한 요소에 여러 이벤트 처리기를 연결해 실행할 수 있다.
 ```
 //기본형
 요소.addEventListener(이벤트, 함수, 캡처 여부);
 ```
 >> 캡처 여부
 - 이벤트를 캡처하는지 여부를 지정하며 기본값은 false이고 true와 false중에 선택할 수도 있다.
 - true면 캡처링, false면 버블링한다는 의미
 - 이벤트 캡처링은 DOM의 부모노드에서 자식노드로 전달되는 것
 - 이벤트 버블링은 DOM의 자식노드에서 부모노드로 전달되는 것

 ```
 <img src="images/img.png" id="cup">
 
 <script>
    var cup = document.getElementById("cup"); 
    // 포인터를 올리면 changePic()실행
    cup.addEventListener("mouseover", changePic);
    // 포인터를 내리면 originPic()실행
    cup.addEventListener("mouseout", originPic); 

    function changePic(){
        cup.src = "images/img2.png";
    }
    func1tion originPic(){
        cup.src = "images/img.png";
    }
 </script>
 ```

  ```
 <img src="images/img.png" id="cup">
 
 <script>
    var cup = document.getElementById("cup"); 
    cup.addEventListener("mouseover", function(){
        cup.src = "images/img2.png";
    });
    cup.addEventListener("mouseout", function(){
        cup.src = "images/img.png";
    }); 
 </script>
 ```


 > CSS속성에 접근하기

 ```
 //기본형
 document.요소명.style.속성명

 document.getElementById("desc").style.color = "blue";
 ```
 - background-color나 border-radius처럼 중간에 하이픈이 있는 속성은 backgroundColor나 borderRadius처럼 두 단어를 합쳐 사용한다.