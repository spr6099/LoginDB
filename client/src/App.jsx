import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <div>

     <Router>
      <Routes>
        <Route exact path="/" element={<Users/>}> </Route>
        <Route exact path="/create" element={<CreateUser/>}></Route>
        <Route exact path="/update" element={<UpdateUser/>}></Route>
        
      </Routes>
      </Router> 

    </div>
    )
}

export default App;
