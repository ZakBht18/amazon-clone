import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
