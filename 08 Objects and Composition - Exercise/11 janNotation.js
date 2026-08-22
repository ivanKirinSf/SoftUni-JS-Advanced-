function solve(input) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    const stack = [];

    for (const element of input) {
        if (typeof element === 'number') {
            stack.push(element);
        } else {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            const second = stack.pop();
            const first = stack.pop();

            const result = operations[element](first, second);
            stack.push(result);
        }
    }
    
    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log('Error: too many operands!');
    }
}


janNotation([
 5,
 3,
 4,
 '+'
]
)
