import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // .init is promise that starts loading data, then moves to .then function after loading
            window.gapi.client.init({
                clientId: '664535234526-6fd1t1qtd81tkjts72d6c163t4bhu3bf.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // sets state of isSignedIn with boolean value according to Google's API isSignedIn property
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                // listens for change in boolean value of isSignedIn authorization
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    // Creates real-time rendering change according to isSignedIn value
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signOut();
        } else {
            this.props.signIn();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null || this.state.isSignedIn === false) {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Login
                </button >
            )   
        } else if(this.state.isSignedIn) {
            return(
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Logout
                </button >
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    };
};

export default connect(null, { signIn, signOut })(GoogleAuth);