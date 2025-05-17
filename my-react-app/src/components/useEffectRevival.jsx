import { useEffect } from "react";

function UseEffectRevival() {
    useEffect(() => {
        console.log("Component Mounted")
    }, [])
    return <h1>Hello</h1>
}

export default UseEffectRevival