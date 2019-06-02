import React from 'react';
import { Link } from 'react-router-dom';

const NewStream = () => {
    return (
        <div>
            Create new stream
            <Link to='/'>Back home</Link>
        </div>
    );
};

export default NewStream;