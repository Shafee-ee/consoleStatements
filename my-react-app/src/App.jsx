import Form from './components/Form';
import Todolist from './components/Todolist';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Welcome from './components/Welcome';
import TimerComponent from './components/TimerComponent';


import './App.css'

function App() {

  const user = {
    name: "Shafee",
    age: 32,
    job: "Engineer"
  };

  function handleGreet() {
    alert("Greeting triggred from APP!")
  }

  return (
    <div>
      <h1> React is Modular  </h1>
      <Form />
      <Todolist />
      <Greeting user={user} onGreet={handleGreet} />
      <Card title="User Info">
        <p>Name:Shafee</p>
        <p>Job:Engineer</p>
      </Card>
      <Card title="Hobbies">
        <ul>
          <li>Coding</li>
          <li>Gaming</li>
        </ul>
      </Card >

      <Welcome name="shafee" age="atom" />

      <UseEffect />
    </div >
  )
}

export default App
