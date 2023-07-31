import Company from "./components/Companies/Company";
import Header from "./components/Header/Header";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
      </div>
      <Company />
    </div>
  );
}

export default App;
