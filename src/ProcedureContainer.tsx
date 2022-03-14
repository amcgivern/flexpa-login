import { useFlexpaConfig } from "@flexpa/login";
import { useState } from 'react';
import { ProcedureList } from "./ProcedureList";

export function ProcedureContainer(): JSX.Element {
    const { state } = useFlexpaConfig();
    const [error, setError]: [error: string, setError: any] = useState("");

    if (!state.flexpaJwt) {
        setError("Invalid Flexpa JWT");
    }

    if (error !== "") {
        return <div> {error}</div>
    }

    return (
        <ProcedureList state={state} />
    )

}
