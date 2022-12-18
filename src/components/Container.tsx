import { DotList } from './DotList';
import { FormContainer } from './FormContainer';

export function Container () {
    return (
        <div className='container'>
            <DotList selected={1} />
            <FormContainer />
        </div>
    );
}
