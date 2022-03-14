import { useFHIRSearch } from "@flexpa/login";
import { Procedure } from 'fhir/r4';
import { ProcedureCard } from "./ProcedureCard";
import './ProcedureList.css';

export function ProcedureList({ state }: { state: any; }) {
  const options = {
    baseURL: state.gatewayUrl,
    authorization: state.flexpaJwt!,
    query: { limit: '5', offset: '0' } // TODO - Limit doesn't affect the result??
  };
  const { data, error } = useFHIRSearch<Procedure>('Procedure', options);

  console.log("data", data);
  return (
    <div>
      <h1 className="procedure-list-title">Procedures</h1>
      <div>
        {data && data.map(procedure => {
          return <ProcedureCard key={procedure.id} procedure={procedure} />;
        })}
      </div>
    </div>);
}
