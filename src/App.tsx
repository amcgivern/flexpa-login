import './App.css';
import { FlexpaLogin, useFHIRSearch, useFlexpaConfig } from "@flexpa/login"
import { Procedure } from 'fhir/r4';
 
function App() {


  return (
    <div className="App">
      <FlexpaLogin sandbox>
          <ProcedureContainer/>
        </FlexpaLogin> 
    </div>
  );
}

function ProcedureContainer () {
  const { state } = useFlexpaConfig();
  
  if (!state.flexpaJwt) {
    return (<div>ERROR</div>);
  }

  return (
    <ProcedureList state={state}/>
  )
}

function ProcedureList ({ state } : {state:any}) {// TODO - this state shouldn't be any type
  const options = {
    baseURL: 'https://api.sandbox.flexpa.com/', // state.gatewayUrl
    authorization: state.flexpaJwt!,
    query: { limit: '10',  offset: '5' }
  }
  const { data, error } = useFHIRSearch<Procedure>('Procedure', options);
  
  console.log("data", data);
  return (
    <div>
    <div>PROCEDURES</div>
    <div>
      {data && data.map(procedure  => {
        return <div key={procedure.id}> {procedure.id}</div>
      })}
    </div>
  </div>)
}
export default App;
