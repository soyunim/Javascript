> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [문서 객체 모델(DOM)-노드 추가, 삭제]
 > 노드리스트

 DOM에서 새로운 노드를 만들어 추가하거나 삭제하려면 노드리스트를 사용해야 한다.

 DOM에 접근할 때 querySelectorAll()을 이용하면 노드를 한꺼번에 여러 개 가져올 수 있다. 이때 노드 정보를 여러 개 저장한 것이 `노드 리스트`이다.

 노드 리스트는 배열과 비슷해서 인덱스 번호로 특정 위치의 노드에 접근할 수 있다.
 ```
 EX)
 document.querySelectorAll("li")[1]
 ```

<br>

 > 텍스트 노드를 사용하는 새로운 요소 추가
 
 1. 요소 노드 만들기 - createElement()메서드
 ```
    document.createElement(노드명)
 ```
 
 2. 텍스트 노드 만들기 - createTextNode()메서드
 ```
    document.createTextNode(텍스트);
 ```
 
 3. 자식 노드 연결하기 - appendChild()메서드
 ```
    부모노드.appendChild(자식노드)
 ```

 4. 전체 소스 코드

 ```
 <div id="container">
    <h1>DOM</h1>
    <a href="#" onclick="addP(); this.onclick='';">더보기</a>
    <div id="info"></div>
 </div>

 <script>
    function addP(){
        var newP = document.createElement("p");
        var txtNode = document.createTextNode("DOM is document object model");
        newP.appendChild(txtNode);
        document.getElementById("info").appendChild(newP);
    }
 </script>
 ```
 
 > 속성값이 있는 새로운 요소 추가
 1. 요소 노드 만들기 - createElement()메서드
 2. 속성 노드 만들기 - createAttribute()메서드
```
    document.createAttribute(속성명)
```
 3. 속성 노드 연결하기 - setAttributeNode()메서드
```
    요소명.setAttributeNode(속성노드)
```
 4. 자식 노드 연결하기 - appendChild()메서드
 5. 전체 소스 코드
 ```
 <div id="container">
    <h1>DOM</h1>
    <a href="#" onclick="addP(); this.onclick='';">더보기</a>
    <div id="info"></div>
 </div>

 <script>
    function addContents(){
        var newImg = document.createElement("img");
        var srcNode = document.createAttribute("src");
        var altNode = document.createAttribute("alt");
        srcNode.value = "images/dom.jpg";
        altNode.value = "DOM 예제 이미지";
        newImg.setAttributeNode(srcNode);
        newImg.setAttributeNode(altNode);

        document.getElementById("info").appendChild(newImg);
    }
    
 </script>
 ```

 > 노드 삭제하기

parentNode 프로퍼티로 부모 노드를 찾아서 부모 노드에서 삭제함.

 - parentNode 프로퍼티  
 : 현재 노드의 부모 노드에 접근해 부모 노드의 요소 노드를 반환함
 ```
 //기본형
 노드.parentNode

 //예시
 document.querySelectorAll("li")[1].parentNode
 >> <ul id="example"> ... </ul>
 ```

 - removeChild() 메서드  
 : 자식 노드를 삭제하는 역할.
 ```
 //기본형
 부모노드.removeChild(자식노드)
 ```