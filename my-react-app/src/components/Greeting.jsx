function Greeting({ user, onGreet }) {

    if (!user) return <h1>No user Data provided</h1>

    const { name, age, job } = user;

    return (
        <div className="card">
            <h1>Hello, {name}, and I am {age} years old and I work as a {job}</h1>
            <button onClick={onGreet}>Press me</button>
        </div>
    )
}

export default Greeting;