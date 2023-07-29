> #### Do it! HTML+CSS+자바스크립트 웹 표준의 정석
 ### [내장객체-Array객체]
 > Array 객체

 배열을 다루는 내장 객체. 
 ```
 //Array객체 인스턴스 만들기 - 초깃값X
 var numbers = new Array();
 var numbers = new Array(4);

 // 초깃값O
 var numbers = ["one", "two", "three", "four"];
 var numbers = Array("one","two","three","four");
 ```

 - length 프로퍼티 사용 예시
 ```
 var numbers = ["one", "two", "three", "four"];

 for(i=0; i<numbers.length; i++){
    (..생략..)
 }
 ```

 >Array 객체 메서드
 - concat: 기존 배열에 요소를 추가해 새로운 배열을 만듦.
 ```
 var nums = [1,2,3];
 var chars = ["a","b","c","d"];

 var numsChars = nums.concat(chars);
 documnet.write(numsChars);

 // 1,2,3,a,b,c,d
 ``` 
 - every: 배열의 모든 요소가 주어진 함수에 대해 참이면 true 반환, 그렇지 않으면 false 반환
 - filter: 배열 요소 중에서 주어진 필터링 함수에 대해 true인 요소만 골라 새로운 배열을 만듦
 - forEach: 배열의 모든 요소에 대해 주어진 함수 실행
 - indexOf:주어진 값과 일치하는 값이 있는 배열 요소의 첫 인덱스를 찾음.
 - join: 배열 요소를 문자열로 합침. 이때 구분자를 지정할 수 있음.
 ```
 var nums = [1,2,3];
 var chars = ["a","b","c","d"];

 var string1 = nums.join();
 var string2 = chars.join('/');

 // 1,2,3
 // a/b/c/d
 ```
 - push: 배열의 맨 끝에 새로운 요소를 추가한 후 새로운 length를 반환함
 - unshift: 배열의 시작 부분에 새로운 요소 추가
 ```
 var nums = [1,2,3];

 var ret1 = nums.push(4,5);
 var ret2 = nums.unshift(0);

 // 1,2,3,4,5
 // 0,1,2,3,4,5 
 ```
 - pop: 배열의 마지막 요소를 꺼내 그 값을 결과값으로 반환
 - shift: 배열에서 첫 번째 요소를 꺼내 그 값을 결과값으로 반환
 ```
 var chars = ["a", "b", "c", "d"];

 var ppoped1 = chars.pop();
 var ppoped2 = chars.shift();

 // d꺼냄. a,b,c
 // a꺼냄. b,c
 ```
 - splice: 배열에 요소를 추가하거나 삭제함
 ```
 - 인수 1개
 var numbers = [1,2,3,4,5];
 var newNumbers = numbers.splice(2);
 document.write(newNumbers);
 document.write(numbers);
 //3,4,5
 //1,2

 - 인수 2개
 var chars = ["a","b","c","d"];
 var newChars = chars.splice(2,1);
 document.write(newChars);
 document.write(chars);
 // c
 // a,b,d
 
 - 인수 3개 이상
var newChars2 = chars.splice(2,1,"e");
document.write(newChars2);
document.write(chars);
// b
// a,b,c
 ```
 - slice: 배열에서 특정한 부분만 잘라냄
 ```
 - 인수 1개
 var colors = ["red", "green", "blue", "white", "black"];

 var colors2 = colors.slice(2);
 document.write(colors2);
 //blue, white, black



 - 인수 2개
 var colors = ["red", "green", "blue", "white", "black"];

 var colors3 = colors.slice(2,4);
 document.write(colors3);
 //blue, white
 ```
 >> splice와 slice
 : slice는 기존 배열에 영향을 주지 않지만, splice는 요소를 추가 삭제하면 기존 배열 자체가 수정됨.
 - reverse: 배열의 배치 순서를 역순으로 바꿈.
 - sort: 배열 요소를 지정한 조건에 따라 정렬
 - toString: 배열에서 지정한 부분을 문자열로 반환. 이때 각 요소는 쉼표로 구분
