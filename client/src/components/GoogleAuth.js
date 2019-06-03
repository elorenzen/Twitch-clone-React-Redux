import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // .init is promise that starts loading data, then moves to .then function after loading
            window.gapi.client.init({
                clientId: '664535234526-6fd1t1qtd81tkjts72d6c163t4bhu3bf.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // Passes boolean value of Google API user sign in to onAuthChange function
                this.onAuthChange(this.auth.isSignedIn.get())
                // listens for change in boolean value of isSignedIn authorization
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    // Creates real-time rendering change according to isSignedIn value
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null || this.props.isSignedIn === false) {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Login
                </button >
            )   
        } else if(this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);