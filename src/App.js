
import Header2 from "./Components/Header2";
import News from "./Components/News";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let pageSize = 3;
  return (
      <BrowserRouter>
      <Header2/>
    <Routes>
      <Route exact path="/" element={<News key="General" nkey="General" pageSize={pageSize}country = "in" category="general"/>}/>
      <Route exact path="/health" element={<News key="Health" nkey="Health" pageSize={pageSize} country = "in" category="health"/>}/>
      <Route exact path="/science" element={<News key="Science" nkey="Science" pageSize={pageSize} country = "in" category="science"/>}/>
      <Route exact path="/technology" element={<News key="Technology" nkey="Technology" pageSize={pageSize} country = "in" category="technology"/>}/>
      <Route exact path="/business" element={<News key="Business" nkey="Business" pageSize={pageSize} country = "in" category="business"/>}/>
      <Route exact path="/sports" element={<News key="Sports" nkey="Sports" pageSize={pageSize} country = "in" category="sports"/>}/>
      <Route exact path="/entertainment" element={<News key="Entertainment" nkey="Entertainment" pageSize={pageSize} country = "in" category="entertainment"/>}/>
    </Routes>
    {/* <Header/> */}
  </BrowserRouter>
  
  );
}

export default App;
