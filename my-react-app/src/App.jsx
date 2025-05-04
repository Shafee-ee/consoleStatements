import Form from './components/Form';
import Todolist from './components/Todolist';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Welcome from './components/Welcome';
import TimerComponent from './components/TimerComponent';
import WindowWidth from './components/WindowWidth';
import Fetchthen from './components/Fetchthen';
import Fetchasync from './components/Fetchasync';
import DebouncedSearch from './components/DebouncedSearch';
import DebouncedApi from './components/DebouncedApi';
import SearchMovies from './components/Searchmovie';
import UseRef from './components/UseRef';
import AutoFocus from './components/AutoFocus';
import StopWatchUseRef from './components/StopWatchUseRef';
import ClickCounterUseRef from './components/ClickCountUseRef';
import PreviousValue from './components/PreviousValue';
import FocusInput from './components/FocusInput'
import FormResetRef from './components/FormResetRef'
import TrackInputFieldChange from './components/TrackInputFieldChange'
import MeasureDiv from './components/MeasureDiv'

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

      <WindowWidth />
      <Fetchthen />
      <Fetchasync />
      <DebouncedSearch />
      <DebouncedApi />
      <SearchMovies />
      <UseRef />
      <AutoFocus />
      <StopWatchUseRef />
      <ClickCounterUseRef />
      <PreviousValue />
      <FocusInput />
      <FormResetRef />
      <TrackInputFieldChange />
      <MeasureDiv />

    </div >
  )
}

export default App
