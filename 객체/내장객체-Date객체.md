> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [내장객체-Date객체]
 > Date 객체
 
 현재 날짜와 시간을 출력하거나 달력을 표시할 수도 있고, 특정일까지 얼마 남았는지 알려주는 등 여러 가지로 응용할 수 있다.


> Date객체 인스턴스 만들기
  ```
  // 현재 날짜 나타내기
 new Date;

 // 특정 날짜 나타내기
 new Date("2023-07-01");

 // 특정 날짜와 시간 나타내기
 new Date("2023-07-01T18:00:00);
 ```

 > 자바스크립트 날짜, 시간 입력 방식
 - YYYY-MM-DD 형식

 - YYYY-MM-DDTHH 형식  
 : 연도, 월, 일 다음에 시간을 표시하는 형식  
 : 맨 끝에 Z를 붙이면 UTC(국제표준시)로 표시됨.
 
 - MM/DD/YYYY 형식
 
 - 이름형식  
 : 월은 January처럼 전체를 사용하거나 Jan과 같이 줄여 사용 할 수 있다.  
 : 맨 앞에 요일(Mon)을 붙여 사용 할 수도 있다.
 ```
 new Date("Mon Jan 20 20202 15:0041 GMT+0900 (대한민국 표준시)")
 ``` 

 > Date객체 메서드
>> 날짜/시간 정보 가져오기
- getFullYear(): 연도를 4자리 숫자로 표시
- getMonth(): 0~11 사이 숫자로 월 표시. 0부터 1월
- getDate(): 1~31 사이의 숫자로 일 표시
- getDay(): 0~6 사이 숫자로 요일 표시. 0부터 일요일, 6은 토요일
- getTime(): 1970년 1월 1일 자정 이후의 시간을 밀리초(1/1000초)로 표시
- getHours():0~23 사이의 숫자로 시 표시
- getMinutes():0~59 사이의 숫자로 분 표시
- getSeconds():0~59 사이의 숫자로 초 표시
- getMilliseconds(): 0~999 사이의 숫자로 밀리초 표시

>> 날짜/시간 설정하기
- setFullYear(): 연도를 4자리 숫자로 설정
- setMonth(): 0~11 사이의 숫자로 월 설정, 0부터 1월.
- setDate(): 1~31사이의 숫자로 일 설정
- setTime(): 1970년 1월 1일 자정 이후의 시간을 밀리초로 설정
- setHours(): 0~23 사이의 숫자로 시 설정
- setMinutes(): 0~59 사이의 숫자로 분 설정
- setSeconds(): 0~59 사이의 숫자로 초 설정
- setMilliseconds(): 0~999 사이의 숫자로 밀리초 설정

>> 날짜/시간 형식 바꾸기
- toLocaleString(): 현재 날짜와 시간을 현지 시간(local time)으로 표시
- toString(): Date 객체 타입을 문자열로 표시