import { useRef } from 'react';

const FormResetRef = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    function handleReset() {
        nameRef.current.value = '';
        emailRef.current.value = '';
    }

    return (
        <div className="card">
            <input type="text" placeholder='Name' ref={nameRef} />
            <input email="email" placeholder='Email...' ref={emailRef} />
            <button onClick={handleReset}>Reset</button>

        </div>
    )

}

export default FormResetRef