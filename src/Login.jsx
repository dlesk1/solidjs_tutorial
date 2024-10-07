import { createSignal, Show } from "solid-js"

export default function Login() {
    const [loggedin, SetLoggedin] = createSignal(false);
    const toggle = () => SetLoggedin(!loggedin());

    return (
        <div>
            <show when={loggedin()}
            fallback={<button onClick={toggle}>Log in</button>}>
            <button onClick={toggle}>Log in</button>
            </show>
        </div>
    )
}