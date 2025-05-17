import { useEffect } from "react";

function useEffectRevival() {
    useEffect(() => {
        console.log("Component Mounted")
    }, [])
    return <h1>Hello</h1>
}

export default useEffectRevival