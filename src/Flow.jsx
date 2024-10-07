import { createSignal, For, Index } from "solid-js";

export default function Flow() {
    const [users, SetUsers] = createSignal([
        { id: "1", name: "Pero Perić"},
        { id: "2", name: "Pero Perić"},
        { id: "3", name: "Pero Perić"},
        { id: "4", name: "Pero Perić"},
    ]);

    return (
        <div>
            <ul>
                <For each={users()}>
                    {
                        (user, i) =>
                            <li>
                                /{i}/ {user.id}: {user.name}
                            </li>
                    }
                </For>
            </ul>
            <ul>
                <For each={users()}>
                    {
                        (user, i) =>
                            <li>
                                /{i}/ {user.id}: {user.name}
                            </li>
                    }
                </For>
            </ul>
            </div>
    );
}