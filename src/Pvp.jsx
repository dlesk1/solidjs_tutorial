import { createSignal, mergeProps } from "solid-js";


export default function Pvp() {
    const [name, setName] = createSignal();

    return(
        <>
            <Local greeting="Dobar dan" name="Pero" />
            <Local name="Jozo" />
            <Local greeting="Bogdaj" />
            <Local name={name()} />

            <button onClick={() => setName("Jura")}>Promijeni</button>
        </>
    );
}

function Local(props) {
    const merged = mergeProps({greeting: "Bok", name: "Ivan"}, props)

    //const merged = {...props, ...{name: "Ivan", greeting: "Bok"}, ...props};

    return(
        <h1>
            {props.greeting || "Bok"} {props.name || "Ivan"}
        </h1>
    )
}