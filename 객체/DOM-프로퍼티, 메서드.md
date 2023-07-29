> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [문서 객체 모델(DOM)-프로퍼티,메서드]

 > 접근 메서드
 - ID선택자로 접근하기
 ```
 // 기본형
 요소명.getElementById("id명")

 document.getElementById("heading")
 ```

 - Class값으로 접근하기
 ```
 // 기본형
 요소명.getElementsByClassName("class명")

 document.getElementsByClassName("bright")
 ```

 - 태그 이름으로 접근하기
 ```
 // 기본형
 요소명.getElementsByTagName("태그명")

 document.getElementsByTagName("p")
 ```

- 다양한 방법으로 접근하기  
 ```
 // 기본형
 노드.querySelector(선택자)
 노드.querySelectorAll(선택자 또는 태그)

 querySelector("#heading")
 querySelectorAll(".bright")
 ```

> 차이점

getElementById(), getElementsByClassName(), getElementsByTagName() 메서드 반환값은 HMTLCollection객체이다. 여기에는 요소('p'나 'a'형태)만 저장된다.

DOM트리의 텍스트, 속성 노드까지 자유롭게 제어하려면 querySelector(), querySelectorAll() 메서드를 하용해야 한다.

id 선택자처럼 값이 하나라면 querySelector(), class나 태그 이름을 사용해 여러 값이 한꺼번에 반환 될 경우 querySelectorAll()을 사용한다.  
만약 querySelector()에서 class명으로 접근할 경우 class이름을 사용한 여러 요소 중 첫 번째 요소만 반환한다.

querySelector(), querySelectorAll() 반환값은 노드이거나 노드 리스트이다.


> 내용 수정 프로퍼티
- innerText  
: 텍스트 내용 표시

- innerHTML  
: HTML태그까지 반영하여 표시

```
//기본형
요소명.innerText = 내용
요소명.innerHTML = 내용
```


> 속성 가져오거나 수정하는 메서드
- getAttribute()  
: 속성을 가져올 때 사용

- setAttribute()  
: 속성값을 수정하거나 추가할 때 사용

```
//기본형
getAttribute("속성명")
setAttribute("속성명", "값")
```