//Now we are using Dynamic method for fibonacci

function dynamicFibo(n){
    var result = [];
    for(var i = 0; i <= n; i++){
        result[i] = 0;
    }

    if(n == 1 || n == 2){
        return 1;
    }
    else {
        result[1] = 1;
        result[2] = 2;
        for(var i = 3; i <= n; i++){
            result[i] = result[i-1] + result[i-2];
        }
        return result[n-1];
    }
}

console.log(dynamicFibo(10)) // display 55

/// using itterative way:

function iterativeFib(n){
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for(var i = 2; i < n; i++){
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}

console.log(iterativeFib(10));