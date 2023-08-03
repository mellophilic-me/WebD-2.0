import React, {useState} from "react";
import data from './data';
import Workshops from "./components/Workshops";

function App() {

  const [ws, setws] = useState(data);
  function showworkshop(id){
    const newWorkshops =ws.filter(tour => tour.id === id);
    setws(newWorkshops);
  }


  return (
    <div className="App">
      <Workshops ws={ws} showworkshop={showworkshop}/>
    </div>
  );
}

export default App;