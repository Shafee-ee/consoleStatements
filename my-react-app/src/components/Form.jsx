import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <form className="card">
            <input name="name"
                value={form.name}
                onChange={handleChange}
                placeholder='Enter your name'

            />

            <input name="email"
                value={form.email}
                onChange={handleChange}
                placeholder='Enter your email' />
            <p>{form.name}-{form.email}</p>

        </form>
    )
}

export default Form;