import './App.css';
import Profile from "./Profile";
import Home from "./Home";
import { useSelector } from "react-redux";
import { selectName } from "./app/reduxSlice";


function App() {

  const user = useSelector(selectName);

  return (
  
    <div className="App">
      {user.name === 'developer21' && user.password === '123456' ?
      <Profile/> : <Home/>} 
    </div>
  
  );
}

export default App;
