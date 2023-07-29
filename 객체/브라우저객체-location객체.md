> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [브라우저 관련 객체-location객체]
 > location 객체

 브라우저의 주소 표시줄과 관련됨.  
 location 객체에는 현재 문서의 URL 주소 정보가 들어 있는데 이 정보를 편집하면 현재 브라우저 창에서 열어야 할 사이트나 문서를 지정할 수 있음.

 > location 객체 프로퍼티
 - hash: URL 중에서 #로 시작하는 해시 부분의 정보를 담고 있음
 - host: URL의 호스트 이름과 포트 번호를 담고 있음 
 - hostname: URL의 호스트 이름이 저장됨
 - href: 전체 URL. 이 값을 변경하면 해당 주소로 이동할 수 있음.
 - pathname: URL 경로가 저장됨
 - port: URL의 포트 번호를 담고 있음
 - protocol: URL의 프로토콜을 저장함
 - password: 도메인 이름 앞에 username과 password를 함께 입력해 접속하는 사이트의 URL일 경우에 password정보를 저장함
 - search: URL중에서 ?로 시작하는 검색 내용을 저장함
 - username: 도메인 이름 앞에 username을 함게 입력해 접속하는 사이트의 URL일 경우에 username 정보를 저장함

 > location 객체 메서드
 - assign(): 현재 문서에 새 문서 주소를 할당해서 새 문서를 가져옴
 - reload(): 현재 문서를 다시 불러옴
 - replace(): 현재 문서의 URL을 지우고 다른 URL의 문서로 교체함
 - toString(): 현재 문서의 URL을 문자열로 반환함 