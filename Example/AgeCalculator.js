const age = parseInt(prompt("태어난 연도를 입력하세요. ex:2023"));
            
if(isNaN(age)){
    prompt("숫자만 입력하세요.")
}

alert("당신의 나이는 올해 "+(2023-age)+"세 입니다.");