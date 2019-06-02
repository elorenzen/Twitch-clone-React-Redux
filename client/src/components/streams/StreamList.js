import React from 'react';
import { Link } from 'react-router-dom';

const StreamList = () =>{
    return(
        <div>
            Stream List(landing)
            <Link to="/streams/show">Show stream page</Link>
            <Link to='/streams/new'>New stream page</Link>
            <Link to='/streams/edit'>Edit stream page</Link>
            <Link to='/streams/delete'>Delete stream page</Link>
        </div>
    );
};

export default StreamList;