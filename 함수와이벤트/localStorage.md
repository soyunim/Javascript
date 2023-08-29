## localStorage
로그인 같은 기능을 간단히 구현할 때 LocalStorage에 해당 Key값과 value값을 추가하거나 뺄 수 있다.

```
<input type="text" />

const loginInput = document.querySelector("input");
const name = loginInput.value;

// 추가
localStorage.setItem("username",name);
// value얻기
localStorage.getItem("username");
// 값 삭제
localStorage.removeItem("username");
```