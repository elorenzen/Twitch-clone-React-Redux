import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={streamList} />
                <Route path='/streams/show' component={showStream} />
                <Route path='/streams/new' component={newStream} />
                <Route path='/streams/edit' component={editStream} />
                <Route path='/streams/delete' component={deleteStream} />
            </BrowserRouter>
        </div>
    )
}

export default App;