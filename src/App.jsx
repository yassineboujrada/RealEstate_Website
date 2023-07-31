import Company from "./components/Companies/Company";
import Contact from "./components/Contact/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
