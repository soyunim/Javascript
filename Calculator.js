const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    multiply: function(a,b){
        return a*b;
    },
    mod: function(a,b){
        return a%b;
    },
    power: function(a,b){
        return a**b;
    },
}

calculator.plus(5,2);
calculator.minus(5,2);
calculator.multiply(5,2);
calculator.divide(5,2);
calculator.mod(5,2);
calculator.power(5,2);