import './App.css';
import React from 'react';



function TodoApp(props) {

  const [play, setPlay] = React.useState(false);
  
  return (        
    <div className="App">
          <button onClick={() => setPlay(true)}>Play</button>

    </div>
      
    );


    
}


 
  export default TodoApp;
