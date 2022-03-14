import { Procedure } from 'fhir/r4';
import './ProcedureCard.css';

export function ProcedureCard({ procedure }: { procedure: Procedure; }) {
    console.log("prod", procedure);
    return (
        <div className='procedure-card'>
            <div>
                <div className='field-label'>
                    Type
                </div>
                <div className='field-value'>
                    {procedure.resourceType}
                </div>
            </div>
            <div>
                <div className='field-label'>
                    Status
                </div>
                <div className='field-value'>
                    {procedure.status}
                </div>
            </div>
            {procedure.performedPeriod &&
                <div>
                    <div className='field-label'>
                        Performed
                    </div>
                    <div className='field-value'>
                        {procedure.performedPeriod.start} - {procedure.performedPeriod.end}
                    </div>
                </div>
            }
            {procedure.code?.text &&
                <div>
                    <div className='field-label'>
                        Code
                    </div>
                    <div className='field-value'>
                        {procedure.code?.text}
                    </div>

                </div>
            }

        </div>
    );
}
