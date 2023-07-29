> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [브라우저 관련 객체-window객체]
 > window 객체

 window객체는 웹 브라우저의 상태를 제어하며 자바스크립트의 최상위에 있어 자바스크립트의 모든 객체는 window객체 안에 포함된다.

 > window 객체 프로퍼티

window객체의 프로퍼티는 주로 웹 브라우저 창의 정보를 가져오거나 값을 바꿀 때 사용한다. 프로퍼티를 사용하려면 window.fullScreen처럼 프로퍼티 이름 앞에 'window.'를 붙인다.

 - document: 브라우저 창에 표시된 웹 문서에 접근 가능
 - frameElement: 현재 창이 다른 요소 안에 포함되어 있을 경우 그 요소를 반환하고, 반대로 포함되어 있지 않으면 null을 반환
 - innerHeight: 내용 영역의 높이를 나타냄
 - innerWidth: 내용 영역의 너비를 나타냄
 - localStorage: 웹 브라우저에서 데이터를 저장하는 로컬 스토리지를 반환함
 - location: window 객체의 위치 또는 현재 URL을 나타냄
 - name: 브라우저 창의 이름을 가져오거나 수정함
 - outerHeight: 브라우저 창의 바깥 높이를 나타냄
 - outerWidth: 브라우저 창의 바깥 너비를 나타냄
 - pageXOffset: 스크롤 했을 때 수평으로 이동하는 픽셀 수로 scrollX와 같음
 - pageYOffset: 스크롤 했을 때 수직으로 이동하는 픽셀 수로 scrollY와 같음
 - parent: 현재 창이나 서브 프레임의 부모
 - screenX: 브라우저 창의 왼쪽 테두리가 모니터 왼쪽 테두리에서 떨어져 있는 거리를 나타냄
 - screenY: 브라우저 창의 위쪽 테두리가 모니터 위쪽 테두리에서 떨어져 있는 거리를 나타냄
 - scrollX: 스크롤 했을 때 수평으로 이동하는 픽셀 수를 나타냄
 - scrollY: 스크롤 했을 때 수직으로 이동하는 픽셀 수를 나타냄 
 - sessionStorage: 웹 브라우저에서 데이터를 저장하는 세션 스토리지를 반환함


 > window 객체 메서드

window 객체 메서드는 대화 창을 표시하거나 브라우저 창의 크기나 위치를 알아내고 지정하는 등 웹 브라우저 창 자체와 관련된다.  
alert()문이나 prompt()문은 window객체의 메서드이므로 원래는 window.alert()라고 해야 하지만, window객체는 기본 객체이므로 'window.'를 생략하고 alert()만 사용해도 된다.  
마찬가지로 windwo 객체의 다른 메서드에서도 'window.'를 생략하여 사용한다.

 - alert(): 알림 창 표시
 - blur(): 현재 창에서 포커스 제거
 - close(): 현재 창 닫음
 ```
 window.close()
 ```
 - confirm(): 확인/취소 버튼이 있는 확인 창 표시
 - focus(): 현재 창에 포커스 부여
 - moveBy(): 현재 창을 지정한 크기만큼 이동
 - moveTo(): 현재 창을 지정한 좌표로 이동
 - open(): 새로운 창 열기
 ```
 window.open(경로, 창 이름, 창 옵션)

 //창 이름 지정하면 새로고침해도 해당 팝업창에만 내용이 나타남.
 //창 이름 미지정하면 새로고침 시 똑같은 팝업창이 여러 번 나타남.
 ```
 - postMessage(): 메세지를 다른 창으로 전달
 - print(): 현재 문서를 인쇄
 - prompt(): 프롬프트 창에 입력한 텍스트를 반환
 - resizeBy(): 지정한 크기만큼 현재 창의 크기 조절
 - resizeTo(): 동적으로 브라우저 창의 크기 조절
 - scroll(): 문서에서 특정 위치로 스크롤
 - scrollBy(): 지정한 크기만큼씩 스크롤
 - scrollTo(): 지정한 위치까지 스크롤
 - sizeToContent(): 내용에 맞게 창의 크기를 맞춤
 - stop(): 로딩을 중지함