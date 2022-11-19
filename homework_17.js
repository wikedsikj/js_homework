function fib(n){
    alert(typeof(n));
    let f = [0, 1];
    if (n > 2) {
        for (let i = 2; i <= n; i++){
            f[i] = f[i-2] + f[i-1];
        }
        return f[n];
    }
    else if (n < 0) {
        n = (-1) * n;
        for(let i = 2; i <= n*2; i++){
           f[i] = f[i] = (f[i-2] + f[i-1]) * ((-1) ** (i));
        }
        return f[n*2];
    }
    
}

alert(fib(+prompt("Enter the n")))
