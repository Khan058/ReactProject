import "./App.css";
import Body from "./Components/Body";
import Headers from "./Components/Headers";

function App() {
  return (
    <div className="App">
      <header>
        <Headers />
      </header>
      <main>
        <Body />
      </main>
    </div>
  );
}

export default App;
