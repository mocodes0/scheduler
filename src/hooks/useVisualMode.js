import { useState } from 'react'
 


export default function useVisualMode (initial)  {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) { 
    if (replace === true){
      setMode(newMode)
      
    } else {   
      setMode(newMode)
      setHistory(history => ([...history, newMode]))
    }
   }

  function back() { 
    if (history.length === 1) {
      setMode(history[0])
    } else {
     history.pop()
     setMode(history[history.length -1])
   }
 }


  return { mode, transition, back };
}

 
export {useVisualMode}

  
  
// Create a transition function within useVisualMode that will take in a new mode and update the mode state with the new value.


// function useCustomHook() {
//   function action() {}

//   return { action };
// }

