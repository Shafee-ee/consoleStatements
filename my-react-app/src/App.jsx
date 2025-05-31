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
import SearchMovies from './components/Searchmovie'; // do again 1 2 3 
import UseRef from './components/UseRef';
import AutoFocus from './components/AutoFocus';
import StopWatchUseRef from './components/StopWatchUseRef';
import ClickCounterUseRef from './components/ClickCountUseRef';
import PreviousValue from './components/PreviousValue';
import FocusInput from './components/FocusInput'
import FormResetRef from './components/FormResetRef' //do again 
import TrackInputFieldChange from './components/TrackInputFieldChange' // do again 
import MeasureDiv from './components/MeasureDiv' // do again 
import WindowWidthUseRef from './components/WindowWidthUseRef' // do again 
import UseEffectRevival from './components/UseEffectRevival';
import RefExample from './components/RefExample';
import PP from './components/RefScrfolling';
import MeasureBox from './components/MeasureBox';
import VideoPlayer from './components/VideoPlayer';
import ClickCounterUseRef2 from './components/ClickCounterUseRef2';

import ReduxCounter from './components/ReduxCounter'
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

      <hr />
      <SearchMovies />
      <hr />

      <UseRef />
      <AutoFocus />
      <StopWatchUseRef />
      <ClickCounterUseRef />
      <PreviousValue />
      <FocusInput />
      <FormResetRef />
      <TrackInputFieldChange />
      <MeasureDiv />
      <WindowWidthUseRef />
      <UseEffectRevival />
      <hr />
      <RefExample />

      <hr />
      <PP />

      <hr />
      <MeasureBox />

      <hr />
      <VideoPlayer />

      <hr />
      <ClickCounterUseRef2 />

      <hr />

      <  ReduxCounter />
    </div >


  )
}

export default App
