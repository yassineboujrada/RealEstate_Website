// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Home} from "@/components/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
