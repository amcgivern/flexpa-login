import './App.css';
import { FlexpaLogin } from "@flexpa/login"
import { ProcedureContainer } from './ProcedureContainer';

function App() {
  return (
    <div className="App">
      <FlexpaLogin sandbox>
        <ProcedureContainer />
      </FlexpaLogin>
    </div>
  );
}

export default App;
