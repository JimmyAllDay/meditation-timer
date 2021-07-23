
import './App.css';
import Header from "./Components/Header"
import Timer from "./Components/Timer"

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
    </div>
  );
}

export default App;

// Feature set to build out:

/* 

Create a feature to set a 'lead in' time for the timer, to allow the user to get comfortable before commencing practice

Add the ability to play different sounds using selection menus

Include feature to randomise the sounds for the commencement and conclusion of practice

Add a text display that shows a 'mantra' the meditator can recite silently during their meditation practice.
This will aid in the use of meditation modalities such as loving kindness.

Add an input field for the user to capture 'mantras' they wish to retain and use in their meditation practices.
Then, make API call to google voice api at regular intervals, to remind people of what it is they're meditating about.

Possible: Add the ability for the user to play a sound during meditation practice, for example, the sound of waves crashing.

Add a menu to activate settings

Make the app into a chrome browser extension with an alarm function to remind the user when to take breaks to meditate

*/


