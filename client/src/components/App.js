import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DeleteStream from '../components/streams/DeleteStream';
import EditStream from '../components/streams/EditStream';
import NewStream from '../components/streams/NewStream';
import ShowStream from '../components/streams/ShowStream';
import StreamList from '../components/streams/StreamList';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={StreamList} />
                <Route path='/streams/show' component={ShowStream} />
                <Route path='/streams/new' component={NewStream} />
                <Route path='/streams/edit' component={EditStream} />
                <Route path='/streams/delete' component={DeleteStream} />
            </BrowserRouter>
        </div>
    )
}

export default App;