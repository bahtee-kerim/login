import './App.css';
import Home from "./Home";
import Profile from './Profile';
import { useSelector } from "react-redux";
import { selectName } from "./app/reduxSlice";


function App() {

  const user = useSelector(selectName);

  return (
  
    <div className="app">
      {user.name === 'developer21' && user.password === '123456' ? 
      <Profile/> : <Home/>}
    </div>
  
  );
}
 
export default App;
