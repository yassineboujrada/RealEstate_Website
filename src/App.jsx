import Header from "./components/Header/Header";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<PrivateRoutes />}>
    //         <Route path="/" element={<Root />}>
    //             <Route path="home" element={<Home />} />
    //             <Route path="aboutus" element={<About />} />
    //         </Route>
    //     </Route>
    //     <Route path="*" element={<h1>mmmmm</h1>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
