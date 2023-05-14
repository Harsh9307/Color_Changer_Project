import Square from "./Square";
import Input from "./Input";
import {useState} from 'react';




function App() {
  const [colorValue,setColorValue] = useState('')
  const [hexValue,setHexValue]=useState('')

  return (
    <div className="App">
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
      />
      <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
      />
    </div> 


        
          
        
        
      
  );
}

export default App;
