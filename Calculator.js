const calculator = {
    plus: function(a,b){
        console.log(a+"+"+b+"="+(a+b));
    },
    minus: function(a,b){
        console.log(a+"-"+b+"="+(a-b));
    },
    divide: function(a,b){
        console.log(a+"/"+b+"="+(a/b));
    },
    multiply: function(a,b){
        console.log(a+"*"+b+"="+(a*b));
    },
    mod: function(a,b){
        console.log(a+"%"+b+"="+(a%b));
    },
    power: function(a,b){
        console.log(a+"**"+b+"="+(a**b));
    },
}

calculator.plus(5,2);
calculator.minus(5,2);
calculator.multiply(5,2);
calculator.divide(5,2);
calculator.mod(5,2);
calculator.power(5,2);