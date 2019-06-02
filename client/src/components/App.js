import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const streamList = () =>{
    return(
        <div>
            Stream List(landing)
            <Link to="/streams/show">Show stream page</Link>
            <Link to='/streams/new'>New stream page</Link>
            <Link to='/streams/edit'>Edit stream page</Link>
            <Link to='/streams/delete'>Delete stream page</Link>
        </div>
    )
}

const showStream = () => {
    return (
        <div>
            Stream Show
            <Link to='/'>Back home</Link>
        </div>
    )
}

const newStream = () => {
    return (
        <div>
            Create new stream
            <Link to='/'>Back home</Link>
        </div>
    )
}

const editStream = () => {
    return (
        <div>
            edit stream
            <Link to='/'>Back home</Link>
        </div>
    )
}

const deleteStream = () => {
    return (
        <div>
            delete stream
            <Link to='/'>Back home</Link>
        </div>
    )
}

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