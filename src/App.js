import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import Form from "./Components/Form";
import {HashRouter,Route,Routes} from "react-router-dom"
const App = () => {

  return (
    <ContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Form/>}/>
        </Routes>
      </HashRouter>
    </ContextProvider>
  );
};
export default App;
