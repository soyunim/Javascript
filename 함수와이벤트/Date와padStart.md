## Date
- new Date() : 오늘 날짜
- getDate() : 일
- getDay() : 요일
- getHours() 
- getMinutes()
- getSeconds()

등 다양한 함수가 있다.

## padStart, padEnd
```
padStart(길이, 길이가 아니면 앞에 추가 할 내용);
padEnd(길이, 길이가 아니면 뒤에 추가 할 내용);
```
문자열이 길이만큼 되지 않으면 앞이나 뒤에 해당 길이만큼 되기 위해 추가 할 내용을 써준다.
```
//예시

const string = "hello";

hello.padStart(10, "x");
hello.padEnd(10, "x");

// xxxxxhello
// helloxxxxx
```

## Date와 padStart를 함께 사용하기
```
const clock = document.querySelector("h1");

function getTime(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hour}:${minute}:${second}`;
}

getTime(); // 0초에는 시간이 뜨지 않게 되어있어 setInterval전에 한 번 실행해준다.
setInterval(getTime,1000);
```
getHours, getSeconds등의 결과는 String이 아닌 number이고, padStart는 String에 사용하는 것이므로 시,분,초를 가져오는 부분에 String()을 사용해 문자열 처리 해주었다. 