import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { ListArea } from "./components/ListArea";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col mt-5 p-5 text-center fw-bold "> <h1>Daily Task Manager</h1></div>
        </div>

        {/* <!-- FORM AREA --> */}
        <Form />
        
        {/* <!-- ListArea --> */}
       <ListArea />

        <h6>
          Total Time Allocated <span>0</span> hours
        </h6>
      </div>
    </div>
  );
}

export default App;
