## classList
Html태그에 이미 class가 존재할 때, className을 사용하면 기존에 유지하고 싶던 class이름이 사라진다.
그럴 때 classList 를 사용하면 좋다.

```
<h1 class="hidden">Hello World!</h1>

h1.classList.add("class1");
=> <h1 class="hidden class1">Hello World!</h1>

h1.classList.remove("hidden");
=> <h1 class="class1">Hello World!</h1>
```


## toggle
만약 html태그에 해당 class가 이미 들어있다면 remove를, 들어있지 않다면 add를 해주고 싶을 때 사용하기 좋은 메서드

```
<h1 class="hidden">Hello World!</h1>

// 기존 작성법
if(h1.classList.contains("hidden")){
    h1.classList.remove("hidden");
}
else{
    h1.classList.add("hidden");
}


// toggle() 사용
h1.classList.toggle("hidden");
```