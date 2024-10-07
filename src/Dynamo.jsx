import { createSignal, For, onCleanup, onMount } from "solid-js"
import { Dynamic } from "solid-js/web";

const Red = () => <p style="background-color: red;">Crvena</p>
const Blue = () => <p style="background-color: blue; color:white;">Plava</p>
const Green = () => <p style="background-color: green;">Zelena</p>
const Violet = () => <p style="background-color: violet;">Ljubičasta</p>

function Something() {
    onMount(() => {
        console.log("Komponenta je stvorena!");
    })

    onCleanup(() => {
        console.log("Komponenta je uništena!");
    })

    return(
        <div>
            <h1>I am something</h1>
        </div>
    );
}

const options = {
    red: Red,
    blue: Blue,
    green: Green,   
    violet: Violet,
    something: Something,
}

const keysAsArrays = Object.keys(options);

export default function Dynamo() {
    const [selected, SetSelected] = createSignal("red");

    return(
        <div>
            <select value={selected()} onInput={e => SetSelected(e.currentTarget.value)}>
                <For each={keysAsArrays}>{
                    (color) => <option value={color}>{color}</option>}
                </For>  
            </select>

            <Dynamic component={options[selected()]}></Dynamic>
        </div>
    )
}