function factor(n) {
    return (n != 1) ? n * factor(n - 1) : 1;
}

alert(factor(prompt('Enter the number: ')));
