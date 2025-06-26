// import Form from './components/Form';
import Todolist from './components/Todolist';
// import Greeting from './components/Greeting';
import Card from './components/Card';
import Welcome from './components/Welcome';
// import TimerComponent from './components/TimerComponent';
// import WindowWidth from './components/WindowWidth';
// import Fetchthen from './components/Fetchthen';
// import Fetchasync from './components/Fetchasync';
// import DebouncedSearch from './components/DebouncedSearch';
// import DebouncedApi from './components/DebouncedApi';
import SearchMovies from './components/Searchmovie'; // do again 1 2 3 
// import UseRef from './components/UseRef';
// import AutoFocus from './components/AutoFocus';
import StopWatchUseRef from './components/StopWatchUseRef';
import ClickCounterUseRef from './components/ClickCountUseRef';
// import PreviousValue from './components/PreviousValue';
// import FocusInput from './components/FocusInput'
// import FormResetRef from './components/FormResetRef' //do again 
// import TrackInputFieldChange from './components/TrackInputFieldChange' // do again 
// import MeasureDiv from './components/MeasureDiv' // do again 
// import WindowWidthUseRef from './components/WindowWidthUseRef' // do again 
// import UseEffectRevival from './components/UseEffectRevival';
// import RefExample from './components/RefExample';
// import PP from './components/RefScrfolling';
// import MeasureBox from './components/MeasureBox';
import VideoPlayer from './components/VideoPlayer';
import ClickCounterUseRef2 from './components/ClickCounterUseRef2';

// import ReduxCounter from './components/ReduxCounter'

// import AuthDemo from './components/AuthDemo';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Home from './pages/Home';
import StickyNotes from './pages/StickyNotes';
import ToggleButton from './components/ToggleButton';
import ToggleSaveLocale from './components/ToggleSaveLocale';
import UseMemoFilter from './components/UseMemoFilter';

import AppLayout from './layouts/AppLayout';
import DarkMode from './components/DarkMode';
import FetchDataFromFile from './components/FetchDataFromFile';
import UseRef_ex1 from './components/UseRef_ex1';
import UseRef_focus from './components/UseRef_focus';
import Pages from './components/Pages';
import UseRef_PrevValue from './components/UseRef_PrevValue'
import UseRef_Timer from './components/UseRef_Timer'
import AutoFocusParagraph from './components/AutoFocusParagraph';
import HowManyClicks from './components/HowManyClicks';
import UpdateTitle from './components/UpdateTitle';
import TimerComponentInt from './components/TimerComponentInt';
import NameList from './components/NameList';
import AutoFocusInt from './components/AutoFocusInt';
import NameAppInt from './components/NameAppInt';
import ExpensiveCalc from './components/ExpensiveCalc';

function App() {

  // const user = {
  //   name: "Shafee",
  //   age: 32,
  //   job: "Engineer"
  // };

  // function handleGreet() {
  //   alert("Greeting triggred from APP!")
  // }

  const router = createBrowserRouter(
    [
      {
        element: <AppLayout />,
        children: [
          { path: "ExpensiveCalc", element: <ExpensiveCalc /> },
          { path: "NameAppInt", element: <NameAppInt /> },
          { path: "AutoFocusInt", element: <AutoFocusInt /> },
          { path: "NameList", element: <NameList /> },
          { path: "TimerComponentInt", element: <TimerComponentInt /> },
          { path: "UpdateTitle", element: <UpdateTitle /> },
          { path: "HowManyClicks", element: <HowManyClicks /> },
          { path: "Pages", element: <Pages /> },
          { path: "UseMemoFilter ", element: <UseMemoFilter /> },
          { path: "AutoFocusParagraph", element: <AutoFocusParagraph /> },
          { path: "UseRef_Timer", element: <UseRef_Timer /> },
          { path: "UseRef_PrevValue", element: <UseRef_PrevValue /> },
          { path: "UseRef_focus", element: <UseRef_focus /> },
          { path: "UseRef_ex1", element: <UseRef_ex1 /> },
          { path: "/FetchDataFromFile", element: <FetchDataFromFile /> },
          { path: "/ClickCounterUseRef2", element: <ClickCounterUseRef2 /> },
          { path: "/DarkMode", element: <DarkMode /> },
          { path: "ToggleSaveLocale", element: <ToggleSaveLocale /> },
          { path: "/ToggleButton", element: <ToggleButton /> },
          { path: "/about", element: <About /> },
          { path: "/contact", element: <Contact /> },
          { path: "/products", element: <Products /> },
          { path: "/", element: <Home /> },
          { path: "/StickyNotes", element: <StickyNotes /> },
          { path: "/todoList", element: <Todolist /> },
          { path: "SearchMovies", element: <SearchMovies /> },
          { path: "StopWatchUseRef", element: <StopWatchUseRef /> },
          { path: "card", element: <Card /> },
          { path: "VideoPlayer", element: <VideoPlayer /> },
          { path: "Welcome", element: <Welcome /> },
          { path: "ClickCounterUseRef", element: <ClickCounterUseRef /> }

        ],
      },
    ]
  )


  return (
    <div>
      {/* <h1> React is Modular  </h1>
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
      <hr />
      <AuthDemo /> */}

      <RouterProvider router={router} />
    </div >


  )
}

export default App
