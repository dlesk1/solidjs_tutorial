import { createMemo, createSignal } from "solid-js"

function fibonaci(num) {
    if (num <= 1) return 1;
    return fibonaci(num-1) + fibonaci(num - 2);
}

export default function Counter2() {
    const [count, setCount] = createSignal(10);
    const fib = createMemo(() => {
        console.log("Računam!");
        return fibonaci(count());
    })

    return (
        <div>
            <button onClick={() => setCount(count() + 1)}>+ 1 </button>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div> {fib()} {fib()} {fib()} {fib()} {fib()} </div>
        </div>

    );
}