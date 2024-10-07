import { createEffect, createSignal } from "solid-js"

export default function Counter() {
    const[count, setCount] = createSignal(0);

    const doubleCount = () => count() * 2;

    createEffect(() => {
        console.log("Varijabal se promijenila na" + count());
        if (count() >= 10) {
            setCount(0);
        }
    });

    setInterval(() => {
        setCount(count() + 1);
    }, 1000);

    return (
        <div>
        Brojač : {count()} <br/>
        Dupli brojač : {doubleCount()}
        </div>
    )
}