// Packages
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import resume from '../data/BobbyQuilacioResume.pdf';

export const ResumePage: FunctionComponent = () => {

    return (
        <div>
            <Link to={resume} target="_blank" download="BobbyQuilacioResume.pdf">Download</Link>
        </div>
    );
}