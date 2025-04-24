import { useState } from 'react';


function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({ name: '', email: '' });
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your Name'
                />

                <input name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                />

                <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h3>submitted Data</h3>
                    <p>Name:{submittedData.name}</p>
                    <p>Email:{submittedData.email}</p>
                </div>
            )

            }

        </div>
    );

}

export default Form;