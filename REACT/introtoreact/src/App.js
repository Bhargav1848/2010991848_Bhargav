import logo from "./logo.svg";
import "./App.css";
import First from "./Components/First";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Welcome from "./Components/Welcome";
function App() {
  return (
    <div className="App">
      {/* <First/> */}
      <div style={{ gap: "50px", display: "flex" }} id="task1">
        <Login />
        <Registration />
        <Welcome user="Bhargav" />
      </div>
    </div>
  );
}

export default App;
