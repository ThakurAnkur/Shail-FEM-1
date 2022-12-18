import { DotList } from './DotList';
import { Step1FormContainer } from './Step1FormContainer';

export function Container () {
    return (
        <div className='container'>
            <DotList selected={1} />
            <Step1FormContainer />
        </div>
    );
}
