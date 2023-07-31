import Company from "./components/Companies/Company";
import Header from "./components/Header/Header";
import Home from "./components/Home/home";
import Residence from "./components/Residence/Residence";
import Value from "./components/Values/Value";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
      </div>
      <Company />
      <Residence />
      <Value />
    </div>
  );
}

export default App;
