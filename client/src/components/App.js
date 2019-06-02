import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Landing = () =>{
    return(
        <div>
            Landing Page
            <Link to="/pagetwo">See page two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            Page two
            <Link to='/'>Back home</Link>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path='/pagetwo' component={PageTwo} />
            </BrowserRouter>
        </div>
    )
}

export default App;