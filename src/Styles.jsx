import { createSignal } from "solid-js";
import styles from "./Styles.module.css"

export default function Styles() {

    const color = "blue";

    const[num, setNum] = createSignal(0);
    const[active, setActive] = createSignal("");

    setInterval(() =>  {
        setNum((num() + 1) % 255);
    },1);

    return (
        <div>
            <div style="background-color:red;">Obični stilovi</div>
            <div style={{"background-color": `${color}`}}>Napredni stilovi</div>
            <div style={{"background-color": `rgb(${num()},${num()},${num()})`}}>Još napredniji stilovi</div>
            <div class={styles.test}>PRimjena stila</div>
            <div classList={{ [styles.active]: active() === true, [styles.passive]: active() === false}}>Dinamički stilovi</div>
            <button onClick={() => {setActive(!active())}}>Promijeni</button>
        </div>
    );
}